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
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24990 = cljs.core._EQ_;
var expr__24991 = (function (){var or__18276__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__18276__auto__)){
return or__18276__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24990.call(null,"true",expr__24991))){
return true;
} else {
if(cljs.core.truth_(pred__24990.call(null,"false",expr__24991))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24991)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24993__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24994__i = 0, G__24994__a = new Array(arguments.length -  0);
while (G__24994__i < G__24994__a.length) {G__24994__a[G__24994__i] = arguments[G__24994__i + 0]; ++G__24994__i;}
  args = new cljs.core.IndexedSeq(G__24994__a,0);
} 
return G__24993__delegate.call(this,args);};
G__24993.cljs$lang$maxFixedArity = 0;
G__24993.cljs$lang$applyTo = (function (arglist__24995){
var args = cljs.core.seq(arglist__24995);
return G__24993__delegate(args);
});
G__24993.cljs$core$IFn$_invoke$arity$variadic = G__24993__delegate;
return G__24993;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24996){
var map__24999 = p__24996;
var map__24999__$1 = ((((!((map__24999 == null)))?((((map__24999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24999):map__24999);
var message = cljs.core.get.call(null,map__24999__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24999__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18276__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18276__auto__)){
return or__18276__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18264__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18264__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18264__auto__;
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
var c__20400__auto___25161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto___25161,ch){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto___25161,ch){
return (function (state_25130){
var state_val_25131 = (state_25130[(1)]);
if((state_val_25131 === (7))){
var inst_25126 = (state_25130[(2)]);
var state_25130__$1 = state_25130;
var statearr_25132_25162 = state_25130__$1;
(statearr_25132_25162[(2)] = inst_25126);

(statearr_25132_25162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (1))){
var state_25130__$1 = state_25130;
var statearr_25133_25163 = state_25130__$1;
(statearr_25133_25163[(2)] = null);

(statearr_25133_25163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (4))){
var inst_25083 = (state_25130[(7)]);
var inst_25083__$1 = (state_25130[(2)]);
var state_25130__$1 = (function (){var statearr_25134 = state_25130;
(statearr_25134[(7)] = inst_25083__$1);

return statearr_25134;
})();
if(cljs.core.truth_(inst_25083__$1)){
var statearr_25135_25164 = state_25130__$1;
(statearr_25135_25164[(1)] = (5));

} else {
var statearr_25136_25165 = state_25130__$1;
(statearr_25136_25165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (15))){
var inst_25090 = (state_25130[(8)]);
var inst_25105 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25090);
var inst_25106 = cljs.core.first.call(null,inst_25105);
var inst_25107 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25106);
var inst_25108 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25107)].join('');
var inst_25109 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25108);
var state_25130__$1 = state_25130;
var statearr_25137_25166 = state_25130__$1;
(statearr_25137_25166[(2)] = inst_25109);

(statearr_25137_25166[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (13))){
var inst_25114 = (state_25130[(2)]);
var state_25130__$1 = state_25130;
var statearr_25138_25167 = state_25130__$1;
(statearr_25138_25167[(2)] = inst_25114);

(statearr_25138_25167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (6))){
var state_25130__$1 = state_25130;
var statearr_25139_25168 = state_25130__$1;
(statearr_25139_25168[(2)] = null);

(statearr_25139_25168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (17))){
var inst_25112 = (state_25130[(2)]);
var state_25130__$1 = state_25130;
var statearr_25140_25169 = state_25130__$1;
(statearr_25140_25169[(2)] = inst_25112);

(statearr_25140_25169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (3))){
var inst_25128 = (state_25130[(2)]);
var state_25130__$1 = state_25130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25130__$1,inst_25128);
} else {
if((state_val_25131 === (12))){
var inst_25089 = (state_25130[(9)]);
var inst_25103 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25089,opts);
var state_25130__$1 = state_25130;
if(cljs.core.truth_(inst_25103)){
var statearr_25141_25170 = state_25130__$1;
(statearr_25141_25170[(1)] = (15));

} else {
var statearr_25142_25171 = state_25130__$1;
(statearr_25142_25171[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (2))){
var state_25130__$1 = state_25130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25130__$1,(4),ch);
} else {
if((state_val_25131 === (11))){
var inst_25090 = (state_25130[(8)]);
var inst_25095 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25096 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25090);
var inst_25097 = cljs.core.async.timeout.call(null,(1000));
var inst_25098 = [inst_25096,inst_25097];
var inst_25099 = (new cljs.core.PersistentVector(null,2,(5),inst_25095,inst_25098,null));
var state_25130__$1 = state_25130;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25130__$1,(14),inst_25099);
} else {
if((state_val_25131 === (9))){
var inst_25090 = (state_25130[(8)]);
var inst_25116 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25117 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25090);
var inst_25118 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25117);
var inst_25119 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25118)].join('');
var inst_25120 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25119);
var state_25130__$1 = (function (){var statearr_25143 = state_25130;
(statearr_25143[(10)] = inst_25116);

return statearr_25143;
})();
var statearr_25144_25172 = state_25130__$1;
(statearr_25144_25172[(2)] = inst_25120);

(statearr_25144_25172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (5))){
var inst_25083 = (state_25130[(7)]);
var inst_25085 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25086 = (new cljs.core.PersistentArrayMap(null,2,inst_25085,null));
var inst_25087 = (new cljs.core.PersistentHashSet(null,inst_25086,null));
var inst_25088 = figwheel.client.focus_msgs.call(null,inst_25087,inst_25083);
var inst_25089 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25088);
var inst_25090 = cljs.core.first.call(null,inst_25088);
var inst_25091 = figwheel.client.autoload_QMARK_.call(null);
var state_25130__$1 = (function (){var statearr_25145 = state_25130;
(statearr_25145[(8)] = inst_25090);

(statearr_25145[(9)] = inst_25089);

return statearr_25145;
})();
if(cljs.core.truth_(inst_25091)){
var statearr_25146_25173 = state_25130__$1;
(statearr_25146_25173[(1)] = (8));

} else {
var statearr_25147_25174 = state_25130__$1;
(statearr_25147_25174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (14))){
var inst_25101 = (state_25130[(2)]);
var state_25130__$1 = state_25130;
var statearr_25148_25175 = state_25130__$1;
(statearr_25148_25175[(2)] = inst_25101);

(statearr_25148_25175[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (16))){
var state_25130__$1 = state_25130;
var statearr_25149_25176 = state_25130__$1;
(statearr_25149_25176[(2)] = null);

(statearr_25149_25176[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (10))){
var inst_25122 = (state_25130[(2)]);
var state_25130__$1 = (function (){var statearr_25150 = state_25130;
(statearr_25150[(11)] = inst_25122);

return statearr_25150;
})();
var statearr_25151_25177 = state_25130__$1;
(statearr_25151_25177[(2)] = null);

(statearr_25151_25177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (8))){
var inst_25089 = (state_25130[(9)]);
var inst_25093 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25089,opts);
var state_25130__$1 = state_25130;
if(cljs.core.truth_(inst_25093)){
var statearr_25152_25178 = state_25130__$1;
(statearr_25152_25178[(1)] = (11));

} else {
var statearr_25153_25179 = state_25130__$1;
(statearr_25153_25179[(1)] = (12));

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
});})(c__20400__auto___25161,ch))
;
return ((function (switch__20379__auto__,c__20400__auto___25161,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20380__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20380__auto____0 = (function (){
var statearr_25157 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25157[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20380__auto__);

(statearr_25157[(1)] = (1));

return statearr_25157;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20380__auto____1 = (function (state_25130){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_25130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e25158){if((e25158 instanceof Object)){
var ex__20383__auto__ = e25158;
var statearr_25159_25180 = state_25130;
(statearr_25159_25180[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25181 = state_25130;
state_25130 = G__25181;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20380__auto__ = function(state_25130){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20380__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20380__auto____1.call(this,state_25130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20380__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20380__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto___25161,ch))
})();
var state__20402__auto__ = (function (){var statearr_25160 = f__20401__auto__.call(null);
(statearr_25160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___25161);

return statearr_25160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto___25161,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25182_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25182_SHARP_));
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
var base_path_25189 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25189){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25187 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25188 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25187,_STAR_print_newline_STAR_25188,base_path_25189){
return (function() { 
var G__25190__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25191__i = 0, G__25191__a = new Array(arguments.length -  0);
while (G__25191__i < G__25191__a.length) {G__25191__a[G__25191__i] = arguments[G__25191__i + 0]; ++G__25191__i;}
  args = new cljs.core.IndexedSeq(G__25191__a,0);
} 
return G__25190__delegate.call(this,args);};
G__25190.cljs$lang$maxFixedArity = 0;
G__25190.cljs$lang$applyTo = (function (arglist__25192){
var args = cljs.core.seq(arglist__25192);
return G__25190__delegate(args);
});
G__25190.cljs$core$IFn$_invoke$arity$variadic = G__25190__delegate;
return G__25190;
})()
;})(_STAR_print_fn_STAR_25187,_STAR_print_newline_STAR_25188,base_path_25189))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25188;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25187;
}}catch (e25186){if((e25186 instanceof Error)){
var e = e25186;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25189], null));
} else {
var e = e25186;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25189))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25193){
var map__25200 = p__25193;
var map__25200__$1 = ((((!((map__25200 == null)))?((((map__25200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25200):map__25200);
var opts = map__25200__$1;
var build_id = cljs.core.get.call(null,map__25200__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25200,map__25200__$1,opts,build_id){
return (function (p__25202){
var vec__25203 = p__25202;
var map__25204 = cljs.core.nth.call(null,vec__25203,(0),null);
var map__25204__$1 = ((((!((map__25204 == null)))?((((map__25204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25204):map__25204);
var msg = map__25204__$1;
var msg_name = cljs.core.get.call(null,map__25204__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25203,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25203,map__25204,map__25204__$1,msg,msg_name,_,map__25200,map__25200__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25203,map__25204,map__25204__$1,msg,msg_name,_,map__25200,map__25200__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25200,map__25200__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25210){
var vec__25211 = p__25210;
var map__25212 = cljs.core.nth.call(null,vec__25211,(0),null);
var map__25212__$1 = ((((!((map__25212 == null)))?((((map__25212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25212):map__25212);
var msg = map__25212__$1;
var msg_name = cljs.core.get.call(null,map__25212__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25211,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25214){
var map__25224 = p__25214;
var map__25224__$1 = ((((!((map__25224 == null)))?((((map__25224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25224):map__25224);
var on_compile_warning = cljs.core.get.call(null,map__25224__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25224__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25224,map__25224__$1,on_compile_warning,on_compile_fail){
return (function (p__25226){
var vec__25227 = p__25226;
var map__25228 = cljs.core.nth.call(null,vec__25227,(0),null);
var map__25228__$1 = ((((!((map__25228 == null)))?((((map__25228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25228):map__25228);
var msg = map__25228__$1;
var msg_name = cljs.core.get.call(null,map__25228__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25227,(1));
var pred__25230 = cljs.core._EQ_;
var expr__25231 = msg_name;
if(cljs.core.truth_(pred__25230.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25231))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25230.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25231))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25224,map__25224__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto__,msg_hist,msg_names,msg){
return (function (state_25447){
var state_val_25448 = (state_25447[(1)]);
if((state_val_25448 === (7))){
var inst_25371 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
if(cljs.core.truth_(inst_25371)){
var statearr_25449_25495 = state_25447__$1;
(statearr_25449_25495[(1)] = (8));

} else {
var statearr_25450_25496 = state_25447__$1;
(statearr_25450_25496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (20))){
var inst_25441 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25451_25497 = state_25447__$1;
(statearr_25451_25497[(2)] = inst_25441);

(statearr_25451_25497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (27))){
var inst_25437 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25452_25498 = state_25447__$1;
(statearr_25452_25498[(2)] = inst_25437);

(statearr_25452_25498[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (1))){
var inst_25364 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25447__$1 = state_25447;
if(cljs.core.truth_(inst_25364)){
var statearr_25453_25499 = state_25447__$1;
(statearr_25453_25499[(1)] = (2));

} else {
var statearr_25454_25500 = state_25447__$1;
(statearr_25454_25500[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (24))){
var inst_25439 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25455_25501 = state_25447__$1;
(statearr_25455_25501[(2)] = inst_25439);

(statearr_25455_25501[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (4))){
var inst_25445 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25447__$1,inst_25445);
} else {
if((state_val_25448 === (15))){
var inst_25443 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25456_25502 = state_25447__$1;
(statearr_25456_25502[(2)] = inst_25443);

(statearr_25456_25502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (21))){
var inst_25402 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25457_25503 = state_25447__$1;
(statearr_25457_25503[(2)] = inst_25402);

(statearr_25457_25503[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (31))){
var inst_25426 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25447__$1 = state_25447;
if(cljs.core.truth_(inst_25426)){
var statearr_25458_25504 = state_25447__$1;
(statearr_25458_25504[(1)] = (34));

} else {
var statearr_25459_25505 = state_25447__$1;
(statearr_25459_25505[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (32))){
var inst_25435 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25460_25506 = state_25447__$1;
(statearr_25460_25506[(2)] = inst_25435);

(statearr_25460_25506[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (33))){
var inst_25424 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25461_25507 = state_25447__$1;
(statearr_25461_25507[(2)] = inst_25424);

(statearr_25461_25507[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (13))){
var inst_25385 = figwheel.client.heads_up.clear.call(null);
var state_25447__$1 = state_25447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25447__$1,(16),inst_25385);
} else {
if((state_val_25448 === (22))){
var inst_25406 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25407 = figwheel.client.heads_up.append_message.call(null,inst_25406);
var state_25447__$1 = state_25447;
var statearr_25462_25508 = state_25447__$1;
(statearr_25462_25508[(2)] = inst_25407);

(statearr_25462_25508[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (36))){
var inst_25433 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25463_25509 = state_25447__$1;
(statearr_25463_25509[(2)] = inst_25433);

(statearr_25463_25509[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (29))){
var inst_25417 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25464_25510 = state_25447__$1;
(statearr_25464_25510[(2)] = inst_25417);

(statearr_25464_25510[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (6))){
var inst_25366 = (state_25447[(7)]);
var state_25447__$1 = state_25447;
var statearr_25465_25511 = state_25447__$1;
(statearr_25465_25511[(2)] = inst_25366);

(statearr_25465_25511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (28))){
var inst_25413 = (state_25447[(2)]);
var inst_25414 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25415 = figwheel.client.heads_up.display_warning.call(null,inst_25414);
var state_25447__$1 = (function (){var statearr_25466 = state_25447;
(statearr_25466[(8)] = inst_25413);

return statearr_25466;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25447__$1,(29),inst_25415);
} else {
if((state_val_25448 === (25))){
var inst_25411 = figwheel.client.heads_up.clear.call(null);
var state_25447__$1 = state_25447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25447__$1,(28),inst_25411);
} else {
if((state_val_25448 === (34))){
var inst_25428 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25447__$1 = state_25447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25447__$1,(37),inst_25428);
} else {
if((state_val_25448 === (17))){
var inst_25393 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25467_25512 = state_25447__$1;
(statearr_25467_25512[(2)] = inst_25393);

(statearr_25467_25512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (3))){
var inst_25383 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25447__$1 = state_25447;
if(cljs.core.truth_(inst_25383)){
var statearr_25468_25513 = state_25447__$1;
(statearr_25468_25513[(1)] = (13));

} else {
var statearr_25469_25514 = state_25447__$1;
(statearr_25469_25514[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (12))){
var inst_25379 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25470_25515 = state_25447__$1;
(statearr_25470_25515[(2)] = inst_25379);

(statearr_25470_25515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (2))){
var inst_25366 = (state_25447[(7)]);
var inst_25366__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25447__$1 = (function (){var statearr_25471 = state_25447;
(statearr_25471[(7)] = inst_25366__$1);

return statearr_25471;
})();
if(cljs.core.truth_(inst_25366__$1)){
var statearr_25472_25516 = state_25447__$1;
(statearr_25472_25516[(1)] = (5));

} else {
var statearr_25473_25517 = state_25447__$1;
(statearr_25473_25517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (23))){
var inst_25409 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25447__$1 = state_25447;
if(cljs.core.truth_(inst_25409)){
var statearr_25474_25518 = state_25447__$1;
(statearr_25474_25518[(1)] = (25));

} else {
var statearr_25475_25519 = state_25447__$1;
(statearr_25475_25519[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (35))){
var state_25447__$1 = state_25447;
var statearr_25476_25520 = state_25447__$1;
(statearr_25476_25520[(2)] = null);

(statearr_25476_25520[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (19))){
var inst_25404 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25447__$1 = state_25447;
if(cljs.core.truth_(inst_25404)){
var statearr_25477_25521 = state_25447__$1;
(statearr_25477_25521[(1)] = (22));

} else {
var statearr_25478_25522 = state_25447__$1;
(statearr_25478_25522[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (11))){
var inst_25375 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25479_25523 = state_25447__$1;
(statearr_25479_25523[(2)] = inst_25375);

(statearr_25479_25523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (9))){
var inst_25377 = figwheel.client.heads_up.clear.call(null);
var state_25447__$1 = state_25447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25447__$1,(12),inst_25377);
} else {
if((state_val_25448 === (5))){
var inst_25368 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25447__$1 = state_25447;
var statearr_25480_25524 = state_25447__$1;
(statearr_25480_25524[(2)] = inst_25368);

(statearr_25480_25524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (14))){
var inst_25395 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25447__$1 = state_25447;
if(cljs.core.truth_(inst_25395)){
var statearr_25481_25525 = state_25447__$1;
(statearr_25481_25525[(1)] = (18));

} else {
var statearr_25482_25526 = state_25447__$1;
(statearr_25482_25526[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (26))){
var inst_25419 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25447__$1 = state_25447;
if(cljs.core.truth_(inst_25419)){
var statearr_25483_25527 = state_25447__$1;
(statearr_25483_25527[(1)] = (30));

} else {
var statearr_25484_25528 = state_25447__$1;
(statearr_25484_25528[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (16))){
var inst_25387 = (state_25447[(2)]);
var inst_25388 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25389 = figwheel.client.format_messages.call(null,inst_25388);
var inst_25390 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25391 = figwheel.client.heads_up.display_error.call(null,inst_25389,inst_25390);
var state_25447__$1 = (function (){var statearr_25485 = state_25447;
(statearr_25485[(9)] = inst_25387);

return statearr_25485;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25447__$1,(17),inst_25391);
} else {
if((state_val_25448 === (30))){
var inst_25421 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25422 = figwheel.client.heads_up.display_warning.call(null,inst_25421);
var state_25447__$1 = state_25447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25447__$1,(33),inst_25422);
} else {
if((state_val_25448 === (10))){
var inst_25381 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25486_25529 = state_25447__$1;
(statearr_25486_25529[(2)] = inst_25381);

(statearr_25486_25529[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (18))){
var inst_25397 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25398 = figwheel.client.format_messages.call(null,inst_25397);
var inst_25399 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25400 = figwheel.client.heads_up.display_error.call(null,inst_25398,inst_25399);
var state_25447__$1 = state_25447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25447__$1,(21),inst_25400);
} else {
if((state_val_25448 === (37))){
var inst_25430 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25487_25530 = state_25447__$1;
(statearr_25487_25530[(2)] = inst_25430);

(statearr_25487_25530[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (8))){
var inst_25373 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25447__$1 = state_25447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25447__$1,(11),inst_25373);
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
});})(c__20400__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20379__auto__,c__20400__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20380__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20380__auto____0 = (function (){
var statearr_25491 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25491[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20380__auto__);

(statearr_25491[(1)] = (1));

return statearr_25491;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20380__auto____1 = (function (state_25447){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_25447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e25492){if((e25492 instanceof Object)){
var ex__20383__auto__ = e25492;
var statearr_25493_25531 = state_25447;
(statearr_25493_25531[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25532 = state_25447;
state_25447 = G__25532;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20380__auto__ = function(state_25447){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20380__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20380__auto____1.call(this,state_25447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20380__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20380__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto__,msg_hist,msg_names,msg))
})();
var state__20402__auto__ = (function (){var statearr_25494 = f__20401__auto__.call(null);
(statearr_25494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto__);

return statearr_25494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto__,msg_hist,msg_names,msg))
);

return c__20400__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20400__auto___25595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto___25595,ch){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto___25595,ch){
return (function (state_25578){
var state_val_25579 = (state_25578[(1)]);
if((state_val_25579 === (1))){
var state_25578__$1 = state_25578;
var statearr_25580_25596 = state_25578__$1;
(statearr_25580_25596[(2)] = null);

(statearr_25580_25596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (2))){
var state_25578__$1 = state_25578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25578__$1,(4),ch);
} else {
if((state_val_25579 === (3))){
var inst_25576 = (state_25578[(2)]);
var state_25578__$1 = state_25578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25578__$1,inst_25576);
} else {
if((state_val_25579 === (4))){
var inst_25566 = (state_25578[(7)]);
var inst_25566__$1 = (state_25578[(2)]);
var state_25578__$1 = (function (){var statearr_25581 = state_25578;
(statearr_25581[(7)] = inst_25566__$1);

return statearr_25581;
})();
if(cljs.core.truth_(inst_25566__$1)){
var statearr_25582_25597 = state_25578__$1;
(statearr_25582_25597[(1)] = (5));

} else {
var statearr_25583_25598 = state_25578__$1;
(statearr_25583_25598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (5))){
var inst_25566 = (state_25578[(7)]);
var inst_25568 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25566);
var state_25578__$1 = state_25578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25578__$1,(8),inst_25568);
} else {
if((state_val_25579 === (6))){
var state_25578__$1 = state_25578;
var statearr_25584_25599 = state_25578__$1;
(statearr_25584_25599[(2)] = null);

(statearr_25584_25599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (7))){
var inst_25574 = (state_25578[(2)]);
var state_25578__$1 = state_25578;
var statearr_25585_25600 = state_25578__$1;
(statearr_25585_25600[(2)] = inst_25574);

(statearr_25585_25600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (8))){
var inst_25570 = (state_25578[(2)]);
var state_25578__$1 = (function (){var statearr_25586 = state_25578;
(statearr_25586[(8)] = inst_25570);

return statearr_25586;
})();
var statearr_25587_25601 = state_25578__$1;
(statearr_25587_25601[(2)] = null);

(statearr_25587_25601[(1)] = (2));


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
});})(c__20400__auto___25595,ch))
;
return ((function (switch__20379__auto__,c__20400__auto___25595,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20380__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20380__auto____0 = (function (){
var statearr_25591 = [null,null,null,null,null,null,null,null,null];
(statearr_25591[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20380__auto__);

(statearr_25591[(1)] = (1));

return statearr_25591;
});
var figwheel$client$heads_up_plugin_$_state_machine__20380__auto____1 = (function (state_25578){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_25578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e25592){if((e25592 instanceof Object)){
var ex__20383__auto__ = e25592;
var statearr_25593_25602 = state_25578;
(statearr_25593_25602[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25603 = state_25578;
state_25578 = G__25603;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20380__auto__ = function(state_25578){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20380__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20380__auto____1.call(this,state_25578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20380__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20380__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto___25595,ch))
})();
var state__20402__auto__ = (function (){var statearr_25594 = f__20401__auto__.call(null);
(statearr_25594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___25595);

return statearr_25594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto___25595,ch))
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
var c__20400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto__){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto__){
return (function (state_25624){
var state_val_25625 = (state_25624[(1)]);
if((state_val_25625 === (1))){
var inst_25619 = cljs.core.async.timeout.call(null,(3000));
var state_25624__$1 = state_25624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25624__$1,(2),inst_25619);
} else {
if((state_val_25625 === (2))){
var inst_25621 = (state_25624[(2)]);
var inst_25622 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25624__$1 = (function (){var statearr_25626 = state_25624;
(statearr_25626[(7)] = inst_25621);

return statearr_25626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25624__$1,inst_25622);
} else {
return null;
}
}
});})(c__20400__auto__))
;
return ((function (switch__20379__auto__,c__20400__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20380__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20380__auto____0 = (function (){
var statearr_25630 = [null,null,null,null,null,null,null,null];
(statearr_25630[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20380__auto__);

(statearr_25630[(1)] = (1));

return statearr_25630;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20380__auto____1 = (function (state_25624){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_25624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e25631){if((e25631 instanceof Object)){
var ex__20383__auto__ = e25631;
var statearr_25632_25634 = state_25624;
(statearr_25632_25634[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25635 = state_25624;
state_25624 = G__25635;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20380__auto__ = function(state_25624){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20380__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20380__auto____1.call(this,state_25624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20380__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20380__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto__))
})();
var state__20402__auto__ = (function (){var statearr_25633 = f__20401__auto__.call(null);
(statearr_25633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto__);

return statearr_25633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto__))
);

return c__20400__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25636){
var map__25643 = p__25636;
var map__25643__$1 = ((((!((map__25643 == null)))?((((map__25643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25643):map__25643);
var ed = map__25643__$1;
var formatted_exception = cljs.core.get.call(null,map__25643__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25643__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25643__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25645_25649 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25646_25650 = null;
var count__25647_25651 = (0);
var i__25648_25652 = (0);
while(true){
if((i__25648_25652 < count__25647_25651)){
var msg_25653 = cljs.core._nth.call(null,chunk__25646_25650,i__25648_25652);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25653);

var G__25654 = seq__25645_25649;
var G__25655 = chunk__25646_25650;
var G__25656 = count__25647_25651;
var G__25657 = (i__25648_25652 + (1));
seq__25645_25649 = G__25654;
chunk__25646_25650 = G__25655;
count__25647_25651 = G__25656;
i__25648_25652 = G__25657;
continue;
} else {
var temp__4425__auto___25658 = cljs.core.seq.call(null,seq__25645_25649);
if(temp__4425__auto___25658){
var seq__25645_25659__$1 = temp__4425__auto___25658;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25645_25659__$1)){
var c__19079__auto___25660 = cljs.core.chunk_first.call(null,seq__25645_25659__$1);
var G__25661 = cljs.core.chunk_rest.call(null,seq__25645_25659__$1);
var G__25662 = c__19079__auto___25660;
var G__25663 = cljs.core.count.call(null,c__19079__auto___25660);
var G__25664 = (0);
seq__25645_25649 = G__25661;
chunk__25646_25650 = G__25662;
count__25647_25651 = G__25663;
i__25648_25652 = G__25664;
continue;
} else {
var msg_25665 = cljs.core.first.call(null,seq__25645_25659__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25665);

var G__25666 = cljs.core.next.call(null,seq__25645_25659__$1);
var G__25667 = null;
var G__25668 = (0);
var G__25669 = (0);
seq__25645_25649 = G__25666;
chunk__25646_25650 = G__25667;
count__25647_25651 = G__25668;
i__25648_25652 = G__25669;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25670){
var map__25673 = p__25670;
var map__25673__$1 = ((((!((map__25673 == null)))?((((map__25673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25673):map__25673);
var w = map__25673__$1;
var message = cljs.core.get.call(null,map__25673__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__18264__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18264__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18264__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25681 = cljs.core.seq.call(null,plugins);
var chunk__25682 = null;
var count__25683 = (0);
var i__25684 = (0);
while(true){
if((i__25684 < count__25683)){
var vec__25685 = cljs.core._nth.call(null,chunk__25682,i__25684);
var k = cljs.core.nth.call(null,vec__25685,(0),null);
var plugin = cljs.core.nth.call(null,vec__25685,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25687 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25681,chunk__25682,count__25683,i__25684,pl_25687,vec__25685,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25687.call(null,msg_hist);
});})(seq__25681,chunk__25682,count__25683,i__25684,pl_25687,vec__25685,k,plugin))
);
} else {
}

var G__25688 = seq__25681;
var G__25689 = chunk__25682;
var G__25690 = count__25683;
var G__25691 = (i__25684 + (1));
seq__25681 = G__25688;
chunk__25682 = G__25689;
count__25683 = G__25690;
i__25684 = G__25691;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25681);
if(temp__4425__auto__){
var seq__25681__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25681__$1)){
var c__19079__auto__ = cljs.core.chunk_first.call(null,seq__25681__$1);
var G__25692 = cljs.core.chunk_rest.call(null,seq__25681__$1);
var G__25693 = c__19079__auto__;
var G__25694 = cljs.core.count.call(null,c__19079__auto__);
var G__25695 = (0);
seq__25681 = G__25692;
chunk__25682 = G__25693;
count__25683 = G__25694;
i__25684 = G__25695;
continue;
} else {
var vec__25686 = cljs.core.first.call(null,seq__25681__$1);
var k = cljs.core.nth.call(null,vec__25686,(0),null);
var plugin = cljs.core.nth.call(null,vec__25686,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25696 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25681,chunk__25682,count__25683,i__25684,pl_25696,vec__25686,k,plugin,seq__25681__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25696.call(null,msg_hist);
});})(seq__25681,chunk__25682,count__25683,i__25684,pl_25696,vec__25686,k,plugin,seq__25681__$1,temp__4425__auto__))
);
} else {
}

var G__25697 = cljs.core.next.call(null,seq__25681__$1);
var G__25698 = null;
var G__25699 = (0);
var G__25700 = (0);
seq__25681 = G__25697;
chunk__25682 = G__25698;
count__25683 = G__25699;
i__25684 = G__25700;
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
var args25701 = [];
var len__19330__auto___25704 = arguments.length;
var i__19331__auto___25705 = (0);
while(true){
if((i__19331__auto___25705 < len__19330__auto___25704)){
args25701.push((arguments[i__19331__auto___25705]));

var G__25706 = (i__19331__auto___25705 + (1));
i__19331__auto___25705 = G__25706;
continue;
} else {
}
break;
}

var G__25703 = args25701.length;
switch (G__25703) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25701.length)].join('')));

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
var args__19337__auto__ = [];
var len__19330__auto___25712 = arguments.length;
var i__19331__auto___25713 = (0);
while(true){
if((i__19331__auto___25713 < len__19330__auto___25712)){
args__19337__auto__.push((arguments[i__19331__auto___25713]));

var G__25714 = (i__19331__auto___25713 + (1));
i__19331__auto___25713 = G__25714;
continue;
} else {
}
break;
}

var argseq__19338__auto__ = ((((0) < args__19337__auto__.length))?(new cljs.core.IndexedSeq(args__19337__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19338__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25709){
var map__25710 = p__25709;
var map__25710__$1 = ((((!((map__25710 == null)))?((((map__25710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25710):map__25710);
var opts = map__25710__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25708){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25708));
});

//# sourceMappingURL=client.js.map