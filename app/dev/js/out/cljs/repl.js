// Compiled by ClojureScript 1.7.228 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24571_24585 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24572_24586 = null;
var count__24573_24587 = (0);
var i__24574_24588 = (0);
while(true){
if((i__24574_24588 < count__24573_24587)){
var f_24589 = cljs.core._nth.call(null,chunk__24572_24586,i__24574_24588);
cljs.core.println.call(null,"  ",f_24589);

var G__24590 = seq__24571_24585;
var G__24591 = chunk__24572_24586;
var G__24592 = count__24573_24587;
var G__24593 = (i__24574_24588 + (1));
seq__24571_24585 = G__24590;
chunk__24572_24586 = G__24591;
count__24573_24587 = G__24592;
i__24574_24588 = G__24593;
continue;
} else {
var temp__4425__auto___24594 = cljs.core.seq.call(null,seq__24571_24585);
if(temp__4425__auto___24594){
var seq__24571_24595__$1 = temp__4425__auto___24594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24571_24595__$1)){
var c__19079__auto___24596 = cljs.core.chunk_first.call(null,seq__24571_24595__$1);
var G__24597 = cljs.core.chunk_rest.call(null,seq__24571_24595__$1);
var G__24598 = c__19079__auto___24596;
var G__24599 = cljs.core.count.call(null,c__19079__auto___24596);
var G__24600 = (0);
seq__24571_24585 = G__24597;
chunk__24572_24586 = G__24598;
count__24573_24587 = G__24599;
i__24574_24588 = G__24600;
continue;
} else {
var f_24601 = cljs.core.first.call(null,seq__24571_24595__$1);
cljs.core.println.call(null,"  ",f_24601);

var G__24602 = cljs.core.next.call(null,seq__24571_24595__$1);
var G__24603 = null;
var G__24604 = (0);
var G__24605 = (0);
seq__24571_24585 = G__24602;
chunk__24572_24586 = G__24603;
count__24573_24587 = G__24604;
i__24574_24588 = G__24605;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24606 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18276__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18276__auto__)){
return or__18276__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24606);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24606)))?cljs.core.second.call(null,arglists_24606):arglists_24606));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24575 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24576 = null;
var count__24577 = (0);
var i__24578 = (0);
while(true){
if((i__24578 < count__24577)){
var vec__24579 = cljs.core._nth.call(null,chunk__24576,i__24578);
var name = cljs.core.nth.call(null,vec__24579,(0),null);
var map__24580 = cljs.core.nth.call(null,vec__24579,(1),null);
var map__24580__$1 = ((((!((map__24580 == null)))?((((map__24580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24580):map__24580);
var doc = cljs.core.get.call(null,map__24580__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24580__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24607 = seq__24575;
var G__24608 = chunk__24576;
var G__24609 = count__24577;
var G__24610 = (i__24578 + (1));
seq__24575 = G__24607;
chunk__24576 = G__24608;
count__24577 = G__24609;
i__24578 = G__24610;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24575);
if(temp__4425__auto__){
var seq__24575__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24575__$1)){
var c__19079__auto__ = cljs.core.chunk_first.call(null,seq__24575__$1);
var G__24611 = cljs.core.chunk_rest.call(null,seq__24575__$1);
var G__24612 = c__19079__auto__;
var G__24613 = cljs.core.count.call(null,c__19079__auto__);
var G__24614 = (0);
seq__24575 = G__24611;
chunk__24576 = G__24612;
count__24577 = G__24613;
i__24578 = G__24614;
continue;
} else {
var vec__24582 = cljs.core.first.call(null,seq__24575__$1);
var name = cljs.core.nth.call(null,vec__24582,(0),null);
var map__24583 = cljs.core.nth.call(null,vec__24582,(1),null);
var map__24583__$1 = ((((!((map__24583 == null)))?((((map__24583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24583):map__24583);
var doc = cljs.core.get.call(null,map__24583__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24583__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24615 = cljs.core.next.call(null,seq__24575__$1);
var G__24616 = null;
var G__24617 = (0);
var G__24618 = (0);
seq__24575 = G__24615;
chunk__24576 = G__24616;
count__24577 = G__24617;
i__24578 = G__24618;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map