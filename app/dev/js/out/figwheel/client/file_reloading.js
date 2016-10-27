// Compiled by ClojureScript 1.7.228 {:elide-asserts true}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18276__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18276__auto__){
return or__18276__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18276__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18276__auto__)){
return or__18276__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23347_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23347_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23352 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23353 = null;
var count__23354 = (0);
var i__23355 = (0);
while(true){
if((i__23355 < count__23354)){
var n = cljs.core._nth.call(null,chunk__23353,i__23355);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23356 = seq__23352;
var G__23357 = chunk__23353;
var G__23358 = count__23354;
var G__23359 = (i__23355 + (1));
seq__23352 = G__23356;
chunk__23353 = G__23357;
count__23354 = G__23358;
i__23355 = G__23359;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23352);
if(temp__4425__auto__){
var seq__23352__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23352__$1)){
var c__19079__auto__ = cljs.core.chunk_first.call(null,seq__23352__$1);
var G__23360 = cljs.core.chunk_rest.call(null,seq__23352__$1);
var G__23361 = c__19079__auto__;
var G__23362 = cljs.core.count.call(null,c__19079__auto__);
var G__23363 = (0);
seq__23352 = G__23360;
chunk__23353 = G__23361;
count__23354 = G__23362;
i__23355 = G__23363;
continue;
} else {
var n = cljs.core.first.call(null,seq__23352__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23364 = cljs.core.next.call(null,seq__23352__$1);
var G__23365 = null;
var G__23366 = (0);
var G__23367 = (0);
seq__23352 = G__23364;
chunk__23353 = G__23365;
count__23354 = G__23366;
i__23355 = G__23367;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23406_23413 = cljs.core.seq.call(null,deps);
var chunk__23407_23414 = null;
var count__23408_23415 = (0);
var i__23409_23416 = (0);
while(true){
if((i__23409_23416 < count__23408_23415)){
var dep_23417 = cljs.core._nth.call(null,chunk__23407_23414,i__23409_23416);
topo_sort_helper_STAR_.call(null,dep_23417,(depth + (1)),state);

var G__23418 = seq__23406_23413;
var G__23419 = chunk__23407_23414;
var G__23420 = count__23408_23415;
var G__23421 = (i__23409_23416 + (1));
seq__23406_23413 = G__23418;
chunk__23407_23414 = G__23419;
count__23408_23415 = G__23420;
i__23409_23416 = G__23421;
continue;
} else {
var temp__4425__auto___23422 = cljs.core.seq.call(null,seq__23406_23413);
if(temp__4425__auto___23422){
var seq__23406_23423__$1 = temp__4425__auto___23422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23406_23423__$1)){
var c__19079__auto___23424 = cljs.core.chunk_first.call(null,seq__23406_23423__$1);
var G__23425 = cljs.core.chunk_rest.call(null,seq__23406_23423__$1);
var G__23426 = c__19079__auto___23424;
var G__23427 = cljs.core.count.call(null,c__19079__auto___23424);
var G__23428 = (0);
seq__23406_23413 = G__23425;
chunk__23407_23414 = G__23426;
count__23408_23415 = G__23427;
i__23409_23416 = G__23428;
continue;
} else {
var dep_23429 = cljs.core.first.call(null,seq__23406_23423__$1);
topo_sort_helper_STAR_.call(null,dep_23429,(depth + (1)),state);

var G__23430 = cljs.core.next.call(null,seq__23406_23423__$1);
var G__23431 = null;
var G__23432 = (0);
var G__23433 = (0);
seq__23406_23413 = G__23430;
chunk__23407_23414 = G__23431;
count__23408_23415 = G__23432;
i__23409_23416 = G__23433;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23410){
var vec__23412 = p__23410;
var x = cljs.core.nth.call(null,vec__23412,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23412,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23412,x,xs,get_deps__$1){
return (function (p1__23368_SHARP_){
return clojure.set.difference.call(null,p1__23368_SHARP_,x);
});})(vec__23412,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23446 = cljs.core.seq.call(null,provides);
var chunk__23447 = null;
var count__23448 = (0);
var i__23449 = (0);
while(true){
if((i__23449 < count__23448)){
var prov = cljs.core._nth.call(null,chunk__23447,i__23449);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23450_23458 = cljs.core.seq.call(null,requires);
var chunk__23451_23459 = null;
var count__23452_23460 = (0);
var i__23453_23461 = (0);
while(true){
if((i__23453_23461 < count__23452_23460)){
var req_23462 = cljs.core._nth.call(null,chunk__23451_23459,i__23453_23461);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23462,prov);

var G__23463 = seq__23450_23458;
var G__23464 = chunk__23451_23459;
var G__23465 = count__23452_23460;
var G__23466 = (i__23453_23461 + (1));
seq__23450_23458 = G__23463;
chunk__23451_23459 = G__23464;
count__23452_23460 = G__23465;
i__23453_23461 = G__23466;
continue;
} else {
var temp__4425__auto___23467 = cljs.core.seq.call(null,seq__23450_23458);
if(temp__4425__auto___23467){
var seq__23450_23468__$1 = temp__4425__auto___23467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23450_23468__$1)){
var c__19079__auto___23469 = cljs.core.chunk_first.call(null,seq__23450_23468__$1);
var G__23470 = cljs.core.chunk_rest.call(null,seq__23450_23468__$1);
var G__23471 = c__19079__auto___23469;
var G__23472 = cljs.core.count.call(null,c__19079__auto___23469);
var G__23473 = (0);
seq__23450_23458 = G__23470;
chunk__23451_23459 = G__23471;
count__23452_23460 = G__23472;
i__23453_23461 = G__23473;
continue;
} else {
var req_23474 = cljs.core.first.call(null,seq__23450_23468__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23474,prov);

var G__23475 = cljs.core.next.call(null,seq__23450_23468__$1);
var G__23476 = null;
var G__23477 = (0);
var G__23478 = (0);
seq__23450_23458 = G__23475;
chunk__23451_23459 = G__23476;
count__23452_23460 = G__23477;
i__23453_23461 = G__23478;
continue;
}
} else {
}
}
break;
}

var G__23479 = seq__23446;
var G__23480 = chunk__23447;
var G__23481 = count__23448;
var G__23482 = (i__23449 + (1));
seq__23446 = G__23479;
chunk__23447 = G__23480;
count__23448 = G__23481;
i__23449 = G__23482;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23446);
if(temp__4425__auto__){
var seq__23446__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23446__$1)){
var c__19079__auto__ = cljs.core.chunk_first.call(null,seq__23446__$1);
var G__23483 = cljs.core.chunk_rest.call(null,seq__23446__$1);
var G__23484 = c__19079__auto__;
var G__23485 = cljs.core.count.call(null,c__19079__auto__);
var G__23486 = (0);
seq__23446 = G__23483;
chunk__23447 = G__23484;
count__23448 = G__23485;
i__23449 = G__23486;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23446__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23454_23487 = cljs.core.seq.call(null,requires);
var chunk__23455_23488 = null;
var count__23456_23489 = (0);
var i__23457_23490 = (0);
while(true){
if((i__23457_23490 < count__23456_23489)){
var req_23491 = cljs.core._nth.call(null,chunk__23455_23488,i__23457_23490);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23491,prov);

var G__23492 = seq__23454_23487;
var G__23493 = chunk__23455_23488;
var G__23494 = count__23456_23489;
var G__23495 = (i__23457_23490 + (1));
seq__23454_23487 = G__23492;
chunk__23455_23488 = G__23493;
count__23456_23489 = G__23494;
i__23457_23490 = G__23495;
continue;
} else {
var temp__4425__auto___23496__$1 = cljs.core.seq.call(null,seq__23454_23487);
if(temp__4425__auto___23496__$1){
var seq__23454_23497__$1 = temp__4425__auto___23496__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23454_23497__$1)){
var c__19079__auto___23498 = cljs.core.chunk_first.call(null,seq__23454_23497__$1);
var G__23499 = cljs.core.chunk_rest.call(null,seq__23454_23497__$1);
var G__23500 = c__19079__auto___23498;
var G__23501 = cljs.core.count.call(null,c__19079__auto___23498);
var G__23502 = (0);
seq__23454_23487 = G__23499;
chunk__23455_23488 = G__23500;
count__23456_23489 = G__23501;
i__23457_23490 = G__23502;
continue;
} else {
var req_23503 = cljs.core.first.call(null,seq__23454_23497__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23503,prov);

var G__23504 = cljs.core.next.call(null,seq__23454_23497__$1);
var G__23505 = null;
var G__23506 = (0);
var G__23507 = (0);
seq__23454_23487 = G__23504;
chunk__23455_23488 = G__23505;
count__23456_23489 = G__23506;
i__23457_23490 = G__23507;
continue;
}
} else {
}
}
break;
}

var G__23508 = cljs.core.next.call(null,seq__23446__$1);
var G__23509 = null;
var G__23510 = (0);
var G__23511 = (0);
seq__23446 = G__23508;
chunk__23447 = G__23509;
count__23448 = G__23510;
i__23449 = G__23511;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23516_23520 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23517_23521 = null;
var count__23518_23522 = (0);
var i__23519_23523 = (0);
while(true){
if((i__23519_23523 < count__23518_23522)){
var ns_23524 = cljs.core._nth.call(null,chunk__23517_23521,i__23519_23523);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23524);

var G__23525 = seq__23516_23520;
var G__23526 = chunk__23517_23521;
var G__23527 = count__23518_23522;
var G__23528 = (i__23519_23523 + (1));
seq__23516_23520 = G__23525;
chunk__23517_23521 = G__23526;
count__23518_23522 = G__23527;
i__23519_23523 = G__23528;
continue;
} else {
var temp__4425__auto___23529 = cljs.core.seq.call(null,seq__23516_23520);
if(temp__4425__auto___23529){
var seq__23516_23530__$1 = temp__4425__auto___23529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23516_23530__$1)){
var c__19079__auto___23531 = cljs.core.chunk_first.call(null,seq__23516_23530__$1);
var G__23532 = cljs.core.chunk_rest.call(null,seq__23516_23530__$1);
var G__23533 = c__19079__auto___23531;
var G__23534 = cljs.core.count.call(null,c__19079__auto___23531);
var G__23535 = (0);
seq__23516_23520 = G__23532;
chunk__23517_23521 = G__23533;
count__23518_23522 = G__23534;
i__23519_23523 = G__23535;
continue;
} else {
var ns_23536 = cljs.core.first.call(null,seq__23516_23530__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23536);

var G__23537 = cljs.core.next.call(null,seq__23516_23530__$1);
var G__23538 = null;
var G__23539 = (0);
var G__23540 = (0);
seq__23516_23520 = G__23537;
chunk__23517_23521 = G__23538;
count__23518_23522 = G__23539;
i__23519_23523 = G__23540;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18276__auto__ = goog.require__;
if(cljs.core.truth_(or__18276__auto__)){
return or__18276__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23541__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23541 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23542__i = 0, G__23542__a = new Array(arguments.length -  0);
while (G__23542__i < G__23542__a.length) {G__23542__a[G__23542__i] = arguments[G__23542__i + 0]; ++G__23542__i;}
  args = new cljs.core.IndexedSeq(G__23542__a,0);
} 
return G__23541__delegate.call(this,args);};
G__23541.cljs$lang$maxFixedArity = 0;
G__23541.cljs$lang$applyTo = (function (arglist__23543){
var args = cljs.core.seq(arglist__23543);
return G__23541__delegate(args);
});
G__23541.cljs$core$IFn$_invoke$arity$variadic = G__23541__delegate;
return G__23541;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23545 = cljs.core._EQ_;
var expr__23546 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23545.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23546))){
var path_parts = ((function (pred__23545,expr__23546){
return (function (p1__23544_SHARP_){
return clojure.string.split.call(null,p1__23544_SHARP_,/[\/\\]/);
});})(pred__23545,expr__23546))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23545,expr__23546){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23548){if((e23548 instanceof Error)){
var e = e23548;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23548;

}
}})());
});
;})(path_parts,sep,root,pred__23545,expr__23546))
} else {
if(cljs.core.truth_(pred__23545.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23546))){
return ((function (pred__23545,expr__23546){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23545,expr__23546){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23545,expr__23546))
);

return deferred.addErrback(((function (deferred,pred__23545,expr__23546){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23545,expr__23546))
);
});
;})(pred__23545,expr__23546))
} else {
return ((function (pred__23545,expr__23546){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23545,expr__23546))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23549,callback){
var map__23552 = p__23549;
var map__23552__$1 = ((((!((map__23552 == null)))?((((map__23552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23552):map__23552);
var file_msg = map__23552__$1;
var request_url = cljs.core.get.call(null,map__23552__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23552,map__23552__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23552,map__23552__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto__){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto__){
return (function (state_23576){
var state_val_23577 = (state_23576[(1)]);
if((state_val_23577 === (7))){
var inst_23572 = (state_23576[(2)]);
var state_23576__$1 = state_23576;
var statearr_23578_23598 = state_23576__$1;
(statearr_23578_23598[(2)] = inst_23572);

(statearr_23578_23598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (1))){
var state_23576__$1 = state_23576;
var statearr_23579_23599 = state_23576__$1;
(statearr_23579_23599[(2)] = null);

(statearr_23579_23599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (4))){
var inst_23556 = (state_23576[(7)]);
var inst_23556__$1 = (state_23576[(2)]);
var state_23576__$1 = (function (){var statearr_23580 = state_23576;
(statearr_23580[(7)] = inst_23556__$1);

return statearr_23580;
})();
if(cljs.core.truth_(inst_23556__$1)){
var statearr_23581_23600 = state_23576__$1;
(statearr_23581_23600[(1)] = (5));

} else {
var statearr_23582_23601 = state_23576__$1;
(statearr_23582_23601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (6))){
var state_23576__$1 = state_23576;
var statearr_23583_23602 = state_23576__$1;
(statearr_23583_23602[(2)] = null);

(statearr_23583_23602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (3))){
var inst_23574 = (state_23576[(2)]);
var state_23576__$1 = state_23576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23576__$1,inst_23574);
} else {
if((state_val_23577 === (2))){
var state_23576__$1 = state_23576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23576__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23577 === (11))){
var inst_23568 = (state_23576[(2)]);
var state_23576__$1 = (function (){var statearr_23584 = state_23576;
(statearr_23584[(8)] = inst_23568);

return statearr_23584;
})();
var statearr_23585_23603 = state_23576__$1;
(statearr_23585_23603[(2)] = null);

(statearr_23585_23603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (9))){
var inst_23560 = (state_23576[(9)]);
var inst_23562 = (state_23576[(10)]);
var inst_23564 = inst_23562.call(null,inst_23560);
var state_23576__$1 = state_23576;
var statearr_23586_23604 = state_23576__$1;
(statearr_23586_23604[(2)] = inst_23564);

(statearr_23586_23604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (5))){
var inst_23556 = (state_23576[(7)]);
var inst_23558 = figwheel.client.file_reloading.blocking_load.call(null,inst_23556);
var state_23576__$1 = state_23576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23576__$1,(8),inst_23558);
} else {
if((state_val_23577 === (10))){
var inst_23560 = (state_23576[(9)]);
var inst_23566 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23560);
var state_23576__$1 = state_23576;
var statearr_23587_23605 = state_23576__$1;
(statearr_23587_23605[(2)] = inst_23566);

(statearr_23587_23605[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (8))){
var inst_23562 = (state_23576[(10)]);
var inst_23556 = (state_23576[(7)]);
var inst_23560 = (state_23576[(2)]);
var inst_23561 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23562__$1 = cljs.core.get.call(null,inst_23561,inst_23556);
var state_23576__$1 = (function (){var statearr_23588 = state_23576;
(statearr_23588[(9)] = inst_23560);

(statearr_23588[(10)] = inst_23562__$1);

return statearr_23588;
})();
if(cljs.core.truth_(inst_23562__$1)){
var statearr_23589_23606 = state_23576__$1;
(statearr_23589_23606[(1)] = (9));

} else {
var statearr_23590_23607 = state_23576__$1;
(statearr_23590_23607[(1)] = (10));

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
});})(c__20441__auto__))
;
return ((function (switch__20376__auto__,c__20441__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20377__auto__ = null;
var figwheel$client$file_reloading$state_machine__20377__auto____0 = (function (){
var statearr_23594 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23594[(0)] = figwheel$client$file_reloading$state_machine__20377__auto__);

(statearr_23594[(1)] = (1));

return statearr_23594;
});
var figwheel$client$file_reloading$state_machine__20377__auto____1 = (function (state_23576){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_23576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e23595){if((e23595 instanceof Object)){
var ex__20380__auto__ = e23595;
var statearr_23596_23608 = state_23576;
(statearr_23596_23608[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23609 = state_23576;
state_23576 = G__23609;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20377__auto__ = function(state_23576){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20377__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20377__auto____1.call(this,state_23576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20377__auto____0;
figwheel$client$file_reloading$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20377__auto____1;
return figwheel$client$file_reloading$state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto__))
})();
var state__20443__auto__ = (function (){var statearr_23597 = f__20442__auto__.call(null);
(statearr_23597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto__);

return statearr_23597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto__))
);

return c__20441__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23610,callback){
var map__23613 = p__23610;
var map__23613__$1 = ((((!((map__23613 == null)))?((((map__23613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23613):map__23613);
var file_msg = map__23613__$1;
var namespace = cljs.core.get.call(null,map__23613__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23613,map__23613__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23613,map__23613__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23615){
var map__23618 = p__23615;
var map__23618__$1 = ((((!((map__23618 == null)))?((((map__23618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23618):map__23618);
var file_msg = map__23618__$1;
var namespace = cljs.core.get.call(null,map__23618__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18264__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18264__auto__){
var or__18276__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18276__auto__)){
return or__18276__auto__;
} else {
var or__18276__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18276__auto____$1)){
return or__18276__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18264__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23620,callback){
var map__23623 = p__23620;
var map__23623__$1 = ((((!((map__23623 == null)))?((((map__23623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23623):map__23623);
var file_msg = map__23623__$1;
var request_url = cljs.core.get.call(null,map__23623__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23623__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20441__auto___23711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto___23711,out){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto___23711,out){
return (function (state_23693){
var state_val_23694 = (state_23693[(1)]);
if((state_val_23694 === (1))){
var inst_23671 = cljs.core.nth.call(null,files,(0),null);
var inst_23672 = cljs.core.nthnext.call(null,files,(1));
var inst_23673 = files;
var state_23693__$1 = (function (){var statearr_23695 = state_23693;
(statearr_23695[(7)] = inst_23673);

(statearr_23695[(8)] = inst_23672);

(statearr_23695[(9)] = inst_23671);

return statearr_23695;
})();
var statearr_23696_23712 = state_23693__$1;
(statearr_23696_23712[(2)] = null);

(statearr_23696_23712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23694 === (2))){
var inst_23676 = (state_23693[(10)]);
var inst_23673 = (state_23693[(7)]);
var inst_23676__$1 = cljs.core.nth.call(null,inst_23673,(0),null);
var inst_23677 = cljs.core.nthnext.call(null,inst_23673,(1));
var inst_23678 = (inst_23676__$1 == null);
var inst_23679 = cljs.core.not.call(null,inst_23678);
var state_23693__$1 = (function (){var statearr_23697 = state_23693;
(statearr_23697[(10)] = inst_23676__$1);

(statearr_23697[(11)] = inst_23677);

return statearr_23697;
})();
if(inst_23679){
var statearr_23698_23713 = state_23693__$1;
(statearr_23698_23713[(1)] = (4));

} else {
var statearr_23699_23714 = state_23693__$1;
(statearr_23699_23714[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23694 === (3))){
var inst_23691 = (state_23693[(2)]);
var state_23693__$1 = state_23693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23693__$1,inst_23691);
} else {
if((state_val_23694 === (4))){
var inst_23676 = (state_23693[(10)]);
var inst_23681 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23676);
var state_23693__$1 = state_23693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23693__$1,(7),inst_23681);
} else {
if((state_val_23694 === (5))){
var inst_23687 = cljs.core.async.close_BANG_.call(null,out);
var state_23693__$1 = state_23693;
var statearr_23700_23715 = state_23693__$1;
(statearr_23700_23715[(2)] = inst_23687);

(statearr_23700_23715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23694 === (6))){
var inst_23689 = (state_23693[(2)]);
var state_23693__$1 = state_23693;
var statearr_23701_23716 = state_23693__$1;
(statearr_23701_23716[(2)] = inst_23689);

(statearr_23701_23716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23694 === (7))){
var inst_23677 = (state_23693[(11)]);
var inst_23683 = (state_23693[(2)]);
var inst_23684 = cljs.core.async.put_BANG_.call(null,out,inst_23683);
var inst_23673 = inst_23677;
var state_23693__$1 = (function (){var statearr_23702 = state_23693;
(statearr_23702[(7)] = inst_23673);

(statearr_23702[(12)] = inst_23684);

return statearr_23702;
})();
var statearr_23703_23717 = state_23693__$1;
(statearr_23703_23717[(2)] = null);

(statearr_23703_23717[(1)] = (2));


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
});})(c__20441__auto___23711,out))
;
return ((function (switch__20376__auto__,c__20441__auto___23711,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20377__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20377__auto____0 = (function (){
var statearr_23707 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23707[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20377__auto__);

(statearr_23707[(1)] = (1));

return statearr_23707;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20377__auto____1 = (function (state_23693){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_23693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e23708){if((e23708 instanceof Object)){
var ex__20380__auto__ = e23708;
var statearr_23709_23718 = state_23693;
(statearr_23709_23718[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23719 = state_23693;
state_23693 = G__23719;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20377__auto__ = function(state_23693){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20377__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20377__auto____1.call(this,state_23693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20377__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20377__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto___23711,out))
})();
var state__20443__auto__ = (function (){var statearr_23710 = f__20442__auto__.call(null);
(statearr_23710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___23711);

return statearr_23710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto___23711,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23720,opts){
var map__23724 = p__23720;
var map__23724__$1 = ((((!((map__23724 == null)))?((((map__23724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23724):map__23724);
var eval_body__$1 = cljs.core.get.call(null,map__23724__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23724__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18264__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18264__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18264__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23726){var e = e23726;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23727_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23727_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23732){
var vec__23733 = p__23732;
var k = cljs.core.nth.call(null,vec__23733,(0),null);
var v = cljs.core.nth.call(null,vec__23733,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23734){
var vec__23735 = p__23734;
var k = cljs.core.nth.call(null,vec__23735,(0),null);
var v = cljs.core.nth.call(null,vec__23735,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23739,p__23740){
var map__23987 = p__23739;
var map__23987__$1 = ((((!((map__23987 == null)))?((((map__23987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23987):map__23987);
var opts = map__23987__$1;
var before_jsload = cljs.core.get.call(null,map__23987__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23987__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23987__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23988 = p__23740;
var map__23988__$1 = ((((!((map__23988 == null)))?((((map__23988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23988):map__23988);
var msg = map__23988__$1;
var files = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24141){
var state_val_24142 = (state_24141[(1)]);
if((state_val_24142 === (7))){
var inst_24003 = (state_24141[(7)]);
var inst_24005 = (state_24141[(8)]);
var inst_24004 = (state_24141[(9)]);
var inst_24002 = (state_24141[(10)]);
var inst_24010 = cljs.core._nth.call(null,inst_24003,inst_24005);
var inst_24011 = figwheel.client.file_reloading.eval_body.call(null,inst_24010,opts);
var inst_24012 = (inst_24005 + (1));
var tmp24143 = inst_24003;
var tmp24144 = inst_24004;
var tmp24145 = inst_24002;
var inst_24002__$1 = tmp24145;
var inst_24003__$1 = tmp24143;
var inst_24004__$1 = tmp24144;
var inst_24005__$1 = inst_24012;
var state_24141__$1 = (function (){var statearr_24146 = state_24141;
(statearr_24146[(7)] = inst_24003__$1);

(statearr_24146[(8)] = inst_24005__$1);

(statearr_24146[(11)] = inst_24011);

(statearr_24146[(9)] = inst_24004__$1);

(statearr_24146[(10)] = inst_24002__$1);

return statearr_24146;
})();
var statearr_24147_24233 = state_24141__$1;
(statearr_24147_24233[(2)] = null);

(statearr_24147_24233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (20))){
var inst_24045 = (state_24141[(12)]);
var inst_24053 = figwheel.client.file_reloading.sort_files.call(null,inst_24045);
var state_24141__$1 = state_24141;
var statearr_24148_24234 = state_24141__$1;
(statearr_24148_24234[(2)] = inst_24053);

(statearr_24148_24234[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (27))){
var state_24141__$1 = state_24141;
var statearr_24149_24235 = state_24141__$1;
(statearr_24149_24235[(2)] = null);

(statearr_24149_24235[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (1))){
var inst_23994 = (state_24141[(13)]);
var inst_23991 = before_jsload.call(null,files);
var inst_23992 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23993 = (function (){return ((function (inst_23994,inst_23991,inst_23992,state_val_24142,c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23736_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23736_SHARP_);
});
;})(inst_23994,inst_23991,inst_23992,state_val_24142,c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23994__$1 = cljs.core.filter.call(null,inst_23993,files);
var inst_23995 = cljs.core.not_empty.call(null,inst_23994__$1);
var state_24141__$1 = (function (){var statearr_24150 = state_24141;
(statearr_24150[(14)] = inst_23991);

(statearr_24150[(15)] = inst_23992);

(statearr_24150[(13)] = inst_23994__$1);

return statearr_24150;
})();
if(cljs.core.truth_(inst_23995)){
var statearr_24151_24236 = state_24141__$1;
(statearr_24151_24236[(1)] = (2));

} else {
var statearr_24152_24237 = state_24141__$1;
(statearr_24152_24237[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (24))){
var state_24141__$1 = state_24141;
var statearr_24153_24238 = state_24141__$1;
(statearr_24153_24238[(2)] = null);

(statearr_24153_24238[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (39))){
var inst_24095 = (state_24141[(16)]);
var state_24141__$1 = state_24141;
var statearr_24154_24239 = state_24141__$1;
(statearr_24154_24239[(2)] = inst_24095);

(statearr_24154_24239[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (46))){
var inst_24136 = (state_24141[(2)]);
var state_24141__$1 = state_24141;
var statearr_24155_24240 = state_24141__$1;
(statearr_24155_24240[(2)] = inst_24136);

(statearr_24155_24240[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (4))){
var inst_24039 = (state_24141[(2)]);
var inst_24040 = cljs.core.List.EMPTY;
var inst_24041 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24040);
var inst_24042 = (function (){return ((function (inst_24039,inst_24040,inst_24041,state_val_24142,c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23737_SHARP_){
var and__18264__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23737_SHARP_);
if(cljs.core.truth_(and__18264__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23737_SHARP_));
} else {
return and__18264__auto__;
}
});
;})(inst_24039,inst_24040,inst_24041,state_val_24142,c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24043 = cljs.core.filter.call(null,inst_24042,files);
var inst_24044 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24045 = cljs.core.concat.call(null,inst_24043,inst_24044);
var state_24141__$1 = (function (){var statearr_24156 = state_24141;
(statearr_24156[(17)] = inst_24041);

(statearr_24156[(12)] = inst_24045);

(statearr_24156[(18)] = inst_24039);

return statearr_24156;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24157_24241 = state_24141__$1;
(statearr_24157_24241[(1)] = (16));

} else {
var statearr_24158_24242 = state_24141__$1;
(statearr_24158_24242[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (15))){
var inst_24029 = (state_24141[(2)]);
var state_24141__$1 = state_24141;
var statearr_24159_24243 = state_24141__$1;
(statearr_24159_24243[(2)] = inst_24029);

(statearr_24159_24243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (21))){
var inst_24055 = (state_24141[(19)]);
var inst_24055__$1 = (state_24141[(2)]);
var inst_24056 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24055__$1);
var state_24141__$1 = (function (){var statearr_24160 = state_24141;
(statearr_24160[(19)] = inst_24055__$1);

return statearr_24160;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24141__$1,(22),inst_24056);
} else {
if((state_val_24142 === (31))){
var inst_24139 = (state_24141[(2)]);
var state_24141__$1 = state_24141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24141__$1,inst_24139);
} else {
if((state_val_24142 === (32))){
var inst_24095 = (state_24141[(16)]);
var inst_24100 = inst_24095.cljs$lang$protocol_mask$partition0$;
var inst_24101 = (inst_24100 & (64));
var inst_24102 = inst_24095.cljs$core$ISeq$;
var inst_24103 = (inst_24101) || (inst_24102);
var state_24141__$1 = state_24141;
if(cljs.core.truth_(inst_24103)){
var statearr_24161_24244 = state_24141__$1;
(statearr_24161_24244[(1)] = (35));

} else {
var statearr_24162_24245 = state_24141__$1;
(statearr_24162_24245[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (40))){
var inst_24116 = (state_24141[(20)]);
var inst_24115 = (state_24141[(2)]);
var inst_24116__$1 = cljs.core.get.call(null,inst_24115,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24117 = cljs.core.get.call(null,inst_24115,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24118 = cljs.core.not_empty.call(null,inst_24116__$1);
var state_24141__$1 = (function (){var statearr_24163 = state_24141;
(statearr_24163[(21)] = inst_24117);

(statearr_24163[(20)] = inst_24116__$1);

return statearr_24163;
})();
if(cljs.core.truth_(inst_24118)){
var statearr_24164_24246 = state_24141__$1;
(statearr_24164_24246[(1)] = (41));

} else {
var statearr_24165_24247 = state_24141__$1;
(statearr_24165_24247[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (33))){
var state_24141__$1 = state_24141;
var statearr_24166_24248 = state_24141__$1;
(statearr_24166_24248[(2)] = false);

(statearr_24166_24248[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (13))){
var inst_24015 = (state_24141[(22)]);
var inst_24019 = cljs.core.chunk_first.call(null,inst_24015);
var inst_24020 = cljs.core.chunk_rest.call(null,inst_24015);
var inst_24021 = cljs.core.count.call(null,inst_24019);
var inst_24002 = inst_24020;
var inst_24003 = inst_24019;
var inst_24004 = inst_24021;
var inst_24005 = (0);
var state_24141__$1 = (function (){var statearr_24167 = state_24141;
(statearr_24167[(7)] = inst_24003);

(statearr_24167[(8)] = inst_24005);

(statearr_24167[(9)] = inst_24004);

(statearr_24167[(10)] = inst_24002);

return statearr_24167;
})();
var statearr_24168_24249 = state_24141__$1;
(statearr_24168_24249[(2)] = null);

(statearr_24168_24249[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (22))){
var inst_24058 = (state_24141[(23)]);
var inst_24059 = (state_24141[(24)]);
var inst_24055 = (state_24141[(19)]);
var inst_24063 = (state_24141[(25)]);
var inst_24058__$1 = (state_24141[(2)]);
var inst_24059__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24058__$1);
var inst_24060 = (function (){var all_files = inst_24055;
var res_SINGLEQUOTE_ = inst_24058__$1;
var res = inst_24059__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24058,inst_24059,inst_24055,inst_24063,inst_24058__$1,inst_24059__$1,state_val_24142,c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23738_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23738_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24058,inst_24059,inst_24055,inst_24063,inst_24058__$1,inst_24059__$1,state_val_24142,c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24061 = cljs.core.filter.call(null,inst_24060,inst_24058__$1);
var inst_24062 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24063__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24062);
var inst_24064 = cljs.core.not_empty.call(null,inst_24063__$1);
var state_24141__$1 = (function (){var statearr_24169 = state_24141;
(statearr_24169[(23)] = inst_24058__$1);

(statearr_24169[(24)] = inst_24059__$1);

(statearr_24169[(26)] = inst_24061);

(statearr_24169[(25)] = inst_24063__$1);

return statearr_24169;
})();
if(cljs.core.truth_(inst_24064)){
var statearr_24170_24250 = state_24141__$1;
(statearr_24170_24250[(1)] = (23));

} else {
var statearr_24171_24251 = state_24141__$1;
(statearr_24171_24251[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (36))){
var state_24141__$1 = state_24141;
var statearr_24172_24252 = state_24141__$1;
(statearr_24172_24252[(2)] = false);

(statearr_24172_24252[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (41))){
var inst_24116 = (state_24141[(20)]);
var inst_24120 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24121 = cljs.core.map.call(null,inst_24120,inst_24116);
var inst_24122 = cljs.core.pr_str.call(null,inst_24121);
var inst_24123 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24122)].join('');
var inst_24124 = figwheel.client.utils.log.call(null,inst_24123);
var state_24141__$1 = state_24141;
var statearr_24173_24253 = state_24141__$1;
(statearr_24173_24253[(2)] = inst_24124);

(statearr_24173_24253[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (43))){
var inst_24117 = (state_24141[(21)]);
var inst_24127 = (state_24141[(2)]);
var inst_24128 = cljs.core.not_empty.call(null,inst_24117);
var state_24141__$1 = (function (){var statearr_24174 = state_24141;
(statearr_24174[(27)] = inst_24127);

return statearr_24174;
})();
if(cljs.core.truth_(inst_24128)){
var statearr_24175_24254 = state_24141__$1;
(statearr_24175_24254[(1)] = (44));

} else {
var statearr_24176_24255 = state_24141__$1;
(statearr_24176_24255[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (29))){
var inst_24058 = (state_24141[(23)]);
var inst_24095 = (state_24141[(16)]);
var inst_24059 = (state_24141[(24)]);
var inst_24061 = (state_24141[(26)]);
var inst_24055 = (state_24141[(19)]);
var inst_24063 = (state_24141[(25)]);
var inst_24091 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24094 = (function (){var all_files = inst_24055;
var res_SINGLEQUOTE_ = inst_24058;
var res = inst_24059;
var files_not_loaded = inst_24061;
var dependencies_that_loaded = inst_24063;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24058,inst_24095,inst_24059,inst_24061,inst_24055,inst_24063,inst_24091,state_val_24142,c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24093){
var map__24177 = p__24093;
var map__24177__$1 = ((((!((map__24177 == null)))?((((map__24177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24177):map__24177);
var namespace = cljs.core.get.call(null,map__24177__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24058,inst_24095,inst_24059,inst_24061,inst_24055,inst_24063,inst_24091,state_val_24142,c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24095__$1 = cljs.core.group_by.call(null,inst_24094,inst_24061);
var inst_24097 = (inst_24095__$1 == null);
var inst_24098 = cljs.core.not.call(null,inst_24097);
var state_24141__$1 = (function (){var statearr_24179 = state_24141;
(statearr_24179[(16)] = inst_24095__$1);

(statearr_24179[(28)] = inst_24091);

return statearr_24179;
})();
if(inst_24098){
var statearr_24180_24256 = state_24141__$1;
(statearr_24180_24256[(1)] = (32));

} else {
var statearr_24181_24257 = state_24141__$1;
(statearr_24181_24257[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (44))){
var inst_24117 = (state_24141[(21)]);
var inst_24130 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24117);
var inst_24131 = cljs.core.pr_str.call(null,inst_24130);
var inst_24132 = [cljs.core.str("not required: "),cljs.core.str(inst_24131)].join('');
var inst_24133 = figwheel.client.utils.log.call(null,inst_24132);
var state_24141__$1 = state_24141;
var statearr_24182_24258 = state_24141__$1;
(statearr_24182_24258[(2)] = inst_24133);

(statearr_24182_24258[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (6))){
var inst_24036 = (state_24141[(2)]);
var state_24141__$1 = state_24141;
var statearr_24183_24259 = state_24141__$1;
(statearr_24183_24259[(2)] = inst_24036);

(statearr_24183_24259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (28))){
var inst_24061 = (state_24141[(26)]);
var inst_24088 = (state_24141[(2)]);
var inst_24089 = cljs.core.not_empty.call(null,inst_24061);
var state_24141__$1 = (function (){var statearr_24184 = state_24141;
(statearr_24184[(29)] = inst_24088);

return statearr_24184;
})();
if(cljs.core.truth_(inst_24089)){
var statearr_24185_24260 = state_24141__$1;
(statearr_24185_24260[(1)] = (29));

} else {
var statearr_24186_24261 = state_24141__$1;
(statearr_24186_24261[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (25))){
var inst_24059 = (state_24141[(24)]);
var inst_24075 = (state_24141[(2)]);
var inst_24076 = cljs.core.not_empty.call(null,inst_24059);
var state_24141__$1 = (function (){var statearr_24187 = state_24141;
(statearr_24187[(30)] = inst_24075);

return statearr_24187;
})();
if(cljs.core.truth_(inst_24076)){
var statearr_24188_24262 = state_24141__$1;
(statearr_24188_24262[(1)] = (26));

} else {
var statearr_24189_24263 = state_24141__$1;
(statearr_24189_24263[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (34))){
var inst_24110 = (state_24141[(2)]);
var state_24141__$1 = state_24141;
if(cljs.core.truth_(inst_24110)){
var statearr_24190_24264 = state_24141__$1;
(statearr_24190_24264[(1)] = (38));

} else {
var statearr_24191_24265 = state_24141__$1;
(statearr_24191_24265[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (17))){
var state_24141__$1 = state_24141;
var statearr_24192_24266 = state_24141__$1;
(statearr_24192_24266[(2)] = recompile_dependents);

(statearr_24192_24266[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (3))){
var state_24141__$1 = state_24141;
var statearr_24193_24267 = state_24141__$1;
(statearr_24193_24267[(2)] = null);

(statearr_24193_24267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (12))){
var inst_24032 = (state_24141[(2)]);
var state_24141__$1 = state_24141;
var statearr_24194_24268 = state_24141__$1;
(statearr_24194_24268[(2)] = inst_24032);

(statearr_24194_24268[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (2))){
var inst_23994 = (state_24141[(13)]);
var inst_24001 = cljs.core.seq.call(null,inst_23994);
var inst_24002 = inst_24001;
var inst_24003 = null;
var inst_24004 = (0);
var inst_24005 = (0);
var state_24141__$1 = (function (){var statearr_24195 = state_24141;
(statearr_24195[(7)] = inst_24003);

(statearr_24195[(8)] = inst_24005);

(statearr_24195[(9)] = inst_24004);

(statearr_24195[(10)] = inst_24002);

return statearr_24195;
})();
var statearr_24196_24269 = state_24141__$1;
(statearr_24196_24269[(2)] = null);

(statearr_24196_24269[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (23))){
var inst_24058 = (state_24141[(23)]);
var inst_24059 = (state_24141[(24)]);
var inst_24061 = (state_24141[(26)]);
var inst_24055 = (state_24141[(19)]);
var inst_24063 = (state_24141[(25)]);
var inst_24066 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24068 = (function (){var all_files = inst_24055;
var res_SINGLEQUOTE_ = inst_24058;
var res = inst_24059;
var files_not_loaded = inst_24061;
var dependencies_that_loaded = inst_24063;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24058,inst_24059,inst_24061,inst_24055,inst_24063,inst_24066,state_val_24142,c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24067){
var map__24197 = p__24067;
var map__24197__$1 = ((((!((map__24197 == null)))?((((map__24197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24197):map__24197);
var request_url = cljs.core.get.call(null,map__24197__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24058,inst_24059,inst_24061,inst_24055,inst_24063,inst_24066,state_val_24142,c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24069 = cljs.core.reverse.call(null,inst_24063);
var inst_24070 = cljs.core.map.call(null,inst_24068,inst_24069);
var inst_24071 = cljs.core.pr_str.call(null,inst_24070);
var inst_24072 = figwheel.client.utils.log.call(null,inst_24071);
var state_24141__$1 = (function (){var statearr_24199 = state_24141;
(statearr_24199[(31)] = inst_24066);

return statearr_24199;
})();
var statearr_24200_24270 = state_24141__$1;
(statearr_24200_24270[(2)] = inst_24072);

(statearr_24200_24270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (35))){
var state_24141__$1 = state_24141;
var statearr_24201_24271 = state_24141__$1;
(statearr_24201_24271[(2)] = true);

(statearr_24201_24271[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (19))){
var inst_24045 = (state_24141[(12)]);
var inst_24051 = figwheel.client.file_reloading.expand_files.call(null,inst_24045);
var state_24141__$1 = state_24141;
var statearr_24202_24272 = state_24141__$1;
(statearr_24202_24272[(2)] = inst_24051);

(statearr_24202_24272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (11))){
var state_24141__$1 = state_24141;
var statearr_24203_24273 = state_24141__$1;
(statearr_24203_24273[(2)] = null);

(statearr_24203_24273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (9))){
var inst_24034 = (state_24141[(2)]);
var state_24141__$1 = state_24141;
var statearr_24204_24274 = state_24141__$1;
(statearr_24204_24274[(2)] = inst_24034);

(statearr_24204_24274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (5))){
var inst_24005 = (state_24141[(8)]);
var inst_24004 = (state_24141[(9)]);
var inst_24007 = (inst_24005 < inst_24004);
var inst_24008 = inst_24007;
var state_24141__$1 = state_24141;
if(cljs.core.truth_(inst_24008)){
var statearr_24205_24275 = state_24141__$1;
(statearr_24205_24275[(1)] = (7));

} else {
var statearr_24206_24276 = state_24141__$1;
(statearr_24206_24276[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (14))){
var inst_24015 = (state_24141[(22)]);
var inst_24024 = cljs.core.first.call(null,inst_24015);
var inst_24025 = figwheel.client.file_reloading.eval_body.call(null,inst_24024,opts);
var inst_24026 = cljs.core.next.call(null,inst_24015);
var inst_24002 = inst_24026;
var inst_24003 = null;
var inst_24004 = (0);
var inst_24005 = (0);
var state_24141__$1 = (function (){var statearr_24207 = state_24141;
(statearr_24207[(32)] = inst_24025);

(statearr_24207[(7)] = inst_24003);

(statearr_24207[(8)] = inst_24005);

(statearr_24207[(9)] = inst_24004);

(statearr_24207[(10)] = inst_24002);

return statearr_24207;
})();
var statearr_24208_24277 = state_24141__$1;
(statearr_24208_24277[(2)] = null);

(statearr_24208_24277[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (45))){
var state_24141__$1 = state_24141;
var statearr_24209_24278 = state_24141__$1;
(statearr_24209_24278[(2)] = null);

(statearr_24209_24278[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (26))){
var inst_24058 = (state_24141[(23)]);
var inst_24059 = (state_24141[(24)]);
var inst_24061 = (state_24141[(26)]);
var inst_24055 = (state_24141[(19)]);
var inst_24063 = (state_24141[(25)]);
var inst_24078 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24080 = (function (){var all_files = inst_24055;
var res_SINGLEQUOTE_ = inst_24058;
var res = inst_24059;
var files_not_loaded = inst_24061;
var dependencies_that_loaded = inst_24063;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24058,inst_24059,inst_24061,inst_24055,inst_24063,inst_24078,state_val_24142,c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24079){
var map__24210 = p__24079;
var map__24210__$1 = ((((!((map__24210 == null)))?((((map__24210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24210):map__24210);
var namespace = cljs.core.get.call(null,map__24210__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24210__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24058,inst_24059,inst_24061,inst_24055,inst_24063,inst_24078,state_val_24142,c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24081 = cljs.core.map.call(null,inst_24080,inst_24059);
var inst_24082 = cljs.core.pr_str.call(null,inst_24081);
var inst_24083 = figwheel.client.utils.log.call(null,inst_24082);
var inst_24084 = (function (){var all_files = inst_24055;
var res_SINGLEQUOTE_ = inst_24058;
var res = inst_24059;
var files_not_loaded = inst_24061;
var dependencies_that_loaded = inst_24063;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24058,inst_24059,inst_24061,inst_24055,inst_24063,inst_24078,inst_24080,inst_24081,inst_24082,inst_24083,state_val_24142,c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24058,inst_24059,inst_24061,inst_24055,inst_24063,inst_24078,inst_24080,inst_24081,inst_24082,inst_24083,state_val_24142,c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24085 = setTimeout(inst_24084,(10));
var state_24141__$1 = (function (){var statearr_24212 = state_24141;
(statearr_24212[(33)] = inst_24083);

(statearr_24212[(34)] = inst_24078);

return statearr_24212;
})();
var statearr_24213_24279 = state_24141__$1;
(statearr_24213_24279[(2)] = inst_24085);

(statearr_24213_24279[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (16))){
var state_24141__$1 = state_24141;
var statearr_24214_24280 = state_24141__$1;
(statearr_24214_24280[(2)] = reload_dependents);

(statearr_24214_24280[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (38))){
var inst_24095 = (state_24141[(16)]);
var inst_24112 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24095);
var state_24141__$1 = state_24141;
var statearr_24215_24281 = state_24141__$1;
(statearr_24215_24281[(2)] = inst_24112);

(statearr_24215_24281[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (30))){
var state_24141__$1 = state_24141;
var statearr_24216_24282 = state_24141__$1;
(statearr_24216_24282[(2)] = null);

(statearr_24216_24282[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (10))){
var inst_24015 = (state_24141[(22)]);
var inst_24017 = cljs.core.chunked_seq_QMARK_.call(null,inst_24015);
var state_24141__$1 = state_24141;
if(inst_24017){
var statearr_24217_24283 = state_24141__$1;
(statearr_24217_24283[(1)] = (13));

} else {
var statearr_24218_24284 = state_24141__$1;
(statearr_24218_24284[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (18))){
var inst_24049 = (state_24141[(2)]);
var state_24141__$1 = state_24141;
if(cljs.core.truth_(inst_24049)){
var statearr_24219_24285 = state_24141__$1;
(statearr_24219_24285[(1)] = (19));

} else {
var statearr_24220_24286 = state_24141__$1;
(statearr_24220_24286[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (42))){
var state_24141__$1 = state_24141;
var statearr_24221_24287 = state_24141__$1;
(statearr_24221_24287[(2)] = null);

(statearr_24221_24287[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (37))){
var inst_24107 = (state_24141[(2)]);
var state_24141__$1 = state_24141;
var statearr_24222_24288 = state_24141__$1;
(statearr_24222_24288[(2)] = inst_24107);

(statearr_24222_24288[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (8))){
var inst_24015 = (state_24141[(22)]);
var inst_24002 = (state_24141[(10)]);
var inst_24015__$1 = cljs.core.seq.call(null,inst_24002);
var state_24141__$1 = (function (){var statearr_24223 = state_24141;
(statearr_24223[(22)] = inst_24015__$1);

return statearr_24223;
})();
if(inst_24015__$1){
var statearr_24224_24289 = state_24141__$1;
(statearr_24224_24289[(1)] = (10));

} else {
var statearr_24225_24290 = state_24141__$1;
(statearr_24225_24290[(1)] = (11));

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
});})(c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20376__auto__,c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20377__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20377__auto____0 = (function (){
var statearr_24229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24229[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20377__auto__);

(statearr_24229[(1)] = (1));

return statearr_24229;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20377__auto____1 = (function (state_24141){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_24141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e24230){if((e24230 instanceof Object)){
var ex__20380__auto__ = e24230;
var statearr_24231_24291 = state_24141;
(statearr_24231_24291[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24292 = state_24141;
state_24141 = G__24292;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20377__auto__ = function(state_24141){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20377__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20377__auto____1.call(this,state_24141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20377__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20377__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20443__auto__ = (function (){var statearr_24232 = f__20442__auto__.call(null);
(statearr_24232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto__);

return statearr_24232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto__,map__23987,map__23987__$1,opts,before_jsload,on_jsload,reload_dependents,map__23988,map__23988__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20441__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24295,link){
var map__24298 = p__24295;
var map__24298__$1 = ((((!((map__24298 == null)))?((((map__24298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24298):map__24298);
var file = cljs.core.get.call(null,map__24298__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__24298,map__24298__$1,file){
return (function (p1__24293_SHARP_,p2__24294_SHARP_){
if(cljs.core._EQ_.call(null,p1__24293_SHARP_,p2__24294_SHARP_)){
return p1__24293_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__24298,map__24298__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24304){
var map__24305 = p__24304;
var map__24305__$1 = ((((!((map__24305 == null)))?((((map__24305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24305):map__24305);
var match_length = cljs.core.get.call(null,map__24305__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24305__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24300_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24300_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24307 = [];
var len__19330__auto___24310 = arguments.length;
var i__19331__auto___24311 = (0);
while(true){
if((i__19331__auto___24311 < len__19330__auto___24310)){
args24307.push((arguments[i__19331__auto___24311]));

var G__24312 = (i__19331__auto___24311 + (1));
i__19331__auto___24311 = G__24312;
continue;
} else {
}
break;
}

var G__24309 = args24307.length;
switch (G__24309) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24307.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24314_SHARP_,p2__24315_SHARP_){
return cljs.core.assoc.call(null,p1__24314_SHARP_,cljs.core.get.call(null,p2__24315_SHARP_,key),p2__24315_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24316){
var map__24319 = p__24316;
var map__24319__$1 = ((((!((map__24319 == null)))?((((map__24319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24319):map__24319);
var f_data = map__24319__$1;
var file = cljs.core.get.call(null,map__24319__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24321,files_msg){
var map__24328 = p__24321;
var map__24328__$1 = ((((!((map__24328 == null)))?((((map__24328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24328):map__24328);
var opts = map__24328__$1;
var on_cssload = cljs.core.get.call(null,map__24328__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24330_24334 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24331_24335 = null;
var count__24332_24336 = (0);
var i__24333_24337 = (0);
while(true){
if((i__24333_24337 < count__24332_24336)){
var f_24338 = cljs.core._nth.call(null,chunk__24331_24335,i__24333_24337);
figwheel.client.file_reloading.reload_css_file.call(null,f_24338);

var G__24339 = seq__24330_24334;
var G__24340 = chunk__24331_24335;
var G__24341 = count__24332_24336;
var G__24342 = (i__24333_24337 + (1));
seq__24330_24334 = G__24339;
chunk__24331_24335 = G__24340;
count__24332_24336 = G__24341;
i__24333_24337 = G__24342;
continue;
} else {
var temp__4425__auto___24343 = cljs.core.seq.call(null,seq__24330_24334);
if(temp__4425__auto___24343){
var seq__24330_24344__$1 = temp__4425__auto___24343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24330_24344__$1)){
var c__19079__auto___24345 = cljs.core.chunk_first.call(null,seq__24330_24344__$1);
var G__24346 = cljs.core.chunk_rest.call(null,seq__24330_24344__$1);
var G__24347 = c__19079__auto___24345;
var G__24348 = cljs.core.count.call(null,c__19079__auto___24345);
var G__24349 = (0);
seq__24330_24334 = G__24346;
chunk__24331_24335 = G__24347;
count__24332_24336 = G__24348;
i__24333_24337 = G__24349;
continue;
} else {
var f_24350 = cljs.core.first.call(null,seq__24330_24344__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24350);

var G__24351 = cljs.core.next.call(null,seq__24330_24344__$1);
var G__24352 = null;
var G__24353 = (0);
var G__24354 = (0);
seq__24330_24334 = G__24351;
chunk__24331_24335 = G__24352;
count__24332_24336 = G__24353;
i__24333_24337 = G__24354;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24328,map__24328__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24328,map__24328__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map