(ns recipe-app.components.recipe.styles)

(def recipe-card-style
  {:background-color "white"
   :border "1px solid #ddd"
   :border-radius "12px"
   :padding "16px"
   :text-align "center"
   :box-shadow "0 4px 6px rgba(0,0,0,0.1)"
   :transition "transform 0.2s, box-shadow 0.2s"
   :cursor "pointer"})

(def recipe-image-style
  {:width "100%"
   :height "200px"
   :object-fit "cover"
   :border-radius "8px"
   :margin-bottom "12px"})

(def recipe-title-style
  {:font-size "1.1em"
   :margin "12px 0"
   :color "#333"
   :min-height "50px"})

(def recipe-link-style
  {:display "inline-block"
   :padding "8px 16px"
   :background-color "#007bff"
   :color "white"
   :text-decoration "none"
   :border-radius "6px"
   :transition "background-color 0.3s"})