(ns recipe-app.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [recipe-app.routes :refer [app]]
            [envvar.core :as envvar]
            [clojure.java.io :as io])
  (:gen-class))

(try 
  (envvar/load-file-variables! ".env")
  (catch Exception e 
    (println "No .env file found, using system environment")))

(defn create-directories []
  (doseq [dir ["uploads" "test-images"]]
    (let [dir-file (io/file dir)]
      (when-not (.exists dir-file)
        (.mkdirs dir-file)
        (println "Created directory:" dir)))))

(defn -main []
  (println "Starting Recipe App Food Detection Server...")
  (println "Creating necessary directories...")
  (create-directories)
  
  (println "Starting server on port 3000...")
  (run-jetty app {:port 3000 
                  :join? false
                  :max-threads 50}))