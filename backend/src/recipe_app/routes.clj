(ns recipe-app.routes
  (:require [compojure.core :refer [defroutes GET]]
            [ring.util.response :refer [response]]
            [dotenv :refer [env app-env]]
            [clj-http.client :as http]))

(println (System/getenv "MEAL_API_key"))

;; Define the API route
(defroutes app-routes
  
  (GET "/hello" []
    (response "Hello, World!"))
  
  ;; API route to fetch rsecipes
  (GET "/api/recipes/" [ingredients]
  (let [api-key (env :MEAL_API_KEY)
        url (str "https://www.themealdb.com/api/json/v2/9973533/filter.php?i=chicken_breast,garlic")]
    (try
      (println "\nIngredients:" ingredients)
      (let [api-response (http/get url {:as :json})]
        (println "\nAPI response body:" (:body api-response))
        (println "")
        (if (= 200 (:status api-response))
          {:status 200
           :headers {"Content-Type" "application/json"}
           :body (:body api-response)}
          {:status 500
           :headers {"Content-Type" "application/json"}
           :body {:error "Failed to fetch recipes"
                  :status (:status api-response)}}))
      (catch Exception e
        (println "Error occurred:" (.getMessage e))
        {:status 500
         :headers {"Content-Type" "application/json"}
         :body {:error "An error occurred while fetching recipes"
                :message (.getMessage e)}})))))


  ;; Handle 404 for any other routes
;;   (GET "*" [] (response {:error "Route not found"}))
  
