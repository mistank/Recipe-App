(ns recipe-app.core
  (:require [reagent.core :as r]
            ["react-dom/client" :as rdom]
            [recipe-app.components.header.header :refer [header]]
            [recipe-app.components.upload.upload :refer [upload-component]]
            [recipe-app.components.list.list :refer [recipe-list]]))

(defn app-root []
  [:div
   [header]
   [upload-component]
   [recipe-list]])

(defn init []
  (let [root (rdom/createRoot (.getElementById js/document "app"))]
    (.render root (r/as-element [app-root]))))