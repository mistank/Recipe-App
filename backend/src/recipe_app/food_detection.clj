(ns recipe-app.food-detection
  (:require [clojure.java.io :as io])
  (:import [org.tensorflow SavedModelBundle]
           [org.tensorflow.types TFloat32]
           [org.tensorflow.ndarray Shape]
           [javax.imageio ImageIO]
           [java.awt.image BufferedImage]
           [java.nio FloatBuffer]))

(defn load-image [image-path]
  (let [image (ImageIO/read (io/file image-path))]
    (if image
      image
      (throw (Exception. (str "Unable to load image from path: " image-path))))))

(defn resize-image [image width height]
  (let [scaled-image (BufferedImage. width height BufferedImage/TYPE_INT_RGB)
        graphics (.createGraphics scaled-image)]
    (.drawImage graphics image 0 0 width height nil)
    (.dispose graphics)
    scaled-image))

(defn image-to-tensor [image]
  (let [width (.getWidth image)
        height (.getHeight image)
        channels 3
        float-data (float-array (* width height channels))]
    (doseq [y (range height)
            x (range width)
            :let [rgb (.getRGB image x y)
                  r (bit-and (bit-shift-right rgb 16) 0xFF)
                  g (bit-and (bit-shift-right rgb 8) 0xFF)
                  b (bit-and rgb 0xFF)]]
      (aset float-data (+ (* y width channels) (* x channels) 0) (/ r 255.0))
      (aset float-data (+ (* y width channels) (* x channels) 1) (/ g 255.0))
      (aset float-data (+ (* y width channels) (* x channels) 2) (/ b 255.0)))
    (TFloat32/tensorOf
     (Shape/of (long-array [1 height width channels]))
     (FloatBuffer/wrap float-data))))

(defn detect-objects [model-path image-path]
  (let [model (SavedModelBundle/load model-path (into-array String ["serve"]))
        image (-> (load-image image-path)
                  (resize-image 320 320))
        tensor (image-to-tensor image)
        session (.session model)
        result (-> session
                   (.runner)
                   (.feed "serving_default_input_tensor:0" tensor)
                   (.fetch "detection_boxes:0")
                   (.run))]
    (let [detection-tensor (.get result 0)
          detection-data (.copyTo detection-tensor (make-array Float/TYPE 1 100 4))]
      (map (fn [i]
             (let [box (aget detection-data 0 i)]
               {:ymin (aget box 0)
                :xmin (aget box 1)
                :ymax (aget box 2)
                :xmax (aget box 3)}))
           (range 100)))))