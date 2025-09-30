(ns recipe-app.components.list.styles)

(def list-container-style
  {:padding "20px"})

(def list-style
  {:display "grid"
   :grid-template-columns "repeat(auto-fill, minmax(250px, 1fr))"
   :gap "20px"
   :padding "20px"
   :max-width "1400px"
   :margin "0 auto"})

(def no-recipes-style
  {:text-align "center"
   :padding "40px"
   :color "#666"
   :font-size "18px"})
