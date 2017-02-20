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
var spreadsheet_19489 = document.getElementById("sheet");
var sheet_data_19490 = [[]];
var options_19491 = (function (){var obj19486 = {"data":sheet_data_19490,"minRows":(32),"minCols":(12),"rowHeaders":true,"colHeaders":true,"stretchH":"all"};
return obj19486;
})();
Handsontable(spreadsheet_19489,options_19491);

var editor = document.getElementById("editor");
var options = (function (){var obj19488 = {"mode":"javascript","lineNumbers":true,"theme":"lesser-dark"};
return obj19488;
})();
return CodeMirror(editor,options);
});
app_front.core.init_BANG_ = (function app_front$core$init_BANG_(setting){
return app_front.core.mount_root.call(null,setting);
});

//# sourceMappingURL=core.js.map