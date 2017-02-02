// Compiled by ClojureScript 1.7.228 {:elide-asserts true}
goog.provide('app_front.core');
goog.require('cljs.core');
goog.require('cljsjs.handsontable');
if(typeof app_front.core.app_state !== 'undefined'){
} else {
app_front.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Xecle: rethinking spreadsheet"], null));
}
app_front.core.mount_root = (function app_front$core$mount_root(setting){
var app = document.getElementById("app");
var spreadsheet = [[]];
var table_options = (function (){var obj22423 = {"data":spreadsheet,"minRows":(32),"minCols":(12),"rowHeaders":true,"colHeaders":true,"stretchH":"all"};
return obj22423;
})();
Handsontable(app,table_options);

return _STAR_win_STAR_.BrowserWindow.maximize.call(null);
});
app_front.core.init_BANG_ = (function app_front$core$init_BANG_(setting){
return app_front.core.mount_root.call(null,setting);
});

//# sourceMappingURL=core.js.map