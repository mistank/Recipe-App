(defproject recipe-app "0.1.0-SNAPSHOT"
  :description "Backend for Recipe Generator"
  :url "http://localhost:3000/api"
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [ring "1.9.6"]
                 [compojure "1.6.2"]
                 [lynxeyes/dotenv "1.1.0"]
                 [clj-http "3.12.3"]
                 [ring/ring-json "0.5.1"]]
  :main ^:skip-aot recipe-app.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})