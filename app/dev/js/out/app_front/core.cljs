(ns app-front.core
  (:require cljsjs.handsontable))

(defonce app-state (atom {:message "Xecle hello world"}))

(defn mount-root [setting]
  (let [app (. js/document (getElementById "app"))
        spreadsheet [["Sed" "Mauris" "Nam"]
                     [4 34 59]
                     [8 4 43]
                     [9 2 10]]]
    (js/Handsontable app spreadsheet)))
    ;; (set! (.-innerHTML app) spreadsheet)))

(defn init! [setting]
  (mount-root setting))
