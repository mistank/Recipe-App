(ns api
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [state :refer [app-state]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn fetch-recipes [query]
  (go
    (let [response (<! (http/get (str "http://localhost:3000/api/recipes?query=" query)
                                 {:with-credentials? false}))]
      (if (= 200 (:status response))
        (swap! app-state assoc :recipes (:body response))
        (js/console.error "Failed to fetch recipes" (:status response))))))
