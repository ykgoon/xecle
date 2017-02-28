// Compiled by ClojureScript 1.7.228 {:elide-asserts true}
goog.provide('app_front.core');
goog.require('cljs.core');
goog.require('cljsjs.handsontable');
goog.require('cljsjs.codemirror');
goog.require('cljsjs.codemirror.mode.javascript');
goog.require('cljsjs.codemirror.keymap.emacs');
goog.require('cljsjs.mui');
if(typeof app_front.core.app_state !== 'undefined'){
} else {
app_front.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Xecle: rethinking spreadsheet"], null));
}
app_front.core.mount_root = (function app_front$core$mount_root(setting){
var spreadsheet_22539 = document.getElementById("sheet");
var spreadsheet_container_22540 = (spreadsheet_22539["parentNode"]);
var width_22541 = (spreadsheet_container_22540.getBoundingClientRect()["width"]);
var body_22542 = document.getElementsByTagName("body");
var height_22543 = (240);
var options_22544 = (function (){var obj22534 = {"data":[[]],"width":width_22541,"height":height_22543,"minRows":(32),"minCols":(14),"rowHeaders":true,"colHeaders":true,"stretchH":"all"};
return obj22534;
})();
var sheet_22545 = Handsontable(spreadsheet_22539,options_22544);
var resize_22546 = ((function (spreadsheet_22539,spreadsheet_container_22540,width_22541,body_22542,height_22543,options_22544,sheet_22545){
return (function (){
var spreadsheet_container__$1 = (spreadsheet_22539["parentNode"]);
var width__$1 = (spreadsheet_container__$1.getBoundingClientRect()["width"]);
var height__$1 = (360);
var sheet_settings = (function (){var obj22536 = {"width":width__$1,"height":height__$1};
return obj22536;
})();
sheet_22545.updateSettings(sheet_settings);

return sheet_22545.render();
});})(spreadsheet_22539,spreadsheet_container_22540,width_22541,body_22542,height_22543,options_22544,sheet_22545))
;
window.addEventListener("resize",resize_22546);

var editor = document.getElementById("editor");
var options = (function (){var obj22538 = {"mode":"javascript","lineNumbers":true,"theme":"lesser-dark"};
return obj22538;
})();
var codeMirror = CodeMirror(editor,options);
return codeMirror.refresh();
});
app_front.core.init_BANG_ = (function app_front$core$init_BANG_(setting){
return app_front.core.mount_root.call(null,setting);
});

//# sourceMappingURL=core.js.map