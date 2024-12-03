(ns api
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [state :refer [app-state]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn fetch-recipes []
  (let [ingredients (clojure.string/join "," (:ingredients @app-state))]
    (go
      (let [response (<! (http/get "https://api.edamam.com/search"
                                   {:with-credentials? false
                                    :query-params {"q" ingredients
                                                   "app_id" "your-app-id"
                                                   "app_key" "your-app-key"}}))]
        (if (= 200 (:status response))
          (swap! app-state assoc :recipes (:hits (:body response)))
          (js/console.error "Failed to fetch recipes" (:status response)))))))
