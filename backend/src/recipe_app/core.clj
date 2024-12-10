(ns recipe-app.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [recipe-app.routes :refer [app-routes]]
            [ring.middleware.json :refer [wrap-json-response]]))

;; Middleware
(def app-with-middleware
  (-> app-routes
      wrap-json-response)) ;; Ensure JSON responses

;; Entry point to start the server
(defn -main []
  (run-jetty app-with-middleware {:port 3000 :join? false}))
