(ns app-front.core
  (:require cljsjs.handsontable))

(defonce app-state (atom {:message "Xecle: rethinking spreadsheet"}))

(defn mount-root [setting]
  (let [app (. js/document (getElementById "app"))
        spreadsheet (array (array))
        table-options (js-obj "data" spreadsheet
                              "minRows" 32
                              "minCols" 12
                              "rowHeaders" true
                              "colHeaders" true
                              "stretchH" "all")]
    (js/Handsontable app table-options)))

(defn init! [setting]
  (mount-root setting))
