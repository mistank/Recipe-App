(ns recipe-app.components.header.header
  (:require [recipe-app.components.header.styles :refer [header-style]]))

(defn header []
  [:header {:style header-style}
   [:h1 "Recipe Finder"]
   [:p "Upload a food image and discover delicious recipes!"]])