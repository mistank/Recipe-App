(ns recipe-app.core
  (:require [reagent.core :as r]
            ["react-dom/client" :as rdom]))

;; Main application component
(defn app-root []
  [:div
   [:h1 "Recipe App"]
   [:p "Welcome to the modernized Recipe App!"]])

;; Initialization function
(defn init []
  (let [root (rdom/createRoot (.getElementById js/document "app"))]
    (.render root (r/as-element [app-root]))))
