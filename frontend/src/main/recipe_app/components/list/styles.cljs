(ns recipe-app.components.list.styles)

(def list-style
  {:display "grid"
    :grid-template-columns "repeat(5, minmax(200px, 1fr))"
   :justify-content "center"
   :gap "20px"
   :overflow "hidden"})

(def recipe-item-style
  {:margin-bottom "10px"})
