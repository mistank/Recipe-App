(ns recipe-app.routes
  (:require [compojure.core :refer [defroutes GET]]
            [ring.util.response :refer [response]]
            [dotenv :refer [env app-env]]
            [clj-http.client :as http]))

;; Define the API route
(defroutes app-routes
  ;; API route to fetch recipes
  (GET "/api/recipes" []
    (let [api-key (env :MEAL_API_KEY) ; Fetch the API key from the environment variables
          url (str "https://www.themealdb.com/api/json/v2/" api-key "/filter.php?i=chicken_breast,garlic,salt")
          response (http/get url {:as :json})] ; Send GET request to the API
      (if (= 200 (:status response))
        ;; Return the JSON response if successful
        (response (:body response))
        ;; Handle errors gracefully
        (response {:error "Failed to fetch recipes"
                   :status (:status response)}))))
  ;; Handle 404 for any other routes
  (GET "*" [] (response {:error "Route not found"})))
