(ns app-front.core
  (:require cljsjs.handsontable
            cljsjs.codemirror
            cljsjs.mui))

(defonce app-state (atom {:message "Xecle: rethinking spreadsheet"}))

(defn mount-root [setting]
  (let [spreadsheet (. js/document (getElementById "sheet"))
        sheet-data (array (array))
        options (js-obj "data" sheet-data
                        "minRows" 32
                        "minCols" 12
                        "rowHeaders" true
                        "colHeaders" true
                        "stretchH" "all")]
    (js/Handsontable spreadsheet options))

  (let [editor (. js/document (getElementById "editor"))
        options (js-obj "mode"  "javascript"
                        "lineNumbers" true
                        "theme" "lesser-dark")]
    (js/CodeMirror editor options)))

(defn init! [setting]
  (mount-root setting))
