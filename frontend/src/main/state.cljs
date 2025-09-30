(ns state
  (:require [reagent.core :as r]))

(defonce app-state 
  (r/atom {:uploaded-file nil
           :preview-url nil
           :detected-food nil
           :recipes []
           :loading false
           :error nil}))