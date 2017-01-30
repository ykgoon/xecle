(ns app-front.core
  (:require cljsjs.handsontable))

(defonce app-state (atom {:message "Xecle hello world"}))

(defn mount-root [setting]
  (let [app (. js/document (getElementById "app"))
        spreadsheet [["Sed" "Mauris" "Nam"]
                    [4 6 8]
                    [8 4 43]
                    [9 2 10]]]
    (cljsjs.handsontable app spreadsheet)))
    ;; (set! (.-innerHTML app) "Donec vitae dolor.")))

(defn init! [setting]
  (mount-root setting))
