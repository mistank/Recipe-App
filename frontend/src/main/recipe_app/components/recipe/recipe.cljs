
(ns recipe-app.components.recipe.recipe
  (:require [recipe-app.components.recipe.styles :refer [recipe-card-style recipe-image-style recipe-title-style]]
            [reagent.core :as r]))

(defn recipe 
  
  ([] [:div "No recipe data provided glupane."])
  ([recipe-data]
   (js/console.log "Recipe Data:" (clj->js recipe-data))
  (let [{:keys [strMeal strMealThumb idMeal]} recipe-data]
    (println "strMeal: " strMeal)
    (println "strMealThumb: " strMealThumb)
    (println "idMeal: " idMeal)
    (if (and strMeal strMealThumb idMeal)
      [:div {:style recipe-card-style}
       [:img 
        {:src strMealThumb
         :alt strMeal
         :style recipe-image-style}
        ]
       [:h3 {:className recipe-title-style} strMeal]
       [:a {:href (str "https://www.themealdb.com/meal/" idMeal)
            :target "_blank"
            :rel "noopener noreferrer"}
        "View Recipe"]
       ]
      [:div
       [:p "Invalid recipe data provided."]]))
    ) 
  )
