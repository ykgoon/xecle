// Compiled by ClojureScript 1.7.228 {:elide-asserts true}
goog.provide('app_front.init');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('app_front.core');
goog.require('app_front.conf');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),new cljs.core.Symbol(null,"start-descjop!","start-descjop!",-2023242547,null));
app_front.init.start_descjop_BANG_ = (function app_front$init$start_descjop_BANG_(){
return app_front.core.init_BANG_.call(null,app_front.conf.setting);
});
app_front.init.start_descjop_BANG_.call(null);

//# sourceMappingURL=init.js.map