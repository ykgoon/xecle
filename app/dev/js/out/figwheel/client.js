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
var pred__24792 = cljs.core._EQ_;
var expr__24793 = (function (){var or__18276__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__18276__auto__)){
return or__18276__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24792.call(null,"true",expr__24793))){
return true;
} else {
if(cljs.core.truth_(pred__24792.call(null,"false",expr__24793))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24793)].join('')));
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
var G__24795__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24796__i = 0, G__24796__a = new Array(arguments.length -  0);
while (G__24796__i < G__24796__a.length) {G__24796__a[G__24796__i] = arguments[G__24796__i + 0]; ++G__24796__i;}
  args = new cljs.core.IndexedSeq(G__24796__a,0);
} 
return G__24795__delegate.call(this,args);};
G__24795.cljs$lang$maxFixedArity = 0;
G__24795.cljs$lang$applyTo = (function (arglist__24797){
var args = cljs.core.seq(arglist__24797);
return G__24795__delegate(args);
});
G__24795.cljs$core$IFn$_invoke$arity$variadic = G__24795__delegate;
return G__24795;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24798){
var map__24801 = p__24798;
var map__24801__$1 = ((((!((map__24801 == null)))?((((map__24801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24801):map__24801);
var message = cljs.core.get.call(null,map__24801__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24801__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20441__auto___24963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto___24963,ch){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto___24963,ch){
return (function (state_24932){
var state_val_24933 = (state_24932[(1)]);
if((state_val_24933 === (7))){
var inst_24928 = (state_24932[(2)]);
var state_24932__$1 = state_24932;
var statearr_24934_24964 = state_24932__$1;
(statearr_24934_24964[(2)] = inst_24928);

(statearr_24934_24964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (1))){
var state_24932__$1 = state_24932;
var statearr_24935_24965 = state_24932__$1;
(statearr_24935_24965[(2)] = null);

(statearr_24935_24965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (4))){
var inst_24885 = (state_24932[(7)]);
var inst_24885__$1 = (state_24932[(2)]);
var state_24932__$1 = (function (){var statearr_24936 = state_24932;
(statearr_24936[(7)] = inst_24885__$1);

return statearr_24936;
})();
if(cljs.core.truth_(inst_24885__$1)){
var statearr_24937_24966 = state_24932__$1;
(statearr_24937_24966[(1)] = (5));

} else {
var statearr_24938_24967 = state_24932__$1;
(statearr_24938_24967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (15))){
var inst_24892 = (state_24932[(8)]);
var inst_24907 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24892);
var inst_24908 = cljs.core.first.call(null,inst_24907);
var inst_24909 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24908);
var inst_24910 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24909)].join('');
var inst_24911 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24910);
var state_24932__$1 = state_24932;
var statearr_24939_24968 = state_24932__$1;
(statearr_24939_24968[(2)] = inst_24911);

(statearr_24939_24968[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (13))){
var inst_24916 = (state_24932[(2)]);
var state_24932__$1 = state_24932;
var statearr_24940_24969 = state_24932__$1;
(statearr_24940_24969[(2)] = inst_24916);

(statearr_24940_24969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (6))){
var state_24932__$1 = state_24932;
var statearr_24941_24970 = state_24932__$1;
(statearr_24941_24970[(2)] = null);

(statearr_24941_24970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (17))){
var inst_24914 = (state_24932[(2)]);
var state_24932__$1 = state_24932;
var statearr_24942_24971 = state_24932__$1;
(statearr_24942_24971[(2)] = inst_24914);

(statearr_24942_24971[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (3))){
var inst_24930 = (state_24932[(2)]);
var state_24932__$1 = state_24932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24932__$1,inst_24930);
} else {
if((state_val_24933 === (12))){
var inst_24891 = (state_24932[(9)]);
var inst_24905 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24891,opts);
var state_24932__$1 = state_24932;
if(cljs.core.truth_(inst_24905)){
var statearr_24943_24972 = state_24932__$1;
(statearr_24943_24972[(1)] = (15));

} else {
var statearr_24944_24973 = state_24932__$1;
(statearr_24944_24973[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (2))){
var state_24932__$1 = state_24932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24932__$1,(4),ch);
} else {
if((state_val_24933 === (11))){
var inst_24892 = (state_24932[(8)]);
var inst_24897 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24898 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24892);
var inst_24899 = cljs.core.async.timeout.call(null,(1000));
var inst_24900 = [inst_24898,inst_24899];
var inst_24901 = (new cljs.core.PersistentVector(null,2,(5),inst_24897,inst_24900,null));
var state_24932__$1 = state_24932;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24932__$1,(14),inst_24901);
} else {
if((state_val_24933 === (9))){
var inst_24892 = (state_24932[(8)]);
var inst_24918 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24919 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24892);
var inst_24920 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24919);
var inst_24921 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24920)].join('');
var inst_24922 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24921);
var state_24932__$1 = (function (){var statearr_24945 = state_24932;
(statearr_24945[(10)] = inst_24918);

return statearr_24945;
})();
var statearr_24946_24974 = state_24932__$1;
(statearr_24946_24974[(2)] = inst_24922);

(statearr_24946_24974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (5))){
var inst_24885 = (state_24932[(7)]);
var inst_24887 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24888 = (new cljs.core.PersistentArrayMap(null,2,inst_24887,null));
var inst_24889 = (new cljs.core.PersistentHashSet(null,inst_24888,null));
var inst_24890 = figwheel.client.focus_msgs.call(null,inst_24889,inst_24885);
var inst_24891 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24890);
var inst_24892 = cljs.core.first.call(null,inst_24890);
var inst_24893 = figwheel.client.autoload_QMARK_.call(null);
var state_24932__$1 = (function (){var statearr_24947 = state_24932;
(statearr_24947[(9)] = inst_24891);

(statearr_24947[(8)] = inst_24892);

return statearr_24947;
})();
if(cljs.core.truth_(inst_24893)){
var statearr_24948_24975 = state_24932__$1;
(statearr_24948_24975[(1)] = (8));

} else {
var statearr_24949_24976 = state_24932__$1;
(statearr_24949_24976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (14))){
var inst_24903 = (state_24932[(2)]);
var state_24932__$1 = state_24932;
var statearr_24950_24977 = state_24932__$1;
(statearr_24950_24977[(2)] = inst_24903);

(statearr_24950_24977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (16))){
var state_24932__$1 = state_24932;
var statearr_24951_24978 = state_24932__$1;
(statearr_24951_24978[(2)] = null);

(statearr_24951_24978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (10))){
var inst_24924 = (state_24932[(2)]);
var state_24932__$1 = (function (){var statearr_24952 = state_24932;
(statearr_24952[(11)] = inst_24924);

return statearr_24952;
})();
var statearr_24953_24979 = state_24932__$1;
(statearr_24953_24979[(2)] = null);

(statearr_24953_24979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24933 === (8))){
var inst_24891 = (state_24932[(9)]);
var inst_24895 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24891,opts);
var state_24932__$1 = state_24932;
if(cljs.core.truth_(inst_24895)){
var statearr_24954_24980 = state_24932__$1;
(statearr_24954_24980[(1)] = (11));

} else {
var statearr_24955_24981 = state_24932__$1;
(statearr_24955_24981[(1)] = (12));

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
});})(c__20441__auto___24963,ch))
;
return ((function (switch__20376__auto__,c__20441__auto___24963,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20377__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20377__auto____0 = (function (){
var statearr_24959 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24959[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20377__auto__);

(statearr_24959[(1)] = (1));

return statearr_24959;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20377__auto____1 = (function (state_24932){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_24932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e24960){if((e24960 instanceof Object)){
var ex__20380__auto__ = e24960;
var statearr_24961_24982 = state_24932;
(statearr_24961_24982[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24983 = state_24932;
state_24932 = G__24983;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20377__auto__ = function(state_24932){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20377__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20377__auto____1.call(this,state_24932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20377__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20377__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto___24963,ch))
})();
var state__20443__auto__ = (function (){var statearr_24962 = f__20442__auto__.call(null);
(statearr_24962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___24963);

return statearr_24962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto___24963,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24984_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24984_SHARP_));
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
var base_path_24991 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24991){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24989 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24990 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24989,_STAR_print_newline_STAR_24990,base_path_24991){
return (function() { 
var G__24992__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24992 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24993__i = 0, G__24993__a = new Array(arguments.length -  0);
while (G__24993__i < G__24993__a.length) {G__24993__a[G__24993__i] = arguments[G__24993__i + 0]; ++G__24993__i;}
  args = new cljs.core.IndexedSeq(G__24993__a,0);
} 
return G__24992__delegate.call(this,args);};
G__24992.cljs$lang$maxFixedArity = 0;
G__24992.cljs$lang$applyTo = (function (arglist__24994){
var args = cljs.core.seq(arglist__24994);
return G__24992__delegate(args);
});
G__24992.cljs$core$IFn$_invoke$arity$variadic = G__24992__delegate;
return G__24992;
})()
;})(_STAR_print_fn_STAR_24989,_STAR_print_newline_STAR_24990,base_path_24991))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24990;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24989;
}}catch (e24988){if((e24988 instanceof Error)){
var e = e24988;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24991], null));
} else {
var e = e24988;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24991))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24995){
var map__25002 = p__24995;
var map__25002__$1 = ((((!((map__25002 == null)))?((((map__25002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25002):map__25002);
var opts = map__25002__$1;
var build_id = cljs.core.get.call(null,map__25002__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25002,map__25002__$1,opts,build_id){
return (function (p__25004){
var vec__25005 = p__25004;
var map__25006 = cljs.core.nth.call(null,vec__25005,(0),null);
var map__25006__$1 = ((((!((map__25006 == null)))?((((map__25006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25006):map__25006);
var msg = map__25006__$1;
var msg_name = cljs.core.get.call(null,map__25006__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25005,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25005,map__25006,map__25006__$1,msg,msg_name,_,map__25002,map__25002__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25005,map__25006,map__25006__$1,msg,msg_name,_,map__25002,map__25002__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25002,map__25002__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25012){
var vec__25013 = p__25012;
var map__25014 = cljs.core.nth.call(null,vec__25013,(0),null);
var map__25014__$1 = ((((!((map__25014 == null)))?((((map__25014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25014):map__25014);
var msg = map__25014__$1;
var msg_name = cljs.core.get.call(null,map__25014__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25013,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25016){
var map__25026 = p__25016;
var map__25026__$1 = ((((!((map__25026 == null)))?((((map__25026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25026):map__25026);
var on_compile_warning = cljs.core.get.call(null,map__25026__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25026__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25026,map__25026__$1,on_compile_warning,on_compile_fail){
return (function (p__25028){
var vec__25029 = p__25028;
var map__25030 = cljs.core.nth.call(null,vec__25029,(0),null);
var map__25030__$1 = ((((!((map__25030 == null)))?((((map__25030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25030):map__25030);
var msg = map__25030__$1;
var msg_name = cljs.core.get.call(null,map__25030__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25029,(1));
var pred__25032 = cljs.core._EQ_;
var expr__25033 = msg_name;
if(cljs.core.truth_(pred__25032.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25033))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25032.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25033))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25026,map__25026__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto__,msg_hist,msg_names,msg){
return (function (state_25249){
var state_val_25250 = (state_25249[(1)]);
if((state_val_25250 === (7))){
var inst_25173 = (state_25249[(2)]);
var state_25249__$1 = state_25249;
if(cljs.core.truth_(inst_25173)){
var statearr_25251_25297 = state_25249__$1;
(statearr_25251_25297[(1)] = (8));

} else {
var statearr_25252_25298 = state_25249__$1;
(statearr_25252_25298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (20))){
var inst_25243 = (state_25249[(2)]);
var state_25249__$1 = state_25249;
var statearr_25253_25299 = state_25249__$1;
(statearr_25253_25299[(2)] = inst_25243);

(statearr_25253_25299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (27))){
var inst_25239 = (state_25249[(2)]);
var state_25249__$1 = state_25249;
var statearr_25254_25300 = state_25249__$1;
(statearr_25254_25300[(2)] = inst_25239);

(statearr_25254_25300[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (1))){
var inst_25166 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25249__$1 = state_25249;
if(cljs.core.truth_(inst_25166)){
var statearr_25255_25301 = state_25249__$1;
(statearr_25255_25301[(1)] = (2));

} else {
var statearr_25256_25302 = state_25249__$1;
(statearr_25256_25302[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (24))){
var inst_25241 = (state_25249[(2)]);
var state_25249__$1 = state_25249;
var statearr_25257_25303 = state_25249__$1;
(statearr_25257_25303[(2)] = inst_25241);

(statearr_25257_25303[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (4))){
var inst_25247 = (state_25249[(2)]);
var state_25249__$1 = state_25249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25249__$1,inst_25247);
} else {
if((state_val_25250 === (15))){
var inst_25245 = (state_25249[(2)]);
var state_25249__$1 = state_25249;
var statearr_25258_25304 = state_25249__$1;
(statearr_25258_25304[(2)] = inst_25245);

(statearr_25258_25304[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (21))){
var inst_25204 = (state_25249[(2)]);
var state_25249__$1 = state_25249;
var statearr_25259_25305 = state_25249__$1;
(statearr_25259_25305[(2)] = inst_25204);

(statearr_25259_25305[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (31))){
var inst_25228 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25249__$1 = state_25249;
if(cljs.core.truth_(inst_25228)){
var statearr_25260_25306 = state_25249__$1;
(statearr_25260_25306[(1)] = (34));

} else {
var statearr_25261_25307 = state_25249__$1;
(statearr_25261_25307[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (32))){
var inst_25237 = (state_25249[(2)]);
var state_25249__$1 = state_25249;
var statearr_25262_25308 = state_25249__$1;
(statearr_25262_25308[(2)] = inst_25237);

(statearr_25262_25308[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (33))){
var inst_25226 = (state_25249[(2)]);
var state_25249__$1 = state_25249;
var statearr_25263_25309 = state_25249__$1;
(statearr_25263_25309[(2)] = inst_25226);

(statearr_25263_25309[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (13))){
var inst_25187 = figwheel.client.heads_up.clear.call(null);
var state_25249__$1 = state_25249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25249__$1,(16),inst_25187);
} else {
if((state_val_25250 === (22))){
var inst_25208 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25209 = figwheel.client.heads_up.append_message.call(null,inst_25208);
var state_25249__$1 = state_25249;
var statearr_25264_25310 = state_25249__$1;
(statearr_25264_25310[(2)] = inst_25209);

(statearr_25264_25310[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (36))){
var inst_25235 = (state_25249[(2)]);
var state_25249__$1 = state_25249;
var statearr_25265_25311 = state_25249__$1;
(statearr_25265_25311[(2)] = inst_25235);

(statearr_25265_25311[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (29))){
var inst_25219 = (state_25249[(2)]);
var state_25249__$1 = state_25249;
var statearr_25266_25312 = state_25249__$1;
(statearr_25266_25312[(2)] = inst_25219);

(statearr_25266_25312[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (6))){
var inst_25168 = (state_25249[(7)]);
var state_25249__$1 = state_25249;
var statearr_25267_25313 = state_25249__$1;
(statearr_25267_25313[(2)] = inst_25168);

(statearr_25267_25313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (28))){
var inst_25215 = (state_25249[(2)]);
var inst_25216 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25217 = figwheel.client.heads_up.display_warning.call(null,inst_25216);
var state_25249__$1 = (function (){var statearr_25268 = state_25249;
(statearr_25268[(8)] = inst_25215);

return statearr_25268;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25249__$1,(29),inst_25217);
} else {
if((state_val_25250 === (25))){
var inst_25213 = figwheel.client.heads_up.clear.call(null);
var state_25249__$1 = state_25249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25249__$1,(28),inst_25213);
} else {
if((state_val_25250 === (34))){
var inst_25230 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25249__$1 = state_25249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25249__$1,(37),inst_25230);
} else {
if((state_val_25250 === (17))){
var inst_25195 = (state_25249[(2)]);
var state_25249__$1 = state_25249;
var statearr_25269_25314 = state_25249__$1;
(statearr_25269_25314[(2)] = inst_25195);

(statearr_25269_25314[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (3))){
var inst_25185 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25249__$1 = state_25249;
if(cljs.core.truth_(inst_25185)){
var statearr_25270_25315 = state_25249__$1;
(statearr_25270_25315[(1)] = (13));

} else {
var statearr_25271_25316 = state_25249__$1;
(statearr_25271_25316[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (12))){
var inst_25181 = (state_25249[(2)]);
var state_25249__$1 = state_25249;
var statearr_25272_25317 = state_25249__$1;
(statearr_25272_25317[(2)] = inst_25181);

(statearr_25272_25317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (2))){
var inst_25168 = (state_25249[(7)]);
var inst_25168__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25249__$1 = (function (){var statearr_25273 = state_25249;
(statearr_25273[(7)] = inst_25168__$1);

return statearr_25273;
})();
if(cljs.core.truth_(inst_25168__$1)){
var statearr_25274_25318 = state_25249__$1;
(statearr_25274_25318[(1)] = (5));

} else {
var statearr_25275_25319 = state_25249__$1;
(statearr_25275_25319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (23))){
var inst_25211 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25249__$1 = state_25249;
if(cljs.core.truth_(inst_25211)){
var statearr_25276_25320 = state_25249__$1;
(statearr_25276_25320[(1)] = (25));

} else {
var statearr_25277_25321 = state_25249__$1;
(statearr_25277_25321[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (35))){
var state_25249__$1 = state_25249;
var statearr_25278_25322 = state_25249__$1;
(statearr_25278_25322[(2)] = null);

(statearr_25278_25322[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (19))){
var inst_25206 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25249__$1 = state_25249;
if(cljs.core.truth_(inst_25206)){
var statearr_25279_25323 = state_25249__$1;
(statearr_25279_25323[(1)] = (22));

} else {
var statearr_25280_25324 = state_25249__$1;
(statearr_25280_25324[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (11))){
var inst_25177 = (state_25249[(2)]);
var state_25249__$1 = state_25249;
var statearr_25281_25325 = state_25249__$1;
(statearr_25281_25325[(2)] = inst_25177);

(statearr_25281_25325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (9))){
var inst_25179 = figwheel.client.heads_up.clear.call(null);
var state_25249__$1 = state_25249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25249__$1,(12),inst_25179);
} else {
if((state_val_25250 === (5))){
var inst_25170 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25249__$1 = state_25249;
var statearr_25282_25326 = state_25249__$1;
(statearr_25282_25326[(2)] = inst_25170);

(statearr_25282_25326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (14))){
var inst_25197 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25249__$1 = state_25249;
if(cljs.core.truth_(inst_25197)){
var statearr_25283_25327 = state_25249__$1;
(statearr_25283_25327[(1)] = (18));

} else {
var statearr_25284_25328 = state_25249__$1;
(statearr_25284_25328[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (26))){
var inst_25221 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25249__$1 = state_25249;
if(cljs.core.truth_(inst_25221)){
var statearr_25285_25329 = state_25249__$1;
(statearr_25285_25329[(1)] = (30));

} else {
var statearr_25286_25330 = state_25249__$1;
(statearr_25286_25330[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (16))){
var inst_25189 = (state_25249[(2)]);
var inst_25190 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25191 = figwheel.client.format_messages.call(null,inst_25190);
var inst_25192 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25193 = figwheel.client.heads_up.display_error.call(null,inst_25191,inst_25192);
var state_25249__$1 = (function (){var statearr_25287 = state_25249;
(statearr_25287[(9)] = inst_25189);

return statearr_25287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25249__$1,(17),inst_25193);
} else {
if((state_val_25250 === (30))){
var inst_25223 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25224 = figwheel.client.heads_up.display_warning.call(null,inst_25223);
var state_25249__$1 = state_25249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25249__$1,(33),inst_25224);
} else {
if((state_val_25250 === (10))){
var inst_25183 = (state_25249[(2)]);
var state_25249__$1 = state_25249;
var statearr_25288_25331 = state_25249__$1;
(statearr_25288_25331[(2)] = inst_25183);

(statearr_25288_25331[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (18))){
var inst_25199 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25200 = figwheel.client.format_messages.call(null,inst_25199);
var inst_25201 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25202 = figwheel.client.heads_up.display_error.call(null,inst_25200,inst_25201);
var state_25249__$1 = state_25249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25249__$1,(21),inst_25202);
} else {
if((state_val_25250 === (37))){
var inst_25232 = (state_25249[(2)]);
var state_25249__$1 = state_25249;
var statearr_25289_25332 = state_25249__$1;
(statearr_25289_25332[(2)] = inst_25232);

(statearr_25289_25332[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25250 === (8))){
var inst_25175 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25249__$1 = state_25249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25249__$1,(11),inst_25175);
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
});})(c__20441__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20376__auto__,c__20441__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20377__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20377__auto____0 = (function (){
var statearr_25293 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25293[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20377__auto__);

(statearr_25293[(1)] = (1));

return statearr_25293;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20377__auto____1 = (function (state_25249){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_25249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e25294){if((e25294 instanceof Object)){
var ex__20380__auto__ = e25294;
var statearr_25295_25333 = state_25249;
(statearr_25295_25333[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25334 = state_25249;
state_25249 = G__25334;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20377__auto__ = function(state_25249){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20377__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20377__auto____1.call(this,state_25249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20377__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20377__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto__,msg_hist,msg_names,msg))
})();
var state__20443__auto__ = (function (){var statearr_25296 = f__20442__auto__.call(null);
(statearr_25296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto__);

return statearr_25296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto__,msg_hist,msg_names,msg))
);

return c__20441__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20441__auto___25397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto___25397,ch){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto___25397,ch){
return (function (state_25380){
var state_val_25381 = (state_25380[(1)]);
if((state_val_25381 === (1))){
var state_25380__$1 = state_25380;
var statearr_25382_25398 = state_25380__$1;
(statearr_25382_25398[(2)] = null);

(statearr_25382_25398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25381 === (2))){
var state_25380__$1 = state_25380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25380__$1,(4),ch);
} else {
if((state_val_25381 === (3))){
var inst_25378 = (state_25380[(2)]);
var state_25380__$1 = state_25380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25380__$1,inst_25378);
} else {
if((state_val_25381 === (4))){
var inst_25368 = (state_25380[(7)]);
var inst_25368__$1 = (state_25380[(2)]);
var state_25380__$1 = (function (){var statearr_25383 = state_25380;
(statearr_25383[(7)] = inst_25368__$1);

return statearr_25383;
})();
if(cljs.core.truth_(inst_25368__$1)){
var statearr_25384_25399 = state_25380__$1;
(statearr_25384_25399[(1)] = (5));

} else {
var statearr_25385_25400 = state_25380__$1;
(statearr_25385_25400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25381 === (5))){
var inst_25368 = (state_25380[(7)]);
var inst_25370 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25368);
var state_25380__$1 = state_25380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25380__$1,(8),inst_25370);
} else {
if((state_val_25381 === (6))){
var state_25380__$1 = state_25380;
var statearr_25386_25401 = state_25380__$1;
(statearr_25386_25401[(2)] = null);

(statearr_25386_25401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25381 === (7))){
var inst_25376 = (state_25380[(2)]);
var state_25380__$1 = state_25380;
var statearr_25387_25402 = state_25380__$1;
(statearr_25387_25402[(2)] = inst_25376);

(statearr_25387_25402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25381 === (8))){
var inst_25372 = (state_25380[(2)]);
var state_25380__$1 = (function (){var statearr_25388 = state_25380;
(statearr_25388[(8)] = inst_25372);

return statearr_25388;
})();
var statearr_25389_25403 = state_25380__$1;
(statearr_25389_25403[(2)] = null);

(statearr_25389_25403[(1)] = (2));


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
});})(c__20441__auto___25397,ch))
;
return ((function (switch__20376__auto__,c__20441__auto___25397,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20377__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20377__auto____0 = (function (){
var statearr_25393 = [null,null,null,null,null,null,null,null,null];
(statearr_25393[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20377__auto__);

(statearr_25393[(1)] = (1));

return statearr_25393;
});
var figwheel$client$heads_up_plugin_$_state_machine__20377__auto____1 = (function (state_25380){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_25380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e25394){if((e25394 instanceof Object)){
var ex__20380__auto__ = e25394;
var statearr_25395_25404 = state_25380;
(statearr_25395_25404[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25405 = state_25380;
state_25380 = G__25405;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20377__auto__ = function(state_25380){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20377__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20377__auto____1.call(this,state_25380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20377__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20377__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto___25397,ch))
})();
var state__20443__auto__ = (function (){var statearr_25396 = f__20442__auto__.call(null);
(statearr_25396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___25397);

return statearr_25396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto___25397,ch))
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
var c__20441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto__){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto__){
return (function (state_25426){
var state_val_25427 = (state_25426[(1)]);
if((state_val_25427 === (1))){
var inst_25421 = cljs.core.async.timeout.call(null,(3000));
var state_25426__$1 = state_25426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25426__$1,(2),inst_25421);
} else {
if((state_val_25427 === (2))){
var inst_25423 = (state_25426[(2)]);
var inst_25424 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25426__$1 = (function (){var statearr_25428 = state_25426;
(statearr_25428[(7)] = inst_25423);

return statearr_25428;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25426__$1,inst_25424);
} else {
return null;
}
}
});})(c__20441__auto__))
;
return ((function (switch__20376__auto__,c__20441__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20377__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20377__auto____0 = (function (){
var statearr_25432 = [null,null,null,null,null,null,null,null];
(statearr_25432[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20377__auto__);

(statearr_25432[(1)] = (1));

return statearr_25432;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20377__auto____1 = (function (state_25426){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_25426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e25433){if((e25433 instanceof Object)){
var ex__20380__auto__ = e25433;
var statearr_25434_25436 = state_25426;
(statearr_25434_25436[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25437 = state_25426;
state_25426 = G__25437;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20377__auto__ = function(state_25426){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20377__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20377__auto____1.call(this,state_25426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20377__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20377__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto__))
})();
var state__20443__auto__ = (function (){var statearr_25435 = f__20442__auto__.call(null);
(statearr_25435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto__);

return statearr_25435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto__))
);

return c__20441__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25438){
var map__25445 = p__25438;
var map__25445__$1 = ((((!((map__25445 == null)))?((((map__25445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25445):map__25445);
var ed = map__25445__$1;
var formatted_exception = cljs.core.get.call(null,map__25445__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25445__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25445__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25447_25451 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25448_25452 = null;
var count__25449_25453 = (0);
var i__25450_25454 = (0);
while(true){
if((i__25450_25454 < count__25449_25453)){
var msg_25455 = cljs.core._nth.call(null,chunk__25448_25452,i__25450_25454);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25455);

var G__25456 = seq__25447_25451;
var G__25457 = chunk__25448_25452;
var G__25458 = count__25449_25453;
var G__25459 = (i__25450_25454 + (1));
seq__25447_25451 = G__25456;
chunk__25448_25452 = G__25457;
count__25449_25453 = G__25458;
i__25450_25454 = G__25459;
continue;
} else {
var temp__4425__auto___25460 = cljs.core.seq.call(null,seq__25447_25451);
if(temp__4425__auto___25460){
var seq__25447_25461__$1 = temp__4425__auto___25460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25447_25461__$1)){
var c__19079__auto___25462 = cljs.core.chunk_first.call(null,seq__25447_25461__$1);
var G__25463 = cljs.core.chunk_rest.call(null,seq__25447_25461__$1);
var G__25464 = c__19079__auto___25462;
var G__25465 = cljs.core.count.call(null,c__19079__auto___25462);
var G__25466 = (0);
seq__25447_25451 = G__25463;
chunk__25448_25452 = G__25464;
count__25449_25453 = G__25465;
i__25450_25454 = G__25466;
continue;
} else {
var msg_25467 = cljs.core.first.call(null,seq__25447_25461__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25467);

var G__25468 = cljs.core.next.call(null,seq__25447_25461__$1);
var G__25469 = null;
var G__25470 = (0);
var G__25471 = (0);
seq__25447_25451 = G__25468;
chunk__25448_25452 = G__25469;
count__25449_25453 = G__25470;
i__25450_25454 = G__25471;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25472){
var map__25475 = p__25472;
var map__25475__$1 = ((((!((map__25475 == null)))?((((map__25475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25475):map__25475);
var w = map__25475__$1;
var message = cljs.core.get.call(null,map__25475__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__25483 = cljs.core.seq.call(null,plugins);
var chunk__25484 = null;
var count__25485 = (0);
var i__25486 = (0);
while(true){
if((i__25486 < count__25485)){
var vec__25487 = cljs.core._nth.call(null,chunk__25484,i__25486);
var k = cljs.core.nth.call(null,vec__25487,(0),null);
var plugin = cljs.core.nth.call(null,vec__25487,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25489 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25483,chunk__25484,count__25485,i__25486,pl_25489,vec__25487,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25489.call(null,msg_hist);
});})(seq__25483,chunk__25484,count__25485,i__25486,pl_25489,vec__25487,k,plugin))
);
} else {
}

var G__25490 = seq__25483;
var G__25491 = chunk__25484;
var G__25492 = count__25485;
var G__25493 = (i__25486 + (1));
seq__25483 = G__25490;
chunk__25484 = G__25491;
count__25485 = G__25492;
i__25486 = G__25493;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25483);
if(temp__4425__auto__){
var seq__25483__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25483__$1)){
var c__19079__auto__ = cljs.core.chunk_first.call(null,seq__25483__$1);
var G__25494 = cljs.core.chunk_rest.call(null,seq__25483__$1);
var G__25495 = c__19079__auto__;
var G__25496 = cljs.core.count.call(null,c__19079__auto__);
var G__25497 = (0);
seq__25483 = G__25494;
chunk__25484 = G__25495;
count__25485 = G__25496;
i__25486 = G__25497;
continue;
} else {
var vec__25488 = cljs.core.first.call(null,seq__25483__$1);
var k = cljs.core.nth.call(null,vec__25488,(0),null);
var plugin = cljs.core.nth.call(null,vec__25488,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25498 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25483,chunk__25484,count__25485,i__25486,pl_25498,vec__25488,k,plugin,seq__25483__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25498.call(null,msg_hist);
});})(seq__25483,chunk__25484,count__25485,i__25486,pl_25498,vec__25488,k,plugin,seq__25483__$1,temp__4425__auto__))
);
} else {
}

var G__25499 = cljs.core.next.call(null,seq__25483__$1);
var G__25500 = null;
var G__25501 = (0);
var G__25502 = (0);
seq__25483 = G__25499;
chunk__25484 = G__25500;
count__25485 = G__25501;
i__25486 = G__25502;
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
var args25503 = [];
var len__19330__auto___25506 = arguments.length;
var i__19331__auto___25507 = (0);
while(true){
if((i__19331__auto___25507 < len__19330__auto___25506)){
args25503.push((arguments[i__19331__auto___25507]));

var G__25508 = (i__19331__auto___25507 + (1));
i__19331__auto___25507 = G__25508;
continue;
} else {
}
break;
}

var G__25505 = args25503.length;
switch (G__25505) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25503.length)].join('')));

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
var len__19330__auto___25514 = arguments.length;
var i__19331__auto___25515 = (0);
while(true){
if((i__19331__auto___25515 < len__19330__auto___25514)){
args__19337__auto__.push((arguments[i__19331__auto___25515]));

var G__25516 = (i__19331__auto___25515 + (1));
i__19331__auto___25515 = G__25516;
continue;
} else {
}
break;
}

var argseq__19338__auto__ = ((((0) < args__19337__auto__.length))?(new cljs.core.IndexedSeq(args__19337__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19338__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25511){
var map__25512 = p__25511;
var map__25512__$1 = ((((!((map__25512 == null)))?((((map__25512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25512):map__25512);
var opts = map__25512__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25510){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25510));
});

//# sourceMappingURL=client.js.map