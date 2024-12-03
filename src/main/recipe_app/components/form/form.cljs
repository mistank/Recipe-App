(ns recipe-app.components.form.form
  (:require [reagent.core :as r]
            [state :refer [app-state]]
            [recipe-app.components.form.styles :refer [form-style input-style button-style]]))

(defn form []
  (let [input (r/atom "")]
    (fn []
      [:div {:className (form-style)}
       [:input {:type "text"
                :placeholder "Enter an ingredient"
                :value @input
                :className (input-style)
                :on-change #(reset! input (-> % .-target .-value))
                :on-key-press #(when (= (.-key %) "Enter")
                                 (swap! app-state update :ingredients conj @input)
                                 (reset! input ""))}]
       [:button {:on-click #(swap! app-state update :ingredients conj @input)
                 :className (button-style)}
        "Add"]
       [:ul
        (for [ingredient (:ingredients @app-state)]
          ^{:key ingredient} [:li ingredient])]])))