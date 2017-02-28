(ns app-front.core
  (:require cljsjs.handsontable
            cljsjs.codemirror
            cljsjs.codemirror.mode.javascript
            cljsjs.codemirror.keymap.emacs
            cljsjs.mui))

(defonce app-state (atom {:message "Xecle: rethinking spreadsheet"}))

(defn mount-root [setting]
  (let [spreadsheet (. js/document (getElementById "sheet"))

        spreadsheet-container (aget spreadsheet "parentNode")
        width (aget (.getBoundingClientRect spreadsheet-container) "width")

        body (. js/document (getElementsByTagName "body"))
        ;; height (aget (.getBoundingClientRect body "height"))
        height 240

        options (js-obj "data" (array (array))
                        "width" width
                        "height" height
                        "minRows" 32
                        "minCols" 14
                        "rowHeaders" true
                        "colHeaders" true
                        "stretchH" "all")
        sheet (js/Handsontable spreadsheet options)

        resize (fn []
                 (let [spreadsheet-container (aget spreadsheet "parentNode")
                       width (aget (.getBoundingClientRect spreadsheet-container) "width")
                       height 360
                       sheet-settings (js-obj "width" width
                                              "height" height)]
                   (.updateSettings sheet sheet-settings)
                   (.render sheet)))]

    (js/window.addEventListener "resize" resize))

  (let [editor (. js/document (getElementById "editor"))
        options (js-obj "mode"  "javascript"
                        "lineNumbers" true
                        "theme" "lesser-dark")]
    (let [codeMirror (js/CodeMirror editor options)]
      (.refresh codeMirror))))

(defn init! [setting]
  (mount-root setting))
