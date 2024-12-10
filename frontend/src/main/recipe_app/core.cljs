(ns recipe-app.core
  (:require [reagent.core :as r]
            ["react-dom/client" :as rdom]
            [recipe-app.components.header.header :refer [header]]
            [recipe-app.components.form.form :refer [form]]
            [recipe-app.components.list.list :refer [recipe-list]]
            [api :refer [fetch-recipes]]
            ))

(defn app-root []
  [:div
   [header]
   [form]
   [:button {:on-click fetch-recipes
             :style {:margin "20px"
                     :padding "10px 20px"
                     :background-color "#28a745"
                     :color "white"
                     :border "none"
                     :cursor "pointer"}}
    "Find Recipes"]
   [recipe-list]
   ])

(defn init []
  (let [root (rdom/createRoot (.getElementById js/document "app"))]
    (.render root (r/as-element [app-root]))))
