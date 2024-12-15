(ns recipe-app.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [recipe-app.routes :refer [app-routes]]
            [envvar.core :as envvar :refer [env]]
            [ring.middleware.json :refer [wrap-json-response]]
            [ring.middleware.params :refer [wrap-params]]
            [recipe-app.middleware :refer [wrap-cors]]))


;; Middleware
(def app-with-middleware 
  (-> app-routes ;; Routes
      wrap-json-response ;; JSON response
      wrap-cors       ;; CORS support
      wrap-params))   ;; Query params parsing

(envvar/load-file-variables! "./../.env")

;; Entry point to start the server
(defn -main [] 
  (run-jetty app-with-middleware {:port 3000 :join? false}))
