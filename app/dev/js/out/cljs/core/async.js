// Compiled by ClojureScript 1.7.228 {:elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async20719 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20719 = (function (fn_handler,f,meta20720){
this.fn_handler = fn_handler;
this.f = f;
this.meta20720 = meta20720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20721,meta20720__$1){
var self__ = this;
var _20721__$1 = this;
return (new cljs.core.async.t_cljs$core$async20719(self__.fn_handler,self__.f,meta20720__$1));
});

cljs.core.async.t_cljs$core$async20719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20721){
var self__ = this;
var _20721__$1 = this;
return self__.meta20720;
});

cljs.core.async.t_cljs$core$async20719.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20719.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20719.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta20720","meta20720",-891761703,null)], null);
});

cljs.core.async.t_cljs$core$async20719.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20719";

cljs.core.async.t_cljs$core$async20719.cljs$lang$ctorPrWriter = (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async20719");
});

cljs.core.async.__GT_t_cljs$core$async20719 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async20719(fn_handler__$1,f__$1,meta20720){
return (new cljs.core.async.t_cljs$core$async20719(fn_handler__$1,f__$1,meta20720));
});

}

return (new cljs.core.async.t_cljs$core$async20719(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20724 = [];
var len__19330__auto___20727 = arguments.length;
var i__19331__auto___20728 = (0);
while(true){
if((i__19331__auto___20728 < len__19330__auto___20727)){
args20724.push((arguments[i__19331__auto___20728]));

var G__20729 = (i__19331__auto___20728 + (1));
i__19331__auto___20728 = G__20729;
continue;
} else {
}
break;
}

var G__20726 = args20724.length;
switch (G__20726) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20724.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20731 = [];
var len__19330__auto___20734 = arguments.length;
var i__19331__auto___20735 = (0);
while(true){
if((i__19331__auto___20735 < len__19330__auto___20734)){
args20731.push((arguments[i__19331__auto___20735]));

var G__20736 = (i__19331__auto___20735 + (1));
i__19331__auto___20735 = G__20736;
continue;
} else {
}
break;
}

var G__20733 = args20731.length;
switch (G__20733) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20731.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20738 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20738);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20738,ret){
return (function (){
return fn1.call(null,val_20738);
});})(val_20738,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20739 = [];
var len__19330__auto___20742 = arguments.length;
var i__19331__auto___20743 = (0);
while(true){
if((i__19331__auto___20743 < len__19330__auto___20742)){
args20739.push((arguments[i__19331__auto___20743]));

var G__20744 = (i__19331__auto___20743 + (1));
i__19331__auto___20743 = G__20744;
continue;
} else {
}
break;
}

var G__20741 = args20739.length;
switch (G__20741) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20739.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19179__auto___20746 = n;
var x_20747 = (0);
while(true){
if((x_20747 < n__19179__auto___20746)){
(a[x_20747] = (0));

var G__20748 = (x_20747 + (1));
x_20747 = G__20748;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20749 = (i + (1));
i = G__20749;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20753 = (function (alt_flag,flag,meta20754){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20754 = meta20754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20755,meta20754__$1){
var self__ = this;
var _20755__$1 = this;
return (new cljs.core.async.t_cljs$core$async20753(self__.alt_flag,self__.flag,meta20754__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20753.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20755){
var self__ = this;
var _20755__$1 = this;
return self__.meta20754;
});})(flag))
;

cljs.core.async.t_cljs$core$async20753.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20753.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20754","meta20754",-1693739453,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20753";

cljs.core.async.t_cljs$core$async20753.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async20753");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20753 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20753(alt_flag__$1,flag__$1,meta20754){
return (new cljs.core.async.t_cljs$core$async20753(alt_flag__$1,flag__$1,meta20754));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20753(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20759 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20759 = (function (alt_handler,flag,cb,meta20760){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20760 = meta20760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20761,meta20760__$1){
var self__ = this;
var _20761__$1 = this;
return (new cljs.core.async.t_cljs$core$async20759(self__.alt_handler,self__.flag,self__.cb,meta20760__$1));
});

cljs.core.async.t_cljs$core$async20759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20761){
var self__ = this;
var _20761__$1 = this;
return self__.meta20760;
});

cljs.core.async.t_cljs$core$async20759.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20759.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20759.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20760","meta20760",698877431,null)], null);
});

cljs.core.async.t_cljs$core$async20759.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20759";

cljs.core.async.t_cljs$core$async20759.cljs$lang$ctorPrWriter = (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async20759");
});

cljs.core.async.__GT_t_cljs$core$async20759 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20759(alt_handler__$1,flag__$1,cb__$1,meta20760){
return (new cljs.core.async.t_cljs$core$async20759(alt_handler__$1,flag__$1,cb__$1,meta20760));
});

}

return (new cljs.core.async.t_cljs$core$async20759(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20762_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20762_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20763_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20763_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18276__auto__ = wport;
if(cljs.core.truth_(or__18276__auto__)){
return or__18276__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20764 = (i + (1));
i = G__20764;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18276__auto__ = ret;
if(cljs.core.truth_(or__18276__auto__)){
return or__18276__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__18264__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18264__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18264__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19337__auto__ = [];
var len__19330__auto___20770 = arguments.length;
var i__19331__auto___20771 = (0);
while(true){
if((i__19331__auto___20771 < len__19330__auto___20770)){
args__19337__auto__.push((arguments[i__19331__auto___20771]));

var G__20772 = (i__19331__auto___20771 + (1));
i__19331__auto___20771 = G__20772;
continue;
} else {
}
break;
}

var argseq__19338__auto__ = ((((1) < args__19337__auto__.length))?(new cljs.core.IndexedSeq(args__19337__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19338__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20767){
var map__20768 = p__20767;
var map__20768__$1 = ((((!((map__20768 == null)))?((((map__20768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20768):map__20768);
var opts = map__20768__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20765){
var G__20766 = cljs.core.first.call(null,seq20765);
var seq20765__$1 = cljs.core.next.call(null,seq20765);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20766,seq20765__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20773 = [];
var len__19330__auto___20823 = arguments.length;
var i__19331__auto___20824 = (0);
while(true){
if((i__19331__auto___20824 < len__19330__auto___20823)){
args20773.push((arguments[i__19331__auto___20824]));

var G__20825 = (i__19331__auto___20824 + (1));
i__19331__auto___20824 = G__20825;
continue;
} else {
}
break;
}

var G__20775 = args20773.length;
switch (G__20775) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20773.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20400__auto___20827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto___20827){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto___20827){
return (function (state_20799){
var state_val_20800 = (state_20799[(1)]);
if((state_val_20800 === (7))){
var inst_20795 = (state_20799[(2)]);
var state_20799__$1 = state_20799;
var statearr_20801_20828 = state_20799__$1;
(statearr_20801_20828[(2)] = inst_20795);

(statearr_20801_20828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20800 === (1))){
var state_20799__$1 = state_20799;
var statearr_20802_20829 = state_20799__$1;
(statearr_20802_20829[(2)] = null);

(statearr_20802_20829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20800 === (4))){
var inst_20778 = (state_20799[(7)]);
var inst_20778__$1 = (state_20799[(2)]);
var inst_20779 = (inst_20778__$1 == null);
var state_20799__$1 = (function (){var statearr_20803 = state_20799;
(statearr_20803[(7)] = inst_20778__$1);

return statearr_20803;
})();
if(cljs.core.truth_(inst_20779)){
var statearr_20804_20830 = state_20799__$1;
(statearr_20804_20830[(1)] = (5));

} else {
var statearr_20805_20831 = state_20799__$1;
(statearr_20805_20831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20800 === (13))){
var state_20799__$1 = state_20799;
var statearr_20806_20832 = state_20799__$1;
(statearr_20806_20832[(2)] = null);

(statearr_20806_20832[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20800 === (6))){
var inst_20778 = (state_20799[(7)]);
var state_20799__$1 = state_20799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20799__$1,(11),to,inst_20778);
} else {
if((state_val_20800 === (3))){
var inst_20797 = (state_20799[(2)]);
var state_20799__$1 = state_20799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20799__$1,inst_20797);
} else {
if((state_val_20800 === (12))){
var state_20799__$1 = state_20799;
var statearr_20807_20833 = state_20799__$1;
(statearr_20807_20833[(2)] = null);

(statearr_20807_20833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20800 === (2))){
var state_20799__$1 = state_20799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20799__$1,(4),from);
} else {
if((state_val_20800 === (11))){
var inst_20788 = (state_20799[(2)]);
var state_20799__$1 = state_20799;
if(cljs.core.truth_(inst_20788)){
var statearr_20808_20834 = state_20799__$1;
(statearr_20808_20834[(1)] = (12));

} else {
var statearr_20809_20835 = state_20799__$1;
(statearr_20809_20835[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20800 === (9))){
var state_20799__$1 = state_20799;
var statearr_20810_20836 = state_20799__$1;
(statearr_20810_20836[(2)] = null);

(statearr_20810_20836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20800 === (5))){
var state_20799__$1 = state_20799;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20811_20837 = state_20799__$1;
(statearr_20811_20837[(1)] = (8));

} else {
var statearr_20812_20838 = state_20799__$1;
(statearr_20812_20838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20800 === (14))){
var inst_20793 = (state_20799[(2)]);
var state_20799__$1 = state_20799;
var statearr_20813_20839 = state_20799__$1;
(statearr_20813_20839[(2)] = inst_20793);

(statearr_20813_20839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20800 === (10))){
var inst_20785 = (state_20799[(2)]);
var state_20799__$1 = state_20799;
var statearr_20814_20840 = state_20799__$1;
(statearr_20814_20840[(2)] = inst_20785);

(statearr_20814_20840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20800 === (8))){
var inst_20782 = cljs.core.async.close_BANG_.call(null,to);
var state_20799__$1 = state_20799;
var statearr_20815_20841 = state_20799__$1;
(statearr_20815_20841[(2)] = inst_20782);

(statearr_20815_20841[(1)] = (10));


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
});})(c__20400__auto___20827))
;
return ((function (switch__20379__auto__,c__20400__auto___20827){
return (function() {
var cljs$core$async$state_machine__20380__auto__ = null;
var cljs$core$async$state_machine__20380__auto____0 = (function (){
var statearr_20819 = [null,null,null,null,null,null,null,null];
(statearr_20819[(0)] = cljs$core$async$state_machine__20380__auto__);

(statearr_20819[(1)] = (1));

return statearr_20819;
});
var cljs$core$async$state_machine__20380__auto____1 = (function (state_20799){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_20799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e20820){if((e20820 instanceof Object)){
var ex__20383__auto__ = e20820;
var statearr_20821_20842 = state_20799;
(statearr_20821_20842[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20843 = state_20799;
state_20799 = G__20843;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$state_machine__20380__auto__ = function(state_20799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20380__auto____1.call(this,state_20799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20380__auto____0;
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20380__auto____1;
return cljs$core$async$state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto___20827))
})();
var state__20402__auto__ = (function (){var statearr_20822 = f__20401__auto__.call(null);
(statearr_20822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___20827);

return statearr_20822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto___20827))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21027){
var vec__21028 = p__21027;
var v = cljs.core.nth.call(null,vec__21028,(0),null);
var p = cljs.core.nth.call(null,vec__21028,(1),null);
var job = vec__21028;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20400__auto___21210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto___21210,res,vec__21028,v,p,job,jobs,results){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto___21210,res,vec__21028,v,p,job,jobs,results){
return (function (state_21033){
var state_val_21034 = (state_21033[(1)]);
if((state_val_21034 === (1))){
var state_21033__$1 = state_21033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21033__$1,(2),res,v);
} else {
if((state_val_21034 === (2))){
var inst_21030 = (state_21033[(2)]);
var inst_21031 = cljs.core.async.close_BANG_.call(null,res);
var state_21033__$1 = (function (){var statearr_21035 = state_21033;
(statearr_21035[(7)] = inst_21030);

return statearr_21035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21033__$1,inst_21031);
} else {
return null;
}
}
});})(c__20400__auto___21210,res,vec__21028,v,p,job,jobs,results))
;
return ((function (switch__20379__auto__,c__20400__auto___21210,res,vec__21028,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____0 = (function (){
var statearr_21039 = [null,null,null,null,null,null,null,null];
(statearr_21039[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__);

(statearr_21039[(1)] = (1));

return statearr_21039;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____1 = (function (state_21033){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_21033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e21040){if((e21040 instanceof Object)){
var ex__20383__auto__ = e21040;
var statearr_21041_21211 = state_21033;
(statearr_21041_21211[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21212 = state_21033;
state_21033 = G__21212;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__ = function(state_21033){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____1.call(this,state_21033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto___21210,res,vec__21028,v,p,job,jobs,results))
})();
var state__20402__auto__ = (function (){var statearr_21042 = f__20401__auto__.call(null);
(statearr_21042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___21210);

return statearr_21042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto___21210,res,vec__21028,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21043){
var vec__21044 = p__21043;
var v = cljs.core.nth.call(null,vec__21044,(0),null);
var p = cljs.core.nth.call(null,vec__21044,(1),null);
var job = vec__21044;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19179__auto___21213 = n;
var __21214 = (0);
while(true){
if((__21214 < n__19179__auto___21213)){
var G__21045_21215 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21045_21215) {
case "compute":
var c__20400__auto___21217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21214,c__20400__auto___21217,G__21045_21215,n__19179__auto___21213,jobs,results,process,async){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (__21214,c__20400__auto___21217,G__21045_21215,n__19179__auto___21213,jobs,results,process,async){
return (function (state_21058){
var state_val_21059 = (state_21058[(1)]);
if((state_val_21059 === (1))){
var state_21058__$1 = state_21058;
var statearr_21060_21218 = state_21058__$1;
(statearr_21060_21218[(2)] = null);

(statearr_21060_21218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21059 === (2))){
var state_21058__$1 = state_21058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21058__$1,(4),jobs);
} else {
if((state_val_21059 === (3))){
var inst_21056 = (state_21058[(2)]);
var state_21058__$1 = state_21058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21058__$1,inst_21056);
} else {
if((state_val_21059 === (4))){
var inst_21048 = (state_21058[(2)]);
var inst_21049 = process.call(null,inst_21048);
var state_21058__$1 = state_21058;
if(cljs.core.truth_(inst_21049)){
var statearr_21061_21219 = state_21058__$1;
(statearr_21061_21219[(1)] = (5));

} else {
var statearr_21062_21220 = state_21058__$1;
(statearr_21062_21220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21059 === (5))){
var state_21058__$1 = state_21058;
var statearr_21063_21221 = state_21058__$1;
(statearr_21063_21221[(2)] = null);

(statearr_21063_21221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21059 === (6))){
var state_21058__$1 = state_21058;
var statearr_21064_21222 = state_21058__$1;
(statearr_21064_21222[(2)] = null);

(statearr_21064_21222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21059 === (7))){
var inst_21054 = (state_21058[(2)]);
var state_21058__$1 = state_21058;
var statearr_21065_21223 = state_21058__$1;
(statearr_21065_21223[(2)] = inst_21054);

(statearr_21065_21223[(1)] = (3));


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
});})(__21214,c__20400__auto___21217,G__21045_21215,n__19179__auto___21213,jobs,results,process,async))
;
return ((function (__21214,switch__20379__auto__,c__20400__auto___21217,G__21045_21215,n__19179__auto___21213,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____0 = (function (){
var statearr_21069 = [null,null,null,null,null,null,null];
(statearr_21069[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__);

(statearr_21069[(1)] = (1));

return statearr_21069;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____1 = (function (state_21058){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_21058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e21070){if((e21070 instanceof Object)){
var ex__20383__auto__ = e21070;
var statearr_21071_21224 = state_21058;
(statearr_21071_21224[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21225 = state_21058;
state_21058 = G__21225;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__ = function(state_21058){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____1.call(this,state_21058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__;
})()
;})(__21214,switch__20379__auto__,c__20400__auto___21217,G__21045_21215,n__19179__auto___21213,jobs,results,process,async))
})();
var state__20402__auto__ = (function (){var statearr_21072 = f__20401__auto__.call(null);
(statearr_21072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___21217);

return statearr_21072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(__21214,c__20400__auto___21217,G__21045_21215,n__19179__auto___21213,jobs,results,process,async))
);


break;
case "async":
var c__20400__auto___21226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21214,c__20400__auto___21226,G__21045_21215,n__19179__auto___21213,jobs,results,process,async){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (__21214,c__20400__auto___21226,G__21045_21215,n__19179__auto___21213,jobs,results,process,async){
return (function (state_21085){
var state_val_21086 = (state_21085[(1)]);
if((state_val_21086 === (1))){
var state_21085__$1 = state_21085;
var statearr_21087_21227 = state_21085__$1;
(statearr_21087_21227[(2)] = null);

(statearr_21087_21227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21086 === (2))){
var state_21085__$1 = state_21085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21085__$1,(4),jobs);
} else {
if((state_val_21086 === (3))){
var inst_21083 = (state_21085[(2)]);
var state_21085__$1 = state_21085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21085__$1,inst_21083);
} else {
if((state_val_21086 === (4))){
var inst_21075 = (state_21085[(2)]);
var inst_21076 = async.call(null,inst_21075);
var state_21085__$1 = state_21085;
if(cljs.core.truth_(inst_21076)){
var statearr_21088_21228 = state_21085__$1;
(statearr_21088_21228[(1)] = (5));

} else {
var statearr_21089_21229 = state_21085__$1;
(statearr_21089_21229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21086 === (5))){
var state_21085__$1 = state_21085;
var statearr_21090_21230 = state_21085__$1;
(statearr_21090_21230[(2)] = null);

(statearr_21090_21230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21086 === (6))){
var state_21085__$1 = state_21085;
var statearr_21091_21231 = state_21085__$1;
(statearr_21091_21231[(2)] = null);

(statearr_21091_21231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21086 === (7))){
var inst_21081 = (state_21085[(2)]);
var state_21085__$1 = state_21085;
var statearr_21092_21232 = state_21085__$1;
(statearr_21092_21232[(2)] = inst_21081);

(statearr_21092_21232[(1)] = (3));


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
});})(__21214,c__20400__auto___21226,G__21045_21215,n__19179__auto___21213,jobs,results,process,async))
;
return ((function (__21214,switch__20379__auto__,c__20400__auto___21226,G__21045_21215,n__19179__auto___21213,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____0 = (function (){
var statearr_21096 = [null,null,null,null,null,null,null];
(statearr_21096[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__);

(statearr_21096[(1)] = (1));

return statearr_21096;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____1 = (function (state_21085){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_21085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e21097){if((e21097 instanceof Object)){
var ex__20383__auto__ = e21097;
var statearr_21098_21233 = state_21085;
(statearr_21098_21233[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21234 = state_21085;
state_21085 = G__21234;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__ = function(state_21085){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____1.call(this,state_21085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__;
})()
;})(__21214,switch__20379__auto__,c__20400__auto___21226,G__21045_21215,n__19179__auto___21213,jobs,results,process,async))
})();
var state__20402__auto__ = (function (){var statearr_21099 = f__20401__auto__.call(null);
(statearr_21099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___21226);

return statearr_21099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(__21214,c__20400__auto___21226,G__21045_21215,n__19179__auto___21213,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21235 = (__21214 + (1));
__21214 = G__21235;
continue;
} else {
}
break;
}

var c__20400__auto___21236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto___21236,jobs,results,process,async){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto___21236,jobs,results,process,async){
return (function (state_21121){
var state_val_21122 = (state_21121[(1)]);
if((state_val_21122 === (1))){
var state_21121__$1 = state_21121;
var statearr_21123_21237 = state_21121__$1;
(statearr_21123_21237[(2)] = null);

(statearr_21123_21237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (2))){
var state_21121__$1 = state_21121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21121__$1,(4),from);
} else {
if((state_val_21122 === (3))){
var inst_21119 = (state_21121[(2)]);
var state_21121__$1 = state_21121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21121__$1,inst_21119);
} else {
if((state_val_21122 === (4))){
var inst_21102 = (state_21121[(7)]);
var inst_21102__$1 = (state_21121[(2)]);
var inst_21103 = (inst_21102__$1 == null);
var state_21121__$1 = (function (){var statearr_21124 = state_21121;
(statearr_21124[(7)] = inst_21102__$1);

return statearr_21124;
})();
if(cljs.core.truth_(inst_21103)){
var statearr_21125_21238 = state_21121__$1;
(statearr_21125_21238[(1)] = (5));

} else {
var statearr_21126_21239 = state_21121__$1;
(statearr_21126_21239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (5))){
var inst_21105 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21121__$1 = state_21121;
var statearr_21127_21240 = state_21121__$1;
(statearr_21127_21240[(2)] = inst_21105);

(statearr_21127_21240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (6))){
var inst_21102 = (state_21121[(7)]);
var inst_21107 = (state_21121[(8)]);
var inst_21107__$1 = cljs.core.async.chan.call(null,(1));
var inst_21108 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21109 = [inst_21102,inst_21107__$1];
var inst_21110 = (new cljs.core.PersistentVector(null,2,(5),inst_21108,inst_21109,null));
var state_21121__$1 = (function (){var statearr_21128 = state_21121;
(statearr_21128[(8)] = inst_21107__$1);

return statearr_21128;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21121__$1,(8),jobs,inst_21110);
} else {
if((state_val_21122 === (7))){
var inst_21117 = (state_21121[(2)]);
var state_21121__$1 = state_21121;
var statearr_21129_21241 = state_21121__$1;
(statearr_21129_21241[(2)] = inst_21117);

(statearr_21129_21241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (8))){
var inst_21107 = (state_21121[(8)]);
var inst_21112 = (state_21121[(2)]);
var state_21121__$1 = (function (){var statearr_21130 = state_21121;
(statearr_21130[(9)] = inst_21112);

return statearr_21130;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21121__$1,(9),results,inst_21107);
} else {
if((state_val_21122 === (9))){
var inst_21114 = (state_21121[(2)]);
var state_21121__$1 = (function (){var statearr_21131 = state_21121;
(statearr_21131[(10)] = inst_21114);

return statearr_21131;
})();
var statearr_21132_21242 = state_21121__$1;
(statearr_21132_21242[(2)] = null);

(statearr_21132_21242[(1)] = (2));


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
});})(c__20400__auto___21236,jobs,results,process,async))
;
return ((function (switch__20379__auto__,c__20400__auto___21236,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____0 = (function (){
var statearr_21136 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21136[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__);

(statearr_21136[(1)] = (1));

return statearr_21136;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____1 = (function (state_21121){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_21121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e21137){if((e21137 instanceof Object)){
var ex__20383__auto__ = e21137;
var statearr_21138_21243 = state_21121;
(statearr_21138_21243[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21244 = state_21121;
state_21121 = G__21244;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__ = function(state_21121){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____1.call(this,state_21121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto___21236,jobs,results,process,async))
})();
var state__20402__auto__ = (function (){var statearr_21139 = f__20401__auto__.call(null);
(statearr_21139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___21236);

return statearr_21139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto___21236,jobs,results,process,async))
);


var c__20400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto__,jobs,results,process,async){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto__,jobs,results,process,async){
return (function (state_21177){
var state_val_21178 = (state_21177[(1)]);
if((state_val_21178 === (7))){
var inst_21173 = (state_21177[(2)]);
var state_21177__$1 = state_21177;
var statearr_21179_21245 = state_21177__$1;
(statearr_21179_21245[(2)] = inst_21173);

(statearr_21179_21245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21178 === (20))){
var state_21177__$1 = state_21177;
var statearr_21180_21246 = state_21177__$1;
(statearr_21180_21246[(2)] = null);

(statearr_21180_21246[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21178 === (1))){
var state_21177__$1 = state_21177;
var statearr_21181_21247 = state_21177__$1;
(statearr_21181_21247[(2)] = null);

(statearr_21181_21247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21178 === (4))){
var inst_21142 = (state_21177[(7)]);
var inst_21142__$1 = (state_21177[(2)]);
var inst_21143 = (inst_21142__$1 == null);
var state_21177__$1 = (function (){var statearr_21182 = state_21177;
(statearr_21182[(7)] = inst_21142__$1);

return statearr_21182;
})();
if(cljs.core.truth_(inst_21143)){
var statearr_21183_21248 = state_21177__$1;
(statearr_21183_21248[(1)] = (5));

} else {
var statearr_21184_21249 = state_21177__$1;
(statearr_21184_21249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21178 === (15))){
var inst_21155 = (state_21177[(8)]);
var state_21177__$1 = state_21177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21177__$1,(18),to,inst_21155);
} else {
if((state_val_21178 === (21))){
var inst_21168 = (state_21177[(2)]);
var state_21177__$1 = state_21177;
var statearr_21185_21250 = state_21177__$1;
(statearr_21185_21250[(2)] = inst_21168);

(statearr_21185_21250[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21178 === (13))){
var inst_21170 = (state_21177[(2)]);
var state_21177__$1 = (function (){var statearr_21186 = state_21177;
(statearr_21186[(9)] = inst_21170);

return statearr_21186;
})();
var statearr_21187_21251 = state_21177__$1;
(statearr_21187_21251[(2)] = null);

(statearr_21187_21251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21178 === (6))){
var inst_21142 = (state_21177[(7)]);
var state_21177__$1 = state_21177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21177__$1,(11),inst_21142);
} else {
if((state_val_21178 === (17))){
var inst_21163 = (state_21177[(2)]);
var state_21177__$1 = state_21177;
if(cljs.core.truth_(inst_21163)){
var statearr_21188_21252 = state_21177__$1;
(statearr_21188_21252[(1)] = (19));

} else {
var statearr_21189_21253 = state_21177__$1;
(statearr_21189_21253[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21178 === (3))){
var inst_21175 = (state_21177[(2)]);
var state_21177__$1 = state_21177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21177__$1,inst_21175);
} else {
if((state_val_21178 === (12))){
var inst_21152 = (state_21177[(10)]);
var state_21177__$1 = state_21177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21177__$1,(14),inst_21152);
} else {
if((state_val_21178 === (2))){
var state_21177__$1 = state_21177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21177__$1,(4),results);
} else {
if((state_val_21178 === (19))){
var state_21177__$1 = state_21177;
var statearr_21190_21254 = state_21177__$1;
(statearr_21190_21254[(2)] = null);

(statearr_21190_21254[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21178 === (11))){
var inst_21152 = (state_21177[(2)]);
var state_21177__$1 = (function (){var statearr_21191 = state_21177;
(statearr_21191[(10)] = inst_21152);

return statearr_21191;
})();
var statearr_21192_21255 = state_21177__$1;
(statearr_21192_21255[(2)] = null);

(statearr_21192_21255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21178 === (9))){
var state_21177__$1 = state_21177;
var statearr_21193_21256 = state_21177__$1;
(statearr_21193_21256[(2)] = null);

(statearr_21193_21256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21178 === (5))){
var state_21177__$1 = state_21177;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21194_21257 = state_21177__$1;
(statearr_21194_21257[(1)] = (8));

} else {
var statearr_21195_21258 = state_21177__$1;
(statearr_21195_21258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21178 === (14))){
var inst_21157 = (state_21177[(11)]);
var inst_21155 = (state_21177[(8)]);
var inst_21155__$1 = (state_21177[(2)]);
var inst_21156 = (inst_21155__$1 == null);
var inst_21157__$1 = cljs.core.not.call(null,inst_21156);
var state_21177__$1 = (function (){var statearr_21196 = state_21177;
(statearr_21196[(11)] = inst_21157__$1);

(statearr_21196[(8)] = inst_21155__$1);

return statearr_21196;
})();
if(inst_21157__$1){
var statearr_21197_21259 = state_21177__$1;
(statearr_21197_21259[(1)] = (15));

} else {
var statearr_21198_21260 = state_21177__$1;
(statearr_21198_21260[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21178 === (16))){
var inst_21157 = (state_21177[(11)]);
var state_21177__$1 = state_21177;
var statearr_21199_21261 = state_21177__$1;
(statearr_21199_21261[(2)] = inst_21157);

(statearr_21199_21261[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21178 === (10))){
var inst_21149 = (state_21177[(2)]);
var state_21177__$1 = state_21177;
var statearr_21200_21262 = state_21177__$1;
(statearr_21200_21262[(2)] = inst_21149);

(statearr_21200_21262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21178 === (18))){
var inst_21160 = (state_21177[(2)]);
var state_21177__$1 = state_21177;
var statearr_21201_21263 = state_21177__$1;
(statearr_21201_21263[(2)] = inst_21160);

(statearr_21201_21263[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21178 === (8))){
var inst_21146 = cljs.core.async.close_BANG_.call(null,to);
var state_21177__$1 = state_21177;
var statearr_21202_21264 = state_21177__$1;
(statearr_21202_21264[(2)] = inst_21146);

(statearr_21202_21264[(1)] = (10));


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
});})(c__20400__auto__,jobs,results,process,async))
;
return ((function (switch__20379__auto__,c__20400__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____0 = (function (){
var statearr_21206 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21206[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__);

(statearr_21206[(1)] = (1));

return statearr_21206;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____1 = (function (state_21177){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_21177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e21207){if((e21207 instanceof Object)){
var ex__20383__auto__ = e21207;
var statearr_21208_21265 = state_21177;
(statearr_21208_21265[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21266 = state_21177;
state_21177 = G__21266;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__ = function(state_21177){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____1.call(this,state_21177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto__,jobs,results,process,async))
})();
var state__20402__auto__ = (function (){var statearr_21209 = f__20401__auto__.call(null);
(statearr_21209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto__);

return statearr_21209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto__,jobs,results,process,async))
);

return c__20400__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21267 = [];
var len__19330__auto___21270 = arguments.length;
var i__19331__auto___21271 = (0);
while(true){
if((i__19331__auto___21271 < len__19330__auto___21270)){
args21267.push((arguments[i__19331__auto___21271]));

var G__21272 = (i__19331__auto___21271 + (1));
i__19331__auto___21271 = G__21272;
continue;
} else {
}
break;
}

var G__21269 = args21267.length;
switch (G__21269) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21267.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21274 = [];
var len__19330__auto___21277 = arguments.length;
var i__19331__auto___21278 = (0);
while(true){
if((i__19331__auto___21278 < len__19330__auto___21277)){
args21274.push((arguments[i__19331__auto___21278]));

var G__21279 = (i__19331__auto___21278 + (1));
i__19331__auto___21278 = G__21279;
continue;
} else {
}
break;
}

var G__21276 = args21274.length;
switch (G__21276) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21274.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21281 = [];
var len__19330__auto___21334 = arguments.length;
var i__19331__auto___21335 = (0);
while(true){
if((i__19331__auto___21335 < len__19330__auto___21334)){
args21281.push((arguments[i__19331__auto___21335]));

var G__21336 = (i__19331__auto___21335 + (1));
i__19331__auto___21335 = G__21336;
continue;
} else {
}
break;
}

var G__21283 = args21281.length;
switch (G__21283) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21281.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20400__auto___21338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto___21338,tc,fc){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto___21338,tc,fc){
return (function (state_21309){
var state_val_21310 = (state_21309[(1)]);
if((state_val_21310 === (7))){
var inst_21305 = (state_21309[(2)]);
var state_21309__$1 = state_21309;
var statearr_21311_21339 = state_21309__$1;
(statearr_21311_21339[(2)] = inst_21305);

(statearr_21311_21339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (1))){
var state_21309__$1 = state_21309;
var statearr_21312_21340 = state_21309__$1;
(statearr_21312_21340[(2)] = null);

(statearr_21312_21340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (4))){
var inst_21286 = (state_21309[(7)]);
var inst_21286__$1 = (state_21309[(2)]);
var inst_21287 = (inst_21286__$1 == null);
var state_21309__$1 = (function (){var statearr_21313 = state_21309;
(statearr_21313[(7)] = inst_21286__$1);

return statearr_21313;
})();
if(cljs.core.truth_(inst_21287)){
var statearr_21314_21341 = state_21309__$1;
(statearr_21314_21341[(1)] = (5));

} else {
var statearr_21315_21342 = state_21309__$1;
(statearr_21315_21342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (13))){
var state_21309__$1 = state_21309;
var statearr_21316_21343 = state_21309__$1;
(statearr_21316_21343[(2)] = null);

(statearr_21316_21343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (6))){
var inst_21286 = (state_21309[(7)]);
var inst_21292 = p.call(null,inst_21286);
var state_21309__$1 = state_21309;
if(cljs.core.truth_(inst_21292)){
var statearr_21317_21344 = state_21309__$1;
(statearr_21317_21344[(1)] = (9));

} else {
var statearr_21318_21345 = state_21309__$1;
(statearr_21318_21345[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (3))){
var inst_21307 = (state_21309[(2)]);
var state_21309__$1 = state_21309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21309__$1,inst_21307);
} else {
if((state_val_21310 === (12))){
var state_21309__$1 = state_21309;
var statearr_21319_21346 = state_21309__$1;
(statearr_21319_21346[(2)] = null);

(statearr_21319_21346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (2))){
var state_21309__$1 = state_21309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21309__$1,(4),ch);
} else {
if((state_val_21310 === (11))){
var inst_21286 = (state_21309[(7)]);
var inst_21296 = (state_21309[(2)]);
var state_21309__$1 = state_21309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21309__$1,(8),inst_21296,inst_21286);
} else {
if((state_val_21310 === (9))){
var state_21309__$1 = state_21309;
var statearr_21320_21347 = state_21309__$1;
(statearr_21320_21347[(2)] = tc);

(statearr_21320_21347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (5))){
var inst_21289 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21290 = cljs.core.async.close_BANG_.call(null,fc);
var state_21309__$1 = (function (){var statearr_21321 = state_21309;
(statearr_21321[(8)] = inst_21289);

return statearr_21321;
})();
var statearr_21322_21348 = state_21309__$1;
(statearr_21322_21348[(2)] = inst_21290);

(statearr_21322_21348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (14))){
var inst_21303 = (state_21309[(2)]);
var state_21309__$1 = state_21309;
var statearr_21323_21349 = state_21309__$1;
(statearr_21323_21349[(2)] = inst_21303);

(statearr_21323_21349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (10))){
var state_21309__$1 = state_21309;
var statearr_21324_21350 = state_21309__$1;
(statearr_21324_21350[(2)] = fc);

(statearr_21324_21350[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (8))){
var inst_21298 = (state_21309[(2)]);
var state_21309__$1 = state_21309;
if(cljs.core.truth_(inst_21298)){
var statearr_21325_21351 = state_21309__$1;
(statearr_21325_21351[(1)] = (12));

} else {
var statearr_21326_21352 = state_21309__$1;
(statearr_21326_21352[(1)] = (13));

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
});})(c__20400__auto___21338,tc,fc))
;
return ((function (switch__20379__auto__,c__20400__auto___21338,tc,fc){
return (function() {
var cljs$core$async$state_machine__20380__auto__ = null;
var cljs$core$async$state_machine__20380__auto____0 = (function (){
var statearr_21330 = [null,null,null,null,null,null,null,null,null];
(statearr_21330[(0)] = cljs$core$async$state_machine__20380__auto__);

(statearr_21330[(1)] = (1));

return statearr_21330;
});
var cljs$core$async$state_machine__20380__auto____1 = (function (state_21309){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_21309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e21331){if((e21331 instanceof Object)){
var ex__20383__auto__ = e21331;
var statearr_21332_21353 = state_21309;
(statearr_21332_21353[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21354 = state_21309;
state_21309 = G__21354;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$state_machine__20380__auto__ = function(state_21309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20380__auto____1.call(this,state_21309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20380__auto____0;
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20380__auto____1;
return cljs$core$async$state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto___21338,tc,fc))
})();
var state__20402__auto__ = (function (){var statearr_21333 = f__20401__auto__.call(null);
(statearr_21333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___21338);

return statearr_21333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto___21338,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto__){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto__){
return (function (state_21401){
var state_val_21402 = (state_21401[(1)]);
if((state_val_21402 === (1))){
var inst_21387 = init;
var state_21401__$1 = (function (){var statearr_21403 = state_21401;
(statearr_21403[(7)] = inst_21387);

return statearr_21403;
})();
var statearr_21404_21419 = state_21401__$1;
(statearr_21404_21419[(2)] = null);

(statearr_21404_21419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (2))){
var state_21401__$1 = state_21401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21401__$1,(4),ch);
} else {
if((state_val_21402 === (3))){
var inst_21399 = (state_21401[(2)]);
var state_21401__$1 = state_21401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21401__$1,inst_21399);
} else {
if((state_val_21402 === (4))){
var inst_21390 = (state_21401[(8)]);
var inst_21390__$1 = (state_21401[(2)]);
var inst_21391 = (inst_21390__$1 == null);
var state_21401__$1 = (function (){var statearr_21405 = state_21401;
(statearr_21405[(8)] = inst_21390__$1);

return statearr_21405;
})();
if(cljs.core.truth_(inst_21391)){
var statearr_21406_21420 = state_21401__$1;
(statearr_21406_21420[(1)] = (5));

} else {
var statearr_21407_21421 = state_21401__$1;
(statearr_21407_21421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (5))){
var inst_21387 = (state_21401[(7)]);
var state_21401__$1 = state_21401;
var statearr_21408_21422 = state_21401__$1;
(statearr_21408_21422[(2)] = inst_21387);

(statearr_21408_21422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (6))){
var inst_21390 = (state_21401[(8)]);
var inst_21387 = (state_21401[(7)]);
var inst_21394 = f.call(null,inst_21387,inst_21390);
var inst_21387__$1 = inst_21394;
var state_21401__$1 = (function (){var statearr_21409 = state_21401;
(statearr_21409[(7)] = inst_21387__$1);

return statearr_21409;
})();
var statearr_21410_21423 = state_21401__$1;
(statearr_21410_21423[(2)] = null);

(statearr_21410_21423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (7))){
var inst_21397 = (state_21401[(2)]);
var state_21401__$1 = state_21401;
var statearr_21411_21424 = state_21401__$1;
(statearr_21411_21424[(2)] = inst_21397);

(statearr_21411_21424[(1)] = (3));


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
});})(c__20400__auto__))
;
return ((function (switch__20379__auto__,c__20400__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20380__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20380__auto____0 = (function (){
var statearr_21415 = [null,null,null,null,null,null,null,null,null];
(statearr_21415[(0)] = cljs$core$async$reduce_$_state_machine__20380__auto__);

(statearr_21415[(1)] = (1));

return statearr_21415;
});
var cljs$core$async$reduce_$_state_machine__20380__auto____1 = (function (state_21401){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_21401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e21416){if((e21416 instanceof Object)){
var ex__20383__auto__ = e21416;
var statearr_21417_21425 = state_21401;
(statearr_21417_21425[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21426 = state_21401;
state_21401 = G__21426;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20380__auto__ = function(state_21401){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20380__auto____1.call(this,state_21401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20380__auto____0;
cljs$core$async$reduce_$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20380__auto____1;
return cljs$core$async$reduce_$_state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto__))
})();
var state__20402__auto__ = (function (){var statearr_21418 = f__20401__auto__.call(null);
(statearr_21418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto__);

return statearr_21418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto__))
);

return c__20400__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21427 = [];
var len__19330__auto___21479 = arguments.length;
var i__19331__auto___21480 = (0);
while(true){
if((i__19331__auto___21480 < len__19330__auto___21479)){
args21427.push((arguments[i__19331__auto___21480]));

var G__21481 = (i__19331__auto___21480 + (1));
i__19331__auto___21480 = G__21481;
continue;
} else {
}
break;
}

var G__21429 = args21427.length;
switch (G__21429) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21427.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto__){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto__){
return (function (state_21454){
var state_val_21455 = (state_21454[(1)]);
if((state_val_21455 === (7))){
var inst_21436 = (state_21454[(2)]);
var state_21454__$1 = state_21454;
var statearr_21456_21483 = state_21454__$1;
(statearr_21456_21483[(2)] = inst_21436);

(statearr_21456_21483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21455 === (1))){
var inst_21430 = cljs.core.seq.call(null,coll);
var inst_21431 = inst_21430;
var state_21454__$1 = (function (){var statearr_21457 = state_21454;
(statearr_21457[(7)] = inst_21431);

return statearr_21457;
})();
var statearr_21458_21484 = state_21454__$1;
(statearr_21458_21484[(2)] = null);

(statearr_21458_21484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21455 === (4))){
var inst_21431 = (state_21454[(7)]);
var inst_21434 = cljs.core.first.call(null,inst_21431);
var state_21454__$1 = state_21454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21454__$1,(7),ch,inst_21434);
} else {
if((state_val_21455 === (13))){
var inst_21448 = (state_21454[(2)]);
var state_21454__$1 = state_21454;
var statearr_21459_21485 = state_21454__$1;
(statearr_21459_21485[(2)] = inst_21448);

(statearr_21459_21485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21455 === (6))){
var inst_21439 = (state_21454[(2)]);
var state_21454__$1 = state_21454;
if(cljs.core.truth_(inst_21439)){
var statearr_21460_21486 = state_21454__$1;
(statearr_21460_21486[(1)] = (8));

} else {
var statearr_21461_21487 = state_21454__$1;
(statearr_21461_21487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21455 === (3))){
var inst_21452 = (state_21454[(2)]);
var state_21454__$1 = state_21454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21454__$1,inst_21452);
} else {
if((state_val_21455 === (12))){
var state_21454__$1 = state_21454;
var statearr_21462_21488 = state_21454__$1;
(statearr_21462_21488[(2)] = null);

(statearr_21462_21488[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21455 === (2))){
var inst_21431 = (state_21454[(7)]);
var state_21454__$1 = state_21454;
if(cljs.core.truth_(inst_21431)){
var statearr_21463_21489 = state_21454__$1;
(statearr_21463_21489[(1)] = (4));

} else {
var statearr_21464_21490 = state_21454__$1;
(statearr_21464_21490[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21455 === (11))){
var inst_21445 = cljs.core.async.close_BANG_.call(null,ch);
var state_21454__$1 = state_21454;
var statearr_21465_21491 = state_21454__$1;
(statearr_21465_21491[(2)] = inst_21445);

(statearr_21465_21491[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21455 === (9))){
var state_21454__$1 = state_21454;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21466_21492 = state_21454__$1;
(statearr_21466_21492[(1)] = (11));

} else {
var statearr_21467_21493 = state_21454__$1;
(statearr_21467_21493[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21455 === (5))){
var inst_21431 = (state_21454[(7)]);
var state_21454__$1 = state_21454;
var statearr_21468_21494 = state_21454__$1;
(statearr_21468_21494[(2)] = inst_21431);

(statearr_21468_21494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21455 === (10))){
var inst_21450 = (state_21454[(2)]);
var state_21454__$1 = state_21454;
var statearr_21469_21495 = state_21454__$1;
(statearr_21469_21495[(2)] = inst_21450);

(statearr_21469_21495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21455 === (8))){
var inst_21431 = (state_21454[(7)]);
var inst_21441 = cljs.core.next.call(null,inst_21431);
var inst_21431__$1 = inst_21441;
var state_21454__$1 = (function (){var statearr_21470 = state_21454;
(statearr_21470[(7)] = inst_21431__$1);

return statearr_21470;
})();
var statearr_21471_21496 = state_21454__$1;
(statearr_21471_21496[(2)] = null);

(statearr_21471_21496[(1)] = (2));


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
});})(c__20400__auto__))
;
return ((function (switch__20379__auto__,c__20400__auto__){
return (function() {
var cljs$core$async$state_machine__20380__auto__ = null;
var cljs$core$async$state_machine__20380__auto____0 = (function (){
var statearr_21475 = [null,null,null,null,null,null,null,null];
(statearr_21475[(0)] = cljs$core$async$state_machine__20380__auto__);

(statearr_21475[(1)] = (1));

return statearr_21475;
});
var cljs$core$async$state_machine__20380__auto____1 = (function (state_21454){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_21454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e21476){if((e21476 instanceof Object)){
var ex__20383__auto__ = e21476;
var statearr_21477_21497 = state_21454;
(statearr_21477_21497[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21498 = state_21454;
state_21454 = G__21498;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$state_machine__20380__auto__ = function(state_21454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20380__auto____1.call(this,state_21454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20380__auto____0;
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20380__auto____1;
return cljs$core$async$state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto__))
})();
var state__20402__auto__ = (function (){var statearr_21478 = f__20401__auto__.call(null);
(statearr_21478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto__);

return statearr_21478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto__))
);

return c__20400__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18931__auto__ = (((_ == null))?null:_);
var m__18932__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18931__auto__)]);
if(!((m__18932__auto__ == null))){
return m__18932__auto__.call(null,_);
} else {
var m__18932__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18932__auto____$1 == null))){
return m__18932__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18931__auto__ = (((m == null))?null:m);
var m__18932__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18931__auto__)]);
if(!((m__18932__auto__ == null))){
return m__18932__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18932__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18932__auto____$1 == null))){
return m__18932__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18931__auto__ = (((m == null))?null:m);
var m__18932__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18931__auto__)]);
if(!((m__18932__auto__ == null))){
return m__18932__auto__.call(null,m,ch);
} else {
var m__18932__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18932__auto____$1 == null))){
return m__18932__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18931__auto__ = (((m == null))?null:m);
var m__18932__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18931__auto__)]);
if(!((m__18932__auto__ == null))){
return m__18932__auto__.call(null,m);
} else {
var m__18932__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18932__auto____$1 == null))){
return m__18932__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21720 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21720 = (function (mult,ch,cs,meta21721){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21721 = meta21721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21722,meta21721__$1){
var self__ = this;
var _21722__$1 = this;
return (new cljs.core.async.t_cljs$core$async21720(self__.mult,self__.ch,self__.cs,meta21721__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21720.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21722){
var self__ = this;
var _21722__$1 = this;
return self__.meta21721;
});})(cs))
;

cljs.core.async.t_cljs$core$async21720.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21720.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21720.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21720.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21720.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21720.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21720.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21721","meta21721",-661743079,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21720.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21720.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21720";

cljs.core.async.t_cljs$core$async21720.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async21720");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21720 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21720(mult__$1,ch__$1,cs__$1,meta21721){
return (new cljs.core.async.t_cljs$core$async21720(mult__$1,ch__$1,cs__$1,meta21721));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21720(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20400__auto___21941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto___21941,cs,m,dchan,dctr,done){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto___21941,cs,m,dchan,dctr,done){
return (function (state_21853){
var state_val_21854 = (state_21853[(1)]);
if((state_val_21854 === (7))){
var inst_21849 = (state_21853[(2)]);
var state_21853__$1 = state_21853;
var statearr_21855_21942 = state_21853__$1;
(statearr_21855_21942[(2)] = inst_21849);

(statearr_21855_21942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (20))){
var inst_21754 = (state_21853[(7)]);
var inst_21764 = cljs.core.first.call(null,inst_21754);
var inst_21765 = cljs.core.nth.call(null,inst_21764,(0),null);
var inst_21766 = cljs.core.nth.call(null,inst_21764,(1),null);
var state_21853__$1 = (function (){var statearr_21856 = state_21853;
(statearr_21856[(8)] = inst_21765);

return statearr_21856;
})();
if(cljs.core.truth_(inst_21766)){
var statearr_21857_21943 = state_21853__$1;
(statearr_21857_21943[(1)] = (22));

} else {
var statearr_21858_21944 = state_21853__$1;
(statearr_21858_21944[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (27))){
var inst_21794 = (state_21853[(9)]);
var inst_21796 = (state_21853[(10)]);
var inst_21801 = (state_21853[(11)]);
var inst_21725 = (state_21853[(12)]);
var inst_21801__$1 = cljs.core._nth.call(null,inst_21794,inst_21796);
var inst_21802 = cljs.core.async.put_BANG_.call(null,inst_21801__$1,inst_21725,done);
var state_21853__$1 = (function (){var statearr_21859 = state_21853;
(statearr_21859[(11)] = inst_21801__$1);

return statearr_21859;
})();
if(cljs.core.truth_(inst_21802)){
var statearr_21860_21945 = state_21853__$1;
(statearr_21860_21945[(1)] = (30));

} else {
var statearr_21861_21946 = state_21853__$1;
(statearr_21861_21946[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (1))){
var state_21853__$1 = state_21853;
var statearr_21862_21947 = state_21853__$1;
(statearr_21862_21947[(2)] = null);

(statearr_21862_21947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (24))){
var inst_21754 = (state_21853[(7)]);
var inst_21771 = (state_21853[(2)]);
var inst_21772 = cljs.core.next.call(null,inst_21754);
var inst_21734 = inst_21772;
var inst_21735 = null;
var inst_21736 = (0);
var inst_21737 = (0);
var state_21853__$1 = (function (){var statearr_21863 = state_21853;
(statearr_21863[(13)] = inst_21771);

(statearr_21863[(14)] = inst_21736);

(statearr_21863[(15)] = inst_21735);

(statearr_21863[(16)] = inst_21734);

(statearr_21863[(17)] = inst_21737);

return statearr_21863;
})();
var statearr_21864_21948 = state_21853__$1;
(statearr_21864_21948[(2)] = null);

(statearr_21864_21948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (39))){
var state_21853__$1 = state_21853;
var statearr_21868_21949 = state_21853__$1;
(statearr_21868_21949[(2)] = null);

(statearr_21868_21949[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (4))){
var inst_21725 = (state_21853[(12)]);
var inst_21725__$1 = (state_21853[(2)]);
var inst_21726 = (inst_21725__$1 == null);
var state_21853__$1 = (function (){var statearr_21869 = state_21853;
(statearr_21869[(12)] = inst_21725__$1);

return statearr_21869;
})();
if(cljs.core.truth_(inst_21726)){
var statearr_21870_21950 = state_21853__$1;
(statearr_21870_21950[(1)] = (5));

} else {
var statearr_21871_21951 = state_21853__$1;
(statearr_21871_21951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (15))){
var inst_21736 = (state_21853[(14)]);
var inst_21735 = (state_21853[(15)]);
var inst_21734 = (state_21853[(16)]);
var inst_21737 = (state_21853[(17)]);
var inst_21750 = (state_21853[(2)]);
var inst_21751 = (inst_21737 + (1));
var tmp21865 = inst_21736;
var tmp21866 = inst_21735;
var tmp21867 = inst_21734;
var inst_21734__$1 = tmp21867;
var inst_21735__$1 = tmp21866;
var inst_21736__$1 = tmp21865;
var inst_21737__$1 = inst_21751;
var state_21853__$1 = (function (){var statearr_21872 = state_21853;
(statearr_21872[(14)] = inst_21736__$1);

(statearr_21872[(15)] = inst_21735__$1);

(statearr_21872[(18)] = inst_21750);

(statearr_21872[(16)] = inst_21734__$1);

(statearr_21872[(17)] = inst_21737__$1);

return statearr_21872;
})();
var statearr_21873_21952 = state_21853__$1;
(statearr_21873_21952[(2)] = null);

(statearr_21873_21952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (21))){
var inst_21775 = (state_21853[(2)]);
var state_21853__$1 = state_21853;
var statearr_21877_21953 = state_21853__$1;
(statearr_21877_21953[(2)] = inst_21775);

(statearr_21877_21953[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (31))){
var inst_21801 = (state_21853[(11)]);
var inst_21805 = done.call(null,null);
var inst_21806 = cljs.core.async.untap_STAR_.call(null,m,inst_21801);
var state_21853__$1 = (function (){var statearr_21878 = state_21853;
(statearr_21878[(19)] = inst_21805);

return statearr_21878;
})();
var statearr_21879_21954 = state_21853__$1;
(statearr_21879_21954[(2)] = inst_21806);

(statearr_21879_21954[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (32))){
var inst_21795 = (state_21853[(20)]);
var inst_21794 = (state_21853[(9)]);
var inst_21793 = (state_21853[(21)]);
var inst_21796 = (state_21853[(10)]);
var inst_21808 = (state_21853[(2)]);
var inst_21809 = (inst_21796 + (1));
var tmp21874 = inst_21795;
var tmp21875 = inst_21794;
var tmp21876 = inst_21793;
var inst_21793__$1 = tmp21876;
var inst_21794__$1 = tmp21875;
var inst_21795__$1 = tmp21874;
var inst_21796__$1 = inst_21809;
var state_21853__$1 = (function (){var statearr_21880 = state_21853;
(statearr_21880[(20)] = inst_21795__$1);

(statearr_21880[(9)] = inst_21794__$1);

(statearr_21880[(21)] = inst_21793__$1);

(statearr_21880[(10)] = inst_21796__$1);

(statearr_21880[(22)] = inst_21808);

return statearr_21880;
})();
var statearr_21881_21955 = state_21853__$1;
(statearr_21881_21955[(2)] = null);

(statearr_21881_21955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (40))){
var inst_21821 = (state_21853[(23)]);
var inst_21825 = done.call(null,null);
var inst_21826 = cljs.core.async.untap_STAR_.call(null,m,inst_21821);
var state_21853__$1 = (function (){var statearr_21882 = state_21853;
(statearr_21882[(24)] = inst_21825);

return statearr_21882;
})();
var statearr_21883_21956 = state_21853__$1;
(statearr_21883_21956[(2)] = inst_21826);

(statearr_21883_21956[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (33))){
var inst_21812 = (state_21853[(25)]);
var inst_21814 = cljs.core.chunked_seq_QMARK_.call(null,inst_21812);
var state_21853__$1 = state_21853;
if(inst_21814){
var statearr_21884_21957 = state_21853__$1;
(statearr_21884_21957[(1)] = (36));

} else {
var statearr_21885_21958 = state_21853__$1;
(statearr_21885_21958[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (13))){
var inst_21744 = (state_21853[(26)]);
var inst_21747 = cljs.core.async.close_BANG_.call(null,inst_21744);
var state_21853__$1 = state_21853;
var statearr_21886_21959 = state_21853__$1;
(statearr_21886_21959[(2)] = inst_21747);

(statearr_21886_21959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (22))){
var inst_21765 = (state_21853[(8)]);
var inst_21768 = cljs.core.async.close_BANG_.call(null,inst_21765);
var state_21853__$1 = state_21853;
var statearr_21887_21960 = state_21853__$1;
(statearr_21887_21960[(2)] = inst_21768);

(statearr_21887_21960[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (36))){
var inst_21812 = (state_21853[(25)]);
var inst_21816 = cljs.core.chunk_first.call(null,inst_21812);
var inst_21817 = cljs.core.chunk_rest.call(null,inst_21812);
var inst_21818 = cljs.core.count.call(null,inst_21816);
var inst_21793 = inst_21817;
var inst_21794 = inst_21816;
var inst_21795 = inst_21818;
var inst_21796 = (0);
var state_21853__$1 = (function (){var statearr_21888 = state_21853;
(statearr_21888[(20)] = inst_21795);

(statearr_21888[(9)] = inst_21794);

(statearr_21888[(21)] = inst_21793);

(statearr_21888[(10)] = inst_21796);

return statearr_21888;
})();
var statearr_21889_21961 = state_21853__$1;
(statearr_21889_21961[(2)] = null);

(statearr_21889_21961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (41))){
var inst_21812 = (state_21853[(25)]);
var inst_21828 = (state_21853[(2)]);
var inst_21829 = cljs.core.next.call(null,inst_21812);
var inst_21793 = inst_21829;
var inst_21794 = null;
var inst_21795 = (0);
var inst_21796 = (0);
var state_21853__$1 = (function (){var statearr_21890 = state_21853;
(statearr_21890[(20)] = inst_21795);

(statearr_21890[(9)] = inst_21794);

(statearr_21890[(21)] = inst_21793);

(statearr_21890[(10)] = inst_21796);

(statearr_21890[(27)] = inst_21828);

return statearr_21890;
})();
var statearr_21891_21962 = state_21853__$1;
(statearr_21891_21962[(2)] = null);

(statearr_21891_21962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (43))){
var state_21853__$1 = state_21853;
var statearr_21892_21963 = state_21853__$1;
(statearr_21892_21963[(2)] = null);

(statearr_21892_21963[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (29))){
var inst_21837 = (state_21853[(2)]);
var state_21853__$1 = state_21853;
var statearr_21893_21964 = state_21853__$1;
(statearr_21893_21964[(2)] = inst_21837);

(statearr_21893_21964[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (44))){
var inst_21846 = (state_21853[(2)]);
var state_21853__$1 = (function (){var statearr_21894 = state_21853;
(statearr_21894[(28)] = inst_21846);

return statearr_21894;
})();
var statearr_21895_21965 = state_21853__$1;
(statearr_21895_21965[(2)] = null);

(statearr_21895_21965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (6))){
var inst_21785 = (state_21853[(29)]);
var inst_21784 = cljs.core.deref.call(null,cs);
var inst_21785__$1 = cljs.core.keys.call(null,inst_21784);
var inst_21786 = cljs.core.count.call(null,inst_21785__$1);
var inst_21787 = cljs.core.reset_BANG_.call(null,dctr,inst_21786);
var inst_21792 = cljs.core.seq.call(null,inst_21785__$1);
var inst_21793 = inst_21792;
var inst_21794 = null;
var inst_21795 = (0);
var inst_21796 = (0);
var state_21853__$1 = (function (){var statearr_21896 = state_21853;
(statearr_21896[(20)] = inst_21795);

(statearr_21896[(9)] = inst_21794);

(statearr_21896[(21)] = inst_21793);

(statearr_21896[(10)] = inst_21796);

(statearr_21896[(30)] = inst_21787);

(statearr_21896[(29)] = inst_21785__$1);

return statearr_21896;
})();
var statearr_21897_21966 = state_21853__$1;
(statearr_21897_21966[(2)] = null);

(statearr_21897_21966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (28))){
var inst_21812 = (state_21853[(25)]);
var inst_21793 = (state_21853[(21)]);
var inst_21812__$1 = cljs.core.seq.call(null,inst_21793);
var state_21853__$1 = (function (){var statearr_21898 = state_21853;
(statearr_21898[(25)] = inst_21812__$1);

return statearr_21898;
})();
if(inst_21812__$1){
var statearr_21899_21967 = state_21853__$1;
(statearr_21899_21967[(1)] = (33));

} else {
var statearr_21900_21968 = state_21853__$1;
(statearr_21900_21968[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (25))){
var inst_21795 = (state_21853[(20)]);
var inst_21796 = (state_21853[(10)]);
var inst_21798 = (inst_21796 < inst_21795);
var inst_21799 = inst_21798;
var state_21853__$1 = state_21853;
if(cljs.core.truth_(inst_21799)){
var statearr_21901_21969 = state_21853__$1;
(statearr_21901_21969[(1)] = (27));

} else {
var statearr_21902_21970 = state_21853__$1;
(statearr_21902_21970[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (34))){
var state_21853__$1 = state_21853;
var statearr_21903_21971 = state_21853__$1;
(statearr_21903_21971[(2)] = null);

(statearr_21903_21971[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (17))){
var state_21853__$1 = state_21853;
var statearr_21904_21972 = state_21853__$1;
(statearr_21904_21972[(2)] = null);

(statearr_21904_21972[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (3))){
var inst_21851 = (state_21853[(2)]);
var state_21853__$1 = state_21853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21853__$1,inst_21851);
} else {
if((state_val_21854 === (12))){
var inst_21780 = (state_21853[(2)]);
var state_21853__$1 = state_21853;
var statearr_21905_21973 = state_21853__$1;
(statearr_21905_21973[(2)] = inst_21780);

(statearr_21905_21973[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (2))){
var state_21853__$1 = state_21853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21853__$1,(4),ch);
} else {
if((state_val_21854 === (23))){
var state_21853__$1 = state_21853;
var statearr_21906_21974 = state_21853__$1;
(statearr_21906_21974[(2)] = null);

(statearr_21906_21974[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (35))){
var inst_21835 = (state_21853[(2)]);
var state_21853__$1 = state_21853;
var statearr_21907_21975 = state_21853__$1;
(statearr_21907_21975[(2)] = inst_21835);

(statearr_21907_21975[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (19))){
var inst_21754 = (state_21853[(7)]);
var inst_21758 = cljs.core.chunk_first.call(null,inst_21754);
var inst_21759 = cljs.core.chunk_rest.call(null,inst_21754);
var inst_21760 = cljs.core.count.call(null,inst_21758);
var inst_21734 = inst_21759;
var inst_21735 = inst_21758;
var inst_21736 = inst_21760;
var inst_21737 = (0);
var state_21853__$1 = (function (){var statearr_21908 = state_21853;
(statearr_21908[(14)] = inst_21736);

(statearr_21908[(15)] = inst_21735);

(statearr_21908[(16)] = inst_21734);

(statearr_21908[(17)] = inst_21737);

return statearr_21908;
})();
var statearr_21909_21976 = state_21853__$1;
(statearr_21909_21976[(2)] = null);

(statearr_21909_21976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (11))){
var inst_21734 = (state_21853[(16)]);
var inst_21754 = (state_21853[(7)]);
var inst_21754__$1 = cljs.core.seq.call(null,inst_21734);
var state_21853__$1 = (function (){var statearr_21910 = state_21853;
(statearr_21910[(7)] = inst_21754__$1);

return statearr_21910;
})();
if(inst_21754__$1){
var statearr_21911_21977 = state_21853__$1;
(statearr_21911_21977[(1)] = (16));

} else {
var statearr_21912_21978 = state_21853__$1;
(statearr_21912_21978[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (9))){
var inst_21782 = (state_21853[(2)]);
var state_21853__$1 = state_21853;
var statearr_21913_21979 = state_21853__$1;
(statearr_21913_21979[(2)] = inst_21782);

(statearr_21913_21979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (5))){
var inst_21732 = cljs.core.deref.call(null,cs);
var inst_21733 = cljs.core.seq.call(null,inst_21732);
var inst_21734 = inst_21733;
var inst_21735 = null;
var inst_21736 = (0);
var inst_21737 = (0);
var state_21853__$1 = (function (){var statearr_21914 = state_21853;
(statearr_21914[(14)] = inst_21736);

(statearr_21914[(15)] = inst_21735);

(statearr_21914[(16)] = inst_21734);

(statearr_21914[(17)] = inst_21737);

return statearr_21914;
})();
var statearr_21915_21980 = state_21853__$1;
(statearr_21915_21980[(2)] = null);

(statearr_21915_21980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (14))){
var state_21853__$1 = state_21853;
var statearr_21916_21981 = state_21853__$1;
(statearr_21916_21981[(2)] = null);

(statearr_21916_21981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (45))){
var inst_21843 = (state_21853[(2)]);
var state_21853__$1 = state_21853;
var statearr_21917_21982 = state_21853__$1;
(statearr_21917_21982[(2)] = inst_21843);

(statearr_21917_21982[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (26))){
var inst_21785 = (state_21853[(29)]);
var inst_21839 = (state_21853[(2)]);
var inst_21840 = cljs.core.seq.call(null,inst_21785);
var state_21853__$1 = (function (){var statearr_21918 = state_21853;
(statearr_21918[(31)] = inst_21839);

return statearr_21918;
})();
if(inst_21840){
var statearr_21919_21983 = state_21853__$1;
(statearr_21919_21983[(1)] = (42));

} else {
var statearr_21920_21984 = state_21853__$1;
(statearr_21920_21984[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (16))){
var inst_21754 = (state_21853[(7)]);
var inst_21756 = cljs.core.chunked_seq_QMARK_.call(null,inst_21754);
var state_21853__$1 = state_21853;
if(inst_21756){
var statearr_21921_21985 = state_21853__$1;
(statearr_21921_21985[(1)] = (19));

} else {
var statearr_21922_21986 = state_21853__$1;
(statearr_21922_21986[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (38))){
var inst_21832 = (state_21853[(2)]);
var state_21853__$1 = state_21853;
var statearr_21923_21987 = state_21853__$1;
(statearr_21923_21987[(2)] = inst_21832);

(statearr_21923_21987[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (30))){
var state_21853__$1 = state_21853;
var statearr_21924_21988 = state_21853__$1;
(statearr_21924_21988[(2)] = null);

(statearr_21924_21988[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (10))){
var inst_21735 = (state_21853[(15)]);
var inst_21737 = (state_21853[(17)]);
var inst_21743 = cljs.core._nth.call(null,inst_21735,inst_21737);
var inst_21744 = cljs.core.nth.call(null,inst_21743,(0),null);
var inst_21745 = cljs.core.nth.call(null,inst_21743,(1),null);
var state_21853__$1 = (function (){var statearr_21925 = state_21853;
(statearr_21925[(26)] = inst_21744);

return statearr_21925;
})();
if(cljs.core.truth_(inst_21745)){
var statearr_21926_21989 = state_21853__$1;
(statearr_21926_21989[(1)] = (13));

} else {
var statearr_21927_21990 = state_21853__$1;
(statearr_21927_21990[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (18))){
var inst_21778 = (state_21853[(2)]);
var state_21853__$1 = state_21853;
var statearr_21928_21991 = state_21853__$1;
(statearr_21928_21991[(2)] = inst_21778);

(statearr_21928_21991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (42))){
var state_21853__$1 = state_21853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21853__$1,(45),dchan);
} else {
if((state_val_21854 === (37))){
var inst_21812 = (state_21853[(25)]);
var inst_21725 = (state_21853[(12)]);
var inst_21821 = (state_21853[(23)]);
var inst_21821__$1 = cljs.core.first.call(null,inst_21812);
var inst_21822 = cljs.core.async.put_BANG_.call(null,inst_21821__$1,inst_21725,done);
var state_21853__$1 = (function (){var statearr_21929 = state_21853;
(statearr_21929[(23)] = inst_21821__$1);

return statearr_21929;
})();
if(cljs.core.truth_(inst_21822)){
var statearr_21930_21992 = state_21853__$1;
(statearr_21930_21992[(1)] = (39));

} else {
var statearr_21931_21993 = state_21853__$1;
(statearr_21931_21993[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21854 === (8))){
var inst_21736 = (state_21853[(14)]);
var inst_21737 = (state_21853[(17)]);
var inst_21739 = (inst_21737 < inst_21736);
var inst_21740 = inst_21739;
var state_21853__$1 = state_21853;
if(cljs.core.truth_(inst_21740)){
var statearr_21932_21994 = state_21853__$1;
(statearr_21932_21994[(1)] = (10));

} else {
var statearr_21933_21995 = state_21853__$1;
(statearr_21933_21995[(1)] = (11));

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
});})(c__20400__auto___21941,cs,m,dchan,dctr,done))
;
return ((function (switch__20379__auto__,c__20400__auto___21941,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20380__auto__ = null;
var cljs$core$async$mult_$_state_machine__20380__auto____0 = (function (){
var statearr_21937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21937[(0)] = cljs$core$async$mult_$_state_machine__20380__auto__);

(statearr_21937[(1)] = (1));

return statearr_21937;
});
var cljs$core$async$mult_$_state_machine__20380__auto____1 = (function (state_21853){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_21853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e21938){if((e21938 instanceof Object)){
var ex__20383__auto__ = e21938;
var statearr_21939_21996 = state_21853;
(statearr_21939_21996[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21997 = state_21853;
state_21853 = G__21997;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20380__auto__ = function(state_21853){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20380__auto____1.call(this,state_21853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20380__auto____0;
cljs$core$async$mult_$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20380__auto____1;
return cljs$core$async$mult_$_state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto___21941,cs,m,dchan,dctr,done))
})();
var state__20402__auto__ = (function (){var statearr_21940 = f__20401__auto__.call(null);
(statearr_21940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___21941);

return statearr_21940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto___21941,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21998 = [];
var len__19330__auto___22001 = arguments.length;
var i__19331__auto___22002 = (0);
while(true){
if((i__19331__auto___22002 < len__19330__auto___22001)){
args21998.push((arguments[i__19331__auto___22002]));

var G__22003 = (i__19331__auto___22002 + (1));
i__19331__auto___22002 = G__22003;
continue;
} else {
}
break;
}

var G__22000 = args21998.length;
switch (G__22000) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21998.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18931__auto__ = (((m == null))?null:m);
var m__18932__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18931__auto__)]);
if(!((m__18932__auto__ == null))){
return m__18932__auto__.call(null,m,ch);
} else {
var m__18932__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18932__auto____$1 == null))){
return m__18932__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18931__auto__ = (((m == null))?null:m);
var m__18932__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18931__auto__)]);
if(!((m__18932__auto__ == null))){
return m__18932__auto__.call(null,m,ch);
} else {
var m__18932__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18932__auto____$1 == null))){
return m__18932__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18931__auto__ = (((m == null))?null:m);
var m__18932__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18931__auto__)]);
if(!((m__18932__auto__ == null))){
return m__18932__auto__.call(null,m);
} else {
var m__18932__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18932__auto____$1 == null))){
return m__18932__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18931__auto__ = (((m == null))?null:m);
var m__18932__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18931__auto__)]);
if(!((m__18932__auto__ == null))){
return m__18932__auto__.call(null,m,state_map);
} else {
var m__18932__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18932__auto____$1 == null))){
return m__18932__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18931__auto__ = (((m == null))?null:m);
var m__18932__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18931__auto__)]);
if(!((m__18932__auto__ == null))){
return m__18932__auto__.call(null,m,mode);
} else {
var m__18932__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18932__auto____$1 == null))){
return m__18932__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19337__auto__ = [];
var len__19330__auto___22015 = arguments.length;
var i__19331__auto___22016 = (0);
while(true){
if((i__19331__auto___22016 < len__19330__auto___22015)){
args__19337__auto__.push((arguments[i__19331__auto___22016]));

var G__22017 = (i__19331__auto___22016 + (1));
i__19331__auto___22016 = G__22017;
continue;
} else {
}
break;
}

var argseq__19338__auto__ = ((((3) < args__19337__auto__.length))?(new cljs.core.IndexedSeq(args__19337__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19338__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22009){
var map__22010 = p__22009;
var map__22010__$1 = ((((!((map__22010 == null)))?((((map__22010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22010):map__22010);
var opts = map__22010__$1;
var statearr_22012_22018 = state;
(statearr_22012_22018[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22010,map__22010__$1,opts){
return (function (val){
var statearr_22013_22019 = state;
(statearr_22013_22019[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22010,map__22010__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22014_22020 = state;
(statearr_22014_22020[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22005){
var G__22006 = cljs.core.first.call(null,seq22005);
var seq22005__$1 = cljs.core.next.call(null,seq22005);
var G__22007 = cljs.core.first.call(null,seq22005__$1);
var seq22005__$2 = cljs.core.next.call(null,seq22005__$1);
var G__22008 = cljs.core.first.call(null,seq22005__$2);
var seq22005__$3 = cljs.core.next.call(null,seq22005__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22006,G__22007,G__22008,seq22005__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22184 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22185){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22185 = meta22185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22186,meta22185__$1){
var self__ = this;
var _22186__$1 = this;
return (new cljs.core.async.t_cljs$core$async22184(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22185__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22184.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22186){
var self__ = this;
var _22186__$1 = this;
return self__.meta22185;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22184.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22184.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22184.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22184.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22184.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22184.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22184.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22184.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22184.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22185","meta22185",177230212,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22184";

cljs.core.async.t_cljs$core$async22184.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async22184");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22184 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22184(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22185){
return (new cljs.core.async.t_cljs$core$async22184(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22185));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22184(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20400__auto___22347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto___22347,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto___22347,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22284){
var state_val_22285 = (state_22284[(1)]);
if((state_val_22285 === (7))){
var inst_22202 = (state_22284[(2)]);
var state_22284__$1 = state_22284;
var statearr_22286_22348 = state_22284__$1;
(statearr_22286_22348[(2)] = inst_22202);

(statearr_22286_22348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (20))){
var inst_22214 = (state_22284[(7)]);
var state_22284__$1 = state_22284;
var statearr_22287_22349 = state_22284__$1;
(statearr_22287_22349[(2)] = inst_22214);

(statearr_22287_22349[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (27))){
var state_22284__$1 = state_22284;
var statearr_22288_22350 = state_22284__$1;
(statearr_22288_22350[(2)] = null);

(statearr_22288_22350[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (1))){
var inst_22190 = (state_22284[(8)]);
var inst_22190__$1 = calc_state.call(null);
var inst_22192 = (inst_22190__$1 == null);
var inst_22193 = cljs.core.not.call(null,inst_22192);
var state_22284__$1 = (function (){var statearr_22289 = state_22284;
(statearr_22289[(8)] = inst_22190__$1);

return statearr_22289;
})();
if(inst_22193){
var statearr_22290_22351 = state_22284__$1;
(statearr_22290_22351[(1)] = (2));

} else {
var statearr_22291_22352 = state_22284__$1;
(statearr_22291_22352[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (24))){
var inst_22237 = (state_22284[(9)]);
var inst_22258 = (state_22284[(10)]);
var inst_22244 = (state_22284[(11)]);
var inst_22258__$1 = inst_22237.call(null,inst_22244);
var state_22284__$1 = (function (){var statearr_22292 = state_22284;
(statearr_22292[(10)] = inst_22258__$1);

return statearr_22292;
})();
if(cljs.core.truth_(inst_22258__$1)){
var statearr_22293_22353 = state_22284__$1;
(statearr_22293_22353[(1)] = (29));

} else {
var statearr_22294_22354 = state_22284__$1;
(statearr_22294_22354[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (4))){
var inst_22205 = (state_22284[(2)]);
var state_22284__$1 = state_22284;
if(cljs.core.truth_(inst_22205)){
var statearr_22295_22355 = state_22284__$1;
(statearr_22295_22355[(1)] = (8));

} else {
var statearr_22296_22356 = state_22284__$1;
(statearr_22296_22356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (15))){
var inst_22231 = (state_22284[(2)]);
var state_22284__$1 = state_22284;
if(cljs.core.truth_(inst_22231)){
var statearr_22297_22357 = state_22284__$1;
(statearr_22297_22357[(1)] = (19));

} else {
var statearr_22298_22358 = state_22284__$1;
(statearr_22298_22358[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (21))){
var inst_22236 = (state_22284[(12)]);
var inst_22236__$1 = (state_22284[(2)]);
var inst_22237 = cljs.core.get.call(null,inst_22236__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22238 = cljs.core.get.call(null,inst_22236__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22239 = cljs.core.get.call(null,inst_22236__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22284__$1 = (function (){var statearr_22299 = state_22284;
(statearr_22299[(9)] = inst_22237);

(statearr_22299[(13)] = inst_22238);

(statearr_22299[(12)] = inst_22236__$1);

return statearr_22299;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22284__$1,(22),inst_22239);
} else {
if((state_val_22285 === (31))){
var inst_22266 = (state_22284[(2)]);
var state_22284__$1 = state_22284;
if(cljs.core.truth_(inst_22266)){
var statearr_22300_22359 = state_22284__$1;
(statearr_22300_22359[(1)] = (32));

} else {
var statearr_22301_22360 = state_22284__$1;
(statearr_22301_22360[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (32))){
var inst_22243 = (state_22284[(14)]);
var state_22284__$1 = state_22284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22284__$1,(35),out,inst_22243);
} else {
if((state_val_22285 === (33))){
var inst_22236 = (state_22284[(12)]);
var inst_22214 = inst_22236;
var state_22284__$1 = (function (){var statearr_22302 = state_22284;
(statearr_22302[(7)] = inst_22214);

return statearr_22302;
})();
var statearr_22303_22361 = state_22284__$1;
(statearr_22303_22361[(2)] = null);

(statearr_22303_22361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (13))){
var inst_22214 = (state_22284[(7)]);
var inst_22221 = inst_22214.cljs$lang$protocol_mask$partition0$;
var inst_22222 = (inst_22221 & (64));
var inst_22223 = inst_22214.cljs$core$ISeq$;
var inst_22224 = (inst_22222) || (inst_22223);
var state_22284__$1 = state_22284;
if(cljs.core.truth_(inst_22224)){
var statearr_22304_22362 = state_22284__$1;
(statearr_22304_22362[(1)] = (16));

} else {
var statearr_22305_22363 = state_22284__$1;
(statearr_22305_22363[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (22))){
var inst_22244 = (state_22284[(11)]);
var inst_22243 = (state_22284[(14)]);
var inst_22242 = (state_22284[(2)]);
var inst_22243__$1 = cljs.core.nth.call(null,inst_22242,(0),null);
var inst_22244__$1 = cljs.core.nth.call(null,inst_22242,(1),null);
var inst_22245 = (inst_22243__$1 == null);
var inst_22246 = cljs.core._EQ_.call(null,inst_22244__$1,change);
var inst_22247 = (inst_22245) || (inst_22246);
var state_22284__$1 = (function (){var statearr_22306 = state_22284;
(statearr_22306[(11)] = inst_22244__$1);

(statearr_22306[(14)] = inst_22243__$1);

return statearr_22306;
})();
if(cljs.core.truth_(inst_22247)){
var statearr_22307_22364 = state_22284__$1;
(statearr_22307_22364[(1)] = (23));

} else {
var statearr_22308_22365 = state_22284__$1;
(statearr_22308_22365[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (36))){
var inst_22236 = (state_22284[(12)]);
var inst_22214 = inst_22236;
var state_22284__$1 = (function (){var statearr_22309 = state_22284;
(statearr_22309[(7)] = inst_22214);

return statearr_22309;
})();
var statearr_22310_22366 = state_22284__$1;
(statearr_22310_22366[(2)] = null);

(statearr_22310_22366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (29))){
var inst_22258 = (state_22284[(10)]);
var state_22284__$1 = state_22284;
var statearr_22311_22367 = state_22284__$1;
(statearr_22311_22367[(2)] = inst_22258);

(statearr_22311_22367[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (6))){
var state_22284__$1 = state_22284;
var statearr_22312_22368 = state_22284__$1;
(statearr_22312_22368[(2)] = false);

(statearr_22312_22368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (28))){
var inst_22254 = (state_22284[(2)]);
var inst_22255 = calc_state.call(null);
var inst_22214 = inst_22255;
var state_22284__$1 = (function (){var statearr_22313 = state_22284;
(statearr_22313[(7)] = inst_22214);

(statearr_22313[(15)] = inst_22254);

return statearr_22313;
})();
var statearr_22314_22369 = state_22284__$1;
(statearr_22314_22369[(2)] = null);

(statearr_22314_22369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (25))){
var inst_22280 = (state_22284[(2)]);
var state_22284__$1 = state_22284;
var statearr_22315_22370 = state_22284__$1;
(statearr_22315_22370[(2)] = inst_22280);

(statearr_22315_22370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (34))){
var inst_22278 = (state_22284[(2)]);
var state_22284__$1 = state_22284;
var statearr_22316_22371 = state_22284__$1;
(statearr_22316_22371[(2)] = inst_22278);

(statearr_22316_22371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (17))){
var state_22284__$1 = state_22284;
var statearr_22317_22372 = state_22284__$1;
(statearr_22317_22372[(2)] = false);

(statearr_22317_22372[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (3))){
var state_22284__$1 = state_22284;
var statearr_22318_22373 = state_22284__$1;
(statearr_22318_22373[(2)] = false);

(statearr_22318_22373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (12))){
var inst_22282 = (state_22284[(2)]);
var state_22284__$1 = state_22284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22284__$1,inst_22282);
} else {
if((state_val_22285 === (2))){
var inst_22190 = (state_22284[(8)]);
var inst_22195 = inst_22190.cljs$lang$protocol_mask$partition0$;
var inst_22196 = (inst_22195 & (64));
var inst_22197 = inst_22190.cljs$core$ISeq$;
var inst_22198 = (inst_22196) || (inst_22197);
var state_22284__$1 = state_22284;
if(cljs.core.truth_(inst_22198)){
var statearr_22319_22374 = state_22284__$1;
(statearr_22319_22374[(1)] = (5));

} else {
var statearr_22320_22375 = state_22284__$1;
(statearr_22320_22375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (23))){
var inst_22243 = (state_22284[(14)]);
var inst_22249 = (inst_22243 == null);
var state_22284__$1 = state_22284;
if(cljs.core.truth_(inst_22249)){
var statearr_22321_22376 = state_22284__$1;
(statearr_22321_22376[(1)] = (26));

} else {
var statearr_22322_22377 = state_22284__$1;
(statearr_22322_22377[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (35))){
var inst_22269 = (state_22284[(2)]);
var state_22284__$1 = state_22284;
if(cljs.core.truth_(inst_22269)){
var statearr_22323_22378 = state_22284__$1;
(statearr_22323_22378[(1)] = (36));

} else {
var statearr_22324_22379 = state_22284__$1;
(statearr_22324_22379[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (19))){
var inst_22214 = (state_22284[(7)]);
var inst_22233 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22214);
var state_22284__$1 = state_22284;
var statearr_22325_22380 = state_22284__$1;
(statearr_22325_22380[(2)] = inst_22233);

(statearr_22325_22380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (11))){
var inst_22214 = (state_22284[(7)]);
var inst_22218 = (inst_22214 == null);
var inst_22219 = cljs.core.not.call(null,inst_22218);
var state_22284__$1 = state_22284;
if(inst_22219){
var statearr_22326_22381 = state_22284__$1;
(statearr_22326_22381[(1)] = (13));

} else {
var statearr_22327_22382 = state_22284__$1;
(statearr_22327_22382[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (9))){
var inst_22190 = (state_22284[(8)]);
var state_22284__$1 = state_22284;
var statearr_22328_22383 = state_22284__$1;
(statearr_22328_22383[(2)] = inst_22190);

(statearr_22328_22383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (5))){
var state_22284__$1 = state_22284;
var statearr_22329_22384 = state_22284__$1;
(statearr_22329_22384[(2)] = true);

(statearr_22329_22384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (14))){
var state_22284__$1 = state_22284;
var statearr_22330_22385 = state_22284__$1;
(statearr_22330_22385[(2)] = false);

(statearr_22330_22385[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (26))){
var inst_22244 = (state_22284[(11)]);
var inst_22251 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22244);
var state_22284__$1 = state_22284;
var statearr_22331_22386 = state_22284__$1;
(statearr_22331_22386[(2)] = inst_22251);

(statearr_22331_22386[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (16))){
var state_22284__$1 = state_22284;
var statearr_22332_22387 = state_22284__$1;
(statearr_22332_22387[(2)] = true);

(statearr_22332_22387[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (38))){
var inst_22274 = (state_22284[(2)]);
var state_22284__$1 = state_22284;
var statearr_22333_22388 = state_22284__$1;
(statearr_22333_22388[(2)] = inst_22274);

(statearr_22333_22388[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (30))){
var inst_22237 = (state_22284[(9)]);
var inst_22238 = (state_22284[(13)]);
var inst_22244 = (state_22284[(11)]);
var inst_22261 = cljs.core.empty_QMARK_.call(null,inst_22237);
var inst_22262 = inst_22238.call(null,inst_22244);
var inst_22263 = cljs.core.not.call(null,inst_22262);
var inst_22264 = (inst_22261) && (inst_22263);
var state_22284__$1 = state_22284;
var statearr_22334_22389 = state_22284__$1;
(statearr_22334_22389[(2)] = inst_22264);

(statearr_22334_22389[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (10))){
var inst_22190 = (state_22284[(8)]);
var inst_22210 = (state_22284[(2)]);
var inst_22211 = cljs.core.get.call(null,inst_22210,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22212 = cljs.core.get.call(null,inst_22210,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22213 = cljs.core.get.call(null,inst_22210,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22214 = inst_22190;
var state_22284__$1 = (function (){var statearr_22335 = state_22284;
(statearr_22335[(7)] = inst_22214);

(statearr_22335[(16)] = inst_22213);

(statearr_22335[(17)] = inst_22212);

(statearr_22335[(18)] = inst_22211);

return statearr_22335;
})();
var statearr_22336_22390 = state_22284__$1;
(statearr_22336_22390[(2)] = null);

(statearr_22336_22390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (18))){
var inst_22228 = (state_22284[(2)]);
var state_22284__$1 = state_22284;
var statearr_22337_22391 = state_22284__$1;
(statearr_22337_22391[(2)] = inst_22228);

(statearr_22337_22391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (37))){
var state_22284__$1 = state_22284;
var statearr_22338_22392 = state_22284__$1;
(statearr_22338_22392[(2)] = null);

(statearr_22338_22392[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (8))){
var inst_22190 = (state_22284[(8)]);
var inst_22207 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22190);
var state_22284__$1 = state_22284;
var statearr_22339_22393 = state_22284__$1;
(statearr_22339_22393[(2)] = inst_22207);

(statearr_22339_22393[(1)] = (10));


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
});})(c__20400__auto___22347,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20379__auto__,c__20400__auto___22347,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20380__auto__ = null;
var cljs$core$async$mix_$_state_machine__20380__auto____0 = (function (){
var statearr_22343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22343[(0)] = cljs$core$async$mix_$_state_machine__20380__auto__);

(statearr_22343[(1)] = (1));

return statearr_22343;
});
var cljs$core$async$mix_$_state_machine__20380__auto____1 = (function (state_22284){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_22284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e22344){if((e22344 instanceof Object)){
var ex__20383__auto__ = e22344;
var statearr_22345_22394 = state_22284;
(statearr_22345_22394[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22395 = state_22284;
state_22284 = G__22395;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20380__auto__ = function(state_22284){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20380__auto____1.call(this,state_22284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20380__auto____0;
cljs$core$async$mix_$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20380__auto____1;
return cljs$core$async$mix_$_state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto___22347,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20402__auto__ = (function (){var statearr_22346 = f__20401__auto__.call(null);
(statearr_22346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___22347);

return statearr_22346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto___22347,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18931__auto__ = (((p == null))?null:p);
var m__18932__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18931__auto__)]);
if(!((m__18932__auto__ == null))){
return m__18932__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18932__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18932__auto____$1 == null))){
return m__18932__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18931__auto__ = (((p == null))?null:p);
var m__18932__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18931__auto__)]);
if(!((m__18932__auto__ == null))){
return m__18932__auto__.call(null,p,v,ch);
} else {
var m__18932__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18932__auto____$1 == null))){
return m__18932__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22396 = [];
var len__19330__auto___22399 = arguments.length;
var i__19331__auto___22400 = (0);
while(true){
if((i__19331__auto___22400 < len__19330__auto___22399)){
args22396.push((arguments[i__19331__auto___22400]));

var G__22401 = (i__19331__auto___22400 + (1));
i__19331__auto___22400 = G__22401;
continue;
} else {
}
break;
}

var G__22398 = args22396.length;
switch (G__22398) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22396.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18931__auto__ = (((p == null))?null:p);
var m__18932__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18931__auto__)]);
if(!((m__18932__auto__ == null))){
return m__18932__auto__.call(null,p);
} else {
var m__18932__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18932__auto____$1 == null))){
return m__18932__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18931__auto__ = (((p == null))?null:p);
var m__18932__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18931__auto__)]);
if(!((m__18932__auto__ == null))){
return m__18932__auto__.call(null,p,v);
} else {
var m__18932__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18932__auto____$1 == null))){
return m__18932__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22404 = [];
var len__19330__auto___22529 = arguments.length;
var i__19331__auto___22530 = (0);
while(true){
if((i__19331__auto___22530 < len__19330__auto___22529)){
args22404.push((arguments[i__19331__auto___22530]));

var G__22531 = (i__19331__auto___22530 + (1));
i__19331__auto___22530 = G__22531;
continue;
} else {
}
break;
}

var G__22406 = args22404.length;
switch (G__22406) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22404.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18276__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18276__auto__)){
return or__18276__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18276__auto__,mults){
return (function (p1__22403_SHARP_){
if(cljs.core.truth_(p1__22403_SHARP_.call(null,topic))){
return p1__22403_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22403_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18276__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22407 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22407 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22408){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22408 = meta22408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22409,meta22408__$1){
var self__ = this;
var _22409__$1 = this;
return (new cljs.core.async.t_cljs$core$async22407(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22408__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22409){
var self__ = this;
var _22409__$1 = this;
return self__.meta22408;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22407.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22407.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22407.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22407.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22407.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22407.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22407.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22407.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22408","meta22408",-1091934388,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22407.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22407";

cljs.core.async.t_cljs$core$async22407.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async22407");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22407 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22407(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22408){
return (new cljs.core.async.t_cljs$core$async22407(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22408));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22407(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20400__auto___22533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto___22533,mults,ensure_mult,p){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto___22533,mults,ensure_mult,p){
return (function (state_22481){
var state_val_22482 = (state_22481[(1)]);
if((state_val_22482 === (7))){
var inst_22477 = (state_22481[(2)]);
var state_22481__$1 = state_22481;
var statearr_22483_22534 = state_22481__$1;
(statearr_22483_22534[(2)] = inst_22477);

(statearr_22483_22534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (20))){
var state_22481__$1 = state_22481;
var statearr_22484_22535 = state_22481__$1;
(statearr_22484_22535[(2)] = null);

(statearr_22484_22535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (1))){
var state_22481__$1 = state_22481;
var statearr_22485_22536 = state_22481__$1;
(statearr_22485_22536[(2)] = null);

(statearr_22485_22536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (24))){
var inst_22460 = (state_22481[(7)]);
var inst_22469 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22460);
var state_22481__$1 = state_22481;
var statearr_22486_22537 = state_22481__$1;
(statearr_22486_22537[(2)] = inst_22469);

(statearr_22486_22537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (4))){
var inst_22412 = (state_22481[(8)]);
var inst_22412__$1 = (state_22481[(2)]);
var inst_22413 = (inst_22412__$1 == null);
var state_22481__$1 = (function (){var statearr_22487 = state_22481;
(statearr_22487[(8)] = inst_22412__$1);

return statearr_22487;
})();
if(cljs.core.truth_(inst_22413)){
var statearr_22488_22538 = state_22481__$1;
(statearr_22488_22538[(1)] = (5));

} else {
var statearr_22489_22539 = state_22481__$1;
(statearr_22489_22539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (15))){
var inst_22454 = (state_22481[(2)]);
var state_22481__$1 = state_22481;
var statearr_22490_22540 = state_22481__$1;
(statearr_22490_22540[(2)] = inst_22454);

(statearr_22490_22540[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (21))){
var inst_22474 = (state_22481[(2)]);
var state_22481__$1 = (function (){var statearr_22491 = state_22481;
(statearr_22491[(9)] = inst_22474);

return statearr_22491;
})();
var statearr_22492_22541 = state_22481__$1;
(statearr_22492_22541[(2)] = null);

(statearr_22492_22541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (13))){
var inst_22436 = (state_22481[(10)]);
var inst_22438 = cljs.core.chunked_seq_QMARK_.call(null,inst_22436);
var state_22481__$1 = state_22481;
if(inst_22438){
var statearr_22493_22542 = state_22481__$1;
(statearr_22493_22542[(1)] = (16));

} else {
var statearr_22494_22543 = state_22481__$1;
(statearr_22494_22543[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (22))){
var inst_22466 = (state_22481[(2)]);
var state_22481__$1 = state_22481;
if(cljs.core.truth_(inst_22466)){
var statearr_22495_22544 = state_22481__$1;
(statearr_22495_22544[(1)] = (23));

} else {
var statearr_22496_22545 = state_22481__$1;
(statearr_22496_22545[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (6))){
var inst_22412 = (state_22481[(8)]);
var inst_22462 = (state_22481[(11)]);
var inst_22460 = (state_22481[(7)]);
var inst_22460__$1 = topic_fn.call(null,inst_22412);
var inst_22461 = cljs.core.deref.call(null,mults);
var inst_22462__$1 = cljs.core.get.call(null,inst_22461,inst_22460__$1);
var state_22481__$1 = (function (){var statearr_22497 = state_22481;
(statearr_22497[(11)] = inst_22462__$1);

(statearr_22497[(7)] = inst_22460__$1);

return statearr_22497;
})();
if(cljs.core.truth_(inst_22462__$1)){
var statearr_22498_22546 = state_22481__$1;
(statearr_22498_22546[(1)] = (19));

} else {
var statearr_22499_22547 = state_22481__$1;
(statearr_22499_22547[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (25))){
var inst_22471 = (state_22481[(2)]);
var state_22481__$1 = state_22481;
var statearr_22500_22548 = state_22481__$1;
(statearr_22500_22548[(2)] = inst_22471);

(statearr_22500_22548[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (17))){
var inst_22436 = (state_22481[(10)]);
var inst_22445 = cljs.core.first.call(null,inst_22436);
var inst_22446 = cljs.core.async.muxch_STAR_.call(null,inst_22445);
var inst_22447 = cljs.core.async.close_BANG_.call(null,inst_22446);
var inst_22448 = cljs.core.next.call(null,inst_22436);
var inst_22422 = inst_22448;
var inst_22423 = null;
var inst_22424 = (0);
var inst_22425 = (0);
var state_22481__$1 = (function (){var statearr_22501 = state_22481;
(statearr_22501[(12)] = inst_22422);

(statearr_22501[(13)] = inst_22423);

(statearr_22501[(14)] = inst_22447);

(statearr_22501[(15)] = inst_22424);

(statearr_22501[(16)] = inst_22425);

return statearr_22501;
})();
var statearr_22502_22549 = state_22481__$1;
(statearr_22502_22549[(2)] = null);

(statearr_22502_22549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (3))){
var inst_22479 = (state_22481[(2)]);
var state_22481__$1 = state_22481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22481__$1,inst_22479);
} else {
if((state_val_22482 === (12))){
var inst_22456 = (state_22481[(2)]);
var state_22481__$1 = state_22481;
var statearr_22503_22550 = state_22481__$1;
(statearr_22503_22550[(2)] = inst_22456);

(statearr_22503_22550[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (2))){
var state_22481__$1 = state_22481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22481__$1,(4),ch);
} else {
if((state_val_22482 === (23))){
var state_22481__$1 = state_22481;
var statearr_22504_22551 = state_22481__$1;
(statearr_22504_22551[(2)] = null);

(statearr_22504_22551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (19))){
var inst_22412 = (state_22481[(8)]);
var inst_22462 = (state_22481[(11)]);
var inst_22464 = cljs.core.async.muxch_STAR_.call(null,inst_22462);
var state_22481__$1 = state_22481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22481__$1,(22),inst_22464,inst_22412);
} else {
if((state_val_22482 === (11))){
var inst_22422 = (state_22481[(12)]);
var inst_22436 = (state_22481[(10)]);
var inst_22436__$1 = cljs.core.seq.call(null,inst_22422);
var state_22481__$1 = (function (){var statearr_22505 = state_22481;
(statearr_22505[(10)] = inst_22436__$1);

return statearr_22505;
})();
if(inst_22436__$1){
var statearr_22506_22552 = state_22481__$1;
(statearr_22506_22552[(1)] = (13));

} else {
var statearr_22507_22553 = state_22481__$1;
(statearr_22507_22553[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (9))){
var inst_22458 = (state_22481[(2)]);
var state_22481__$1 = state_22481;
var statearr_22508_22554 = state_22481__$1;
(statearr_22508_22554[(2)] = inst_22458);

(statearr_22508_22554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (5))){
var inst_22419 = cljs.core.deref.call(null,mults);
var inst_22420 = cljs.core.vals.call(null,inst_22419);
var inst_22421 = cljs.core.seq.call(null,inst_22420);
var inst_22422 = inst_22421;
var inst_22423 = null;
var inst_22424 = (0);
var inst_22425 = (0);
var state_22481__$1 = (function (){var statearr_22509 = state_22481;
(statearr_22509[(12)] = inst_22422);

(statearr_22509[(13)] = inst_22423);

(statearr_22509[(15)] = inst_22424);

(statearr_22509[(16)] = inst_22425);

return statearr_22509;
})();
var statearr_22510_22555 = state_22481__$1;
(statearr_22510_22555[(2)] = null);

(statearr_22510_22555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (14))){
var state_22481__$1 = state_22481;
var statearr_22514_22556 = state_22481__$1;
(statearr_22514_22556[(2)] = null);

(statearr_22514_22556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (16))){
var inst_22436 = (state_22481[(10)]);
var inst_22440 = cljs.core.chunk_first.call(null,inst_22436);
var inst_22441 = cljs.core.chunk_rest.call(null,inst_22436);
var inst_22442 = cljs.core.count.call(null,inst_22440);
var inst_22422 = inst_22441;
var inst_22423 = inst_22440;
var inst_22424 = inst_22442;
var inst_22425 = (0);
var state_22481__$1 = (function (){var statearr_22515 = state_22481;
(statearr_22515[(12)] = inst_22422);

(statearr_22515[(13)] = inst_22423);

(statearr_22515[(15)] = inst_22424);

(statearr_22515[(16)] = inst_22425);

return statearr_22515;
})();
var statearr_22516_22557 = state_22481__$1;
(statearr_22516_22557[(2)] = null);

(statearr_22516_22557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (10))){
var inst_22422 = (state_22481[(12)]);
var inst_22423 = (state_22481[(13)]);
var inst_22424 = (state_22481[(15)]);
var inst_22425 = (state_22481[(16)]);
var inst_22430 = cljs.core._nth.call(null,inst_22423,inst_22425);
var inst_22431 = cljs.core.async.muxch_STAR_.call(null,inst_22430);
var inst_22432 = cljs.core.async.close_BANG_.call(null,inst_22431);
var inst_22433 = (inst_22425 + (1));
var tmp22511 = inst_22422;
var tmp22512 = inst_22423;
var tmp22513 = inst_22424;
var inst_22422__$1 = tmp22511;
var inst_22423__$1 = tmp22512;
var inst_22424__$1 = tmp22513;
var inst_22425__$1 = inst_22433;
var state_22481__$1 = (function (){var statearr_22517 = state_22481;
(statearr_22517[(12)] = inst_22422__$1);

(statearr_22517[(13)] = inst_22423__$1);

(statearr_22517[(15)] = inst_22424__$1);

(statearr_22517[(16)] = inst_22425__$1);

(statearr_22517[(17)] = inst_22432);

return statearr_22517;
})();
var statearr_22518_22558 = state_22481__$1;
(statearr_22518_22558[(2)] = null);

(statearr_22518_22558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (18))){
var inst_22451 = (state_22481[(2)]);
var state_22481__$1 = state_22481;
var statearr_22519_22559 = state_22481__$1;
(statearr_22519_22559[(2)] = inst_22451);

(statearr_22519_22559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22482 === (8))){
var inst_22424 = (state_22481[(15)]);
var inst_22425 = (state_22481[(16)]);
var inst_22427 = (inst_22425 < inst_22424);
var inst_22428 = inst_22427;
var state_22481__$1 = state_22481;
if(cljs.core.truth_(inst_22428)){
var statearr_22520_22560 = state_22481__$1;
(statearr_22520_22560[(1)] = (10));

} else {
var statearr_22521_22561 = state_22481__$1;
(statearr_22521_22561[(1)] = (11));

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
});})(c__20400__auto___22533,mults,ensure_mult,p))
;
return ((function (switch__20379__auto__,c__20400__auto___22533,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20380__auto__ = null;
var cljs$core$async$state_machine__20380__auto____0 = (function (){
var statearr_22525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22525[(0)] = cljs$core$async$state_machine__20380__auto__);

(statearr_22525[(1)] = (1));

return statearr_22525;
});
var cljs$core$async$state_machine__20380__auto____1 = (function (state_22481){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_22481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e22526){if((e22526 instanceof Object)){
var ex__20383__auto__ = e22526;
var statearr_22527_22562 = state_22481;
(statearr_22527_22562[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22563 = state_22481;
state_22481 = G__22563;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$state_machine__20380__auto__ = function(state_22481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20380__auto____1.call(this,state_22481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20380__auto____0;
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20380__auto____1;
return cljs$core$async$state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto___22533,mults,ensure_mult,p))
})();
var state__20402__auto__ = (function (){var statearr_22528 = f__20401__auto__.call(null);
(statearr_22528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___22533);

return statearr_22528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto___22533,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22564 = [];
var len__19330__auto___22567 = arguments.length;
var i__19331__auto___22568 = (0);
while(true){
if((i__19331__auto___22568 < len__19330__auto___22567)){
args22564.push((arguments[i__19331__auto___22568]));

var G__22569 = (i__19331__auto___22568 + (1));
i__19331__auto___22568 = G__22569;
continue;
} else {
}
break;
}

var G__22566 = args22564.length;
switch (G__22566) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22564.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22571 = [];
var len__19330__auto___22574 = arguments.length;
var i__19331__auto___22575 = (0);
while(true){
if((i__19331__auto___22575 < len__19330__auto___22574)){
args22571.push((arguments[i__19331__auto___22575]));

var G__22576 = (i__19331__auto___22575 + (1));
i__19331__auto___22575 = G__22576;
continue;
} else {
}
break;
}

var G__22573 = args22571.length;
switch (G__22573) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22571.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22578 = [];
var len__19330__auto___22649 = arguments.length;
var i__19331__auto___22650 = (0);
while(true){
if((i__19331__auto___22650 < len__19330__auto___22649)){
args22578.push((arguments[i__19331__auto___22650]));

var G__22651 = (i__19331__auto___22650 + (1));
i__19331__auto___22650 = G__22651;
continue;
} else {
}
break;
}

var G__22580 = args22578.length;
switch (G__22580) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22578.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20400__auto___22653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto___22653,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto___22653,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22619){
var state_val_22620 = (state_22619[(1)]);
if((state_val_22620 === (7))){
var state_22619__$1 = state_22619;
var statearr_22621_22654 = state_22619__$1;
(statearr_22621_22654[(2)] = null);

(statearr_22621_22654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (1))){
var state_22619__$1 = state_22619;
var statearr_22622_22655 = state_22619__$1;
(statearr_22622_22655[(2)] = null);

(statearr_22622_22655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (4))){
var inst_22583 = (state_22619[(7)]);
var inst_22585 = (inst_22583 < cnt);
var state_22619__$1 = state_22619;
if(cljs.core.truth_(inst_22585)){
var statearr_22623_22656 = state_22619__$1;
(statearr_22623_22656[(1)] = (6));

} else {
var statearr_22624_22657 = state_22619__$1;
(statearr_22624_22657[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (15))){
var inst_22615 = (state_22619[(2)]);
var state_22619__$1 = state_22619;
var statearr_22625_22658 = state_22619__$1;
(statearr_22625_22658[(2)] = inst_22615);

(statearr_22625_22658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (13))){
var inst_22608 = cljs.core.async.close_BANG_.call(null,out);
var state_22619__$1 = state_22619;
var statearr_22626_22659 = state_22619__$1;
(statearr_22626_22659[(2)] = inst_22608);

(statearr_22626_22659[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (6))){
var state_22619__$1 = state_22619;
var statearr_22627_22660 = state_22619__$1;
(statearr_22627_22660[(2)] = null);

(statearr_22627_22660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (3))){
var inst_22617 = (state_22619[(2)]);
var state_22619__$1 = state_22619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22619__$1,inst_22617);
} else {
if((state_val_22620 === (12))){
var inst_22605 = (state_22619[(8)]);
var inst_22605__$1 = (state_22619[(2)]);
var inst_22606 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22605__$1);
var state_22619__$1 = (function (){var statearr_22628 = state_22619;
(statearr_22628[(8)] = inst_22605__$1);

return statearr_22628;
})();
if(cljs.core.truth_(inst_22606)){
var statearr_22629_22661 = state_22619__$1;
(statearr_22629_22661[(1)] = (13));

} else {
var statearr_22630_22662 = state_22619__$1;
(statearr_22630_22662[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (2))){
var inst_22582 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22583 = (0);
var state_22619__$1 = (function (){var statearr_22631 = state_22619;
(statearr_22631[(9)] = inst_22582);

(statearr_22631[(7)] = inst_22583);

return statearr_22631;
})();
var statearr_22632_22663 = state_22619__$1;
(statearr_22632_22663[(2)] = null);

(statearr_22632_22663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (11))){
var inst_22583 = (state_22619[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22619,(10),Object,null,(9));
var inst_22592 = chs__$1.call(null,inst_22583);
var inst_22593 = done.call(null,inst_22583);
var inst_22594 = cljs.core.async.take_BANG_.call(null,inst_22592,inst_22593);
var state_22619__$1 = state_22619;
var statearr_22633_22664 = state_22619__$1;
(statearr_22633_22664[(2)] = inst_22594);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22619__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (9))){
var inst_22583 = (state_22619[(7)]);
var inst_22596 = (state_22619[(2)]);
var inst_22597 = (inst_22583 + (1));
var inst_22583__$1 = inst_22597;
var state_22619__$1 = (function (){var statearr_22634 = state_22619;
(statearr_22634[(7)] = inst_22583__$1);

(statearr_22634[(10)] = inst_22596);

return statearr_22634;
})();
var statearr_22635_22665 = state_22619__$1;
(statearr_22635_22665[(2)] = null);

(statearr_22635_22665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (5))){
var inst_22603 = (state_22619[(2)]);
var state_22619__$1 = (function (){var statearr_22636 = state_22619;
(statearr_22636[(11)] = inst_22603);

return statearr_22636;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22619__$1,(12),dchan);
} else {
if((state_val_22620 === (14))){
var inst_22605 = (state_22619[(8)]);
var inst_22610 = cljs.core.apply.call(null,f,inst_22605);
var state_22619__$1 = state_22619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22619__$1,(16),out,inst_22610);
} else {
if((state_val_22620 === (16))){
var inst_22612 = (state_22619[(2)]);
var state_22619__$1 = (function (){var statearr_22637 = state_22619;
(statearr_22637[(12)] = inst_22612);

return statearr_22637;
})();
var statearr_22638_22666 = state_22619__$1;
(statearr_22638_22666[(2)] = null);

(statearr_22638_22666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (10))){
var inst_22587 = (state_22619[(2)]);
var inst_22588 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22619__$1 = (function (){var statearr_22639 = state_22619;
(statearr_22639[(13)] = inst_22587);

return statearr_22639;
})();
var statearr_22640_22667 = state_22619__$1;
(statearr_22640_22667[(2)] = inst_22588);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22619__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (8))){
var inst_22601 = (state_22619[(2)]);
var state_22619__$1 = state_22619;
var statearr_22641_22668 = state_22619__$1;
(statearr_22641_22668[(2)] = inst_22601);

(statearr_22641_22668[(1)] = (5));


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
});})(c__20400__auto___22653,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20379__auto__,c__20400__auto___22653,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20380__auto__ = null;
var cljs$core$async$state_machine__20380__auto____0 = (function (){
var statearr_22645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22645[(0)] = cljs$core$async$state_machine__20380__auto__);

(statearr_22645[(1)] = (1));

return statearr_22645;
});
var cljs$core$async$state_machine__20380__auto____1 = (function (state_22619){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_22619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e22646){if((e22646 instanceof Object)){
var ex__20383__auto__ = e22646;
var statearr_22647_22669 = state_22619;
(statearr_22647_22669[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22670 = state_22619;
state_22619 = G__22670;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$state_machine__20380__auto__ = function(state_22619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20380__auto____1.call(this,state_22619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20380__auto____0;
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20380__auto____1;
return cljs$core$async$state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto___22653,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20402__auto__ = (function (){var statearr_22648 = f__20401__auto__.call(null);
(statearr_22648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___22653);

return statearr_22648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto___22653,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22672 = [];
var len__19330__auto___22728 = arguments.length;
var i__19331__auto___22729 = (0);
while(true){
if((i__19331__auto___22729 < len__19330__auto___22728)){
args22672.push((arguments[i__19331__auto___22729]));

var G__22730 = (i__19331__auto___22729 + (1));
i__19331__auto___22729 = G__22730;
continue;
} else {
}
break;
}

var G__22674 = args22672.length;
switch (G__22674) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22672.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20400__auto___22732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto___22732,out){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto___22732,out){
return (function (state_22704){
var state_val_22705 = (state_22704[(1)]);
if((state_val_22705 === (7))){
var inst_22683 = (state_22704[(7)]);
var inst_22684 = (state_22704[(8)]);
var inst_22683__$1 = (state_22704[(2)]);
var inst_22684__$1 = cljs.core.nth.call(null,inst_22683__$1,(0),null);
var inst_22685 = cljs.core.nth.call(null,inst_22683__$1,(1),null);
var inst_22686 = (inst_22684__$1 == null);
var state_22704__$1 = (function (){var statearr_22706 = state_22704;
(statearr_22706[(7)] = inst_22683__$1);

(statearr_22706[(9)] = inst_22685);

(statearr_22706[(8)] = inst_22684__$1);

return statearr_22706;
})();
if(cljs.core.truth_(inst_22686)){
var statearr_22707_22733 = state_22704__$1;
(statearr_22707_22733[(1)] = (8));

} else {
var statearr_22708_22734 = state_22704__$1;
(statearr_22708_22734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (1))){
var inst_22675 = cljs.core.vec.call(null,chs);
var inst_22676 = inst_22675;
var state_22704__$1 = (function (){var statearr_22709 = state_22704;
(statearr_22709[(10)] = inst_22676);

return statearr_22709;
})();
var statearr_22710_22735 = state_22704__$1;
(statearr_22710_22735[(2)] = null);

(statearr_22710_22735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (4))){
var inst_22676 = (state_22704[(10)]);
var state_22704__$1 = state_22704;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22704__$1,(7),inst_22676);
} else {
if((state_val_22705 === (6))){
var inst_22700 = (state_22704[(2)]);
var state_22704__$1 = state_22704;
var statearr_22711_22736 = state_22704__$1;
(statearr_22711_22736[(2)] = inst_22700);

(statearr_22711_22736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (3))){
var inst_22702 = (state_22704[(2)]);
var state_22704__$1 = state_22704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22704__$1,inst_22702);
} else {
if((state_val_22705 === (2))){
var inst_22676 = (state_22704[(10)]);
var inst_22678 = cljs.core.count.call(null,inst_22676);
var inst_22679 = (inst_22678 > (0));
var state_22704__$1 = state_22704;
if(cljs.core.truth_(inst_22679)){
var statearr_22713_22737 = state_22704__$1;
(statearr_22713_22737[(1)] = (4));

} else {
var statearr_22714_22738 = state_22704__$1;
(statearr_22714_22738[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (11))){
var inst_22676 = (state_22704[(10)]);
var inst_22693 = (state_22704[(2)]);
var tmp22712 = inst_22676;
var inst_22676__$1 = tmp22712;
var state_22704__$1 = (function (){var statearr_22715 = state_22704;
(statearr_22715[(10)] = inst_22676__$1);

(statearr_22715[(11)] = inst_22693);

return statearr_22715;
})();
var statearr_22716_22739 = state_22704__$1;
(statearr_22716_22739[(2)] = null);

(statearr_22716_22739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (9))){
var inst_22684 = (state_22704[(8)]);
var state_22704__$1 = state_22704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22704__$1,(11),out,inst_22684);
} else {
if((state_val_22705 === (5))){
var inst_22698 = cljs.core.async.close_BANG_.call(null,out);
var state_22704__$1 = state_22704;
var statearr_22717_22740 = state_22704__$1;
(statearr_22717_22740[(2)] = inst_22698);

(statearr_22717_22740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (10))){
var inst_22696 = (state_22704[(2)]);
var state_22704__$1 = state_22704;
var statearr_22718_22741 = state_22704__$1;
(statearr_22718_22741[(2)] = inst_22696);

(statearr_22718_22741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (8))){
var inst_22683 = (state_22704[(7)]);
var inst_22676 = (state_22704[(10)]);
var inst_22685 = (state_22704[(9)]);
var inst_22684 = (state_22704[(8)]);
var inst_22688 = (function (){var cs = inst_22676;
var vec__22681 = inst_22683;
var v = inst_22684;
var c = inst_22685;
return ((function (cs,vec__22681,v,c,inst_22683,inst_22676,inst_22685,inst_22684,state_val_22705,c__20400__auto___22732,out){
return (function (p1__22671_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22671_SHARP_);
});
;})(cs,vec__22681,v,c,inst_22683,inst_22676,inst_22685,inst_22684,state_val_22705,c__20400__auto___22732,out))
})();
var inst_22689 = cljs.core.filterv.call(null,inst_22688,inst_22676);
var inst_22676__$1 = inst_22689;
var state_22704__$1 = (function (){var statearr_22719 = state_22704;
(statearr_22719[(10)] = inst_22676__$1);

return statearr_22719;
})();
var statearr_22720_22742 = state_22704__$1;
(statearr_22720_22742[(2)] = null);

(statearr_22720_22742[(1)] = (2));


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
});})(c__20400__auto___22732,out))
;
return ((function (switch__20379__auto__,c__20400__auto___22732,out){
return (function() {
var cljs$core$async$state_machine__20380__auto__ = null;
var cljs$core$async$state_machine__20380__auto____0 = (function (){
var statearr_22724 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22724[(0)] = cljs$core$async$state_machine__20380__auto__);

(statearr_22724[(1)] = (1));

return statearr_22724;
});
var cljs$core$async$state_machine__20380__auto____1 = (function (state_22704){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_22704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e22725){if((e22725 instanceof Object)){
var ex__20383__auto__ = e22725;
var statearr_22726_22743 = state_22704;
(statearr_22726_22743[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22744 = state_22704;
state_22704 = G__22744;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$state_machine__20380__auto__ = function(state_22704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20380__auto____1.call(this,state_22704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20380__auto____0;
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20380__auto____1;
return cljs$core$async$state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto___22732,out))
})();
var state__20402__auto__ = (function (){var statearr_22727 = f__20401__auto__.call(null);
(statearr_22727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___22732);

return statearr_22727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto___22732,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22745 = [];
var len__19330__auto___22794 = arguments.length;
var i__19331__auto___22795 = (0);
while(true){
if((i__19331__auto___22795 < len__19330__auto___22794)){
args22745.push((arguments[i__19331__auto___22795]));

var G__22796 = (i__19331__auto___22795 + (1));
i__19331__auto___22795 = G__22796;
continue;
} else {
}
break;
}

var G__22747 = args22745.length;
switch (G__22747) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22745.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20400__auto___22798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto___22798,out){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto___22798,out){
return (function (state_22771){
var state_val_22772 = (state_22771[(1)]);
if((state_val_22772 === (7))){
var inst_22753 = (state_22771[(7)]);
var inst_22753__$1 = (state_22771[(2)]);
var inst_22754 = (inst_22753__$1 == null);
var inst_22755 = cljs.core.not.call(null,inst_22754);
var state_22771__$1 = (function (){var statearr_22773 = state_22771;
(statearr_22773[(7)] = inst_22753__$1);

return statearr_22773;
})();
if(inst_22755){
var statearr_22774_22799 = state_22771__$1;
(statearr_22774_22799[(1)] = (8));

} else {
var statearr_22775_22800 = state_22771__$1;
(statearr_22775_22800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (1))){
var inst_22748 = (0);
var state_22771__$1 = (function (){var statearr_22776 = state_22771;
(statearr_22776[(8)] = inst_22748);

return statearr_22776;
})();
var statearr_22777_22801 = state_22771__$1;
(statearr_22777_22801[(2)] = null);

(statearr_22777_22801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (4))){
var state_22771__$1 = state_22771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22771__$1,(7),ch);
} else {
if((state_val_22772 === (6))){
var inst_22766 = (state_22771[(2)]);
var state_22771__$1 = state_22771;
var statearr_22778_22802 = state_22771__$1;
(statearr_22778_22802[(2)] = inst_22766);

(statearr_22778_22802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (3))){
var inst_22768 = (state_22771[(2)]);
var inst_22769 = cljs.core.async.close_BANG_.call(null,out);
var state_22771__$1 = (function (){var statearr_22779 = state_22771;
(statearr_22779[(9)] = inst_22768);

return statearr_22779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22771__$1,inst_22769);
} else {
if((state_val_22772 === (2))){
var inst_22748 = (state_22771[(8)]);
var inst_22750 = (inst_22748 < n);
var state_22771__$1 = state_22771;
if(cljs.core.truth_(inst_22750)){
var statearr_22780_22803 = state_22771__$1;
(statearr_22780_22803[(1)] = (4));

} else {
var statearr_22781_22804 = state_22771__$1;
(statearr_22781_22804[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (11))){
var inst_22748 = (state_22771[(8)]);
var inst_22758 = (state_22771[(2)]);
var inst_22759 = (inst_22748 + (1));
var inst_22748__$1 = inst_22759;
var state_22771__$1 = (function (){var statearr_22782 = state_22771;
(statearr_22782[(10)] = inst_22758);

(statearr_22782[(8)] = inst_22748__$1);

return statearr_22782;
})();
var statearr_22783_22805 = state_22771__$1;
(statearr_22783_22805[(2)] = null);

(statearr_22783_22805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (9))){
var state_22771__$1 = state_22771;
var statearr_22784_22806 = state_22771__$1;
(statearr_22784_22806[(2)] = null);

(statearr_22784_22806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (5))){
var state_22771__$1 = state_22771;
var statearr_22785_22807 = state_22771__$1;
(statearr_22785_22807[(2)] = null);

(statearr_22785_22807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (10))){
var inst_22763 = (state_22771[(2)]);
var state_22771__$1 = state_22771;
var statearr_22786_22808 = state_22771__$1;
(statearr_22786_22808[(2)] = inst_22763);

(statearr_22786_22808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (8))){
var inst_22753 = (state_22771[(7)]);
var state_22771__$1 = state_22771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22771__$1,(11),out,inst_22753);
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
});})(c__20400__auto___22798,out))
;
return ((function (switch__20379__auto__,c__20400__auto___22798,out){
return (function() {
var cljs$core$async$state_machine__20380__auto__ = null;
var cljs$core$async$state_machine__20380__auto____0 = (function (){
var statearr_22790 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22790[(0)] = cljs$core$async$state_machine__20380__auto__);

(statearr_22790[(1)] = (1));

return statearr_22790;
});
var cljs$core$async$state_machine__20380__auto____1 = (function (state_22771){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_22771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e22791){if((e22791 instanceof Object)){
var ex__20383__auto__ = e22791;
var statearr_22792_22809 = state_22771;
(statearr_22792_22809[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22810 = state_22771;
state_22771 = G__22810;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$state_machine__20380__auto__ = function(state_22771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20380__auto____1.call(this,state_22771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20380__auto____0;
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20380__auto____1;
return cljs$core$async$state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto___22798,out))
})();
var state__20402__auto__ = (function (){var statearr_22793 = f__20401__auto__.call(null);
(statearr_22793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___22798);

return statearr_22793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto___22798,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22818 = (function (map_LT_,f,ch,meta22819){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22819 = meta22819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22820,meta22819__$1){
var self__ = this;
var _22820__$1 = this;
return (new cljs.core.async.t_cljs$core$async22818(self__.map_LT_,self__.f,self__.ch,meta22819__$1));
});

cljs.core.async.t_cljs$core$async22818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22820){
var self__ = this;
var _22820__$1 = this;
return self__.meta22819;
});

cljs.core.async.t_cljs$core$async22818.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22818.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22818.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22818.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22818.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22821 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22821 = (function (map_LT_,f,ch,meta22819,_,fn1,meta22822){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22819 = meta22819;
this._ = _;
this.fn1 = fn1;
this.meta22822 = meta22822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22823,meta22822__$1){
var self__ = this;
var _22823__$1 = this;
return (new cljs.core.async.t_cljs$core$async22821(self__.map_LT_,self__.f,self__.ch,self__.meta22819,self__._,self__.fn1,meta22822__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22821.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22823){
var self__ = this;
var _22823__$1 = this;
return self__.meta22822;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22821.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22821.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22821.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22811_SHARP_){
return f1.call(null,(((p1__22811_SHARP_ == null))?null:self__.f.call(null,p1__22811_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22821.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22819","meta22819",-2118711755,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22818","cljs.core.async/t_cljs$core$async22818",-568973998,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22822","meta22822",-1793668092,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22821.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22821";

cljs.core.async.t_cljs$core$async22821.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async22821");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22821 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22821(map_LT___$1,f__$1,ch__$1,meta22819__$1,___$2,fn1__$1,meta22822){
return (new cljs.core.async.t_cljs$core$async22821(map_LT___$1,f__$1,ch__$1,meta22819__$1,___$2,fn1__$1,meta22822));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22821(self__.map_LT_,self__.f,self__.ch,self__.meta22819,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18264__auto__ = ret;
if(cljs.core.truth_(and__18264__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18264__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22818.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22818.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22819","meta22819",-2118711755,null)], null);
});

cljs.core.async.t_cljs$core$async22818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22818";

cljs.core.async.t_cljs$core$async22818.cljs$lang$ctorPrWriter = (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async22818");
});

cljs.core.async.__GT_t_cljs$core$async22818 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22818(map_LT___$1,f__$1,ch__$1,meta22819){
return (new cljs.core.async.t_cljs$core$async22818(map_LT___$1,f__$1,ch__$1,meta22819));
});

}

return (new cljs.core.async.t_cljs$core$async22818(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22827 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22827 = (function (map_GT_,f,ch,meta22828){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22828 = meta22828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22829,meta22828__$1){
var self__ = this;
var _22829__$1 = this;
return (new cljs.core.async.t_cljs$core$async22827(self__.map_GT_,self__.f,self__.ch,meta22828__$1));
});

cljs.core.async.t_cljs$core$async22827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22829){
var self__ = this;
var _22829__$1 = this;
return self__.meta22828;
});

cljs.core.async.t_cljs$core$async22827.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22827.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22827.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22827.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22827.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22827.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22827.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22828","meta22828",-138473566,null)], null);
});

cljs.core.async.t_cljs$core$async22827.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22827";

cljs.core.async.t_cljs$core$async22827.cljs$lang$ctorPrWriter = (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async22827");
});

cljs.core.async.__GT_t_cljs$core$async22827 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22827(map_GT___$1,f__$1,ch__$1,meta22828){
return (new cljs.core.async.t_cljs$core$async22827(map_GT___$1,f__$1,ch__$1,meta22828));
});

}

return (new cljs.core.async.t_cljs$core$async22827(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22833 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22833 = (function (filter_GT_,p,ch,meta22834){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22834 = meta22834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22835,meta22834__$1){
var self__ = this;
var _22835__$1 = this;
return (new cljs.core.async.t_cljs$core$async22833(self__.filter_GT_,self__.p,self__.ch,meta22834__$1));
});

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22835){
var self__ = this;
var _22835__$1 = this;
return self__.meta22834;
});

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22834","meta22834",-2075351354,null)], null);
});

cljs.core.async.t_cljs$core$async22833.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22833";

cljs.core.async.t_cljs$core$async22833.cljs$lang$ctorPrWriter = (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async22833");
});

cljs.core.async.__GT_t_cljs$core$async22833 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22833(filter_GT___$1,p__$1,ch__$1,meta22834){
return (new cljs.core.async.t_cljs$core$async22833(filter_GT___$1,p__$1,ch__$1,meta22834));
});

}

return (new cljs.core.async.t_cljs$core$async22833(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22836 = [];
var len__19330__auto___22880 = arguments.length;
var i__19331__auto___22881 = (0);
while(true){
if((i__19331__auto___22881 < len__19330__auto___22880)){
args22836.push((arguments[i__19331__auto___22881]));

var G__22882 = (i__19331__auto___22881 + (1));
i__19331__auto___22881 = G__22882;
continue;
} else {
}
break;
}

var G__22838 = args22836.length;
switch (G__22838) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22836.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20400__auto___22884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto___22884,out){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto___22884,out){
return (function (state_22859){
var state_val_22860 = (state_22859[(1)]);
if((state_val_22860 === (7))){
var inst_22855 = (state_22859[(2)]);
var state_22859__$1 = state_22859;
var statearr_22861_22885 = state_22859__$1;
(statearr_22861_22885[(2)] = inst_22855);

(statearr_22861_22885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22860 === (1))){
var state_22859__$1 = state_22859;
var statearr_22862_22886 = state_22859__$1;
(statearr_22862_22886[(2)] = null);

(statearr_22862_22886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22860 === (4))){
var inst_22841 = (state_22859[(7)]);
var inst_22841__$1 = (state_22859[(2)]);
var inst_22842 = (inst_22841__$1 == null);
var state_22859__$1 = (function (){var statearr_22863 = state_22859;
(statearr_22863[(7)] = inst_22841__$1);

return statearr_22863;
})();
if(cljs.core.truth_(inst_22842)){
var statearr_22864_22887 = state_22859__$1;
(statearr_22864_22887[(1)] = (5));

} else {
var statearr_22865_22888 = state_22859__$1;
(statearr_22865_22888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22860 === (6))){
var inst_22841 = (state_22859[(7)]);
var inst_22846 = p.call(null,inst_22841);
var state_22859__$1 = state_22859;
if(cljs.core.truth_(inst_22846)){
var statearr_22866_22889 = state_22859__$1;
(statearr_22866_22889[(1)] = (8));

} else {
var statearr_22867_22890 = state_22859__$1;
(statearr_22867_22890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22860 === (3))){
var inst_22857 = (state_22859[(2)]);
var state_22859__$1 = state_22859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22859__$1,inst_22857);
} else {
if((state_val_22860 === (2))){
var state_22859__$1 = state_22859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22859__$1,(4),ch);
} else {
if((state_val_22860 === (11))){
var inst_22849 = (state_22859[(2)]);
var state_22859__$1 = state_22859;
var statearr_22868_22891 = state_22859__$1;
(statearr_22868_22891[(2)] = inst_22849);

(statearr_22868_22891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22860 === (9))){
var state_22859__$1 = state_22859;
var statearr_22869_22892 = state_22859__$1;
(statearr_22869_22892[(2)] = null);

(statearr_22869_22892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22860 === (5))){
var inst_22844 = cljs.core.async.close_BANG_.call(null,out);
var state_22859__$1 = state_22859;
var statearr_22870_22893 = state_22859__$1;
(statearr_22870_22893[(2)] = inst_22844);

(statearr_22870_22893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22860 === (10))){
var inst_22852 = (state_22859[(2)]);
var state_22859__$1 = (function (){var statearr_22871 = state_22859;
(statearr_22871[(8)] = inst_22852);

return statearr_22871;
})();
var statearr_22872_22894 = state_22859__$1;
(statearr_22872_22894[(2)] = null);

(statearr_22872_22894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22860 === (8))){
var inst_22841 = (state_22859[(7)]);
var state_22859__$1 = state_22859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22859__$1,(11),out,inst_22841);
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
});})(c__20400__auto___22884,out))
;
return ((function (switch__20379__auto__,c__20400__auto___22884,out){
return (function() {
var cljs$core$async$state_machine__20380__auto__ = null;
var cljs$core$async$state_machine__20380__auto____0 = (function (){
var statearr_22876 = [null,null,null,null,null,null,null,null,null];
(statearr_22876[(0)] = cljs$core$async$state_machine__20380__auto__);

(statearr_22876[(1)] = (1));

return statearr_22876;
});
var cljs$core$async$state_machine__20380__auto____1 = (function (state_22859){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_22859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e22877){if((e22877 instanceof Object)){
var ex__20383__auto__ = e22877;
var statearr_22878_22895 = state_22859;
(statearr_22878_22895[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22896 = state_22859;
state_22859 = G__22896;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$state_machine__20380__auto__ = function(state_22859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20380__auto____1.call(this,state_22859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20380__auto____0;
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20380__auto____1;
return cljs$core$async$state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto___22884,out))
})();
var state__20402__auto__ = (function (){var statearr_22879 = f__20401__auto__.call(null);
(statearr_22879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___22884);

return statearr_22879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto___22884,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22897 = [];
var len__19330__auto___22900 = arguments.length;
var i__19331__auto___22901 = (0);
while(true){
if((i__19331__auto___22901 < len__19330__auto___22900)){
args22897.push((arguments[i__19331__auto___22901]));

var G__22902 = (i__19331__auto___22901 + (1));
i__19331__auto___22901 = G__22902;
continue;
} else {
}
break;
}

var G__22899 = args22897.length;
switch (G__22899) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22897.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto__){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto__){
return (function (state_23069){
var state_val_23070 = (state_23069[(1)]);
if((state_val_23070 === (7))){
var inst_23065 = (state_23069[(2)]);
var state_23069__$1 = state_23069;
var statearr_23071_23112 = state_23069__$1;
(statearr_23071_23112[(2)] = inst_23065);

(statearr_23071_23112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23070 === (20))){
var inst_23035 = (state_23069[(7)]);
var inst_23046 = (state_23069[(2)]);
var inst_23047 = cljs.core.next.call(null,inst_23035);
var inst_23021 = inst_23047;
var inst_23022 = null;
var inst_23023 = (0);
var inst_23024 = (0);
var state_23069__$1 = (function (){var statearr_23072 = state_23069;
(statearr_23072[(8)] = inst_23024);

(statearr_23072[(9)] = inst_23023);

(statearr_23072[(10)] = inst_23022);

(statearr_23072[(11)] = inst_23021);

(statearr_23072[(12)] = inst_23046);

return statearr_23072;
})();
var statearr_23073_23113 = state_23069__$1;
(statearr_23073_23113[(2)] = null);

(statearr_23073_23113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23070 === (1))){
var state_23069__$1 = state_23069;
var statearr_23074_23114 = state_23069__$1;
(statearr_23074_23114[(2)] = null);

(statearr_23074_23114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23070 === (4))){
var inst_23010 = (state_23069[(13)]);
var inst_23010__$1 = (state_23069[(2)]);
var inst_23011 = (inst_23010__$1 == null);
var state_23069__$1 = (function (){var statearr_23075 = state_23069;
(statearr_23075[(13)] = inst_23010__$1);

return statearr_23075;
})();
if(cljs.core.truth_(inst_23011)){
var statearr_23076_23115 = state_23069__$1;
(statearr_23076_23115[(1)] = (5));

} else {
var statearr_23077_23116 = state_23069__$1;
(statearr_23077_23116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23070 === (15))){
var state_23069__$1 = state_23069;
var statearr_23081_23117 = state_23069__$1;
(statearr_23081_23117[(2)] = null);

(statearr_23081_23117[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23070 === (21))){
var state_23069__$1 = state_23069;
var statearr_23082_23118 = state_23069__$1;
(statearr_23082_23118[(2)] = null);

(statearr_23082_23118[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23070 === (13))){
var inst_23024 = (state_23069[(8)]);
var inst_23023 = (state_23069[(9)]);
var inst_23022 = (state_23069[(10)]);
var inst_23021 = (state_23069[(11)]);
var inst_23031 = (state_23069[(2)]);
var inst_23032 = (inst_23024 + (1));
var tmp23078 = inst_23023;
var tmp23079 = inst_23022;
var tmp23080 = inst_23021;
var inst_23021__$1 = tmp23080;
var inst_23022__$1 = tmp23079;
var inst_23023__$1 = tmp23078;
var inst_23024__$1 = inst_23032;
var state_23069__$1 = (function (){var statearr_23083 = state_23069;
(statearr_23083[(8)] = inst_23024__$1);

(statearr_23083[(9)] = inst_23023__$1);

(statearr_23083[(10)] = inst_23022__$1);

(statearr_23083[(11)] = inst_23021__$1);

(statearr_23083[(14)] = inst_23031);

return statearr_23083;
})();
var statearr_23084_23119 = state_23069__$1;
(statearr_23084_23119[(2)] = null);

(statearr_23084_23119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23070 === (22))){
var state_23069__$1 = state_23069;
var statearr_23085_23120 = state_23069__$1;
(statearr_23085_23120[(2)] = null);

(statearr_23085_23120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23070 === (6))){
var inst_23010 = (state_23069[(13)]);
var inst_23019 = f.call(null,inst_23010);
var inst_23020 = cljs.core.seq.call(null,inst_23019);
var inst_23021 = inst_23020;
var inst_23022 = null;
var inst_23023 = (0);
var inst_23024 = (0);
var state_23069__$1 = (function (){var statearr_23086 = state_23069;
(statearr_23086[(8)] = inst_23024);

(statearr_23086[(9)] = inst_23023);

(statearr_23086[(10)] = inst_23022);

(statearr_23086[(11)] = inst_23021);

return statearr_23086;
})();
var statearr_23087_23121 = state_23069__$1;
(statearr_23087_23121[(2)] = null);

(statearr_23087_23121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23070 === (17))){
var inst_23035 = (state_23069[(7)]);
var inst_23039 = cljs.core.chunk_first.call(null,inst_23035);
var inst_23040 = cljs.core.chunk_rest.call(null,inst_23035);
var inst_23041 = cljs.core.count.call(null,inst_23039);
var inst_23021 = inst_23040;
var inst_23022 = inst_23039;
var inst_23023 = inst_23041;
var inst_23024 = (0);
var state_23069__$1 = (function (){var statearr_23088 = state_23069;
(statearr_23088[(8)] = inst_23024);

(statearr_23088[(9)] = inst_23023);

(statearr_23088[(10)] = inst_23022);

(statearr_23088[(11)] = inst_23021);

return statearr_23088;
})();
var statearr_23089_23122 = state_23069__$1;
(statearr_23089_23122[(2)] = null);

(statearr_23089_23122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23070 === (3))){
var inst_23067 = (state_23069[(2)]);
var state_23069__$1 = state_23069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23069__$1,inst_23067);
} else {
if((state_val_23070 === (12))){
var inst_23055 = (state_23069[(2)]);
var state_23069__$1 = state_23069;
var statearr_23090_23123 = state_23069__$1;
(statearr_23090_23123[(2)] = inst_23055);

(statearr_23090_23123[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23070 === (2))){
var state_23069__$1 = state_23069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23069__$1,(4),in$);
} else {
if((state_val_23070 === (23))){
var inst_23063 = (state_23069[(2)]);
var state_23069__$1 = state_23069;
var statearr_23091_23124 = state_23069__$1;
(statearr_23091_23124[(2)] = inst_23063);

(statearr_23091_23124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23070 === (19))){
var inst_23050 = (state_23069[(2)]);
var state_23069__$1 = state_23069;
var statearr_23092_23125 = state_23069__$1;
(statearr_23092_23125[(2)] = inst_23050);

(statearr_23092_23125[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23070 === (11))){
var inst_23035 = (state_23069[(7)]);
var inst_23021 = (state_23069[(11)]);
var inst_23035__$1 = cljs.core.seq.call(null,inst_23021);
var state_23069__$1 = (function (){var statearr_23093 = state_23069;
(statearr_23093[(7)] = inst_23035__$1);

return statearr_23093;
})();
if(inst_23035__$1){
var statearr_23094_23126 = state_23069__$1;
(statearr_23094_23126[(1)] = (14));

} else {
var statearr_23095_23127 = state_23069__$1;
(statearr_23095_23127[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23070 === (9))){
var inst_23057 = (state_23069[(2)]);
var inst_23058 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23069__$1 = (function (){var statearr_23096 = state_23069;
(statearr_23096[(15)] = inst_23057);

return statearr_23096;
})();
if(cljs.core.truth_(inst_23058)){
var statearr_23097_23128 = state_23069__$1;
(statearr_23097_23128[(1)] = (21));

} else {
var statearr_23098_23129 = state_23069__$1;
(statearr_23098_23129[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23070 === (5))){
var inst_23013 = cljs.core.async.close_BANG_.call(null,out);
var state_23069__$1 = state_23069;
var statearr_23099_23130 = state_23069__$1;
(statearr_23099_23130[(2)] = inst_23013);

(statearr_23099_23130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23070 === (14))){
var inst_23035 = (state_23069[(7)]);
var inst_23037 = cljs.core.chunked_seq_QMARK_.call(null,inst_23035);
var state_23069__$1 = state_23069;
if(inst_23037){
var statearr_23100_23131 = state_23069__$1;
(statearr_23100_23131[(1)] = (17));

} else {
var statearr_23101_23132 = state_23069__$1;
(statearr_23101_23132[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23070 === (16))){
var inst_23053 = (state_23069[(2)]);
var state_23069__$1 = state_23069;
var statearr_23102_23133 = state_23069__$1;
(statearr_23102_23133[(2)] = inst_23053);

(statearr_23102_23133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23070 === (10))){
var inst_23024 = (state_23069[(8)]);
var inst_23022 = (state_23069[(10)]);
var inst_23029 = cljs.core._nth.call(null,inst_23022,inst_23024);
var state_23069__$1 = state_23069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23069__$1,(13),out,inst_23029);
} else {
if((state_val_23070 === (18))){
var inst_23035 = (state_23069[(7)]);
var inst_23044 = cljs.core.first.call(null,inst_23035);
var state_23069__$1 = state_23069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23069__$1,(20),out,inst_23044);
} else {
if((state_val_23070 === (8))){
var inst_23024 = (state_23069[(8)]);
var inst_23023 = (state_23069[(9)]);
var inst_23026 = (inst_23024 < inst_23023);
var inst_23027 = inst_23026;
var state_23069__$1 = state_23069;
if(cljs.core.truth_(inst_23027)){
var statearr_23103_23134 = state_23069__$1;
(statearr_23103_23134[(1)] = (10));

} else {
var statearr_23104_23135 = state_23069__$1;
(statearr_23104_23135[(1)] = (11));

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
});})(c__20400__auto__))
;
return ((function (switch__20379__auto__,c__20400__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20380__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20380__auto____0 = (function (){
var statearr_23108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23108[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20380__auto__);

(statearr_23108[(1)] = (1));

return statearr_23108;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20380__auto____1 = (function (state_23069){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_23069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e23109){if((e23109 instanceof Object)){
var ex__20383__auto__ = e23109;
var statearr_23110_23136 = state_23069;
(statearr_23110_23136[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23137 = state_23069;
state_23069 = G__23137;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20380__auto__ = function(state_23069){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20380__auto____1.call(this,state_23069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20380__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20380__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto__))
})();
var state__20402__auto__ = (function (){var statearr_23111 = f__20401__auto__.call(null);
(statearr_23111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto__);

return statearr_23111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto__))
);

return c__20400__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23138 = [];
var len__19330__auto___23141 = arguments.length;
var i__19331__auto___23142 = (0);
while(true){
if((i__19331__auto___23142 < len__19330__auto___23141)){
args23138.push((arguments[i__19331__auto___23142]));

var G__23143 = (i__19331__auto___23142 + (1));
i__19331__auto___23142 = G__23143;
continue;
} else {
}
break;
}

var G__23140 = args23138.length;
switch (G__23140) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23138.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23145 = [];
var len__19330__auto___23148 = arguments.length;
var i__19331__auto___23149 = (0);
while(true){
if((i__19331__auto___23149 < len__19330__auto___23148)){
args23145.push((arguments[i__19331__auto___23149]));

var G__23150 = (i__19331__auto___23149 + (1));
i__19331__auto___23149 = G__23150;
continue;
} else {
}
break;
}

var G__23147 = args23145.length;
switch (G__23147) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23145.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23152 = [];
var len__19330__auto___23203 = arguments.length;
var i__19331__auto___23204 = (0);
while(true){
if((i__19331__auto___23204 < len__19330__auto___23203)){
args23152.push((arguments[i__19331__auto___23204]));

var G__23205 = (i__19331__auto___23204 + (1));
i__19331__auto___23204 = G__23205;
continue;
} else {
}
break;
}

var G__23154 = args23152.length;
switch (G__23154) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23152.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20400__auto___23207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto___23207,out){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto___23207,out){
return (function (state_23178){
var state_val_23179 = (state_23178[(1)]);
if((state_val_23179 === (7))){
var inst_23173 = (state_23178[(2)]);
var state_23178__$1 = state_23178;
var statearr_23180_23208 = state_23178__$1;
(statearr_23180_23208[(2)] = inst_23173);

(statearr_23180_23208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (1))){
var inst_23155 = null;
var state_23178__$1 = (function (){var statearr_23181 = state_23178;
(statearr_23181[(7)] = inst_23155);

return statearr_23181;
})();
var statearr_23182_23209 = state_23178__$1;
(statearr_23182_23209[(2)] = null);

(statearr_23182_23209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (4))){
var inst_23158 = (state_23178[(8)]);
var inst_23158__$1 = (state_23178[(2)]);
var inst_23159 = (inst_23158__$1 == null);
var inst_23160 = cljs.core.not.call(null,inst_23159);
var state_23178__$1 = (function (){var statearr_23183 = state_23178;
(statearr_23183[(8)] = inst_23158__$1);

return statearr_23183;
})();
if(inst_23160){
var statearr_23184_23210 = state_23178__$1;
(statearr_23184_23210[(1)] = (5));

} else {
var statearr_23185_23211 = state_23178__$1;
(statearr_23185_23211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (6))){
var state_23178__$1 = state_23178;
var statearr_23186_23212 = state_23178__$1;
(statearr_23186_23212[(2)] = null);

(statearr_23186_23212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (3))){
var inst_23175 = (state_23178[(2)]);
var inst_23176 = cljs.core.async.close_BANG_.call(null,out);
var state_23178__$1 = (function (){var statearr_23187 = state_23178;
(statearr_23187[(9)] = inst_23175);

return statearr_23187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23178__$1,inst_23176);
} else {
if((state_val_23179 === (2))){
var state_23178__$1 = state_23178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23178__$1,(4),ch);
} else {
if((state_val_23179 === (11))){
var inst_23158 = (state_23178[(8)]);
var inst_23167 = (state_23178[(2)]);
var inst_23155 = inst_23158;
var state_23178__$1 = (function (){var statearr_23188 = state_23178;
(statearr_23188[(7)] = inst_23155);

(statearr_23188[(10)] = inst_23167);

return statearr_23188;
})();
var statearr_23189_23213 = state_23178__$1;
(statearr_23189_23213[(2)] = null);

(statearr_23189_23213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (9))){
var inst_23158 = (state_23178[(8)]);
var state_23178__$1 = state_23178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23178__$1,(11),out,inst_23158);
} else {
if((state_val_23179 === (5))){
var inst_23158 = (state_23178[(8)]);
var inst_23155 = (state_23178[(7)]);
var inst_23162 = cljs.core._EQ_.call(null,inst_23158,inst_23155);
var state_23178__$1 = state_23178;
if(inst_23162){
var statearr_23191_23214 = state_23178__$1;
(statearr_23191_23214[(1)] = (8));

} else {
var statearr_23192_23215 = state_23178__$1;
(statearr_23192_23215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (10))){
var inst_23170 = (state_23178[(2)]);
var state_23178__$1 = state_23178;
var statearr_23193_23216 = state_23178__$1;
(statearr_23193_23216[(2)] = inst_23170);

(statearr_23193_23216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (8))){
var inst_23155 = (state_23178[(7)]);
var tmp23190 = inst_23155;
var inst_23155__$1 = tmp23190;
var state_23178__$1 = (function (){var statearr_23194 = state_23178;
(statearr_23194[(7)] = inst_23155__$1);

return statearr_23194;
})();
var statearr_23195_23217 = state_23178__$1;
(statearr_23195_23217[(2)] = null);

(statearr_23195_23217[(1)] = (2));


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
});})(c__20400__auto___23207,out))
;
return ((function (switch__20379__auto__,c__20400__auto___23207,out){
return (function() {
var cljs$core$async$state_machine__20380__auto__ = null;
var cljs$core$async$state_machine__20380__auto____0 = (function (){
var statearr_23199 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23199[(0)] = cljs$core$async$state_machine__20380__auto__);

(statearr_23199[(1)] = (1));

return statearr_23199;
});
var cljs$core$async$state_machine__20380__auto____1 = (function (state_23178){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_23178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e23200){if((e23200 instanceof Object)){
var ex__20383__auto__ = e23200;
var statearr_23201_23218 = state_23178;
(statearr_23201_23218[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23219 = state_23178;
state_23178 = G__23219;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$state_machine__20380__auto__ = function(state_23178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20380__auto____1.call(this,state_23178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20380__auto____0;
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20380__auto____1;
return cljs$core$async$state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto___23207,out))
})();
var state__20402__auto__ = (function (){var statearr_23202 = f__20401__auto__.call(null);
(statearr_23202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___23207);

return statearr_23202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto___23207,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23220 = [];
var len__19330__auto___23290 = arguments.length;
var i__19331__auto___23291 = (0);
while(true){
if((i__19331__auto___23291 < len__19330__auto___23290)){
args23220.push((arguments[i__19331__auto___23291]));

var G__23292 = (i__19331__auto___23291 + (1));
i__19331__auto___23291 = G__23292;
continue;
} else {
}
break;
}

var G__23222 = args23220.length;
switch (G__23222) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23220.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20400__auto___23294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto___23294,out){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto___23294,out){
return (function (state_23260){
var state_val_23261 = (state_23260[(1)]);
if((state_val_23261 === (7))){
var inst_23256 = (state_23260[(2)]);
var state_23260__$1 = state_23260;
var statearr_23262_23295 = state_23260__$1;
(statearr_23262_23295[(2)] = inst_23256);

(statearr_23262_23295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (1))){
var inst_23223 = (new Array(n));
var inst_23224 = inst_23223;
var inst_23225 = (0);
var state_23260__$1 = (function (){var statearr_23263 = state_23260;
(statearr_23263[(7)] = inst_23224);

(statearr_23263[(8)] = inst_23225);

return statearr_23263;
})();
var statearr_23264_23296 = state_23260__$1;
(statearr_23264_23296[(2)] = null);

(statearr_23264_23296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (4))){
var inst_23228 = (state_23260[(9)]);
var inst_23228__$1 = (state_23260[(2)]);
var inst_23229 = (inst_23228__$1 == null);
var inst_23230 = cljs.core.not.call(null,inst_23229);
var state_23260__$1 = (function (){var statearr_23265 = state_23260;
(statearr_23265[(9)] = inst_23228__$1);

return statearr_23265;
})();
if(inst_23230){
var statearr_23266_23297 = state_23260__$1;
(statearr_23266_23297[(1)] = (5));

} else {
var statearr_23267_23298 = state_23260__$1;
(statearr_23267_23298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (15))){
var inst_23250 = (state_23260[(2)]);
var state_23260__$1 = state_23260;
var statearr_23268_23299 = state_23260__$1;
(statearr_23268_23299[(2)] = inst_23250);

(statearr_23268_23299[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (13))){
var state_23260__$1 = state_23260;
var statearr_23269_23300 = state_23260__$1;
(statearr_23269_23300[(2)] = null);

(statearr_23269_23300[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (6))){
var inst_23225 = (state_23260[(8)]);
var inst_23246 = (inst_23225 > (0));
var state_23260__$1 = state_23260;
if(cljs.core.truth_(inst_23246)){
var statearr_23270_23301 = state_23260__$1;
(statearr_23270_23301[(1)] = (12));

} else {
var statearr_23271_23302 = state_23260__$1;
(statearr_23271_23302[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (3))){
var inst_23258 = (state_23260[(2)]);
var state_23260__$1 = state_23260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23260__$1,inst_23258);
} else {
if((state_val_23261 === (12))){
var inst_23224 = (state_23260[(7)]);
var inst_23248 = cljs.core.vec.call(null,inst_23224);
var state_23260__$1 = state_23260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23260__$1,(15),out,inst_23248);
} else {
if((state_val_23261 === (2))){
var state_23260__$1 = state_23260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23260__$1,(4),ch);
} else {
if((state_val_23261 === (11))){
var inst_23240 = (state_23260[(2)]);
var inst_23241 = (new Array(n));
var inst_23224 = inst_23241;
var inst_23225 = (0);
var state_23260__$1 = (function (){var statearr_23272 = state_23260;
(statearr_23272[(7)] = inst_23224);

(statearr_23272[(8)] = inst_23225);

(statearr_23272[(10)] = inst_23240);

return statearr_23272;
})();
var statearr_23273_23303 = state_23260__$1;
(statearr_23273_23303[(2)] = null);

(statearr_23273_23303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (9))){
var inst_23224 = (state_23260[(7)]);
var inst_23238 = cljs.core.vec.call(null,inst_23224);
var state_23260__$1 = state_23260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23260__$1,(11),out,inst_23238);
} else {
if((state_val_23261 === (5))){
var inst_23224 = (state_23260[(7)]);
var inst_23225 = (state_23260[(8)]);
var inst_23228 = (state_23260[(9)]);
var inst_23233 = (state_23260[(11)]);
var inst_23232 = (inst_23224[inst_23225] = inst_23228);
var inst_23233__$1 = (inst_23225 + (1));
var inst_23234 = (inst_23233__$1 < n);
var state_23260__$1 = (function (){var statearr_23274 = state_23260;
(statearr_23274[(12)] = inst_23232);

(statearr_23274[(11)] = inst_23233__$1);

return statearr_23274;
})();
if(cljs.core.truth_(inst_23234)){
var statearr_23275_23304 = state_23260__$1;
(statearr_23275_23304[(1)] = (8));

} else {
var statearr_23276_23305 = state_23260__$1;
(statearr_23276_23305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (14))){
var inst_23253 = (state_23260[(2)]);
var inst_23254 = cljs.core.async.close_BANG_.call(null,out);
var state_23260__$1 = (function (){var statearr_23278 = state_23260;
(statearr_23278[(13)] = inst_23253);

return statearr_23278;
})();
var statearr_23279_23306 = state_23260__$1;
(statearr_23279_23306[(2)] = inst_23254);

(statearr_23279_23306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (10))){
var inst_23244 = (state_23260[(2)]);
var state_23260__$1 = state_23260;
var statearr_23280_23307 = state_23260__$1;
(statearr_23280_23307[(2)] = inst_23244);

(statearr_23280_23307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (8))){
var inst_23224 = (state_23260[(7)]);
var inst_23233 = (state_23260[(11)]);
var tmp23277 = inst_23224;
var inst_23224__$1 = tmp23277;
var inst_23225 = inst_23233;
var state_23260__$1 = (function (){var statearr_23281 = state_23260;
(statearr_23281[(7)] = inst_23224__$1);

(statearr_23281[(8)] = inst_23225);

return statearr_23281;
})();
var statearr_23282_23308 = state_23260__$1;
(statearr_23282_23308[(2)] = null);

(statearr_23282_23308[(1)] = (2));


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
});})(c__20400__auto___23294,out))
;
return ((function (switch__20379__auto__,c__20400__auto___23294,out){
return (function() {
var cljs$core$async$state_machine__20380__auto__ = null;
var cljs$core$async$state_machine__20380__auto____0 = (function (){
var statearr_23286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23286[(0)] = cljs$core$async$state_machine__20380__auto__);

(statearr_23286[(1)] = (1));

return statearr_23286;
});
var cljs$core$async$state_machine__20380__auto____1 = (function (state_23260){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_23260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e23287){if((e23287 instanceof Object)){
var ex__20383__auto__ = e23287;
var statearr_23288_23309 = state_23260;
(statearr_23288_23309[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23310 = state_23260;
state_23260 = G__23310;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$state_machine__20380__auto__ = function(state_23260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20380__auto____1.call(this,state_23260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20380__auto____0;
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20380__auto____1;
return cljs$core$async$state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto___23294,out))
})();
var state__20402__auto__ = (function (){var statearr_23289 = f__20401__auto__.call(null);
(statearr_23289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___23294);

return statearr_23289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto___23294,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23311 = [];
var len__19330__auto___23385 = arguments.length;
var i__19331__auto___23386 = (0);
while(true){
if((i__19331__auto___23386 < len__19330__auto___23385)){
args23311.push((arguments[i__19331__auto___23386]));

var G__23387 = (i__19331__auto___23386 + (1));
i__19331__auto___23386 = G__23387;
continue;
} else {
}
break;
}

var G__23313 = args23311.length;
switch (G__23313) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23311.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20400__auto___23389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20400__auto___23389,out){
return (function (){
var f__20401__auto__ = (function (){var switch__20379__auto__ = ((function (c__20400__auto___23389,out){
return (function (state_23355){
var state_val_23356 = (state_23355[(1)]);
if((state_val_23356 === (7))){
var inst_23351 = (state_23355[(2)]);
var state_23355__$1 = state_23355;
var statearr_23357_23390 = state_23355__$1;
(statearr_23357_23390[(2)] = inst_23351);

(statearr_23357_23390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (1))){
var inst_23314 = [];
var inst_23315 = inst_23314;
var inst_23316 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23355__$1 = (function (){var statearr_23358 = state_23355;
(statearr_23358[(7)] = inst_23315);

(statearr_23358[(8)] = inst_23316);

return statearr_23358;
})();
var statearr_23359_23391 = state_23355__$1;
(statearr_23359_23391[(2)] = null);

(statearr_23359_23391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (4))){
var inst_23319 = (state_23355[(9)]);
var inst_23319__$1 = (state_23355[(2)]);
var inst_23320 = (inst_23319__$1 == null);
var inst_23321 = cljs.core.not.call(null,inst_23320);
var state_23355__$1 = (function (){var statearr_23360 = state_23355;
(statearr_23360[(9)] = inst_23319__$1);

return statearr_23360;
})();
if(inst_23321){
var statearr_23361_23392 = state_23355__$1;
(statearr_23361_23392[(1)] = (5));

} else {
var statearr_23362_23393 = state_23355__$1;
(statearr_23362_23393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (15))){
var inst_23345 = (state_23355[(2)]);
var state_23355__$1 = state_23355;
var statearr_23363_23394 = state_23355__$1;
(statearr_23363_23394[(2)] = inst_23345);

(statearr_23363_23394[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (13))){
var state_23355__$1 = state_23355;
var statearr_23364_23395 = state_23355__$1;
(statearr_23364_23395[(2)] = null);

(statearr_23364_23395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (6))){
var inst_23315 = (state_23355[(7)]);
var inst_23340 = inst_23315.length;
var inst_23341 = (inst_23340 > (0));
var state_23355__$1 = state_23355;
if(cljs.core.truth_(inst_23341)){
var statearr_23365_23396 = state_23355__$1;
(statearr_23365_23396[(1)] = (12));

} else {
var statearr_23366_23397 = state_23355__$1;
(statearr_23366_23397[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (3))){
var inst_23353 = (state_23355[(2)]);
var state_23355__$1 = state_23355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23355__$1,inst_23353);
} else {
if((state_val_23356 === (12))){
var inst_23315 = (state_23355[(7)]);
var inst_23343 = cljs.core.vec.call(null,inst_23315);
var state_23355__$1 = state_23355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23355__$1,(15),out,inst_23343);
} else {
if((state_val_23356 === (2))){
var state_23355__$1 = state_23355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23355__$1,(4),ch);
} else {
if((state_val_23356 === (11))){
var inst_23323 = (state_23355[(10)]);
var inst_23319 = (state_23355[(9)]);
var inst_23333 = (state_23355[(2)]);
var inst_23334 = [];
var inst_23335 = inst_23334.push(inst_23319);
var inst_23315 = inst_23334;
var inst_23316 = inst_23323;
var state_23355__$1 = (function (){var statearr_23367 = state_23355;
(statearr_23367[(7)] = inst_23315);

(statearr_23367[(8)] = inst_23316);

(statearr_23367[(11)] = inst_23335);

(statearr_23367[(12)] = inst_23333);

return statearr_23367;
})();
var statearr_23368_23398 = state_23355__$1;
(statearr_23368_23398[(2)] = null);

(statearr_23368_23398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (9))){
var inst_23315 = (state_23355[(7)]);
var inst_23331 = cljs.core.vec.call(null,inst_23315);
var state_23355__$1 = state_23355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23355__$1,(11),out,inst_23331);
} else {
if((state_val_23356 === (5))){
var inst_23316 = (state_23355[(8)]);
var inst_23323 = (state_23355[(10)]);
var inst_23319 = (state_23355[(9)]);
var inst_23323__$1 = f.call(null,inst_23319);
var inst_23324 = cljs.core._EQ_.call(null,inst_23323__$1,inst_23316);
var inst_23325 = cljs.core.keyword_identical_QMARK_.call(null,inst_23316,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23326 = (inst_23324) || (inst_23325);
var state_23355__$1 = (function (){var statearr_23369 = state_23355;
(statearr_23369[(10)] = inst_23323__$1);

return statearr_23369;
})();
if(cljs.core.truth_(inst_23326)){
var statearr_23370_23399 = state_23355__$1;
(statearr_23370_23399[(1)] = (8));

} else {
var statearr_23371_23400 = state_23355__$1;
(statearr_23371_23400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (14))){
var inst_23348 = (state_23355[(2)]);
var inst_23349 = cljs.core.async.close_BANG_.call(null,out);
var state_23355__$1 = (function (){var statearr_23373 = state_23355;
(statearr_23373[(13)] = inst_23348);

return statearr_23373;
})();
var statearr_23374_23401 = state_23355__$1;
(statearr_23374_23401[(2)] = inst_23349);

(statearr_23374_23401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (10))){
var inst_23338 = (state_23355[(2)]);
var state_23355__$1 = state_23355;
var statearr_23375_23402 = state_23355__$1;
(statearr_23375_23402[(2)] = inst_23338);

(statearr_23375_23402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23356 === (8))){
var inst_23315 = (state_23355[(7)]);
var inst_23323 = (state_23355[(10)]);
var inst_23319 = (state_23355[(9)]);
var inst_23328 = inst_23315.push(inst_23319);
var tmp23372 = inst_23315;
var inst_23315__$1 = tmp23372;
var inst_23316 = inst_23323;
var state_23355__$1 = (function (){var statearr_23376 = state_23355;
(statearr_23376[(7)] = inst_23315__$1);

(statearr_23376[(8)] = inst_23316);

(statearr_23376[(14)] = inst_23328);

return statearr_23376;
})();
var statearr_23377_23403 = state_23355__$1;
(statearr_23377_23403[(2)] = null);

(statearr_23377_23403[(1)] = (2));


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
});})(c__20400__auto___23389,out))
;
return ((function (switch__20379__auto__,c__20400__auto___23389,out){
return (function() {
var cljs$core$async$state_machine__20380__auto__ = null;
var cljs$core$async$state_machine__20380__auto____0 = (function (){
var statearr_23381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23381[(0)] = cljs$core$async$state_machine__20380__auto__);

(statearr_23381[(1)] = (1));

return statearr_23381;
});
var cljs$core$async$state_machine__20380__auto____1 = (function (state_23355){
while(true){
var ret_value__20381__auto__ = (function (){try{while(true){
var result__20382__auto__ = switch__20379__auto__.call(null,state_23355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20382__auto__;
}
break;
}
}catch (e23382){if((e23382 instanceof Object)){
var ex__20383__auto__ = e23382;
var statearr_23383_23404 = state_23355;
(statearr_23383_23404[(5)] = ex__20383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23405 = state_23355;
state_23355 = G__23405;
continue;
} else {
return ret_value__20381__auto__;
}
break;
}
});
cljs$core$async$state_machine__20380__auto__ = function(state_23355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20380__auto____1.call(this,state_23355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20380__auto____0;
cljs$core$async$state_machine__20380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20380__auto____1;
return cljs$core$async$state_machine__20380__auto__;
})()
;})(switch__20379__auto__,c__20400__auto___23389,out))
})();
var state__20402__auto__ = (function (){var statearr_23384 = f__20401__auto__.call(null);
(statearr_23384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20400__auto___23389);

return statearr_23384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20402__auto__);
});})(c__20400__auto___23389,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map