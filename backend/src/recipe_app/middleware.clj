(ns recipe-app.middleware)

(defn wrap-cors [handler]
  (fn [req]
    (let [response (handler req)]
      (assoc-in response [:headers "Access-Control-Allow-Origin"] "*"))))
