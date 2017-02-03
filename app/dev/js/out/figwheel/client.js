// Compiled by ClojureScript 1.7.228 {:elide-asserts true}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
if(typeof figwheel.client.autoload !== 'undefined'){
} else {
figwheel.client.autoload = cljs.core.atom.call(null,true);
}
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
return cljs.core.swap_BANG_.call(null,figwheel.client.autoload,cljs.core.not);
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10497__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__10497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10498__i = 0, G__10498__a = new Array(arguments.length -  0);
while (G__10498__i < G__10498__a.length) {G__10498__a[G__10498__i] = arguments[G__10498__i + 0]; ++G__10498__i;}
  args = new cljs.core.IndexedSeq(G__10498__a,0);
} 
return G__10497__delegate.call(this,args);};
G__10497.cljs$lang$maxFixedArity = 0;
G__10497.cljs$lang$applyTo = (function (arglist__10499){
var args = cljs.core.seq(arglist__10499);
return G__10497__delegate(args);
});
G__10497.cljs$core$IFn$_invoke$arity$variadic = G__10497__delegate;
return G__10497;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__10500){
var map__10503 = p__10500;
var map__10503__$1 = ((((!((map__10503 == null)))?((((map__10503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10503):map__10503);
var message = cljs.core.get.call(null,map__10503__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__10503__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__6142__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__6130__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__6130__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__6130__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__8493__auto___10651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8493__auto___10651,ch){
return (function (){
var f__8494__auto__ = (function (){var switch__8472__auto__ = ((function (c__8493__auto___10651,ch){
return (function (state_10621){
var state_val_10622 = (state_10621[(1)]);
if((state_val_10622 === (7))){
var inst_10617 = (state_10621[(2)]);
var state_10621__$1 = state_10621;
var statearr_10623_10652 = state_10621__$1;
(statearr_10623_10652[(2)] = inst_10617);

(statearr_10623_10652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (1))){
var state_10621__$1 = state_10621;
var statearr_10624_10653 = state_10621__$1;
(statearr_10624_10653[(2)] = null);

(statearr_10624_10653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (4))){
var inst_10580 = (state_10621[(7)]);
var inst_10580__$1 = (state_10621[(2)]);
var state_10621__$1 = (function (){var statearr_10625 = state_10621;
(statearr_10625[(7)] = inst_10580__$1);

return statearr_10625;
})();
if(cljs.core.truth_(inst_10580__$1)){
var statearr_10626_10654 = state_10621__$1;
(statearr_10626_10654[(1)] = (5));

} else {
var statearr_10627_10655 = state_10621__$1;
(statearr_10627_10655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (15))){
var inst_10587 = (state_10621[(8)]);
var inst_10602 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_10587);
var inst_10603 = cljs.core.first.call(null,inst_10602);
var inst_10604 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_10603);
var inst_10605 = console.warn("Figwheel: Not loading code with warnings - ",inst_10604);
var state_10621__$1 = state_10621;
var statearr_10628_10656 = state_10621__$1;
(statearr_10628_10656[(2)] = inst_10605);

(statearr_10628_10656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (13))){
var inst_10610 = (state_10621[(2)]);
var state_10621__$1 = state_10621;
var statearr_10629_10657 = state_10621__$1;
(statearr_10629_10657[(2)] = inst_10610);

(statearr_10629_10657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (6))){
var state_10621__$1 = state_10621;
var statearr_10630_10658 = state_10621__$1;
(statearr_10630_10658[(2)] = null);

(statearr_10630_10658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (17))){
var inst_10608 = (state_10621[(2)]);
var state_10621__$1 = state_10621;
var statearr_10631_10659 = state_10621__$1;
(statearr_10631_10659[(2)] = inst_10608);

(statearr_10631_10659[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (3))){
var inst_10619 = (state_10621[(2)]);
var state_10621__$1 = state_10621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10621__$1,inst_10619);
} else {
if((state_val_10622 === (12))){
var inst_10586 = (state_10621[(9)]);
var inst_10600 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_10586,opts);
var state_10621__$1 = state_10621;
if(cljs.core.truth_(inst_10600)){
var statearr_10632_10660 = state_10621__$1;
(statearr_10632_10660[(1)] = (15));

} else {
var statearr_10633_10661 = state_10621__$1;
(statearr_10633_10661[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (2))){
var state_10621__$1 = state_10621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10621__$1,(4),ch);
} else {
if((state_val_10622 === (11))){
var inst_10587 = (state_10621[(8)]);
var inst_10592 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10593 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_10587);
var inst_10594 = cljs.core.async.timeout.call(null,(1000));
var inst_10595 = [inst_10593,inst_10594];
var inst_10596 = (new cljs.core.PersistentVector(null,2,(5),inst_10592,inst_10595,null));
var state_10621__$1 = state_10621;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10621__$1,(14),inst_10596);
} else {
if((state_val_10622 === (9))){
var state_10621__$1 = state_10621;
var statearr_10634_10662 = state_10621__$1;
(statearr_10634_10662[(2)] = null);

(statearr_10634_10662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (5))){
var inst_10580 = (state_10621[(7)]);
var inst_10582 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_10583 = (new cljs.core.PersistentArrayMap(null,2,inst_10582,null));
var inst_10584 = (new cljs.core.PersistentHashSet(null,inst_10583,null));
var inst_10585 = figwheel.client.focus_msgs.call(null,inst_10584,inst_10580);
var inst_10586 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_10585);
var inst_10587 = cljs.core.first.call(null,inst_10585);
var inst_10588 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_10621__$1 = (function (){var statearr_10635 = state_10621;
(statearr_10635[(9)] = inst_10586);

(statearr_10635[(8)] = inst_10587);

return statearr_10635;
})();
if(cljs.core.truth_(inst_10588)){
var statearr_10636_10663 = state_10621__$1;
(statearr_10636_10663[(1)] = (8));

} else {
var statearr_10637_10664 = state_10621__$1;
(statearr_10637_10664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (14))){
var inst_10598 = (state_10621[(2)]);
var state_10621__$1 = state_10621;
var statearr_10638_10665 = state_10621__$1;
(statearr_10638_10665[(2)] = inst_10598);

(statearr_10638_10665[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (16))){
var state_10621__$1 = state_10621;
var statearr_10639_10666 = state_10621__$1;
(statearr_10639_10666[(2)] = null);

(statearr_10639_10666[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (10))){
var inst_10613 = (state_10621[(2)]);
var state_10621__$1 = (function (){var statearr_10640 = state_10621;
(statearr_10640[(10)] = inst_10613);

return statearr_10640;
})();
var statearr_10641_10667 = state_10621__$1;
(statearr_10641_10667[(2)] = null);

(statearr_10641_10667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (8))){
var inst_10586 = (state_10621[(9)]);
var inst_10590 = figwheel.client.reload_file_state_QMARK_.call(null,inst_10586,opts);
var state_10621__$1 = state_10621;
if(cljs.core.truth_(inst_10590)){
var statearr_10642_10668 = state_10621__$1;
(statearr_10642_10668[(1)] = (11));

} else {
var statearr_10643_10669 = state_10621__$1;
(statearr_10643_10669[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8493__auto___10651,ch))
;
return ((function (switch__8472__auto__,c__8493__auto___10651,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__8473__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__8473__auto____0 = (function (){
var statearr_10647 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10647[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__8473__auto__);

(statearr_10647[(1)] = (1));

return statearr_10647;
});
var figwheel$client$file_reloader_plugin_$_state_machine__8473__auto____1 = (function (state_10621){
while(true){
var ret_value__8474__auto__ = (function (){try{while(true){
var result__8475__auto__ = switch__8472__auto__.call(null,state_10621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8475__auto__;
}
break;
}
}catch (e10648){if((e10648 instanceof Object)){
var ex__8476__auto__ = e10648;
var statearr_10649_10670 = state_10621;
(statearr_10649_10670[(5)] = ex__8476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10671 = state_10621;
state_10621 = G__10671;
continue;
} else {
return ret_value__8474__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__8473__auto__ = function(state_10621){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__8473__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__8473__auto____1.call(this,state_10621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__8473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__8473__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__8473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__8473__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__8473__auto__;
})()
;})(switch__8472__auto__,c__8493__auto___10651,ch))
})();
var state__8495__auto__ = (function (){var statearr_10650 = f__8494__auto__.call(null);
(statearr_10650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8493__auto___10651);

return statearr_10650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8495__auto__);
});})(c__8493__auto___10651,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__10672_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__10672_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_10679 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_10679){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_10677 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_10678 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_10677,_STAR_print_newline_STAR_10678,base_path_10679){
return (function() { 
var G__10680__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__10680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10681__i = 0, G__10681__a = new Array(arguments.length -  0);
while (G__10681__i < G__10681__a.length) {G__10681__a[G__10681__i] = arguments[G__10681__i + 0]; ++G__10681__i;}
  args = new cljs.core.IndexedSeq(G__10681__a,0);
} 
return G__10680__delegate.call(this,args);};
G__10680.cljs$lang$maxFixedArity = 0;
G__10680.cljs$lang$applyTo = (function (arglist__10682){
var args = cljs.core.seq(arglist__10682);
return G__10680__delegate(args);
});
G__10680.cljs$core$IFn$_invoke$arity$variadic = G__10680__delegate;
return G__10680;
})()
;})(_STAR_print_fn_STAR_10677,_STAR_print_newline_STAR_10678,base_path_10679))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10678;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10677;
}}catch (e10676){if((e10676 instanceof Error)){
var e = e10676;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_10679], null));
} else {
var e = e10676;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_10679))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__10683){
var map__10690 = p__10683;
var map__10690__$1 = ((((!((map__10690 == null)))?((((map__10690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10690):map__10690);
var opts = map__10690__$1;
var build_id = cljs.core.get.call(null,map__10690__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__10690,map__10690__$1,opts,build_id){
return (function (p__10692){
var vec__10693 = p__10692;
var map__10694 = cljs.core.nth.call(null,vec__10693,(0),null);
var map__10694__$1 = ((((!((map__10694 == null)))?((((map__10694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10694):map__10694);
var msg = map__10694__$1;
var msg_name = cljs.core.get.call(null,map__10694__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__10693,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__10693,map__10694,map__10694__$1,msg,msg_name,_,map__10690,map__10690__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__10693,map__10694,map__10694__$1,msg,msg_name,_,map__10690,map__10690__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__10690,map__10690__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__10700){
var vec__10701 = p__10700;
var map__10702 = cljs.core.nth.call(null,vec__10701,(0),null);
var map__10702__$1 = ((((!((map__10702 == null)))?((((map__10702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10702):map__10702);
var msg = map__10702__$1;
var msg_name = cljs.core.get.call(null,map__10702__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__10701,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__10704){
var map__10714 = p__10704;
var map__10714__$1 = ((((!((map__10714 == null)))?((((map__10714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10714):map__10714);
var on_compile_warning = cljs.core.get.call(null,map__10714__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__10714__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__10714,map__10714__$1,on_compile_warning,on_compile_fail){
return (function (p__10716){
var vec__10717 = p__10716;
var map__10718 = cljs.core.nth.call(null,vec__10717,(0),null);
var map__10718__$1 = ((((!((map__10718 == null)))?((((map__10718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10718):map__10718);
var msg = map__10718__$1;
var msg_name = cljs.core.get.call(null,map__10718__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__10717,(1));
var pred__10720 = cljs.core._EQ_;
var expr__10721 = msg_name;
if(cljs.core.truth_(pred__10720.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__10721))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__10720.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__10721))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__10714,map__10714__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__8493__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8493__auto__,msg_hist,msg_names,msg){
return (function (){
var f__8494__auto__ = (function (){var switch__8472__auto__ = ((function (c__8493__auto__,msg_hist,msg_names,msg){
return (function (state_10937){
var state_val_10938 = (state_10937[(1)]);
if((state_val_10938 === (7))){
var inst_10861 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
if(cljs.core.truth_(inst_10861)){
var statearr_10939_10985 = state_10937__$1;
(statearr_10939_10985[(1)] = (8));

} else {
var statearr_10940_10986 = state_10937__$1;
(statearr_10940_10986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (20))){
var inst_10931 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
var statearr_10941_10987 = state_10937__$1;
(statearr_10941_10987[(2)] = inst_10931);

(statearr_10941_10987[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (27))){
var inst_10927 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
var statearr_10942_10988 = state_10937__$1;
(statearr_10942_10988[(2)] = inst_10927);

(statearr_10942_10988[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (1))){
var inst_10854 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_10937__$1 = state_10937;
if(cljs.core.truth_(inst_10854)){
var statearr_10943_10989 = state_10937__$1;
(statearr_10943_10989[(1)] = (2));

} else {
var statearr_10944_10990 = state_10937__$1;
(statearr_10944_10990[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (24))){
var inst_10929 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
var statearr_10945_10991 = state_10937__$1;
(statearr_10945_10991[(2)] = inst_10929);

(statearr_10945_10991[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (4))){
var inst_10935 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10937__$1,inst_10935);
} else {
if((state_val_10938 === (15))){
var inst_10933 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
var statearr_10946_10992 = state_10937__$1;
(statearr_10946_10992[(2)] = inst_10933);

(statearr_10946_10992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (21))){
var inst_10892 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
var statearr_10947_10993 = state_10937__$1;
(statearr_10947_10993[(2)] = inst_10892);

(statearr_10947_10993[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (31))){
var inst_10916 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_10937__$1 = state_10937;
if(cljs.core.truth_(inst_10916)){
var statearr_10948_10994 = state_10937__$1;
(statearr_10948_10994[(1)] = (34));

} else {
var statearr_10949_10995 = state_10937__$1;
(statearr_10949_10995[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (32))){
var inst_10925 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
var statearr_10950_10996 = state_10937__$1;
(statearr_10950_10996[(2)] = inst_10925);

(statearr_10950_10996[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (33))){
var inst_10914 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
var statearr_10951_10997 = state_10937__$1;
(statearr_10951_10997[(2)] = inst_10914);

(statearr_10951_10997[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (13))){
var inst_10875 = figwheel.client.heads_up.clear.call(null);
var state_10937__$1 = state_10937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10937__$1,(16),inst_10875);
} else {
if((state_val_10938 === (22))){
var inst_10896 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_10897 = figwheel.client.heads_up.append_message.call(null,inst_10896);
var state_10937__$1 = state_10937;
var statearr_10952_10998 = state_10937__$1;
(statearr_10952_10998[(2)] = inst_10897);

(statearr_10952_10998[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (36))){
var inst_10923 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
var statearr_10953_10999 = state_10937__$1;
(statearr_10953_10999[(2)] = inst_10923);

(statearr_10953_10999[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (29))){
var inst_10907 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
var statearr_10954_11000 = state_10937__$1;
(statearr_10954_11000[(2)] = inst_10907);

(statearr_10954_11000[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (6))){
var inst_10856 = (state_10937[(7)]);
var state_10937__$1 = state_10937;
var statearr_10955_11001 = state_10937__$1;
(statearr_10955_11001[(2)] = inst_10856);

(statearr_10955_11001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (28))){
var inst_10903 = (state_10937[(2)]);
var inst_10904 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_10905 = figwheel.client.heads_up.display_warning.call(null,inst_10904);
var state_10937__$1 = (function (){var statearr_10956 = state_10937;
(statearr_10956[(8)] = inst_10903);

return statearr_10956;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10937__$1,(29),inst_10905);
} else {
if((state_val_10938 === (25))){
var inst_10901 = figwheel.client.heads_up.clear.call(null);
var state_10937__$1 = state_10937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10937__$1,(28),inst_10901);
} else {
if((state_val_10938 === (34))){
var inst_10918 = figwheel.client.heads_up.flash_loaded.call(null);
var state_10937__$1 = state_10937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10937__$1,(37),inst_10918);
} else {
if((state_val_10938 === (17))){
var inst_10883 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
var statearr_10957_11002 = state_10937__$1;
(statearr_10957_11002[(2)] = inst_10883);

(statearr_10957_11002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (3))){
var inst_10873 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_10937__$1 = state_10937;
if(cljs.core.truth_(inst_10873)){
var statearr_10958_11003 = state_10937__$1;
(statearr_10958_11003[(1)] = (13));

} else {
var statearr_10959_11004 = state_10937__$1;
(statearr_10959_11004[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (12))){
var inst_10869 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
var statearr_10960_11005 = state_10937__$1;
(statearr_10960_11005[(2)] = inst_10869);

(statearr_10960_11005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (2))){
var inst_10856 = (state_10937[(7)]);
var inst_10856__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_10937__$1 = (function (){var statearr_10961 = state_10937;
(statearr_10961[(7)] = inst_10856__$1);

return statearr_10961;
})();
if(cljs.core.truth_(inst_10856__$1)){
var statearr_10962_11006 = state_10937__$1;
(statearr_10962_11006[(1)] = (5));

} else {
var statearr_10963_11007 = state_10937__$1;
(statearr_10963_11007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (23))){
var inst_10899 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_10937__$1 = state_10937;
if(cljs.core.truth_(inst_10899)){
var statearr_10964_11008 = state_10937__$1;
(statearr_10964_11008[(1)] = (25));

} else {
var statearr_10965_11009 = state_10937__$1;
(statearr_10965_11009[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (35))){
var state_10937__$1 = state_10937;
var statearr_10966_11010 = state_10937__$1;
(statearr_10966_11010[(2)] = null);

(statearr_10966_11010[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (19))){
var inst_10894 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_10937__$1 = state_10937;
if(cljs.core.truth_(inst_10894)){
var statearr_10967_11011 = state_10937__$1;
(statearr_10967_11011[(1)] = (22));

} else {
var statearr_10968_11012 = state_10937__$1;
(statearr_10968_11012[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (11))){
var inst_10865 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
var statearr_10969_11013 = state_10937__$1;
(statearr_10969_11013[(2)] = inst_10865);

(statearr_10969_11013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (9))){
var inst_10867 = figwheel.client.heads_up.clear.call(null);
var state_10937__$1 = state_10937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10937__$1,(12),inst_10867);
} else {
if((state_val_10938 === (5))){
var inst_10858 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_10937__$1 = state_10937;
var statearr_10970_11014 = state_10937__$1;
(statearr_10970_11014[(2)] = inst_10858);

(statearr_10970_11014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (14))){
var inst_10885 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_10937__$1 = state_10937;
if(cljs.core.truth_(inst_10885)){
var statearr_10971_11015 = state_10937__$1;
(statearr_10971_11015[(1)] = (18));

} else {
var statearr_10972_11016 = state_10937__$1;
(statearr_10972_11016[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (26))){
var inst_10909 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_10937__$1 = state_10937;
if(cljs.core.truth_(inst_10909)){
var statearr_10973_11017 = state_10937__$1;
(statearr_10973_11017[(1)] = (30));

} else {
var statearr_10974_11018 = state_10937__$1;
(statearr_10974_11018[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (16))){
var inst_10877 = (state_10937[(2)]);
var inst_10878 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_10879 = figwheel.client.format_messages.call(null,inst_10878);
var inst_10880 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_10881 = figwheel.client.heads_up.display_error.call(null,inst_10879,inst_10880);
var state_10937__$1 = (function (){var statearr_10975 = state_10937;
(statearr_10975[(9)] = inst_10877);

return statearr_10975;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10937__$1,(17),inst_10881);
} else {
if((state_val_10938 === (30))){
var inst_10911 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_10912 = figwheel.client.heads_up.display_warning.call(null,inst_10911);
var state_10937__$1 = state_10937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10937__$1,(33),inst_10912);
} else {
if((state_val_10938 === (10))){
var inst_10871 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
var statearr_10976_11019 = state_10937__$1;
(statearr_10976_11019[(2)] = inst_10871);

(statearr_10976_11019[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (18))){
var inst_10887 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_10888 = figwheel.client.format_messages.call(null,inst_10887);
var inst_10889 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_10890 = figwheel.client.heads_up.display_error.call(null,inst_10888,inst_10889);
var state_10937__$1 = state_10937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10937__$1,(21),inst_10890);
} else {
if((state_val_10938 === (37))){
var inst_10920 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
var statearr_10977_11020 = state_10937__$1;
(statearr_10977_11020[(2)] = inst_10920);

(statearr_10977_11020[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (8))){
var inst_10863 = figwheel.client.heads_up.flash_loaded.call(null);
var state_10937__$1 = state_10937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10937__$1,(11),inst_10863);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8493__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__8472__auto__,c__8493__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8473__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8473__auto____0 = (function (){
var statearr_10981 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10981[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8473__auto__);

(statearr_10981[(1)] = (1));

return statearr_10981;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8473__auto____1 = (function (state_10937){
while(true){
var ret_value__8474__auto__ = (function (){try{while(true){
var result__8475__auto__ = switch__8472__auto__.call(null,state_10937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8475__auto__;
}
break;
}
}catch (e10982){if((e10982 instanceof Object)){
var ex__8476__auto__ = e10982;
var statearr_10983_11021 = state_10937;
(statearr_10983_11021[(5)] = ex__8476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11022 = state_10937;
state_10937 = G__11022;
continue;
} else {
return ret_value__8474__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8473__auto__ = function(state_10937){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8473__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8473__auto____1.call(this,state_10937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8473__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8473__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8473__auto__;
})()
;})(switch__8472__auto__,c__8493__auto__,msg_hist,msg_names,msg))
})();
var state__8495__auto__ = (function (){var statearr_10984 = f__8494__auto__.call(null);
(statearr_10984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8493__auto__);

return statearr_10984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8495__auto__);
});})(c__8493__auto__,msg_hist,msg_names,msg))
);

return c__8493__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__8493__auto___11085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8493__auto___11085,ch){
return (function (){
var f__8494__auto__ = (function (){var switch__8472__auto__ = ((function (c__8493__auto___11085,ch){
return (function (state_11068){
var state_val_11069 = (state_11068[(1)]);
if((state_val_11069 === (1))){
var state_11068__$1 = state_11068;
var statearr_11070_11086 = state_11068__$1;
(statearr_11070_11086[(2)] = null);

(statearr_11070_11086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (2))){
var state_11068__$1 = state_11068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11068__$1,(4),ch);
} else {
if((state_val_11069 === (3))){
var inst_11066 = (state_11068[(2)]);
var state_11068__$1 = state_11068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11068__$1,inst_11066);
} else {
if((state_val_11069 === (4))){
var inst_11056 = (state_11068[(7)]);
var inst_11056__$1 = (state_11068[(2)]);
var state_11068__$1 = (function (){var statearr_11071 = state_11068;
(statearr_11071[(7)] = inst_11056__$1);

return statearr_11071;
})();
if(cljs.core.truth_(inst_11056__$1)){
var statearr_11072_11087 = state_11068__$1;
(statearr_11072_11087[(1)] = (5));

} else {
var statearr_11073_11088 = state_11068__$1;
(statearr_11073_11088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (5))){
var inst_11056 = (state_11068[(7)]);
var inst_11058 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_11056);
var state_11068__$1 = state_11068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11068__$1,(8),inst_11058);
} else {
if((state_val_11069 === (6))){
var state_11068__$1 = state_11068;
var statearr_11074_11089 = state_11068__$1;
(statearr_11074_11089[(2)] = null);

(statearr_11074_11089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (7))){
var inst_11064 = (state_11068[(2)]);
var state_11068__$1 = state_11068;
var statearr_11075_11090 = state_11068__$1;
(statearr_11075_11090[(2)] = inst_11064);

(statearr_11075_11090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11069 === (8))){
var inst_11060 = (state_11068[(2)]);
var state_11068__$1 = (function (){var statearr_11076 = state_11068;
(statearr_11076[(8)] = inst_11060);

return statearr_11076;
})();
var statearr_11077_11091 = state_11068__$1;
(statearr_11077_11091[(2)] = null);

(statearr_11077_11091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__8493__auto___11085,ch))
;
return ((function (switch__8472__auto__,c__8493__auto___11085,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__8473__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__8473__auto____0 = (function (){
var statearr_11081 = [null,null,null,null,null,null,null,null,null];
(statearr_11081[(0)] = figwheel$client$heads_up_plugin_$_state_machine__8473__auto__);

(statearr_11081[(1)] = (1));

return statearr_11081;
});
var figwheel$client$heads_up_plugin_$_state_machine__8473__auto____1 = (function (state_11068){
while(true){
var ret_value__8474__auto__ = (function (){try{while(true){
var result__8475__auto__ = switch__8472__auto__.call(null,state_11068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8475__auto__;
}
break;
}
}catch (e11082){if((e11082 instanceof Object)){
var ex__8476__auto__ = e11082;
var statearr_11083_11092 = state_11068;
(statearr_11083_11092[(5)] = ex__8476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11093 = state_11068;
state_11068 = G__11093;
continue;
} else {
return ret_value__8474__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__8473__auto__ = function(state_11068){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__8473__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__8473__auto____1.call(this,state_11068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__8473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__8473__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__8473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__8473__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__8473__auto__;
})()
;})(switch__8472__auto__,c__8493__auto___11085,ch))
})();
var state__8495__auto__ = (function (){var statearr_11084 = f__8494__auto__.call(null);
(statearr_11084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8493__auto___11085);

return statearr_11084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8495__auto__);
});})(c__8493__auto___11085,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__8493__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8493__auto__){
return (function (){
var f__8494__auto__ = (function (){var switch__8472__auto__ = ((function (c__8493__auto__){
return (function (state_11114){
var state_val_11115 = (state_11114[(1)]);
if((state_val_11115 === (1))){
var inst_11109 = cljs.core.async.timeout.call(null,(3000));
var state_11114__$1 = state_11114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11114__$1,(2),inst_11109);
} else {
if((state_val_11115 === (2))){
var inst_11111 = (state_11114[(2)]);
var inst_11112 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_11114__$1 = (function (){var statearr_11116 = state_11114;
(statearr_11116[(7)] = inst_11111);

return statearr_11116;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11114__$1,inst_11112);
} else {
return null;
}
}
});})(c__8493__auto__))
;
return ((function (switch__8472__auto__,c__8493__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__8473__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__8473__auto____0 = (function (){
var statearr_11120 = [null,null,null,null,null,null,null,null];
(statearr_11120[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__8473__auto__);

(statearr_11120[(1)] = (1));

return statearr_11120;
});
var figwheel$client$enforce_project_plugin_$_state_machine__8473__auto____1 = (function (state_11114){
while(true){
var ret_value__8474__auto__ = (function (){try{while(true){
var result__8475__auto__ = switch__8472__auto__.call(null,state_11114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8475__auto__;
}
break;
}
}catch (e11121){if((e11121 instanceof Object)){
var ex__8476__auto__ = e11121;
var statearr_11122_11124 = state_11114;
(statearr_11122_11124[(5)] = ex__8476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11125 = state_11114;
state_11114 = G__11125;
continue;
} else {
return ret_value__8474__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__8473__auto__ = function(state_11114){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__8473__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__8473__auto____1.call(this,state_11114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__8473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__8473__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__8473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__8473__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__8473__auto__;
})()
;})(switch__8472__auto__,c__8493__auto__))
})();
var state__8495__auto__ = (function (){var statearr_11123 = f__8494__auto__.call(null);
(statearr_11123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8493__auto__);

return statearr_11123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8495__auto__);
});})(c__8493__auto__))
);

return c__8493__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__11126){
var map__11133 = p__11126;
var map__11133__$1 = ((((!((map__11133 == null)))?((((map__11133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11133):map__11133);
var ed = map__11133__$1;
var formatted_exception = cljs.core.get.call(null,map__11133__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__11133__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__11133__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__11135_11139 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__11136_11140 = null;
var count__11137_11141 = (0);
var i__11138_11142 = (0);
while(true){
if((i__11138_11142 < count__11137_11141)){
var msg_11143 = cljs.core._nth.call(null,chunk__11136_11140,i__11138_11142);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_11143);

var G__11144 = seq__11135_11139;
var G__11145 = chunk__11136_11140;
var G__11146 = count__11137_11141;
var G__11147 = (i__11138_11142 + (1));
seq__11135_11139 = G__11144;
chunk__11136_11140 = G__11145;
count__11137_11141 = G__11146;
i__11138_11142 = G__11147;
continue;
} else {
var temp__4425__auto___11148 = cljs.core.seq.call(null,seq__11135_11139);
if(temp__4425__auto___11148){
var seq__11135_11149__$1 = temp__4425__auto___11148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11135_11149__$1)){
var c__6945__auto___11150 = cljs.core.chunk_first.call(null,seq__11135_11149__$1);
var G__11151 = cljs.core.chunk_rest.call(null,seq__11135_11149__$1);
var G__11152 = c__6945__auto___11150;
var G__11153 = cljs.core.count.call(null,c__6945__auto___11150);
var G__11154 = (0);
seq__11135_11139 = G__11151;
chunk__11136_11140 = G__11152;
count__11137_11141 = G__11153;
i__11138_11142 = G__11154;
continue;
} else {
var msg_11155 = cljs.core.first.call(null,seq__11135_11149__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_11155);

var G__11156 = cljs.core.next.call(null,seq__11135_11149__$1);
var G__11157 = null;
var G__11158 = (0);
var G__11159 = (0);
seq__11135_11139 = G__11156;
chunk__11136_11140 = G__11157;
count__11137_11141 = G__11158;
i__11138_11142 = G__11159;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__11160){
var map__11163 = p__11160;
var map__11163__$1 = ((((!((map__11163 == null)))?((((map__11163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11163):map__11163);
var w = map__11163__$1;
var message = cljs.core.get.call(null,map__11163__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__6130__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__6130__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__6130__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__11171 = cljs.core.seq.call(null,plugins);
var chunk__11172 = null;
var count__11173 = (0);
var i__11174 = (0);
while(true){
if((i__11174 < count__11173)){
var vec__11175 = cljs.core._nth.call(null,chunk__11172,i__11174);
var k = cljs.core.nth.call(null,vec__11175,(0),null);
var plugin = cljs.core.nth.call(null,vec__11175,(1),null);
if(cljs.core.truth_(plugin)){
var pl_11177 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__11171,chunk__11172,count__11173,i__11174,pl_11177,vec__11175,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_11177.call(null,msg_hist);
});})(seq__11171,chunk__11172,count__11173,i__11174,pl_11177,vec__11175,k,plugin))
);
} else {
}

var G__11178 = seq__11171;
var G__11179 = chunk__11172;
var G__11180 = count__11173;
var G__11181 = (i__11174 + (1));
seq__11171 = G__11178;
chunk__11172 = G__11179;
count__11173 = G__11180;
i__11174 = G__11181;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11171);
if(temp__4425__auto__){
var seq__11171__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11171__$1)){
var c__6945__auto__ = cljs.core.chunk_first.call(null,seq__11171__$1);
var G__11182 = cljs.core.chunk_rest.call(null,seq__11171__$1);
var G__11183 = c__6945__auto__;
var G__11184 = cljs.core.count.call(null,c__6945__auto__);
var G__11185 = (0);
seq__11171 = G__11182;
chunk__11172 = G__11183;
count__11173 = G__11184;
i__11174 = G__11185;
continue;
} else {
var vec__11176 = cljs.core.first.call(null,seq__11171__$1);
var k = cljs.core.nth.call(null,vec__11176,(0),null);
var plugin = cljs.core.nth.call(null,vec__11176,(1),null);
if(cljs.core.truth_(plugin)){
var pl_11186 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__11171,chunk__11172,count__11173,i__11174,pl_11186,vec__11176,k,plugin,seq__11171__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_11186.call(null,msg_hist);
});})(seq__11171,chunk__11172,count__11173,i__11174,pl_11186,vec__11176,k,plugin,seq__11171__$1,temp__4425__auto__))
);
} else {
}

var G__11187 = cljs.core.next.call(null,seq__11171__$1);
var G__11188 = null;
var G__11189 = (0);
var G__11190 = (0);
seq__11171 = G__11187;
chunk__11172 = G__11188;
count__11173 = G__11189;
i__11174 = G__11190;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args11191 = [];
var len__7196__auto___11194 = arguments.length;
var i__7197__auto___11195 = (0);
while(true){
if((i__7197__auto___11195 < len__7196__auto___11194)){
args11191.push((arguments[i__7197__auto___11195]));

var G__11196 = (i__7197__auto___11195 + (1));
i__7197__auto___11195 = G__11196;
continue;
} else {
}
break;
}

var G__11193 = args11191.length;
switch (G__11193) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11191.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__7203__auto__ = [];
var len__7196__auto___11202 = arguments.length;
var i__7197__auto___11203 = (0);
while(true){
if((i__7197__auto___11203 < len__7196__auto___11202)){
args__7203__auto__.push((arguments[i__7197__auto___11203]));

var G__11204 = (i__7197__auto___11203 + (1));
i__7197__auto___11203 = G__11204;
continue;
} else {
}
break;
}

var argseq__7204__auto__ = ((((0) < args__7203__auto__.length))?(new cljs.core.IndexedSeq(args__7203__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__7204__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__11199){
var map__11200 = p__11199;
var map__11200__$1 = ((((!((map__11200 == null)))?((((map__11200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11200):map__11200);
var opts = map__11200__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq11198){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11198));
});

//# sourceMappingURL=client.js.map