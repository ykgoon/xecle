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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23545_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23545_SHARP_));
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
var seq__23550 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23551 = null;
var count__23552 = (0);
var i__23553 = (0);
while(true){
if((i__23553 < count__23552)){
var n = cljs.core._nth.call(null,chunk__23551,i__23553);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23554 = seq__23550;
var G__23555 = chunk__23551;
var G__23556 = count__23552;
var G__23557 = (i__23553 + (1));
seq__23550 = G__23554;
chunk__23551 = G__23555;
count__23552 = G__23556;
i__23553 = G__23557;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23550);
if(temp__4425__auto__){
var seq__23550__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23550__$1)){
var c__19079__auto__ = cljs.core.chunk_first.call(null,seq__23550__$1);
var G__23558 = cljs.core.chunk_rest.call(null,seq__23550__$1);
var G__23559 = c__19079__auto__;
var G__23560 = cljs.core.count.call(null,c__19079__auto__);
var G__23561 = (0);
seq__23550 = G__23558;
chunk__23551 = G__23559;
count__23552 = G__23560;
i__23553 = G__23561;
continue;
} else {
var n = cljs.core.first.call(null,seq__23550__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23562 = cljs.core.next.call(null,seq__23550__$1);
var G__23563 = null;
var G__23564 = (0);
var G__23565 = (0);
seq__23550 = G__23562;
chunk__23551 = G__23563;
count__23552 = G__23564;
i__23553 = G__23565;
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

var seq__23604_23611 = cljs.core.seq.call(null,deps);
var chunk__23605_23612 = null;
var count__23606_23613 = (0);
var i__23607_23614 = (0);
while(true){
if((i__23607_23614 < count__23606_23613)){
var dep_23615 = cljs.core._nth.call(null,chunk__23605_23612,i__23607_23614);
topo_sort_helper_STAR_.call(null,dep_23615,(depth + (1)),state);

var G__23616 = seq__23604_23611;
var G__23617 = chunk__23605_23612;
var G__23618 = count__23606_23613;
var G__23619 = (i__23607_23614 + (1));
seq__23604_23611 = G__23616;
chunk__23605_23612 = G__23617;
count__23606_23613 = G__23618;
i__23607_23614 = G__23619;
continue;
} else {
var temp__4425__auto___23620 = cljs.core.seq.call(null,seq__23604_23611);
if(temp__4425__auto___23620){
var seq__23604_23621__$1 = temp__4425__auto___23620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23604_23621__$1)){
var c__19079__auto___23622 = cljs.core.chunk_first.call(null,seq__23604_23621__$1);
var G__23623 = cljs.core.chunk_rest.call(null,seq__23604_23621__$1);
var G__23624 = c__19079__auto___23622;
var G__23625 = cljs.core.count.call(null,c__19079__auto___23622);
var G__23626 = (0);
seq__23604_23611 = G__23623;
chunk__23605_23612 = G__23624;
count__23606_23613 = G__23625;
i__23607_23614 = G__23626;
continue;
} else {
var dep_23627 = cljs.core.first.call(null,seq__23604_23621__$1);
topo_sort_helper_STAR_.call(null,dep_23627,(depth + (1)),state);

var G__23628 = cljs.core.next.call(null,seq__23604_23621__$1);
var G__23629 = null;
var G__23630 = (0);
var G__23631 = (0);
seq__23604_23611 = G__23628;
chunk__23605_23612 = G__23629;
count__23606_23613 = G__23630;
i__23607_23614 = G__23631;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23608){
var vec__23610 = p__23608;
var x = cljs.core.nth.call(null,vec__23610,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23610,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23610,x,xs,get_deps__$1){
return (function (p1__23566_SHARP_){
return clojure.set.difference.call(null,p1__23566_SHARP_,x);
});})(vec__23610,x,xs,get_deps__$1))
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
var seq__23644 = cljs.core.seq.call(null,provides);
var chunk__23645 = null;
var count__23646 = (0);
var i__23647 = (0);
while(true){
if((i__23647 < count__23646)){
var prov = cljs.core._nth.call(null,chunk__23645,i__23647);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23648_23656 = cljs.core.seq.call(null,requires);
var chunk__23649_23657 = null;
var count__23650_23658 = (0);
var i__23651_23659 = (0);
while(true){
if((i__23651_23659 < count__23650_23658)){
var req_23660 = cljs.core._nth.call(null,chunk__23649_23657,i__23651_23659);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23660,prov);

var G__23661 = seq__23648_23656;
var G__23662 = chunk__23649_23657;
var G__23663 = count__23650_23658;
var G__23664 = (i__23651_23659 + (1));
seq__23648_23656 = G__23661;
chunk__23649_23657 = G__23662;
count__23650_23658 = G__23663;
i__23651_23659 = G__23664;
continue;
} else {
var temp__4425__auto___23665 = cljs.core.seq.call(null,seq__23648_23656);
if(temp__4425__auto___23665){
var seq__23648_23666__$1 = temp__4425__auto___23665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23648_23666__$1)){
var c__19079__auto___23667 = cljs.core.chunk_first.call(null,seq__23648_23666__$1);
var G__23668 = cljs.core.chunk_rest.call(null,seq__23648_23666__$1);
var G__23669 = c__19079__auto___23667;
var G__23670 = cljs.core.count.call(null,c__19079__auto___23667);
var G__23671 = (0);
seq__23648_23656 = G__23668;
chunk__23649_23657 = G__23669;
count__23650_23658 = G__23670;
i__23651_23659 = G__23671;
continue;
} else {
var req_23672 = cljs.core.first.call(null,seq__23648_23666__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23672,prov);

var G__23673 = cljs.core.next.call(null,seq__23648_23666__$1);
var G__23674 = null;
var G__23675 = (0);
var G__23676 = (0);
seq__23648_23656 = G__23673;
chunk__23649_23657 = G__23674;
count__23650_23658 = G__23675;
i__23651_23659 = G__23676;
continue;
}
} else {
}
}
break;
}

var G__23677 = seq__23644;
var G__23678 = chunk__23645;
var G__23679 = count__23646;
var G__23680 = (i__23647 + (1));
seq__23644 = G__23677;
chunk__23645 = G__23678;
count__23646 = G__23679;
i__23647 = G__23680;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23644);
if(temp__4425__auto__){
var seq__23644__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23644__$1)){
var c__19079__auto__ = cljs.core.chunk_first.call(null,seq__23644__$1);
var G__23681 = cljs.core.chunk_rest.call(null,seq__23644__$1);
var G__23682 = c__19079__auto__;
var G__23683 = cljs.core.count.call(null,c__19079__auto__);
var G__23684 = (0);
seq__23644 = G__23681;
chunk__23645 = G__23682;
count__23646 = G__23683;
i__23647 = G__23684;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23644__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23652_23685 = cljs.core.seq.call(null,requires);
var chunk__23653_23686 = null;
var count__23654_23687 = (0);
var i__23655_23688 = (0);
while(true){
if((i__23655_23688 < count__23654_23687)){
var req_23689 = cljs.core._nth.call(null,chunk__23653_23686,i__23655_23688);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23689,prov);

var G__23690 = seq__23652_23685;
var G__23691 = chunk__23653_23686;
var G__23692 = count__23654_23687;
var G__23693 = (i__23655_23688 + (1));
seq__23652_23685 = G__23690;
chunk__23653_23686 = G__23691;
count__23654_23687 = G__23692;
i__23655_23688 = G__23693;
continue;
} else {
var temp__4425__auto___23694__$1 = cljs.core.seq.call(null,seq__23652_23685);
if(temp__4425__auto___23694__$1){
var seq__23652_23695__$1 = temp__4425__auto___23694__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23652_23695__$1)){
var c__19079__auto___23696 = cljs.core.chunk_first.call(null,seq__23652_23695__$1);
var G__23697 = cljs.core.chunk_rest.call(null,seq__23652_23695__$1);
var G__23698 = c__19079__auto___23696;
var G__23699 = cljs.core.count.call(null,c__19079__auto___23696);
var G__23700 = (0);
seq__23652_23685 = G__23697;
chunk__23653_23686 = G__23698;
count__23654_23687 = G__23699;
i__23655_23688 = G__23700;
continue;
} else {
var req_23701 = cljs.core.first.call(null,seq__23652_23695__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23701,prov);

var G__23702 = cljs.core.next.call(null,seq__23652_23695__$1);
var G__23703 = null;
var G__23704 = (0);
var G__23705 = (0);
seq__23652_23685 = G__23702;
chunk__23653_23686 = G__23703;
count__23654_23687 = G__23704;
i__23655_23688 = G__23705;
continue;
}
} else {
}
}
break;
}

var G__23706 = cljs.core.next.call(null,seq__23644__$1);
var G__23707 = null;
var G__23708 = (0);
var G__23709 = (0);
seq__23644 = G__23706;
chunk__23645 = G__23707;
count__23646 = G__23708;
i__23647 = G__23709;
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
var seq__23714_23718 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23715_23719 = null;
var count__23716_23720 = (0);
var i__23717_23721 = (0);
while(true){
if((i__23717_23721 < count__23716_23720)){
var ns_23722 = cljs.core._nth.call(null,chunk__23715_23719,i__23717_23721);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23722);

var G__23723 = seq__23714_23718;
var G__23724 = chunk__23715_23719;
var G__23725 = count__23716_23720;
var G__23726 = (i__23717_23721 + (1));
seq__23714_23718 = G__23723;
chunk__23715_23719 = G__23724;
count__23716_23720 = G__23725;
i__23717_23721 = G__23726;
continue;
} else {
var temp__4425__auto___23727 = cljs.core.seq.call(null,seq__23714_23718);
if(temp__4425__auto___23727){
var seq__23714_23728__$1 = temp__4425__auto___23727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23714_23728__$1)){
var c__19079__auto___23729 = cljs.core.chunk_first.call(null,seq__23714_23728__$1);
var G__23730 = cljs.core.chunk_rest.call(null,seq__23714_23728__$1);
var G__23731 = c__19079__auto___23729;
var G__23732 = cljs.core.count.call(null,c__19079__auto___23729);
var G__23733 = (0);
seq__23714_23718 = G__23730;
chunk__23715_23719 = G__23731;
count__23716_23720 = G__23732;
i__23717_23721 = G__23733;
continue;
} else {
var ns_23734 = cljs.core.first.call(null,seq__23714_23728__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23734);

var G__23735 = cljs.core.next.call(null,seq__23714_23728__$1);
var G__23736 = null;
var G__23737 = (0);
var G__23738 = (0);
seq__23714_23718 = G__23735;
chunk__23715_23719 = G__23736;
count__23716_23720 = G__23737;
i__23717_23721 = G__23738;
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
var G__23739__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23740__i = 0, G__23740__a = new Array(arguments.length -  0);
while (G__23740__i < G__23740__a.length) {G__23740__a[G__23740__i] = arguments[G__23740__i + 0]; ++G__23740__i;}
  args = new cljs.core.IndexedSeq(G__23740__a,0);
} 
return G__23739__delegate.call(this,args);};
G__23739.cljs$lang$maxFixedArity = 0;
G__23739.cljs$lang$applyTo = (function (arglist__23741){
var args = cljs.core.seq(arglist__23741);
return G__23739__delegate(args);
});
G__23739.cljs$core$IFn$_invoke$arity$variadic = G__23739__delegate;
return G__23739;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23743 = cljs.core._EQ_;
var expr__23744 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23743.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23744))){
var path_parts = ((function (pred__23743,expr__23744){
return (function (p1__23742_SHARP_){
return clojure.string.split.call(null,p1__23742_SHARP_,/[\/\\]/);
});})(pred__23743,expr__23744))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23743,expr__23744){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23746){if((e23746 instanceof Error)){
var e = e23746;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23746;

}
}})());
});
;})(path_parts,sep,root,pred__23743,expr__23744))
} else {
if(cljs.core.truth_(pred__23743.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23744))){
return ((function (pred__23743,expr__23744){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23743,expr__23744){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23743,expr__23744))
);

return deferred.addErrback(((function (deferred,pred__23743,expr__23744){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23743,expr__23744))
);
});
;})(pred__23743,expr__23744))
} else {
return ((function (pred__23743,expr__23744){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23743,expr__23744))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23747,callback){
var map__23750 = p__23747;
var map__23750__$1 = ((((!((map__23750 == null)))?((((map__23750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23750):map__23750);
var file_msg = map__23750__$1;
var request_url = cljs.core.get.call(null,map__23750__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23750,map__23750__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23750,map__23750__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__20400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto__){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto__){
return (function (state_23774){
var state_val_23775 = (state_23774[(1)]);
if((state_val_23775 === (7))){
var inst_23770 = (state_23774[(2)]);
var state_23774__$1 = state_23774;
var statearr_23776_23796 = state_23774__$1;
(statearr_23776_23796[(2)] = inst_23770);

(statearr_23776_23796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23775 === (1))){
var state_23774__$1 = state_23774;
var statearr_23777_23797 = state_23774__$1;
(statearr_23777_23797[(2)] = null);

(statearr_23777_23797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23775 === (4))){
var inst_23754 = (state_23774[(7)]);
var inst_23754__$1 = (state_23774[(2)]);
var state_23774__$1 = (function (){var statearr_23778 = state_23774;
(statearr_23778[(7)] = inst_23754__$1);

return statearr_23778;
})();
if(cljs.core.truth_(inst_23754__$1)){
var statearr_23779_23798 = state_23774__$1;
(statearr_23779_23798[(1)] = (5));

} else {
var statearr_23780_23799 = state_23774__$1;
(statearr_23780_23799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23775 === (6))){
var state_23774__$1 = state_23774;
var statearr_23781_23800 = state_23774__$1;
(statearr_23781_23800[(2)] = null);

(statearr_23781_23800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23775 === (3))){
var inst_23772 = (state_23774[(2)]);
var state_23774__$1 = state_23774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23774__$1,inst_23772);
} else {
if((state_val_23775 === (2))){
var state_23774__$1 = state_23774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23774__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23775 === (11))){
var inst_23766 = (state_23774[(2)]);
var state_23774__$1 = (function (){var statearr_23782 = state_23774;
(statearr_23782[(8)] = inst_23766);

return statearr_23782;
})();
var statearr_23783_23801 = state_23774__$1;
(statearr_23783_23801[(2)] = null);

(statearr_23783_23801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23775 === (9))){
var inst_23758 = (state_23774[(9)]);
var inst_23760 = (state_23774[(10)]);
var inst_23762 = inst_23760.call(null,inst_23758);
var state_23774__$1 = state_23774;
var statearr_23784_23802 = state_23774__$1;
(statearr_23784_23802[(2)] = inst_23762);

(statearr_23784_23802[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23775 === (5))){
var inst_23754 = (state_23774[(7)]);
var inst_23756 = figwheel.client.file_reloading.blocking_load.call(null,inst_23754);
var state_23774__$1 = state_23774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23774__$1,(8),inst_23756);
} else {
if((state_val_23775 === (10))){
var inst_23758 = (state_23774[(9)]);
var inst_23764 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23758);
var state_23774__$1 = state_23774;
var statearr_23785_23803 = state_23774__$1;
(statearr_23785_23803[(2)] = inst_23764);

(statearr_23785_23803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23775 === (8))){
var inst_23754 = (state_23774[(7)]);
var inst_23760 = (state_23774[(10)]);
var inst_23758 = (state_23774[(2)]);
var inst_23759 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23760__$1 = cljs.core.get.call(null,inst_23759,inst_23754);
var state_23774__$1 = (function (){var statearr_23786 = state_23774;
(statearr_23786[(9)] = inst_23758);

(statearr_23786[(10)] = inst_23760__$1);

return statearr_23786;
})();
if(cljs.core.truth_(inst_23760__$1)){
var statearr_23787_23804 = state_23774__$1;
(statearr_23787_23804[(1)] = (9));

} else {
var statearr_23788_23805 = state_23774__$1;
(statearr_23788_23805[(1)] = (10));

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
});})(c__20400__auto__))
;
return ((function (switch__20379__auto__,c__20400__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20380__auto__ = null;
var figwheel$client$file_reloading$state_machine__20380__auto____0 = (function (){
var statearr_23792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23792[(0)] = figwheel$client$file_reloading$state_machine__20380__auto__);

(statearr_23792[(1)] = (1));

return statearr_23792;
});
var figwheel$client$file_reloading$state_machine__20380__auto____1 = (function (state_23774){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_23774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e23793){if((e23793 instanceof Object)){
var ex__20383__auto__ = e23793;
var statearr_23794_23806 = state_23774;
(statearr_23794_23806[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23807 = state_23774;
state_23774 = G__23807;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20380__auto__ = function(state_23774){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20380__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20380__auto____1.call(this,state_23774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20380__auto____0;
figwheel$client$file_reloading$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20380__auto____1;
return figwheel$client$file_reloading$state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto__))
})();
var state__20402__auto__ = (function (){var statearr_23795 = f__20401__auto__.call(null);
(statearr_23795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto__);

return statearr_23795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto__))
);

return c__20400__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23808,callback){
var map__23811 = p__23808;
var map__23811__$1 = ((((!((map__23811 == null)))?((((map__23811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23811):map__23811);
var file_msg = map__23811__$1;
var namespace = cljs.core.get.call(null,map__23811__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23811,map__23811__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23811,map__23811__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23813){
var map__23816 = p__23813;
var map__23816__$1 = ((((!((map__23816 == null)))?((((map__23816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23816):map__23816);
var file_msg = map__23816__$1;
var namespace = cljs.core.get.call(null,map__23816__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23818,callback){
var map__23821 = p__23818;
var map__23821__$1 = ((((!((map__23821 == null)))?((((map__23821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23821):map__23821);
var file_msg = map__23821__$1;
var request_url = cljs.core.get.call(null,map__23821__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23821__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20400__auto___23909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto___23909,out){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto___23909,out){
return (function (state_23891){
var state_val_23892 = (state_23891[(1)]);
if((state_val_23892 === (1))){
var inst_23869 = cljs.core.nth.call(null,files,(0),null);
var inst_23870 = cljs.core.nthnext.call(null,files,(1));
var inst_23871 = files;
var state_23891__$1 = (function (){var statearr_23893 = state_23891;
(statearr_23893[(7)] = inst_23871);

(statearr_23893[(8)] = inst_23869);

(statearr_23893[(9)] = inst_23870);

return statearr_23893;
})();
var statearr_23894_23910 = state_23891__$1;
(statearr_23894_23910[(2)] = null);

(statearr_23894_23910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23892 === (2))){
var inst_23871 = (state_23891[(7)]);
var inst_23874 = (state_23891[(10)]);
var inst_23874__$1 = cljs.core.nth.call(null,inst_23871,(0),null);
var inst_23875 = cljs.core.nthnext.call(null,inst_23871,(1));
var inst_23876 = (inst_23874__$1 == null);
var inst_23877 = cljs.core.not.call(null,inst_23876);
var state_23891__$1 = (function (){var statearr_23895 = state_23891;
(statearr_23895[(11)] = inst_23875);

(statearr_23895[(10)] = inst_23874__$1);

return statearr_23895;
})();
if(inst_23877){
var statearr_23896_23911 = state_23891__$1;
(statearr_23896_23911[(1)] = (4));

} else {
var statearr_23897_23912 = state_23891__$1;
(statearr_23897_23912[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23892 === (3))){
var inst_23889 = (state_23891[(2)]);
var state_23891__$1 = state_23891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23891__$1,inst_23889);
} else {
if((state_val_23892 === (4))){
var inst_23874 = (state_23891[(10)]);
var inst_23879 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23874);
var state_23891__$1 = state_23891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23891__$1,(7),inst_23879);
} else {
if((state_val_23892 === (5))){
var inst_23885 = cljs.core.async.close_BANG_.call(null,out);
var state_23891__$1 = state_23891;
var statearr_23898_23913 = state_23891__$1;
(statearr_23898_23913[(2)] = inst_23885);

(statearr_23898_23913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23892 === (6))){
var inst_23887 = (state_23891[(2)]);
var state_23891__$1 = state_23891;
var statearr_23899_23914 = state_23891__$1;
(statearr_23899_23914[(2)] = inst_23887);

(statearr_23899_23914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23892 === (7))){
var inst_23875 = (state_23891[(11)]);
var inst_23881 = (state_23891[(2)]);
var inst_23882 = cljs.core.async.put_BANG_.call(null,out,inst_23881);
var inst_23871 = inst_23875;
var state_23891__$1 = (function (){var statearr_23900 = state_23891;
(statearr_23900[(7)] = inst_23871);

(statearr_23900[(12)] = inst_23882);

return statearr_23900;
})();
var statearr_23901_23915 = state_23891__$1;
(statearr_23901_23915[(2)] = null);

(statearr_23901_23915[(1)] = (2));


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
});})(c__20400__auto___23909,out))
;
return ((function (switch__20379__auto__,c__20400__auto___23909,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20380__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20380__auto____0 = (function (){
var statearr_23905 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23905[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20380__auto__);

(statearr_23905[(1)] = (1));

return statearr_23905;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20380__auto____1 = (function (state_23891){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_23891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e23906){if((e23906 instanceof Object)){
var ex__20383__auto__ = e23906;
var statearr_23907_23916 = state_23891;
(statearr_23907_23916[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23917 = state_23891;
state_23891 = G__23917;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20380__auto__ = function(state_23891){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20380__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20380__auto____1.call(this,state_23891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20380__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20380__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto___23909,out))
})();
var state__20402__auto__ = (function (){var statearr_23908 = f__20401__auto__.call(null);
(statearr_23908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___23909);

return statearr_23908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto___23909,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23918,opts){
var map__23922 = p__23918;
var map__23922__$1 = ((((!((map__23922 == null)))?((((map__23922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23922):map__23922);
var eval_body__$1 = cljs.core.get.call(null,map__23922__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23922__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e23924){var e = e23924;
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
return (function (p1__23925_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23925_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__23930){
var vec__23931 = p__23930;
var k = cljs.core.nth.call(null,vec__23931,(0),null);
var v = cljs.core.nth.call(null,vec__23931,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23932){
var vec__23933 = p__23932;
var k = cljs.core.nth.call(null,vec__23933,(0),null);
var v = cljs.core.nth.call(null,vec__23933,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23937,p__23938){
var map__24185 = p__23937;
var map__24185__$1 = ((((!((map__24185 == null)))?((((map__24185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24185):map__24185);
var opts = map__24185__$1;
var before_jsload = cljs.core.get.call(null,map__24185__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24185__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24185__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24186 = p__23938;
var map__24186__$1 = ((((!((map__24186 == null)))?((((map__24186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24186):map__24186);
var msg = map__24186__$1;
var files = cljs.core.get.call(null,map__24186__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24186__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24186__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24339){
var state_val_24340 = (state_24339[(1)]);
if((state_val_24340 === (7))){
var inst_24203 = (state_24339[(7)]);
var inst_24202 = (state_24339[(8)]);
var inst_24200 = (state_24339[(9)]);
var inst_24201 = (state_24339[(10)]);
var inst_24208 = cljs.core._nth.call(null,inst_24201,inst_24203);
var inst_24209 = figwheel.client.file_reloading.eval_body.call(null,inst_24208,opts);
var inst_24210 = (inst_24203 + (1));
var tmp24341 = inst_24202;
var tmp24342 = inst_24200;
var tmp24343 = inst_24201;
var inst_24200__$1 = tmp24342;
var inst_24201__$1 = tmp24343;
var inst_24202__$1 = tmp24341;
var inst_24203__$1 = inst_24210;
var state_24339__$1 = (function (){var statearr_24344 = state_24339;
(statearr_24344[(7)] = inst_24203__$1);

(statearr_24344[(11)] = inst_24209);

(statearr_24344[(8)] = inst_24202__$1);

(statearr_24344[(9)] = inst_24200__$1);

(statearr_24344[(10)] = inst_24201__$1);

return statearr_24344;
})();
var statearr_24345_24431 = state_24339__$1;
(statearr_24345_24431[(2)] = null);

(statearr_24345_24431[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (20))){
var inst_24243 = (state_24339[(12)]);
var inst_24251 = figwheel.client.file_reloading.sort_files.call(null,inst_24243);
var state_24339__$1 = state_24339;
var statearr_24346_24432 = state_24339__$1;
(statearr_24346_24432[(2)] = inst_24251);

(statearr_24346_24432[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (27))){
var state_24339__$1 = state_24339;
var statearr_24347_24433 = state_24339__$1;
(statearr_24347_24433[(2)] = null);

(statearr_24347_24433[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (1))){
var inst_24192 = (state_24339[(13)]);
var inst_24189 = before_jsload.call(null,files);
var inst_24190 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24191 = (function (){return ((function (inst_24192,inst_24189,inst_24190,state_val_24340,c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23934_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23934_SHARP_);
});
;})(inst_24192,inst_24189,inst_24190,state_val_24340,c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24192__$1 = cljs.core.filter.call(null,inst_24191,files);
var inst_24193 = cljs.core.not_empty.call(null,inst_24192__$1);
var state_24339__$1 = (function (){var statearr_24348 = state_24339;
(statearr_24348[(14)] = inst_24190);

(statearr_24348[(15)] = inst_24189);

(statearr_24348[(13)] = inst_24192__$1);

return statearr_24348;
})();
if(cljs.core.truth_(inst_24193)){
var statearr_24349_24434 = state_24339__$1;
(statearr_24349_24434[(1)] = (2));

} else {
var statearr_24350_24435 = state_24339__$1;
(statearr_24350_24435[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (24))){
var state_24339__$1 = state_24339;
var statearr_24351_24436 = state_24339__$1;
(statearr_24351_24436[(2)] = null);

(statearr_24351_24436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (39))){
var inst_24293 = (state_24339[(16)]);
var state_24339__$1 = state_24339;
var statearr_24352_24437 = state_24339__$1;
(statearr_24352_24437[(2)] = inst_24293);

(statearr_24352_24437[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (46))){
var inst_24334 = (state_24339[(2)]);
var state_24339__$1 = state_24339;
var statearr_24353_24438 = state_24339__$1;
(statearr_24353_24438[(2)] = inst_24334);

(statearr_24353_24438[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (4))){
var inst_24237 = (state_24339[(2)]);
var inst_24238 = cljs.core.List.EMPTY;
var inst_24239 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24238);
var inst_24240 = (function (){return ((function (inst_24237,inst_24238,inst_24239,state_val_24340,c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23935_SHARP_){
var and__18264__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23935_SHARP_);
if(cljs.core.truth_(and__18264__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23935_SHARP_));
} else {
return and__18264__auto__;
}
});
;})(inst_24237,inst_24238,inst_24239,state_val_24340,c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24241 = cljs.core.filter.call(null,inst_24240,files);
var inst_24242 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24243 = cljs.core.concat.call(null,inst_24241,inst_24242);
var state_24339__$1 = (function (){var statearr_24354 = state_24339;
(statearr_24354[(12)] = inst_24243);

(statearr_24354[(17)] = inst_24239);

(statearr_24354[(18)] = inst_24237);

return statearr_24354;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24355_24439 = state_24339__$1;
(statearr_24355_24439[(1)] = (16));

} else {
var statearr_24356_24440 = state_24339__$1;
(statearr_24356_24440[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (15))){
var inst_24227 = (state_24339[(2)]);
var state_24339__$1 = state_24339;
var statearr_24357_24441 = state_24339__$1;
(statearr_24357_24441[(2)] = inst_24227);

(statearr_24357_24441[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (21))){
var inst_24253 = (state_24339[(19)]);
var inst_24253__$1 = (state_24339[(2)]);
var inst_24254 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24253__$1);
var state_24339__$1 = (function (){var statearr_24358 = state_24339;
(statearr_24358[(19)] = inst_24253__$1);

return statearr_24358;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24339__$1,(22),inst_24254);
} else {
if((state_val_24340 === (31))){
var inst_24337 = (state_24339[(2)]);
var state_24339__$1 = state_24339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24339__$1,inst_24337);
} else {
if((state_val_24340 === (32))){
var inst_24293 = (state_24339[(16)]);
var inst_24298 = inst_24293.cljs$lang$protocol_mask$partition0$;
var inst_24299 = (inst_24298 & (64));
var inst_24300 = inst_24293.cljs$core$ISeq$;
var inst_24301 = (inst_24299) || (inst_24300);
var state_24339__$1 = state_24339;
if(cljs.core.truth_(inst_24301)){
var statearr_24359_24442 = state_24339__$1;
(statearr_24359_24442[(1)] = (35));

} else {
var statearr_24360_24443 = state_24339__$1;
(statearr_24360_24443[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (40))){
var inst_24314 = (state_24339[(20)]);
var inst_24313 = (state_24339[(2)]);
var inst_24314__$1 = cljs.core.get.call(null,inst_24313,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24315 = cljs.core.get.call(null,inst_24313,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24316 = cljs.core.not_empty.call(null,inst_24314__$1);
var state_24339__$1 = (function (){var statearr_24361 = state_24339;
(statearr_24361[(20)] = inst_24314__$1);

(statearr_24361[(21)] = inst_24315);

return statearr_24361;
})();
if(cljs.core.truth_(inst_24316)){
var statearr_24362_24444 = state_24339__$1;
(statearr_24362_24444[(1)] = (41));

} else {
var statearr_24363_24445 = state_24339__$1;
(statearr_24363_24445[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (33))){
var state_24339__$1 = state_24339;
var statearr_24364_24446 = state_24339__$1;
(statearr_24364_24446[(2)] = false);

(statearr_24364_24446[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (13))){
var inst_24213 = (state_24339[(22)]);
var inst_24217 = cljs.core.chunk_first.call(null,inst_24213);
var inst_24218 = cljs.core.chunk_rest.call(null,inst_24213);
var inst_24219 = cljs.core.count.call(null,inst_24217);
var inst_24200 = inst_24218;
var inst_24201 = inst_24217;
var inst_24202 = inst_24219;
var inst_24203 = (0);
var state_24339__$1 = (function (){var statearr_24365 = state_24339;
(statearr_24365[(7)] = inst_24203);

(statearr_24365[(8)] = inst_24202);

(statearr_24365[(9)] = inst_24200);

(statearr_24365[(10)] = inst_24201);

return statearr_24365;
})();
var statearr_24366_24447 = state_24339__$1;
(statearr_24366_24447[(2)] = null);

(statearr_24366_24447[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (22))){
var inst_24261 = (state_24339[(23)]);
var inst_24253 = (state_24339[(19)]);
var inst_24257 = (state_24339[(24)]);
var inst_24256 = (state_24339[(25)]);
var inst_24256__$1 = (state_24339[(2)]);
var inst_24257__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24256__$1);
var inst_24258 = (function (){var all_files = inst_24253;
var res_SINGLEQUOTE_ = inst_24256__$1;
var res = inst_24257__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24261,inst_24253,inst_24257,inst_24256,inst_24256__$1,inst_24257__$1,state_val_24340,c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23936_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23936_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24261,inst_24253,inst_24257,inst_24256,inst_24256__$1,inst_24257__$1,state_val_24340,c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24259 = cljs.core.filter.call(null,inst_24258,inst_24256__$1);
var inst_24260 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24261__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24260);
var inst_24262 = cljs.core.not_empty.call(null,inst_24261__$1);
var state_24339__$1 = (function (){var statearr_24367 = state_24339;
(statearr_24367[(26)] = inst_24259);

(statearr_24367[(23)] = inst_24261__$1);

(statearr_24367[(24)] = inst_24257__$1);

(statearr_24367[(25)] = inst_24256__$1);

return statearr_24367;
})();
if(cljs.core.truth_(inst_24262)){
var statearr_24368_24448 = state_24339__$1;
(statearr_24368_24448[(1)] = (23));

} else {
var statearr_24369_24449 = state_24339__$1;
(statearr_24369_24449[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (36))){
var state_24339__$1 = state_24339;
var statearr_24370_24450 = state_24339__$1;
(statearr_24370_24450[(2)] = false);

(statearr_24370_24450[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (41))){
var inst_24314 = (state_24339[(20)]);
var inst_24318 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24319 = cljs.core.map.call(null,inst_24318,inst_24314);
var inst_24320 = cljs.core.pr_str.call(null,inst_24319);
var inst_24321 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24320)].join('');
var inst_24322 = figwheel.client.utils.log.call(null,inst_24321);
var state_24339__$1 = state_24339;
var statearr_24371_24451 = state_24339__$1;
(statearr_24371_24451[(2)] = inst_24322);

(statearr_24371_24451[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (43))){
var inst_24315 = (state_24339[(21)]);
var inst_24325 = (state_24339[(2)]);
var inst_24326 = cljs.core.not_empty.call(null,inst_24315);
var state_24339__$1 = (function (){var statearr_24372 = state_24339;
(statearr_24372[(27)] = inst_24325);

return statearr_24372;
})();
if(cljs.core.truth_(inst_24326)){
var statearr_24373_24452 = state_24339__$1;
(statearr_24373_24452[(1)] = (44));

} else {
var statearr_24374_24453 = state_24339__$1;
(statearr_24374_24453[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (29))){
var inst_24259 = (state_24339[(26)]);
var inst_24261 = (state_24339[(23)]);
var inst_24253 = (state_24339[(19)]);
var inst_24293 = (state_24339[(16)]);
var inst_24257 = (state_24339[(24)]);
var inst_24256 = (state_24339[(25)]);
var inst_24289 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24292 = (function (){var all_files = inst_24253;
var res_SINGLEQUOTE_ = inst_24256;
var res = inst_24257;
var files_not_loaded = inst_24259;
var dependencies_that_loaded = inst_24261;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24259,inst_24261,inst_24253,inst_24293,inst_24257,inst_24256,inst_24289,state_val_24340,c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24291){
var map__24375 = p__24291;
var map__24375__$1 = ((((!((map__24375 == null)))?((((map__24375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24375):map__24375);
var namespace = cljs.core.get.call(null,map__24375__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24259,inst_24261,inst_24253,inst_24293,inst_24257,inst_24256,inst_24289,state_val_24340,c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24293__$1 = cljs.core.group_by.call(null,inst_24292,inst_24259);
var inst_24295 = (inst_24293__$1 == null);
var inst_24296 = cljs.core.not.call(null,inst_24295);
var state_24339__$1 = (function (){var statearr_24377 = state_24339;
(statearr_24377[(28)] = inst_24289);

(statearr_24377[(16)] = inst_24293__$1);

return statearr_24377;
})();
if(inst_24296){
var statearr_24378_24454 = state_24339__$1;
(statearr_24378_24454[(1)] = (32));

} else {
var statearr_24379_24455 = state_24339__$1;
(statearr_24379_24455[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (44))){
var inst_24315 = (state_24339[(21)]);
var inst_24328 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24315);
var inst_24329 = cljs.core.pr_str.call(null,inst_24328);
var inst_24330 = [cljs.core.str("not required: "),cljs.core.str(inst_24329)].join('');
var inst_24331 = figwheel.client.utils.log.call(null,inst_24330);
var state_24339__$1 = state_24339;
var statearr_24380_24456 = state_24339__$1;
(statearr_24380_24456[(2)] = inst_24331);

(statearr_24380_24456[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (6))){
var inst_24234 = (state_24339[(2)]);
var state_24339__$1 = state_24339;
var statearr_24381_24457 = state_24339__$1;
(statearr_24381_24457[(2)] = inst_24234);

(statearr_24381_24457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (28))){
var inst_24259 = (state_24339[(26)]);
var inst_24286 = (state_24339[(2)]);
var inst_24287 = cljs.core.not_empty.call(null,inst_24259);
var state_24339__$1 = (function (){var statearr_24382 = state_24339;
(statearr_24382[(29)] = inst_24286);

return statearr_24382;
})();
if(cljs.core.truth_(inst_24287)){
var statearr_24383_24458 = state_24339__$1;
(statearr_24383_24458[(1)] = (29));

} else {
var statearr_24384_24459 = state_24339__$1;
(statearr_24384_24459[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (25))){
var inst_24257 = (state_24339[(24)]);
var inst_24273 = (state_24339[(2)]);
var inst_24274 = cljs.core.not_empty.call(null,inst_24257);
var state_24339__$1 = (function (){var statearr_24385 = state_24339;
(statearr_24385[(30)] = inst_24273);

return statearr_24385;
})();
if(cljs.core.truth_(inst_24274)){
var statearr_24386_24460 = state_24339__$1;
(statearr_24386_24460[(1)] = (26));

} else {
var statearr_24387_24461 = state_24339__$1;
(statearr_24387_24461[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (34))){
var inst_24308 = (state_24339[(2)]);
var state_24339__$1 = state_24339;
if(cljs.core.truth_(inst_24308)){
var statearr_24388_24462 = state_24339__$1;
(statearr_24388_24462[(1)] = (38));

} else {
var statearr_24389_24463 = state_24339__$1;
(statearr_24389_24463[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (17))){
var state_24339__$1 = state_24339;
var statearr_24390_24464 = state_24339__$1;
(statearr_24390_24464[(2)] = recompile_dependents);

(statearr_24390_24464[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (3))){
var state_24339__$1 = state_24339;
var statearr_24391_24465 = state_24339__$1;
(statearr_24391_24465[(2)] = null);

(statearr_24391_24465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (12))){
var inst_24230 = (state_24339[(2)]);
var state_24339__$1 = state_24339;
var statearr_24392_24466 = state_24339__$1;
(statearr_24392_24466[(2)] = inst_24230);

(statearr_24392_24466[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (2))){
var inst_24192 = (state_24339[(13)]);
var inst_24199 = cljs.core.seq.call(null,inst_24192);
var inst_24200 = inst_24199;
var inst_24201 = null;
var inst_24202 = (0);
var inst_24203 = (0);
var state_24339__$1 = (function (){var statearr_24393 = state_24339;
(statearr_24393[(7)] = inst_24203);

(statearr_24393[(8)] = inst_24202);

(statearr_24393[(9)] = inst_24200);

(statearr_24393[(10)] = inst_24201);

return statearr_24393;
})();
var statearr_24394_24467 = state_24339__$1;
(statearr_24394_24467[(2)] = null);

(statearr_24394_24467[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (23))){
var inst_24259 = (state_24339[(26)]);
var inst_24261 = (state_24339[(23)]);
var inst_24253 = (state_24339[(19)]);
var inst_24257 = (state_24339[(24)]);
var inst_24256 = (state_24339[(25)]);
var inst_24264 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24266 = (function (){var all_files = inst_24253;
var res_SINGLEQUOTE_ = inst_24256;
var res = inst_24257;
var files_not_loaded = inst_24259;
var dependencies_that_loaded = inst_24261;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24259,inst_24261,inst_24253,inst_24257,inst_24256,inst_24264,state_val_24340,c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24265){
var map__24395 = p__24265;
var map__24395__$1 = ((((!((map__24395 == null)))?((((map__24395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24395):map__24395);
var request_url = cljs.core.get.call(null,map__24395__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24259,inst_24261,inst_24253,inst_24257,inst_24256,inst_24264,state_val_24340,c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24267 = cljs.core.reverse.call(null,inst_24261);
var inst_24268 = cljs.core.map.call(null,inst_24266,inst_24267);
var inst_24269 = cljs.core.pr_str.call(null,inst_24268);
var inst_24270 = figwheel.client.utils.log.call(null,inst_24269);
var state_24339__$1 = (function (){var statearr_24397 = state_24339;
(statearr_24397[(31)] = inst_24264);

return statearr_24397;
})();
var statearr_24398_24468 = state_24339__$1;
(statearr_24398_24468[(2)] = inst_24270);

(statearr_24398_24468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (35))){
var state_24339__$1 = state_24339;
var statearr_24399_24469 = state_24339__$1;
(statearr_24399_24469[(2)] = true);

(statearr_24399_24469[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (19))){
var inst_24243 = (state_24339[(12)]);
var inst_24249 = figwheel.client.file_reloading.expand_files.call(null,inst_24243);
var state_24339__$1 = state_24339;
var statearr_24400_24470 = state_24339__$1;
(statearr_24400_24470[(2)] = inst_24249);

(statearr_24400_24470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (11))){
var state_24339__$1 = state_24339;
var statearr_24401_24471 = state_24339__$1;
(statearr_24401_24471[(2)] = null);

(statearr_24401_24471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (9))){
var inst_24232 = (state_24339[(2)]);
var state_24339__$1 = state_24339;
var statearr_24402_24472 = state_24339__$1;
(statearr_24402_24472[(2)] = inst_24232);

(statearr_24402_24472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (5))){
var inst_24203 = (state_24339[(7)]);
var inst_24202 = (state_24339[(8)]);
var inst_24205 = (inst_24203 < inst_24202);
var inst_24206 = inst_24205;
var state_24339__$1 = state_24339;
if(cljs.core.truth_(inst_24206)){
var statearr_24403_24473 = state_24339__$1;
(statearr_24403_24473[(1)] = (7));

} else {
var statearr_24404_24474 = state_24339__$1;
(statearr_24404_24474[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (14))){
var inst_24213 = (state_24339[(22)]);
var inst_24222 = cljs.core.first.call(null,inst_24213);
var inst_24223 = figwheel.client.file_reloading.eval_body.call(null,inst_24222,opts);
var inst_24224 = cljs.core.next.call(null,inst_24213);
var inst_24200 = inst_24224;
var inst_24201 = null;
var inst_24202 = (0);
var inst_24203 = (0);
var state_24339__$1 = (function (){var statearr_24405 = state_24339;
(statearr_24405[(7)] = inst_24203);

(statearr_24405[(8)] = inst_24202);

(statearr_24405[(9)] = inst_24200);

(statearr_24405[(10)] = inst_24201);

(statearr_24405[(32)] = inst_24223);

return statearr_24405;
})();
var statearr_24406_24475 = state_24339__$1;
(statearr_24406_24475[(2)] = null);

(statearr_24406_24475[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (45))){
var state_24339__$1 = state_24339;
var statearr_24407_24476 = state_24339__$1;
(statearr_24407_24476[(2)] = null);

(statearr_24407_24476[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (26))){
var inst_24259 = (state_24339[(26)]);
var inst_24261 = (state_24339[(23)]);
var inst_24253 = (state_24339[(19)]);
var inst_24257 = (state_24339[(24)]);
var inst_24256 = (state_24339[(25)]);
var inst_24276 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24278 = (function (){var all_files = inst_24253;
var res_SINGLEQUOTE_ = inst_24256;
var res = inst_24257;
var files_not_loaded = inst_24259;
var dependencies_that_loaded = inst_24261;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24259,inst_24261,inst_24253,inst_24257,inst_24256,inst_24276,state_val_24340,c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24277){
var map__24408 = p__24277;
var map__24408__$1 = ((((!((map__24408 == null)))?((((map__24408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24408):map__24408);
var namespace = cljs.core.get.call(null,map__24408__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24408__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24259,inst_24261,inst_24253,inst_24257,inst_24256,inst_24276,state_val_24340,c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24279 = cljs.core.map.call(null,inst_24278,inst_24257);
var inst_24280 = cljs.core.pr_str.call(null,inst_24279);
var inst_24281 = figwheel.client.utils.log.call(null,inst_24280);
var inst_24282 = (function (){var all_files = inst_24253;
var res_SINGLEQUOTE_ = inst_24256;
var res = inst_24257;
var files_not_loaded = inst_24259;
var dependencies_that_loaded = inst_24261;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24259,inst_24261,inst_24253,inst_24257,inst_24256,inst_24276,inst_24278,inst_24279,inst_24280,inst_24281,state_val_24340,c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24259,inst_24261,inst_24253,inst_24257,inst_24256,inst_24276,inst_24278,inst_24279,inst_24280,inst_24281,state_val_24340,c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24283 = setTimeout(inst_24282,(10));
var state_24339__$1 = (function (){var statearr_24410 = state_24339;
(statearr_24410[(33)] = inst_24276);

(statearr_24410[(34)] = inst_24281);

return statearr_24410;
})();
var statearr_24411_24477 = state_24339__$1;
(statearr_24411_24477[(2)] = inst_24283);

(statearr_24411_24477[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (16))){
var state_24339__$1 = state_24339;
var statearr_24412_24478 = state_24339__$1;
(statearr_24412_24478[(2)] = reload_dependents);

(statearr_24412_24478[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (38))){
var inst_24293 = (state_24339[(16)]);
var inst_24310 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24293);
var state_24339__$1 = state_24339;
var statearr_24413_24479 = state_24339__$1;
(statearr_24413_24479[(2)] = inst_24310);

(statearr_24413_24479[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (30))){
var state_24339__$1 = state_24339;
var statearr_24414_24480 = state_24339__$1;
(statearr_24414_24480[(2)] = null);

(statearr_24414_24480[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (10))){
var inst_24213 = (state_24339[(22)]);
var inst_24215 = cljs.core.chunked_seq_QMARK_.call(null,inst_24213);
var state_24339__$1 = state_24339;
if(inst_24215){
var statearr_24415_24481 = state_24339__$1;
(statearr_24415_24481[(1)] = (13));

} else {
var statearr_24416_24482 = state_24339__$1;
(statearr_24416_24482[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (18))){
var inst_24247 = (state_24339[(2)]);
var state_24339__$1 = state_24339;
if(cljs.core.truth_(inst_24247)){
var statearr_24417_24483 = state_24339__$1;
(statearr_24417_24483[(1)] = (19));

} else {
var statearr_24418_24484 = state_24339__$1;
(statearr_24418_24484[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (42))){
var state_24339__$1 = state_24339;
var statearr_24419_24485 = state_24339__$1;
(statearr_24419_24485[(2)] = null);

(statearr_24419_24485[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (37))){
var inst_24305 = (state_24339[(2)]);
var state_24339__$1 = state_24339;
var statearr_24420_24486 = state_24339__$1;
(statearr_24420_24486[(2)] = inst_24305);

(statearr_24420_24486[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (8))){
var inst_24200 = (state_24339[(9)]);
var inst_24213 = (state_24339[(22)]);
var inst_24213__$1 = cljs.core.seq.call(null,inst_24200);
var state_24339__$1 = (function (){var statearr_24421 = state_24339;
(statearr_24421[(22)] = inst_24213__$1);

return statearr_24421;
})();
if(inst_24213__$1){
var statearr_24422_24487 = state_24339__$1;
(statearr_24422_24487[(1)] = (10));

} else {
var statearr_24423_24488 = state_24339__$1;
(statearr_24423_24488[(1)] = (11));

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
});})(c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20379__auto__,c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20380__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20380__auto____0 = (function (){
var statearr_24427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24427[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20380__auto__);

(statearr_24427[(1)] = (1));

return statearr_24427;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20380__auto____1 = (function (state_24339){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_24339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e24428){if((e24428 instanceof Object)){
var ex__20383__auto__ = e24428;
var statearr_24429_24489 = state_24339;
(statearr_24429_24489[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24490 = state_24339;
state_24339 = G__24490;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20380__auto__ = function(state_24339){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20380__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20380__auto____1.call(this,state_24339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20380__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20380__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20402__auto__ = (function (){var statearr_24430 = f__20401__auto__.call(null);
(statearr_24430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto__);

return statearr_24430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto__,map__24185,map__24185__$1,opts,before_jsload,on_jsload,reload_dependents,map__24186,map__24186__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20400__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24493,link){
var map__24496 = p__24493;
var map__24496__$1 = ((((!((map__24496 == null)))?((((map__24496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24496):map__24496);
var file = cljs.core.get.call(null,map__24496__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__24496,map__24496__$1,file){
return (function (p1__24491_SHARP_,p2__24492_SHARP_){
if(cljs.core._EQ_.call(null,p1__24491_SHARP_,p2__24492_SHARP_)){
return p1__24491_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__24496,map__24496__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24502){
var map__24503 = p__24502;
var map__24503__$1 = ((((!((map__24503 == null)))?((((map__24503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24503):map__24503);
var match_length = cljs.core.get.call(null,map__24503__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24503__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24498_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24498_SHARP_);
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
var args24505 = [];
var len__19330__auto___24508 = arguments.length;
var i__19331__auto___24509 = (0);
while(true){
if((i__19331__auto___24509 < len__19330__auto___24508)){
args24505.push((arguments[i__19331__auto___24509]));

var G__24510 = (i__19331__auto___24509 + (1));
i__19331__auto___24509 = G__24510;
continue;
} else {
}
break;
}

var G__24507 = args24505.length;
switch (G__24507) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24505.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24512_SHARP_,p2__24513_SHARP_){
return cljs.core.assoc.call(null,p1__24512_SHARP_,cljs.core.get.call(null,p2__24513_SHARP_,key),p2__24513_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24514){
var map__24517 = p__24514;
var map__24517__$1 = ((((!((map__24517 == null)))?((((map__24517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24517):map__24517);
var f_data = map__24517__$1;
var file = cljs.core.get.call(null,map__24517__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24519,files_msg){
var map__24526 = p__24519;
var map__24526__$1 = ((((!((map__24526 == null)))?((((map__24526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24526):map__24526);
var opts = map__24526__$1;
var on_cssload = cljs.core.get.call(null,map__24526__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24528_24532 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24529_24533 = null;
var count__24530_24534 = (0);
var i__24531_24535 = (0);
while(true){
if((i__24531_24535 < count__24530_24534)){
var f_24536 = cljs.core._nth.call(null,chunk__24529_24533,i__24531_24535);
figwheel.client.file_reloading.reload_css_file.call(null,f_24536);

var G__24537 = seq__24528_24532;
var G__24538 = chunk__24529_24533;
var G__24539 = count__24530_24534;
var G__24540 = (i__24531_24535 + (1));
seq__24528_24532 = G__24537;
chunk__24529_24533 = G__24538;
count__24530_24534 = G__24539;
i__24531_24535 = G__24540;
continue;
} else {
var temp__4425__auto___24541 = cljs.core.seq.call(null,seq__24528_24532);
if(temp__4425__auto___24541){
var seq__24528_24542__$1 = temp__4425__auto___24541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24528_24542__$1)){
var c__19079__auto___24543 = cljs.core.chunk_first.call(null,seq__24528_24542__$1);
var G__24544 = cljs.core.chunk_rest.call(null,seq__24528_24542__$1);
var G__24545 = c__19079__auto___24543;
var G__24546 = cljs.core.count.call(null,c__19079__auto___24543);
var G__24547 = (0);
seq__24528_24532 = G__24544;
chunk__24529_24533 = G__24545;
count__24530_24534 = G__24546;
i__24531_24535 = G__24547;
continue;
} else {
var f_24548 = cljs.core.first.call(null,seq__24528_24542__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24548);

var G__24549 = cljs.core.next.call(null,seq__24528_24542__$1);
var G__24550 = null;
var G__24551 = (0);
var G__24552 = (0);
seq__24528_24532 = G__24549;
chunk__24529_24533 = G__24550;
count__24530_24534 = G__24551;
i__24531_24535 = G__24552;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24526,map__24526__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24526,map__24526__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map