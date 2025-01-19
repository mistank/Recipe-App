(ns api
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [clojure.string :as str] 
            [state :refer [app-state]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn fetch-recipes []
  (let [ingredients (:ingredients @app-state)]
    (if (empty? ingredients) 
      (js/console.error "No ingredients provided!") 
      (let [formatted-ingredients (str/join "," (map #(str/replace % " " "_") ingredients))
            url (str "http://localhost:3000/api/recipes?ingredients=" formatted-ingredients)]
        (go
          (let [response (<! (http/get url {:with-credentials? false}))]
            (if (= 200 (:status response))
              (let [recipes (get-in response [:body :meals])]
                (if recipes
                  (do
                    (swap! app-state assoc :recipes recipes)
                    )
                  (do
                    (js/console.warn "No recipes found for the given ingredients.")
                    (swap! app-state assoc :recipes []))))
              (do
                (js/console.error "Failed to fetch recipes. Status:" (:status response))
                (swap! app-state assoc :recipes [])))))))))
