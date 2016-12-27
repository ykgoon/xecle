// Compiled by ClojureScript 1.7.228 {:elide-asserts true}
goog.provide('app_front.core');
goog.require('cljs.core');
if(typeof app_front.core.app_state !== 'undefined'){
} else {
app_front.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Xecle hello world"], null));
}
app_front.core.mount_root = (function app_front$core$mount_root(setting){
var app = document.getElementById("app");
return app.innerHTML = new cljs.core.Keyword(null,"my-env","my-env",-157811641).cljs$core$IFn$_invoke$arity$1(setting);
});
app_front.core.init_BANG_ = (function app_front$core$init_BANG_(setting){
return app_front.core.mount_root.call(null,setting);
});

//# sourceMappingURL=core.js.map