(ns recipe-app.routes
  (:require [compojure.core :refer [defroutes GET POST]]
            [ring.util.response :refer [response]]
            [clj-http.client :as http]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [envvar.core :refer [env]]
            [recipe-app.food-detection :refer [detect-objects]]))

(defn handle-food-detection [image-path]
  (if (nil? image-path)
    {:status 400
     :headers {"Content-Type" "application/json"}
     :body {:error "Image path is missing"}}
    (try
      (let [model-path "backend/src/resources/models/ssd_mobilenet_v2_fpnlite_320x320_coco17_tpu-8/saved_model/saved_model.pb"
            detections (detect-objects model-path image-path)]
        {:status 200
         :headers {"Content-Type" "application/json"}
         :body {:detections detections}})
      (catch Exception e
        {:status 500
         :headers {"Content-Type" "application/json"}
         :body {:error "An error occurred while detecting food"
                :message (.getMessage e)}}))))

(defroutes app-routes
  (GET "/hello" []
    (response "Hello, World!"))

  (GET "/api/recipes" {params :params}
    (let [ingredients (get params "ingredients")
          api-key (:meal-api-key @env)
          url (str "https://www.themealdb.com/api/json/v2/" api-key "/filter.php?i=" ingredients)]
      (if (or (nil? ingredients) (empty? ingredients))
        {:status 400
         :headers {"Content-Type" "application/json"}
         :body {:error "Missing or empty 'ingredients' query parameter"}}
        (try
          (let [api-response (http/get url {:as :json})]
            (if (= 200 (:status api-response))
              {:status 200
               :headers {"Content-Type" "application/json"}
               :body (:body api-response)}
              {:status 500
               :headers {"Content-Type" "application/json"}
               :body {:error "Failed to fetch recipes"
                      :status (:status api-response)}}))
          (catch Exception e
            {:status 500
             :headers {"Content-Type" "application/json"}
             :body {:error "An error occurred while fetching recipes"
                    :message (.getMessage e)}})))))

  (POST "/api/detect-food" {body :body}
    (println "Body:" body)
    (let [image-path (:image body)]
      (handle-food-detection image-path))))

(def app
  (-> app-routes
      (wrap-json-body {:keywords? true})
      wrap-json-response))