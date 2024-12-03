(ns recipe-app.components.list.list
  (:require [state :refer [app-state]]
            [recipe-app.components.list.styles :refer [list-style recipe-item-style]]
            [clojure.string :as clojure.string]
            ))

(defn recipe-list []
  (let [recipes (:recipes @app-state)]
    [:div {:style list-style}
     (if (seq recipes)
       [:ul
        (for [recipe recipes]
          ^{:key (:id recipe)} [:li {:style recipe-item-style}
                                [:h3 (:name recipe)]
                                [:p "Ingredients: " (clojure.string/join ", " (:ingredients recipe))]])]
       [:p "No recipes found. Add ingredients and click 'Find Recipes'!"])]))
