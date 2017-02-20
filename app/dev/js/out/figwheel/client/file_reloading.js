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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__20402_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__20402_SHARP_));
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
var seq__20407 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__20408 = null;
var count__20409 = (0);
var i__20410 = (0);
while(true){
if((i__20410 < count__20409)){
var n = cljs.core._nth.call(null,chunk__20408,i__20410);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__20411 = seq__20407;
var G__20412 = chunk__20408;
var G__20413 = count__20409;
var G__20414 = (i__20410 + (1));
seq__20407 = G__20411;
chunk__20408 = G__20412;
count__20409 = G__20413;
i__20410 = G__20414;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20407);
if(temp__4425__auto__){
var seq__20407__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20407__$1)){
var c__19079__auto__ = cljs.core.chunk_first.call(null,seq__20407__$1);
var G__20415 = cljs.core.chunk_rest.call(null,seq__20407__$1);
var G__20416 = c__19079__auto__;
var G__20417 = cljs.core.count.call(null,c__19079__auto__);
var G__20418 = (0);
seq__20407 = G__20415;
chunk__20408 = G__20416;
count__20409 = G__20417;
i__20410 = G__20418;
continue;
} else {
var n = cljs.core.first.call(null,seq__20407__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__20419 = cljs.core.next.call(null,seq__20407__$1);
var G__20420 = null;
var G__20421 = (0);
var G__20422 = (0);
seq__20407 = G__20419;
chunk__20408 = G__20420;
count__20409 = G__20421;
i__20410 = G__20422;
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

var seq__20461_20468 = cljs.core.seq.call(null,deps);
var chunk__20462_20469 = null;
var count__20463_20470 = (0);
var i__20464_20471 = (0);
while(true){
if((i__20464_20471 < count__20463_20470)){
var dep_20472 = cljs.core._nth.call(null,chunk__20462_20469,i__20464_20471);
topo_sort_helper_STAR_.call(null,dep_20472,(depth + (1)),state);

var G__20473 = seq__20461_20468;
var G__20474 = chunk__20462_20469;
var G__20475 = count__20463_20470;
var G__20476 = (i__20464_20471 + (1));
seq__20461_20468 = G__20473;
chunk__20462_20469 = G__20474;
count__20463_20470 = G__20475;
i__20464_20471 = G__20476;
continue;
} else {
var temp__4425__auto___20477 = cljs.core.seq.call(null,seq__20461_20468);
if(temp__4425__auto___20477){
var seq__20461_20478__$1 = temp__4425__auto___20477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20461_20478__$1)){
var c__19079__auto___20479 = cljs.core.chunk_first.call(null,seq__20461_20478__$1);
var G__20480 = cljs.core.chunk_rest.call(null,seq__20461_20478__$1);
var G__20481 = c__19079__auto___20479;
var G__20482 = cljs.core.count.call(null,c__19079__auto___20479);
var G__20483 = (0);
seq__20461_20468 = G__20480;
chunk__20462_20469 = G__20481;
count__20463_20470 = G__20482;
i__20464_20471 = G__20483;
continue;
} else {
var dep_20484 = cljs.core.first.call(null,seq__20461_20478__$1);
topo_sort_helper_STAR_.call(null,dep_20484,(depth + (1)),state);

var G__20485 = cljs.core.next.call(null,seq__20461_20478__$1);
var G__20486 = null;
var G__20487 = (0);
var G__20488 = (0);
seq__20461_20468 = G__20485;
chunk__20462_20469 = G__20486;
count__20463_20470 = G__20487;
i__20464_20471 = G__20488;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__20465){
var vec__20467 = p__20465;
var x = cljs.core.nth.call(null,vec__20467,(0),null);
var xs = cljs.core.nthnext.call(null,vec__20467,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__20467,x,xs,get_deps__$1){
return (function (p1__20423_SHARP_){
return clojure.set.difference.call(null,p1__20423_SHARP_,x);
});})(vec__20467,x,xs,get_deps__$1))
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
var seq__20501 = cljs.core.seq.call(null,provides);
var chunk__20502 = null;
var count__20503 = (0);
var i__20504 = (0);
while(true){
if((i__20504 < count__20503)){
var prov = cljs.core._nth.call(null,chunk__20502,i__20504);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__20505_20513 = cljs.core.seq.call(null,requires);
var chunk__20506_20514 = null;
var count__20507_20515 = (0);
var i__20508_20516 = (0);
while(true){
if((i__20508_20516 < count__20507_20515)){
var req_20517 = cljs.core._nth.call(null,chunk__20506_20514,i__20508_20516);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20517,prov);

var G__20518 = seq__20505_20513;
var G__20519 = chunk__20506_20514;
var G__20520 = count__20507_20515;
var G__20521 = (i__20508_20516 + (1));
seq__20505_20513 = G__20518;
chunk__20506_20514 = G__20519;
count__20507_20515 = G__20520;
i__20508_20516 = G__20521;
continue;
} else {
var temp__4425__auto___20522 = cljs.core.seq.call(null,seq__20505_20513);
if(temp__4425__auto___20522){
var seq__20505_20523__$1 = temp__4425__auto___20522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20505_20523__$1)){
var c__19079__auto___20524 = cljs.core.chunk_first.call(null,seq__20505_20523__$1);
var G__20525 = cljs.core.chunk_rest.call(null,seq__20505_20523__$1);
var G__20526 = c__19079__auto___20524;
var G__20527 = cljs.core.count.call(null,c__19079__auto___20524);
var G__20528 = (0);
seq__20505_20513 = G__20525;
chunk__20506_20514 = G__20526;
count__20507_20515 = G__20527;
i__20508_20516 = G__20528;
continue;
} else {
var req_20529 = cljs.core.first.call(null,seq__20505_20523__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20529,prov);

var G__20530 = cljs.core.next.call(null,seq__20505_20523__$1);
var G__20531 = null;
var G__20532 = (0);
var G__20533 = (0);
seq__20505_20513 = G__20530;
chunk__20506_20514 = G__20531;
count__20507_20515 = G__20532;
i__20508_20516 = G__20533;
continue;
}
} else {
}
}
break;
}

var G__20534 = seq__20501;
var G__20535 = chunk__20502;
var G__20536 = count__20503;
var G__20537 = (i__20504 + (1));
seq__20501 = G__20534;
chunk__20502 = G__20535;
count__20503 = G__20536;
i__20504 = G__20537;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20501);
if(temp__4425__auto__){
var seq__20501__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20501__$1)){
var c__19079__auto__ = cljs.core.chunk_first.call(null,seq__20501__$1);
var G__20538 = cljs.core.chunk_rest.call(null,seq__20501__$1);
var G__20539 = c__19079__auto__;
var G__20540 = cljs.core.count.call(null,c__19079__auto__);
var G__20541 = (0);
seq__20501 = G__20538;
chunk__20502 = G__20539;
count__20503 = G__20540;
i__20504 = G__20541;
continue;
} else {
var prov = cljs.core.first.call(null,seq__20501__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__20509_20542 = cljs.core.seq.call(null,requires);
var chunk__20510_20543 = null;
var count__20511_20544 = (0);
var i__20512_20545 = (0);
while(true){
if((i__20512_20545 < count__20511_20544)){
var req_20546 = cljs.core._nth.call(null,chunk__20510_20543,i__20512_20545);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20546,prov);

var G__20547 = seq__20509_20542;
var G__20548 = chunk__20510_20543;
var G__20549 = count__20511_20544;
var G__20550 = (i__20512_20545 + (1));
seq__20509_20542 = G__20547;
chunk__20510_20543 = G__20548;
count__20511_20544 = G__20549;
i__20512_20545 = G__20550;
continue;
} else {
var temp__4425__auto___20551__$1 = cljs.core.seq.call(null,seq__20509_20542);
if(temp__4425__auto___20551__$1){
var seq__20509_20552__$1 = temp__4425__auto___20551__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20509_20552__$1)){
var c__19079__auto___20553 = cljs.core.chunk_first.call(null,seq__20509_20552__$1);
var G__20554 = cljs.core.chunk_rest.call(null,seq__20509_20552__$1);
var G__20555 = c__19079__auto___20553;
var G__20556 = cljs.core.count.call(null,c__19079__auto___20553);
var G__20557 = (0);
seq__20509_20542 = G__20554;
chunk__20510_20543 = G__20555;
count__20511_20544 = G__20556;
i__20512_20545 = G__20557;
continue;
} else {
var req_20558 = cljs.core.first.call(null,seq__20509_20552__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20558,prov);

var G__20559 = cljs.core.next.call(null,seq__20509_20552__$1);
var G__20560 = null;
var G__20561 = (0);
var G__20562 = (0);
seq__20509_20542 = G__20559;
chunk__20510_20543 = G__20560;
count__20511_20544 = G__20561;
i__20512_20545 = G__20562;
continue;
}
} else {
}
}
break;
}

var G__20563 = cljs.core.next.call(null,seq__20501__$1);
var G__20564 = null;
var G__20565 = (0);
var G__20566 = (0);
seq__20501 = G__20563;
chunk__20502 = G__20564;
count__20503 = G__20565;
i__20504 = G__20566;
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
var seq__20571_20575 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__20572_20576 = null;
var count__20573_20577 = (0);
var i__20574_20578 = (0);
while(true){
if((i__20574_20578 < count__20573_20577)){
var ns_20579 = cljs.core._nth.call(null,chunk__20572_20576,i__20574_20578);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_20579);

var G__20580 = seq__20571_20575;
var G__20581 = chunk__20572_20576;
var G__20582 = count__20573_20577;
var G__20583 = (i__20574_20578 + (1));
seq__20571_20575 = G__20580;
chunk__20572_20576 = G__20581;
count__20573_20577 = G__20582;
i__20574_20578 = G__20583;
continue;
} else {
var temp__4425__auto___20584 = cljs.core.seq.call(null,seq__20571_20575);
if(temp__4425__auto___20584){
var seq__20571_20585__$1 = temp__4425__auto___20584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20571_20585__$1)){
var c__19079__auto___20586 = cljs.core.chunk_first.call(null,seq__20571_20585__$1);
var G__20587 = cljs.core.chunk_rest.call(null,seq__20571_20585__$1);
var G__20588 = c__19079__auto___20586;
var G__20589 = cljs.core.count.call(null,c__19079__auto___20586);
var G__20590 = (0);
seq__20571_20575 = G__20587;
chunk__20572_20576 = G__20588;
count__20573_20577 = G__20589;
i__20574_20578 = G__20590;
continue;
} else {
var ns_20591 = cljs.core.first.call(null,seq__20571_20585__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_20591);

var G__20592 = cljs.core.next.call(null,seq__20571_20585__$1);
var G__20593 = null;
var G__20594 = (0);
var G__20595 = (0);
seq__20571_20575 = G__20592;
chunk__20572_20576 = G__20593;
count__20573_20577 = G__20594;
i__20574_20578 = G__20595;
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
var G__20596__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__20596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20597__i = 0, G__20597__a = new Array(arguments.length -  0);
while (G__20597__i < G__20597__a.length) {G__20597__a[G__20597__i] = arguments[G__20597__i + 0]; ++G__20597__i;}
  args = new cljs.core.IndexedSeq(G__20597__a,0);
} 
return G__20596__delegate.call(this,args);};
G__20596.cljs$lang$maxFixedArity = 0;
G__20596.cljs$lang$applyTo = (function (arglist__20598){
var args = cljs.core.seq(arglist__20598);
return G__20596__delegate(args);
});
G__20596.cljs$core$IFn$_invoke$arity$variadic = G__20596__delegate;
return G__20596;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__20600 = cljs.core._EQ_;
var expr__20601 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__20600.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__20601))){
var path_parts = ((function (pred__20600,expr__20601){
return (function (p1__20599_SHARP_){
return clojure.string.split.call(null,p1__20599_SHARP_,/[\/\\]/);
});})(pred__20600,expr__20601))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__20600,expr__20601){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e20603){if((e20603 instanceof Error)){
var e = e20603;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e20603;

}
}})());
});
;})(path_parts,sep,root,pred__20600,expr__20601))
} else {
if(cljs.core.truth_(pred__20600.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__20601))){
return ((function (pred__20600,expr__20601){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__20600,expr__20601){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__20600,expr__20601))
);

return deferred.addErrback(((function (deferred,pred__20600,expr__20601){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__20600,expr__20601))
);
});
;})(pred__20600,expr__20601))
} else {
return ((function (pred__20600,expr__20601){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__20600,expr__20601))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__20604,callback){
var map__20607 = p__20604;
var map__20607__$1 = ((((!((map__20607 == null)))?((((map__20607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20607):map__20607);
var file_msg = map__20607__$1;
var request_url = cljs.core.get.call(null,map__20607__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__20607,map__20607__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__20607,map__20607__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__20323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20323__auto__){
return (function (){
var f__20324__auto__ = (function (){var switch__20302__auto__ = ((function (c__20323__auto__){
return (function (state_20631){
var state_val_20632 = (state_20631[(1)]);
if((state_val_20632 === (7))){
var inst_20627 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
var statearr_20633_20653 = state_20631__$1;
(statearr_20633_20653[(2)] = inst_20627);

(statearr_20633_20653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (1))){
var state_20631__$1 = state_20631;
var statearr_20634_20654 = state_20631__$1;
(statearr_20634_20654[(2)] = null);

(statearr_20634_20654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (4))){
var inst_20611 = (state_20631[(7)]);
var inst_20611__$1 = (state_20631[(2)]);
var state_20631__$1 = (function (){var statearr_20635 = state_20631;
(statearr_20635[(7)] = inst_20611__$1);

return statearr_20635;
})();
if(cljs.core.truth_(inst_20611__$1)){
var statearr_20636_20655 = state_20631__$1;
(statearr_20636_20655[(1)] = (5));

} else {
var statearr_20637_20656 = state_20631__$1;
(statearr_20637_20656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (6))){
var state_20631__$1 = state_20631;
var statearr_20638_20657 = state_20631__$1;
(statearr_20638_20657[(2)] = null);

(statearr_20638_20657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (3))){
var inst_20629 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20631__$1,inst_20629);
} else {
if((state_val_20632 === (2))){
var state_20631__$1 = state_20631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20631__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_20632 === (11))){
var inst_20623 = (state_20631[(2)]);
var state_20631__$1 = (function (){var statearr_20639 = state_20631;
(statearr_20639[(8)] = inst_20623);

return statearr_20639;
})();
var statearr_20640_20658 = state_20631__$1;
(statearr_20640_20658[(2)] = null);

(statearr_20640_20658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (9))){
var inst_20617 = (state_20631[(9)]);
var inst_20615 = (state_20631[(10)]);
var inst_20619 = inst_20617.call(null,inst_20615);
var state_20631__$1 = state_20631;
var statearr_20641_20659 = state_20631__$1;
(statearr_20641_20659[(2)] = inst_20619);

(statearr_20641_20659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (5))){
var inst_20611 = (state_20631[(7)]);
var inst_20613 = figwheel.client.file_reloading.blocking_load.call(null,inst_20611);
var state_20631__$1 = state_20631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20631__$1,(8),inst_20613);
} else {
if((state_val_20632 === (10))){
var inst_20615 = (state_20631[(10)]);
var inst_20621 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_20615);
var state_20631__$1 = state_20631;
var statearr_20642_20660 = state_20631__$1;
(statearr_20642_20660[(2)] = inst_20621);

(statearr_20642_20660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (8))){
var inst_20617 = (state_20631[(9)]);
var inst_20611 = (state_20631[(7)]);
var inst_20615 = (state_20631[(2)]);
var inst_20616 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_20617__$1 = cljs.core.get.call(null,inst_20616,inst_20611);
var state_20631__$1 = (function (){var statearr_20643 = state_20631;
(statearr_20643[(9)] = inst_20617__$1);

(statearr_20643[(10)] = inst_20615);

return statearr_20643;
})();
if(cljs.core.truth_(inst_20617__$1)){
var statearr_20644_20661 = state_20631__$1;
(statearr_20644_20661[(1)] = (9));

} else {
var statearr_20645_20662 = state_20631__$1;
(statearr_20645_20662[(1)] = (10));

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
});})(c__20323__auto__))
;
return ((function (switch__20302__auto__,c__20323__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20303__auto__ = null;
var figwheel$client$file_reloading$state_machine__20303__auto____0 = (function (){
var statearr_20649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20649[(0)] = figwheel$client$file_reloading$state_machine__20303__auto__);

(statearr_20649[(1)] = (1));

return statearr_20649;
});
var figwheel$client$file_reloading$state_machine__20303__auto____1 = (function (state_20631){
while(true){
var ret_value__20304__auto__ = (function (){try{while(true){
var result__20305__auto__ = switch__20302__auto__.call(null,state_20631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20305__auto__;
}
break;
}
}catch (e20650){if((e20650 instanceof Object)){
var ex__20306__auto__ = e20650;
var statearr_20651_20663 = state_20631;
(statearr_20651_20663[(5)] = ex__20306__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20664 = state_20631;
state_20631 = G__20664;
continue;
} else {
return ret_value__20304__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20303__auto__ = function(state_20631){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20303__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20303__auto____1.call(this,state_20631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20303__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20303__auto____0;
figwheel$client$file_reloading$state_machine__20303__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20303__auto____1;
return figwheel$client$file_reloading$state_machine__20303__auto__;
})()
;})(switch__20302__auto__,c__20323__auto__))
})();
var state__20325__auto__ = (function (){var statearr_20652 = f__20324__auto__.call(null);
(statearr_20652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20323__auto__);

return statearr_20652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20325__auto__);
});})(c__20323__auto__))
);

return c__20323__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__20665,callback){
var map__20668 = p__20665;
var map__20668__$1 = ((((!((map__20668 == null)))?((((map__20668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20668):map__20668);
var file_msg = map__20668__$1;
var namespace = cljs.core.get.call(null,map__20668__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__20668,map__20668__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__20668,map__20668__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__20670){
var map__20673 = p__20670;
var map__20673__$1 = ((((!((map__20673 == null)))?((((map__20673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20673):map__20673);
var file_msg = map__20673__$1;
var namespace = cljs.core.get.call(null,map__20673__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__20675,callback){
var map__20678 = p__20675;
var map__20678__$1 = ((((!((map__20678 == null)))?((((map__20678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20678):map__20678);
var file_msg = map__20678__$1;
var request_url = cljs.core.get.call(null,map__20678__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__20678__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20323__auto___20766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20323__auto___20766,out){
return (function (){
var f__20324__auto__ = (function (){var switch__20302__auto__ = ((function (c__20323__auto___20766,out){
return (function (state_20748){
var state_val_20749 = (state_20748[(1)]);
if((state_val_20749 === (1))){
var inst_20726 = cljs.core.nth.call(null,files,(0),null);
var inst_20727 = cljs.core.nthnext.call(null,files,(1));
var inst_20728 = files;
var state_20748__$1 = (function (){var statearr_20750 = state_20748;
(statearr_20750[(7)] = inst_20728);

(statearr_20750[(8)] = inst_20726);

(statearr_20750[(9)] = inst_20727);

return statearr_20750;
})();
var statearr_20751_20767 = state_20748__$1;
(statearr_20751_20767[(2)] = null);

(statearr_20751_20767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20749 === (2))){
var inst_20728 = (state_20748[(7)]);
var inst_20731 = (state_20748[(10)]);
var inst_20731__$1 = cljs.core.nth.call(null,inst_20728,(0),null);
var inst_20732 = cljs.core.nthnext.call(null,inst_20728,(1));
var inst_20733 = (inst_20731__$1 == null);
var inst_20734 = cljs.core.not.call(null,inst_20733);
var state_20748__$1 = (function (){var statearr_20752 = state_20748;
(statearr_20752[(11)] = inst_20732);

(statearr_20752[(10)] = inst_20731__$1);

return statearr_20752;
})();
if(inst_20734){
var statearr_20753_20768 = state_20748__$1;
(statearr_20753_20768[(1)] = (4));

} else {
var statearr_20754_20769 = state_20748__$1;
(statearr_20754_20769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20749 === (3))){
var inst_20746 = (state_20748[(2)]);
var state_20748__$1 = state_20748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20748__$1,inst_20746);
} else {
if((state_val_20749 === (4))){
var inst_20731 = (state_20748[(10)]);
var inst_20736 = figwheel.client.file_reloading.reload_js_file.call(null,inst_20731);
var state_20748__$1 = state_20748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20748__$1,(7),inst_20736);
} else {
if((state_val_20749 === (5))){
var inst_20742 = cljs.core.async.close_BANG_.call(null,out);
var state_20748__$1 = state_20748;
var statearr_20755_20770 = state_20748__$1;
(statearr_20755_20770[(2)] = inst_20742);

(statearr_20755_20770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20749 === (6))){
var inst_20744 = (state_20748[(2)]);
var state_20748__$1 = state_20748;
var statearr_20756_20771 = state_20748__$1;
(statearr_20756_20771[(2)] = inst_20744);

(statearr_20756_20771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20749 === (7))){
var inst_20732 = (state_20748[(11)]);
var inst_20738 = (state_20748[(2)]);
var inst_20739 = cljs.core.async.put_BANG_.call(null,out,inst_20738);
var inst_20728 = inst_20732;
var state_20748__$1 = (function (){var statearr_20757 = state_20748;
(statearr_20757[(12)] = inst_20739);

(statearr_20757[(7)] = inst_20728);

return statearr_20757;
})();
var statearr_20758_20772 = state_20748__$1;
(statearr_20758_20772[(2)] = null);

(statearr_20758_20772[(1)] = (2));


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
});})(c__20323__auto___20766,out))
;
return ((function (switch__20302__auto__,c__20323__auto___20766,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20303__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20303__auto____0 = (function (){
var statearr_20762 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20762[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20303__auto__);

(statearr_20762[(1)] = (1));

return statearr_20762;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20303__auto____1 = (function (state_20748){
while(true){
var ret_value__20304__auto__ = (function (){try{while(true){
var result__20305__auto__ = switch__20302__auto__.call(null,state_20748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20305__auto__;
}
break;
}
}catch (e20763){if((e20763 instanceof Object)){
var ex__20306__auto__ = e20763;
var statearr_20764_20773 = state_20748;
(statearr_20764_20773[(5)] = ex__20306__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20774 = state_20748;
state_20748 = G__20774;
continue;
} else {
return ret_value__20304__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20303__auto__ = function(state_20748){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20303__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20303__auto____1.call(this,state_20748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20303__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20303__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20303__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20303__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20303__auto__;
})()
;})(switch__20302__auto__,c__20323__auto___20766,out))
})();
var state__20325__auto__ = (function (){var statearr_20765 = f__20324__auto__.call(null);
(statearr_20765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20323__auto___20766);

return statearr_20765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20325__auto__);
});})(c__20323__auto___20766,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__20775,opts){
var map__20779 = p__20775;
var map__20779__$1 = ((((!((map__20779 == null)))?((((map__20779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20779):map__20779);
var eval_body__$1 = cljs.core.get.call(null,map__20779__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__20779__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e20781){var e = e20781;
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
return (function (p1__20782_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__20782_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__20787){
var vec__20788 = p__20787;
var k = cljs.core.nth.call(null,vec__20788,(0),null);
var v = cljs.core.nth.call(null,vec__20788,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__20789){
var vec__20790 = p__20789;
var k = cljs.core.nth.call(null,vec__20790,(0),null);
var v = cljs.core.nth.call(null,vec__20790,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__20794,p__20795){
var map__21042 = p__20794;
var map__21042__$1 = ((((!((map__21042 == null)))?((((map__21042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21042):map__21042);
var opts = map__21042__$1;
var before_jsload = cljs.core.get.call(null,map__21042__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__21042__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__21042__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__21043 = p__20795;
var map__21043__$1 = ((((!((map__21043 == null)))?((((map__21043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21043):map__21043);
var msg = map__21043__$1;
var files = cljs.core.get.call(null,map__21043__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__21043__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__21043__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20324__auto__ = (function (){var switch__20302__auto__ = ((function (c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_21196){
var state_val_21197 = (state_21196[(1)]);
if((state_val_21197 === (7))){
var inst_21058 = (state_21196[(7)]);
var inst_21059 = (state_21196[(8)]);
var inst_21057 = (state_21196[(9)]);
var inst_21060 = (state_21196[(10)]);
var inst_21065 = cljs.core._nth.call(null,inst_21058,inst_21060);
var inst_21066 = figwheel.client.file_reloading.eval_body.call(null,inst_21065,opts);
var inst_21067 = (inst_21060 + (1));
var tmp21198 = inst_21058;
var tmp21199 = inst_21059;
var tmp21200 = inst_21057;
var inst_21057__$1 = tmp21200;
var inst_21058__$1 = tmp21198;
var inst_21059__$1 = tmp21199;
var inst_21060__$1 = inst_21067;
var state_21196__$1 = (function (){var statearr_21201 = state_21196;
(statearr_21201[(7)] = inst_21058__$1);

(statearr_21201[(8)] = inst_21059__$1);

(statearr_21201[(11)] = inst_21066);

(statearr_21201[(9)] = inst_21057__$1);

(statearr_21201[(10)] = inst_21060__$1);

return statearr_21201;
})();
var statearr_21202_21288 = state_21196__$1;
(statearr_21202_21288[(2)] = null);

(statearr_21202_21288[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (20))){
var inst_21100 = (state_21196[(12)]);
var inst_21108 = figwheel.client.file_reloading.sort_files.call(null,inst_21100);
var state_21196__$1 = state_21196;
var statearr_21203_21289 = state_21196__$1;
(statearr_21203_21289[(2)] = inst_21108);

(statearr_21203_21289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (27))){
var state_21196__$1 = state_21196;
var statearr_21204_21290 = state_21196__$1;
(statearr_21204_21290[(2)] = null);

(statearr_21204_21290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (1))){
var inst_21049 = (state_21196[(13)]);
var inst_21046 = before_jsload.call(null,files);
var inst_21047 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_21048 = (function (){return ((function (inst_21049,inst_21046,inst_21047,state_val_21197,c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20791_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__20791_SHARP_);
});
;})(inst_21049,inst_21046,inst_21047,state_val_21197,c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21049__$1 = cljs.core.filter.call(null,inst_21048,files);
var inst_21050 = cljs.core.not_empty.call(null,inst_21049__$1);
var state_21196__$1 = (function (){var statearr_21205 = state_21196;
(statearr_21205[(14)] = inst_21047);

(statearr_21205[(13)] = inst_21049__$1);

(statearr_21205[(15)] = inst_21046);

return statearr_21205;
})();
if(cljs.core.truth_(inst_21050)){
var statearr_21206_21291 = state_21196__$1;
(statearr_21206_21291[(1)] = (2));

} else {
var statearr_21207_21292 = state_21196__$1;
(statearr_21207_21292[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (24))){
var state_21196__$1 = state_21196;
var statearr_21208_21293 = state_21196__$1;
(statearr_21208_21293[(2)] = null);

(statearr_21208_21293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (39))){
var inst_21150 = (state_21196[(16)]);
var state_21196__$1 = state_21196;
var statearr_21209_21294 = state_21196__$1;
(statearr_21209_21294[(2)] = inst_21150);

(statearr_21209_21294[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (46))){
var inst_21191 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
var statearr_21210_21295 = state_21196__$1;
(statearr_21210_21295[(2)] = inst_21191);

(statearr_21210_21295[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (4))){
var inst_21094 = (state_21196[(2)]);
var inst_21095 = cljs.core.List.EMPTY;
var inst_21096 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_21095);
var inst_21097 = (function (){return ((function (inst_21094,inst_21095,inst_21096,state_val_21197,c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20792_SHARP_){
var and__18264__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__20792_SHARP_);
if(cljs.core.truth_(and__18264__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__20792_SHARP_));
} else {
return and__18264__auto__;
}
});
;})(inst_21094,inst_21095,inst_21096,state_val_21197,c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21098 = cljs.core.filter.call(null,inst_21097,files);
var inst_21099 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_21100 = cljs.core.concat.call(null,inst_21098,inst_21099);
var state_21196__$1 = (function (){var statearr_21211 = state_21196;
(statearr_21211[(17)] = inst_21094);

(statearr_21211[(18)] = inst_21096);

(statearr_21211[(12)] = inst_21100);

return statearr_21211;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_21212_21296 = state_21196__$1;
(statearr_21212_21296[(1)] = (16));

} else {
var statearr_21213_21297 = state_21196__$1;
(statearr_21213_21297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (15))){
var inst_21084 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
var statearr_21214_21298 = state_21196__$1;
(statearr_21214_21298[(2)] = inst_21084);

(statearr_21214_21298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (21))){
var inst_21110 = (state_21196[(19)]);
var inst_21110__$1 = (state_21196[(2)]);
var inst_21111 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_21110__$1);
var state_21196__$1 = (function (){var statearr_21215 = state_21196;
(statearr_21215[(19)] = inst_21110__$1);

return statearr_21215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21196__$1,(22),inst_21111);
} else {
if((state_val_21197 === (31))){
var inst_21194 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21196__$1,inst_21194);
} else {
if((state_val_21197 === (32))){
var inst_21150 = (state_21196[(16)]);
var inst_21155 = inst_21150.cljs$lang$protocol_mask$partition0$;
var inst_21156 = (inst_21155 & (64));
var inst_21157 = inst_21150.cljs$core$ISeq$;
var inst_21158 = (inst_21156) || (inst_21157);
var state_21196__$1 = state_21196;
if(cljs.core.truth_(inst_21158)){
var statearr_21216_21299 = state_21196__$1;
(statearr_21216_21299[(1)] = (35));

} else {
var statearr_21217_21300 = state_21196__$1;
(statearr_21217_21300[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (40))){
var inst_21171 = (state_21196[(20)]);
var inst_21170 = (state_21196[(2)]);
var inst_21171__$1 = cljs.core.get.call(null,inst_21170,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_21172 = cljs.core.get.call(null,inst_21170,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_21173 = cljs.core.not_empty.call(null,inst_21171__$1);
var state_21196__$1 = (function (){var statearr_21218 = state_21196;
(statearr_21218[(21)] = inst_21172);

(statearr_21218[(20)] = inst_21171__$1);

return statearr_21218;
})();
if(cljs.core.truth_(inst_21173)){
var statearr_21219_21301 = state_21196__$1;
(statearr_21219_21301[(1)] = (41));

} else {
var statearr_21220_21302 = state_21196__$1;
(statearr_21220_21302[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (33))){
var state_21196__$1 = state_21196;
var statearr_21221_21303 = state_21196__$1;
(statearr_21221_21303[(2)] = false);

(statearr_21221_21303[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (13))){
var inst_21070 = (state_21196[(22)]);
var inst_21074 = cljs.core.chunk_first.call(null,inst_21070);
var inst_21075 = cljs.core.chunk_rest.call(null,inst_21070);
var inst_21076 = cljs.core.count.call(null,inst_21074);
var inst_21057 = inst_21075;
var inst_21058 = inst_21074;
var inst_21059 = inst_21076;
var inst_21060 = (0);
var state_21196__$1 = (function (){var statearr_21222 = state_21196;
(statearr_21222[(7)] = inst_21058);

(statearr_21222[(8)] = inst_21059);

(statearr_21222[(9)] = inst_21057);

(statearr_21222[(10)] = inst_21060);

return statearr_21222;
})();
var statearr_21223_21304 = state_21196__$1;
(statearr_21223_21304[(2)] = null);

(statearr_21223_21304[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (22))){
var inst_21118 = (state_21196[(23)]);
var inst_21113 = (state_21196[(24)]);
var inst_21110 = (state_21196[(19)]);
var inst_21114 = (state_21196[(25)]);
var inst_21113__$1 = (state_21196[(2)]);
var inst_21114__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21113__$1);
var inst_21115 = (function (){var all_files = inst_21110;
var res_SINGLEQUOTE_ = inst_21113__$1;
var res = inst_21114__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_21118,inst_21113,inst_21110,inst_21114,inst_21113__$1,inst_21114__$1,state_val_21197,c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20793_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__20793_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_21118,inst_21113,inst_21110,inst_21114,inst_21113__$1,inst_21114__$1,state_val_21197,c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21116 = cljs.core.filter.call(null,inst_21115,inst_21113__$1);
var inst_21117 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_21118__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21117);
var inst_21119 = cljs.core.not_empty.call(null,inst_21118__$1);
var state_21196__$1 = (function (){var statearr_21224 = state_21196;
(statearr_21224[(23)] = inst_21118__$1);

(statearr_21224[(24)] = inst_21113__$1);

(statearr_21224[(26)] = inst_21116);

(statearr_21224[(25)] = inst_21114__$1);

return statearr_21224;
})();
if(cljs.core.truth_(inst_21119)){
var statearr_21225_21305 = state_21196__$1;
(statearr_21225_21305[(1)] = (23));

} else {
var statearr_21226_21306 = state_21196__$1;
(statearr_21226_21306[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (36))){
var state_21196__$1 = state_21196;
var statearr_21227_21307 = state_21196__$1;
(statearr_21227_21307[(2)] = false);

(statearr_21227_21307[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (41))){
var inst_21171 = (state_21196[(20)]);
var inst_21175 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_21176 = cljs.core.map.call(null,inst_21175,inst_21171);
var inst_21177 = cljs.core.pr_str.call(null,inst_21176);
var inst_21178 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_21177)].join('');
var inst_21179 = figwheel.client.utils.log.call(null,inst_21178);
var state_21196__$1 = state_21196;
var statearr_21228_21308 = state_21196__$1;
(statearr_21228_21308[(2)] = inst_21179);

(statearr_21228_21308[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (43))){
var inst_21172 = (state_21196[(21)]);
var inst_21182 = (state_21196[(2)]);
var inst_21183 = cljs.core.not_empty.call(null,inst_21172);
var state_21196__$1 = (function (){var statearr_21229 = state_21196;
(statearr_21229[(27)] = inst_21182);

return statearr_21229;
})();
if(cljs.core.truth_(inst_21183)){
var statearr_21230_21309 = state_21196__$1;
(statearr_21230_21309[(1)] = (44));

} else {
var statearr_21231_21310 = state_21196__$1;
(statearr_21231_21310[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (29))){
var inst_21118 = (state_21196[(23)]);
var inst_21113 = (state_21196[(24)]);
var inst_21150 = (state_21196[(16)]);
var inst_21110 = (state_21196[(19)]);
var inst_21116 = (state_21196[(26)]);
var inst_21114 = (state_21196[(25)]);
var inst_21146 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_21149 = (function (){var all_files = inst_21110;
var res_SINGLEQUOTE_ = inst_21113;
var res = inst_21114;
var files_not_loaded = inst_21116;
var dependencies_that_loaded = inst_21118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21118,inst_21113,inst_21150,inst_21110,inst_21116,inst_21114,inst_21146,state_val_21197,c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21148){
var map__21232 = p__21148;
var map__21232__$1 = ((((!((map__21232 == null)))?((((map__21232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21232):map__21232);
var namespace = cljs.core.get.call(null,map__21232__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21118,inst_21113,inst_21150,inst_21110,inst_21116,inst_21114,inst_21146,state_val_21197,c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21150__$1 = cljs.core.group_by.call(null,inst_21149,inst_21116);
var inst_21152 = (inst_21150__$1 == null);
var inst_21153 = cljs.core.not.call(null,inst_21152);
var state_21196__$1 = (function (){var statearr_21234 = state_21196;
(statearr_21234[(28)] = inst_21146);

(statearr_21234[(16)] = inst_21150__$1);

return statearr_21234;
})();
if(inst_21153){
var statearr_21235_21311 = state_21196__$1;
(statearr_21235_21311[(1)] = (32));

} else {
var statearr_21236_21312 = state_21196__$1;
(statearr_21236_21312[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (44))){
var inst_21172 = (state_21196[(21)]);
var inst_21185 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21172);
var inst_21186 = cljs.core.pr_str.call(null,inst_21185);
var inst_21187 = [cljs.core.str("not required: "),cljs.core.str(inst_21186)].join('');
var inst_21188 = figwheel.client.utils.log.call(null,inst_21187);
var state_21196__$1 = state_21196;
var statearr_21237_21313 = state_21196__$1;
(statearr_21237_21313[(2)] = inst_21188);

(statearr_21237_21313[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (6))){
var inst_21091 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
var statearr_21238_21314 = state_21196__$1;
(statearr_21238_21314[(2)] = inst_21091);

(statearr_21238_21314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (28))){
var inst_21116 = (state_21196[(26)]);
var inst_21143 = (state_21196[(2)]);
var inst_21144 = cljs.core.not_empty.call(null,inst_21116);
var state_21196__$1 = (function (){var statearr_21239 = state_21196;
(statearr_21239[(29)] = inst_21143);

return statearr_21239;
})();
if(cljs.core.truth_(inst_21144)){
var statearr_21240_21315 = state_21196__$1;
(statearr_21240_21315[(1)] = (29));

} else {
var statearr_21241_21316 = state_21196__$1;
(statearr_21241_21316[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (25))){
var inst_21114 = (state_21196[(25)]);
var inst_21130 = (state_21196[(2)]);
var inst_21131 = cljs.core.not_empty.call(null,inst_21114);
var state_21196__$1 = (function (){var statearr_21242 = state_21196;
(statearr_21242[(30)] = inst_21130);

return statearr_21242;
})();
if(cljs.core.truth_(inst_21131)){
var statearr_21243_21317 = state_21196__$1;
(statearr_21243_21317[(1)] = (26));

} else {
var statearr_21244_21318 = state_21196__$1;
(statearr_21244_21318[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (34))){
var inst_21165 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
if(cljs.core.truth_(inst_21165)){
var statearr_21245_21319 = state_21196__$1;
(statearr_21245_21319[(1)] = (38));

} else {
var statearr_21246_21320 = state_21196__$1;
(statearr_21246_21320[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (17))){
var state_21196__$1 = state_21196;
var statearr_21247_21321 = state_21196__$1;
(statearr_21247_21321[(2)] = recompile_dependents);

(statearr_21247_21321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (3))){
var state_21196__$1 = state_21196;
var statearr_21248_21322 = state_21196__$1;
(statearr_21248_21322[(2)] = null);

(statearr_21248_21322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (12))){
var inst_21087 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
var statearr_21249_21323 = state_21196__$1;
(statearr_21249_21323[(2)] = inst_21087);

(statearr_21249_21323[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (2))){
var inst_21049 = (state_21196[(13)]);
var inst_21056 = cljs.core.seq.call(null,inst_21049);
var inst_21057 = inst_21056;
var inst_21058 = null;
var inst_21059 = (0);
var inst_21060 = (0);
var state_21196__$1 = (function (){var statearr_21250 = state_21196;
(statearr_21250[(7)] = inst_21058);

(statearr_21250[(8)] = inst_21059);

(statearr_21250[(9)] = inst_21057);

(statearr_21250[(10)] = inst_21060);

return statearr_21250;
})();
var statearr_21251_21324 = state_21196__$1;
(statearr_21251_21324[(2)] = null);

(statearr_21251_21324[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (23))){
var inst_21118 = (state_21196[(23)]);
var inst_21113 = (state_21196[(24)]);
var inst_21110 = (state_21196[(19)]);
var inst_21116 = (state_21196[(26)]);
var inst_21114 = (state_21196[(25)]);
var inst_21121 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_21123 = (function (){var all_files = inst_21110;
var res_SINGLEQUOTE_ = inst_21113;
var res = inst_21114;
var files_not_loaded = inst_21116;
var dependencies_that_loaded = inst_21118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21118,inst_21113,inst_21110,inst_21116,inst_21114,inst_21121,state_val_21197,c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21122){
var map__21252 = p__21122;
var map__21252__$1 = ((((!((map__21252 == null)))?((((map__21252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21252):map__21252);
var request_url = cljs.core.get.call(null,map__21252__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21118,inst_21113,inst_21110,inst_21116,inst_21114,inst_21121,state_val_21197,c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21124 = cljs.core.reverse.call(null,inst_21118);
var inst_21125 = cljs.core.map.call(null,inst_21123,inst_21124);
var inst_21126 = cljs.core.pr_str.call(null,inst_21125);
var inst_21127 = figwheel.client.utils.log.call(null,inst_21126);
var state_21196__$1 = (function (){var statearr_21254 = state_21196;
(statearr_21254[(31)] = inst_21121);

return statearr_21254;
})();
var statearr_21255_21325 = state_21196__$1;
(statearr_21255_21325[(2)] = inst_21127);

(statearr_21255_21325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (35))){
var state_21196__$1 = state_21196;
var statearr_21256_21326 = state_21196__$1;
(statearr_21256_21326[(2)] = true);

(statearr_21256_21326[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (19))){
var inst_21100 = (state_21196[(12)]);
var inst_21106 = figwheel.client.file_reloading.expand_files.call(null,inst_21100);
var state_21196__$1 = state_21196;
var statearr_21257_21327 = state_21196__$1;
(statearr_21257_21327[(2)] = inst_21106);

(statearr_21257_21327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (11))){
var state_21196__$1 = state_21196;
var statearr_21258_21328 = state_21196__$1;
(statearr_21258_21328[(2)] = null);

(statearr_21258_21328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (9))){
var inst_21089 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
var statearr_21259_21329 = state_21196__$1;
(statearr_21259_21329[(2)] = inst_21089);

(statearr_21259_21329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (5))){
var inst_21059 = (state_21196[(8)]);
var inst_21060 = (state_21196[(10)]);
var inst_21062 = (inst_21060 < inst_21059);
var inst_21063 = inst_21062;
var state_21196__$1 = state_21196;
if(cljs.core.truth_(inst_21063)){
var statearr_21260_21330 = state_21196__$1;
(statearr_21260_21330[(1)] = (7));

} else {
var statearr_21261_21331 = state_21196__$1;
(statearr_21261_21331[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (14))){
var inst_21070 = (state_21196[(22)]);
var inst_21079 = cljs.core.first.call(null,inst_21070);
var inst_21080 = figwheel.client.file_reloading.eval_body.call(null,inst_21079,opts);
var inst_21081 = cljs.core.next.call(null,inst_21070);
var inst_21057 = inst_21081;
var inst_21058 = null;
var inst_21059 = (0);
var inst_21060 = (0);
var state_21196__$1 = (function (){var statearr_21262 = state_21196;
(statearr_21262[(7)] = inst_21058);

(statearr_21262[(8)] = inst_21059);

(statearr_21262[(9)] = inst_21057);

(statearr_21262[(10)] = inst_21060);

(statearr_21262[(32)] = inst_21080);

return statearr_21262;
})();
var statearr_21263_21332 = state_21196__$1;
(statearr_21263_21332[(2)] = null);

(statearr_21263_21332[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (45))){
var state_21196__$1 = state_21196;
var statearr_21264_21333 = state_21196__$1;
(statearr_21264_21333[(2)] = null);

(statearr_21264_21333[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (26))){
var inst_21118 = (state_21196[(23)]);
var inst_21113 = (state_21196[(24)]);
var inst_21110 = (state_21196[(19)]);
var inst_21116 = (state_21196[(26)]);
var inst_21114 = (state_21196[(25)]);
var inst_21133 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_21135 = (function (){var all_files = inst_21110;
var res_SINGLEQUOTE_ = inst_21113;
var res = inst_21114;
var files_not_loaded = inst_21116;
var dependencies_that_loaded = inst_21118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21118,inst_21113,inst_21110,inst_21116,inst_21114,inst_21133,state_val_21197,c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21134){
var map__21265 = p__21134;
var map__21265__$1 = ((((!((map__21265 == null)))?((((map__21265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21265):map__21265);
var namespace = cljs.core.get.call(null,map__21265__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__21265__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21118,inst_21113,inst_21110,inst_21116,inst_21114,inst_21133,state_val_21197,c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21136 = cljs.core.map.call(null,inst_21135,inst_21114);
var inst_21137 = cljs.core.pr_str.call(null,inst_21136);
var inst_21138 = figwheel.client.utils.log.call(null,inst_21137);
var inst_21139 = (function (){var all_files = inst_21110;
var res_SINGLEQUOTE_ = inst_21113;
var res = inst_21114;
var files_not_loaded = inst_21116;
var dependencies_that_loaded = inst_21118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21118,inst_21113,inst_21110,inst_21116,inst_21114,inst_21133,inst_21135,inst_21136,inst_21137,inst_21138,state_val_21197,c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21118,inst_21113,inst_21110,inst_21116,inst_21114,inst_21133,inst_21135,inst_21136,inst_21137,inst_21138,state_val_21197,c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21140 = setTimeout(inst_21139,(10));
var state_21196__$1 = (function (){var statearr_21267 = state_21196;
(statearr_21267[(33)] = inst_21138);

(statearr_21267[(34)] = inst_21133);

return statearr_21267;
})();
var statearr_21268_21334 = state_21196__$1;
(statearr_21268_21334[(2)] = inst_21140);

(statearr_21268_21334[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (16))){
var state_21196__$1 = state_21196;
var statearr_21269_21335 = state_21196__$1;
(statearr_21269_21335[(2)] = reload_dependents);

(statearr_21269_21335[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (38))){
var inst_21150 = (state_21196[(16)]);
var inst_21167 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21150);
var state_21196__$1 = state_21196;
var statearr_21270_21336 = state_21196__$1;
(statearr_21270_21336[(2)] = inst_21167);

(statearr_21270_21336[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (30))){
var state_21196__$1 = state_21196;
var statearr_21271_21337 = state_21196__$1;
(statearr_21271_21337[(2)] = null);

(statearr_21271_21337[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (10))){
var inst_21070 = (state_21196[(22)]);
var inst_21072 = cljs.core.chunked_seq_QMARK_.call(null,inst_21070);
var state_21196__$1 = state_21196;
if(inst_21072){
var statearr_21272_21338 = state_21196__$1;
(statearr_21272_21338[(1)] = (13));

} else {
var statearr_21273_21339 = state_21196__$1;
(statearr_21273_21339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (18))){
var inst_21104 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
if(cljs.core.truth_(inst_21104)){
var statearr_21274_21340 = state_21196__$1;
(statearr_21274_21340[(1)] = (19));

} else {
var statearr_21275_21341 = state_21196__$1;
(statearr_21275_21341[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (42))){
var state_21196__$1 = state_21196;
var statearr_21276_21342 = state_21196__$1;
(statearr_21276_21342[(2)] = null);

(statearr_21276_21342[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (37))){
var inst_21162 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
var statearr_21277_21343 = state_21196__$1;
(statearr_21277_21343[(2)] = inst_21162);

(statearr_21277_21343[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (8))){
var inst_21057 = (state_21196[(9)]);
var inst_21070 = (state_21196[(22)]);
var inst_21070__$1 = cljs.core.seq.call(null,inst_21057);
var state_21196__$1 = (function (){var statearr_21278 = state_21196;
(statearr_21278[(22)] = inst_21070__$1);

return statearr_21278;
})();
if(inst_21070__$1){
var statearr_21279_21344 = state_21196__$1;
(statearr_21279_21344[(1)] = (10));

} else {
var statearr_21280_21345 = state_21196__$1;
(statearr_21280_21345[(1)] = (11));

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
});})(c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20302__auto__,c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20303__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20303__auto____0 = (function (){
var statearr_21284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21284[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20303__auto__);

(statearr_21284[(1)] = (1));

return statearr_21284;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20303__auto____1 = (function (state_21196){
while(true){
var ret_value__20304__auto__ = (function (){try{while(true){
var result__20305__auto__ = switch__20302__auto__.call(null,state_21196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20305__auto__;
}
break;
}
}catch (e21285){if((e21285 instanceof Object)){
var ex__20306__auto__ = e21285;
var statearr_21286_21346 = state_21196;
(statearr_21286_21346[(5)] = ex__20306__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21347 = state_21196;
state_21196 = G__21347;
continue;
} else {
return ret_value__20304__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20303__auto__ = function(state_21196){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20303__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20303__auto____1.call(this,state_21196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20303__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20303__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20303__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20303__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20303__auto__;
})()
;})(switch__20302__auto__,c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20325__auto__ = (function (){var statearr_21287 = f__20324__auto__.call(null);
(statearr_21287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20323__auto__);

return statearr_21287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20325__auto__);
});})(c__20323__auto__,map__21042,map__21042__$1,opts,before_jsload,on_jsload,reload_dependents,map__21043,map__21043__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20323__auto__;
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