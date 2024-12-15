(ns recipe-app.routes
  (:require [compojure.core :refer [defroutes GET]]
            [ring.util.response :refer [response]]
            [clj-http.client :as http]
            [envvar.core :refer [env]]))

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
                    :message (.getMessage e)}}))))))
