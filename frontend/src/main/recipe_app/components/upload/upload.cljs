(ns recipe-app.components.upload.upload
  (:require [reagent.core :as r]
            [state :refer [app-state]]
            [api :refer [upload-image-and-detect]]
            [recipe-app.components.upload.styles :refer [upload-container-style
                                                          upload-area-style
                                                          file-input-style
                                                          upload-button-style
                                                          preview-container-style
                                                          preview-image-style
                                                          detection-result-style]]))

(defn handle-file-select [event]
  (when-let [file (-> event .-target .-files (aget 0))]
    (let [reader (js/FileReader.)]
      (set! (.-onload reader)
            (fn [e]
              (swap! app-state assoc 
                     :uploaded-file file
                     :preview-url (-> e .-target .-result))))
      (.readAsDataURL reader file))))

(defn upload-component []
  (let [file-input-ref (r/atom nil)]
    (fn []
      (let [{:keys [uploaded-file preview-url detected-food loading error]} @app-state]
        [:div {:style upload-container-style}
         
         [:h2 "Upload Food Image"]
         
         ;; Upload Area
         [:div {:style upload-area-style
                :on-click #(when @file-input-ref (.click @file-input-ref))}
          [:input {:type "file"
                   :accept "image/*"
                   :style file-input-style
                   :ref (fn [el] (reset! file-input-ref el))
                   :on-change handle-file-select}]
          
          (if preview-url
            [:div {:style preview-container-style}
             [:img {:src preview-url
                    :alt "Preview"
                    :style preview-image-style}]
             [:p (.-name uploaded-file)]]
            
            [:div
             [:p "Click to select an image"]
             [:p {:style {:font-size "0.9em" :color "#666"}}
              "Image filename should contain food name (e.g., apple.jpg, banana.png)"]])]
         
         ;; Upload Button
         (when uploaded-file
           [:button {:style upload-button-style
                     :disabled loading
                     :on-click #(upload-image-and-detect uploaded-file)}
            (if loading "Detecting..." "Detect Food & Find Recipes")])
         
         ;; Detection Result
         (when detected-food
           [:div {:style detection-result-style}
            [:h3 "Detected: " detected-food]
            [:p "Found " (count (:recipes @app-state)) " recipes"]])
         
         ;; Error Message
         (when error
           [:div {:style {:color "red" :margin-top "10px"}}
            [:p error]])]))))