// Compiled by ClojureScript 1.7.228 {:elide-asserts true}
goog.provide('app_front.core');
goog.require('cljs.core');
goog.require('cljsjs.handsontable');
if(typeof app_front.core.app_state !== 'undefined'){
} else {
app_front.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Xecle hello world"], null));
}
app_front.core.mount_root = (function app_front$core$mount_root(setting){
var app = document.getElementById("app");
var spreadsheet = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sed","Mauris","Nam"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(34),(59)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(4),(43)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(2),(10)], null)], null);
return Handsontable(app,spreadsheet);
});
app_front.core.init_BANG_ = (function app_front$core$init_BANG_(setting){
return app_front.core.mount_root.call(null,setting);
});

//# sourceMappingURL=core.js.map