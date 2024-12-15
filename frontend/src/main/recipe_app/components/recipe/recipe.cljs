(ns recipe-app.components.recipe.recipe
  (:require [recipe-app.components.recipe.styles :refer [recipe-card-style recipe-image-style recipe-title-style]]
            [reagent.core :as r]))

(defn recipe [recipe-data]
  (let [{:keys [strMeal strMealThumb idMeal]} recipe-data]
    [:div {:className (recipe-card-style)}
     [:img {:src strMealThumb
            :alt strMeal
            :className (recipe-image-style)}]
     [:h3 {:className (recipe-title-style)} strMeal]
     [:a {:href (str "https://www.themealdb.com/meal/" idMeal)
          :target "_blank"
          :rel "noopener noreferrer"}
      "View Recipe"]]))
