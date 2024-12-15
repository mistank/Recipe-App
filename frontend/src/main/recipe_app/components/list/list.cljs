(ns recipe-app.components.list.list
  (:require [reagent.core :as r]
            [state :refer [app-state]]
            [recipe-app.components.recipe.recipe :refer [recipe]]
            [recipe-app.components.list.styles :refer [list-style]]))

(defn recipe-list []
  (let [recipes (:recipes @app-state)]
    (if (seq recipes)
      [:div {:className (list-style)}
       (println recipes)
       (js/console.log "Recipes:" (clj->js (:recipes @app-state)))
       (for [recipe-data recipes]
         (do
           (js/console.log "Recipe Data:" (clj->js recipe-data))
           (if (map? recipe-data)
             ^{:key (:idMeal recipe-data)} [recipe recipe-data]
             [:p "Invalid recipe data"])))]
      [:p "No recipes found. Try searching with different ingredients."])))
