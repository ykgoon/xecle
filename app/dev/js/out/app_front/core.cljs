(ns app-front.core
  (:require cljsjs.handsontable))

(defonce app-state (atom {:message "Xecle: rethinking spreadsheet"}))

(defn mount-root [setting]
  (let [app (. js/document (getElementById "app"))
        spreadsheet (array
                     (array "Sed" "Mauris" "Nam")
                     (array 4 34 59)
                     (array 8 4 43)
                     (array 9 2 10))
        table-options (js-obj "data" spreadsheet
                              "rowHeader" true
                              "colHeader" true
                              "dropdownMenu" true)]
    (js/Handsontable app table-options)))

(defn init! [setting]
  (mount-root setting))
