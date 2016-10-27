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
var seq__24373_24387 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24374_24388 = null;
var count__24375_24389 = (0);
var i__24376_24390 = (0);
while(true){
if((i__24376_24390 < count__24375_24389)){
var f_24391 = cljs.core._nth.call(null,chunk__24374_24388,i__24376_24390);
cljs.core.println.call(null,"  ",f_24391);

var G__24392 = seq__24373_24387;
var G__24393 = chunk__24374_24388;
var G__24394 = count__24375_24389;
var G__24395 = (i__24376_24390 + (1));
seq__24373_24387 = G__24392;
chunk__24374_24388 = G__24393;
count__24375_24389 = G__24394;
i__24376_24390 = G__24395;
continue;
} else {
var temp__4425__auto___24396 = cljs.core.seq.call(null,seq__24373_24387);
if(temp__4425__auto___24396){
var seq__24373_24397__$1 = temp__4425__auto___24396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24373_24397__$1)){
var c__19079__auto___24398 = cljs.core.chunk_first.call(null,seq__24373_24397__$1);
var G__24399 = cljs.core.chunk_rest.call(null,seq__24373_24397__$1);
var G__24400 = c__19079__auto___24398;
var G__24401 = cljs.core.count.call(null,c__19079__auto___24398);
var G__24402 = (0);
seq__24373_24387 = G__24399;
chunk__24374_24388 = G__24400;
count__24375_24389 = G__24401;
i__24376_24390 = G__24402;
continue;
} else {
var f_24403 = cljs.core.first.call(null,seq__24373_24397__$1);
cljs.core.println.call(null,"  ",f_24403);

var G__24404 = cljs.core.next.call(null,seq__24373_24397__$1);
var G__24405 = null;
var G__24406 = (0);
var G__24407 = (0);
seq__24373_24387 = G__24404;
chunk__24374_24388 = G__24405;
count__24375_24389 = G__24406;
i__24376_24390 = G__24407;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24408 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18276__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18276__auto__)){
return or__18276__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24408);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24408)))?cljs.core.second.call(null,arglists_24408):arglists_24408));
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
var seq__24377 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24378 = null;
var count__24379 = (0);
var i__24380 = (0);
while(true){
if((i__24380 < count__24379)){
var vec__24381 = cljs.core._nth.call(null,chunk__24378,i__24380);
var name = cljs.core.nth.call(null,vec__24381,(0),null);
var map__24382 = cljs.core.nth.call(null,vec__24381,(1),null);
var map__24382__$1 = ((((!((map__24382 == null)))?((((map__24382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24382):map__24382);
var doc = cljs.core.get.call(null,map__24382__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24382__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24409 = seq__24377;
var G__24410 = chunk__24378;
var G__24411 = count__24379;
var G__24412 = (i__24380 + (1));
seq__24377 = G__24409;
chunk__24378 = G__24410;
count__24379 = G__24411;
i__24380 = G__24412;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24377);
if(temp__4425__auto__){
var seq__24377__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24377__$1)){
var c__19079__auto__ = cljs.core.chunk_first.call(null,seq__24377__$1);
var G__24413 = cljs.core.chunk_rest.call(null,seq__24377__$1);
var G__24414 = c__19079__auto__;
var G__24415 = cljs.core.count.call(null,c__19079__auto__);
var G__24416 = (0);
seq__24377 = G__24413;
chunk__24378 = G__24414;
count__24379 = G__24415;
i__24380 = G__24416;
continue;
} else {
var vec__24384 = cljs.core.first.call(null,seq__24377__$1);
var name = cljs.core.nth.call(null,vec__24384,(0),null);
var map__24385 = cljs.core.nth.call(null,vec__24384,(1),null);
var map__24385__$1 = ((((!((map__24385 == null)))?((((map__24385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24385):map__24385);
var doc = cljs.core.get.call(null,map__24385__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24385__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24417 = cljs.core.next.call(null,seq__24377__$1);
var G__24418 = null;
var G__24419 = (0);
var G__24420 = (0);
seq__24377 = G__24417;
chunk__24378 = G__24418;
count__24379 = G__24419;
i__24380 = G__24420;
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