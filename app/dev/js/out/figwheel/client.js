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
var pred__21665 = cljs.core._EQ_;
var expr__21666 = (function (){var or__18276__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__18276__auto__)){
return or__18276__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__21665.call(null,"true",expr__21666))){
return true;
} else {
if(cljs.core.truth_(pred__21665.call(null,"false",expr__21666))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21666)].join('')));
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
var G__21668__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__21668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21669__i = 0, G__21669__a = new Array(arguments.length -  0);
while (G__21669__i < G__21669__a.length) {G__21669__a[G__21669__i] = arguments[G__21669__i + 0]; ++G__21669__i;}
  args = new cljs.core.IndexedSeq(G__21669__a,0);
} 
return G__21668__delegate.call(this,args);};
G__21668.cljs$lang$maxFixedArity = 0;
G__21668.cljs$lang$applyTo = (function (arglist__21670){
var args = cljs.core.seq(arglist__21670);
return G__21668__delegate(args);
});
G__21668.cljs$core$IFn$_invoke$arity$variadic = G__21668__delegate;
return G__21668;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__21671){
var map__21674 = p__21671;
var map__21674__$1 = ((((!((map__21674 == null)))?((((map__21674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21674):map__21674);
var message = cljs.core.get.call(null,map__21674__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__21674__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20322__auto___21836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20322__auto___21836,ch){
return (function (){
var f__20323__auto__ = (function (){var switch__20301__auto__ = ((function (c__20322__auto___21836,ch){
return (function (state_21805){
var state_val_21806 = (state_21805[(1)]);
if((state_val_21806 === (7))){
var inst_21801 = (state_21805[(2)]);
var state_21805__$1 = state_21805;
var statearr_21807_21837 = state_21805__$1;
(statearr_21807_21837[(2)] = inst_21801);

(statearr_21807_21837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (1))){
var state_21805__$1 = state_21805;
var statearr_21808_21838 = state_21805__$1;
(statearr_21808_21838[(2)] = null);

(statearr_21808_21838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (4))){
var inst_21758 = (state_21805[(7)]);
var inst_21758__$1 = (state_21805[(2)]);
var state_21805__$1 = (function (){var statearr_21809 = state_21805;
(statearr_21809[(7)] = inst_21758__$1);

return statearr_21809;
})();
if(cljs.core.truth_(inst_21758__$1)){
var statearr_21810_21839 = state_21805__$1;
(statearr_21810_21839[(1)] = (5));

} else {
var statearr_21811_21840 = state_21805__$1;
(statearr_21811_21840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (15))){
var inst_21765 = (state_21805[(8)]);
var inst_21780 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_21765);
var inst_21781 = cljs.core.first.call(null,inst_21780);
var inst_21782 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_21781);
var inst_21783 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_21782)].join('');
var inst_21784 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_21783);
var state_21805__$1 = state_21805;
var statearr_21812_21841 = state_21805__$1;
(statearr_21812_21841[(2)] = inst_21784);

(statearr_21812_21841[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (13))){
var inst_21789 = (state_21805[(2)]);
var state_21805__$1 = state_21805;
var statearr_21813_21842 = state_21805__$1;
(statearr_21813_21842[(2)] = inst_21789);

(statearr_21813_21842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (6))){
var state_21805__$1 = state_21805;
var statearr_21814_21843 = state_21805__$1;
(statearr_21814_21843[(2)] = null);

(statearr_21814_21843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (17))){
var inst_21787 = (state_21805[(2)]);
var state_21805__$1 = state_21805;
var statearr_21815_21844 = state_21805__$1;
(statearr_21815_21844[(2)] = inst_21787);

(statearr_21815_21844[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (3))){
var inst_21803 = (state_21805[(2)]);
var state_21805__$1 = state_21805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21805__$1,inst_21803);
} else {
if((state_val_21806 === (12))){
var inst_21764 = (state_21805[(9)]);
var inst_21778 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_21764,opts);
var state_21805__$1 = state_21805;
if(cljs.core.truth_(inst_21778)){
var statearr_21816_21845 = state_21805__$1;
(statearr_21816_21845[(1)] = (15));

} else {
var statearr_21817_21846 = state_21805__$1;
(statearr_21817_21846[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (2))){
var state_21805__$1 = state_21805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21805__$1,(4),ch);
} else {
if((state_val_21806 === (11))){
var inst_21765 = (state_21805[(8)]);
var inst_21770 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21771 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_21765);
var inst_21772 = cljs.core.async.timeout.call(null,(1000));
var inst_21773 = [inst_21771,inst_21772];
var inst_21774 = (new cljs.core.PersistentVector(null,2,(5),inst_21770,inst_21773,null));
var state_21805__$1 = state_21805;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21805__$1,(14),inst_21774);
} else {
if((state_val_21806 === (9))){
var inst_21765 = (state_21805[(8)]);
var inst_21791 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_21792 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_21765);
var inst_21793 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21792);
var inst_21794 = [cljs.core.str("Not loading: "),cljs.core.str(inst_21793)].join('');
var inst_21795 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_21794);
var state_21805__$1 = (function (){var statearr_21818 = state_21805;
(statearr_21818[(10)] = inst_21791);

return statearr_21818;
})();
var statearr_21819_21847 = state_21805__$1;
(statearr_21819_21847[(2)] = inst_21795);

(statearr_21819_21847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (5))){
var inst_21758 = (state_21805[(7)]);
var inst_21760 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_21761 = (new cljs.core.PersistentArrayMap(null,2,inst_21760,null));
var inst_21762 = (new cljs.core.PersistentHashSet(null,inst_21761,null));
var inst_21763 = figwheel.client.focus_msgs.call(null,inst_21762,inst_21758);
var inst_21764 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_21763);
var inst_21765 = cljs.core.first.call(null,inst_21763);
var inst_21766 = figwheel.client.autoload_QMARK_.call(null);
var state_21805__$1 = (function (){var statearr_21820 = state_21805;
(statearr_21820[(9)] = inst_21764);

(statearr_21820[(8)] = inst_21765);

return statearr_21820;
})();
if(cljs.core.truth_(inst_21766)){
var statearr_21821_21848 = state_21805__$1;
(statearr_21821_21848[(1)] = (8));

} else {
var statearr_21822_21849 = state_21805__$1;
(statearr_21822_21849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (14))){
var inst_21776 = (state_21805[(2)]);
var state_21805__$1 = state_21805;
var statearr_21823_21850 = state_21805__$1;
(statearr_21823_21850[(2)] = inst_21776);

(statearr_21823_21850[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (16))){
var state_21805__$1 = state_21805;
var statearr_21824_21851 = state_21805__$1;
(statearr_21824_21851[(2)] = null);

(statearr_21824_21851[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (10))){
var inst_21797 = (state_21805[(2)]);
var state_21805__$1 = (function (){var statearr_21825 = state_21805;
(statearr_21825[(11)] = inst_21797);

return statearr_21825;
})();
var statearr_21826_21852 = state_21805__$1;
(statearr_21826_21852[(2)] = null);

(statearr_21826_21852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21806 === (8))){
var inst_21764 = (state_21805[(9)]);
var inst_21768 = figwheel.client.reload_file_state_QMARK_.call(null,inst_21764,opts);
var state_21805__$1 = state_21805;
if(cljs.core.truth_(inst_21768)){
var statearr_21827_21853 = state_21805__$1;
(statearr_21827_21853[(1)] = (11));

} else {
var statearr_21828_21854 = state_21805__$1;
(statearr_21828_21854[(1)] = (12));

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
});})(c__20322__auto___21836,ch))
;
return ((function (switch__20301__auto__,c__20322__auto___21836,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20302__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20302__auto____0 = (function (){
var statearr_21832 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21832[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20302__auto__);

(statearr_21832[(1)] = (1));

return statearr_21832;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20302__auto____1 = (function (state_21805){
while(true){
var ret_value__20303__auto__ = (function (){try{while(true){
var result__20304__auto__ = switch__20301__auto__.call(null,state_21805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20304__auto__;
}
break;
}
}catch (e21833){if((e21833 instanceof Object)){
var ex__20305__auto__ = e21833;
var statearr_21834_21855 = state_21805;
(statearr_21834_21855[(5)] = ex__20305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21856 = state_21805;
state_21805 = G__21856;
continue;
} else {
return ret_value__20303__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20302__auto__ = function(state_21805){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20302__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20302__auto____1.call(this,state_21805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20302__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20302__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20302__auto__;
})()
;})(switch__20301__auto__,c__20322__auto___21836,ch))
})();
var state__20324__auto__ = (function (){var statearr_21835 = f__20323__auto__.call(null);
(statearr_21835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20322__auto___21836);

return statearr_21835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20324__auto__);
});})(c__20322__auto___21836,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__21857_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__21857_SHARP_));
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
var base_path_21864 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_21864){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_21862 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_21863 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_21862,_STAR_print_newline_STAR_21863,base_path_21864){
return (function() { 
var G__21865__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__21865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21866__i = 0, G__21866__a = new Array(arguments.length -  0);
while (G__21866__i < G__21866__a.length) {G__21866__a[G__21866__i] = arguments[G__21866__i + 0]; ++G__21866__i;}
  args = new cljs.core.IndexedSeq(G__21866__a,0);
} 
return G__21865__delegate.call(this,args);};
G__21865.cljs$lang$maxFixedArity = 0;
G__21865.cljs$lang$applyTo = (function (arglist__21867){
var args = cljs.core.seq(arglist__21867);
return G__21865__delegate(args);
});
G__21865.cljs$core$IFn$_invoke$arity$variadic = G__21865__delegate;
return G__21865;
})()
;})(_STAR_print_fn_STAR_21862,_STAR_print_newline_STAR_21863,base_path_21864))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_21863;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21862;
}}catch (e21861){if((e21861 instanceof Error)){
var e = e21861;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_21864], null));
} else {
var e = e21861;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_21864))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__21868){
var map__21875 = p__21868;
var map__21875__$1 = ((((!((map__21875 == null)))?((((map__21875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21875):map__21875);
var opts = map__21875__$1;
var build_id = cljs.core.get.call(null,map__21875__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__21875,map__21875__$1,opts,build_id){
return (function (p__21877){
var vec__21878 = p__21877;
var map__21879 = cljs.core.nth.call(null,vec__21878,(0),null);
var map__21879__$1 = ((((!((map__21879 == null)))?((((map__21879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21879):map__21879);
var msg = map__21879__$1;
var msg_name = cljs.core.get.call(null,map__21879__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21878,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__21878,map__21879,map__21879__$1,msg,msg_name,_,map__21875,map__21875__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__21878,map__21879,map__21879__$1,msg,msg_name,_,map__21875,map__21875__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__21875,map__21875__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__21885){
var vec__21886 = p__21885;
var map__21887 = cljs.core.nth.call(null,vec__21886,(0),null);
var map__21887__$1 = ((((!((map__21887 == null)))?((((map__21887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21887):map__21887);
var msg = map__21887__$1;
var msg_name = cljs.core.get.call(null,map__21887__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21886,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__21889){
var map__21899 = p__21889;
var map__21899__$1 = ((((!((map__21899 == null)))?((((map__21899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21899):map__21899);
var on_compile_warning = cljs.core.get.call(null,map__21899__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__21899__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__21899,map__21899__$1,on_compile_warning,on_compile_fail){
return (function (p__21901){
var vec__21902 = p__21901;
var map__21903 = cljs.core.nth.call(null,vec__21902,(0),null);
var map__21903__$1 = ((((!((map__21903 == null)))?((((map__21903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21903):map__21903);
var msg = map__21903__$1;
var msg_name = cljs.core.get.call(null,map__21903__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21902,(1));
var pred__21905 = cljs.core._EQ_;
var expr__21906 = msg_name;
if(cljs.core.truth_(pred__21905.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__21906))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__21905.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__21906))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__21899,map__21899__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20322__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20322__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20323__auto__ = (function (){var switch__20301__auto__ = ((function (c__20322__auto__,msg_hist,msg_names,msg){
return (function (state_22122){
var state_val_22123 = (state_22122[(1)]);
if((state_val_22123 === (7))){
var inst_22046 = (state_22122[(2)]);
var state_22122__$1 = state_22122;
if(cljs.core.truth_(inst_22046)){
var statearr_22124_22170 = state_22122__$1;
(statearr_22124_22170[(1)] = (8));

} else {
var statearr_22125_22171 = state_22122__$1;
(statearr_22125_22171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (20))){
var inst_22116 = (state_22122[(2)]);
var state_22122__$1 = state_22122;
var statearr_22126_22172 = state_22122__$1;
(statearr_22126_22172[(2)] = inst_22116);

(statearr_22126_22172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (27))){
var inst_22112 = (state_22122[(2)]);
var state_22122__$1 = state_22122;
var statearr_22127_22173 = state_22122__$1;
(statearr_22127_22173[(2)] = inst_22112);

(statearr_22127_22173[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (1))){
var inst_22039 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_22122__$1 = state_22122;
if(cljs.core.truth_(inst_22039)){
var statearr_22128_22174 = state_22122__$1;
(statearr_22128_22174[(1)] = (2));

} else {
var statearr_22129_22175 = state_22122__$1;
(statearr_22129_22175[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (24))){
var inst_22114 = (state_22122[(2)]);
var state_22122__$1 = state_22122;
var statearr_22130_22176 = state_22122__$1;
(statearr_22130_22176[(2)] = inst_22114);

(statearr_22130_22176[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (4))){
var inst_22120 = (state_22122[(2)]);
var state_22122__$1 = state_22122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22122__$1,inst_22120);
} else {
if((state_val_22123 === (15))){
var inst_22118 = (state_22122[(2)]);
var state_22122__$1 = state_22122;
var statearr_22131_22177 = state_22122__$1;
(statearr_22131_22177[(2)] = inst_22118);

(statearr_22131_22177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (21))){
var inst_22077 = (state_22122[(2)]);
var state_22122__$1 = state_22122;
var statearr_22132_22178 = state_22122__$1;
(statearr_22132_22178[(2)] = inst_22077);

(statearr_22132_22178[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (31))){
var inst_22101 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_22122__$1 = state_22122;
if(cljs.core.truth_(inst_22101)){
var statearr_22133_22179 = state_22122__$1;
(statearr_22133_22179[(1)] = (34));

} else {
var statearr_22134_22180 = state_22122__$1;
(statearr_22134_22180[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (32))){
var inst_22110 = (state_22122[(2)]);
var state_22122__$1 = state_22122;
var statearr_22135_22181 = state_22122__$1;
(statearr_22135_22181[(2)] = inst_22110);

(statearr_22135_22181[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (33))){
var inst_22099 = (state_22122[(2)]);
var state_22122__$1 = state_22122;
var statearr_22136_22182 = state_22122__$1;
(statearr_22136_22182[(2)] = inst_22099);

(statearr_22136_22182[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (13))){
var inst_22060 = figwheel.client.heads_up.clear.call(null);
var state_22122__$1 = state_22122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22122__$1,(16),inst_22060);
} else {
if((state_val_22123 === (22))){
var inst_22081 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22082 = figwheel.client.heads_up.append_message.call(null,inst_22081);
var state_22122__$1 = state_22122;
var statearr_22137_22183 = state_22122__$1;
(statearr_22137_22183[(2)] = inst_22082);

(statearr_22137_22183[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (36))){
var inst_22108 = (state_22122[(2)]);
var state_22122__$1 = state_22122;
var statearr_22138_22184 = state_22122__$1;
(statearr_22138_22184[(2)] = inst_22108);

(statearr_22138_22184[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (29))){
var inst_22092 = (state_22122[(2)]);
var state_22122__$1 = state_22122;
var statearr_22139_22185 = state_22122__$1;
(statearr_22139_22185[(2)] = inst_22092);

(statearr_22139_22185[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (6))){
var inst_22041 = (state_22122[(7)]);
var state_22122__$1 = state_22122;
var statearr_22140_22186 = state_22122__$1;
(statearr_22140_22186[(2)] = inst_22041);

(statearr_22140_22186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (28))){
var inst_22088 = (state_22122[(2)]);
var inst_22089 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22090 = figwheel.client.heads_up.display_warning.call(null,inst_22089);
var state_22122__$1 = (function (){var statearr_22141 = state_22122;
(statearr_22141[(8)] = inst_22088);

return statearr_22141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22122__$1,(29),inst_22090);
} else {
if((state_val_22123 === (25))){
var inst_22086 = figwheel.client.heads_up.clear.call(null);
var state_22122__$1 = state_22122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22122__$1,(28),inst_22086);
} else {
if((state_val_22123 === (34))){
var inst_22103 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22122__$1 = state_22122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22122__$1,(37),inst_22103);
} else {
if((state_val_22123 === (17))){
var inst_22068 = (state_22122[(2)]);
var state_22122__$1 = state_22122;
var statearr_22142_22187 = state_22122__$1;
(statearr_22142_22187[(2)] = inst_22068);

(statearr_22142_22187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (3))){
var inst_22058 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_22122__$1 = state_22122;
if(cljs.core.truth_(inst_22058)){
var statearr_22143_22188 = state_22122__$1;
(statearr_22143_22188[(1)] = (13));

} else {
var statearr_22144_22189 = state_22122__$1;
(statearr_22144_22189[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (12))){
var inst_22054 = (state_22122[(2)]);
var state_22122__$1 = state_22122;
var statearr_22145_22190 = state_22122__$1;
(statearr_22145_22190[(2)] = inst_22054);

(statearr_22145_22190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (2))){
var inst_22041 = (state_22122[(7)]);
var inst_22041__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_22122__$1 = (function (){var statearr_22146 = state_22122;
(statearr_22146[(7)] = inst_22041__$1);

return statearr_22146;
})();
if(cljs.core.truth_(inst_22041__$1)){
var statearr_22147_22191 = state_22122__$1;
(statearr_22147_22191[(1)] = (5));

} else {
var statearr_22148_22192 = state_22122__$1;
(statearr_22148_22192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (23))){
var inst_22084 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_22122__$1 = state_22122;
if(cljs.core.truth_(inst_22084)){
var statearr_22149_22193 = state_22122__$1;
(statearr_22149_22193[(1)] = (25));

} else {
var statearr_22150_22194 = state_22122__$1;
(statearr_22150_22194[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (35))){
var state_22122__$1 = state_22122;
var statearr_22151_22195 = state_22122__$1;
(statearr_22151_22195[(2)] = null);

(statearr_22151_22195[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (19))){
var inst_22079 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_22122__$1 = state_22122;
if(cljs.core.truth_(inst_22079)){
var statearr_22152_22196 = state_22122__$1;
(statearr_22152_22196[(1)] = (22));

} else {
var statearr_22153_22197 = state_22122__$1;
(statearr_22153_22197[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (11))){
var inst_22050 = (state_22122[(2)]);
var state_22122__$1 = state_22122;
var statearr_22154_22198 = state_22122__$1;
(statearr_22154_22198[(2)] = inst_22050);

(statearr_22154_22198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (9))){
var inst_22052 = figwheel.client.heads_up.clear.call(null);
var state_22122__$1 = state_22122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22122__$1,(12),inst_22052);
} else {
if((state_val_22123 === (5))){
var inst_22043 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_22122__$1 = state_22122;
var statearr_22155_22199 = state_22122__$1;
(statearr_22155_22199[(2)] = inst_22043);

(statearr_22155_22199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (14))){
var inst_22070 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_22122__$1 = state_22122;
if(cljs.core.truth_(inst_22070)){
var statearr_22156_22200 = state_22122__$1;
(statearr_22156_22200[(1)] = (18));

} else {
var statearr_22157_22201 = state_22122__$1;
(statearr_22157_22201[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (26))){
var inst_22094 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_22122__$1 = state_22122;
if(cljs.core.truth_(inst_22094)){
var statearr_22158_22202 = state_22122__$1;
(statearr_22158_22202[(1)] = (30));

} else {
var statearr_22159_22203 = state_22122__$1;
(statearr_22159_22203[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (16))){
var inst_22062 = (state_22122[(2)]);
var inst_22063 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22064 = figwheel.client.format_messages.call(null,inst_22063);
var inst_22065 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22066 = figwheel.client.heads_up.display_error.call(null,inst_22064,inst_22065);
var state_22122__$1 = (function (){var statearr_22160 = state_22122;
(statearr_22160[(9)] = inst_22062);

return statearr_22160;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22122__$1,(17),inst_22066);
} else {
if((state_val_22123 === (30))){
var inst_22096 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22097 = figwheel.client.heads_up.display_warning.call(null,inst_22096);
var state_22122__$1 = state_22122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22122__$1,(33),inst_22097);
} else {
if((state_val_22123 === (10))){
var inst_22056 = (state_22122[(2)]);
var state_22122__$1 = state_22122;
var statearr_22161_22204 = state_22122__$1;
(statearr_22161_22204[(2)] = inst_22056);

(statearr_22161_22204[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (18))){
var inst_22072 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22073 = figwheel.client.format_messages.call(null,inst_22072);
var inst_22074 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22075 = figwheel.client.heads_up.display_error.call(null,inst_22073,inst_22074);
var state_22122__$1 = state_22122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22122__$1,(21),inst_22075);
} else {
if((state_val_22123 === (37))){
var inst_22105 = (state_22122[(2)]);
var state_22122__$1 = state_22122;
var statearr_22162_22205 = state_22122__$1;
(statearr_22162_22205[(2)] = inst_22105);

(statearr_22162_22205[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22123 === (8))){
var inst_22048 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22122__$1 = state_22122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22122__$1,(11),inst_22048);
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
});})(c__20322__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20301__auto__,c__20322__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto____0 = (function (){
var statearr_22166 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22166[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto__);

(statearr_22166[(1)] = (1));

return statearr_22166;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto____1 = (function (state_22122){
while(true){
var ret_value__20303__auto__ = (function (){try{while(true){
var result__20304__auto__ = switch__20301__auto__.call(null,state_22122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20304__auto__;
}
break;
}
}catch (e22167){if((e22167 instanceof Object)){
var ex__20305__auto__ = e22167;
var statearr_22168_22206 = state_22122;
(statearr_22168_22206[(5)] = ex__20305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22207 = state_22122;
state_22122 = G__22207;
continue;
} else {
return ret_value__20303__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto__ = function(state_22122){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto____1.call(this,state_22122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto__;
})()
;})(switch__20301__auto__,c__20322__auto__,msg_hist,msg_names,msg))
})();
var state__20324__auto__ = (function (){var statearr_22169 = f__20323__auto__.call(null);
(statearr_22169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20322__auto__);

return statearr_22169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20324__auto__);
});})(c__20322__auto__,msg_hist,msg_names,msg))
);

return c__20322__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20322__auto___22270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20322__auto___22270,ch){
return (function (){
var f__20323__auto__ = (function (){var switch__20301__auto__ = ((function (c__20322__auto___22270,ch){
return (function (state_22253){
var state_val_22254 = (state_22253[(1)]);
if((state_val_22254 === (1))){
var state_22253__$1 = state_22253;
var statearr_22255_22271 = state_22253__$1;
(statearr_22255_22271[(2)] = null);

(statearr_22255_22271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22254 === (2))){
var state_22253__$1 = state_22253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22253__$1,(4),ch);
} else {
if((state_val_22254 === (3))){
var inst_22251 = (state_22253[(2)]);
var state_22253__$1 = state_22253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22253__$1,inst_22251);
} else {
if((state_val_22254 === (4))){
var inst_22241 = (state_22253[(7)]);
var inst_22241__$1 = (state_22253[(2)]);
var state_22253__$1 = (function (){var statearr_22256 = state_22253;
(statearr_22256[(7)] = inst_22241__$1);

return statearr_22256;
})();
if(cljs.core.truth_(inst_22241__$1)){
var statearr_22257_22272 = state_22253__$1;
(statearr_22257_22272[(1)] = (5));

} else {
var statearr_22258_22273 = state_22253__$1;
(statearr_22258_22273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22254 === (5))){
var inst_22241 = (state_22253[(7)]);
var inst_22243 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_22241);
var state_22253__$1 = state_22253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22253__$1,(8),inst_22243);
} else {
if((state_val_22254 === (6))){
var state_22253__$1 = state_22253;
var statearr_22259_22274 = state_22253__$1;
(statearr_22259_22274[(2)] = null);

(statearr_22259_22274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22254 === (7))){
var inst_22249 = (state_22253[(2)]);
var state_22253__$1 = state_22253;
var statearr_22260_22275 = state_22253__$1;
(statearr_22260_22275[(2)] = inst_22249);

(statearr_22260_22275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22254 === (8))){
var inst_22245 = (state_22253[(2)]);
var state_22253__$1 = (function (){var statearr_22261 = state_22253;
(statearr_22261[(8)] = inst_22245);

return statearr_22261;
})();
var statearr_22262_22276 = state_22253__$1;
(statearr_22262_22276[(2)] = null);

(statearr_22262_22276[(1)] = (2));


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
});})(c__20322__auto___22270,ch))
;
return ((function (switch__20301__auto__,c__20322__auto___22270,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20302__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20302__auto____0 = (function (){
var statearr_22266 = [null,null,null,null,null,null,null,null,null];
(statearr_22266[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20302__auto__);

(statearr_22266[(1)] = (1));

return statearr_22266;
});
var figwheel$client$heads_up_plugin_$_state_machine__20302__auto____1 = (function (state_22253){
while(true){
var ret_value__20303__auto__ = (function (){try{while(true){
var result__20304__auto__ = switch__20301__auto__.call(null,state_22253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20304__auto__;
}
break;
}
}catch (e22267){if((e22267 instanceof Object)){
var ex__20305__auto__ = e22267;
var statearr_22268_22277 = state_22253;
(statearr_22268_22277[(5)] = ex__20305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22278 = state_22253;
state_22253 = G__22278;
continue;
} else {
return ret_value__20303__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20302__auto__ = function(state_22253){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20302__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20302__auto____1.call(this,state_22253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20302__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20302__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20302__auto__;
})()
;})(switch__20301__auto__,c__20322__auto___22270,ch))
})();
var state__20324__auto__ = (function (){var statearr_22269 = f__20323__auto__.call(null);
(statearr_22269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20322__auto___22270);

return statearr_22269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20324__auto__);
});})(c__20322__auto___22270,ch))
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
var c__20322__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20322__auto__){
return (function (){
var f__20323__auto__ = (function (){var switch__20301__auto__ = ((function (c__20322__auto__){
return (function (state_22299){
var state_val_22300 = (state_22299[(1)]);
if((state_val_22300 === (1))){
var inst_22294 = cljs.core.async.timeout.call(null,(3000));
var state_22299__$1 = state_22299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22299__$1,(2),inst_22294);
} else {
if((state_val_22300 === (2))){
var inst_22296 = (state_22299[(2)]);
var inst_22297 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_22299__$1 = (function (){var statearr_22301 = state_22299;
(statearr_22301[(7)] = inst_22296);

return statearr_22301;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22299__$1,inst_22297);
} else {
return null;
}
}
});})(c__20322__auto__))
;
return ((function (switch__20301__auto__,c__20322__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20302__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20302__auto____0 = (function (){
var statearr_22305 = [null,null,null,null,null,null,null,null];
(statearr_22305[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20302__auto__);

(statearr_22305[(1)] = (1));

return statearr_22305;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20302__auto____1 = (function (state_22299){
while(true){
var ret_value__20303__auto__ = (function (){try{while(true){
var result__20304__auto__ = switch__20301__auto__.call(null,state_22299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20304__auto__;
}
break;
}
}catch (e22306){if((e22306 instanceof Object)){
var ex__20305__auto__ = e22306;
var statearr_22307_22309 = state_22299;
(statearr_22307_22309[(5)] = ex__20305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22310 = state_22299;
state_22299 = G__22310;
continue;
} else {
return ret_value__20303__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20302__auto__ = function(state_22299){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20302__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20302__auto____1.call(this,state_22299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20302__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20302__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20302__auto__;
})()
;})(switch__20301__auto__,c__20322__auto__))
})();
var state__20324__auto__ = (function (){var statearr_22308 = f__20323__auto__.call(null);
(statearr_22308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20322__auto__);

return statearr_22308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20324__auto__);
});})(c__20322__auto__))
);

return c__20322__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__22311){
var map__22318 = p__22311;
var map__22318__$1 = ((((!((map__22318 == null)))?((((map__22318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22318):map__22318);
var ed = map__22318__$1;
var formatted_exception = cljs.core.get.call(null,map__22318__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__22318__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__22318__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__22320_22324 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__22321_22325 = null;
var count__22322_22326 = (0);
var i__22323_22327 = (0);
while(true){
if((i__22323_22327 < count__22322_22326)){
var msg_22328 = cljs.core._nth.call(null,chunk__22321_22325,i__22323_22327);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22328);

var G__22329 = seq__22320_22324;
var G__22330 = chunk__22321_22325;
var G__22331 = count__22322_22326;
var G__22332 = (i__22323_22327 + (1));
seq__22320_22324 = G__22329;
chunk__22321_22325 = G__22330;
count__22322_22326 = G__22331;
i__22323_22327 = G__22332;
continue;
} else {
var temp__4425__auto___22333 = cljs.core.seq.call(null,seq__22320_22324);
if(temp__4425__auto___22333){
var seq__22320_22334__$1 = temp__4425__auto___22333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22320_22334__$1)){
var c__19079__auto___22335 = cljs.core.chunk_first.call(null,seq__22320_22334__$1);
var G__22336 = cljs.core.chunk_rest.call(null,seq__22320_22334__$1);
var G__22337 = c__19079__auto___22335;
var G__22338 = cljs.core.count.call(null,c__19079__auto___22335);
var G__22339 = (0);
seq__22320_22324 = G__22336;
chunk__22321_22325 = G__22337;
count__22322_22326 = G__22338;
i__22323_22327 = G__22339;
continue;
} else {
var msg_22340 = cljs.core.first.call(null,seq__22320_22334__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22340);

var G__22341 = cljs.core.next.call(null,seq__22320_22334__$1);
var G__22342 = null;
var G__22343 = (0);
var G__22344 = (0);
seq__22320_22324 = G__22341;
chunk__22321_22325 = G__22342;
count__22322_22326 = G__22343;
i__22323_22327 = G__22344;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__22345){
var map__22348 = p__22345;
var map__22348__$1 = ((((!((map__22348 == null)))?((((map__22348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22348):map__22348);
var w = map__22348__$1;
var message = cljs.core.get.call(null,map__22348__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__22356 = cljs.core.seq.call(null,plugins);
var chunk__22357 = null;
var count__22358 = (0);
var i__22359 = (0);
while(true){
if((i__22359 < count__22358)){
var vec__22360 = cljs.core._nth.call(null,chunk__22357,i__22359);
var k = cljs.core.nth.call(null,vec__22360,(0),null);
var plugin = cljs.core.nth.call(null,vec__22360,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22362 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22356,chunk__22357,count__22358,i__22359,pl_22362,vec__22360,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_22362.call(null,msg_hist);
});})(seq__22356,chunk__22357,count__22358,i__22359,pl_22362,vec__22360,k,plugin))
);
} else {
}

var G__22363 = seq__22356;
var G__22364 = chunk__22357;
var G__22365 = count__22358;
var G__22366 = (i__22359 + (1));
seq__22356 = G__22363;
chunk__22357 = G__22364;
count__22358 = G__22365;
i__22359 = G__22366;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22356);
if(temp__4425__auto__){
var seq__22356__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22356__$1)){
var c__19079__auto__ = cljs.core.chunk_first.call(null,seq__22356__$1);
var G__22367 = cljs.core.chunk_rest.call(null,seq__22356__$1);
var G__22368 = c__19079__auto__;
var G__22369 = cljs.core.count.call(null,c__19079__auto__);
var G__22370 = (0);
seq__22356 = G__22367;
chunk__22357 = G__22368;
count__22358 = G__22369;
i__22359 = G__22370;
continue;
} else {
var vec__22361 = cljs.core.first.call(null,seq__22356__$1);
var k = cljs.core.nth.call(null,vec__22361,(0),null);
var plugin = cljs.core.nth.call(null,vec__22361,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22371 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22356,chunk__22357,count__22358,i__22359,pl_22371,vec__22361,k,plugin,seq__22356__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_22371.call(null,msg_hist);
});})(seq__22356,chunk__22357,count__22358,i__22359,pl_22371,vec__22361,k,plugin,seq__22356__$1,temp__4425__auto__))
);
} else {
}

var G__22372 = cljs.core.next.call(null,seq__22356__$1);
var G__22373 = null;
var G__22374 = (0);
var G__22375 = (0);
seq__22356 = G__22372;
chunk__22357 = G__22373;
count__22358 = G__22374;
i__22359 = G__22375;
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
var args22376 = [];
var len__19330__auto___22379 = arguments.length;
var i__19331__auto___22380 = (0);
while(true){
if((i__19331__auto___22380 < len__19330__auto___22379)){
args22376.push((arguments[i__19331__auto___22380]));

var G__22381 = (i__19331__auto___22380 + (1));
i__19331__auto___22380 = G__22381;
continue;
} else {
}
break;
}

var G__22378 = args22376.length;
switch (G__22378) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22376.length)].join('')));

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
var len__19330__auto___22387 = arguments.length;
var i__19331__auto___22388 = (0);
while(true){
if((i__19331__auto___22388 < len__19330__auto___22387)){
args__19337__auto__.push((arguments[i__19331__auto___22388]));

var G__22389 = (i__19331__auto___22388 + (1));
i__19331__auto___22388 = G__22389;
continue;
} else {
}
break;
}

var argseq__19338__auto__ = ((((0) < args__19337__auto__.length))?(new cljs.core.IndexedSeq(args__19337__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19338__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__22384){
var map__22385 = p__22384;
var map__22385__$1 = ((((!((map__22385 == null)))?((((map__22385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22385):map__22385);
var opts = map__22385__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq22383){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22383));
});

//# sourceMappingURL=client.js.map