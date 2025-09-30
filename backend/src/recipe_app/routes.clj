(ns recipe-app.routes
  (:require [compojure.core :refer [defroutes GET POST OPTIONS]]
            [ring.util.response :refer [response]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.multipart-params :refer [wrap-multipart-params]]
            [clj-http.client :as http]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [recipe-app.food-detection :refer [detect-objects-safe format-detection-results get-model-status is-model-loaded?]]
            [clojure.data.json :as json]
            [clojure.java.io :as io]
            [clojure.string :as str])
  (:import [java.io File]
           [java.util Base64]))

(defn json-response [data status]
  {:status status
   :headers {"Content-Type" "application/json"
             "Access-Control-Allow-Origin" "*"
             "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS"
             "Access-Control-Allow-Headers" "Content-Type, Authorization"}
   :body data})

(defn success-response [data & [message]]
  (json-response (merge {:success true
                         :timestamp (System/currentTimeMillis)}
                        (when message {:message message})
                        data) 
                 200))

(defn error-response [message status]
  (json-response {:success false
                  :error message
                  :timestamp (System/currentTimeMillis)}
                 status))

(defn save-base64-image [base64-data filename]
  (try
    (let [upload-dir "uploads"
          upload-path (str upload-dir "/" filename)]
      (.mkdirs (File. upload-dir))
      (let [clean-base64 (if (str/includes? base64-data ",")
                           (second (str/split base64-data #","))
                           base64-data)
            decoder (Base64/getDecoder)
            image-bytes (.decode decoder clean-base64)]
        (io/copy image-bytes (io/file upload-path))
        (println "Image saved to:" upload-path)
        upload-path))
    (catch Exception e
      (println "Error saving image:" (.getMessage e))
      nil)))

(defn save-multipart-image [file filename]
  (try
    (let [upload-dir "uploads"
          upload-path (str upload-dir "/" filename)]
      (.mkdirs (File. upload-dir))
      (io/copy (:tempfile file) (io/file upload-path))
      (println "Multipart image saved to:" upload-path)
      upload-path)
    (catch Exception e
      (println "Error saving multipart image:" (.getMessage e))
      nil)))

(defn fetch-mealdb-recipes [ingredient]
  (try
    (println "Fetching MealDB recipes for:" ingredient)
    (let [url (str "https://www.themealdb.com/api/json/v1/1/filter.php?i=" 
                   (java.net.URLEncoder/encode ingredient "UTF-8"))
          response (http/get url {:accept :json
                                  :socket-timeout 10000
                                  :conn-timeout 5000})]
      (if (= 200 (:status response))
        (let [body (json/read-str (:body response) :key-fn keyword)
              meals (:meals body)]
          (if meals
            (do
              (println "Found" (count meals) "MealDB recipes")
              meals)
            (do
              (println "No MealDB recipes found")
              [])))
        (do
          (println "MealDB API error, status:" (:status response))
          [])))
    (catch Exception e
      (println "Error calling MealDB API:" (.getMessage e))
      [])))

(defn handle-food-detection [image-path]
  (println "=== HANDLING FOOD DETECTION ===")
  (println "Image path:" image-path)
  (if (nil? image-path)
    (error-response "Image path is missing" 400)
    (try
      (if (.exists (io/file image-path))
        (let [detections (detect-objects-safe image-path)
              formatted-detections (format-detection-results detections)]
          (println "Detections found:" (count detections))
          (doseq [detection detections]
            (println (format "  • %s: %s" (:name detection) (:confidence detection))))
          (if (seq detections)
            (let [best-detection (first detections)
                  detected-food (:name best-detection)
                  mealdb-recipes (fetch-mealdb-recipes detected-food)]
              (println "MealDB ingredient:" detected-food)
              (println "MealDB recipes found:" (count mealdb-recipes))
              (success-response {:detections formatted-detections
                                 :best_detection {:food detected-food
                                                 :confidence (:confidence best-detection)
                                                 :method (:detection_method (first formatted-detections))}
                                 :meals mealdb-recipes
                                 :total_recipes (count mealdb-recipes)
                                 :ingredient_used detected-food}
                                (str "Detected " detected-food " with " (count mealdb-recipes) " recipes")))
            (success-response {:detections []
                               :meals []
                               :total_recipes 0}
                              "No food detected")))
        (error-response (str "Image file not found: " image-path) 404))
      (catch Exception e
        (println "Error in handle-food-detection:" (.getMessage e))
        (.printStackTrace e)
        (error-response "Internal server error during food detection" 500)))))

(defroutes cors-routes
  (OPTIONS "*" []
    {:status 200
     :headers {"Access-Control-Allow-Origin" "*"
               "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS"
               "Access-Control-Allow-Headers" "Content-Type, Authorization"}
     :body ""}))

(defroutes main-routes
  (GET "/hello" []
    (response "Hello, World! Food Detection API Ready"))
  
  (GET "/api/recipes" {params :params}
    (let [ingredients (get params "ingredients")]
      (println "Legacy recipes endpoint called with ingredients:" ingredients)
      (if (or (nil? ingredients) (empty? ingredients))
        (error-response "Missing or empty 'ingredients' query parameter" 400)
        (try
          (let [ingredient-list (str/split ingredients #",")
                first-ingredient (str/trim (first ingredient-list))
                mealdb-recipes (fetch-mealdb-recipes first-ingredient)]
            (success-response {:meals mealdb-recipes}
                              (str "Found " (count mealdb-recipes) " recipes")))
          (catch Exception e
            (println "Error in legacy recipes endpoint:" (.getMessage e))
            (error-response "Failed to fetch recipes" 500))))))
  
  (POST "/api/detect-food" {body :body params :params multipart-params :multipart-params}
    (println "=== DETECT FOOD ENDPOINT ===")
    (println "Body:" body)
    (println "Multipart params:" (keys multipart-params))
    (try
      (cond
        (get multipart-params "image")
        (let [image-file (get multipart-params "image")
              original-filename (:filename image-file)
              filename (if (and original-filename (not (empty? original-filename)))
                         original-filename
                         (str "upload-" (System/currentTimeMillis) ".jpg"))]
          (println "Processing multipart image")
          (println "  Original filename:" original-filename)
          (println "  Saving as:" filename)
          (if-let [image-path (save-multipart-image image-file filename)]
            (handle-food-detection image-path)
            (error-response "Failed to save uploaded image" 500)))
        
        (and body (:image body) (string? (:image body)))
        (let [base64-image (:image body)
              filename (:filename body)]
          (println "Processing base64 image")
          (println "  Provided filename:" filename)
          (if (nil? filename)
            (error-response "Filename is required for base64 uploads (needed for food detection)" 400)
            (if-let [image-path (save-base64-image base64-image filename)]
              (handle-food-detection image-path)
              (error-response "Failed to save base64 image" 500))))
        
        :else
        (error-response "No image provided. Use multipart form-data with 'image' field or JSON with 'image' (base64) and 'filename' fields" 400))
      (catch Exception e
        (println "Error in detect-food endpoint:" (.getMessage e))
        (.printStackTrace e)
        (error-response "Internal server error" 500))))
  
  (GET "/model-info" []
    (try
      (success-response {:detection_method "filename-based"
                         :description "Food detection based on image filename"
                         :examples ["apple.jpg -> apple"
                                   "banana_photo.png -> banana"
                                   "my_pizza_123.jpg -> pizza"]
                         :status "ready"})
      (catch Exception e
        (println "Error in model-info endpoint:" (.getMessage e))
        (error-response "Failed to get model info" 500))))
  
  (GET "/api-info" []
    (success-response {:name "Recipe App - Filename-Based Food Detection + MealDB"
                       :endpoints [{:method "GET" 
                                   :path "/hello" 
                                   :description "Health check endpoint"}
                                   {:method "GET" 
                                   :path "/api/recipes" 
                                   :description "Get recipes by ingredient name"
                                   :query_params {:ingredients "ingredient1,ingredient2"}}
                                   {:method "POST" 
                                   :path "/api/detect-food" 
                                   :description "Upload image (multipart form-data) - detects food from filename"
                                   :request_format "multipart/form-data"
                                   :fields {:image "File with descriptive filename (e.g., apple.jpg, banana.png)"}}
                                   {:method "POST" 
                                   :path "/api/detect-food" 
                                   :description "Alternative: Upload image as base64"
                                   :request_format "application/json"
                                   :body {:image "base64 encoded image"
                                          :filename "Required - filename for detection (e.g., apple.jpg)"}}
                                   {:method "GET" 
                                   :path "/model-info" 
                                   :description "Detection method information"}
                                   {:method "GET" 
                                   :path "/api-info" 
                                   :description "API information and available endpoints"}]
                       :features ["Filename-based detection"
                                 "MealDB Integration"
                                 "Multipart Image Upload"
                                 "Base64 Image Upload"]
                       :detection_logic "Extracts food name from image filename"
                       :important_note "Image filename must contain food name (e.g., apple.jpg, banana_photo.png, my_pizza.jpg)"})))

(def app
  (-> (compojure.core/routes cors-routes main-routes)
      wrap-params
      wrap-multipart-params
      (wrap-json-body {:keywords? true})
      wrap-json-response))