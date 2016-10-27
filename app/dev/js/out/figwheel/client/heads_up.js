// Compiled by ClojureScript 1.7.228 {:elide-asserts true}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19337__auto__ = [];
var len__19330__auto___24558 = arguments.length;
var i__19331__auto___24559 = (0);
while(true){
if((i__19331__auto___24559 < len__19330__auto___24558)){
args__19337__auto__.push((arguments[i__19331__auto___24559]));

var G__24560 = (i__19331__auto___24559 + (1));
i__19331__auto___24559 = G__24560;
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
var seq__24550_24561 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24551_24562 = null;
var count__24552_24563 = (0);
var i__24553_24564 = (0);
while(true){
if((i__24553_24564 < count__24552_24563)){
var k_24565 = cljs.core._nth.call(null,chunk__24551_24562,i__24553_24564);
e.setAttribute(cljs.core.name.call(null,k_24565),cljs.core.get.call(null,attrs,k_24565));

var G__24566 = seq__24550_24561;
var G__24567 = chunk__24551_24562;
var G__24568 = count__24552_24563;
var G__24569 = (i__24553_24564 + (1));
seq__24550_24561 = G__24566;
chunk__24551_24562 = G__24567;
count__24552_24563 = G__24568;
i__24553_24564 = G__24569;
continue;
} else {
var temp__4425__auto___24570 = cljs.core.seq.call(null,seq__24550_24561);
if(temp__4425__auto___24570){
var seq__24550_24571__$1 = temp__4425__auto___24570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24550_24571__$1)){
var c__19079__auto___24572 = cljs.core.chunk_first.call(null,seq__24550_24571__$1);
var G__24573 = cljs.core.chunk_rest.call(null,seq__24550_24571__$1);
var G__24574 = c__19079__auto___24572;
var G__24575 = cljs.core.count.call(null,c__19079__auto___24572);
var G__24576 = (0);
seq__24550_24561 = G__24573;
chunk__24551_24562 = G__24574;
count__24552_24563 = G__24575;
i__24553_24564 = G__24576;
continue;
} else {
var k_24577 = cljs.core.first.call(null,seq__24550_24571__$1);
e.setAttribute(cljs.core.name.call(null,k_24577),cljs.core.get.call(null,attrs,k_24577));

var G__24578 = cljs.core.next.call(null,seq__24550_24571__$1);
var G__24579 = null;
var G__24580 = (0);
var G__24581 = (0);
seq__24550_24561 = G__24578;
chunk__24551_24562 = G__24579;
count__24552_24563 = G__24580;
i__24553_24564 = G__24581;
continue;
}
} else {
}
}
break;
}

var seq__24554_24582 = cljs.core.seq.call(null,children);
var chunk__24555_24583 = null;
var count__24556_24584 = (0);
var i__24557_24585 = (0);
while(true){
if((i__24557_24585 < count__24556_24584)){
var ch_24586 = cljs.core._nth.call(null,chunk__24555_24583,i__24557_24585);
e.appendChild(ch_24586);

var G__24587 = seq__24554_24582;
var G__24588 = chunk__24555_24583;
var G__24589 = count__24556_24584;
var G__24590 = (i__24557_24585 + (1));
seq__24554_24582 = G__24587;
chunk__24555_24583 = G__24588;
count__24556_24584 = G__24589;
i__24557_24585 = G__24590;
continue;
} else {
var temp__4425__auto___24591 = cljs.core.seq.call(null,seq__24554_24582);
if(temp__4425__auto___24591){
var seq__24554_24592__$1 = temp__4425__auto___24591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24554_24592__$1)){
var c__19079__auto___24593 = cljs.core.chunk_first.call(null,seq__24554_24592__$1);
var G__24594 = cljs.core.chunk_rest.call(null,seq__24554_24592__$1);
var G__24595 = c__19079__auto___24593;
var G__24596 = cljs.core.count.call(null,c__19079__auto___24593);
var G__24597 = (0);
seq__24554_24582 = G__24594;
chunk__24555_24583 = G__24595;
count__24556_24584 = G__24596;
i__24557_24585 = G__24597;
continue;
} else {
var ch_24598 = cljs.core.first.call(null,seq__24554_24592__$1);
e.appendChild(ch_24598);

var G__24599 = cljs.core.next.call(null,seq__24554_24592__$1);
var G__24600 = null;
var G__24601 = (0);
var G__24602 = (0);
seq__24554_24582 = G__24599;
chunk__24555_24583 = G__24600;
count__24556_24584 = G__24601;
i__24557_24585 = G__24602;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq24547){
var G__24548 = cljs.core.first.call(null,seq24547);
var seq24547__$1 = cljs.core.next.call(null,seq24547);
var G__24549 = cljs.core.first.call(null,seq24547__$1);
var seq24547__$2 = cljs.core.next.call(null,seq24547__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__24548,G__24549,seq24547__$2);
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
var el_24603 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_24603.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24603.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_24603.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24603);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24604,st_map){
var map__24609 = p__24604;
var map__24609__$1 = ((((!((map__24609 == null)))?((((map__24609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24609):map__24609);
var container_el = cljs.core.get.call(null,map__24609__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24609,map__24609__$1,container_el){
return (function (p__24611){
var vec__24612 = p__24611;
var k = cljs.core.nth.call(null,vec__24612,(0),null);
var v = cljs.core.nth.call(null,vec__24612,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24609,map__24609__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24613,dom_str){
var map__24616 = p__24613;
var map__24616__$1 = ((((!((map__24616 == null)))?((((map__24616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24616):map__24616);
var c = map__24616__$1;
var content_area_el = cljs.core.get.call(null,map__24616__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__24618){
var map__24621 = p__24618;
var map__24621__$1 = ((((!((map__24621 == null)))?((((map__24621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24621):map__24621);
var content_area_el = cljs.core.get.call(null,map__24621__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto__){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto__){
return (function (state_24664){
var state_val_24665 = (state_24664[(1)]);
if((state_val_24665 === (1))){
var inst_24649 = (state_24664[(7)]);
var inst_24649__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24650 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24651 = ["10px","10px","100%","68px","1.0"];
var inst_24652 = cljs.core.PersistentHashMap.fromArrays(inst_24650,inst_24651);
var inst_24653 = cljs.core.merge.call(null,inst_24652,style);
var inst_24654 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24649__$1,inst_24653);
var inst_24655 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24649__$1,msg);
var inst_24656 = cljs.core.async.timeout.call(null,(300));
var state_24664__$1 = (function (){var statearr_24666 = state_24664;
(statearr_24666[(8)] = inst_24654);

(statearr_24666[(9)] = inst_24655);

(statearr_24666[(7)] = inst_24649__$1);

return statearr_24666;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24664__$1,(2),inst_24656);
} else {
if((state_val_24665 === (2))){
var inst_24649 = (state_24664[(7)]);
var inst_24658 = (state_24664[(2)]);
var inst_24659 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_24660 = ["auto"];
var inst_24661 = cljs.core.PersistentHashMap.fromArrays(inst_24659,inst_24660);
var inst_24662 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24649,inst_24661);
var state_24664__$1 = (function (){var statearr_24667 = state_24664;
(statearr_24667[(10)] = inst_24658);

return statearr_24667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24664__$1,inst_24662);
} else {
return null;
}
}
});})(c__20441__auto__))
;
return ((function (switch__20376__auto__,c__20441__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20377__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20377__auto____0 = (function (){
var statearr_24671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24671[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20377__auto__);

(statearr_24671[(1)] = (1));

return statearr_24671;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20377__auto____1 = (function (state_24664){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_24664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e24672){if((e24672 instanceof Object)){
var ex__20380__auto__ = e24672;
var statearr_24673_24675 = state_24664;
(statearr_24673_24675[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24676 = state_24664;
state_24664 = G__24676;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20377__auto__ = function(state_24664){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20377__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20377__auto____1.call(this,state_24664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20377__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20377__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto__))
})();
var state__20443__auto__ = (function (){var statearr_24674 = f__20442__auto__.call(null);
(statearr_24674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto__);

return statearr_24674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto__))
);

return c__20441__auto__;
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
var vec__24678 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__24678,(0),null);
var ln = cljs.core.nth.call(null,vec__24678,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__24681 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__24681,(0),null);
var file_line = cljs.core.nth.call(null,vec__24681,(1),null);
var file_column = cljs.core.nth.call(null,vec__24681,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24681,file_name,file_line,file_column){
return (function (p1__24679_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__24679_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__24681,file_name,file_line,file_column))
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
var map__24684 = figwheel.client.heads_up.ensure_container.call(null);
var map__24684__$1 = ((((!((map__24684 == null)))?((((map__24684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24684):map__24684);
var content_area_el = cljs.core.get.call(null,map__24684__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto__){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto__){
return (function (state_24732){
var state_val_24733 = (state_24732[(1)]);
if((state_val_24733 === (1))){
var inst_24715 = (state_24732[(7)]);
var inst_24715__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24716 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24717 = ["0.0"];
var inst_24718 = cljs.core.PersistentHashMap.fromArrays(inst_24716,inst_24717);
var inst_24719 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24715__$1,inst_24718);
var inst_24720 = cljs.core.async.timeout.call(null,(300));
var state_24732__$1 = (function (){var statearr_24734 = state_24732;
(statearr_24734[(7)] = inst_24715__$1);

(statearr_24734[(8)] = inst_24719);

return statearr_24734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24732__$1,(2),inst_24720);
} else {
if((state_val_24733 === (2))){
var inst_24715 = (state_24732[(7)]);
var inst_24722 = (state_24732[(2)]);
var inst_24723 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_24724 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_24725 = cljs.core.PersistentHashMap.fromArrays(inst_24723,inst_24724);
var inst_24726 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24715,inst_24725);
var inst_24727 = cljs.core.async.timeout.call(null,(200));
var state_24732__$1 = (function (){var statearr_24735 = state_24732;
(statearr_24735[(9)] = inst_24722);

(statearr_24735[(10)] = inst_24726);

return statearr_24735;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24732__$1,(3),inst_24727);
} else {
if((state_val_24733 === (3))){
var inst_24715 = (state_24732[(7)]);
var inst_24729 = (state_24732[(2)]);
var inst_24730 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24715,"");
var state_24732__$1 = (function (){var statearr_24736 = state_24732;
(statearr_24736[(11)] = inst_24729);

return statearr_24736;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24732__$1,inst_24730);
} else {
return null;
}
}
}
});})(c__20441__auto__))
;
return ((function (switch__20376__auto__,c__20441__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20377__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20377__auto____0 = (function (){
var statearr_24740 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24740[(0)] = figwheel$client$heads_up$clear_$_state_machine__20377__auto__);

(statearr_24740[(1)] = (1));

return statearr_24740;
});
var figwheel$client$heads_up$clear_$_state_machine__20377__auto____1 = (function (state_24732){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_24732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e24741){if((e24741 instanceof Object)){
var ex__20380__auto__ = e24741;
var statearr_24742_24744 = state_24732;
(statearr_24742_24744[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24745 = state_24732;
state_24732 = G__24745;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20377__auto__ = function(state_24732){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20377__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20377__auto____1.call(this,state_24732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20377__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20377__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto__))
})();
var state__20443__auto__ = (function (){var statearr_24743 = f__20442__auto__.call(null);
(statearr_24743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto__);

return statearr_24743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto__))
);

return c__20441__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto__){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto__){
return (function (state_24777){
var state_val_24778 = (state_24777[(1)]);
if((state_val_24778 === (1))){
var inst_24767 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_24777__$1 = state_24777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24777__$1,(2),inst_24767);
} else {
if((state_val_24778 === (2))){
var inst_24769 = (state_24777[(2)]);
var inst_24770 = cljs.core.async.timeout.call(null,(400));
var state_24777__$1 = (function (){var statearr_24779 = state_24777;
(statearr_24779[(7)] = inst_24769);

return statearr_24779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24777__$1,(3),inst_24770);
} else {
if((state_val_24778 === (3))){
var inst_24772 = (state_24777[(2)]);
var inst_24773 = figwheel.client.heads_up.clear.call(null);
var state_24777__$1 = (function (){var statearr_24780 = state_24777;
(statearr_24780[(8)] = inst_24772);

return statearr_24780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24777__$1,(4),inst_24773);
} else {
if((state_val_24778 === (4))){
var inst_24775 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24777__$1,inst_24775);
} else {
return null;
}
}
}
}
});})(c__20441__auto__))
;
return ((function (switch__20376__auto__,c__20441__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20377__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20377__auto____0 = (function (){
var statearr_24784 = [null,null,null,null,null,null,null,null,null];
(statearr_24784[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20377__auto__);

(statearr_24784[(1)] = (1));

return statearr_24784;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20377__auto____1 = (function (state_24777){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_24777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e24785){if((e24785 instanceof Object)){
var ex__20380__auto__ = e24785;
var statearr_24786_24788 = state_24777;
(statearr_24786_24788[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24789 = state_24777;
state_24777 = G__24789;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20377__auto__ = function(state_24777){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20377__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20377__auto____1.call(this,state_24777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20377__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20377__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto__))
})();
var state__20443__auto__ = (function (){var statearr_24787 = f__20442__auto__.call(null);
(statearr_24787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto__);

return statearr_24787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto__))
);

return c__20441__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map