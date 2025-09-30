(ns recipe-app.components.upload.styles)

(def upload-container-style
  {:text-align "center"
   :margin "30px auto"
   :max-width "600px"
   :padding "20px"})

(def upload-area-style
  {:border "2px dashed #007bff"
   :border-radius "8px"
   :padding "40px"
   :margin "20px 0"
   :cursor "pointer"
   :background-color "#f8f9fa"
   :transition "all 0.3s"
   :min-height "200px"
   :display "flex"
   :align-items "center"
   :justify-content "center"})

(def file-input-style
  {:display "none"})

(def upload-button-style
  {:padding "12px 30px"
   :background-color "#28a745"
   :color "white"
   :border "none"
   :border-radius "6px"
   :cursor "pointer"
   :font-size "16px"
   :margin-top "20px"
   :transition "background-color 0.3s"})

(def preview-container-style
  {:display "flex"
   :flex-direction "column"
   :align-items "center"
   :gap "10px"})

(def preview-image-style
  {:max-width "300px"
   :max-height "300px"
   :border-radius "8px"
   :box-shadow "0 4px 6px rgba(0,0,0,0.1)"})

(def detection-result-style
  {:margin-top "20px"
   :padding "15px"
   :background-color "#d4edda"
   :border "1px solid #c3e6cb"
   :border-radius "6px"
   :color "#155724"})