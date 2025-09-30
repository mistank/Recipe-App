(ns recipe-app.food-detection
  (:require [clojure.java.io :as io]
            [clojure.string :as str]))

(defn extract-food-from-filename [filename]
  (let [filename-lower (str/lower-case filename)
        without-ext (str/replace filename-lower #"\.(jpg|jpeg|png|gif|bmp|webp)$" "")
        clean-name (-> without-ext
                       (str/replace #"[_\-\d]+" " ")
                       str/trim
                       (str/replace #"\s+" "_"))]
    clean-name))

(defn detect-food-from-image [image-path]
  (if-let [file (io/file image-path)]
    (if (.exists file)
      (let [filename (.getName file)
            food-name (extract-food-from-filename filename)]
        [{:name food-name
          :confidence 1.0
          :detection_method "filename-based"
          :filename filename
          :original_class food-name}])
      [])
    []))

(defn detect-objects-safe [image-path]
  (detect-food-from-image image-path))

(defn format-detection-results [detections]
  (map (fn [detection]
         {:food_item (:name detection "unknown") 
          :detection_method (:detection_method detection "filename-based")
          :filename (:filename detection)})
       detections))

(defn get-model-status []
  "filename-based")

(defn is-model-loaded? []
  true)