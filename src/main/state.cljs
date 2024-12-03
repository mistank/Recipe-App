(ns state
  (:require [reagent.core :as r]))

;; Global application state
(def app-state
  (r/atom {:ingredients []  ;; List of ingredients entered by the user
           :recipes []       ;; List of recipes fetched from the API
           :loading? false   ;; Boolean to show/hide a loading indicator
           :error nil}))     ;; Error message, if any
