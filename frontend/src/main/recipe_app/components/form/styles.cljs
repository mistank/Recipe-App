(ns recipe-app.components.form.styles
  (:require [cljss.core :refer-macros [defstyles]]))

(defstyles form-style []
  {:text-align "center"
   :margin "20px"})

(defstyles input-style []
  {:padding "10px"
   :width "60%"
   :margin-right "10px"})

(defstyles button-style []
  {:padding "10px 20px"
   :background-color "#007bff"
   :color "white"
   :border "none"
   :cursor "pointer"})