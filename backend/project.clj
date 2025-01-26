(defproject recipe-app "0.1.0-SNAPSHOT"
  :description "Backend for Recipe Generator"
  :url "http://localhost:3000/api"
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [ring "1.9.6"]
                 [compojure "1.6.2"]
                 [clj-http "3.12.3"]
                 [ring/ring-json "0.5.1"]
                 [envvar "1.1.2"]
                 [org.tensorflow/tensorflow-core-api "1.0.0"]
                 [org.tensorflow/tensorflow-core-native "1.0.0"]
                 [org.tensorflow/tensorflow-core-platform "1.0.0" ]
                 [cheshire "5.10.0"]
                 ]
  
    :plugins [[lein-auto "0.1.3"]]
  :main ^:skip-aot recipe-app.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})