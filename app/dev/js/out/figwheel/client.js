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
var pred__21675 = cljs.core._EQ_;
var expr__21676 = (function (){var or__18276__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__18276__auto__)){
return or__18276__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__21675.call(null,"true",expr__21676))){
return true;
} else {
if(cljs.core.truth_(pred__21675.call(null,"false",expr__21676))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21676)].join('')));
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
var G__21678__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__21678 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21679__i = 0, G__21679__a = new Array(arguments.length -  0);
while (G__21679__i < G__21679__a.length) {G__21679__a[G__21679__i] = arguments[G__21679__i + 0]; ++G__21679__i;}
  args = new cljs.core.IndexedSeq(G__21679__a,0);
} 
return G__21678__delegate.call(this,args);};
G__21678.cljs$lang$maxFixedArity = 0;
G__21678.cljs$lang$applyTo = (function (arglist__21680){
var args = cljs.core.seq(arglist__21680);
return G__21678__delegate(args);
});
G__21678.cljs$core$IFn$_invoke$arity$variadic = G__21678__delegate;
return G__21678;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__21681){
var map__21684 = p__21681;
var map__21684__$1 = ((((!((map__21684 == null)))?((((map__21684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21684):map__21684);
var message = cljs.core.get.call(null,map__21684__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__21684__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20322__auto___21846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20322__auto___21846,ch){
return (function (){
var f__20323__auto__ = (function (){var switch__20301__auto__ = ((function (c__20322__auto___21846,ch){
return (function (state_21815){
var state_val_21816 = (state_21815[(1)]);
if((state_val_21816 === (7))){
var inst_21811 = (state_21815[(2)]);
var state_21815__$1 = state_21815;
var statearr_21817_21847 = state_21815__$1;
(statearr_21817_21847[(2)] = inst_21811);

(statearr_21817_21847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (1))){
var state_21815__$1 = state_21815;
var statearr_21818_21848 = state_21815__$1;
(statearr_21818_21848[(2)] = null);

(statearr_21818_21848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (4))){
var inst_21768 = (state_21815[(7)]);
var inst_21768__$1 = (state_21815[(2)]);
var state_21815__$1 = (function (){var statearr_21819 = state_21815;
(statearr_21819[(7)] = inst_21768__$1);

return statearr_21819;
})();
if(cljs.core.truth_(inst_21768__$1)){
var statearr_21820_21849 = state_21815__$1;
(statearr_21820_21849[(1)] = (5));

} else {
var statearr_21821_21850 = state_21815__$1;
(statearr_21821_21850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (15))){
var inst_21775 = (state_21815[(8)]);
var inst_21790 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_21775);
var inst_21791 = cljs.core.first.call(null,inst_21790);
var inst_21792 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_21791);
var inst_21793 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_21792)].join('');
var inst_21794 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_21793);
var state_21815__$1 = state_21815;
var statearr_21822_21851 = state_21815__$1;
(statearr_21822_21851[(2)] = inst_21794);

(statearr_21822_21851[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (13))){
var inst_21799 = (state_21815[(2)]);
var state_21815__$1 = state_21815;
var statearr_21823_21852 = state_21815__$1;
(statearr_21823_21852[(2)] = inst_21799);

(statearr_21823_21852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (6))){
var state_21815__$1 = state_21815;
var statearr_21824_21853 = state_21815__$1;
(statearr_21824_21853[(2)] = null);

(statearr_21824_21853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (17))){
var inst_21797 = (state_21815[(2)]);
var state_21815__$1 = state_21815;
var statearr_21825_21854 = state_21815__$1;
(statearr_21825_21854[(2)] = inst_21797);

(statearr_21825_21854[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (3))){
var inst_21813 = (state_21815[(2)]);
var state_21815__$1 = state_21815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21815__$1,inst_21813);
} else {
if((state_val_21816 === (12))){
var inst_21774 = (state_21815[(9)]);
var inst_21788 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_21774,opts);
var state_21815__$1 = state_21815;
if(cljs.core.truth_(inst_21788)){
var statearr_21826_21855 = state_21815__$1;
(statearr_21826_21855[(1)] = (15));

} else {
var statearr_21827_21856 = state_21815__$1;
(statearr_21827_21856[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (2))){
var state_21815__$1 = state_21815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21815__$1,(4),ch);
} else {
if((state_val_21816 === (11))){
var inst_21775 = (state_21815[(8)]);
var inst_21780 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21781 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_21775);
var inst_21782 = cljs.core.async.timeout.call(null,(1000));
var inst_21783 = [inst_21781,inst_21782];
var inst_21784 = (new cljs.core.PersistentVector(null,2,(5),inst_21780,inst_21783,null));
var state_21815__$1 = state_21815;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21815__$1,(14),inst_21784);
} else {
if((state_val_21816 === (9))){
var inst_21775 = (state_21815[(8)]);
var inst_21801 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_21802 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_21775);
var inst_21803 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21802);
var inst_21804 = [cljs.core.str("Not loading: "),cljs.core.str(inst_21803)].join('');
var inst_21805 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_21804);
var state_21815__$1 = (function (){var statearr_21828 = state_21815;
(statearr_21828[(10)] = inst_21801);

return statearr_21828;
})();
var statearr_21829_21857 = state_21815__$1;
(statearr_21829_21857[(2)] = inst_21805);

(statearr_21829_21857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (5))){
var inst_21768 = (state_21815[(7)]);
var inst_21770 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_21771 = (new cljs.core.PersistentArrayMap(null,2,inst_21770,null));
var inst_21772 = (new cljs.core.PersistentHashSet(null,inst_21771,null));
var inst_21773 = figwheel.client.focus_msgs.call(null,inst_21772,inst_21768);
var inst_21774 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_21773);
var inst_21775 = cljs.core.first.call(null,inst_21773);
var inst_21776 = figwheel.client.autoload_QMARK_.call(null);
var state_21815__$1 = (function (){var statearr_21830 = state_21815;
(statearr_21830[(8)] = inst_21775);

(statearr_21830[(9)] = inst_21774);

return statearr_21830;
})();
if(cljs.core.truth_(inst_21776)){
var statearr_21831_21858 = state_21815__$1;
(statearr_21831_21858[(1)] = (8));

} else {
var statearr_21832_21859 = state_21815__$1;
(statearr_21832_21859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (14))){
var inst_21786 = (state_21815[(2)]);
var state_21815__$1 = state_21815;
var statearr_21833_21860 = state_21815__$1;
(statearr_21833_21860[(2)] = inst_21786);

(statearr_21833_21860[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (16))){
var state_21815__$1 = state_21815;
var statearr_21834_21861 = state_21815__$1;
(statearr_21834_21861[(2)] = null);

(statearr_21834_21861[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (10))){
var inst_21807 = (state_21815[(2)]);
var state_21815__$1 = (function (){var statearr_21835 = state_21815;
(statearr_21835[(11)] = inst_21807);

return statearr_21835;
})();
var statearr_21836_21862 = state_21815__$1;
(statearr_21836_21862[(2)] = null);

(statearr_21836_21862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21816 === (8))){
var inst_21774 = (state_21815[(9)]);
var inst_21778 = figwheel.client.reload_file_state_QMARK_.call(null,inst_21774,opts);
var state_21815__$1 = state_21815;
if(cljs.core.truth_(inst_21778)){
var statearr_21837_21863 = state_21815__$1;
(statearr_21837_21863[(1)] = (11));

} else {
var statearr_21838_21864 = state_21815__$1;
(statearr_21838_21864[(1)] = (12));

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
});})(c__20322__auto___21846,ch))
;
return ((function (switch__20301__auto__,c__20322__auto___21846,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20302__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20302__auto____0 = (function (){
var statearr_21842 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21842[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20302__auto__);

(statearr_21842[(1)] = (1));

return statearr_21842;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20302__auto____1 = (function (state_21815){
while(true){
var ret_value__20303__auto__ = (function (){try{while(true){
var result__20304__auto__ = switch__20301__auto__.call(null,state_21815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20304__auto__;
}
break;
}
}catch (e21843){if((e21843 instanceof Object)){
var ex__20305__auto__ = e21843;
var statearr_21844_21865 = state_21815;
(statearr_21844_21865[(5)] = ex__20305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21866 = state_21815;
state_21815 = G__21866;
continue;
} else {
return ret_value__20303__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20302__auto__ = function(state_21815){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20302__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20302__auto____1.call(this,state_21815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20302__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20302__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20302__auto__;
})()
;})(switch__20301__auto__,c__20322__auto___21846,ch))
})();
var state__20324__auto__ = (function (){var statearr_21845 = f__20323__auto__.call(null);
(statearr_21845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20322__auto___21846);

return statearr_21845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20324__auto__);
});})(c__20322__auto___21846,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__21867_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__21867_SHARP_));
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
var base_path_21874 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_21874){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_21872 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_21873 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_21872,_STAR_print_newline_STAR_21873,base_path_21874){
return (function() { 
var G__21875__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__21875 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21876__i = 0, G__21876__a = new Array(arguments.length -  0);
while (G__21876__i < G__21876__a.length) {G__21876__a[G__21876__i] = arguments[G__21876__i + 0]; ++G__21876__i;}
  args = new cljs.core.IndexedSeq(G__21876__a,0);
} 
return G__21875__delegate.call(this,args);};
G__21875.cljs$lang$maxFixedArity = 0;
G__21875.cljs$lang$applyTo = (function (arglist__21877){
var args = cljs.core.seq(arglist__21877);
return G__21875__delegate(args);
});
G__21875.cljs$core$IFn$_invoke$arity$variadic = G__21875__delegate;
return G__21875;
})()
;})(_STAR_print_fn_STAR_21872,_STAR_print_newline_STAR_21873,base_path_21874))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_21873;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21872;
}}catch (e21871){if((e21871 instanceof Error)){
var e = e21871;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_21874], null));
} else {
var e = e21871;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_21874))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__21878){
var map__21885 = p__21878;
var map__21885__$1 = ((((!((map__21885 == null)))?((((map__21885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21885):map__21885);
var opts = map__21885__$1;
var build_id = cljs.core.get.call(null,map__21885__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__21885,map__21885__$1,opts,build_id){
return (function (p__21887){
var vec__21888 = p__21887;
var map__21889 = cljs.core.nth.call(null,vec__21888,(0),null);
var map__21889__$1 = ((((!((map__21889 == null)))?((((map__21889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21889):map__21889);
var msg = map__21889__$1;
var msg_name = cljs.core.get.call(null,map__21889__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21888,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__21888,map__21889,map__21889__$1,msg,msg_name,_,map__21885,map__21885__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__21888,map__21889,map__21889__$1,msg,msg_name,_,map__21885,map__21885__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__21885,map__21885__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__21895){
var vec__21896 = p__21895;
var map__21897 = cljs.core.nth.call(null,vec__21896,(0),null);
var map__21897__$1 = ((((!((map__21897 == null)))?((((map__21897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21897):map__21897);
var msg = map__21897__$1;
var msg_name = cljs.core.get.call(null,map__21897__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21896,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__21899){
var map__21909 = p__21899;
var map__21909__$1 = ((((!((map__21909 == null)))?((((map__21909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21909):map__21909);
var on_compile_warning = cljs.core.get.call(null,map__21909__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__21909__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__21909,map__21909__$1,on_compile_warning,on_compile_fail){
return (function (p__21911){
var vec__21912 = p__21911;
var map__21913 = cljs.core.nth.call(null,vec__21912,(0),null);
var map__21913__$1 = ((((!((map__21913 == null)))?((((map__21913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21913):map__21913);
var msg = map__21913__$1;
var msg_name = cljs.core.get.call(null,map__21913__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__21912,(1));
var pred__21915 = cljs.core._EQ_;
var expr__21916 = msg_name;
if(cljs.core.truth_(pred__21915.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__21916))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__21915.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__21916))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__21909,map__21909__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20322__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20322__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20323__auto__ = (function (){var switch__20301__auto__ = ((function (c__20322__auto__,msg_hist,msg_names,msg){
return (function (state_22132){
var state_val_22133 = (state_22132[(1)]);
if((state_val_22133 === (7))){
var inst_22056 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
if(cljs.core.truth_(inst_22056)){
var statearr_22134_22180 = state_22132__$1;
(statearr_22134_22180[(1)] = (8));

} else {
var statearr_22135_22181 = state_22132__$1;
(statearr_22135_22181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (20))){
var inst_22126 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
var statearr_22136_22182 = state_22132__$1;
(statearr_22136_22182[(2)] = inst_22126);

(statearr_22136_22182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (27))){
var inst_22122 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
var statearr_22137_22183 = state_22132__$1;
(statearr_22137_22183[(2)] = inst_22122);

(statearr_22137_22183[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (1))){
var inst_22049 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_22132__$1 = state_22132;
if(cljs.core.truth_(inst_22049)){
var statearr_22138_22184 = state_22132__$1;
(statearr_22138_22184[(1)] = (2));

} else {
var statearr_22139_22185 = state_22132__$1;
(statearr_22139_22185[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (24))){
var inst_22124 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
var statearr_22140_22186 = state_22132__$1;
(statearr_22140_22186[(2)] = inst_22124);

(statearr_22140_22186[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (4))){
var inst_22130 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22132__$1,inst_22130);
} else {
if((state_val_22133 === (15))){
var inst_22128 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
var statearr_22141_22187 = state_22132__$1;
(statearr_22141_22187[(2)] = inst_22128);

(statearr_22141_22187[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (21))){
var inst_22087 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
var statearr_22142_22188 = state_22132__$1;
(statearr_22142_22188[(2)] = inst_22087);

(statearr_22142_22188[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (31))){
var inst_22111 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_22132__$1 = state_22132;
if(cljs.core.truth_(inst_22111)){
var statearr_22143_22189 = state_22132__$1;
(statearr_22143_22189[(1)] = (34));

} else {
var statearr_22144_22190 = state_22132__$1;
(statearr_22144_22190[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (32))){
var inst_22120 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
var statearr_22145_22191 = state_22132__$1;
(statearr_22145_22191[(2)] = inst_22120);

(statearr_22145_22191[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (33))){
var inst_22109 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
var statearr_22146_22192 = state_22132__$1;
(statearr_22146_22192[(2)] = inst_22109);

(statearr_22146_22192[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (13))){
var inst_22070 = figwheel.client.heads_up.clear.call(null);
var state_22132__$1 = state_22132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22132__$1,(16),inst_22070);
} else {
if((state_val_22133 === (22))){
var inst_22091 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22092 = figwheel.client.heads_up.append_message.call(null,inst_22091);
var state_22132__$1 = state_22132;
var statearr_22147_22193 = state_22132__$1;
(statearr_22147_22193[(2)] = inst_22092);

(statearr_22147_22193[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (36))){
var inst_22118 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
var statearr_22148_22194 = state_22132__$1;
(statearr_22148_22194[(2)] = inst_22118);

(statearr_22148_22194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (29))){
var inst_22102 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
var statearr_22149_22195 = state_22132__$1;
(statearr_22149_22195[(2)] = inst_22102);

(statearr_22149_22195[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (6))){
var inst_22051 = (state_22132[(7)]);
var state_22132__$1 = state_22132;
var statearr_22150_22196 = state_22132__$1;
(statearr_22150_22196[(2)] = inst_22051);

(statearr_22150_22196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (28))){
var inst_22098 = (state_22132[(2)]);
var inst_22099 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22100 = figwheel.client.heads_up.display_warning.call(null,inst_22099);
var state_22132__$1 = (function (){var statearr_22151 = state_22132;
(statearr_22151[(8)] = inst_22098);

return statearr_22151;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22132__$1,(29),inst_22100);
} else {
if((state_val_22133 === (25))){
var inst_22096 = figwheel.client.heads_up.clear.call(null);
var state_22132__$1 = state_22132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22132__$1,(28),inst_22096);
} else {
if((state_val_22133 === (34))){
var inst_22113 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22132__$1 = state_22132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22132__$1,(37),inst_22113);
} else {
if((state_val_22133 === (17))){
var inst_22078 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
var statearr_22152_22197 = state_22132__$1;
(statearr_22152_22197[(2)] = inst_22078);

(statearr_22152_22197[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (3))){
var inst_22068 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_22132__$1 = state_22132;
if(cljs.core.truth_(inst_22068)){
var statearr_22153_22198 = state_22132__$1;
(statearr_22153_22198[(1)] = (13));

} else {
var statearr_22154_22199 = state_22132__$1;
(statearr_22154_22199[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (12))){
var inst_22064 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
var statearr_22155_22200 = state_22132__$1;
(statearr_22155_22200[(2)] = inst_22064);

(statearr_22155_22200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (2))){
var inst_22051 = (state_22132[(7)]);
var inst_22051__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_22132__$1 = (function (){var statearr_22156 = state_22132;
(statearr_22156[(7)] = inst_22051__$1);

return statearr_22156;
})();
if(cljs.core.truth_(inst_22051__$1)){
var statearr_22157_22201 = state_22132__$1;
(statearr_22157_22201[(1)] = (5));

} else {
var statearr_22158_22202 = state_22132__$1;
(statearr_22158_22202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (23))){
var inst_22094 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_22132__$1 = state_22132;
if(cljs.core.truth_(inst_22094)){
var statearr_22159_22203 = state_22132__$1;
(statearr_22159_22203[(1)] = (25));

} else {
var statearr_22160_22204 = state_22132__$1;
(statearr_22160_22204[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (35))){
var state_22132__$1 = state_22132;
var statearr_22161_22205 = state_22132__$1;
(statearr_22161_22205[(2)] = null);

(statearr_22161_22205[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (19))){
var inst_22089 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_22132__$1 = state_22132;
if(cljs.core.truth_(inst_22089)){
var statearr_22162_22206 = state_22132__$1;
(statearr_22162_22206[(1)] = (22));

} else {
var statearr_22163_22207 = state_22132__$1;
(statearr_22163_22207[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (11))){
var inst_22060 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
var statearr_22164_22208 = state_22132__$1;
(statearr_22164_22208[(2)] = inst_22060);

(statearr_22164_22208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (9))){
var inst_22062 = figwheel.client.heads_up.clear.call(null);
var state_22132__$1 = state_22132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22132__$1,(12),inst_22062);
} else {
if((state_val_22133 === (5))){
var inst_22053 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_22132__$1 = state_22132;
var statearr_22165_22209 = state_22132__$1;
(statearr_22165_22209[(2)] = inst_22053);

(statearr_22165_22209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (14))){
var inst_22080 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_22132__$1 = state_22132;
if(cljs.core.truth_(inst_22080)){
var statearr_22166_22210 = state_22132__$1;
(statearr_22166_22210[(1)] = (18));

} else {
var statearr_22167_22211 = state_22132__$1;
(statearr_22167_22211[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (26))){
var inst_22104 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_22132__$1 = state_22132;
if(cljs.core.truth_(inst_22104)){
var statearr_22168_22212 = state_22132__$1;
(statearr_22168_22212[(1)] = (30));

} else {
var statearr_22169_22213 = state_22132__$1;
(statearr_22169_22213[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (16))){
var inst_22072 = (state_22132[(2)]);
var inst_22073 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22074 = figwheel.client.format_messages.call(null,inst_22073);
var inst_22075 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22076 = figwheel.client.heads_up.display_error.call(null,inst_22074,inst_22075);
var state_22132__$1 = (function (){var statearr_22170 = state_22132;
(statearr_22170[(9)] = inst_22072);

return statearr_22170;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22132__$1,(17),inst_22076);
} else {
if((state_val_22133 === (30))){
var inst_22106 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22107 = figwheel.client.heads_up.display_warning.call(null,inst_22106);
var state_22132__$1 = state_22132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22132__$1,(33),inst_22107);
} else {
if((state_val_22133 === (10))){
var inst_22066 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
var statearr_22171_22214 = state_22132__$1;
(statearr_22171_22214[(2)] = inst_22066);

(statearr_22171_22214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (18))){
var inst_22082 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22083 = figwheel.client.format_messages.call(null,inst_22082);
var inst_22084 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22085 = figwheel.client.heads_up.display_error.call(null,inst_22083,inst_22084);
var state_22132__$1 = state_22132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22132__$1,(21),inst_22085);
} else {
if((state_val_22133 === (37))){
var inst_22115 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
var statearr_22172_22215 = state_22132__$1;
(statearr_22172_22215[(2)] = inst_22115);

(statearr_22172_22215[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (8))){
var inst_22058 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22132__$1 = state_22132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22132__$1,(11),inst_22058);
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
var statearr_22176 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22176[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto__);

(statearr_22176[(1)] = (1));

return statearr_22176;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto____1 = (function (state_22132){
while(true){
var ret_value__20303__auto__ = (function (){try{while(true){
var result__20304__auto__ = switch__20301__auto__.call(null,state_22132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20304__auto__;
}
break;
}
}catch (e22177){if((e22177 instanceof Object)){
var ex__20305__auto__ = e22177;
var statearr_22178_22216 = state_22132;
(statearr_22178_22216[(5)] = ex__20305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22217 = state_22132;
state_22132 = G__22217;
continue;
} else {
return ret_value__20303__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto__ = function(state_22132){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto____1.call(this,state_22132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20302__auto__;
})()
;})(switch__20301__auto__,c__20322__auto__,msg_hist,msg_names,msg))
})();
var state__20324__auto__ = (function (){var statearr_22179 = f__20323__auto__.call(null);
(statearr_22179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20322__auto__);

return statearr_22179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20324__auto__);
});})(c__20322__auto__,msg_hist,msg_names,msg))
);

return c__20322__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20322__auto___22280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20322__auto___22280,ch){
return (function (){
var f__20323__auto__ = (function (){var switch__20301__auto__ = ((function (c__20322__auto___22280,ch){
return (function (state_22263){
var state_val_22264 = (state_22263[(1)]);
if((state_val_22264 === (1))){
var state_22263__$1 = state_22263;
var statearr_22265_22281 = state_22263__$1;
(statearr_22265_22281[(2)] = null);

(statearr_22265_22281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (2))){
var state_22263__$1 = state_22263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22263__$1,(4),ch);
} else {
if((state_val_22264 === (3))){
var inst_22261 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22263__$1,inst_22261);
} else {
if((state_val_22264 === (4))){
var inst_22251 = (state_22263[(7)]);
var inst_22251__$1 = (state_22263[(2)]);
var state_22263__$1 = (function (){var statearr_22266 = state_22263;
(statearr_22266[(7)] = inst_22251__$1);

return statearr_22266;
})();
if(cljs.core.truth_(inst_22251__$1)){
var statearr_22267_22282 = state_22263__$1;
(statearr_22267_22282[(1)] = (5));

} else {
var statearr_22268_22283 = state_22263__$1;
(statearr_22268_22283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (5))){
var inst_22251 = (state_22263[(7)]);
var inst_22253 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_22251);
var state_22263__$1 = state_22263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22263__$1,(8),inst_22253);
} else {
if((state_val_22264 === (6))){
var state_22263__$1 = state_22263;
var statearr_22269_22284 = state_22263__$1;
(statearr_22269_22284[(2)] = null);

(statearr_22269_22284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (7))){
var inst_22259 = (state_22263[(2)]);
var state_22263__$1 = state_22263;
var statearr_22270_22285 = state_22263__$1;
(statearr_22270_22285[(2)] = inst_22259);

(statearr_22270_22285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22264 === (8))){
var inst_22255 = (state_22263[(2)]);
var state_22263__$1 = (function (){var statearr_22271 = state_22263;
(statearr_22271[(8)] = inst_22255);

return statearr_22271;
})();
var statearr_22272_22286 = state_22263__$1;
(statearr_22272_22286[(2)] = null);

(statearr_22272_22286[(1)] = (2));


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
});})(c__20322__auto___22280,ch))
;
return ((function (switch__20301__auto__,c__20322__auto___22280,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20302__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20302__auto____0 = (function (){
var statearr_22276 = [null,null,null,null,null,null,null,null,null];
(statearr_22276[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20302__auto__);

(statearr_22276[(1)] = (1));

return statearr_22276;
});
var figwheel$client$heads_up_plugin_$_state_machine__20302__auto____1 = (function (state_22263){
while(true){
var ret_value__20303__auto__ = (function (){try{while(true){
var result__20304__auto__ = switch__20301__auto__.call(null,state_22263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20304__auto__;
}
break;
}
}catch (e22277){if((e22277 instanceof Object)){
var ex__20305__auto__ = e22277;
var statearr_22278_22287 = state_22263;
(statearr_22278_22287[(5)] = ex__20305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22288 = state_22263;
state_22263 = G__22288;
continue;
} else {
return ret_value__20303__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20302__auto__ = function(state_22263){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20302__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20302__auto____1.call(this,state_22263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20302__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20302__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20302__auto__;
})()
;})(switch__20301__auto__,c__20322__auto___22280,ch))
})();
var state__20324__auto__ = (function (){var statearr_22279 = f__20323__auto__.call(null);
(statearr_22279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20322__auto___22280);

return statearr_22279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20324__auto__);
});})(c__20322__auto___22280,ch))
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
return (function (state_22309){
var state_val_22310 = (state_22309[(1)]);
if((state_val_22310 === (1))){
var inst_22304 = cljs.core.async.timeout.call(null,(3000));
var state_22309__$1 = state_22309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22309__$1,(2),inst_22304);
} else {
if((state_val_22310 === (2))){
var inst_22306 = (state_22309[(2)]);
var inst_22307 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_22309__$1 = (function (){var statearr_22311 = state_22309;
(statearr_22311[(7)] = inst_22306);

return statearr_22311;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22309__$1,inst_22307);
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
var statearr_22315 = [null,null,null,null,null,null,null,null];
(statearr_22315[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20302__auto__);

(statearr_22315[(1)] = (1));

return statearr_22315;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20302__auto____1 = (function (state_22309){
while(true){
var ret_value__20303__auto__ = (function (){try{while(true){
var result__20304__auto__ = switch__20301__auto__.call(null,state_22309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20304__auto__;
}
break;
}
}catch (e22316){if((e22316 instanceof Object)){
var ex__20305__auto__ = e22316;
var statearr_22317_22319 = state_22309;
(statearr_22317_22319[(5)] = ex__20305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22320 = state_22309;
state_22309 = G__22320;
continue;
} else {
return ret_value__20303__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20302__auto__ = function(state_22309){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20302__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20302__auto____1.call(this,state_22309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20302__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20302__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20302__auto__;
})()
;})(switch__20301__auto__,c__20322__auto__))
})();
var state__20324__auto__ = (function (){var statearr_22318 = f__20323__auto__.call(null);
(statearr_22318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20322__auto__);

return statearr_22318;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__22321){
var map__22328 = p__22321;
var map__22328__$1 = ((((!((map__22328 == null)))?((((map__22328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22328):map__22328);
var ed = map__22328__$1;
var formatted_exception = cljs.core.get.call(null,map__22328__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__22328__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__22328__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__22330_22334 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__22331_22335 = null;
var count__22332_22336 = (0);
var i__22333_22337 = (0);
while(true){
if((i__22333_22337 < count__22332_22336)){
var msg_22338 = cljs.core._nth.call(null,chunk__22331_22335,i__22333_22337);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22338);

var G__22339 = seq__22330_22334;
var G__22340 = chunk__22331_22335;
var G__22341 = count__22332_22336;
var G__22342 = (i__22333_22337 + (1));
seq__22330_22334 = G__22339;
chunk__22331_22335 = G__22340;
count__22332_22336 = G__22341;
i__22333_22337 = G__22342;
continue;
} else {
var temp__4425__auto___22343 = cljs.core.seq.call(null,seq__22330_22334);
if(temp__4425__auto___22343){
var seq__22330_22344__$1 = temp__4425__auto___22343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22330_22344__$1)){
var c__19079__auto___22345 = cljs.core.chunk_first.call(null,seq__22330_22344__$1);
var G__22346 = cljs.core.chunk_rest.call(null,seq__22330_22344__$1);
var G__22347 = c__19079__auto___22345;
var G__22348 = cljs.core.count.call(null,c__19079__auto___22345);
var G__22349 = (0);
seq__22330_22334 = G__22346;
chunk__22331_22335 = G__22347;
count__22332_22336 = G__22348;
i__22333_22337 = G__22349;
continue;
} else {
var msg_22350 = cljs.core.first.call(null,seq__22330_22344__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22350);

var G__22351 = cljs.core.next.call(null,seq__22330_22344__$1);
var G__22352 = null;
var G__22353 = (0);
var G__22354 = (0);
seq__22330_22334 = G__22351;
chunk__22331_22335 = G__22352;
count__22332_22336 = G__22353;
i__22333_22337 = G__22354;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__22355){
var map__22358 = p__22355;
var map__22358__$1 = ((((!((map__22358 == null)))?((((map__22358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22358):map__22358);
var w = map__22358__$1;
var message = cljs.core.get.call(null,map__22358__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__22366 = cljs.core.seq.call(null,plugins);
var chunk__22367 = null;
var count__22368 = (0);
var i__22369 = (0);
while(true){
if((i__22369 < count__22368)){
var vec__22370 = cljs.core._nth.call(null,chunk__22367,i__22369);
var k = cljs.core.nth.call(null,vec__22370,(0),null);
var plugin = cljs.core.nth.call(null,vec__22370,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22372 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22366,chunk__22367,count__22368,i__22369,pl_22372,vec__22370,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_22372.call(null,msg_hist);
});})(seq__22366,chunk__22367,count__22368,i__22369,pl_22372,vec__22370,k,plugin))
);
} else {
}

var G__22373 = seq__22366;
var G__22374 = chunk__22367;
var G__22375 = count__22368;
var G__22376 = (i__22369 + (1));
seq__22366 = G__22373;
chunk__22367 = G__22374;
count__22368 = G__22375;
i__22369 = G__22376;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22366);
if(temp__4425__auto__){
var seq__22366__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22366__$1)){
var c__19079__auto__ = cljs.core.chunk_first.call(null,seq__22366__$1);
var G__22377 = cljs.core.chunk_rest.call(null,seq__22366__$1);
var G__22378 = c__19079__auto__;
var G__22379 = cljs.core.count.call(null,c__19079__auto__);
var G__22380 = (0);
seq__22366 = G__22377;
chunk__22367 = G__22378;
count__22368 = G__22379;
i__22369 = G__22380;
continue;
} else {
var vec__22371 = cljs.core.first.call(null,seq__22366__$1);
var k = cljs.core.nth.call(null,vec__22371,(0),null);
var plugin = cljs.core.nth.call(null,vec__22371,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22381 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22366,chunk__22367,count__22368,i__22369,pl_22381,vec__22371,k,plugin,seq__22366__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_22381.call(null,msg_hist);
});})(seq__22366,chunk__22367,count__22368,i__22369,pl_22381,vec__22371,k,plugin,seq__22366__$1,temp__4425__auto__))
);
} else {
}

var G__22382 = cljs.core.next.call(null,seq__22366__$1);
var G__22383 = null;
var G__22384 = (0);
var G__22385 = (0);
seq__22366 = G__22382;
chunk__22367 = G__22383;
count__22368 = G__22384;
i__22369 = G__22385;
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
var args22386 = [];
var len__19330__auto___22389 = arguments.length;
var i__19331__auto___22390 = (0);
while(true){
if((i__19331__auto___22390 < len__19330__auto___22389)){
args22386.push((arguments[i__19331__auto___22390]));

var G__22391 = (i__19331__auto___22390 + (1));
i__19331__auto___22390 = G__22391;
continue;
} else {
}
break;
}

var G__22388 = args22386.length;
switch (G__22388) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22386.length)].join('')));

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
var len__19330__auto___22397 = arguments.length;
var i__19331__auto___22398 = (0);
while(true){
if((i__19331__auto___22398 < len__19330__auto___22397)){
args__19337__auto__.push((arguments[i__19331__auto___22398]));

var G__22399 = (i__19331__auto___22398 + (1));
i__19331__auto___22398 = G__22399;
continue;
} else {
}
break;
}

var argseq__19338__auto__ = ((((0) < args__19337__auto__.length))?(new cljs.core.IndexedSeq(args__19337__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19338__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__22394){
var map__22395 = p__22394;
var map__22395__$1 = ((((!((map__22395 == null)))?((((map__22395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22395):map__22395);
var opts = map__22395__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq22393){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22393));
});

//# sourceMappingURL=client.js.map