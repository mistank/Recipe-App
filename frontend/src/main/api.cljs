(ns api
  (:require [state :refer [app-state]]))

(defn upload-image-and-detect [file]
  (swap! app-state assoc :loading true :error nil)
  
  (let [form-data (js/FormData.)
        url "http://localhost:3000/api/detect-food"]
    
    (.append form-data "image" file)
    
    (-> (js/fetch url 
          (clj->js {:method "POST"
                    :body form-data}))
        (.then #(.json %))
        (.then (fn [response]
                 (let [data (js->clj response :keywordize-keys true)]
                   (if (:success data)
                     (do
                       (swap! app-state assoc 
                              :detected-food (get-in data [:best_detection :food])
                              :recipes (:meals data)
                              :loading false
                              :error nil)
                       (js/console.log "Detection successful:" (clj->js data)))
                     (do
                       (swap! app-state assoc 
                              :loading false
                              :error (or (:error data) "Detection failed"))
                       (js/console.error "Detection failed:" (clj->js data)))))))
        (.catch (fn [error]
                  (swap! app-state assoc 
                         :loading false
                         :error (str "Network error: " (.-message error)))
                  (js/console.error "Error:" error))))))