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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__20401_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__20401_SHARP_));
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
var seq__20406 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__20407 = null;
var count__20408 = (0);
var i__20409 = (0);
while(true){
if((i__20409 < count__20408)){
var n = cljs.core._nth.call(null,chunk__20407,i__20409);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__20410 = seq__20406;
var G__20411 = chunk__20407;
var G__20412 = count__20408;
var G__20413 = (i__20409 + (1));
seq__20406 = G__20410;
chunk__20407 = G__20411;
count__20408 = G__20412;
i__20409 = G__20413;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20406);
if(temp__4425__auto__){
var seq__20406__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20406__$1)){
var c__19079__auto__ = cljs.core.chunk_first.call(null,seq__20406__$1);
var G__20414 = cljs.core.chunk_rest.call(null,seq__20406__$1);
var G__20415 = c__19079__auto__;
var G__20416 = cljs.core.count.call(null,c__19079__auto__);
var G__20417 = (0);
seq__20406 = G__20414;
chunk__20407 = G__20415;
count__20408 = G__20416;
i__20409 = G__20417;
continue;
} else {
var n = cljs.core.first.call(null,seq__20406__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__20418 = cljs.core.next.call(null,seq__20406__$1);
var G__20419 = null;
var G__20420 = (0);
var G__20421 = (0);
seq__20406 = G__20418;
chunk__20407 = G__20419;
count__20408 = G__20420;
i__20409 = G__20421;
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

var seq__20460_20467 = cljs.core.seq.call(null,deps);
var chunk__20461_20468 = null;
var count__20462_20469 = (0);
var i__20463_20470 = (0);
while(true){
if((i__20463_20470 < count__20462_20469)){
var dep_20471 = cljs.core._nth.call(null,chunk__20461_20468,i__20463_20470);
topo_sort_helper_STAR_.call(null,dep_20471,(depth + (1)),state);

var G__20472 = seq__20460_20467;
var G__20473 = chunk__20461_20468;
var G__20474 = count__20462_20469;
var G__20475 = (i__20463_20470 + (1));
seq__20460_20467 = G__20472;
chunk__20461_20468 = G__20473;
count__20462_20469 = G__20474;
i__20463_20470 = G__20475;
continue;
} else {
var temp__4425__auto___20476 = cljs.core.seq.call(null,seq__20460_20467);
if(temp__4425__auto___20476){
var seq__20460_20477__$1 = temp__4425__auto___20476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20460_20477__$1)){
var c__19079__auto___20478 = cljs.core.chunk_first.call(null,seq__20460_20477__$1);
var G__20479 = cljs.core.chunk_rest.call(null,seq__20460_20477__$1);
var G__20480 = c__19079__auto___20478;
var G__20481 = cljs.core.count.call(null,c__19079__auto___20478);
var G__20482 = (0);
seq__20460_20467 = G__20479;
chunk__20461_20468 = G__20480;
count__20462_20469 = G__20481;
i__20463_20470 = G__20482;
continue;
} else {
var dep_20483 = cljs.core.first.call(null,seq__20460_20477__$1);
topo_sort_helper_STAR_.call(null,dep_20483,(depth + (1)),state);

var G__20484 = cljs.core.next.call(null,seq__20460_20477__$1);
var G__20485 = null;
var G__20486 = (0);
var G__20487 = (0);
seq__20460_20467 = G__20484;
chunk__20461_20468 = G__20485;
count__20462_20469 = G__20486;
i__20463_20470 = G__20487;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__20464){
var vec__20466 = p__20464;
var x = cljs.core.nth.call(null,vec__20466,(0),null);
var xs = cljs.core.nthnext.call(null,vec__20466,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__20466,x,xs,get_deps__$1){
return (function (p1__20422_SHARP_){
return clojure.set.difference.call(null,p1__20422_SHARP_,x);
});})(vec__20466,x,xs,get_deps__$1))
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
var seq__20500 = cljs.core.seq.call(null,provides);
var chunk__20501 = null;
var count__20502 = (0);
var i__20503 = (0);
while(true){
if((i__20503 < count__20502)){
var prov = cljs.core._nth.call(null,chunk__20501,i__20503);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__20504_20512 = cljs.core.seq.call(null,requires);
var chunk__20505_20513 = null;
var count__20506_20514 = (0);
var i__20507_20515 = (0);
while(true){
if((i__20507_20515 < count__20506_20514)){
var req_20516 = cljs.core._nth.call(null,chunk__20505_20513,i__20507_20515);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20516,prov);

var G__20517 = seq__20504_20512;
var G__20518 = chunk__20505_20513;
var G__20519 = count__20506_20514;
var G__20520 = (i__20507_20515 + (1));
seq__20504_20512 = G__20517;
chunk__20505_20513 = G__20518;
count__20506_20514 = G__20519;
i__20507_20515 = G__20520;
continue;
} else {
var temp__4425__auto___20521 = cljs.core.seq.call(null,seq__20504_20512);
if(temp__4425__auto___20521){
var seq__20504_20522__$1 = temp__4425__auto___20521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20504_20522__$1)){
var c__19079__auto___20523 = cljs.core.chunk_first.call(null,seq__20504_20522__$1);
var G__20524 = cljs.core.chunk_rest.call(null,seq__20504_20522__$1);
var G__20525 = c__19079__auto___20523;
var G__20526 = cljs.core.count.call(null,c__19079__auto___20523);
var G__20527 = (0);
seq__20504_20512 = G__20524;
chunk__20505_20513 = G__20525;
count__20506_20514 = G__20526;
i__20507_20515 = G__20527;
continue;
} else {
var req_20528 = cljs.core.first.call(null,seq__20504_20522__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20528,prov);

var G__20529 = cljs.core.next.call(null,seq__20504_20522__$1);
var G__20530 = null;
var G__20531 = (0);
var G__20532 = (0);
seq__20504_20512 = G__20529;
chunk__20505_20513 = G__20530;
count__20506_20514 = G__20531;
i__20507_20515 = G__20532;
continue;
}
} else {
}
}
break;
}

var G__20533 = seq__20500;
var G__20534 = chunk__20501;
var G__20535 = count__20502;
var G__20536 = (i__20503 + (1));
seq__20500 = G__20533;
chunk__20501 = G__20534;
count__20502 = G__20535;
i__20503 = G__20536;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20500);
if(temp__4425__auto__){
var seq__20500__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20500__$1)){
var c__19079__auto__ = cljs.core.chunk_first.call(null,seq__20500__$1);
var G__20537 = cljs.core.chunk_rest.call(null,seq__20500__$1);
var G__20538 = c__19079__auto__;
var G__20539 = cljs.core.count.call(null,c__19079__auto__);
var G__20540 = (0);
seq__20500 = G__20537;
chunk__20501 = G__20538;
count__20502 = G__20539;
i__20503 = G__20540;
continue;
} else {
var prov = cljs.core.first.call(null,seq__20500__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__20508_20541 = cljs.core.seq.call(null,requires);
var chunk__20509_20542 = null;
var count__20510_20543 = (0);
var i__20511_20544 = (0);
while(true){
if((i__20511_20544 < count__20510_20543)){
var req_20545 = cljs.core._nth.call(null,chunk__20509_20542,i__20511_20544);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20545,prov);

var G__20546 = seq__20508_20541;
var G__20547 = chunk__20509_20542;
var G__20548 = count__20510_20543;
var G__20549 = (i__20511_20544 + (1));
seq__20508_20541 = G__20546;
chunk__20509_20542 = G__20547;
count__20510_20543 = G__20548;
i__20511_20544 = G__20549;
continue;
} else {
var temp__4425__auto___20550__$1 = cljs.core.seq.call(null,seq__20508_20541);
if(temp__4425__auto___20550__$1){
var seq__20508_20551__$1 = temp__4425__auto___20550__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20508_20551__$1)){
var c__19079__auto___20552 = cljs.core.chunk_first.call(null,seq__20508_20551__$1);
var G__20553 = cljs.core.chunk_rest.call(null,seq__20508_20551__$1);
var G__20554 = c__19079__auto___20552;
var G__20555 = cljs.core.count.call(null,c__19079__auto___20552);
var G__20556 = (0);
seq__20508_20541 = G__20553;
chunk__20509_20542 = G__20554;
count__20510_20543 = G__20555;
i__20511_20544 = G__20556;
continue;
} else {
var req_20557 = cljs.core.first.call(null,seq__20508_20551__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20557,prov);

var G__20558 = cljs.core.next.call(null,seq__20508_20551__$1);
var G__20559 = null;
var G__20560 = (0);
var G__20561 = (0);
seq__20508_20541 = G__20558;
chunk__20509_20542 = G__20559;
count__20510_20543 = G__20560;
i__20511_20544 = G__20561;
continue;
}
} else {
}
}
break;
}

var G__20562 = cljs.core.next.call(null,seq__20500__$1);
var G__20563 = null;
var G__20564 = (0);
var G__20565 = (0);
seq__20500 = G__20562;
chunk__20501 = G__20563;
count__20502 = G__20564;
i__20503 = G__20565;
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
var seq__20570_20574 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__20571_20575 = null;
var count__20572_20576 = (0);
var i__20573_20577 = (0);
while(true){
if((i__20573_20577 < count__20572_20576)){
var ns_20578 = cljs.core._nth.call(null,chunk__20571_20575,i__20573_20577);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_20578);

var G__20579 = seq__20570_20574;
var G__20580 = chunk__20571_20575;
var G__20581 = count__20572_20576;
var G__20582 = (i__20573_20577 + (1));
seq__20570_20574 = G__20579;
chunk__20571_20575 = G__20580;
count__20572_20576 = G__20581;
i__20573_20577 = G__20582;
continue;
} else {
var temp__4425__auto___20583 = cljs.core.seq.call(null,seq__20570_20574);
if(temp__4425__auto___20583){
var seq__20570_20584__$1 = temp__4425__auto___20583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20570_20584__$1)){
var c__19079__auto___20585 = cljs.core.chunk_first.call(null,seq__20570_20584__$1);
var G__20586 = cljs.core.chunk_rest.call(null,seq__20570_20584__$1);
var G__20587 = c__19079__auto___20585;
var G__20588 = cljs.core.count.call(null,c__19079__auto___20585);
var G__20589 = (0);
seq__20570_20574 = G__20586;
chunk__20571_20575 = G__20587;
count__20572_20576 = G__20588;
i__20573_20577 = G__20589;
continue;
} else {
var ns_20590 = cljs.core.first.call(null,seq__20570_20584__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_20590);

var G__20591 = cljs.core.next.call(null,seq__20570_20584__$1);
var G__20592 = null;
var G__20593 = (0);
var G__20594 = (0);
seq__20570_20574 = G__20591;
chunk__20571_20575 = G__20592;
count__20572_20576 = G__20593;
i__20573_20577 = G__20594;
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
var G__20595__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__20595 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20596__i = 0, G__20596__a = new Array(arguments.length -  0);
while (G__20596__i < G__20596__a.length) {G__20596__a[G__20596__i] = arguments[G__20596__i + 0]; ++G__20596__i;}
  args = new cljs.core.IndexedSeq(G__20596__a,0);
} 
return G__20595__delegate.call(this,args);};
G__20595.cljs$lang$maxFixedArity = 0;
G__20595.cljs$lang$applyTo = (function (arglist__20597){
var args = cljs.core.seq(arglist__20597);
return G__20595__delegate(args);
});
G__20595.cljs$core$IFn$_invoke$arity$variadic = G__20595__delegate;
return G__20595;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__20599 = cljs.core._EQ_;
var expr__20600 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__20599.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__20600))){
var path_parts = ((function (pred__20599,expr__20600){
return (function (p1__20598_SHARP_){
return clojure.string.split.call(null,p1__20598_SHARP_,/[\/\\]/);
});})(pred__20599,expr__20600))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__20599,expr__20600){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e20602){if((e20602 instanceof Error)){
var e = e20602;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e20602;

}
}})());
});
;})(path_parts,sep,root,pred__20599,expr__20600))
} else {
if(cljs.core.truth_(pred__20599.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__20600))){
return ((function (pred__20599,expr__20600){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__20599,expr__20600){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__20599,expr__20600))
);

return deferred.addErrback(((function (deferred,pred__20599,expr__20600){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__20599,expr__20600))
);
});
;})(pred__20599,expr__20600))
} else {
return ((function (pred__20599,expr__20600){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__20599,expr__20600))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__20603,callback){
var map__20606 = p__20603;
var map__20606__$1 = ((((!((map__20606 == null)))?((((map__20606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20606):map__20606);
var file_msg = map__20606__$1;
var request_url = cljs.core.get.call(null,map__20606__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__20606,map__20606__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__20606,map__20606__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__20322__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20322__auto__){
return (function (){
var f__20323__auto__ = (function (){var switch__20301__auto__ = ((function (c__20322__auto__){
return (function (state_20630){
var state_val_20631 = (state_20630[(1)]);
if((state_val_20631 === (7))){
var inst_20626 = (state_20630[(2)]);
var state_20630__$1 = state_20630;
var statearr_20632_20652 = state_20630__$1;
(statearr_20632_20652[(2)] = inst_20626);

(statearr_20632_20652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (1))){
var state_20630__$1 = state_20630;
var statearr_20633_20653 = state_20630__$1;
(statearr_20633_20653[(2)] = null);

(statearr_20633_20653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (4))){
var inst_20610 = (state_20630[(7)]);
var inst_20610__$1 = (state_20630[(2)]);
var state_20630__$1 = (function (){var statearr_20634 = state_20630;
(statearr_20634[(7)] = inst_20610__$1);

return statearr_20634;
})();
if(cljs.core.truth_(inst_20610__$1)){
var statearr_20635_20654 = state_20630__$1;
(statearr_20635_20654[(1)] = (5));

} else {
var statearr_20636_20655 = state_20630__$1;
(statearr_20636_20655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (6))){
var state_20630__$1 = state_20630;
var statearr_20637_20656 = state_20630__$1;
(statearr_20637_20656[(2)] = null);

(statearr_20637_20656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (3))){
var inst_20628 = (state_20630[(2)]);
var state_20630__$1 = state_20630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20630__$1,inst_20628);
} else {
if((state_val_20631 === (2))){
var state_20630__$1 = state_20630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20630__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_20631 === (11))){
var inst_20622 = (state_20630[(2)]);
var state_20630__$1 = (function (){var statearr_20638 = state_20630;
(statearr_20638[(8)] = inst_20622);

return statearr_20638;
})();
var statearr_20639_20657 = state_20630__$1;
(statearr_20639_20657[(2)] = null);

(statearr_20639_20657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (9))){
var inst_20614 = (state_20630[(9)]);
var inst_20616 = (state_20630[(10)]);
var inst_20618 = inst_20616.call(null,inst_20614);
var state_20630__$1 = state_20630;
var statearr_20640_20658 = state_20630__$1;
(statearr_20640_20658[(2)] = inst_20618);

(statearr_20640_20658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (5))){
var inst_20610 = (state_20630[(7)]);
var inst_20612 = figwheel.client.file_reloading.blocking_load.call(null,inst_20610);
var state_20630__$1 = state_20630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20630__$1,(8),inst_20612);
} else {
if((state_val_20631 === (10))){
var inst_20614 = (state_20630[(9)]);
var inst_20620 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_20614);
var state_20630__$1 = state_20630;
var statearr_20641_20659 = state_20630__$1;
(statearr_20641_20659[(2)] = inst_20620);

(statearr_20641_20659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20631 === (8))){
var inst_20610 = (state_20630[(7)]);
var inst_20616 = (state_20630[(10)]);
var inst_20614 = (state_20630[(2)]);
var inst_20615 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_20616__$1 = cljs.core.get.call(null,inst_20615,inst_20610);
var state_20630__$1 = (function (){var statearr_20642 = state_20630;
(statearr_20642[(9)] = inst_20614);

(statearr_20642[(10)] = inst_20616__$1);

return statearr_20642;
})();
if(cljs.core.truth_(inst_20616__$1)){
var statearr_20643_20660 = state_20630__$1;
(statearr_20643_20660[(1)] = (9));

} else {
var statearr_20644_20661 = state_20630__$1;
(statearr_20644_20661[(1)] = (10));

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
});})(c__20322__auto__))
;
return ((function (switch__20301__auto__,c__20322__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20302__auto__ = null;
var figwheel$client$file_reloading$state_machine__20302__auto____0 = (function (){
var statearr_20648 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20648[(0)] = figwheel$client$file_reloading$state_machine__20302__auto__);

(statearr_20648[(1)] = (1));

return statearr_20648;
});
var figwheel$client$file_reloading$state_machine__20302__auto____1 = (function (state_20630){
while(true){
var ret_value__20303__auto__ = (function (){try{while(true){
var result__20304__auto__ = switch__20301__auto__.call(null,state_20630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20304__auto__;
}
break;
}
}catch (e20649){if((e20649 instanceof Object)){
var ex__20305__auto__ = e20649;
var statearr_20650_20662 = state_20630;
(statearr_20650_20662[(5)] = ex__20305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20663 = state_20630;
state_20630 = G__20663;
continue;
} else {
return ret_value__20303__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20302__auto__ = function(state_20630){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20302__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20302__auto____1.call(this,state_20630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20302__auto____0;
figwheel$client$file_reloading$state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20302__auto____1;
return figwheel$client$file_reloading$state_machine__20302__auto__;
})()
;})(switch__20301__auto__,c__20322__auto__))
})();
var state__20324__auto__ = (function (){var statearr_20651 = f__20323__auto__.call(null);
(statearr_20651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20322__auto__);

return statearr_20651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20324__auto__);
});})(c__20322__auto__))
);

return c__20322__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__20664,callback){
var map__20667 = p__20664;
var map__20667__$1 = ((((!((map__20667 == null)))?((((map__20667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20667):map__20667);
var file_msg = map__20667__$1;
var namespace = cljs.core.get.call(null,map__20667__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__20667,map__20667__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__20667,map__20667__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__20669){
var map__20672 = p__20669;
var map__20672__$1 = ((((!((map__20672 == null)))?((((map__20672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20672):map__20672);
var file_msg = map__20672__$1;
var namespace = cljs.core.get.call(null,map__20672__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__20674,callback){
var map__20677 = p__20674;
var map__20677__$1 = ((((!((map__20677 == null)))?((((map__20677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20677):map__20677);
var file_msg = map__20677__$1;
var request_url = cljs.core.get.call(null,map__20677__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__20677__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20322__auto___20765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20322__auto___20765,out){
return (function (){
var f__20323__auto__ = (function (){var switch__20301__auto__ = ((function (c__20322__auto___20765,out){
return (function (state_20747){
var state_val_20748 = (state_20747[(1)]);
if((state_val_20748 === (1))){
var inst_20725 = cljs.core.nth.call(null,files,(0),null);
var inst_20726 = cljs.core.nthnext.call(null,files,(1));
var inst_20727 = files;
var state_20747__$1 = (function (){var statearr_20749 = state_20747;
(statearr_20749[(7)] = inst_20726);

(statearr_20749[(8)] = inst_20727);

(statearr_20749[(9)] = inst_20725);

return statearr_20749;
})();
var statearr_20750_20766 = state_20747__$1;
(statearr_20750_20766[(2)] = null);

(statearr_20750_20766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20748 === (2))){
var inst_20730 = (state_20747[(10)]);
var inst_20727 = (state_20747[(8)]);
var inst_20730__$1 = cljs.core.nth.call(null,inst_20727,(0),null);
var inst_20731 = cljs.core.nthnext.call(null,inst_20727,(1));
var inst_20732 = (inst_20730__$1 == null);
var inst_20733 = cljs.core.not.call(null,inst_20732);
var state_20747__$1 = (function (){var statearr_20751 = state_20747;
(statearr_20751[(11)] = inst_20731);

(statearr_20751[(10)] = inst_20730__$1);

return statearr_20751;
})();
if(inst_20733){
var statearr_20752_20767 = state_20747__$1;
(statearr_20752_20767[(1)] = (4));

} else {
var statearr_20753_20768 = state_20747__$1;
(statearr_20753_20768[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20748 === (3))){
var inst_20745 = (state_20747[(2)]);
var state_20747__$1 = state_20747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20747__$1,inst_20745);
} else {
if((state_val_20748 === (4))){
var inst_20730 = (state_20747[(10)]);
var inst_20735 = figwheel.client.file_reloading.reload_js_file.call(null,inst_20730);
var state_20747__$1 = state_20747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20747__$1,(7),inst_20735);
} else {
if((state_val_20748 === (5))){
var inst_20741 = cljs.core.async.close_BANG_.call(null,out);
var state_20747__$1 = state_20747;
var statearr_20754_20769 = state_20747__$1;
(statearr_20754_20769[(2)] = inst_20741);

(statearr_20754_20769[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20748 === (6))){
var inst_20743 = (state_20747[(2)]);
var state_20747__$1 = state_20747;
var statearr_20755_20770 = state_20747__$1;
(statearr_20755_20770[(2)] = inst_20743);

(statearr_20755_20770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20748 === (7))){
var inst_20731 = (state_20747[(11)]);
var inst_20737 = (state_20747[(2)]);
var inst_20738 = cljs.core.async.put_BANG_.call(null,out,inst_20737);
var inst_20727 = inst_20731;
var state_20747__$1 = (function (){var statearr_20756 = state_20747;
(statearr_20756[(8)] = inst_20727);

(statearr_20756[(12)] = inst_20738);

return statearr_20756;
})();
var statearr_20757_20771 = state_20747__$1;
(statearr_20757_20771[(2)] = null);

(statearr_20757_20771[(1)] = (2));


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
});})(c__20322__auto___20765,out))
;
return ((function (switch__20301__auto__,c__20322__auto___20765,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20302__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20302__auto____0 = (function (){
var statearr_20761 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20761[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20302__auto__);

(statearr_20761[(1)] = (1));

return statearr_20761;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20302__auto____1 = (function (state_20747){
while(true){
var ret_value__20303__auto__ = (function (){try{while(true){
var result__20304__auto__ = switch__20301__auto__.call(null,state_20747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20304__auto__;
}
break;
}
}catch (e20762){if((e20762 instanceof Object)){
var ex__20305__auto__ = e20762;
var statearr_20763_20772 = state_20747;
(statearr_20763_20772[(5)] = ex__20305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20773 = state_20747;
state_20747 = G__20773;
continue;
} else {
return ret_value__20303__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20302__auto__ = function(state_20747){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20302__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20302__auto____1.call(this,state_20747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20302__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20302__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20302__auto__;
})()
;})(switch__20301__auto__,c__20322__auto___20765,out))
})();
var state__20324__auto__ = (function (){var statearr_20764 = f__20323__auto__.call(null);
(statearr_20764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20322__auto___20765);

return statearr_20764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20324__auto__);
});})(c__20322__auto___20765,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__20774,opts){
var map__20778 = p__20774;
var map__20778__$1 = ((((!((map__20778 == null)))?((((map__20778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20778):map__20778);
var eval_body__$1 = cljs.core.get.call(null,map__20778__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__20778__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e20780){var e = e20780;
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
return (function (p1__20781_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__20781_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__20786){
var vec__20787 = p__20786;
var k = cljs.core.nth.call(null,vec__20787,(0),null);
var v = cljs.core.nth.call(null,vec__20787,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__20788){
var vec__20789 = p__20788;
var k = cljs.core.nth.call(null,vec__20789,(0),null);
var v = cljs.core.nth.call(null,vec__20789,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__20793,p__20794){
var map__21041 = p__20793;
var map__21041__$1 = ((((!((map__21041 == null)))?((((map__21041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21041):map__21041);
var opts = map__21041__$1;
var before_jsload = cljs.core.get.call(null,map__21041__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__21041__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__21041__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__21042 = p__20794;
var map__21042__$1 = ((((!((map__21042 == null)))?((((map__21042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21042):map__21042);
var msg = map__21042__$1;
var files = cljs.core.get.call(null,map__21042__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__21042__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__21042__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20322__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20323__auto__ = (function (){var switch__20301__auto__ = ((function (c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_21195){
var state_val_21196 = (state_21195[(1)]);
if((state_val_21196 === (7))){
var inst_21056 = (state_21195[(7)]);
var inst_21058 = (state_21195[(8)]);
var inst_21059 = (state_21195[(9)]);
var inst_21057 = (state_21195[(10)]);
var inst_21064 = cljs.core._nth.call(null,inst_21057,inst_21059);
var inst_21065 = figwheel.client.file_reloading.eval_body.call(null,inst_21064,opts);
var inst_21066 = (inst_21059 + (1));
var tmp21197 = inst_21056;
var tmp21198 = inst_21058;
var tmp21199 = inst_21057;
var inst_21056__$1 = tmp21197;
var inst_21057__$1 = tmp21199;
var inst_21058__$1 = tmp21198;
var inst_21059__$1 = inst_21066;
var state_21195__$1 = (function (){var statearr_21200 = state_21195;
(statearr_21200[(7)] = inst_21056__$1);

(statearr_21200[(8)] = inst_21058__$1);

(statearr_21200[(9)] = inst_21059__$1);

(statearr_21200[(10)] = inst_21057__$1);

(statearr_21200[(11)] = inst_21065);

return statearr_21200;
})();
var statearr_21201_21287 = state_21195__$1;
(statearr_21201_21287[(2)] = null);

(statearr_21201_21287[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (20))){
var inst_21099 = (state_21195[(12)]);
var inst_21107 = figwheel.client.file_reloading.sort_files.call(null,inst_21099);
var state_21195__$1 = state_21195;
var statearr_21202_21288 = state_21195__$1;
(statearr_21202_21288[(2)] = inst_21107);

(statearr_21202_21288[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (27))){
var state_21195__$1 = state_21195;
var statearr_21203_21289 = state_21195__$1;
(statearr_21203_21289[(2)] = null);

(statearr_21203_21289[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (1))){
var inst_21048 = (state_21195[(13)]);
var inst_21045 = before_jsload.call(null,files);
var inst_21046 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_21047 = (function (){return ((function (inst_21048,inst_21045,inst_21046,state_val_21196,c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20790_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__20790_SHARP_);
});
;})(inst_21048,inst_21045,inst_21046,state_val_21196,c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21048__$1 = cljs.core.filter.call(null,inst_21047,files);
var inst_21049 = cljs.core.not_empty.call(null,inst_21048__$1);
var state_21195__$1 = (function (){var statearr_21204 = state_21195;
(statearr_21204[(14)] = inst_21046);

(statearr_21204[(15)] = inst_21045);

(statearr_21204[(13)] = inst_21048__$1);

return statearr_21204;
})();
if(cljs.core.truth_(inst_21049)){
var statearr_21205_21290 = state_21195__$1;
(statearr_21205_21290[(1)] = (2));

} else {
var statearr_21206_21291 = state_21195__$1;
(statearr_21206_21291[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (24))){
var state_21195__$1 = state_21195;
var statearr_21207_21292 = state_21195__$1;
(statearr_21207_21292[(2)] = null);

(statearr_21207_21292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (39))){
var inst_21149 = (state_21195[(16)]);
var state_21195__$1 = state_21195;
var statearr_21208_21293 = state_21195__$1;
(statearr_21208_21293[(2)] = inst_21149);

(statearr_21208_21293[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (46))){
var inst_21190 = (state_21195[(2)]);
var state_21195__$1 = state_21195;
var statearr_21209_21294 = state_21195__$1;
(statearr_21209_21294[(2)] = inst_21190);

(statearr_21209_21294[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (4))){
var inst_21093 = (state_21195[(2)]);
var inst_21094 = cljs.core.List.EMPTY;
var inst_21095 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_21094);
var inst_21096 = (function (){return ((function (inst_21093,inst_21094,inst_21095,state_val_21196,c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20791_SHARP_){
var and__18264__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__20791_SHARP_);
if(cljs.core.truth_(and__18264__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__20791_SHARP_));
} else {
return and__18264__auto__;
}
});
;})(inst_21093,inst_21094,inst_21095,state_val_21196,c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21097 = cljs.core.filter.call(null,inst_21096,files);
var inst_21098 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_21099 = cljs.core.concat.call(null,inst_21097,inst_21098);
var state_21195__$1 = (function (){var statearr_21210 = state_21195;
(statearr_21210[(17)] = inst_21095);

(statearr_21210[(12)] = inst_21099);

(statearr_21210[(18)] = inst_21093);

return statearr_21210;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_21211_21295 = state_21195__$1;
(statearr_21211_21295[(1)] = (16));

} else {
var statearr_21212_21296 = state_21195__$1;
(statearr_21212_21296[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (15))){
var inst_21083 = (state_21195[(2)]);
var state_21195__$1 = state_21195;
var statearr_21213_21297 = state_21195__$1;
(statearr_21213_21297[(2)] = inst_21083);

(statearr_21213_21297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (21))){
var inst_21109 = (state_21195[(19)]);
var inst_21109__$1 = (state_21195[(2)]);
var inst_21110 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_21109__$1);
var state_21195__$1 = (function (){var statearr_21214 = state_21195;
(statearr_21214[(19)] = inst_21109__$1);

return statearr_21214;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21195__$1,(22),inst_21110);
} else {
if((state_val_21196 === (31))){
var inst_21193 = (state_21195[(2)]);
var state_21195__$1 = state_21195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21195__$1,inst_21193);
} else {
if((state_val_21196 === (32))){
var inst_21149 = (state_21195[(16)]);
var inst_21154 = inst_21149.cljs$lang$protocol_mask$partition0$;
var inst_21155 = (inst_21154 & (64));
var inst_21156 = inst_21149.cljs$core$ISeq$;
var inst_21157 = (inst_21155) || (inst_21156);
var state_21195__$1 = state_21195;
if(cljs.core.truth_(inst_21157)){
var statearr_21215_21298 = state_21195__$1;
(statearr_21215_21298[(1)] = (35));

} else {
var statearr_21216_21299 = state_21195__$1;
(statearr_21216_21299[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (40))){
var inst_21170 = (state_21195[(20)]);
var inst_21169 = (state_21195[(2)]);
var inst_21170__$1 = cljs.core.get.call(null,inst_21169,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_21171 = cljs.core.get.call(null,inst_21169,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_21172 = cljs.core.not_empty.call(null,inst_21170__$1);
var state_21195__$1 = (function (){var statearr_21217 = state_21195;
(statearr_21217[(21)] = inst_21171);

(statearr_21217[(20)] = inst_21170__$1);

return statearr_21217;
})();
if(cljs.core.truth_(inst_21172)){
var statearr_21218_21300 = state_21195__$1;
(statearr_21218_21300[(1)] = (41));

} else {
var statearr_21219_21301 = state_21195__$1;
(statearr_21219_21301[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (33))){
var state_21195__$1 = state_21195;
var statearr_21220_21302 = state_21195__$1;
(statearr_21220_21302[(2)] = false);

(statearr_21220_21302[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (13))){
var inst_21069 = (state_21195[(22)]);
var inst_21073 = cljs.core.chunk_first.call(null,inst_21069);
var inst_21074 = cljs.core.chunk_rest.call(null,inst_21069);
var inst_21075 = cljs.core.count.call(null,inst_21073);
var inst_21056 = inst_21074;
var inst_21057 = inst_21073;
var inst_21058 = inst_21075;
var inst_21059 = (0);
var state_21195__$1 = (function (){var statearr_21221 = state_21195;
(statearr_21221[(7)] = inst_21056);

(statearr_21221[(8)] = inst_21058);

(statearr_21221[(9)] = inst_21059);

(statearr_21221[(10)] = inst_21057);

return statearr_21221;
})();
var statearr_21222_21303 = state_21195__$1;
(statearr_21222_21303[(2)] = null);

(statearr_21222_21303[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (22))){
var inst_21109 = (state_21195[(19)]);
var inst_21112 = (state_21195[(23)]);
var inst_21113 = (state_21195[(24)]);
var inst_21117 = (state_21195[(25)]);
var inst_21112__$1 = (state_21195[(2)]);
var inst_21113__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21112__$1);
var inst_21114 = (function (){var all_files = inst_21109;
var res_SINGLEQUOTE_ = inst_21112__$1;
var res = inst_21113__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_21109,inst_21112,inst_21113,inst_21117,inst_21112__$1,inst_21113__$1,state_val_21196,c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20792_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__20792_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_21109,inst_21112,inst_21113,inst_21117,inst_21112__$1,inst_21113__$1,state_val_21196,c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21115 = cljs.core.filter.call(null,inst_21114,inst_21112__$1);
var inst_21116 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_21117__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21116);
var inst_21118 = cljs.core.not_empty.call(null,inst_21117__$1);
var state_21195__$1 = (function (){var statearr_21223 = state_21195;
(statearr_21223[(23)] = inst_21112__$1);

(statearr_21223[(26)] = inst_21115);

(statearr_21223[(24)] = inst_21113__$1);

(statearr_21223[(25)] = inst_21117__$1);

return statearr_21223;
})();
if(cljs.core.truth_(inst_21118)){
var statearr_21224_21304 = state_21195__$1;
(statearr_21224_21304[(1)] = (23));

} else {
var statearr_21225_21305 = state_21195__$1;
(statearr_21225_21305[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (36))){
var state_21195__$1 = state_21195;
var statearr_21226_21306 = state_21195__$1;
(statearr_21226_21306[(2)] = false);

(statearr_21226_21306[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (41))){
var inst_21170 = (state_21195[(20)]);
var inst_21174 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_21175 = cljs.core.map.call(null,inst_21174,inst_21170);
var inst_21176 = cljs.core.pr_str.call(null,inst_21175);
var inst_21177 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_21176)].join('');
var inst_21178 = figwheel.client.utils.log.call(null,inst_21177);
var state_21195__$1 = state_21195;
var statearr_21227_21307 = state_21195__$1;
(statearr_21227_21307[(2)] = inst_21178);

(statearr_21227_21307[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (43))){
var inst_21171 = (state_21195[(21)]);
var inst_21181 = (state_21195[(2)]);
var inst_21182 = cljs.core.not_empty.call(null,inst_21171);
var state_21195__$1 = (function (){var statearr_21228 = state_21195;
(statearr_21228[(27)] = inst_21181);

return statearr_21228;
})();
if(cljs.core.truth_(inst_21182)){
var statearr_21229_21308 = state_21195__$1;
(statearr_21229_21308[(1)] = (44));

} else {
var statearr_21230_21309 = state_21195__$1;
(statearr_21230_21309[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (29))){
var inst_21149 = (state_21195[(16)]);
var inst_21109 = (state_21195[(19)]);
var inst_21112 = (state_21195[(23)]);
var inst_21115 = (state_21195[(26)]);
var inst_21113 = (state_21195[(24)]);
var inst_21117 = (state_21195[(25)]);
var inst_21145 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_21148 = (function (){var all_files = inst_21109;
var res_SINGLEQUOTE_ = inst_21112;
var res = inst_21113;
var files_not_loaded = inst_21115;
var dependencies_that_loaded = inst_21117;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21149,inst_21109,inst_21112,inst_21115,inst_21113,inst_21117,inst_21145,state_val_21196,c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21147){
var map__21231 = p__21147;
var map__21231__$1 = ((((!((map__21231 == null)))?((((map__21231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21231):map__21231);
var namespace = cljs.core.get.call(null,map__21231__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21149,inst_21109,inst_21112,inst_21115,inst_21113,inst_21117,inst_21145,state_val_21196,c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21149__$1 = cljs.core.group_by.call(null,inst_21148,inst_21115);
var inst_21151 = (inst_21149__$1 == null);
var inst_21152 = cljs.core.not.call(null,inst_21151);
var state_21195__$1 = (function (){var statearr_21233 = state_21195;
(statearr_21233[(28)] = inst_21145);

(statearr_21233[(16)] = inst_21149__$1);

return statearr_21233;
})();
if(inst_21152){
var statearr_21234_21310 = state_21195__$1;
(statearr_21234_21310[(1)] = (32));

} else {
var statearr_21235_21311 = state_21195__$1;
(statearr_21235_21311[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (44))){
var inst_21171 = (state_21195[(21)]);
var inst_21184 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21171);
var inst_21185 = cljs.core.pr_str.call(null,inst_21184);
var inst_21186 = [cljs.core.str("not required: "),cljs.core.str(inst_21185)].join('');
var inst_21187 = figwheel.client.utils.log.call(null,inst_21186);
var state_21195__$1 = state_21195;
var statearr_21236_21312 = state_21195__$1;
(statearr_21236_21312[(2)] = inst_21187);

(statearr_21236_21312[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (6))){
var inst_21090 = (state_21195[(2)]);
var state_21195__$1 = state_21195;
var statearr_21237_21313 = state_21195__$1;
(statearr_21237_21313[(2)] = inst_21090);

(statearr_21237_21313[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (28))){
var inst_21115 = (state_21195[(26)]);
var inst_21142 = (state_21195[(2)]);
var inst_21143 = cljs.core.not_empty.call(null,inst_21115);
var state_21195__$1 = (function (){var statearr_21238 = state_21195;
(statearr_21238[(29)] = inst_21142);

return statearr_21238;
})();
if(cljs.core.truth_(inst_21143)){
var statearr_21239_21314 = state_21195__$1;
(statearr_21239_21314[(1)] = (29));

} else {
var statearr_21240_21315 = state_21195__$1;
(statearr_21240_21315[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (25))){
var inst_21113 = (state_21195[(24)]);
var inst_21129 = (state_21195[(2)]);
var inst_21130 = cljs.core.not_empty.call(null,inst_21113);
var state_21195__$1 = (function (){var statearr_21241 = state_21195;
(statearr_21241[(30)] = inst_21129);

return statearr_21241;
})();
if(cljs.core.truth_(inst_21130)){
var statearr_21242_21316 = state_21195__$1;
(statearr_21242_21316[(1)] = (26));

} else {
var statearr_21243_21317 = state_21195__$1;
(statearr_21243_21317[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (34))){
var inst_21164 = (state_21195[(2)]);
var state_21195__$1 = state_21195;
if(cljs.core.truth_(inst_21164)){
var statearr_21244_21318 = state_21195__$1;
(statearr_21244_21318[(1)] = (38));

} else {
var statearr_21245_21319 = state_21195__$1;
(statearr_21245_21319[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (17))){
var state_21195__$1 = state_21195;
var statearr_21246_21320 = state_21195__$1;
(statearr_21246_21320[(2)] = recompile_dependents);

(statearr_21246_21320[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (3))){
var state_21195__$1 = state_21195;
var statearr_21247_21321 = state_21195__$1;
(statearr_21247_21321[(2)] = null);

(statearr_21247_21321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (12))){
var inst_21086 = (state_21195[(2)]);
var state_21195__$1 = state_21195;
var statearr_21248_21322 = state_21195__$1;
(statearr_21248_21322[(2)] = inst_21086);

(statearr_21248_21322[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (2))){
var inst_21048 = (state_21195[(13)]);
var inst_21055 = cljs.core.seq.call(null,inst_21048);
var inst_21056 = inst_21055;
var inst_21057 = null;
var inst_21058 = (0);
var inst_21059 = (0);
var state_21195__$1 = (function (){var statearr_21249 = state_21195;
(statearr_21249[(7)] = inst_21056);

(statearr_21249[(8)] = inst_21058);

(statearr_21249[(9)] = inst_21059);

(statearr_21249[(10)] = inst_21057);

return statearr_21249;
})();
var statearr_21250_21323 = state_21195__$1;
(statearr_21250_21323[(2)] = null);

(statearr_21250_21323[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (23))){
var inst_21109 = (state_21195[(19)]);
var inst_21112 = (state_21195[(23)]);
var inst_21115 = (state_21195[(26)]);
var inst_21113 = (state_21195[(24)]);
var inst_21117 = (state_21195[(25)]);
var inst_21120 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_21122 = (function (){var all_files = inst_21109;
var res_SINGLEQUOTE_ = inst_21112;
var res = inst_21113;
var files_not_loaded = inst_21115;
var dependencies_that_loaded = inst_21117;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21109,inst_21112,inst_21115,inst_21113,inst_21117,inst_21120,state_val_21196,c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21121){
var map__21251 = p__21121;
var map__21251__$1 = ((((!((map__21251 == null)))?((((map__21251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21251):map__21251);
var request_url = cljs.core.get.call(null,map__21251__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21109,inst_21112,inst_21115,inst_21113,inst_21117,inst_21120,state_val_21196,c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21123 = cljs.core.reverse.call(null,inst_21117);
var inst_21124 = cljs.core.map.call(null,inst_21122,inst_21123);
var inst_21125 = cljs.core.pr_str.call(null,inst_21124);
var inst_21126 = figwheel.client.utils.log.call(null,inst_21125);
var state_21195__$1 = (function (){var statearr_21253 = state_21195;
(statearr_21253[(31)] = inst_21120);

return statearr_21253;
})();
var statearr_21254_21324 = state_21195__$1;
(statearr_21254_21324[(2)] = inst_21126);

(statearr_21254_21324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (35))){
var state_21195__$1 = state_21195;
var statearr_21255_21325 = state_21195__$1;
(statearr_21255_21325[(2)] = true);

(statearr_21255_21325[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (19))){
var inst_21099 = (state_21195[(12)]);
var inst_21105 = figwheel.client.file_reloading.expand_files.call(null,inst_21099);
var state_21195__$1 = state_21195;
var statearr_21256_21326 = state_21195__$1;
(statearr_21256_21326[(2)] = inst_21105);

(statearr_21256_21326[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (11))){
var state_21195__$1 = state_21195;
var statearr_21257_21327 = state_21195__$1;
(statearr_21257_21327[(2)] = null);

(statearr_21257_21327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (9))){
var inst_21088 = (state_21195[(2)]);
var state_21195__$1 = state_21195;
var statearr_21258_21328 = state_21195__$1;
(statearr_21258_21328[(2)] = inst_21088);

(statearr_21258_21328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (5))){
var inst_21058 = (state_21195[(8)]);
var inst_21059 = (state_21195[(9)]);
var inst_21061 = (inst_21059 < inst_21058);
var inst_21062 = inst_21061;
var state_21195__$1 = state_21195;
if(cljs.core.truth_(inst_21062)){
var statearr_21259_21329 = state_21195__$1;
(statearr_21259_21329[(1)] = (7));

} else {
var statearr_21260_21330 = state_21195__$1;
(statearr_21260_21330[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (14))){
var inst_21069 = (state_21195[(22)]);
var inst_21078 = cljs.core.first.call(null,inst_21069);
var inst_21079 = figwheel.client.file_reloading.eval_body.call(null,inst_21078,opts);
var inst_21080 = cljs.core.next.call(null,inst_21069);
var inst_21056 = inst_21080;
var inst_21057 = null;
var inst_21058 = (0);
var inst_21059 = (0);
var state_21195__$1 = (function (){var statearr_21261 = state_21195;
(statearr_21261[(32)] = inst_21079);

(statearr_21261[(7)] = inst_21056);

(statearr_21261[(8)] = inst_21058);

(statearr_21261[(9)] = inst_21059);

(statearr_21261[(10)] = inst_21057);

return statearr_21261;
})();
var statearr_21262_21331 = state_21195__$1;
(statearr_21262_21331[(2)] = null);

(statearr_21262_21331[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (45))){
var state_21195__$1 = state_21195;
var statearr_21263_21332 = state_21195__$1;
(statearr_21263_21332[(2)] = null);

(statearr_21263_21332[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (26))){
var inst_21109 = (state_21195[(19)]);
var inst_21112 = (state_21195[(23)]);
var inst_21115 = (state_21195[(26)]);
var inst_21113 = (state_21195[(24)]);
var inst_21117 = (state_21195[(25)]);
var inst_21132 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_21134 = (function (){var all_files = inst_21109;
var res_SINGLEQUOTE_ = inst_21112;
var res = inst_21113;
var files_not_loaded = inst_21115;
var dependencies_that_loaded = inst_21117;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21109,inst_21112,inst_21115,inst_21113,inst_21117,inst_21132,state_val_21196,c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21133){
var map__21264 = p__21133;
var map__21264__$1 = ((((!((map__21264 == null)))?((((map__21264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21264):map__21264);
var namespace = cljs.core.get.call(null,map__21264__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__21264__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21109,inst_21112,inst_21115,inst_21113,inst_21117,inst_21132,state_val_21196,c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21135 = cljs.core.map.call(null,inst_21134,inst_21113);
var inst_21136 = cljs.core.pr_str.call(null,inst_21135);
var inst_21137 = figwheel.client.utils.log.call(null,inst_21136);
var inst_21138 = (function (){var all_files = inst_21109;
var res_SINGLEQUOTE_ = inst_21112;
var res = inst_21113;
var files_not_loaded = inst_21115;
var dependencies_that_loaded = inst_21117;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21109,inst_21112,inst_21115,inst_21113,inst_21117,inst_21132,inst_21134,inst_21135,inst_21136,inst_21137,state_val_21196,c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21109,inst_21112,inst_21115,inst_21113,inst_21117,inst_21132,inst_21134,inst_21135,inst_21136,inst_21137,state_val_21196,c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21139 = setTimeout(inst_21138,(10));
var state_21195__$1 = (function (){var statearr_21266 = state_21195;
(statearr_21266[(33)] = inst_21132);

(statearr_21266[(34)] = inst_21137);

return statearr_21266;
})();
var statearr_21267_21334 = state_21195__$1;
(statearr_21267_21334[(2)] = inst_21139);

(statearr_21267_21334[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (16))){
var state_21195__$1 = state_21195;
var statearr_21268_21335 = state_21195__$1;
(statearr_21268_21335[(2)] = reload_dependents);

(statearr_21268_21335[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (38))){
var inst_21149 = (state_21195[(16)]);
var inst_21166 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21149);
var state_21195__$1 = state_21195;
var statearr_21269_21336 = state_21195__$1;
(statearr_21269_21336[(2)] = inst_21166);

(statearr_21269_21336[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (30))){
var state_21195__$1 = state_21195;
var statearr_21270_21337 = state_21195__$1;
(statearr_21270_21337[(2)] = null);

(statearr_21270_21337[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (10))){
var inst_21069 = (state_21195[(22)]);
var inst_21071 = cljs.core.chunked_seq_QMARK_.call(null,inst_21069);
var state_21195__$1 = state_21195;
if(inst_21071){
var statearr_21271_21338 = state_21195__$1;
(statearr_21271_21338[(1)] = (13));

} else {
var statearr_21272_21339 = state_21195__$1;
(statearr_21272_21339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (18))){
var inst_21103 = (state_21195[(2)]);
var state_21195__$1 = state_21195;
if(cljs.core.truth_(inst_21103)){
var statearr_21273_21340 = state_21195__$1;
(statearr_21273_21340[(1)] = (19));

} else {
var statearr_21274_21341 = state_21195__$1;
(statearr_21274_21341[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (42))){
var state_21195__$1 = state_21195;
var statearr_21275_21342 = state_21195__$1;
(statearr_21275_21342[(2)] = null);

(statearr_21275_21342[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (37))){
var inst_21161 = (state_21195[(2)]);
var state_21195__$1 = state_21195;
var statearr_21276_21343 = state_21195__$1;
(statearr_21276_21343[(2)] = inst_21161);

(statearr_21276_21343[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (8))){
var inst_21056 = (state_21195[(7)]);
var inst_21069 = (state_21195[(22)]);
var inst_21069__$1 = cljs.core.seq.call(null,inst_21056);
var state_21195__$1 = (function (){var statearr_21277 = state_21195;
(statearr_21277[(22)] = inst_21069__$1);

return statearr_21277;
})();
if(inst_21069__$1){
var statearr_21278_21344 = state_21195__$1;
(statearr_21278_21344[(1)] = (10));

} else {
var statearr_21279_21345 = state_21195__$1;
(statearr_21279_21345[(1)] = (11));

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
});})(c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20301__auto__,c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20302__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20302__auto____0 = (function (){
var statearr_21283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21283[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20302__auto__);

(statearr_21283[(1)] = (1));

return statearr_21283;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20302__auto____1 = (function (state_21195){
while(true){
var ret_value__20303__auto__ = (function (){try{while(true){
var result__20304__auto__ = switch__20301__auto__.call(null,state_21195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20304__auto__;
}
break;
}
}catch (e21284){if((e21284 instanceof Object)){
var ex__20305__auto__ = e21284;
var statearr_21285_21346 = state_21195;
(statearr_21285_21346[(5)] = ex__20305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21347 = state_21195;
state_21195 = G__21347;
continue;
} else {
return ret_value__20303__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20302__auto__ = function(state_21195){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20302__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20302__auto____1.call(this,state_21195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20302__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20302__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20302__auto__;
})()
;})(switch__20301__auto__,c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20324__auto__ = (function (){var statearr_21286 = f__20323__auto__.call(null);
(statearr_21286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20322__auto__);

return statearr_21286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20324__auto__);
});})(c__20322__auto__,map__21041,map__21041__$1,opts,before_jsload,on_jsload,reload_dependents,map__21042,map__21042__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20322__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__21350,link){
var map__21353 = p__21350;
var map__21353__$1 = ((((!((map__21353 == null)))?((((map__21353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21353):map__21353);
var file = cljs.core.get.call(null,map__21353__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__21353,map__21353__$1,file){
return (function (p1__21348_SHARP_,p2__21349_SHARP_){
if(cljs.core._EQ_.call(null,p1__21348_SHARP_,p2__21349_SHARP_)){
return p1__21348_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__21353,map__21353__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__21359){
var map__21360 = p__21359;
var map__21360__$1 = ((((!((map__21360 == null)))?((((map__21360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21360):map__21360);
var match_length = cljs.core.get.call(null,map__21360__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__21360__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__21355_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__21355_SHARP_);
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
var args21362 = [];
var len__19330__auto___21365 = arguments.length;
var i__19331__auto___21366 = (0);
while(true){
if((i__19331__auto___21366 < len__19330__auto___21365)){
args21362.push((arguments[i__19331__auto___21366]));

var G__21367 = (i__19331__auto___21366 + (1));
i__19331__auto___21366 = G__21367;
continue;
} else {
}
break;
}

var G__21364 = args21362.length;
switch (G__21364) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21362.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__21369_SHARP_,p2__21370_SHARP_){
return cljs.core.assoc.call(null,p1__21369_SHARP_,cljs.core.get.call(null,p2__21370_SHARP_,key),p2__21370_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__21371){
var map__21374 = p__21371;
var map__21374__$1 = ((((!((map__21374 == null)))?((((map__21374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21374):map__21374);
var f_data = map__21374__$1;
var file = cljs.core.get.call(null,map__21374__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__21376,files_msg){
var map__21383 = p__21376;
var map__21383__$1 = ((((!((map__21383 == null)))?((((map__21383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21383):map__21383);
var opts = map__21383__$1;
var on_cssload = cljs.core.get.call(null,map__21383__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__21385_21389 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__21386_21390 = null;
var count__21387_21391 = (0);
var i__21388_21392 = (0);
while(true){
if((i__21388_21392 < count__21387_21391)){
var f_21393 = cljs.core._nth.call(null,chunk__21386_21390,i__21388_21392);
figwheel.client.file_reloading.reload_css_file.call(null,f_21393);

var G__21394 = seq__21385_21389;
var G__21395 = chunk__21386_21390;
var G__21396 = count__21387_21391;
var G__21397 = (i__21388_21392 + (1));
seq__21385_21389 = G__21394;
chunk__21386_21390 = G__21395;
count__21387_21391 = G__21396;
i__21388_21392 = G__21397;
continue;
} else {
var temp__4425__auto___21398 = cljs.core.seq.call(null,seq__21385_21389);
if(temp__4425__auto___21398){
var seq__21385_21399__$1 = temp__4425__auto___21398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21385_21399__$1)){
var c__19079__auto___21400 = cljs.core.chunk_first.call(null,seq__21385_21399__$1);
var G__21401 = cljs.core.chunk_rest.call(null,seq__21385_21399__$1);
var G__21402 = c__19079__auto___21400;
var G__21403 = cljs.core.count.call(null,c__19079__auto___21400);
var G__21404 = (0);
seq__21385_21389 = G__21401;
chunk__21386_21390 = G__21402;
count__21387_21391 = G__21403;
i__21388_21392 = G__21404;
continue;
} else {
var f_21405 = cljs.core.first.call(null,seq__21385_21399__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_21405);

var G__21406 = cljs.core.next.call(null,seq__21385_21399__$1);
var G__21407 = null;
var G__21408 = (0);
var G__21409 = (0);
seq__21385_21389 = G__21406;
chunk__21386_21390 = G__21407;
count__21387_21391 = G__21408;
i__21388_21392 = G__21409;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__21383,map__21383__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__21383,map__21383__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map