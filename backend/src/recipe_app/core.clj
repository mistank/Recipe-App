(ns recipe-app.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [recipe-app.routes :refer [app-routes]]
            [envvar.core :as envvar :refer [env]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.middleware.params :refer [wrap-params]]
            [recipe-app.middleware :refer [wrap-cors]]))

;; Middleware
(def app-with-middleware 
  (-> app-routes
      (wrap-json-body {:keywords? true}) ;; Parsira JSON body zahteve
      wrap-json-response                 ;; JSON response
      wrap-cors                          ;; CORS podrška
      wrap-params))                      ;; Parsira query parametre

(envvar/load-file-variables! "./../.env")

(defn -main [] 
  (println "Starting server on port 3000...")
  (run-jetty app-with-middleware {:port 3000 :join? false}))