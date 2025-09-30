(ns recipe-app.components.list.list
  (:require [reagent.core :as r]
            [state :refer [app-state]]
            [recipe-app.components.recipe.recipe :refer [recipe]]
            [recipe-app.components.list.styles :refer [list-container-style
                                                        list-style
                                                        no-recipes-style]]))

(defn recipe-list []
  (let [{:keys [recipes detected-food loading]} @app-state]
    [:div {:style list-container-style}
     
     (when detected-food
       [:h2 {:style {:text-align "center" :margin "20px 0"}}
        "Recipes with " detected-food])
     
     (cond
       loading
       [:div {:style {:text-align "center" :padding "40px"}}
        [:p "Loading recipes..."]]
       
       (seq recipes)
       [:div {:style list-style}
        (for [recipe-data recipes]
          ^{:key (:idMeal recipe-data)}
          [recipe recipe-data])]
       
       detected-food
       [:div {:style no-recipes-style}
        [:p "No recipes found for " detected-food]])]))