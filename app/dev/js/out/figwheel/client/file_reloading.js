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
var or__6142__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__6142__auto__){
return or__6142__auto__;
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
var or__6142__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__8572_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__8572_SHARP_));
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
var seq__8577 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__8578 = null;
var count__8579 = (0);
var i__8580 = (0);
while(true){
if((i__8580 < count__8579)){
var n = cljs.core._nth.call(null,chunk__8578,i__8580);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__8581 = seq__8577;
var G__8582 = chunk__8578;
var G__8583 = count__8579;
var G__8584 = (i__8580 + (1));
seq__8577 = G__8581;
chunk__8578 = G__8582;
count__8579 = G__8583;
i__8580 = G__8584;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8577);
if(temp__4425__auto__){
var seq__8577__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8577__$1)){
var c__6945__auto__ = cljs.core.chunk_first.call(null,seq__8577__$1);
var G__8585 = cljs.core.chunk_rest.call(null,seq__8577__$1);
var G__8586 = c__6945__auto__;
var G__8587 = cljs.core.count.call(null,c__6945__auto__);
var G__8588 = (0);
seq__8577 = G__8585;
chunk__8578 = G__8586;
count__8579 = G__8587;
i__8580 = G__8588;
continue;
} else {
var n = cljs.core.first.call(null,seq__8577__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__8589 = cljs.core.next.call(null,seq__8577__$1);
var G__8590 = null;
var G__8591 = (0);
var G__8592 = (0);
seq__8577 = G__8589;
chunk__8578 = G__8590;
count__8579 = G__8591;
i__8580 = G__8592;
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

var seq__8631_8638 = cljs.core.seq.call(null,deps);
var chunk__8632_8639 = null;
var count__8633_8640 = (0);
var i__8634_8641 = (0);
while(true){
if((i__8634_8641 < count__8633_8640)){
var dep_8642 = cljs.core._nth.call(null,chunk__8632_8639,i__8634_8641);
topo_sort_helper_STAR_.call(null,dep_8642,(depth + (1)),state);

var G__8643 = seq__8631_8638;
var G__8644 = chunk__8632_8639;
var G__8645 = count__8633_8640;
var G__8646 = (i__8634_8641 + (1));
seq__8631_8638 = G__8643;
chunk__8632_8639 = G__8644;
count__8633_8640 = G__8645;
i__8634_8641 = G__8646;
continue;
} else {
var temp__4425__auto___8647 = cljs.core.seq.call(null,seq__8631_8638);
if(temp__4425__auto___8647){
var seq__8631_8648__$1 = temp__4425__auto___8647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8631_8648__$1)){
var c__6945__auto___8649 = cljs.core.chunk_first.call(null,seq__8631_8648__$1);
var G__8650 = cljs.core.chunk_rest.call(null,seq__8631_8648__$1);
var G__8651 = c__6945__auto___8649;
var G__8652 = cljs.core.count.call(null,c__6945__auto___8649);
var G__8653 = (0);
seq__8631_8638 = G__8650;
chunk__8632_8639 = G__8651;
count__8633_8640 = G__8652;
i__8634_8641 = G__8653;
continue;
} else {
var dep_8654 = cljs.core.first.call(null,seq__8631_8648__$1);
topo_sort_helper_STAR_.call(null,dep_8654,(depth + (1)),state);

var G__8655 = cljs.core.next.call(null,seq__8631_8648__$1);
var G__8656 = null;
var G__8657 = (0);
var G__8658 = (0);
seq__8631_8638 = G__8655;
chunk__8632_8639 = G__8656;
count__8633_8640 = G__8657;
i__8634_8641 = G__8658;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__8635){
var vec__8637 = p__8635;
var x = cljs.core.nth.call(null,vec__8637,(0),null);
var xs = cljs.core.nthnext.call(null,vec__8637,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__8637,x,xs,get_deps__$1){
return (function (p1__8593_SHARP_){
return clojure.set.difference.call(null,p1__8593_SHARP_,x);
});})(vec__8637,x,xs,get_deps__$1))
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
var seq__8671 = cljs.core.seq.call(null,provides);
var chunk__8672 = null;
var count__8673 = (0);
var i__8674 = (0);
while(true){
if((i__8674 < count__8673)){
var prov = cljs.core._nth.call(null,chunk__8672,i__8674);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__8675_8683 = cljs.core.seq.call(null,requires);
var chunk__8676_8684 = null;
var count__8677_8685 = (0);
var i__8678_8686 = (0);
while(true){
if((i__8678_8686 < count__8677_8685)){
var req_8687 = cljs.core._nth.call(null,chunk__8676_8684,i__8678_8686);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_8687,prov);

var G__8688 = seq__8675_8683;
var G__8689 = chunk__8676_8684;
var G__8690 = count__8677_8685;
var G__8691 = (i__8678_8686 + (1));
seq__8675_8683 = G__8688;
chunk__8676_8684 = G__8689;
count__8677_8685 = G__8690;
i__8678_8686 = G__8691;
continue;
} else {
var temp__4425__auto___8692 = cljs.core.seq.call(null,seq__8675_8683);
if(temp__4425__auto___8692){
var seq__8675_8693__$1 = temp__4425__auto___8692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8675_8693__$1)){
var c__6945__auto___8694 = cljs.core.chunk_first.call(null,seq__8675_8693__$1);
var G__8695 = cljs.core.chunk_rest.call(null,seq__8675_8693__$1);
var G__8696 = c__6945__auto___8694;
var G__8697 = cljs.core.count.call(null,c__6945__auto___8694);
var G__8698 = (0);
seq__8675_8683 = G__8695;
chunk__8676_8684 = G__8696;
count__8677_8685 = G__8697;
i__8678_8686 = G__8698;
continue;
} else {
var req_8699 = cljs.core.first.call(null,seq__8675_8693__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_8699,prov);

var G__8700 = cljs.core.next.call(null,seq__8675_8693__$1);
var G__8701 = null;
var G__8702 = (0);
var G__8703 = (0);
seq__8675_8683 = G__8700;
chunk__8676_8684 = G__8701;
count__8677_8685 = G__8702;
i__8678_8686 = G__8703;
continue;
}
} else {
}
}
break;
}

var G__8704 = seq__8671;
var G__8705 = chunk__8672;
var G__8706 = count__8673;
var G__8707 = (i__8674 + (1));
seq__8671 = G__8704;
chunk__8672 = G__8705;
count__8673 = G__8706;
i__8674 = G__8707;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8671);
if(temp__4425__auto__){
var seq__8671__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8671__$1)){
var c__6945__auto__ = cljs.core.chunk_first.call(null,seq__8671__$1);
var G__8708 = cljs.core.chunk_rest.call(null,seq__8671__$1);
var G__8709 = c__6945__auto__;
var G__8710 = cljs.core.count.call(null,c__6945__auto__);
var G__8711 = (0);
seq__8671 = G__8708;
chunk__8672 = G__8709;
count__8673 = G__8710;
i__8674 = G__8711;
continue;
} else {
var prov = cljs.core.first.call(null,seq__8671__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__8679_8712 = cljs.core.seq.call(null,requires);
var chunk__8680_8713 = null;
var count__8681_8714 = (0);
var i__8682_8715 = (0);
while(true){
if((i__8682_8715 < count__8681_8714)){
var req_8716 = cljs.core._nth.call(null,chunk__8680_8713,i__8682_8715);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_8716,prov);

var G__8717 = seq__8679_8712;
var G__8718 = chunk__8680_8713;
var G__8719 = count__8681_8714;
var G__8720 = (i__8682_8715 + (1));
seq__8679_8712 = G__8717;
chunk__8680_8713 = G__8718;
count__8681_8714 = G__8719;
i__8682_8715 = G__8720;
continue;
} else {
var temp__4425__auto___8721__$1 = cljs.core.seq.call(null,seq__8679_8712);
if(temp__4425__auto___8721__$1){
var seq__8679_8722__$1 = temp__4425__auto___8721__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8679_8722__$1)){
var c__6945__auto___8723 = cljs.core.chunk_first.call(null,seq__8679_8722__$1);
var G__8724 = cljs.core.chunk_rest.call(null,seq__8679_8722__$1);
var G__8725 = c__6945__auto___8723;
var G__8726 = cljs.core.count.call(null,c__6945__auto___8723);
var G__8727 = (0);
seq__8679_8712 = G__8724;
chunk__8680_8713 = G__8725;
count__8681_8714 = G__8726;
i__8682_8715 = G__8727;
continue;
} else {
var req_8728 = cljs.core.first.call(null,seq__8679_8722__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_8728,prov);

var G__8729 = cljs.core.next.call(null,seq__8679_8722__$1);
var G__8730 = null;
var G__8731 = (0);
var G__8732 = (0);
seq__8679_8712 = G__8729;
chunk__8680_8713 = G__8730;
count__8681_8714 = G__8731;
i__8682_8715 = G__8732;
continue;
}
} else {
}
}
break;
}

var G__8733 = cljs.core.next.call(null,seq__8671__$1);
var G__8734 = null;
var G__8735 = (0);
var G__8736 = (0);
seq__8671 = G__8733;
chunk__8672 = G__8734;
count__8673 = G__8735;
i__8674 = G__8736;
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
var seq__8741_8745 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__8742_8746 = null;
var count__8743_8747 = (0);
var i__8744_8748 = (0);
while(true){
if((i__8744_8748 < count__8743_8747)){
var ns_8749 = cljs.core._nth.call(null,chunk__8742_8746,i__8744_8748);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_8749);

var G__8750 = seq__8741_8745;
var G__8751 = chunk__8742_8746;
var G__8752 = count__8743_8747;
var G__8753 = (i__8744_8748 + (1));
seq__8741_8745 = G__8750;
chunk__8742_8746 = G__8751;
count__8743_8747 = G__8752;
i__8744_8748 = G__8753;
continue;
} else {
var temp__4425__auto___8754 = cljs.core.seq.call(null,seq__8741_8745);
if(temp__4425__auto___8754){
var seq__8741_8755__$1 = temp__4425__auto___8754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8741_8755__$1)){
var c__6945__auto___8756 = cljs.core.chunk_first.call(null,seq__8741_8755__$1);
var G__8757 = cljs.core.chunk_rest.call(null,seq__8741_8755__$1);
var G__8758 = c__6945__auto___8756;
var G__8759 = cljs.core.count.call(null,c__6945__auto___8756);
var G__8760 = (0);
seq__8741_8745 = G__8757;
chunk__8742_8746 = G__8758;
count__8743_8747 = G__8759;
i__8744_8748 = G__8760;
continue;
} else {
var ns_8761 = cljs.core.first.call(null,seq__8741_8755__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_8761);

var G__8762 = cljs.core.next.call(null,seq__8741_8755__$1);
var G__8763 = null;
var G__8764 = (0);
var G__8765 = (0);
seq__8741_8745 = G__8762;
chunk__8742_8746 = G__8763;
count__8743_8747 = G__8764;
i__8744_8748 = G__8765;
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
goog.require_figwheel_backup_ = (function (){var or__6142__auto__ = goog.require__;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
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
var G__8766__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__8766 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8767__i = 0, G__8767__a = new Array(arguments.length -  0);
while (G__8767__i < G__8767__a.length) {G__8767__a[G__8767__i] = arguments[G__8767__i + 0]; ++G__8767__i;}
  args = new cljs.core.IndexedSeq(G__8767__a,0);
} 
return G__8766__delegate.call(this,args);};
G__8766.cljs$lang$maxFixedArity = 0;
G__8766.cljs$lang$applyTo = (function (arglist__8768){
var args = cljs.core.seq(arglist__8768);
return G__8766__delegate(args);
});
G__8766.cljs$core$IFn$_invoke$arity$variadic = G__8766__delegate;
return G__8766;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__8769 = cljs.core._EQ_;
var expr__8770 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__8769.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__8770))){
return ((function (pred__8769,expr__8770){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e8772){if((e8772 instanceof Error)){
var e = e8772;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e8772;

}
}})());
});
;})(pred__8769,expr__8770))
} else {
if(cljs.core.truth_(pred__8769.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__8770))){
return ((function (pred__8769,expr__8770){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__8769,expr__8770){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__8769,expr__8770))
);

return deferred.addErrback(((function (deferred,pred__8769,expr__8770){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__8769,expr__8770))
);
});
;})(pred__8769,expr__8770))
} else {
return ((function (pred__8769,expr__8770){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__8769,expr__8770))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__8773,callback){
var map__8776 = p__8773;
var map__8776__$1 = ((((!((map__8776 == null)))?((((map__8776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8776):map__8776);
var file_msg = map__8776__$1;
var request_url = cljs.core.get.call(null,map__8776__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__8776,map__8776__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__8776,map__8776__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__8493__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8493__auto__){
return (function (){
var f__8494__auto__ = (function (){var switch__8472__auto__ = ((function (c__8493__auto__){
return (function (state_8800){
var state_val_8801 = (state_8800[(1)]);
if((state_val_8801 === (7))){
var inst_8796 = (state_8800[(2)]);
var state_8800__$1 = state_8800;
var statearr_8802_8822 = state_8800__$1;
(statearr_8802_8822[(2)] = inst_8796);

(statearr_8802_8822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (1))){
var state_8800__$1 = state_8800;
var statearr_8803_8823 = state_8800__$1;
(statearr_8803_8823[(2)] = null);

(statearr_8803_8823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (4))){
var inst_8780 = (state_8800[(7)]);
var inst_8780__$1 = (state_8800[(2)]);
var state_8800__$1 = (function (){var statearr_8804 = state_8800;
(statearr_8804[(7)] = inst_8780__$1);

return statearr_8804;
})();
if(cljs.core.truth_(inst_8780__$1)){
var statearr_8805_8824 = state_8800__$1;
(statearr_8805_8824[(1)] = (5));

} else {
var statearr_8806_8825 = state_8800__$1;
(statearr_8806_8825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (6))){
var state_8800__$1 = state_8800;
var statearr_8807_8826 = state_8800__$1;
(statearr_8807_8826[(2)] = null);

(statearr_8807_8826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (3))){
var inst_8798 = (state_8800[(2)]);
var state_8800__$1 = state_8800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8800__$1,inst_8798);
} else {
if((state_val_8801 === (2))){
var state_8800__$1 = state_8800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8800__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_8801 === (11))){
var inst_8792 = (state_8800[(2)]);
var state_8800__$1 = (function (){var statearr_8808 = state_8800;
(statearr_8808[(8)] = inst_8792);

return statearr_8808;
})();
var statearr_8809_8827 = state_8800__$1;
(statearr_8809_8827[(2)] = null);

(statearr_8809_8827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (9))){
var inst_8786 = (state_8800[(9)]);
var inst_8784 = (state_8800[(10)]);
var inst_8788 = inst_8786.call(null,inst_8784);
var state_8800__$1 = state_8800;
var statearr_8810_8828 = state_8800__$1;
(statearr_8810_8828[(2)] = inst_8788);

(statearr_8810_8828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (5))){
var inst_8780 = (state_8800[(7)]);
var inst_8782 = figwheel.client.file_reloading.blocking_load.call(null,inst_8780);
var state_8800__$1 = state_8800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8800__$1,(8),inst_8782);
} else {
if((state_val_8801 === (10))){
var inst_8784 = (state_8800[(10)]);
var inst_8790 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_8784);
var state_8800__$1 = state_8800;
var statearr_8811_8829 = state_8800__$1;
(statearr_8811_8829[(2)] = inst_8790);

(statearr_8811_8829[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8801 === (8))){
var inst_8780 = (state_8800[(7)]);
var inst_8786 = (state_8800[(9)]);
var inst_8784 = (state_8800[(2)]);
var inst_8785 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_8786__$1 = cljs.core.get.call(null,inst_8785,inst_8780);
var state_8800__$1 = (function (){var statearr_8812 = state_8800;
(statearr_8812[(9)] = inst_8786__$1);

(statearr_8812[(10)] = inst_8784);

return statearr_8812;
})();
if(cljs.core.truth_(inst_8786__$1)){
var statearr_8813_8830 = state_8800__$1;
(statearr_8813_8830[(1)] = (9));

} else {
var statearr_8814_8831 = state_8800__$1;
(statearr_8814_8831[(1)] = (10));

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
});})(c__8493__auto__))
;
return ((function (switch__8472__auto__,c__8493__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__8473__auto__ = null;
var figwheel$client$file_reloading$state_machine__8473__auto____0 = (function (){
var statearr_8818 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8818[(0)] = figwheel$client$file_reloading$state_machine__8473__auto__);

(statearr_8818[(1)] = (1));

return statearr_8818;
});
var figwheel$client$file_reloading$state_machine__8473__auto____1 = (function (state_8800){
while(true){
var ret_value__8474__auto__ = (function (){try{while(true){
var result__8475__auto__ = switch__8472__auto__.call(null,state_8800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8475__auto__;
}
break;
}
}catch (e8819){if((e8819 instanceof Object)){
var ex__8476__auto__ = e8819;
var statearr_8820_8832 = state_8800;
(statearr_8820_8832[(5)] = ex__8476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8833 = state_8800;
state_8800 = G__8833;
continue;
} else {
return ret_value__8474__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__8473__auto__ = function(state_8800){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__8473__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__8473__auto____1.call(this,state_8800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__8473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__8473__auto____0;
figwheel$client$file_reloading$state_machine__8473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__8473__auto____1;
return figwheel$client$file_reloading$state_machine__8473__auto__;
})()
;})(switch__8472__auto__,c__8493__auto__))
})();
var state__8495__auto__ = (function (){var statearr_8821 = f__8494__auto__.call(null);
(statearr_8821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8493__auto__);

return statearr_8821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8495__auto__);
});})(c__8493__auto__))
);

return c__8493__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__8834,callback){
var map__8837 = p__8834;
var map__8837__$1 = ((((!((map__8837 == null)))?((((map__8837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8837):map__8837);
var file_msg = map__8837__$1;
var namespace = cljs.core.get.call(null,map__8837__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__8837,map__8837__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__8837,map__8837__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__8839){
var map__8842 = p__8839;
var map__8842__$1 = ((((!((map__8842 == null)))?((((map__8842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8842):map__8842);
var file_msg = map__8842__$1;
var namespace = cljs.core.get.call(null,map__8842__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__6130__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__6130__auto__){
var or__6142__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
var or__6142__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__6142__auto____$1)){
return or__6142__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__6130__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__8844,callback){
var map__8847 = p__8844;
var map__8847__$1 = ((((!((map__8847 == null)))?((((map__8847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8847):map__8847);
var file_msg = map__8847__$1;
var request_url = cljs.core.get.call(null,map__8847__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__8847__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__8493__auto___8935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8493__auto___8935,out){
return (function (){
var f__8494__auto__ = (function (){var switch__8472__auto__ = ((function (c__8493__auto___8935,out){
return (function (state_8917){
var state_val_8918 = (state_8917[(1)]);
if((state_val_8918 === (1))){
var inst_8895 = cljs.core.nth.call(null,files,(0),null);
var inst_8896 = cljs.core.nthnext.call(null,files,(1));
var inst_8897 = files;
var state_8917__$1 = (function (){var statearr_8919 = state_8917;
(statearr_8919[(7)] = inst_8897);

(statearr_8919[(8)] = inst_8896);

(statearr_8919[(9)] = inst_8895);

return statearr_8919;
})();
var statearr_8920_8936 = state_8917__$1;
(statearr_8920_8936[(2)] = null);

(statearr_8920_8936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8918 === (2))){
var inst_8900 = (state_8917[(10)]);
var inst_8897 = (state_8917[(7)]);
var inst_8900__$1 = cljs.core.nth.call(null,inst_8897,(0),null);
var inst_8901 = cljs.core.nthnext.call(null,inst_8897,(1));
var inst_8902 = (inst_8900__$1 == null);
var inst_8903 = cljs.core.not.call(null,inst_8902);
var state_8917__$1 = (function (){var statearr_8921 = state_8917;
(statearr_8921[(10)] = inst_8900__$1);

(statearr_8921[(11)] = inst_8901);

return statearr_8921;
})();
if(inst_8903){
var statearr_8922_8937 = state_8917__$1;
(statearr_8922_8937[(1)] = (4));

} else {
var statearr_8923_8938 = state_8917__$1;
(statearr_8923_8938[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8918 === (3))){
var inst_8915 = (state_8917[(2)]);
var state_8917__$1 = state_8917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8917__$1,inst_8915);
} else {
if((state_val_8918 === (4))){
var inst_8900 = (state_8917[(10)]);
var inst_8905 = figwheel.client.file_reloading.reload_js_file.call(null,inst_8900);
var state_8917__$1 = state_8917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8917__$1,(7),inst_8905);
} else {
if((state_val_8918 === (5))){
var inst_8911 = cljs.core.async.close_BANG_.call(null,out);
var state_8917__$1 = state_8917;
var statearr_8924_8939 = state_8917__$1;
(statearr_8924_8939[(2)] = inst_8911);

(statearr_8924_8939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8918 === (6))){
var inst_8913 = (state_8917[(2)]);
var state_8917__$1 = state_8917;
var statearr_8925_8940 = state_8917__$1;
(statearr_8925_8940[(2)] = inst_8913);

(statearr_8925_8940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8918 === (7))){
var inst_8901 = (state_8917[(11)]);
var inst_8907 = (state_8917[(2)]);
var inst_8908 = cljs.core.async.put_BANG_.call(null,out,inst_8907);
var inst_8897 = inst_8901;
var state_8917__$1 = (function (){var statearr_8926 = state_8917;
(statearr_8926[(7)] = inst_8897);

(statearr_8926[(12)] = inst_8908);

return statearr_8926;
})();
var statearr_8927_8941 = state_8917__$1;
(statearr_8927_8941[(2)] = null);

(statearr_8927_8941[(1)] = (2));


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
});})(c__8493__auto___8935,out))
;
return ((function (switch__8472__auto__,c__8493__auto___8935,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__8473__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__8473__auto____0 = (function (){
var statearr_8931 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8931[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__8473__auto__);

(statearr_8931[(1)] = (1));

return statearr_8931;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__8473__auto____1 = (function (state_8917){
while(true){
var ret_value__8474__auto__ = (function (){try{while(true){
var result__8475__auto__ = switch__8472__auto__.call(null,state_8917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8475__auto__;
}
break;
}
}catch (e8932){if((e8932 instanceof Object)){
var ex__8476__auto__ = e8932;
var statearr_8933_8942 = state_8917;
(statearr_8933_8942[(5)] = ex__8476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8943 = state_8917;
state_8917 = G__8943;
continue;
} else {
return ret_value__8474__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__8473__auto__ = function(state_8917){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__8473__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__8473__auto____1.call(this,state_8917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__8473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__8473__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__8473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__8473__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__8473__auto__;
})()
;})(switch__8472__auto__,c__8493__auto___8935,out))
})();
var state__8495__auto__ = (function (){var statearr_8934 = f__8494__auto__.call(null);
(statearr_8934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8493__auto___8935);

return statearr_8934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8495__auto__);
});})(c__8493__auto___8935,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__8944,opts){
var map__8948 = p__8944;
var map__8948__$1 = ((((!((map__8948 == null)))?((((map__8948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8948):map__8948);
var eval_body__$1 = cljs.core.get.call(null,map__8948__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__8948__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__6130__auto__ = eval_body__$1;
if(cljs.core.truth_(and__6130__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__6130__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e8950){var e = e8950;
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
return (function (p1__8951_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__8951_SHARP_),n);
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
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__8956){
var vec__8957 = p__8956;
var k = cljs.core.nth.call(null,vec__8957,(0),null);
var v = cljs.core.nth.call(null,vec__8957,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__8958){
var vec__8959 = p__8958;
var k = cljs.core.nth.call(null,vec__8959,(0),null);
var v = cljs.core.nth.call(null,vec__8959,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__8963,p__8964){
var map__9211 = p__8963;
var map__9211__$1 = ((((!((map__9211 == null)))?((((map__9211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9211):map__9211);
var opts = map__9211__$1;
var before_jsload = cljs.core.get.call(null,map__9211__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__9211__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__9211__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__9212 = p__8964;
var map__9212__$1 = ((((!((map__9212 == null)))?((((map__9212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9212):map__9212);
var msg = map__9212__$1;
var files = cljs.core.get.call(null,map__9212__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__9212__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__9212__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__8493__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__8494__auto__ = (function (){var switch__8472__auto__ = ((function (c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_9365){
var state_val_9366 = (state_9365[(1)]);
if((state_val_9366 === (7))){
var inst_9228 = (state_9365[(7)]);
var inst_9227 = (state_9365[(8)]);
var inst_9229 = (state_9365[(9)]);
var inst_9226 = (state_9365[(10)]);
var inst_9234 = cljs.core._nth.call(null,inst_9227,inst_9229);
var inst_9235 = figwheel.client.file_reloading.eval_body.call(null,inst_9234,opts);
var inst_9236 = (inst_9229 + (1));
var tmp9367 = inst_9228;
var tmp9368 = inst_9227;
var tmp9369 = inst_9226;
var inst_9226__$1 = tmp9369;
var inst_9227__$1 = tmp9368;
var inst_9228__$1 = tmp9367;
var inst_9229__$1 = inst_9236;
var state_9365__$1 = (function (){var statearr_9370 = state_9365;
(statearr_9370[(7)] = inst_9228__$1);

(statearr_9370[(11)] = inst_9235);

(statearr_9370[(8)] = inst_9227__$1);

(statearr_9370[(9)] = inst_9229__$1);

(statearr_9370[(10)] = inst_9226__$1);

return statearr_9370;
})();
var statearr_9371_9457 = state_9365__$1;
(statearr_9371_9457[(2)] = null);

(statearr_9371_9457[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (20))){
var inst_9269 = (state_9365[(12)]);
var inst_9277 = figwheel.client.file_reloading.sort_files.call(null,inst_9269);
var state_9365__$1 = state_9365;
var statearr_9372_9458 = state_9365__$1;
(statearr_9372_9458[(2)] = inst_9277);

(statearr_9372_9458[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (27))){
var state_9365__$1 = state_9365;
var statearr_9373_9459 = state_9365__$1;
(statearr_9373_9459[(2)] = null);

(statearr_9373_9459[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (1))){
var inst_9218 = (state_9365[(13)]);
var inst_9215 = before_jsload.call(null,files);
var inst_9216 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_9217 = (function (){return ((function (inst_9218,inst_9215,inst_9216,state_val_9366,c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__8960_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__8960_SHARP_);
});
;})(inst_9218,inst_9215,inst_9216,state_val_9366,c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9218__$1 = cljs.core.filter.call(null,inst_9217,files);
var inst_9219 = cljs.core.not_empty.call(null,inst_9218__$1);
var state_9365__$1 = (function (){var statearr_9374 = state_9365;
(statearr_9374[(13)] = inst_9218__$1);

(statearr_9374[(14)] = inst_9215);

(statearr_9374[(15)] = inst_9216);

return statearr_9374;
})();
if(cljs.core.truth_(inst_9219)){
var statearr_9375_9460 = state_9365__$1;
(statearr_9375_9460[(1)] = (2));

} else {
var statearr_9376_9461 = state_9365__$1;
(statearr_9376_9461[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (24))){
var state_9365__$1 = state_9365;
var statearr_9377_9462 = state_9365__$1;
(statearr_9377_9462[(2)] = null);

(statearr_9377_9462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (39))){
var inst_9319 = (state_9365[(16)]);
var state_9365__$1 = state_9365;
var statearr_9378_9463 = state_9365__$1;
(statearr_9378_9463[(2)] = inst_9319);

(statearr_9378_9463[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (46))){
var inst_9360 = (state_9365[(2)]);
var state_9365__$1 = state_9365;
var statearr_9379_9464 = state_9365__$1;
(statearr_9379_9464[(2)] = inst_9360);

(statearr_9379_9464[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (4))){
var inst_9263 = (state_9365[(2)]);
var inst_9264 = cljs.core.List.EMPTY;
var inst_9265 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_9264);
var inst_9266 = (function (){return ((function (inst_9263,inst_9264,inst_9265,state_val_9366,c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__8961_SHARP_){
var and__6130__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__8961_SHARP_);
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__8961_SHARP_));
} else {
return and__6130__auto__;
}
});
;})(inst_9263,inst_9264,inst_9265,state_val_9366,c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9267 = cljs.core.filter.call(null,inst_9266,files);
var inst_9268 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_9269 = cljs.core.concat.call(null,inst_9267,inst_9268);
var state_9365__$1 = (function (){var statearr_9380 = state_9365;
(statearr_9380[(12)] = inst_9269);

(statearr_9380[(17)] = inst_9263);

(statearr_9380[(18)] = inst_9265);

return statearr_9380;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_9381_9465 = state_9365__$1;
(statearr_9381_9465[(1)] = (16));

} else {
var statearr_9382_9466 = state_9365__$1;
(statearr_9382_9466[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (15))){
var inst_9253 = (state_9365[(2)]);
var state_9365__$1 = state_9365;
var statearr_9383_9467 = state_9365__$1;
(statearr_9383_9467[(2)] = inst_9253);

(statearr_9383_9467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (21))){
var inst_9279 = (state_9365[(19)]);
var inst_9279__$1 = (state_9365[(2)]);
var inst_9280 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_9279__$1);
var state_9365__$1 = (function (){var statearr_9384 = state_9365;
(statearr_9384[(19)] = inst_9279__$1);

return statearr_9384;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9365__$1,(22),inst_9280);
} else {
if((state_val_9366 === (31))){
var inst_9363 = (state_9365[(2)]);
var state_9365__$1 = state_9365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9365__$1,inst_9363);
} else {
if((state_val_9366 === (32))){
var inst_9319 = (state_9365[(16)]);
var inst_9324 = inst_9319.cljs$lang$protocol_mask$partition0$;
var inst_9325 = (inst_9324 & (64));
var inst_9326 = inst_9319.cljs$core$ISeq$;
var inst_9327 = (inst_9325) || (inst_9326);
var state_9365__$1 = state_9365;
if(cljs.core.truth_(inst_9327)){
var statearr_9385_9468 = state_9365__$1;
(statearr_9385_9468[(1)] = (35));

} else {
var statearr_9386_9469 = state_9365__$1;
(statearr_9386_9469[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (40))){
var inst_9340 = (state_9365[(20)]);
var inst_9339 = (state_9365[(2)]);
var inst_9340__$1 = cljs.core.get.call(null,inst_9339,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_9341 = cljs.core.get.call(null,inst_9339,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_9342 = cljs.core.not_empty.call(null,inst_9340__$1);
var state_9365__$1 = (function (){var statearr_9387 = state_9365;
(statearr_9387[(20)] = inst_9340__$1);

(statearr_9387[(21)] = inst_9341);

return statearr_9387;
})();
if(cljs.core.truth_(inst_9342)){
var statearr_9388_9470 = state_9365__$1;
(statearr_9388_9470[(1)] = (41));

} else {
var statearr_9389_9471 = state_9365__$1;
(statearr_9389_9471[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (33))){
var state_9365__$1 = state_9365;
var statearr_9390_9472 = state_9365__$1;
(statearr_9390_9472[(2)] = false);

(statearr_9390_9472[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (13))){
var inst_9239 = (state_9365[(22)]);
var inst_9243 = cljs.core.chunk_first.call(null,inst_9239);
var inst_9244 = cljs.core.chunk_rest.call(null,inst_9239);
var inst_9245 = cljs.core.count.call(null,inst_9243);
var inst_9226 = inst_9244;
var inst_9227 = inst_9243;
var inst_9228 = inst_9245;
var inst_9229 = (0);
var state_9365__$1 = (function (){var statearr_9391 = state_9365;
(statearr_9391[(7)] = inst_9228);

(statearr_9391[(8)] = inst_9227);

(statearr_9391[(9)] = inst_9229);

(statearr_9391[(10)] = inst_9226);

return statearr_9391;
})();
var statearr_9392_9473 = state_9365__$1;
(statearr_9392_9473[(2)] = null);

(statearr_9392_9473[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (22))){
var inst_9283 = (state_9365[(23)]);
var inst_9287 = (state_9365[(24)]);
var inst_9279 = (state_9365[(19)]);
var inst_9282 = (state_9365[(25)]);
var inst_9282__$1 = (state_9365[(2)]);
var inst_9283__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_9282__$1);
var inst_9284 = (function (){var all_files = inst_9279;
var res_SINGLEQUOTE_ = inst_9282__$1;
var res = inst_9283__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_9283,inst_9287,inst_9279,inst_9282,inst_9282__$1,inst_9283__$1,state_val_9366,c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__8962_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__8962_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_9283,inst_9287,inst_9279,inst_9282,inst_9282__$1,inst_9283__$1,state_val_9366,c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9285 = cljs.core.filter.call(null,inst_9284,inst_9282__$1);
var inst_9286 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_9287__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_9286);
var inst_9288 = cljs.core.not_empty.call(null,inst_9287__$1);
var state_9365__$1 = (function (){var statearr_9393 = state_9365;
(statearr_9393[(23)] = inst_9283__$1);

(statearr_9393[(24)] = inst_9287__$1);

(statearr_9393[(25)] = inst_9282__$1);

(statearr_9393[(26)] = inst_9285);

return statearr_9393;
})();
if(cljs.core.truth_(inst_9288)){
var statearr_9394_9474 = state_9365__$1;
(statearr_9394_9474[(1)] = (23));

} else {
var statearr_9395_9475 = state_9365__$1;
(statearr_9395_9475[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (36))){
var state_9365__$1 = state_9365;
var statearr_9396_9476 = state_9365__$1;
(statearr_9396_9476[(2)] = false);

(statearr_9396_9476[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (41))){
var inst_9340 = (state_9365[(20)]);
var inst_9344 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_9345 = cljs.core.map.call(null,inst_9344,inst_9340);
var inst_9346 = cljs.core.pr_str.call(null,inst_9345);
var inst_9347 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_9346)].join('');
var inst_9348 = figwheel.client.utils.log.call(null,inst_9347);
var state_9365__$1 = state_9365;
var statearr_9397_9477 = state_9365__$1;
(statearr_9397_9477[(2)] = inst_9348);

(statearr_9397_9477[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (43))){
var inst_9341 = (state_9365[(21)]);
var inst_9351 = (state_9365[(2)]);
var inst_9352 = cljs.core.not_empty.call(null,inst_9341);
var state_9365__$1 = (function (){var statearr_9398 = state_9365;
(statearr_9398[(27)] = inst_9351);

return statearr_9398;
})();
if(cljs.core.truth_(inst_9352)){
var statearr_9399_9478 = state_9365__$1;
(statearr_9399_9478[(1)] = (44));

} else {
var statearr_9400_9479 = state_9365__$1;
(statearr_9400_9479[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (29))){
var inst_9283 = (state_9365[(23)]);
var inst_9319 = (state_9365[(16)]);
var inst_9287 = (state_9365[(24)]);
var inst_9279 = (state_9365[(19)]);
var inst_9282 = (state_9365[(25)]);
var inst_9285 = (state_9365[(26)]);
var inst_9315 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_9318 = (function (){var all_files = inst_9279;
var res_SINGLEQUOTE_ = inst_9282;
var res = inst_9283;
var files_not_loaded = inst_9285;
var dependencies_that_loaded = inst_9287;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9283,inst_9319,inst_9287,inst_9279,inst_9282,inst_9285,inst_9315,state_val_9366,c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__9317){
var map__9401 = p__9317;
var map__9401__$1 = ((((!((map__9401 == null)))?((((map__9401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9401):map__9401);
var namespace = cljs.core.get.call(null,map__9401__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9283,inst_9319,inst_9287,inst_9279,inst_9282,inst_9285,inst_9315,state_val_9366,c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9319__$1 = cljs.core.group_by.call(null,inst_9318,inst_9285);
var inst_9321 = (inst_9319__$1 == null);
var inst_9322 = cljs.core.not.call(null,inst_9321);
var state_9365__$1 = (function (){var statearr_9403 = state_9365;
(statearr_9403[(28)] = inst_9315);

(statearr_9403[(16)] = inst_9319__$1);

return statearr_9403;
})();
if(inst_9322){
var statearr_9404_9480 = state_9365__$1;
(statearr_9404_9480[(1)] = (32));

} else {
var statearr_9405_9481 = state_9365__$1;
(statearr_9405_9481[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (44))){
var inst_9341 = (state_9365[(21)]);
var inst_9354 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_9341);
var inst_9355 = cljs.core.pr_str.call(null,inst_9354);
var inst_9356 = [cljs.core.str("not required: "),cljs.core.str(inst_9355)].join('');
var inst_9357 = figwheel.client.utils.log.call(null,inst_9356);
var state_9365__$1 = state_9365;
var statearr_9406_9482 = state_9365__$1;
(statearr_9406_9482[(2)] = inst_9357);

(statearr_9406_9482[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (6))){
var inst_9260 = (state_9365[(2)]);
var state_9365__$1 = state_9365;
var statearr_9407_9483 = state_9365__$1;
(statearr_9407_9483[(2)] = inst_9260);

(statearr_9407_9483[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (28))){
var inst_9285 = (state_9365[(26)]);
var inst_9312 = (state_9365[(2)]);
var inst_9313 = cljs.core.not_empty.call(null,inst_9285);
var state_9365__$1 = (function (){var statearr_9408 = state_9365;
(statearr_9408[(29)] = inst_9312);

return statearr_9408;
})();
if(cljs.core.truth_(inst_9313)){
var statearr_9409_9484 = state_9365__$1;
(statearr_9409_9484[(1)] = (29));

} else {
var statearr_9410_9485 = state_9365__$1;
(statearr_9410_9485[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (25))){
var inst_9283 = (state_9365[(23)]);
var inst_9299 = (state_9365[(2)]);
var inst_9300 = cljs.core.not_empty.call(null,inst_9283);
var state_9365__$1 = (function (){var statearr_9411 = state_9365;
(statearr_9411[(30)] = inst_9299);

return statearr_9411;
})();
if(cljs.core.truth_(inst_9300)){
var statearr_9412_9486 = state_9365__$1;
(statearr_9412_9486[(1)] = (26));

} else {
var statearr_9413_9487 = state_9365__$1;
(statearr_9413_9487[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (34))){
var inst_9334 = (state_9365[(2)]);
var state_9365__$1 = state_9365;
if(cljs.core.truth_(inst_9334)){
var statearr_9414_9488 = state_9365__$1;
(statearr_9414_9488[(1)] = (38));

} else {
var statearr_9415_9489 = state_9365__$1;
(statearr_9415_9489[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (17))){
var state_9365__$1 = state_9365;
var statearr_9416_9490 = state_9365__$1;
(statearr_9416_9490[(2)] = recompile_dependents);

(statearr_9416_9490[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (3))){
var state_9365__$1 = state_9365;
var statearr_9417_9491 = state_9365__$1;
(statearr_9417_9491[(2)] = null);

(statearr_9417_9491[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (12))){
var inst_9256 = (state_9365[(2)]);
var state_9365__$1 = state_9365;
var statearr_9418_9492 = state_9365__$1;
(statearr_9418_9492[(2)] = inst_9256);

(statearr_9418_9492[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (2))){
var inst_9218 = (state_9365[(13)]);
var inst_9225 = cljs.core.seq.call(null,inst_9218);
var inst_9226 = inst_9225;
var inst_9227 = null;
var inst_9228 = (0);
var inst_9229 = (0);
var state_9365__$1 = (function (){var statearr_9419 = state_9365;
(statearr_9419[(7)] = inst_9228);

(statearr_9419[(8)] = inst_9227);

(statearr_9419[(9)] = inst_9229);

(statearr_9419[(10)] = inst_9226);

return statearr_9419;
})();
var statearr_9420_9493 = state_9365__$1;
(statearr_9420_9493[(2)] = null);

(statearr_9420_9493[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (23))){
var inst_9283 = (state_9365[(23)]);
var inst_9287 = (state_9365[(24)]);
var inst_9279 = (state_9365[(19)]);
var inst_9282 = (state_9365[(25)]);
var inst_9285 = (state_9365[(26)]);
var inst_9290 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_9292 = (function (){var all_files = inst_9279;
var res_SINGLEQUOTE_ = inst_9282;
var res = inst_9283;
var files_not_loaded = inst_9285;
var dependencies_that_loaded = inst_9287;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9283,inst_9287,inst_9279,inst_9282,inst_9285,inst_9290,state_val_9366,c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__9291){
var map__9421 = p__9291;
var map__9421__$1 = ((((!((map__9421 == null)))?((((map__9421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9421):map__9421);
var request_url = cljs.core.get.call(null,map__9421__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9283,inst_9287,inst_9279,inst_9282,inst_9285,inst_9290,state_val_9366,c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9293 = cljs.core.reverse.call(null,inst_9287);
var inst_9294 = cljs.core.map.call(null,inst_9292,inst_9293);
var inst_9295 = cljs.core.pr_str.call(null,inst_9294);
var inst_9296 = figwheel.client.utils.log.call(null,inst_9295);
var state_9365__$1 = (function (){var statearr_9423 = state_9365;
(statearr_9423[(31)] = inst_9290);

return statearr_9423;
})();
var statearr_9424_9494 = state_9365__$1;
(statearr_9424_9494[(2)] = inst_9296);

(statearr_9424_9494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (35))){
var state_9365__$1 = state_9365;
var statearr_9425_9495 = state_9365__$1;
(statearr_9425_9495[(2)] = true);

(statearr_9425_9495[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (19))){
var inst_9269 = (state_9365[(12)]);
var inst_9275 = figwheel.client.file_reloading.expand_files.call(null,inst_9269);
var state_9365__$1 = state_9365;
var statearr_9426_9496 = state_9365__$1;
(statearr_9426_9496[(2)] = inst_9275);

(statearr_9426_9496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (11))){
var state_9365__$1 = state_9365;
var statearr_9427_9497 = state_9365__$1;
(statearr_9427_9497[(2)] = null);

(statearr_9427_9497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (9))){
var inst_9258 = (state_9365[(2)]);
var state_9365__$1 = state_9365;
var statearr_9428_9498 = state_9365__$1;
(statearr_9428_9498[(2)] = inst_9258);

(statearr_9428_9498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (5))){
var inst_9228 = (state_9365[(7)]);
var inst_9229 = (state_9365[(9)]);
var inst_9231 = (inst_9229 < inst_9228);
var inst_9232 = inst_9231;
var state_9365__$1 = state_9365;
if(cljs.core.truth_(inst_9232)){
var statearr_9429_9499 = state_9365__$1;
(statearr_9429_9499[(1)] = (7));

} else {
var statearr_9430_9500 = state_9365__$1;
(statearr_9430_9500[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (14))){
var inst_9239 = (state_9365[(22)]);
var inst_9248 = cljs.core.first.call(null,inst_9239);
var inst_9249 = figwheel.client.file_reloading.eval_body.call(null,inst_9248,opts);
var inst_9250 = cljs.core.next.call(null,inst_9239);
var inst_9226 = inst_9250;
var inst_9227 = null;
var inst_9228 = (0);
var inst_9229 = (0);
var state_9365__$1 = (function (){var statearr_9431 = state_9365;
(statearr_9431[(7)] = inst_9228);

(statearr_9431[(32)] = inst_9249);

(statearr_9431[(8)] = inst_9227);

(statearr_9431[(9)] = inst_9229);

(statearr_9431[(10)] = inst_9226);

return statearr_9431;
})();
var statearr_9432_9501 = state_9365__$1;
(statearr_9432_9501[(2)] = null);

(statearr_9432_9501[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (45))){
var state_9365__$1 = state_9365;
var statearr_9433_9502 = state_9365__$1;
(statearr_9433_9502[(2)] = null);

(statearr_9433_9502[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (26))){
var inst_9283 = (state_9365[(23)]);
var inst_9287 = (state_9365[(24)]);
var inst_9279 = (state_9365[(19)]);
var inst_9282 = (state_9365[(25)]);
var inst_9285 = (state_9365[(26)]);
var inst_9302 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_9304 = (function (){var all_files = inst_9279;
var res_SINGLEQUOTE_ = inst_9282;
var res = inst_9283;
var files_not_loaded = inst_9285;
var dependencies_that_loaded = inst_9287;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9283,inst_9287,inst_9279,inst_9282,inst_9285,inst_9302,state_val_9366,c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__9303){
var map__9434 = p__9303;
var map__9434__$1 = ((((!((map__9434 == null)))?((((map__9434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9434):map__9434);
var namespace = cljs.core.get.call(null,map__9434__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__9434__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9283,inst_9287,inst_9279,inst_9282,inst_9285,inst_9302,state_val_9366,c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9305 = cljs.core.map.call(null,inst_9304,inst_9283);
var inst_9306 = cljs.core.pr_str.call(null,inst_9305);
var inst_9307 = figwheel.client.utils.log.call(null,inst_9306);
var inst_9308 = (function (){var all_files = inst_9279;
var res_SINGLEQUOTE_ = inst_9282;
var res = inst_9283;
var files_not_loaded = inst_9285;
var dependencies_that_loaded = inst_9287;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9283,inst_9287,inst_9279,inst_9282,inst_9285,inst_9302,inst_9304,inst_9305,inst_9306,inst_9307,state_val_9366,c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_9283,inst_9287,inst_9279,inst_9282,inst_9285,inst_9302,inst_9304,inst_9305,inst_9306,inst_9307,state_val_9366,c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_9309 = setTimeout(inst_9308,(10));
var state_9365__$1 = (function (){var statearr_9436 = state_9365;
(statearr_9436[(33)] = inst_9307);

(statearr_9436[(34)] = inst_9302);

return statearr_9436;
})();
var statearr_9437_9503 = state_9365__$1;
(statearr_9437_9503[(2)] = inst_9309);

(statearr_9437_9503[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (16))){
var state_9365__$1 = state_9365;
var statearr_9438_9504 = state_9365__$1;
(statearr_9438_9504[(2)] = reload_dependents);

(statearr_9438_9504[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (38))){
var inst_9319 = (state_9365[(16)]);
var inst_9336 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9319);
var state_9365__$1 = state_9365;
var statearr_9439_9505 = state_9365__$1;
(statearr_9439_9505[(2)] = inst_9336);

(statearr_9439_9505[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (30))){
var state_9365__$1 = state_9365;
var statearr_9440_9506 = state_9365__$1;
(statearr_9440_9506[(2)] = null);

(statearr_9440_9506[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (10))){
var inst_9239 = (state_9365[(22)]);
var inst_9241 = cljs.core.chunked_seq_QMARK_.call(null,inst_9239);
var state_9365__$1 = state_9365;
if(inst_9241){
var statearr_9441_9507 = state_9365__$1;
(statearr_9441_9507[(1)] = (13));

} else {
var statearr_9442_9508 = state_9365__$1;
(statearr_9442_9508[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (18))){
var inst_9273 = (state_9365[(2)]);
var state_9365__$1 = state_9365;
if(cljs.core.truth_(inst_9273)){
var statearr_9443_9509 = state_9365__$1;
(statearr_9443_9509[(1)] = (19));

} else {
var statearr_9444_9510 = state_9365__$1;
(statearr_9444_9510[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (42))){
var state_9365__$1 = state_9365;
var statearr_9445_9511 = state_9365__$1;
(statearr_9445_9511[(2)] = null);

(statearr_9445_9511[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (37))){
var inst_9331 = (state_9365[(2)]);
var state_9365__$1 = state_9365;
var statearr_9446_9512 = state_9365__$1;
(statearr_9446_9512[(2)] = inst_9331);

(statearr_9446_9512[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9366 === (8))){
var inst_9239 = (state_9365[(22)]);
var inst_9226 = (state_9365[(10)]);
var inst_9239__$1 = cljs.core.seq.call(null,inst_9226);
var state_9365__$1 = (function (){var statearr_9447 = state_9365;
(statearr_9447[(22)] = inst_9239__$1);

return statearr_9447;
})();
if(inst_9239__$1){
var statearr_9448_9513 = state_9365__$1;
(statearr_9448_9513[(1)] = (10));

} else {
var statearr_9449_9514 = state_9365__$1;
(statearr_9449_9514[(1)] = (11));

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
});})(c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__8472__auto__,c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__8473__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__8473__auto____0 = (function (){
var statearr_9453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9453[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__8473__auto__);

(statearr_9453[(1)] = (1));

return statearr_9453;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__8473__auto____1 = (function (state_9365){
while(true){
var ret_value__8474__auto__ = (function (){try{while(true){
var result__8475__auto__ = switch__8472__auto__.call(null,state_9365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8475__auto__;
}
break;
}
}catch (e9454){if((e9454 instanceof Object)){
var ex__8476__auto__ = e9454;
var statearr_9455_9515 = state_9365;
(statearr_9455_9515[(5)] = ex__8476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9516 = state_9365;
state_9365 = G__9516;
continue;
} else {
return ret_value__8474__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__8473__auto__ = function(state_9365){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__8473__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__8473__auto____1.call(this,state_9365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__8473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__8473__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__8473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__8473__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__8473__auto__;
})()
;})(switch__8472__auto__,c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__8495__auto__ = (function (){var statearr_9456 = f__8494__auto__.call(null);
(statearr_9456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8493__auto__);

return statearr_9456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8495__auto__);
});})(c__8493__auto__,map__9211,map__9211__$1,opts,before_jsload,on_jsload,reload_dependents,map__9212,map__9212__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__8493__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__9519,link){
var map__9522 = p__9519;
var map__9522__$1 = ((((!((map__9522 == null)))?((((map__9522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9522):map__9522);
var file = cljs.core.get.call(null,map__9522__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__9522,map__9522__$1,file){
return (function (p1__9517_SHARP_,p2__9518_SHARP_){
if(cljs.core._EQ_.call(null,p1__9517_SHARP_,p2__9518_SHARP_)){
return p1__9517_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__9522,map__9522__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__9528){
var map__9529 = p__9528;
var map__9529__$1 = ((((!((map__9529 == null)))?((((map__9529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9529):map__9529);
var match_length = cljs.core.get.call(null,map__9529__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__9529__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__9524_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__9524_SHARP_);
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
var args9531 = [];
var len__7196__auto___9534 = arguments.length;
var i__7197__auto___9535 = (0);
while(true){
if((i__7197__auto___9535 < len__7196__auto___9534)){
args9531.push((arguments[i__7197__auto___9535]));

var G__9536 = (i__7197__auto___9535 + (1));
i__7197__auto___9535 = G__9536;
continue;
} else {
}
break;
}

var G__9533 = args9531.length;
switch (G__9533) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9531.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__9538_SHARP_,p2__9539_SHARP_){
return cljs.core.assoc.call(null,p1__9538_SHARP_,cljs.core.get.call(null,p2__9539_SHARP_,key),p2__9539_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__9540){
var map__9543 = p__9540;
var map__9543__$1 = ((((!((map__9543 == null)))?((((map__9543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9543):map__9543);
var f_data = map__9543__$1;
var file = cljs.core.get.call(null,map__9543__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__9545,files_msg){
var map__9552 = p__9545;
var map__9552__$1 = ((((!((map__9552 == null)))?((((map__9552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9552):map__9552);
var opts = map__9552__$1;
var on_cssload = cljs.core.get.call(null,map__9552__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__9554_9558 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__9555_9559 = null;
var count__9556_9560 = (0);
var i__9557_9561 = (0);
while(true){
if((i__9557_9561 < count__9556_9560)){
var f_9562 = cljs.core._nth.call(null,chunk__9555_9559,i__9557_9561);
figwheel.client.file_reloading.reload_css_file.call(null,f_9562);

var G__9563 = seq__9554_9558;
var G__9564 = chunk__9555_9559;
var G__9565 = count__9556_9560;
var G__9566 = (i__9557_9561 + (1));
seq__9554_9558 = G__9563;
chunk__9555_9559 = G__9564;
count__9556_9560 = G__9565;
i__9557_9561 = G__9566;
continue;
} else {
var temp__4425__auto___9567 = cljs.core.seq.call(null,seq__9554_9558);
if(temp__4425__auto___9567){
var seq__9554_9568__$1 = temp__4425__auto___9567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9554_9568__$1)){
var c__6945__auto___9569 = cljs.core.chunk_first.call(null,seq__9554_9568__$1);
var G__9570 = cljs.core.chunk_rest.call(null,seq__9554_9568__$1);
var G__9571 = c__6945__auto___9569;
var G__9572 = cljs.core.count.call(null,c__6945__auto___9569);
var G__9573 = (0);
seq__9554_9558 = G__9570;
chunk__9555_9559 = G__9571;
count__9556_9560 = G__9572;
i__9557_9561 = G__9573;
continue;
} else {
var f_9574 = cljs.core.first.call(null,seq__9554_9568__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_9574);

var G__9575 = cljs.core.next.call(null,seq__9554_9568__$1);
var G__9576 = null;
var G__9577 = (0);
var G__9578 = (0);
seq__9554_9558 = G__9575;
chunk__9555_9559 = G__9576;
count__9556_9560 = G__9577;
i__9557_9561 = G__9578;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__9552,map__9552__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__9552,map__9552__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map