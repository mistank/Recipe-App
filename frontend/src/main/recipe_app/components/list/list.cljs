(ns recipe-app.components.list.list
  (:require [reagent.core :as r]
            [state :refer [app-state]]
            [recipe-app.components.recipe.recipe :refer [recipe]]
            [recipe-app.components.list.styles :refer [list-style]]))

(defn recipe-list []
  (let [recipes (:recipes @app-state)]
    (if (seq recipes)
      [:div {:style list-style}
       (for [recipe-data recipes]
         ^{:key (:idMeal recipe-data)} 
         [recipe recipe-data])] 
      [:div "No recipes found."])))
