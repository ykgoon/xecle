(ns app-front.core
  (:require [cljsjs.handsontable]
            [cljsjs.codemirror]
            [cljsjs.mui]))

(defonce app-state (atom {:message "Xecle: rethinking spreadsheet"}))

(defn mount-root [setting]
  (let [app (. js/document (getElementById "sheet"))
        sheet-data (array (array))
        table-options (js-obj "data" sheet-data
                              "minRows" 32
                              "minCols" 12
                              "rowHeaders" true
                              "colHeaders" true
                              "stretchH" "all")]
    (js/Handsontable app table-options)))

(defn init! [setting]
  (mount-root setting))
