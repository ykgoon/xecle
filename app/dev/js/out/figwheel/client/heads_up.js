// Compiled by ClojureScript 1.7.228 {:elide-asserts true}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19337__auto__ = [];
var len__19330__auto___21431 = arguments.length;
var i__19331__auto___21432 = (0);
while(true){
if((i__19331__auto___21432 < len__19330__auto___21431)){
args__19337__auto__.push((arguments[i__19331__auto___21432]));

var G__21433 = (i__19331__auto___21432 + (1));
i__19331__auto___21432 = G__21433;
continue;
} else {
}
break;
}

var argseq__19338__auto__ = ((((2) < args__19337__auto__.length))?(new cljs.core.IndexedSeq(args__19337__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19338__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__21423_21434 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__21424_21435 = null;
var count__21425_21436 = (0);
var i__21426_21437 = (0);
while(true){
if((i__21426_21437 < count__21425_21436)){
var k_21438 = cljs.core._nth.call(null,chunk__21424_21435,i__21426_21437);
e.setAttribute(cljs.core.name.call(null,k_21438),cljs.core.get.call(null,attrs,k_21438));

var G__21439 = seq__21423_21434;
var G__21440 = chunk__21424_21435;
var G__21441 = count__21425_21436;
var G__21442 = (i__21426_21437 + (1));
seq__21423_21434 = G__21439;
chunk__21424_21435 = G__21440;
count__21425_21436 = G__21441;
i__21426_21437 = G__21442;
continue;
} else {
var temp__4425__auto___21443 = cljs.core.seq.call(null,seq__21423_21434);
if(temp__4425__auto___21443){
var seq__21423_21444__$1 = temp__4425__auto___21443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21423_21444__$1)){
var c__19079__auto___21445 = cljs.core.chunk_first.call(null,seq__21423_21444__$1);
var G__21446 = cljs.core.chunk_rest.call(null,seq__21423_21444__$1);
var G__21447 = c__19079__auto___21445;
var G__21448 = cljs.core.count.call(null,c__19079__auto___21445);
var G__21449 = (0);
seq__21423_21434 = G__21446;
chunk__21424_21435 = G__21447;
count__21425_21436 = G__21448;
i__21426_21437 = G__21449;
continue;
} else {
var k_21450 = cljs.core.first.call(null,seq__21423_21444__$1);
e.setAttribute(cljs.core.name.call(null,k_21450),cljs.core.get.call(null,attrs,k_21450));

var G__21451 = cljs.core.next.call(null,seq__21423_21444__$1);
var G__21452 = null;
var G__21453 = (0);
var G__21454 = (0);
seq__21423_21434 = G__21451;
chunk__21424_21435 = G__21452;
count__21425_21436 = G__21453;
i__21426_21437 = G__21454;
continue;
}
} else {
}
}
break;
}

var seq__21427_21455 = cljs.core.seq.call(null,children);
var chunk__21428_21456 = null;
var count__21429_21457 = (0);
var i__21430_21458 = (0);
while(true){
if((i__21430_21458 < count__21429_21457)){
var ch_21459 = cljs.core._nth.call(null,chunk__21428_21456,i__21430_21458);
e.appendChild(ch_21459);

var G__21460 = seq__21427_21455;
var G__21461 = chunk__21428_21456;
var G__21462 = count__21429_21457;
var G__21463 = (i__21430_21458 + (1));
seq__21427_21455 = G__21460;
chunk__21428_21456 = G__21461;
count__21429_21457 = G__21462;
i__21430_21458 = G__21463;
continue;
} else {
var temp__4425__auto___21464 = cljs.core.seq.call(null,seq__21427_21455);
if(temp__4425__auto___21464){
var seq__21427_21465__$1 = temp__4425__auto___21464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21427_21465__$1)){
var c__19079__auto___21466 = cljs.core.chunk_first.call(null,seq__21427_21465__$1);
var G__21467 = cljs.core.chunk_rest.call(null,seq__21427_21465__$1);
var G__21468 = c__19079__auto___21466;
var G__21469 = cljs.core.count.call(null,c__19079__auto___21466);
var G__21470 = (0);
seq__21427_21455 = G__21467;
chunk__21428_21456 = G__21468;
count__21429_21457 = G__21469;
i__21430_21458 = G__21470;
continue;
} else {
var ch_21471 = cljs.core.first.call(null,seq__21427_21465__$1);
e.appendChild(ch_21471);

var G__21472 = cljs.core.next.call(null,seq__21427_21465__$1);
var G__21473 = null;
var G__21474 = (0);
var G__21475 = (0);
seq__21427_21455 = G__21472;
chunk__21428_21456 = G__21473;
count__21429_21457 = G__21474;
i__21430_21458 = G__21475;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq21420){
var G__21421 = cljs.core.first.call(null,seq21420);
var seq21420__$1 = cljs.core.next.call(null,seq21420);
var G__21422 = cljs.core.first.call(null,seq21420__$1);
var seq21420__$2 = cljs.core.next.call(null,seq21420__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__21421,G__21422,seq21420__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19189__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19190__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19191__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19192__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19193__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19189__auto__,prefer_table__19190__auto__,method_cache__19191__auto__,cached_hierarchy__19192__auto__,hierarchy__19193__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19189__auto__,prefer_table__19190__auto__,method_cache__19191__auto__,cached_hierarchy__19192__auto__,hierarchy__19193__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19193__auto__,method_table__19189__auto__,prefer_table__19190__auto__,method_cache__19191__auto__,cached_hierarchy__19192__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_21476 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_21476.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_21476.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_21476.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_21476);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__21477,st_map){
var map__21482 = p__21477;
var map__21482__$1 = ((((!((map__21482 == null)))?((((map__21482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21482):map__21482);
var container_el = cljs.core.get.call(null,map__21482__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__21482,map__21482__$1,container_el){
return (function (p__21484){
var vec__21485 = p__21484;
var k = cljs.core.nth.call(null,vec__21485,(0),null);
var v = cljs.core.nth.call(null,vec__21485,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__21482,map__21482__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__21486,dom_str){
var map__21489 = p__21486;
var map__21489__$1 = ((((!((map__21489 == null)))?((((map__21489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21489):map__21489);
var c = map__21489__$1;
var content_area_el = cljs.core.get.call(null,map__21489__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__21491){
var map__21494 = p__21491;
var map__21494__$1 = ((((!((map__21494 == null)))?((((map__21494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21494):map__21494);
var content_area_el = cljs.core.get.call(null,map__21494__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20322__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20322__auto__){
return (function (){
var f__20323__auto__ = (function (){var switch__20301__auto__ = ((function (c__20322__auto__){
return (function (state_21537){
var state_val_21538 = (state_21537[(1)]);
if((state_val_21538 === (1))){
var inst_21522 = (state_21537[(7)]);
var inst_21522__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_21523 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_21524 = ["10px","10px","100%","68px","1.0"];
var inst_21525 = cljs.core.PersistentHashMap.fromArrays(inst_21523,inst_21524);
var inst_21526 = cljs.core.merge.call(null,inst_21525,style);
var inst_21527 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21522__$1,inst_21526);
var inst_21528 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_21522__$1,msg);
var inst_21529 = cljs.core.async.timeout.call(null,(300));
var state_21537__$1 = (function (){var statearr_21539 = state_21537;
(statearr_21539[(8)] = inst_21527);

(statearr_21539[(9)] = inst_21528);

(statearr_21539[(7)] = inst_21522__$1);

return statearr_21539;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21537__$1,(2),inst_21529);
} else {
if((state_val_21538 === (2))){
var inst_21522 = (state_21537[(7)]);
var inst_21531 = (state_21537[(2)]);
var inst_21532 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_21533 = ["auto"];
var inst_21534 = cljs.core.PersistentHashMap.fromArrays(inst_21532,inst_21533);
var inst_21535 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21522,inst_21534);
var state_21537__$1 = (function (){var statearr_21540 = state_21537;
(statearr_21540[(10)] = inst_21531);

return statearr_21540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21537__$1,inst_21535);
} else {
return null;
}
}
});})(c__20322__auto__))
;
return ((function (switch__20301__auto__,c__20322__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20302__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20302__auto____0 = (function (){
var statearr_21544 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21544[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20302__auto__);

(statearr_21544[(1)] = (1));

return statearr_21544;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20302__auto____1 = (function (state_21537){
while(true){
var ret_value__20303__auto__ = (function (){try{while(true){
var result__20304__auto__ = switch__20301__auto__.call(null,state_21537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20304__auto__;
}
break;
}
}catch (e21545){if((e21545 instanceof Object)){
var ex__20305__auto__ = e21545;
var statearr_21546_21548 = state_21537;
(statearr_21546_21548[(5)] = ex__20305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21549 = state_21537;
state_21537 = G__21549;
continue;
} else {
return ret_value__20303__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20302__auto__ = function(state_21537){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20302__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20302__auto____1.call(this,state_21537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20302__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20302__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20302__auto__;
})()
;})(switch__20301__auto__,c__20322__auto__))
})();
var state__20324__auto__ = (function (){var statearr_21547 = f__20323__auto__.call(null);
(statearr_21547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20322__auto__);

return statearr_21547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20324__auto__);
});})(c__20322__auto__))
);

return c__20322__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__21551 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__21551,(0),null);
var ln = cljs.core.nth.call(null,vec__21551,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__21554 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__21554,(0),null);
var file_line = cljs.core.nth.call(null,vec__21554,(1),null);
var file_column = cljs.core.nth.call(null,vec__21554,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__21554,file_name,file_line,file_column){
return (function (p1__21552_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__21552_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__21554,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18276__auto__ = file_line;
if(cljs.core.truth_(or__18276__auto__)){
return or__18276__auto__;
} else {
var and__18264__auto__ = cause;
if(cljs.core.truth_(and__18264__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18264__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__21557 = figwheel.client.heads_up.ensure_container.call(null);
var map__21557__$1 = ((((!((map__21557 == null)))?((((map__21557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21557):map__21557);
var content_area_el = cljs.core.get.call(null,map__21557__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20322__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20322__auto__){
return (function (){
var f__20323__auto__ = (function (){var switch__20301__auto__ = ((function (c__20322__auto__){
return (function (state_21605){
var state_val_21606 = (state_21605[(1)]);
if((state_val_21606 === (1))){
var inst_21588 = (state_21605[(7)]);
var inst_21588__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_21589 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_21590 = ["0.0"];
var inst_21591 = cljs.core.PersistentHashMap.fromArrays(inst_21589,inst_21590);
var inst_21592 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21588__$1,inst_21591);
var inst_21593 = cljs.core.async.timeout.call(null,(300));
var state_21605__$1 = (function (){var statearr_21607 = state_21605;
(statearr_21607[(8)] = inst_21592);

(statearr_21607[(7)] = inst_21588__$1);

return statearr_21607;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21605__$1,(2),inst_21593);
} else {
if((state_val_21606 === (2))){
var inst_21588 = (state_21605[(7)]);
var inst_21595 = (state_21605[(2)]);
var inst_21596 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_21597 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_21598 = cljs.core.PersistentHashMap.fromArrays(inst_21596,inst_21597);
var inst_21599 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21588,inst_21598);
var inst_21600 = cljs.core.async.timeout.call(null,(200));
var state_21605__$1 = (function (){var statearr_21608 = state_21605;
(statearr_21608[(9)] = inst_21595);

(statearr_21608[(10)] = inst_21599);

return statearr_21608;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21605__$1,(3),inst_21600);
} else {
if((state_val_21606 === (3))){
var inst_21588 = (state_21605[(7)]);
var inst_21602 = (state_21605[(2)]);
var inst_21603 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_21588,"");
var state_21605__$1 = (function (){var statearr_21609 = state_21605;
(statearr_21609[(11)] = inst_21602);

return statearr_21609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21605__$1,inst_21603);
} else {
return null;
}
}
}
});})(c__20322__auto__))
;
return ((function (switch__20301__auto__,c__20322__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20302__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20302__auto____0 = (function (){
var statearr_21613 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21613[(0)] = figwheel$client$heads_up$clear_$_state_machine__20302__auto__);

(statearr_21613[(1)] = (1));

return statearr_21613;
});
var figwheel$client$heads_up$clear_$_state_machine__20302__auto____1 = (function (state_21605){
while(true){
var ret_value__20303__auto__ = (function (){try{while(true){
var result__20304__auto__ = switch__20301__auto__.call(null,state_21605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20304__auto__;
}
break;
}
}catch (e21614){if((e21614 instanceof Object)){
var ex__20305__auto__ = e21614;
var statearr_21615_21617 = state_21605;
(statearr_21615_21617[(5)] = ex__20305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21618 = state_21605;
state_21605 = G__21618;
continue;
} else {
return ret_value__20303__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20302__auto__ = function(state_21605){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20302__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20302__auto____1.call(this,state_21605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20302__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20302__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20302__auto__;
})()
;})(switch__20301__auto__,c__20322__auto__))
})();
var state__20324__auto__ = (function (){var statearr_21616 = f__20323__auto__.call(null);
(statearr_21616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20322__auto__);

return statearr_21616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20324__auto__);
});})(c__20322__auto__))
);

return c__20322__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20322__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20322__auto__){
return (function (){
var f__20323__auto__ = (function (){var switch__20301__auto__ = ((function (c__20322__auto__){
return (function (state_21650){
var state_val_21651 = (state_21650[(1)]);
if((state_val_21651 === (1))){
var inst_21640 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_21650__$1 = state_21650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21650__$1,(2),inst_21640);
} else {
if((state_val_21651 === (2))){
var inst_21642 = (state_21650[(2)]);
var inst_21643 = cljs.core.async.timeout.call(null,(400));
var state_21650__$1 = (function (){var statearr_21652 = state_21650;
(statearr_21652[(7)] = inst_21642);

return statearr_21652;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21650__$1,(3),inst_21643);
} else {
if((state_val_21651 === (3))){
var inst_21645 = (state_21650[(2)]);
var inst_21646 = figwheel.client.heads_up.clear.call(null);
var state_21650__$1 = (function (){var statearr_21653 = state_21650;
(statearr_21653[(8)] = inst_21645);

return statearr_21653;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21650__$1,(4),inst_21646);
} else {
if((state_val_21651 === (4))){
var inst_21648 = (state_21650[(2)]);
var state_21650__$1 = state_21650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21650__$1,inst_21648);
} else {
return null;
}
}
}
}
});})(c__20322__auto__))
;
return ((function (switch__20301__auto__,c__20322__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20302__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20302__auto____0 = (function (){
var statearr_21657 = [null,null,null,null,null,null,null,null,null];
(statearr_21657[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20302__auto__);

(statearr_21657[(1)] = (1));

return statearr_21657;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20302__auto____1 = (function (state_21650){
while(true){
var ret_value__20303__auto__ = (function (){try{while(true){
var result__20304__auto__ = switch__20301__auto__.call(null,state_21650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20304__auto__;
}
break;
}
}catch (e21658){if((e21658 instanceof Object)){
var ex__20305__auto__ = e21658;
var statearr_21659_21661 = state_21650;
(statearr_21659_21661[(5)] = ex__20305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21662 = state_21650;
state_21650 = G__21662;
continue;
} else {
return ret_value__20303__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20302__auto__ = function(state_21650){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20302__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20302__auto____1.call(this,state_21650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20302__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20302__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20302__auto__;
})()
;})(switch__20301__auto__,c__20322__auto__))
})();
var state__20324__auto__ = (function (){var statearr_21660 = f__20323__auto__.call(null);
(statearr_21660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20322__auto__);

return statearr_21660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20324__auto__);
});})(c__20322__auto__))
);

return c__20322__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map