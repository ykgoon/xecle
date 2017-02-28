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
var pred__21666 = cljs.core._EQ_;
var expr__21667 = (function (){var or__18276__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__18276__auto__)){
return or__18276__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__21666.call(null,"true",expr__21667))){
return true;
} else {
if(cljs.core.truth_(pred__21666.call(null,"false",expr__21667))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21667)].join('')));
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
var G__21669__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__21669 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21670__i = 0, G__21670__a = new Array(arguments.length -  0);
while (G__21670__i < G__21670__a.length) {G__21670__a[G__21670__i] = arguments[G__21670__i + 0]; ++G__21670__i;}
  args = new cljs.core.IndexedSeq(G__21670__a,0);
} 
return G__21669__delegate.call(this,args);};
G__21669.cljs$lang$maxFixedArity = 0;
G__21669.cljs$lang$applyTo = (function (arglist__21671){
var args = cljs.core.seq(arglist__21671);
return G__21669__delegate(args);
});
G__21669.cljs$core$IFn$_invoke$arity$variadic = G__21669__delegate;
return G__21669;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__21672){
var map__21675 = p__21672;
var map__21675__$1 = ((((!((map__21675 == null)))?((((map__21675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21675):map__21675);
var message = cljs.core.get.call(null,map__21675__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__21675__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20322__auto___21837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20322__auto___21837,ch){
return (function (){
var f__20323__auto__ = (function (){var switch__20301__auto__ = ((function (c__20322__auto___21837,ch){
return (function (state_21806){
var state_val_21807 = (state_21806[(1)]);
if((state_val_21807 === (7))){
var inst_21802 = (state_21806[(2)]);
var state_21806__$1 = state_21806;
var statearr_21808_21838 = state_21806__$1;
(statearr_21808_21838[(2)] = inst_21802);

(statearr_21808_21838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (1))){
var state_21806__$1 = state_21806;
var statearr_21809_21839 = state_21806__$1;
(statearr_21809_21839[(2)] = null);

(statearr_21809_21839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (4))){
var inst_21759 = (state_21806[(7)]);
var inst_21759__$1 = (state_21806[(2)]);
var state_21806__$1 = (function (){var statearr_21810 = state_21806;
(statearr_21810[(7)] = inst_21759__$1);

return statearr_21810;
})();
if(cljs.core.truth_(inst_21759__$1)){
var statearr_21811_21840 = state_21806__$1;
(statearr_21811_21840[(1)] = (5));

} else {
var statearr_21812_21841 = state_21806__$1;
(statearr_21812_21841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (15))){
var inst_21766 = (state_21806[(8)]);
var inst_21781 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_21766);
var inst_21782 = cljs.core.first.call(null,inst_21781);
var inst_21783 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_21782);
var inst_21784 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_21783)].join('');
var inst_21785 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_21784);
var state_21806__$1 = state_21806;
var statearr_21813_21842 = state_21806__$1;
(statearr_21813_21842[(2)] = inst_21785);

(statearr_21813_21842[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (13))){
var inst_21790 = (state_21806[(2)]);
var state_21806__$1 = state_21806;
var statearr_21814_21843 = state_21806__$1;
(statearr_21814_21843[(2)] = inst_21790);

(statearr_21814_21843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (6))){
var state_21806__$1 = state_21806;
var statearr_21815_21844 = state_21806__$1;
(statearr_21815_21844[(2)] = null);

(statearr_21815_21844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (17))){
var inst_21788 = (state_21806[(2)]);
var state_21806__$1 = state_21806;
var statearr_21816_21845 = state_21806__$1;
(statearr_21816_21845[(2)] = inst_21788);

(statearr_21816_21845[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (3))){
var inst_21804 = (state_21806[(2)]);
var state_21806__$1 = state_21806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21806__$1,inst_21804);
} else {
if((state_val_21807 === (12))){
var inst_21765 = (state_21806[(9)]);
var inst_21779 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_21765,opts);
var state_21806__$1 = state_21806;
if(cljs.core.truth_(inst_21779)){
var statearr_21817_21846 = state_21806__$1;
(statearr_21817_21846[(1)] = (15));

} else {
var statearr_21818_21847 = state_21806__$1;
(statearr_21818_21847[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (2))){
var state_21806__$1 = state_21806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21806__$1,(4),ch);
} else {
if((state_val_21807 === (11))){
var inst_21766 = (state_21806[(8)]);
var inst_21771 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21772 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_21766);
var inst_21773 = cljs.core.async.timeout.call(null,(1000));
var inst_21774 = [inst_21772,inst_21773];
var inst_21775 = (new cljs.core.PersistentVector(null,2,(5),inst_21771,inst_21774,null));
var state_21806__$1 = state_21806;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21806__$1,(14),inst_21775);
} else {
if((state_val_21807 === (9))){
var inst_21766 = (state_21806[(8)]);
var inst_21792 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_21793 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_21766);
var inst_21794 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21793);
var inst_21795 = [cljs.core.str("Not loading: "),cljs.core.str(inst_21794)].join('');
var inst_21796 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_21795);
var state_21806__$1 = (function (){var statearr_21819 = state_21806;
(statearr_21819[(10)] = inst_21792);

return statearr_21819;
})();
var statearr_21820_21848 = state_21806__$1;
(statearr_21820_21848[(2)] = inst_21796);

(statearr_21820_21848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (5))){
var inst_21759 = (state_21806[(7)]);
var inst_21761 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_21762 = (new cljs.core.PersistentArrayMap(null,2,inst_21761,null));
var inst_21763 = (new cljs.core.PersistentHashSet(null,inst_21762,null));
var inst_21764 = figwheel.client.focus_msgs.call(null,inst_21763,inst_21759);
var inst_21765 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_21764);
var inst_21766 = cljs.core.first.call(null,inst_21764);
var inst_21767 = figwheel.client.autoload_QMARK_.call(null);
var state_21806__$1 = (function (){var statearr_21821 = state_21806;
(statearr_21821[(8)] = inst_21766);

(statearr_21821[(9)] = inst_21765);

return statearr_21821;
})();
if(cljs.core.truth_(inst_21767)){
var statearr_21822_21849 = state_21806__$1;
(statearr_21822_21849[(1)] = (8));

} else {
var statearr_21823_21850 = state_21806__$1;
(statearr_21823_21850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (14))){
var inst_21777 = (state_21806[(2)]);
var state_21806__$1 = state_21806;
var statearr_21824_21851 = state_21806__$1;
(statearr_21824_21851[(2)] = inst_21777);

(statearr_21824_21851[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (16))){
var state_21806__$1 = state_21806;
var statearr_21825_21852 = state_21806__$1;
(statearr_21825_21852[(2)] = null);

(statearr_21825_21852[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (10))){
var inst_21798 = (state_21806[(2)]);
var state_21806__$1 = (function (){var statearr_21826 = state_21806;
(statearr_21826[(11)] = inst_21798);

return statearr_21826;
})();
var statearr_21827_21853 = state_21806__$1;
(statearr_21827_21853[(2)] = null);

(statearr_21827_21853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21807 === (8))){
var inst_21765 = (state_21806[(9)]);
var inst_21769 = figwheel.client.reload_file_state_QMARK_.call(null,inst_21765,opts);
var state_21806__$1 = state_21806;
if(cljs.core.truth_(inst_21769)){
var statearr_21828_21854 = state_21806__$1;
(statearr_21828_21854[(1)] = (11));

} else {
var statearr_21829_21855 = state_21806__$1;
(statearr_21829_21855[(1)] = (12));

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
});})(c__20322__auto___21837,ch))
;
return ((function (switch__20301__auto__,c__20322__auto___21837,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20302__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20302__auto____0 = (function (){
var statearr_21833 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21833[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20302__auto__);

(statearr_21833[(1)] = (1));

return statearr_21833;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20302__auto____1 = (function (state_21806){
while(true){
var ret_value__20303__auto__ = (function (){try{while(true){
var result__20304__auto__ = switch__20301__auto__.call(null,state_21806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20304__auto__;
}
break;
}
}catch (e21834){if((e21834 instanceof Object)){
var ex__20305__auto__ = e21834;
var statearr_21835_21856 = state_21806;
(statearr_21835_21856[(5)] = ex__20305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21857 = state_21806;
state_21806 = G__21857;
continue;
} else {
return ret_value__20303__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20302__auto__ = function(state_21806){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20302__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20302__auto____1.call(this,state_21806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20302__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20302__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20302__auto__;
})()
;})(switch__20301__auto__,c__20322__auto___21837,ch))
})();
var state__20324__auto__ = (function (){var statearr_21836 = f__20323__auto__.call(null);
(statearr_21836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20322__auto___21837);

return statearr_21836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20324__auto__);
});})(c__20322__auto___21837,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__21858_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__21858_SHARP_));
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
var base_path_21865 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_21865){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_21863 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_21864 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_21863,_STAR_print_newline_STAR_21864,base_path_21865){
return (function() { 
var G__21866__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__21866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21867__i = 0, G__21867__a = new Array(arguments.length -  0);
while (G__21867__i < G__21867__a.length) {G__21867__a[G__21867__i] = arguments[G__21867__i + 0]; ++G__21867__i;}
  args = new cljs.core.IndexedSeq(G__21867__a,0);
} 
return G__21866__delegate.call(this,args);};
G__21866.cljs$lang$maxFixedArity = 0;
G__21866.cljs$lang$applyTo = (function (arglist__21868){
var args = cljs.core.seq(arglist__21868);
return G__21866__delegate(args);
});
G__21866.cljs$core$IFn$_invoke$arity$variadic = G__21866__delegate;
return G__21866;
})()
;})(_STAR_print_fn_STAR_21863,_STAR_print_newline_STAR_21864,base_path_21865))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_21864;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21863;
}}catch (e21862){if((e21862 instanceof Error)){
var e = e21862;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_21865], null));
} else {
var e = e21862;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_21865))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__21869){
var map__21876 = p__21869;
var map__21876__$1 = ((((!((map__21876 == null)))?((((map__21876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21876):map__21876);
var opts = map__21876__$1;
var build_id = cljs.core.get.call(null,map__21876__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__21876,map__21876__$1,opts,build_id){
return (function (p__21878){
var vec__21879 = p__21878;
var map__21880 = cljs.core.nth.call(null,vec__21879,(0),null);
var map__21880__$1 = ((((!((map__21880 == null)))?((((map__21880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21880):map__21880);
var msg = map__21880__$1;
var msg_name = cljs.core.get.call(null,map__21880__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21879,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__21879,map__21880,map__21880__$1,msg,msg_name,_,map__21876,map__21876__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__21879,map__21880,map__21880__$1,msg,msg_name,_,map__21876,map__21876__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__21876,map__21876__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__21886){
var vec__21887 = p__21886;
var map__21888 = cljs.core.nth.call(null,vec__21887,(0),null);
var map__21888__$1 = ((((!((map__21888 == null)))?((((map__21888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21888):map__21888);
var msg = map__21888__$1;
var msg_name = cljs.core.get.call(null,map__21888__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21887,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__21890){
var map__21900 = p__21890;
var map__21900__$1 = ((((!((map__21900 == null)))?((((map__21900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21900):map__21900);
var on_compile_warning = cljs.core.get.call(null,map__21900__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__21900__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__21900,map__21900__$1,on_compile_warning,on_compile_fail){
return (function (p__21902){
var vec__21903 = p__21902;
var map__21904 = cljs.core.nth.call(null,vec__21903,(0),null);
var map__21904__$1 = ((((!((map__21904 == null)))?((((map__21904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21904):map__21904);
var msg = map__21904__$1;
var msg_name = cljs.core.get.call(null,map__21904__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21903,(1));
var pred__21906 = cljs.core._EQ_;
var expr__21907 = msg_name;
if(cljs.core.truth_(pred__21906.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__21907))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__21906.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__21907))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__21900,map__21900__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20322__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20322__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20323__auto__ = (function (){var switch__20301__auto__ = ((function (c__20322__auto__,msg_hist,msg_names,msg){
return (function (state_22123){
var state_val_22124 = (state_22123[(1)]);
if((state_val_22124 === (7))){
var inst_22047 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
if(cljs.core.truth_(inst_22047)){
var statearr_22125_22171 = state_22123__$1;
(statearr_22125_22171[(1)] = (8));

} else {
var statearr_22126_22172 = state_22123__$1;
(statearr_22126_22172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (20))){
var inst_22117 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22127_22173 = state_22123__$1;
(statearr_22127_22173[(2)] = inst_22117);

(statearr_22127_22173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (27))){
var inst_22113 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22128_22174 = state_22123__$1;
(statearr_22128_22174[(2)] = inst_22113);

(statearr_22128_22174[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (1))){
var inst_22040 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_22123__$1 = state_22123;
if(cljs.core.truth_(inst_22040)){
var statearr_22129_22175 = state_22123__$1;
(statearr_22129_22175[(1)] = (2));

} else {
var statearr_22130_22176 = state_22123__$1;
(statearr_22130_22176[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (24))){
var inst_22115 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22131_22177 = state_22123__$1;
(statearr_22131_22177[(2)] = inst_22115);

(statearr_22131_22177[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (4))){
var inst_22121 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22123__$1,inst_22121);
} else {
if((state_val_22124 === (15))){
var inst_22119 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22132_22178 = state_22123__$1;
(statearr_22132_22178[(2)] = inst_22119);

(statearr_22132_22178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (21))){
var inst_22078 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22133_22179 = state_22123__$1;
(statearr_22133_22179[(2)] = inst_22078);

(statearr_22133_22179[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (31))){
var inst_22102 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_22123__$1 = state_22123;
if(cljs.core.truth_(inst_22102)){
var statearr_22134_22180 = state_22123__$1;
(statearr_22134_22180[(1)] = (34));

} else {
var statearr_22135_22181 = state_22123__$1;
(statearr_22135_22181[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (32))){
var inst_22111 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22136_22182 = state_22123__$1;
(statearr_22136_22182[(2)] = inst_22111);

(statearr_22136_22182[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (33))){
var inst_22100 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22137_22183 = state_22123__$1;
(statearr_22137_22183[(2)] = inst_22100);

(statearr_22137_22183[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (13))){
var inst_22061 = figwheel.client.heads_up.clear.call(null);
var state_22123__$1 = state_22123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22123__$1,(16),inst_22061);
} else {
if((state_val_22124 === (22))){
var inst_22082 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22083 = figwheel.client.heads_up.append_message.call(null,inst_22082);
var state_22123__$1 = state_22123;
var statearr_22138_22184 = state_22123__$1;
(statearr_22138_22184[(2)] = inst_22083);

(statearr_22138_22184[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (36))){
var inst_22109 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22139_22185 = state_22123__$1;
(statearr_22139_22185[(2)] = inst_22109);

(statearr_22139_22185[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (29))){
var inst_22093 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22140_22186 = state_22123__$1;
(statearr_22140_22186[(2)] = inst_22093);

(statearr_22140_22186[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (6))){
var inst_22042 = (state_22123[(7)]);
var state_22123__$1 = state_22123;
var statearr_22141_22187 = state_22123__$1;
(statearr_22141_22187[(2)] = inst_22042);

(statearr_22141_22187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (28))){
var inst_22089 = (state_22123[(2)]);
var inst_22090 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22091 = figwheel.client.heads_up.display_warning.call(null,inst_22090);
var state_22123__$1 = (function (){var statearr_22142 = state_22123;
(statearr_22142[(8)] = inst_22089);

return statearr_22142;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22123__$1,(29),inst_22091);
} else {
if((state_val_22124 === (25))){
var inst_22087 = figwheel.client.heads_up.clear.call(null);
var state_22123__$1 = state_22123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22123__$1,(28),inst_22087);
} else {
if((state_val_22124 === (34))){
var inst_22104 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22123__$1 = state_22123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22123__$1,(37),inst_22104);
} else {
if((state_val_22124 === (17))){
var inst_22069 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22143_22188 = state_22123__$1;
(statearr_22143_22188[(2)] = inst_22069);

(statearr_22143_22188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (3))){
var inst_22059 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_22123__$1 = state_22123;
if(cljs.core.truth_(inst_22059)){
var statearr_22144_22189 = state_22123__$1;
(statearr_22144_22189[(1)] = (13));

} else {
var statearr_22145_22190 = state_22123__$1;
(statearr_22145_22190[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (12))){
var inst_22055 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22146_22191 = state_22123__$1;
(statearr_22146_22191[(2)] = inst_22055);

(statearr_22146_22191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (2))){
var inst_22042 = (state_22123[(7)]);
var inst_22042__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_22123__$1 = (function (){var statearr_22147 = state_22123;
(statearr_22147[(7)] = inst_22042__$1);

return statearr_22147;
})();
if(cljs.core.truth_(inst_22042__$1)){
var statearr_22148_22192 = state_22123__$1;
(statearr_22148_22192[(1)] = (5));

} else {
var statearr_22149_22193 = state_22123__$1;
(statearr_22149_22193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (23))){
var inst_22085 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_22123__$1 = state_22123;
if(cljs.core.truth_(inst_22085)){
var statearr_22150_22194 = state_22123__$1;
(statearr_22150_22194[(1)] = (25));

} else {
var statearr_22151_22195 = state_22123__$1;
(statearr_22151_22195[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (35))){
var state_22123__$1 = state_22123;
var statearr_22152_22196 = state_22123__$1;
(statearr_22152_22196[(2)] = null);

(statearr_22152_22196[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (19))){
var inst_22080 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_22123__$1 = state_22123;
if(cljs.core.truth_(inst_22080)){
var statearr_22153_22197 = state_22123__$1;
(statearr_22153_22197[(1)] = (22));

} else {
var statearr_22154_22198 = state_22123__$1;
(statearr_22154_22198[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (11))){
var inst_22051 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22155_22199 = state_22123__$1;
(statearr_22155_22199[(2)] = inst_22051);

(statearr_22155_22199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (9))){
var inst_22053 = figwheel.client.heads_up.clear.call(null);
var state_22123__$1 = state_22123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22123__$1,(12),inst_22053);
} else {
if((state_val_22124 === (5))){
var inst_22044 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_22123__$1 = state_22123;
var statearr_22156_22200 = state_22123__$1;
(statearr_22156_22200[(2)] = inst_22044);

(statearr_22156_22200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (14))){
var inst_22071 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_22123__$1 = state_22123;
if(cljs.core.truth_(inst_22071)){
var statearr_22157_22201 = state_22123__$1;
(statearr_22157_22201[(1)] = (18));

} else {
var statearr_22158_22202 = state_22123__$1;
(statearr_22158_22202[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (26))){
var inst_22095 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_22123__$1 = state_22123;
if(cljs.core.truth_(inst_22095)){
var statearr_22159_22203 = state_22123__$1;
(statearr_22159_22203[(1)] = (30));

} else {
var statearr_22160_22204 = state_22123__$1;
(statearr_22160_22204[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (16))){
var inst_22063 = (state_22123[(2)]);
var inst_22064 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22065 = figwheel.client.format_messages.call(null,inst_22064);
var inst_22066 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22067 = figwheel.client.heads_up.display_error.call(null,inst_22065,inst_22066);
var state_22123__$1 = (function (){var statearr_22161 = state_22123;
(statearr_22161[(9)] = inst_22063);

return statearr_22161;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22123__$1,(17),inst_22067);
} else {
if((state_val_22124 === (30))){
var inst_22097 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22098 = figwheel.client.heads_up.display_warning.call(null,inst_22097);
var state_22123__$1 = state_22123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22123__$1,(33),inst_22098);
} else {
if((state_val_22124 === (10))){
var inst_22057 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22162_22205 = state_22123__$1;
(statearr_22162_22205[(2)] = inst_22057);

(statearr_22162_22205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (18))){
var inst_22073 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22074 = figwheel.client.format_messages.call(null,inst_22073);
var inst_22075 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22076 = figwheel.client.heads_up.display_error.call(null,inst_22074,inst_22075);
var state_22123__$1 = state_22123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22123__$1,(21),inst_22076);
} else {
if((state_val_22124 === (37))){
var inst_22106 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22163_22206 = state_22123__$1;
(statearr_22163_22206[(2)] = inst_22106);

(statearr_22163_22206[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (8))){
var inst_22049 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22123__$1 = state_22123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22123__$1,(11),inst_22049);
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
var statearr_22167 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22167[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto__);

(statearr_22167[(1)] = (1));

return statearr_22167;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto____1 = (function (state_22123){
while(true){
var ret_value__20303__auto__ = (function (){try{while(true){
var result__20304__auto__ = switch__20301__auto__.call(null,state_22123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20304__auto__;
}
break;
}
}catch (e22168){if((e22168 instanceof Object)){
var ex__20305__auto__ = e22168;
var statearr_22169_22207 = state_22123;
(statearr_22169_22207[(5)] = ex__20305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22208 = state_22123;
state_22123 = G__22208;
continue;
} else {
return ret_value__20303__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto__ = function(state_22123){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto____1.call(this,state_22123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto__;
})()
;})(switch__20301__auto__,c__20322__auto__,msg_hist,msg_names,msg))
})();
var state__20324__auto__ = (function (){var statearr_22170 = f__20323__auto__.call(null);
(statearr_22170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20322__auto__);

return statearr_22170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20324__auto__);
});})(c__20322__auto__,msg_hist,msg_names,msg))
);

return c__20322__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20322__auto___22271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20322__auto___22271,ch){
return (function (){
var f__20323__auto__ = (function (){var switch__20301__auto__ = ((function (c__20322__auto___22271,ch){
return (function (state_22254){
var state_val_22255 = (state_22254[(1)]);
if((state_val_22255 === (1))){
var state_22254__$1 = state_22254;
var statearr_22256_22272 = state_22254__$1;
(statearr_22256_22272[(2)] = null);

(statearr_22256_22272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (2))){
var state_22254__$1 = state_22254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22254__$1,(4),ch);
} else {
if((state_val_22255 === (3))){
var inst_22252 = (state_22254[(2)]);
var state_22254__$1 = state_22254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22254__$1,inst_22252);
} else {
if((state_val_22255 === (4))){
var inst_22242 = (state_22254[(7)]);
var inst_22242__$1 = (state_22254[(2)]);
var state_22254__$1 = (function (){var statearr_22257 = state_22254;
(statearr_22257[(7)] = inst_22242__$1);

return statearr_22257;
})();
if(cljs.core.truth_(inst_22242__$1)){
var statearr_22258_22273 = state_22254__$1;
(statearr_22258_22273[(1)] = (5));

} else {
var statearr_22259_22274 = state_22254__$1;
(statearr_22259_22274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (5))){
var inst_22242 = (state_22254[(7)]);
var inst_22244 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_22242);
var state_22254__$1 = state_22254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22254__$1,(8),inst_22244);
} else {
if((state_val_22255 === (6))){
var state_22254__$1 = state_22254;
var statearr_22260_22275 = state_22254__$1;
(statearr_22260_22275[(2)] = null);

(statearr_22260_22275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (7))){
var inst_22250 = (state_22254[(2)]);
var state_22254__$1 = state_22254;
var statearr_22261_22276 = state_22254__$1;
(statearr_22261_22276[(2)] = inst_22250);

(statearr_22261_22276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (8))){
var inst_22246 = (state_22254[(2)]);
var state_22254__$1 = (function (){var statearr_22262 = state_22254;
(statearr_22262[(8)] = inst_22246);

return statearr_22262;
})();
var statearr_22263_22277 = state_22254__$1;
(statearr_22263_22277[(2)] = null);

(statearr_22263_22277[(1)] = (2));


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
});})(c__20322__auto___22271,ch))
;
return ((function (switch__20301__auto__,c__20322__auto___22271,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20302__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20302__auto____0 = (function (){
var statearr_22267 = [null,null,null,null,null,null,null,null,null];
(statearr_22267[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20302__auto__);

(statearr_22267[(1)] = (1));

return statearr_22267;
});
var figwheel$client$heads_up_plugin_$_state_machine__20302__auto____1 = (function (state_22254){
while(true){
var ret_value__20303__auto__ = (function (){try{while(true){
var result__20304__auto__ = switch__20301__auto__.call(null,state_22254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20304__auto__;
}
break;
}
}catch (e22268){if((e22268 instanceof Object)){
var ex__20305__auto__ = e22268;
var statearr_22269_22278 = state_22254;
(statearr_22269_22278[(5)] = ex__20305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22279 = state_22254;
state_22254 = G__22279;
continue;
} else {
return ret_value__20303__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20302__auto__ = function(state_22254){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20302__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20302__auto____1.call(this,state_22254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20302__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20302__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20302__auto__;
})()
;})(switch__20301__auto__,c__20322__auto___22271,ch))
})();
var state__20324__auto__ = (function (){var statearr_22270 = f__20323__auto__.call(null);
(statearr_22270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20322__auto___22271);

return statearr_22270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20324__auto__);
});})(c__20322__auto___22271,ch))
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
return (function (state_22300){
var state_val_22301 = (state_22300[(1)]);
if((state_val_22301 === (1))){
var inst_22295 = cljs.core.async.timeout.call(null,(3000));
var state_22300__$1 = state_22300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22300__$1,(2),inst_22295);
} else {
if((state_val_22301 === (2))){
var inst_22297 = (state_22300[(2)]);
var inst_22298 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_22300__$1 = (function (){var statearr_22302 = state_22300;
(statearr_22302[(7)] = inst_22297);

return statearr_22302;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22300__$1,inst_22298);
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
var statearr_22306 = [null,null,null,null,null,null,null,null];
(statearr_22306[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20302__auto__);

(statearr_22306[(1)] = (1));

return statearr_22306;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20302__auto____1 = (function (state_22300){
while(true){
var ret_value__20303__auto__ = (function (){try{while(true){
var result__20304__auto__ = switch__20301__auto__.call(null,state_22300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20304__auto__;
}
break;
}
}catch (e22307){if((e22307 instanceof Object)){
var ex__20305__auto__ = e22307;
var statearr_22308_22310 = state_22300;
(statearr_22308_22310[(5)] = ex__20305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22311 = state_22300;
state_22300 = G__22311;
continue;
} else {
return ret_value__20303__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20302__auto__ = function(state_22300){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20302__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20302__auto____1.call(this,state_22300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20302__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20302__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20302__auto__;
})()
;})(switch__20301__auto__,c__20322__auto__))
})();
var state__20324__auto__ = (function (){var statearr_22309 = f__20323__auto__.call(null);
(statearr_22309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20322__auto__);

return statearr_22309;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__22312){
var map__22319 = p__22312;
var map__22319__$1 = ((((!((map__22319 == null)))?((((map__22319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22319):map__22319);
var ed = map__22319__$1;
var formatted_exception = cljs.core.get.call(null,map__22319__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__22319__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__22319__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__22321_22325 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__22322_22326 = null;
var count__22323_22327 = (0);
var i__22324_22328 = (0);
while(true){
if((i__22324_22328 < count__22323_22327)){
var msg_22329 = cljs.core._nth.call(null,chunk__22322_22326,i__22324_22328);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22329);

var G__22330 = seq__22321_22325;
var G__22331 = chunk__22322_22326;
var G__22332 = count__22323_22327;
var G__22333 = (i__22324_22328 + (1));
seq__22321_22325 = G__22330;
chunk__22322_22326 = G__22331;
count__22323_22327 = G__22332;
i__22324_22328 = G__22333;
continue;
} else {
var temp__4425__auto___22334 = cljs.core.seq.call(null,seq__22321_22325);
if(temp__4425__auto___22334){
var seq__22321_22335__$1 = temp__4425__auto___22334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22321_22335__$1)){
var c__19079__auto___22336 = cljs.core.chunk_first.call(null,seq__22321_22335__$1);
var G__22337 = cljs.core.chunk_rest.call(null,seq__22321_22335__$1);
var G__22338 = c__19079__auto___22336;
var G__22339 = cljs.core.count.call(null,c__19079__auto___22336);
var G__22340 = (0);
seq__22321_22325 = G__22337;
chunk__22322_22326 = G__22338;
count__22323_22327 = G__22339;
i__22324_22328 = G__22340;
continue;
} else {
var msg_22341 = cljs.core.first.call(null,seq__22321_22335__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22341);

var G__22342 = cljs.core.next.call(null,seq__22321_22335__$1);
var G__22343 = null;
var G__22344 = (0);
var G__22345 = (0);
seq__22321_22325 = G__22342;
chunk__22322_22326 = G__22343;
count__22323_22327 = G__22344;
i__22324_22328 = G__22345;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__22346){
var map__22349 = p__22346;
var map__22349__$1 = ((((!((map__22349 == null)))?((((map__22349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22349):map__22349);
var w = map__22349__$1;
var message = cljs.core.get.call(null,map__22349__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__22357 = cljs.core.seq.call(null,plugins);
var chunk__22358 = null;
var count__22359 = (0);
var i__22360 = (0);
while(true){
if((i__22360 < count__22359)){
var vec__22361 = cljs.core._nth.call(null,chunk__22358,i__22360);
var k = cljs.core.nth.call(null,vec__22361,(0),null);
var plugin = cljs.core.nth.call(null,vec__22361,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22363 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22357,chunk__22358,count__22359,i__22360,pl_22363,vec__22361,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_22363.call(null,msg_hist);
});})(seq__22357,chunk__22358,count__22359,i__22360,pl_22363,vec__22361,k,plugin))
);
} else {
}

var G__22364 = seq__22357;
var G__22365 = chunk__22358;
var G__22366 = count__22359;
var G__22367 = (i__22360 + (1));
seq__22357 = G__22364;
chunk__22358 = G__22365;
count__22359 = G__22366;
i__22360 = G__22367;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22357);
if(temp__4425__auto__){
var seq__22357__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22357__$1)){
var c__19079__auto__ = cljs.core.chunk_first.call(null,seq__22357__$1);
var G__22368 = cljs.core.chunk_rest.call(null,seq__22357__$1);
var G__22369 = c__19079__auto__;
var G__22370 = cljs.core.count.call(null,c__19079__auto__);
var G__22371 = (0);
seq__22357 = G__22368;
chunk__22358 = G__22369;
count__22359 = G__22370;
i__22360 = G__22371;
continue;
} else {
var vec__22362 = cljs.core.first.call(null,seq__22357__$1);
var k = cljs.core.nth.call(null,vec__22362,(0),null);
var plugin = cljs.core.nth.call(null,vec__22362,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22372 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22357,chunk__22358,count__22359,i__22360,pl_22372,vec__22362,k,plugin,seq__22357__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_22372.call(null,msg_hist);
});})(seq__22357,chunk__22358,count__22359,i__22360,pl_22372,vec__22362,k,plugin,seq__22357__$1,temp__4425__auto__))
);
} else {
}

var G__22373 = cljs.core.next.call(null,seq__22357__$1);
var G__22374 = null;
var G__22375 = (0);
var G__22376 = (0);
seq__22357 = G__22373;
chunk__22358 = G__22374;
count__22359 = G__22375;
i__22360 = G__22376;
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
var args22377 = [];
var len__19330__auto___22380 = arguments.length;
var i__19331__auto___22381 = (0);
while(true){
if((i__19331__auto___22381 < len__19330__auto___22380)){
args22377.push((arguments[i__19331__auto___22381]));

var G__22382 = (i__19331__auto___22381 + (1));
i__19331__auto___22381 = G__22382;
continue;
} else {
}
break;
}

var G__22379 = args22377.length;
switch (G__22379) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22377.length)].join('')));

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
var len__19330__auto___22388 = arguments.length;
var i__19331__auto___22389 = (0);
while(true){
if((i__19331__auto___22389 < len__19330__auto___22388)){
args__19337__auto__.push((arguments[i__19331__auto___22389]));

var G__22390 = (i__19331__auto___22389 + (1));
i__19331__auto___22389 = G__22390;
continue;
} else {
}
break;
}

var argseq__19338__auto__ = ((((0) < args__19337__auto__.length))?(new cljs.core.IndexedSeq(args__19337__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19338__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__22385){
var map__22386 = p__22385;
var map__22386__$1 = ((((!((map__22386 == null)))?((((map__22386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22386):map__22386);
var opts = map__22386__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq22384){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22384));
});

//# sourceMappingURL=client.js.map