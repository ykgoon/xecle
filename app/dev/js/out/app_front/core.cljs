(ns app-front.core)

(defonce app-state (atom {:message "Xecle hello world"}))

(defn mount-root [setting]
  (let [app (. js/document (getElementById "app"))]
    (set! (.-innerHTML app) (:my-env setting))))

(defn init! [setting]
  (mount-root setting))
