(ns recipe-app.components.recipe.recipe
  (:require [recipe-app.components.recipe.styles :refer [recipe-card-style
                                                          recipe-image-style
                                                          recipe-title-style
                                                          recipe-link-style]]))

(defn recipe [recipe-data]
  (let [{:keys [strMeal strMealThumb idMeal]} recipe-data]
    (if (and strMeal strMealThumb idMeal)
      [:div {:style recipe-card-style}
       [:img {:src strMealThumb
              :alt strMeal
              :style recipe-image-style}]
       [:h3 {:style recipe-title-style} strMeal]
       [:a {:href (str "https://www.themealdb.com/meal/" idMeal)
            :target "_blank"
            :rel "noopener noreferrer"
            :style recipe-link-style}
        "View Recipe"]]
      [:div [:p "Invalid recipe data"]])))