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
if(typeof cljs.core.async.t_cljs$core$async20489 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20489 = (function (fn_handler,f,meta20490){
this.fn_handler = fn_handler;
this.f = f;
this.meta20490 = meta20490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20491,meta20490__$1){
var self__ = this;
var _20491__$1 = this;
return (new cljs.core.async.t_cljs$core$async20489(self__.fn_handler,self__.f,meta20490__$1));
});

cljs.core.async.t_cljs$core$async20489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20491){
var self__ = this;
var _20491__$1 = this;
return self__.meta20490;
});

cljs.core.async.t_cljs$core$async20489.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20489.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20489.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta20490","meta20490",-1655741433,null)], null);
});

cljs.core.async.t_cljs$core$async20489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20489";

cljs.core.async.t_cljs$core$async20489.cljs$lang$ctorPrWriter = (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async20489");
});

cljs.core.async.__GT_t_cljs$core$async20489 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async20489(fn_handler__$1,f__$1,meta20490){
return (new cljs.core.async.t_cljs$core$async20489(fn_handler__$1,f__$1,meta20490));
});

}

return (new cljs.core.async.t_cljs$core$async20489(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args20494 = [];
var len__19330__auto___20497 = arguments.length;
var i__19331__auto___20498 = (0);
while(true){
if((i__19331__auto___20498 < len__19330__auto___20497)){
args20494.push((arguments[i__19331__auto___20498]));

var G__20499 = (i__19331__auto___20498 + (1));
i__19331__auto___20498 = G__20499;
continue;
} else {
}
break;
}

var G__20496 = args20494.length;
switch (G__20496) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20494.length)].join('')));

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
var args20501 = [];
var len__19330__auto___20504 = arguments.length;
var i__19331__auto___20505 = (0);
while(true){
if((i__19331__auto___20505 < len__19330__auto___20504)){
args20501.push((arguments[i__19331__auto___20505]));

var G__20506 = (i__19331__auto___20505 + (1));
i__19331__auto___20505 = G__20506;
continue;
} else {
}
break;
}

var G__20503 = args20501.length;
switch (G__20503) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20501.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20508 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20508);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20508,ret){
return (function (){
return fn1.call(null,val_20508);
});})(val_20508,ret))
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
var args20509 = [];
var len__19330__auto___20512 = arguments.length;
var i__19331__auto___20513 = (0);
while(true){
if((i__19331__auto___20513 < len__19330__auto___20512)){
args20509.push((arguments[i__19331__auto___20513]));

var G__20514 = (i__19331__auto___20513 + (1));
i__19331__auto___20513 = G__20514;
continue;
} else {
}
break;
}

var G__20511 = args20509.length;
switch (G__20511) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20509.length)].join('')));

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
var n__19179__auto___20516 = n;
var x_20517 = (0);
while(true){
if((x_20517 < n__19179__auto___20516)){
(a[x_20517] = (0));

var G__20518 = (x_20517 + (1));
x_20517 = G__20518;
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

var G__20519 = (i + (1));
i = G__20519;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20523 = (function (alt_flag,flag,meta20524){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20524 = meta20524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20525,meta20524__$1){
var self__ = this;
var _20525__$1 = this;
return (new cljs.core.async.t_cljs$core$async20523(self__.alt_flag,self__.flag,meta20524__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20523.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20525){
var self__ = this;
var _20525__$1 = this;
return self__.meta20524;
});})(flag))
;

cljs.core.async.t_cljs$core$async20523.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20523.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20523.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20523.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20524","meta20524",1902693113,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20523";

cljs.core.async.t_cljs$core$async20523.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async20523");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20523 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20523(alt_flag__$1,flag__$1,meta20524){
return (new cljs.core.async.t_cljs$core$async20523(alt_flag__$1,flag__$1,meta20524));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20523(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20529 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20529 = (function (alt_handler,flag,cb,meta20530){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20530 = meta20530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20531,meta20530__$1){
var self__ = this;
var _20531__$1 = this;
return (new cljs.core.async.t_cljs$core$async20529(self__.alt_handler,self__.flag,self__.cb,meta20530__$1));
});

cljs.core.async.t_cljs$core$async20529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20531){
var self__ = this;
var _20531__$1 = this;
return self__.meta20530;
});

cljs.core.async.t_cljs$core$async20529.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20529.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20529.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20530","meta20530",1119243058,null)], null);
});

cljs.core.async.t_cljs$core$async20529.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20529";

cljs.core.async.t_cljs$core$async20529.cljs$lang$ctorPrWriter = (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async20529");
});

cljs.core.async.__GT_t_cljs$core$async20529 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20529(alt_handler__$1,flag__$1,cb__$1,meta20530){
return (new cljs.core.async.t_cljs$core$async20529(alt_handler__$1,flag__$1,cb__$1,meta20530));
});

}

return (new cljs.core.async.t_cljs$core$async20529(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__20532_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20532_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20533_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20533_SHARP_,port], null));
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
var G__20534 = (i + (1));
i = G__20534;
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
var len__19330__auto___20540 = arguments.length;
var i__19331__auto___20541 = (0);
while(true){
if((i__19331__auto___20541 < len__19330__auto___20540)){
args__19337__auto__.push((arguments[i__19331__auto___20541]));

var G__20542 = (i__19331__auto___20541 + (1));
i__19331__auto___20541 = G__20542;
continue;
} else {
}
break;
}

var argseq__19338__auto__ = ((((1) < args__19337__auto__.length))?(new cljs.core.IndexedSeq(args__19337__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19338__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20537){
var map__20538 = p__20537;
var map__20538__$1 = ((((!((map__20538 == null)))?((((map__20538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20538):map__20538);
var opts = map__20538__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20535){
var G__20536 = cljs.core.first.call(null,seq20535);
var seq20535__$1 = cljs.core.next.call(null,seq20535);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20536,seq20535__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20543 = [];
var len__19330__auto___20593 = arguments.length;
var i__19331__auto___20594 = (0);
while(true){
if((i__19331__auto___20594 < len__19330__auto___20593)){
args20543.push((arguments[i__19331__auto___20594]));

var G__20595 = (i__19331__auto___20594 + (1));
i__19331__auto___20594 = G__20595;
continue;
} else {
}
break;
}

var G__20545 = args20543.length;
switch (G__20545) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20543.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20441__auto___20597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto___20597){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto___20597){
return (function (state_20569){
var state_val_20570 = (state_20569[(1)]);
if((state_val_20570 === (7))){
var inst_20565 = (state_20569[(2)]);
var state_20569__$1 = state_20569;
var statearr_20571_20598 = state_20569__$1;
(statearr_20571_20598[(2)] = inst_20565);

(statearr_20571_20598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20570 === (1))){
var state_20569__$1 = state_20569;
var statearr_20572_20599 = state_20569__$1;
(statearr_20572_20599[(2)] = null);

(statearr_20572_20599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20570 === (4))){
var inst_20548 = (state_20569[(7)]);
var inst_20548__$1 = (state_20569[(2)]);
var inst_20549 = (inst_20548__$1 == null);
var state_20569__$1 = (function (){var statearr_20573 = state_20569;
(statearr_20573[(7)] = inst_20548__$1);

return statearr_20573;
})();
if(cljs.core.truth_(inst_20549)){
var statearr_20574_20600 = state_20569__$1;
(statearr_20574_20600[(1)] = (5));

} else {
var statearr_20575_20601 = state_20569__$1;
(statearr_20575_20601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20570 === (13))){
var state_20569__$1 = state_20569;
var statearr_20576_20602 = state_20569__$1;
(statearr_20576_20602[(2)] = null);

(statearr_20576_20602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20570 === (6))){
var inst_20548 = (state_20569[(7)]);
var state_20569__$1 = state_20569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20569__$1,(11),to,inst_20548);
} else {
if((state_val_20570 === (3))){
var inst_20567 = (state_20569[(2)]);
var state_20569__$1 = state_20569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20569__$1,inst_20567);
} else {
if((state_val_20570 === (12))){
var state_20569__$1 = state_20569;
var statearr_20577_20603 = state_20569__$1;
(statearr_20577_20603[(2)] = null);

(statearr_20577_20603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20570 === (2))){
var state_20569__$1 = state_20569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20569__$1,(4),from);
} else {
if((state_val_20570 === (11))){
var inst_20558 = (state_20569[(2)]);
var state_20569__$1 = state_20569;
if(cljs.core.truth_(inst_20558)){
var statearr_20578_20604 = state_20569__$1;
(statearr_20578_20604[(1)] = (12));

} else {
var statearr_20579_20605 = state_20569__$1;
(statearr_20579_20605[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20570 === (9))){
var state_20569__$1 = state_20569;
var statearr_20580_20606 = state_20569__$1;
(statearr_20580_20606[(2)] = null);

(statearr_20580_20606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20570 === (5))){
var state_20569__$1 = state_20569;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20581_20607 = state_20569__$1;
(statearr_20581_20607[(1)] = (8));

} else {
var statearr_20582_20608 = state_20569__$1;
(statearr_20582_20608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20570 === (14))){
var inst_20563 = (state_20569[(2)]);
var state_20569__$1 = state_20569;
var statearr_20583_20609 = state_20569__$1;
(statearr_20583_20609[(2)] = inst_20563);

(statearr_20583_20609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20570 === (10))){
var inst_20555 = (state_20569[(2)]);
var state_20569__$1 = state_20569;
var statearr_20584_20610 = state_20569__$1;
(statearr_20584_20610[(2)] = inst_20555);

(statearr_20584_20610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20570 === (8))){
var inst_20552 = cljs.core.async.close_BANG_.call(null,to);
var state_20569__$1 = state_20569;
var statearr_20585_20611 = state_20569__$1;
(statearr_20585_20611[(2)] = inst_20552);

(statearr_20585_20611[(1)] = (10));


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
});})(c__20441__auto___20597))
;
return ((function (switch__20376__auto__,c__20441__auto___20597){
return (function() {
var cljs$core$async$state_machine__20377__auto__ = null;
var cljs$core$async$state_machine__20377__auto____0 = (function (){
var statearr_20589 = [null,null,null,null,null,null,null,null];
(statearr_20589[(0)] = cljs$core$async$state_machine__20377__auto__);

(statearr_20589[(1)] = (1));

return statearr_20589;
});
var cljs$core$async$state_machine__20377__auto____1 = (function (state_20569){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_20569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e20590){if((e20590 instanceof Object)){
var ex__20380__auto__ = e20590;
var statearr_20591_20612 = state_20569;
(statearr_20591_20612[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20613 = state_20569;
state_20569 = G__20613;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$state_machine__20377__auto__ = function(state_20569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20377__auto____1.call(this,state_20569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20377__auto____0;
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20377__auto____1;
return cljs$core$async$state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto___20597))
})();
var state__20443__auto__ = (function (){var statearr_20592 = f__20442__auto__.call(null);
(statearr_20592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___20597);

return statearr_20592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto___20597))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20797){
var vec__20798 = p__20797;
var v = cljs.core.nth.call(null,vec__20798,(0),null);
var p = cljs.core.nth.call(null,vec__20798,(1),null);
var job = vec__20798;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20441__auto___20980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto___20980,res,vec__20798,v,p,job,jobs,results){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto___20980,res,vec__20798,v,p,job,jobs,results){
return (function (state_20803){
var state_val_20804 = (state_20803[(1)]);
if((state_val_20804 === (1))){
var state_20803__$1 = state_20803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20803__$1,(2),res,v);
} else {
if((state_val_20804 === (2))){
var inst_20800 = (state_20803[(2)]);
var inst_20801 = cljs.core.async.close_BANG_.call(null,res);
var state_20803__$1 = (function (){var statearr_20805 = state_20803;
(statearr_20805[(7)] = inst_20800);

return statearr_20805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20803__$1,inst_20801);
} else {
return null;
}
}
});})(c__20441__auto___20980,res,vec__20798,v,p,job,jobs,results))
;
return ((function (switch__20376__auto__,c__20441__auto___20980,res,vec__20798,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____0 = (function (){
var statearr_20809 = [null,null,null,null,null,null,null,null];
(statearr_20809[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__);

(statearr_20809[(1)] = (1));

return statearr_20809;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____1 = (function (state_20803){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_20803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e20810){if((e20810 instanceof Object)){
var ex__20380__auto__ = e20810;
var statearr_20811_20981 = state_20803;
(statearr_20811_20981[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20982 = state_20803;
state_20803 = G__20982;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__ = function(state_20803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____1.call(this,state_20803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto___20980,res,vec__20798,v,p,job,jobs,results))
})();
var state__20443__auto__ = (function (){var statearr_20812 = f__20442__auto__.call(null);
(statearr_20812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___20980);

return statearr_20812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto___20980,res,vec__20798,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20813){
var vec__20814 = p__20813;
var v = cljs.core.nth.call(null,vec__20814,(0),null);
var p = cljs.core.nth.call(null,vec__20814,(1),null);
var job = vec__20814;
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
var n__19179__auto___20983 = n;
var __20984 = (0);
while(true){
if((__20984 < n__19179__auto___20983)){
var G__20815_20985 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20815_20985) {
case "compute":
var c__20441__auto___20987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20984,c__20441__auto___20987,G__20815_20985,n__19179__auto___20983,jobs,results,process,async){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (__20984,c__20441__auto___20987,G__20815_20985,n__19179__auto___20983,jobs,results,process,async){
return (function (state_20828){
var state_val_20829 = (state_20828[(1)]);
if((state_val_20829 === (1))){
var state_20828__$1 = state_20828;
var statearr_20830_20988 = state_20828__$1;
(statearr_20830_20988[(2)] = null);

(statearr_20830_20988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (2))){
var state_20828__$1 = state_20828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20828__$1,(4),jobs);
} else {
if((state_val_20829 === (3))){
var inst_20826 = (state_20828[(2)]);
var state_20828__$1 = state_20828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20828__$1,inst_20826);
} else {
if((state_val_20829 === (4))){
var inst_20818 = (state_20828[(2)]);
var inst_20819 = process.call(null,inst_20818);
var state_20828__$1 = state_20828;
if(cljs.core.truth_(inst_20819)){
var statearr_20831_20989 = state_20828__$1;
(statearr_20831_20989[(1)] = (5));

} else {
var statearr_20832_20990 = state_20828__$1;
(statearr_20832_20990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (5))){
var state_20828__$1 = state_20828;
var statearr_20833_20991 = state_20828__$1;
(statearr_20833_20991[(2)] = null);

(statearr_20833_20991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (6))){
var state_20828__$1 = state_20828;
var statearr_20834_20992 = state_20828__$1;
(statearr_20834_20992[(2)] = null);

(statearr_20834_20992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (7))){
var inst_20824 = (state_20828[(2)]);
var state_20828__$1 = state_20828;
var statearr_20835_20993 = state_20828__$1;
(statearr_20835_20993[(2)] = inst_20824);

(statearr_20835_20993[(1)] = (3));


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
});})(__20984,c__20441__auto___20987,G__20815_20985,n__19179__auto___20983,jobs,results,process,async))
;
return ((function (__20984,switch__20376__auto__,c__20441__auto___20987,G__20815_20985,n__19179__auto___20983,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____0 = (function (){
var statearr_20839 = [null,null,null,null,null,null,null];
(statearr_20839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__);

(statearr_20839[(1)] = (1));

return statearr_20839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____1 = (function (state_20828){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_20828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e20840){if((e20840 instanceof Object)){
var ex__20380__auto__ = e20840;
var statearr_20841_20994 = state_20828;
(statearr_20841_20994[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20995 = state_20828;
state_20828 = G__20995;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__ = function(state_20828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____1.call(this,state_20828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__;
})()
;})(__20984,switch__20376__auto__,c__20441__auto___20987,G__20815_20985,n__19179__auto___20983,jobs,results,process,async))
})();
var state__20443__auto__ = (function (){var statearr_20842 = f__20442__auto__.call(null);
(statearr_20842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___20987);

return statearr_20842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(__20984,c__20441__auto___20987,G__20815_20985,n__19179__auto___20983,jobs,results,process,async))
);


break;
case "async":
var c__20441__auto___20996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20984,c__20441__auto___20996,G__20815_20985,n__19179__auto___20983,jobs,results,process,async){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (__20984,c__20441__auto___20996,G__20815_20985,n__19179__auto___20983,jobs,results,process,async){
return (function (state_20855){
var state_val_20856 = (state_20855[(1)]);
if((state_val_20856 === (1))){
var state_20855__$1 = state_20855;
var statearr_20857_20997 = state_20855__$1;
(statearr_20857_20997[(2)] = null);

(statearr_20857_20997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20856 === (2))){
var state_20855__$1 = state_20855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20855__$1,(4),jobs);
} else {
if((state_val_20856 === (3))){
var inst_20853 = (state_20855[(2)]);
var state_20855__$1 = state_20855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20855__$1,inst_20853);
} else {
if((state_val_20856 === (4))){
var inst_20845 = (state_20855[(2)]);
var inst_20846 = async.call(null,inst_20845);
var state_20855__$1 = state_20855;
if(cljs.core.truth_(inst_20846)){
var statearr_20858_20998 = state_20855__$1;
(statearr_20858_20998[(1)] = (5));

} else {
var statearr_20859_20999 = state_20855__$1;
(statearr_20859_20999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20856 === (5))){
var state_20855__$1 = state_20855;
var statearr_20860_21000 = state_20855__$1;
(statearr_20860_21000[(2)] = null);

(statearr_20860_21000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20856 === (6))){
var state_20855__$1 = state_20855;
var statearr_20861_21001 = state_20855__$1;
(statearr_20861_21001[(2)] = null);

(statearr_20861_21001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20856 === (7))){
var inst_20851 = (state_20855[(2)]);
var state_20855__$1 = state_20855;
var statearr_20862_21002 = state_20855__$1;
(statearr_20862_21002[(2)] = inst_20851);

(statearr_20862_21002[(1)] = (3));


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
});})(__20984,c__20441__auto___20996,G__20815_20985,n__19179__auto___20983,jobs,results,process,async))
;
return ((function (__20984,switch__20376__auto__,c__20441__auto___20996,G__20815_20985,n__19179__auto___20983,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____0 = (function (){
var statearr_20866 = [null,null,null,null,null,null,null];
(statearr_20866[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__);

(statearr_20866[(1)] = (1));

return statearr_20866;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____1 = (function (state_20855){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_20855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e20867){if((e20867 instanceof Object)){
var ex__20380__auto__ = e20867;
var statearr_20868_21003 = state_20855;
(statearr_20868_21003[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21004 = state_20855;
state_20855 = G__21004;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__ = function(state_20855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____1.call(this,state_20855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__;
})()
;})(__20984,switch__20376__auto__,c__20441__auto___20996,G__20815_20985,n__19179__auto___20983,jobs,results,process,async))
})();
var state__20443__auto__ = (function (){var statearr_20869 = f__20442__auto__.call(null);
(statearr_20869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___20996);

return statearr_20869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(__20984,c__20441__auto___20996,G__20815_20985,n__19179__auto___20983,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21005 = (__20984 + (1));
__20984 = G__21005;
continue;
} else {
}
break;
}

var c__20441__auto___21006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto___21006,jobs,results,process,async){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto___21006,jobs,results,process,async){
return (function (state_20891){
var state_val_20892 = (state_20891[(1)]);
if((state_val_20892 === (1))){
var state_20891__$1 = state_20891;
var statearr_20893_21007 = state_20891__$1;
(statearr_20893_21007[(2)] = null);

(statearr_20893_21007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20892 === (2))){
var state_20891__$1 = state_20891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20891__$1,(4),from);
} else {
if((state_val_20892 === (3))){
var inst_20889 = (state_20891[(2)]);
var state_20891__$1 = state_20891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20891__$1,inst_20889);
} else {
if((state_val_20892 === (4))){
var inst_20872 = (state_20891[(7)]);
var inst_20872__$1 = (state_20891[(2)]);
var inst_20873 = (inst_20872__$1 == null);
var state_20891__$1 = (function (){var statearr_20894 = state_20891;
(statearr_20894[(7)] = inst_20872__$1);

return statearr_20894;
})();
if(cljs.core.truth_(inst_20873)){
var statearr_20895_21008 = state_20891__$1;
(statearr_20895_21008[(1)] = (5));

} else {
var statearr_20896_21009 = state_20891__$1;
(statearr_20896_21009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20892 === (5))){
var inst_20875 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20891__$1 = state_20891;
var statearr_20897_21010 = state_20891__$1;
(statearr_20897_21010[(2)] = inst_20875);

(statearr_20897_21010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20892 === (6))){
var inst_20877 = (state_20891[(8)]);
var inst_20872 = (state_20891[(7)]);
var inst_20877__$1 = cljs.core.async.chan.call(null,(1));
var inst_20878 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20879 = [inst_20872,inst_20877__$1];
var inst_20880 = (new cljs.core.PersistentVector(null,2,(5),inst_20878,inst_20879,null));
var state_20891__$1 = (function (){var statearr_20898 = state_20891;
(statearr_20898[(8)] = inst_20877__$1);

return statearr_20898;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20891__$1,(8),jobs,inst_20880);
} else {
if((state_val_20892 === (7))){
var inst_20887 = (state_20891[(2)]);
var state_20891__$1 = state_20891;
var statearr_20899_21011 = state_20891__$1;
(statearr_20899_21011[(2)] = inst_20887);

(statearr_20899_21011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20892 === (8))){
var inst_20877 = (state_20891[(8)]);
var inst_20882 = (state_20891[(2)]);
var state_20891__$1 = (function (){var statearr_20900 = state_20891;
(statearr_20900[(9)] = inst_20882);

return statearr_20900;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20891__$1,(9),results,inst_20877);
} else {
if((state_val_20892 === (9))){
var inst_20884 = (state_20891[(2)]);
var state_20891__$1 = (function (){var statearr_20901 = state_20891;
(statearr_20901[(10)] = inst_20884);

return statearr_20901;
})();
var statearr_20902_21012 = state_20891__$1;
(statearr_20902_21012[(2)] = null);

(statearr_20902_21012[(1)] = (2));


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
});})(c__20441__auto___21006,jobs,results,process,async))
;
return ((function (switch__20376__auto__,c__20441__auto___21006,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____0 = (function (){
var statearr_20906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20906[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__);

(statearr_20906[(1)] = (1));

return statearr_20906;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____1 = (function (state_20891){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_20891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e20907){if((e20907 instanceof Object)){
var ex__20380__auto__ = e20907;
var statearr_20908_21013 = state_20891;
(statearr_20908_21013[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21014 = state_20891;
state_20891 = G__21014;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__ = function(state_20891){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____1.call(this,state_20891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto___21006,jobs,results,process,async))
})();
var state__20443__auto__ = (function (){var statearr_20909 = f__20442__auto__.call(null);
(statearr_20909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___21006);

return statearr_20909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto___21006,jobs,results,process,async))
);


var c__20441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto__,jobs,results,process,async){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto__,jobs,results,process,async){
return (function (state_20947){
var state_val_20948 = (state_20947[(1)]);
if((state_val_20948 === (7))){
var inst_20943 = (state_20947[(2)]);
var state_20947__$1 = state_20947;
var statearr_20949_21015 = state_20947__$1;
(statearr_20949_21015[(2)] = inst_20943);

(statearr_20949_21015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (20))){
var state_20947__$1 = state_20947;
var statearr_20950_21016 = state_20947__$1;
(statearr_20950_21016[(2)] = null);

(statearr_20950_21016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (1))){
var state_20947__$1 = state_20947;
var statearr_20951_21017 = state_20947__$1;
(statearr_20951_21017[(2)] = null);

(statearr_20951_21017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (4))){
var inst_20912 = (state_20947[(7)]);
var inst_20912__$1 = (state_20947[(2)]);
var inst_20913 = (inst_20912__$1 == null);
var state_20947__$1 = (function (){var statearr_20952 = state_20947;
(statearr_20952[(7)] = inst_20912__$1);

return statearr_20952;
})();
if(cljs.core.truth_(inst_20913)){
var statearr_20953_21018 = state_20947__$1;
(statearr_20953_21018[(1)] = (5));

} else {
var statearr_20954_21019 = state_20947__$1;
(statearr_20954_21019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (15))){
var inst_20925 = (state_20947[(8)]);
var state_20947__$1 = state_20947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20947__$1,(18),to,inst_20925);
} else {
if((state_val_20948 === (21))){
var inst_20938 = (state_20947[(2)]);
var state_20947__$1 = state_20947;
var statearr_20955_21020 = state_20947__$1;
(statearr_20955_21020[(2)] = inst_20938);

(statearr_20955_21020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (13))){
var inst_20940 = (state_20947[(2)]);
var state_20947__$1 = (function (){var statearr_20956 = state_20947;
(statearr_20956[(9)] = inst_20940);

return statearr_20956;
})();
var statearr_20957_21021 = state_20947__$1;
(statearr_20957_21021[(2)] = null);

(statearr_20957_21021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (6))){
var inst_20912 = (state_20947[(7)]);
var state_20947__$1 = state_20947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20947__$1,(11),inst_20912);
} else {
if((state_val_20948 === (17))){
var inst_20933 = (state_20947[(2)]);
var state_20947__$1 = state_20947;
if(cljs.core.truth_(inst_20933)){
var statearr_20958_21022 = state_20947__$1;
(statearr_20958_21022[(1)] = (19));

} else {
var statearr_20959_21023 = state_20947__$1;
(statearr_20959_21023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (3))){
var inst_20945 = (state_20947[(2)]);
var state_20947__$1 = state_20947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20947__$1,inst_20945);
} else {
if((state_val_20948 === (12))){
var inst_20922 = (state_20947[(10)]);
var state_20947__$1 = state_20947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20947__$1,(14),inst_20922);
} else {
if((state_val_20948 === (2))){
var state_20947__$1 = state_20947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20947__$1,(4),results);
} else {
if((state_val_20948 === (19))){
var state_20947__$1 = state_20947;
var statearr_20960_21024 = state_20947__$1;
(statearr_20960_21024[(2)] = null);

(statearr_20960_21024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (11))){
var inst_20922 = (state_20947[(2)]);
var state_20947__$1 = (function (){var statearr_20961 = state_20947;
(statearr_20961[(10)] = inst_20922);

return statearr_20961;
})();
var statearr_20962_21025 = state_20947__$1;
(statearr_20962_21025[(2)] = null);

(statearr_20962_21025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (9))){
var state_20947__$1 = state_20947;
var statearr_20963_21026 = state_20947__$1;
(statearr_20963_21026[(2)] = null);

(statearr_20963_21026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (5))){
var state_20947__$1 = state_20947;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20964_21027 = state_20947__$1;
(statearr_20964_21027[(1)] = (8));

} else {
var statearr_20965_21028 = state_20947__$1;
(statearr_20965_21028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (14))){
var inst_20925 = (state_20947[(8)]);
var inst_20927 = (state_20947[(11)]);
var inst_20925__$1 = (state_20947[(2)]);
var inst_20926 = (inst_20925__$1 == null);
var inst_20927__$1 = cljs.core.not.call(null,inst_20926);
var state_20947__$1 = (function (){var statearr_20966 = state_20947;
(statearr_20966[(8)] = inst_20925__$1);

(statearr_20966[(11)] = inst_20927__$1);

return statearr_20966;
})();
if(inst_20927__$1){
var statearr_20967_21029 = state_20947__$1;
(statearr_20967_21029[(1)] = (15));

} else {
var statearr_20968_21030 = state_20947__$1;
(statearr_20968_21030[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (16))){
var inst_20927 = (state_20947[(11)]);
var state_20947__$1 = state_20947;
var statearr_20969_21031 = state_20947__$1;
(statearr_20969_21031[(2)] = inst_20927);

(statearr_20969_21031[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (10))){
var inst_20919 = (state_20947[(2)]);
var state_20947__$1 = state_20947;
var statearr_20970_21032 = state_20947__$1;
(statearr_20970_21032[(2)] = inst_20919);

(statearr_20970_21032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (18))){
var inst_20930 = (state_20947[(2)]);
var state_20947__$1 = state_20947;
var statearr_20971_21033 = state_20947__$1;
(statearr_20971_21033[(2)] = inst_20930);

(statearr_20971_21033[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (8))){
var inst_20916 = cljs.core.async.close_BANG_.call(null,to);
var state_20947__$1 = state_20947;
var statearr_20972_21034 = state_20947__$1;
(statearr_20972_21034[(2)] = inst_20916);

(statearr_20972_21034[(1)] = (10));


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
});})(c__20441__auto__,jobs,results,process,async))
;
return ((function (switch__20376__auto__,c__20441__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____0 = (function (){
var statearr_20976 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20976[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__);

(statearr_20976[(1)] = (1));

return statearr_20976;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____1 = (function (state_20947){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_20947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e20977){if((e20977 instanceof Object)){
var ex__20380__auto__ = e20977;
var statearr_20978_21035 = state_20947;
(statearr_20978_21035[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21036 = state_20947;
state_20947 = G__21036;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__ = function(state_20947){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____1.call(this,state_20947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto__,jobs,results,process,async))
})();
var state__20443__auto__ = (function (){var statearr_20979 = f__20442__auto__.call(null);
(statearr_20979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto__);

return statearr_20979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto__,jobs,results,process,async))
);

return c__20441__auto__;
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
var args21037 = [];
var len__19330__auto___21040 = arguments.length;
var i__19331__auto___21041 = (0);
while(true){
if((i__19331__auto___21041 < len__19330__auto___21040)){
args21037.push((arguments[i__19331__auto___21041]));

var G__21042 = (i__19331__auto___21041 + (1));
i__19331__auto___21041 = G__21042;
continue;
} else {
}
break;
}

var G__21039 = args21037.length;
switch (G__21039) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21037.length)].join('')));

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
var args21044 = [];
var len__19330__auto___21047 = arguments.length;
var i__19331__auto___21048 = (0);
while(true){
if((i__19331__auto___21048 < len__19330__auto___21047)){
args21044.push((arguments[i__19331__auto___21048]));

var G__21049 = (i__19331__auto___21048 + (1));
i__19331__auto___21048 = G__21049;
continue;
} else {
}
break;
}

var G__21046 = args21044.length;
switch (G__21046) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21044.length)].join('')));

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
var args21051 = [];
var len__19330__auto___21104 = arguments.length;
var i__19331__auto___21105 = (0);
while(true){
if((i__19331__auto___21105 < len__19330__auto___21104)){
args21051.push((arguments[i__19331__auto___21105]));

var G__21106 = (i__19331__auto___21105 + (1));
i__19331__auto___21105 = G__21106;
continue;
} else {
}
break;
}

var G__21053 = args21051.length;
switch (G__21053) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21051.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20441__auto___21108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto___21108,tc,fc){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto___21108,tc,fc){
return (function (state_21079){
var state_val_21080 = (state_21079[(1)]);
if((state_val_21080 === (7))){
var inst_21075 = (state_21079[(2)]);
var state_21079__$1 = state_21079;
var statearr_21081_21109 = state_21079__$1;
(statearr_21081_21109[(2)] = inst_21075);

(statearr_21081_21109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21080 === (1))){
var state_21079__$1 = state_21079;
var statearr_21082_21110 = state_21079__$1;
(statearr_21082_21110[(2)] = null);

(statearr_21082_21110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21080 === (4))){
var inst_21056 = (state_21079[(7)]);
var inst_21056__$1 = (state_21079[(2)]);
var inst_21057 = (inst_21056__$1 == null);
var state_21079__$1 = (function (){var statearr_21083 = state_21079;
(statearr_21083[(7)] = inst_21056__$1);

return statearr_21083;
})();
if(cljs.core.truth_(inst_21057)){
var statearr_21084_21111 = state_21079__$1;
(statearr_21084_21111[(1)] = (5));

} else {
var statearr_21085_21112 = state_21079__$1;
(statearr_21085_21112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21080 === (13))){
var state_21079__$1 = state_21079;
var statearr_21086_21113 = state_21079__$1;
(statearr_21086_21113[(2)] = null);

(statearr_21086_21113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21080 === (6))){
var inst_21056 = (state_21079[(7)]);
var inst_21062 = p.call(null,inst_21056);
var state_21079__$1 = state_21079;
if(cljs.core.truth_(inst_21062)){
var statearr_21087_21114 = state_21079__$1;
(statearr_21087_21114[(1)] = (9));

} else {
var statearr_21088_21115 = state_21079__$1;
(statearr_21088_21115[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21080 === (3))){
var inst_21077 = (state_21079[(2)]);
var state_21079__$1 = state_21079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21079__$1,inst_21077);
} else {
if((state_val_21080 === (12))){
var state_21079__$1 = state_21079;
var statearr_21089_21116 = state_21079__$1;
(statearr_21089_21116[(2)] = null);

(statearr_21089_21116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21080 === (2))){
var state_21079__$1 = state_21079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21079__$1,(4),ch);
} else {
if((state_val_21080 === (11))){
var inst_21056 = (state_21079[(7)]);
var inst_21066 = (state_21079[(2)]);
var state_21079__$1 = state_21079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21079__$1,(8),inst_21066,inst_21056);
} else {
if((state_val_21080 === (9))){
var state_21079__$1 = state_21079;
var statearr_21090_21117 = state_21079__$1;
(statearr_21090_21117[(2)] = tc);

(statearr_21090_21117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21080 === (5))){
var inst_21059 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21060 = cljs.core.async.close_BANG_.call(null,fc);
var state_21079__$1 = (function (){var statearr_21091 = state_21079;
(statearr_21091[(8)] = inst_21059);

return statearr_21091;
})();
var statearr_21092_21118 = state_21079__$1;
(statearr_21092_21118[(2)] = inst_21060);

(statearr_21092_21118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21080 === (14))){
var inst_21073 = (state_21079[(2)]);
var state_21079__$1 = state_21079;
var statearr_21093_21119 = state_21079__$1;
(statearr_21093_21119[(2)] = inst_21073);

(statearr_21093_21119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21080 === (10))){
var state_21079__$1 = state_21079;
var statearr_21094_21120 = state_21079__$1;
(statearr_21094_21120[(2)] = fc);

(statearr_21094_21120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21080 === (8))){
var inst_21068 = (state_21079[(2)]);
var state_21079__$1 = state_21079;
if(cljs.core.truth_(inst_21068)){
var statearr_21095_21121 = state_21079__$1;
(statearr_21095_21121[(1)] = (12));

} else {
var statearr_21096_21122 = state_21079__$1;
(statearr_21096_21122[(1)] = (13));

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
});})(c__20441__auto___21108,tc,fc))
;
return ((function (switch__20376__auto__,c__20441__auto___21108,tc,fc){
return (function() {
var cljs$core$async$state_machine__20377__auto__ = null;
var cljs$core$async$state_machine__20377__auto____0 = (function (){
var statearr_21100 = [null,null,null,null,null,null,null,null,null];
(statearr_21100[(0)] = cljs$core$async$state_machine__20377__auto__);

(statearr_21100[(1)] = (1));

return statearr_21100;
});
var cljs$core$async$state_machine__20377__auto____1 = (function (state_21079){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_21079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e21101){if((e21101 instanceof Object)){
var ex__20380__auto__ = e21101;
var statearr_21102_21123 = state_21079;
(statearr_21102_21123[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21124 = state_21079;
state_21079 = G__21124;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$state_machine__20377__auto__ = function(state_21079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20377__auto____1.call(this,state_21079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20377__auto____0;
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20377__auto____1;
return cljs$core$async$state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto___21108,tc,fc))
})();
var state__20443__auto__ = (function (){var statearr_21103 = f__20442__auto__.call(null);
(statearr_21103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___21108);

return statearr_21103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto___21108,tc,fc))
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
var c__20441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto__){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto__){
return (function (state_21171){
var state_val_21172 = (state_21171[(1)]);
if((state_val_21172 === (1))){
var inst_21157 = init;
var state_21171__$1 = (function (){var statearr_21173 = state_21171;
(statearr_21173[(7)] = inst_21157);

return statearr_21173;
})();
var statearr_21174_21189 = state_21171__$1;
(statearr_21174_21189[(2)] = null);

(statearr_21174_21189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (2))){
var state_21171__$1 = state_21171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21171__$1,(4),ch);
} else {
if((state_val_21172 === (3))){
var inst_21169 = (state_21171[(2)]);
var state_21171__$1 = state_21171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21171__$1,inst_21169);
} else {
if((state_val_21172 === (4))){
var inst_21160 = (state_21171[(8)]);
var inst_21160__$1 = (state_21171[(2)]);
var inst_21161 = (inst_21160__$1 == null);
var state_21171__$1 = (function (){var statearr_21175 = state_21171;
(statearr_21175[(8)] = inst_21160__$1);

return statearr_21175;
})();
if(cljs.core.truth_(inst_21161)){
var statearr_21176_21190 = state_21171__$1;
(statearr_21176_21190[(1)] = (5));

} else {
var statearr_21177_21191 = state_21171__$1;
(statearr_21177_21191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (5))){
var inst_21157 = (state_21171[(7)]);
var state_21171__$1 = state_21171;
var statearr_21178_21192 = state_21171__$1;
(statearr_21178_21192[(2)] = inst_21157);

(statearr_21178_21192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (6))){
var inst_21160 = (state_21171[(8)]);
var inst_21157 = (state_21171[(7)]);
var inst_21164 = f.call(null,inst_21157,inst_21160);
var inst_21157__$1 = inst_21164;
var state_21171__$1 = (function (){var statearr_21179 = state_21171;
(statearr_21179[(7)] = inst_21157__$1);

return statearr_21179;
})();
var statearr_21180_21193 = state_21171__$1;
(statearr_21180_21193[(2)] = null);

(statearr_21180_21193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21172 === (7))){
var inst_21167 = (state_21171[(2)]);
var state_21171__$1 = state_21171;
var statearr_21181_21194 = state_21171__$1;
(statearr_21181_21194[(2)] = inst_21167);

(statearr_21181_21194[(1)] = (3));


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
});})(c__20441__auto__))
;
return ((function (switch__20376__auto__,c__20441__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20377__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20377__auto____0 = (function (){
var statearr_21185 = [null,null,null,null,null,null,null,null,null];
(statearr_21185[(0)] = cljs$core$async$reduce_$_state_machine__20377__auto__);

(statearr_21185[(1)] = (1));

return statearr_21185;
});
var cljs$core$async$reduce_$_state_machine__20377__auto____1 = (function (state_21171){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_21171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e21186){if((e21186 instanceof Object)){
var ex__20380__auto__ = e21186;
var statearr_21187_21195 = state_21171;
(statearr_21187_21195[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21196 = state_21171;
state_21171 = G__21196;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20377__auto__ = function(state_21171){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20377__auto____1.call(this,state_21171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20377__auto____0;
cljs$core$async$reduce_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20377__auto____1;
return cljs$core$async$reduce_$_state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto__))
})();
var state__20443__auto__ = (function (){var statearr_21188 = f__20442__auto__.call(null);
(statearr_21188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto__);

return statearr_21188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto__))
);

return c__20441__auto__;
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
var args21197 = [];
var len__19330__auto___21249 = arguments.length;
var i__19331__auto___21250 = (0);
while(true){
if((i__19331__auto___21250 < len__19330__auto___21249)){
args21197.push((arguments[i__19331__auto___21250]));

var G__21251 = (i__19331__auto___21250 + (1));
i__19331__auto___21250 = G__21251;
continue;
} else {
}
break;
}

var G__21199 = args21197.length;
switch (G__21199) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21197.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto__){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto__){
return (function (state_21224){
var state_val_21225 = (state_21224[(1)]);
if((state_val_21225 === (7))){
var inst_21206 = (state_21224[(2)]);
var state_21224__$1 = state_21224;
var statearr_21226_21253 = state_21224__$1;
(statearr_21226_21253[(2)] = inst_21206);

(statearr_21226_21253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (1))){
var inst_21200 = cljs.core.seq.call(null,coll);
var inst_21201 = inst_21200;
var state_21224__$1 = (function (){var statearr_21227 = state_21224;
(statearr_21227[(7)] = inst_21201);

return statearr_21227;
})();
var statearr_21228_21254 = state_21224__$1;
(statearr_21228_21254[(2)] = null);

(statearr_21228_21254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (4))){
var inst_21201 = (state_21224[(7)]);
var inst_21204 = cljs.core.first.call(null,inst_21201);
var state_21224__$1 = state_21224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21224__$1,(7),ch,inst_21204);
} else {
if((state_val_21225 === (13))){
var inst_21218 = (state_21224[(2)]);
var state_21224__$1 = state_21224;
var statearr_21229_21255 = state_21224__$1;
(statearr_21229_21255[(2)] = inst_21218);

(statearr_21229_21255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (6))){
var inst_21209 = (state_21224[(2)]);
var state_21224__$1 = state_21224;
if(cljs.core.truth_(inst_21209)){
var statearr_21230_21256 = state_21224__$1;
(statearr_21230_21256[(1)] = (8));

} else {
var statearr_21231_21257 = state_21224__$1;
(statearr_21231_21257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (3))){
var inst_21222 = (state_21224[(2)]);
var state_21224__$1 = state_21224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21224__$1,inst_21222);
} else {
if((state_val_21225 === (12))){
var state_21224__$1 = state_21224;
var statearr_21232_21258 = state_21224__$1;
(statearr_21232_21258[(2)] = null);

(statearr_21232_21258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (2))){
var inst_21201 = (state_21224[(7)]);
var state_21224__$1 = state_21224;
if(cljs.core.truth_(inst_21201)){
var statearr_21233_21259 = state_21224__$1;
(statearr_21233_21259[(1)] = (4));

} else {
var statearr_21234_21260 = state_21224__$1;
(statearr_21234_21260[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (11))){
var inst_21215 = cljs.core.async.close_BANG_.call(null,ch);
var state_21224__$1 = state_21224;
var statearr_21235_21261 = state_21224__$1;
(statearr_21235_21261[(2)] = inst_21215);

(statearr_21235_21261[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (9))){
var state_21224__$1 = state_21224;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21236_21262 = state_21224__$1;
(statearr_21236_21262[(1)] = (11));

} else {
var statearr_21237_21263 = state_21224__$1;
(statearr_21237_21263[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (5))){
var inst_21201 = (state_21224[(7)]);
var state_21224__$1 = state_21224;
var statearr_21238_21264 = state_21224__$1;
(statearr_21238_21264[(2)] = inst_21201);

(statearr_21238_21264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (10))){
var inst_21220 = (state_21224[(2)]);
var state_21224__$1 = state_21224;
var statearr_21239_21265 = state_21224__$1;
(statearr_21239_21265[(2)] = inst_21220);

(statearr_21239_21265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (8))){
var inst_21201 = (state_21224[(7)]);
var inst_21211 = cljs.core.next.call(null,inst_21201);
var inst_21201__$1 = inst_21211;
var state_21224__$1 = (function (){var statearr_21240 = state_21224;
(statearr_21240[(7)] = inst_21201__$1);

return statearr_21240;
})();
var statearr_21241_21266 = state_21224__$1;
(statearr_21241_21266[(2)] = null);

(statearr_21241_21266[(1)] = (2));


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
});})(c__20441__auto__))
;
return ((function (switch__20376__auto__,c__20441__auto__){
return (function() {
var cljs$core$async$state_machine__20377__auto__ = null;
var cljs$core$async$state_machine__20377__auto____0 = (function (){
var statearr_21245 = [null,null,null,null,null,null,null,null];
(statearr_21245[(0)] = cljs$core$async$state_machine__20377__auto__);

(statearr_21245[(1)] = (1));

return statearr_21245;
});
var cljs$core$async$state_machine__20377__auto____1 = (function (state_21224){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_21224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e21246){if((e21246 instanceof Object)){
var ex__20380__auto__ = e21246;
var statearr_21247_21267 = state_21224;
(statearr_21247_21267[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21268 = state_21224;
state_21224 = G__21268;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$state_machine__20377__auto__ = function(state_21224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20377__auto____1.call(this,state_21224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20377__auto____0;
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20377__auto____1;
return cljs$core$async$state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto__))
})();
var state__20443__auto__ = (function (){var statearr_21248 = f__20442__auto__.call(null);
(statearr_21248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto__);

return statearr_21248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto__))
);

return c__20441__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async21490 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21490 = (function (mult,ch,cs,meta21491){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21491 = meta21491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21492,meta21491__$1){
var self__ = this;
var _21492__$1 = this;
return (new cljs.core.async.t_cljs$core$async21490(self__.mult,self__.ch,self__.cs,meta21491__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21492){
var self__ = this;
var _21492__$1 = this;
return self__.meta21491;
});})(cs))
;

cljs.core.async.t_cljs$core$async21490.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21490.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21490.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21490.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21490.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21490.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21490.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21491","meta21491",-1313682488,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21490.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21490";

cljs.core.async.t_cljs$core$async21490.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async21490");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21490 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21490(mult__$1,ch__$1,cs__$1,meta21491){
return (new cljs.core.async.t_cljs$core$async21490(mult__$1,ch__$1,cs__$1,meta21491));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21490(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20441__auto___21711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto___21711,cs,m,dchan,dctr,done){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto___21711,cs,m,dchan,dctr,done){
return (function (state_21623){
var state_val_21624 = (state_21623[(1)]);
if((state_val_21624 === (7))){
var inst_21619 = (state_21623[(2)]);
var state_21623__$1 = state_21623;
var statearr_21625_21712 = state_21623__$1;
(statearr_21625_21712[(2)] = inst_21619);

(statearr_21625_21712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (20))){
var inst_21524 = (state_21623[(7)]);
var inst_21534 = cljs.core.first.call(null,inst_21524);
var inst_21535 = cljs.core.nth.call(null,inst_21534,(0),null);
var inst_21536 = cljs.core.nth.call(null,inst_21534,(1),null);
var state_21623__$1 = (function (){var statearr_21626 = state_21623;
(statearr_21626[(8)] = inst_21535);

return statearr_21626;
})();
if(cljs.core.truth_(inst_21536)){
var statearr_21627_21713 = state_21623__$1;
(statearr_21627_21713[(1)] = (22));

} else {
var statearr_21628_21714 = state_21623__$1;
(statearr_21628_21714[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (27))){
var inst_21571 = (state_21623[(9)]);
var inst_21495 = (state_21623[(10)]);
var inst_21564 = (state_21623[(11)]);
var inst_21566 = (state_21623[(12)]);
var inst_21571__$1 = cljs.core._nth.call(null,inst_21564,inst_21566);
var inst_21572 = cljs.core.async.put_BANG_.call(null,inst_21571__$1,inst_21495,done);
var state_21623__$1 = (function (){var statearr_21629 = state_21623;
(statearr_21629[(9)] = inst_21571__$1);

return statearr_21629;
})();
if(cljs.core.truth_(inst_21572)){
var statearr_21630_21715 = state_21623__$1;
(statearr_21630_21715[(1)] = (30));

} else {
var statearr_21631_21716 = state_21623__$1;
(statearr_21631_21716[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (1))){
var state_21623__$1 = state_21623;
var statearr_21632_21717 = state_21623__$1;
(statearr_21632_21717[(2)] = null);

(statearr_21632_21717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (24))){
var inst_21524 = (state_21623[(7)]);
var inst_21541 = (state_21623[(2)]);
var inst_21542 = cljs.core.next.call(null,inst_21524);
var inst_21504 = inst_21542;
var inst_21505 = null;
var inst_21506 = (0);
var inst_21507 = (0);
var state_21623__$1 = (function (){var statearr_21633 = state_21623;
(statearr_21633[(13)] = inst_21541);

(statearr_21633[(14)] = inst_21505);

(statearr_21633[(15)] = inst_21507);

(statearr_21633[(16)] = inst_21504);

(statearr_21633[(17)] = inst_21506);

return statearr_21633;
})();
var statearr_21634_21718 = state_21623__$1;
(statearr_21634_21718[(2)] = null);

(statearr_21634_21718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (39))){
var state_21623__$1 = state_21623;
var statearr_21638_21719 = state_21623__$1;
(statearr_21638_21719[(2)] = null);

(statearr_21638_21719[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (4))){
var inst_21495 = (state_21623[(10)]);
var inst_21495__$1 = (state_21623[(2)]);
var inst_21496 = (inst_21495__$1 == null);
var state_21623__$1 = (function (){var statearr_21639 = state_21623;
(statearr_21639[(10)] = inst_21495__$1);

return statearr_21639;
})();
if(cljs.core.truth_(inst_21496)){
var statearr_21640_21720 = state_21623__$1;
(statearr_21640_21720[(1)] = (5));

} else {
var statearr_21641_21721 = state_21623__$1;
(statearr_21641_21721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (15))){
var inst_21505 = (state_21623[(14)]);
var inst_21507 = (state_21623[(15)]);
var inst_21504 = (state_21623[(16)]);
var inst_21506 = (state_21623[(17)]);
var inst_21520 = (state_21623[(2)]);
var inst_21521 = (inst_21507 + (1));
var tmp21635 = inst_21505;
var tmp21636 = inst_21504;
var tmp21637 = inst_21506;
var inst_21504__$1 = tmp21636;
var inst_21505__$1 = tmp21635;
var inst_21506__$1 = tmp21637;
var inst_21507__$1 = inst_21521;
var state_21623__$1 = (function (){var statearr_21642 = state_21623;
(statearr_21642[(18)] = inst_21520);

(statearr_21642[(14)] = inst_21505__$1);

(statearr_21642[(15)] = inst_21507__$1);

(statearr_21642[(16)] = inst_21504__$1);

(statearr_21642[(17)] = inst_21506__$1);

return statearr_21642;
})();
var statearr_21643_21722 = state_21623__$1;
(statearr_21643_21722[(2)] = null);

(statearr_21643_21722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (21))){
var inst_21545 = (state_21623[(2)]);
var state_21623__$1 = state_21623;
var statearr_21647_21723 = state_21623__$1;
(statearr_21647_21723[(2)] = inst_21545);

(statearr_21647_21723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (31))){
var inst_21571 = (state_21623[(9)]);
var inst_21575 = done.call(null,null);
var inst_21576 = cljs.core.async.untap_STAR_.call(null,m,inst_21571);
var state_21623__$1 = (function (){var statearr_21648 = state_21623;
(statearr_21648[(19)] = inst_21575);

return statearr_21648;
})();
var statearr_21649_21724 = state_21623__$1;
(statearr_21649_21724[(2)] = inst_21576);

(statearr_21649_21724[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (32))){
var inst_21565 = (state_21623[(20)]);
var inst_21564 = (state_21623[(11)]);
var inst_21566 = (state_21623[(12)]);
var inst_21563 = (state_21623[(21)]);
var inst_21578 = (state_21623[(2)]);
var inst_21579 = (inst_21566 + (1));
var tmp21644 = inst_21565;
var tmp21645 = inst_21564;
var tmp21646 = inst_21563;
var inst_21563__$1 = tmp21646;
var inst_21564__$1 = tmp21645;
var inst_21565__$1 = tmp21644;
var inst_21566__$1 = inst_21579;
var state_21623__$1 = (function (){var statearr_21650 = state_21623;
(statearr_21650[(20)] = inst_21565__$1);

(statearr_21650[(22)] = inst_21578);

(statearr_21650[(11)] = inst_21564__$1);

(statearr_21650[(12)] = inst_21566__$1);

(statearr_21650[(21)] = inst_21563__$1);

return statearr_21650;
})();
var statearr_21651_21725 = state_21623__$1;
(statearr_21651_21725[(2)] = null);

(statearr_21651_21725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (40))){
var inst_21591 = (state_21623[(23)]);
var inst_21595 = done.call(null,null);
var inst_21596 = cljs.core.async.untap_STAR_.call(null,m,inst_21591);
var state_21623__$1 = (function (){var statearr_21652 = state_21623;
(statearr_21652[(24)] = inst_21595);

return statearr_21652;
})();
var statearr_21653_21726 = state_21623__$1;
(statearr_21653_21726[(2)] = inst_21596);

(statearr_21653_21726[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (33))){
var inst_21582 = (state_21623[(25)]);
var inst_21584 = cljs.core.chunked_seq_QMARK_.call(null,inst_21582);
var state_21623__$1 = state_21623;
if(inst_21584){
var statearr_21654_21727 = state_21623__$1;
(statearr_21654_21727[(1)] = (36));

} else {
var statearr_21655_21728 = state_21623__$1;
(statearr_21655_21728[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (13))){
var inst_21514 = (state_21623[(26)]);
var inst_21517 = cljs.core.async.close_BANG_.call(null,inst_21514);
var state_21623__$1 = state_21623;
var statearr_21656_21729 = state_21623__$1;
(statearr_21656_21729[(2)] = inst_21517);

(statearr_21656_21729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (22))){
var inst_21535 = (state_21623[(8)]);
var inst_21538 = cljs.core.async.close_BANG_.call(null,inst_21535);
var state_21623__$1 = state_21623;
var statearr_21657_21730 = state_21623__$1;
(statearr_21657_21730[(2)] = inst_21538);

(statearr_21657_21730[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (36))){
var inst_21582 = (state_21623[(25)]);
var inst_21586 = cljs.core.chunk_first.call(null,inst_21582);
var inst_21587 = cljs.core.chunk_rest.call(null,inst_21582);
var inst_21588 = cljs.core.count.call(null,inst_21586);
var inst_21563 = inst_21587;
var inst_21564 = inst_21586;
var inst_21565 = inst_21588;
var inst_21566 = (0);
var state_21623__$1 = (function (){var statearr_21658 = state_21623;
(statearr_21658[(20)] = inst_21565);

(statearr_21658[(11)] = inst_21564);

(statearr_21658[(12)] = inst_21566);

(statearr_21658[(21)] = inst_21563);

return statearr_21658;
})();
var statearr_21659_21731 = state_21623__$1;
(statearr_21659_21731[(2)] = null);

(statearr_21659_21731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (41))){
var inst_21582 = (state_21623[(25)]);
var inst_21598 = (state_21623[(2)]);
var inst_21599 = cljs.core.next.call(null,inst_21582);
var inst_21563 = inst_21599;
var inst_21564 = null;
var inst_21565 = (0);
var inst_21566 = (0);
var state_21623__$1 = (function (){var statearr_21660 = state_21623;
(statearr_21660[(20)] = inst_21565);

(statearr_21660[(11)] = inst_21564);

(statearr_21660[(27)] = inst_21598);

(statearr_21660[(12)] = inst_21566);

(statearr_21660[(21)] = inst_21563);

return statearr_21660;
})();
var statearr_21661_21732 = state_21623__$1;
(statearr_21661_21732[(2)] = null);

(statearr_21661_21732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (43))){
var state_21623__$1 = state_21623;
var statearr_21662_21733 = state_21623__$1;
(statearr_21662_21733[(2)] = null);

(statearr_21662_21733[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (29))){
var inst_21607 = (state_21623[(2)]);
var state_21623__$1 = state_21623;
var statearr_21663_21734 = state_21623__$1;
(statearr_21663_21734[(2)] = inst_21607);

(statearr_21663_21734[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (44))){
var inst_21616 = (state_21623[(2)]);
var state_21623__$1 = (function (){var statearr_21664 = state_21623;
(statearr_21664[(28)] = inst_21616);

return statearr_21664;
})();
var statearr_21665_21735 = state_21623__$1;
(statearr_21665_21735[(2)] = null);

(statearr_21665_21735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (6))){
var inst_21555 = (state_21623[(29)]);
var inst_21554 = cljs.core.deref.call(null,cs);
var inst_21555__$1 = cljs.core.keys.call(null,inst_21554);
var inst_21556 = cljs.core.count.call(null,inst_21555__$1);
var inst_21557 = cljs.core.reset_BANG_.call(null,dctr,inst_21556);
var inst_21562 = cljs.core.seq.call(null,inst_21555__$1);
var inst_21563 = inst_21562;
var inst_21564 = null;
var inst_21565 = (0);
var inst_21566 = (0);
var state_21623__$1 = (function (){var statearr_21666 = state_21623;
(statearr_21666[(20)] = inst_21565);

(statearr_21666[(29)] = inst_21555__$1);

(statearr_21666[(11)] = inst_21564);

(statearr_21666[(12)] = inst_21566);

(statearr_21666[(30)] = inst_21557);

(statearr_21666[(21)] = inst_21563);

return statearr_21666;
})();
var statearr_21667_21736 = state_21623__$1;
(statearr_21667_21736[(2)] = null);

(statearr_21667_21736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (28))){
var inst_21582 = (state_21623[(25)]);
var inst_21563 = (state_21623[(21)]);
var inst_21582__$1 = cljs.core.seq.call(null,inst_21563);
var state_21623__$1 = (function (){var statearr_21668 = state_21623;
(statearr_21668[(25)] = inst_21582__$1);

return statearr_21668;
})();
if(inst_21582__$1){
var statearr_21669_21737 = state_21623__$1;
(statearr_21669_21737[(1)] = (33));

} else {
var statearr_21670_21738 = state_21623__$1;
(statearr_21670_21738[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (25))){
var inst_21565 = (state_21623[(20)]);
var inst_21566 = (state_21623[(12)]);
var inst_21568 = (inst_21566 < inst_21565);
var inst_21569 = inst_21568;
var state_21623__$1 = state_21623;
if(cljs.core.truth_(inst_21569)){
var statearr_21671_21739 = state_21623__$1;
(statearr_21671_21739[(1)] = (27));

} else {
var statearr_21672_21740 = state_21623__$1;
(statearr_21672_21740[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (34))){
var state_21623__$1 = state_21623;
var statearr_21673_21741 = state_21623__$1;
(statearr_21673_21741[(2)] = null);

(statearr_21673_21741[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (17))){
var state_21623__$1 = state_21623;
var statearr_21674_21742 = state_21623__$1;
(statearr_21674_21742[(2)] = null);

(statearr_21674_21742[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (3))){
var inst_21621 = (state_21623[(2)]);
var state_21623__$1 = state_21623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21623__$1,inst_21621);
} else {
if((state_val_21624 === (12))){
var inst_21550 = (state_21623[(2)]);
var state_21623__$1 = state_21623;
var statearr_21675_21743 = state_21623__$1;
(statearr_21675_21743[(2)] = inst_21550);

(statearr_21675_21743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (2))){
var state_21623__$1 = state_21623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21623__$1,(4),ch);
} else {
if((state_val_21624 === (23))){
var state_21623__$1 = state_21623;
var statearr_21676_21744 = state_21623__$1;
(statearr_21676_21744[(2)] = null);

(statearr_21676_21744[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (35))){
var inst_21605 = (state_21623[(2)]);
var state_21623__$1 = state_21623;
var statearr_21677_21745 = state_21623__$1;
(statearr_21677_21745[(2)] = inst_21605);

(statearr_21677_21745[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (19))){
var inst_21524 = (state_21623[(7)]);
var inst_21528 = cljs.core.chunk_first.call(null,inst_21524);
var inst_21529 = cljs.core.chunk_rest.call(null,inst_21524);
var inst_21530 = cljs.core.count.call(null,inst_21528);
var inst_21504 = inst_21529;
var inst_21505 = inst_21528;
var inst_21506 = inst_21530;
var inst_21507 = (0);
var state_21623__$1 = (function (){var statearr_21678 = state_21623;
(statearr_21678[(14)] = inst_21505);

(statearr_21678[(15)] = inst_21507);

(statearr_21678[(16)] = inst_21504);

(statearr_21678[(17)] = inst_21506);

return statearr_21678;
})();
var statearr_21679_21746 = state_21623__$1;
(statearr_21679_21746[(2)] = null);

(statearr_21679_21746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (11))){
var inst_21524 = (state_21623[(7)]);
var inst_21504 = (state_21623[(16)]);
var inst_21524__$1 = cljs.core.seq.call(null,inst_21504);
var state_21623__$1 = (function (){var statearr_21680 = state_21623;
(statearr_21680[(7)] = inst_21524__$1);

return statearr_21680;
})();
if(inst_21524__$1){
var statearr_21681_21747 = state_21623__$1;
(statearr_21681_21747[(1)] = (16));

} else {
var statearr_21682_21748 = state_21623__$1;
(statearr_21682_21748[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (9))){
var inst_21552 = (state_21623[(2)]);
var state_21623__$1 = state_21623;
var statearr_21683_21749 = state_21623__$1;
(statearr_21683_21749[(2)] = inst_21552);

(statearr_21683_21749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (5))){
var inst_21502 = cljs.core.deref.call(null,cs);
var inst_21503 = cljs.core.seq.call(null,inst_21502);
var inst_21504 = inst_21503;
var inst_21505 = null;
var inst_21506 = (0);
var inst_21507 = (0);
var state_21623__$1 = (function (){var statearr_21684 = state_21623;
(statearr_21684[(14)] = inst_21505);

(statearr_21684[(15)] = inst_21507);

(statearr_21684[(16)] = inst_21504);

(statearr_21684[(17)] = inst_21506);

return statearr_21684;
})();
var statearr_21685_21750 = state_21623__$1;
(statearr_21685_21750[(2)] = null);

(statearr_21685_21750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (14))){
var state_21623__$1 = state_21623;
var statearr_21686_21751 = state_21623__$1;
(statearr_21686_21751[(2)] = null);

(statearr_21686_21751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (45))){
var inst_21613 = (state_21623[(2)]);
var state_21623__$1 = state_21623;
var statearr_21687_21752 = state_21623__$1;
(statearr_21687_21752[(2)] = inst_21613);

(statearr_21687_21752[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (26))){
var inst_21555 = (state_21623[(29)]);
var inst_21609 = (state_21623[(2)]);
var inst_21610 = cljs.core.seq.call(null,inst_21555);
var state_21623__$1 = (function (){var statearr_21688 = state_21623;
(statearr_21688[(31)] = inst_21609);

return statearr_21688;
})();
if(inst_21610){
var statearr_21689_21753 = state_21623__$1;
(statearr_21689_21753[(1)] = (42));

} else {
var statearr_21690_21754 = state_21623__$1;
(statearr_21690_21754[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (16))){
var inst_21524 = (state_21623[(7)]);
var inst_21526 = cljs.core.chunked_seq_QMARK_.call(null,inst_21524);
var state_21623__$1 = state_21623;
if(inst_21526){
var statearr_21691_21755 = state_21623__$1;
(statearr_21691_21755[(1)] = (19));

} else {
var statearr_21692_21756 = state_21623__$1;
(statearr_21692_21756[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (38))){
var inst_21602 = (state_21623[(2)]);
var state_21623__$1 = state_21623;
var statearr_21693_21757 = state_21623__$1;
(statearr_21693_21757[(2)] = inst_21602);

(statearr_21693_21757[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (30))){
var state_21623__$1 = state_21623;
var statearr_21694_21758 = state_21623__$1;
(statearr_21694_21758[(2)] = null);

(statearr_21694_21758[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (10))){
var inst_21505 = (state_21623[(14)]);
var inst_21507 = (state_21623[(15)]);
var inst_21513 = cljs.core._nth.call(null,inst_21505,inst_21507);
var inst_21514 = cljs.core.nth.call(null,inst_21513,(0),null);
var inst_21515 = cljs.core.nth.call(null,inst_21513,(1),null);
var state_21623__$1 = (function (){var statearr_21695 = state_21623;
(statearr_21695[(26)] = inst_21514);

return statearr_21695;
})();
if(cljs.core.truth_(inst_21515)){
var statearr_21696_21759 = state_21623__$1;
(statearr_21696_21759[(1)] = (13));

} else {
var statearr_21697_21760 = state_21623__$1;
(statearr_21697_21760[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (18))){
var inst_21548 = (state_21623[(2)]);
var state_21623__$1 = state_21623;
var statearr_21698_21761 = state_21623__$1;
(statearr_21698_21761[(2)] = inst_21548);

(statearr_21698_21761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (42))){
var state_21623__$1 = state_21623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21623__$1,(45),dchan);
} else {
if((state_val_21624 === (37))){
var inst_21495 = (state_21623[(10)]);
var inst_21591 = (state_21623[(23)]);
var inst_21582 = (state_21623[(25)]);
var inst_21591__$1 = cljs.core.first.call(null,inst_21582);
var inst_21592 = cljs.core.async.put_BANG_.call(null,inst_21591__$1,inst_21495,done);
var state_21623__$1 = (function (){var statearr_21699 = state_21623;
(statearr_21699[(23)] = inst_21591__$1);

return statearr_21699;
})();
if(cljs.core.truth_(inst_21592)){
var statearr_21700_21762 = state_21623__$1;
(statearr_21700_21762[(1)] = (39));

} else {
var statearr_21701_21763 = state_21623__$1;
(statearr_21701_21763[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21624 === (8))){
var inst_21507 = (state_21623[(15)]);
var inst_21506 = (state_21623[(17)]);
var inst_21509 = (inst_21507 < inst_21506);
var inst_21510 = inst_21509;
var state_21623__$1 = state_21623;
if(cljs.core.truth_(inst_21510)){
var statearr_21702_21764 = state_21623__$1;
(statearr_21702_21764[(1)] = (10));

} else {
var statearr_21703_21765 = state_21623__$1;
(statearr_21703_21765[(1)] = (11));

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
});})(c__20441__auto___21711,cs,m,dchan,dctr,done))
;
return ((function (switch__20376__auto__,c__20441__auto___21711,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20377__auto__ = null;
var cljs$core$async$mult_$_state_machine__20377__auto____0 = (function (){
var statearr_21707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21707[(0)] = cljs$core$async$mult_$_state_machine__20377__auto__);

(statearr_21707[(1)] = (1));

return statearr_21707;
});
var cljs$core$async$mult_$_state_machine__20377__auto____1 = (function (state_21623){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_21623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e21708){if((e21708 instanceof Object)){
var ex__20380__auto__ = e21708;
var statearr_21709_21766 = state_21623;
(statearr_21709_21766[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21767 = state_21623;
state_21623 = G__21767;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20377__auto__ = function(state_21623){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20377__auto____1.call(this,state_21623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20377__auto____0;
cljs$core$async$mult_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20377__auto____1;
return cljs$core$async$mult_$_state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto___21711,cs,m,dchan,dctr,done))
})();
var state__20443__auto__ = (function (){var statearr_21710 = f__20442__auto__.call(null);
(statearr_21710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___21711);

return statearr_21710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto___21711,cs,m,dchan,dctr,done))
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
var args21768 = [];
var len__19330__auto___21771 = arguments.length;
var i__19331__auto___21772 = (0);
while(true){
if((i__19331__auto___21772 < len__19330__auto___21771)){
args21768.push((arguments[i__19331__auto___21772]));

var G__21773 = (i__19331__auto___21772 + (1));
i__19331__auto___21772 = G__21773;
continue;
} else {
}
break;
}

var G__21770 = args21768.length;
switch (G__21770) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21768.length)].join('')));

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
var len__19330__auto___21785 = arguments.length;
var i__19331__auto___21786 = (0);
while(true){
if((i__19331__auto___21786 < len__19330__auto___21785)){
args__19337__auto__.push((arguments[i__19331__auto___21786]));

var G__21787 = (i__19331__auto___21786 + (1));
i__19331__auto___21786 = G__21787;
continue;
} else {
}
break;
}

var argseq__19338__auto__ = ((((3) < args__19337__auto__.length))?(new cljs.core.IndexedSeq(args__19337__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19338__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21779){
var map__21780 = p__21779;
var map__21780__$1 = ((((!((map__21780 == null)))?((((map__21780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21780):map__21780);
var opts = map__21780__$1;
var statearr_21782_21788 = state;
(statearr_21782_21788[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21780,map__21780__$1,opts){
return (function (val){
var statearr_21783_21789 = state;
(statearr_21783_21789[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21780,map__21780__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21784_21790 = state;
(statearr_21784_21790[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21775){
var G__21776 = cljs.core.first.call(null,seq21775);
var seq21775__$1 = cljs.core.next.call(null,seq21775);
var G__21777 = cljs.core.first.call(null,seq21775__$1);
var seq21775__$2 = cljs.core.next.call(null,seq21775__$1);
var G__21778 = cljs.core.first.call(null,seq21775__$2);
var seq21775__$3 = cljs.core.next.call(null,seq21775__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21776,G__21777,G__21778,seq21775__$3);
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
if(typeof cljs.core.async.t_cljs$core$async21954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21954 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21955){
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
this.meta21955 = meta21955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21956,meta21955__$1){
var self__ = this;
var _21956__$1 = this;
return (new cljs.core.async.t_cljs$core$async21954(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21955__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21956){
var self__ = this;
var _21956__$1 = this;
return self__.meta21955;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21954.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21954.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21954.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21954.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21954.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21954.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21954.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21954.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21954.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21955","meta21955",1542684697,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21954.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21954";

cljs.core.async.t_cljs$core$async21954.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async21954");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21954 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21954(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21955){
return (new cljs.core.async.t_cljs$core$async21954(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21955));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21954(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20441__auto___22117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto___22117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto___22117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22054){
var state_val_22055 = (state_22054[(1)]);
if((state_val_22055 === (7))){
var inst_21972 = (state_22054[(2)]);
var state_22054__$1 = state_22054;
var statearr_22056_22118 = state_22054__$1;
(statearr_22056_22118[(2)] = inst_21972);

(statearr_22056_22118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (20))){
var inst_21984 = (state_22054[(7)]);
var state_22054__$1 = state_22054;
var statearr_22057_22119 = state_22054__$1;
(statearr_22057_22119[(2)] = inst_21984);

(statearr_22057_22119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (27))){
var state_22054__$1 = state_22054;
var statearr_22058_22120 = state_22054__$1;
(statearr_22058_22120[(2)] = null);

(statearr_22058_22120[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (1))){
var inst_21960 = (state_22054[(8)]);
var inst_21960__$1 = calc_state.call(null);
var inst_21962 = (inst_21960__$1 == null);
var inst_21963 = cljs.core.not.call(null,inst_21962);
var state_22054__$1 = (function (){var statearr_22059 = state_22054;
(statearr_22059[(8)] = inst_21960__$1);

return statearr_22059;
})();
if(inst_21963){
var statearr_22060_22121 = state_22054__$1;
(statearr_22060_22121[(1)] = (2));

} else {
var statearr_22061_22122 = state_22054__$1;
(statearr_22061_22122[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (24))){
var inst_22028 = (state_22054[(9)]);
var inst_22007 = (state_22054[(10)]);
var inst_22014 = (state_22054[(11)]);
var inst_22028__$1 = inst_22007.call(null,inst_22014);
var state_22054__$1 = (function (){var statearr_22062 = state_22054;
(statearr_22062[(9)] = inst_22028__$1);

return statearr_22062;
})();
if(cljs.core.truth_(inst_22028__$1)){
var statearr_22063_22123 = state_22054__$1;
(statearr_22063_22123[(1)] = (29));

} else {
var statearr_22064_22124 = state_22054__$1;
(statearr_22064_22124[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (4))){
var inst_21975 = (state_22054[(2)]);
var state_22054__$1 = state_22054;
if(cljs.core.truth_(inst_21975)){
var statearr_22065_22125 = state_22054__$1;
(statearr_22065_22125[(1)] = (8));

} else {
var statearr_22066_22126 = state_22054__$1;
(statearr_22066_22126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (15))){
var inst_22001 = (state_22054[(2)]);
var state_22054__$1 = state_22054;
if(cljs.core.truth_(inst_22001)){
var statearr_22067_22127 = state_22054__$1;
(statearr_22067_22127[(1)] = (19));

} else {
var statearr_22068_22128 = state_22054__$1;
(statearr_22068_22128[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (21))){
var inst_22006 = (state_22054[(12)]);
var inst_22006__$1 = (state_22054[(2)]);
var inst_22007 = cljs.core.get.call(null,inst_22006__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22008 = cljs.core.get.call(null,inst_22006__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22009 = cljs.core.get.call(null,inst_22006__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22054__$1 = (function (){var statearr_22069 = state_22054;
(statearr_22069[(12)] = inst_22006__$1);

(statearr_22069[(10)] = inst_22007);

(statearr_22069[(13)] = inst_22008);

return statearr_22069;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22054__$1,(22),inst_22009);
} else {
if((state_val_22055 === (31))){
var inst_22036 = (state_22054[(2)]);
var state_22054__$1 = state_22054;
if(cljs.core.truth_(inst_22036)){
var statearr_22070_22129 = state_22054__$1;
(statearr_22070_22129[(1)] = (32));

} else {
var statearr_22071_22130 = state_22054__$1;
(statearr_22071_22130[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (32))){
var inst_22013 = (state_22054[(14)]);
var state_22054__$1 = state_22054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22054__$1,(35),out,inst_22013);
} else {
if((state_val_22055 === (33))){
var inst_22006 = (state_22054[(12)]);
var inst_21984 = inst_22006;
var state_22054__$1 = (function (){var statearr_22072 = state_22054;
(statearr_22072[(7)] = inst_21984);

return statearr_22072;
})();
var statearr_22073_22131 = state_22054__$1;
(statearr_22073_22131[(2)] = null);

(statearr_22073_22131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (13))){
var inst_21984 = (state_22054[(7)]);
var inst_21991 = inst_21984.cljs$lang$protocol_mask$partition0$;
var inst_21992 = (inst_21991 & (64));
var inst_21993 = inst_21984.cljs$core$ISeq$;
var inst_21994 = (inst_21992) || (inst_21993);
var state_22054__$1 = state_22054;
if(cljs.core.truth_(inst_21994)){
var statearr_22074_22132 = state_22054__$1;
(statearr_22074_22132[(1)] = (16));

} else {
var statearr_22075_22133 = state_22054__$1;
(statearr_22075_22133[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (22))){
var inst_22013 = (state_22054[(14)]);
var inst_22014 = (state_22054[(11)]);
var inst_22012 = (state_22054[(2)]);
var inst_22013__$1 = cljs.core.nth.call(null,inst_22012,(0),null);
var inst_22014__$1 = cljs.core.nth.call(null,inst_22012,(1),null);
var inst_22015 = (inst_22013__$1 == null);
var inst_22016 = cljs.core._EQ_.call(null,inst_22014__$1,change);
var inst_22017 = (inst_22015) || (inst_22016);
var state_22054__$1 = (function (){var statearr_22076 = state_22054;
(statearr_22076[(14)] = inst_22013__$1);

(statearr_22076[(11)] = inst_22014__$1);

return statearr_22076;
})();
if(cljs.core.truth_(inst_22017)){
var statearr_22077_22134 = state_22054__$1;
(statearr_22077_22134[(1)] = (23));

} else {
var statearr_22078_22135 = state_22054__$1;
(statearr_22078_22135[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (36))){
var inst_22006 = (state_22054[(12)]);
var inst_21984 = inst_22006;
var state_22054__$1 = (function (){var statearr_22079 = state_22054;
(statearr_22079[(7)] = inst_21984);

return statearr_22079;
})();
var statearr_22080_22136 = state_22054__$1;
(statearr_22080_22136[(2)] = null);

(statearr_22080_22136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (29))){
var inst_22028 = (state_22054[(9)]);
var state_22054__$1 = state_22054;
var statearr_22081_22137 = state_22054__$1;
(statearr_22081_22137[(2)] = inst_22028);

(statearr_22081_22137[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (6))){
var state_22054__$1 = state_22054;
var statearr_22082_22138 = state_22054__$1;
(statearr_22082_22138[(2)] = false);

(statearr_22082_22138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (28))){
var inst_22024 = (state_22054[(2)]);
var inst_22025 = calc_state.call(null);
var inst_21984 = inst_22025;
var state_22054__$1 = (function (){var statearr_22083 = state_22054;
(statearr_22083[(7)] = inst_21984);

(statearr_22083[(15)] = inst_22024);

return statearr_22083;
})();
var statearr_22084_22139 = state_22054__$1;
(statearr_22084_22139[(2)] = null);

(statearr_22084_22139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (25))){
var inst_22050 = (state_22054[(2)]);
var state_22054__$1 = state_22054;
var statearr_22085_22140 = state_22054__$1;
(statearr_22085_22140[(2)] = inst_22050);

(statearr_22085_22140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (34))){
var inst_22048 = (state_22054[(2)]);
var state_22054__$1 = state_22054;
var statearr_22086_22141 = state_22054__$1;
(statearr_22086_22141[(2)] = inst_22048);

(statearr_22086_22141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (17))){
var state_22054__$1 = state_22054;
var statearr_22087_22142 = state_22054__$1;
(statearr_22087_22142[(2)] = false);

(statearr_22087_22142[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (3))){
var state_22054__$1 = state_22054;
var statearr_22088_22143 = state_22054__$1;
(statearr_22088_22143[(2)] = false);

(statearr_22088_22143[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (12))){
var inst_22052 = (state_22054[(2)]);
var state_22054__$1 = state_22054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22054__$1,inst_22052);
} else {
if((state_val_22055 === (2))){
var inst_21960 = (state_22054[(8)]);
var inst_21965 = inst_21960.cljs$lang$protocol_mask$partition0$;
var inst_21966 = (inst_21965 & (64));
var inst_21967 = inst_21960.cljs$core$ISeq$;
var inst_21968 = (inst_21966) || (inst_21967);
var state_22054__$1 = state_22054;
if(cljs.core.truth_(inst_21968)){
var statearr_22089_22144 = state_22054__$1;
(statearr_22089_22144[(1)] = (5));

} else {
var statearr_22090_22145 = state_22054__$1;
(statearr_22090_22145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (23))){
var inst_22013 = (state_22054[(14)]);
var inst_22019 = (inst_22013 == null);
var state_22054__$1 = state_22054;
if(cljs.core.truth_(inst_22019)){
var statearr_22091_22146 = state_22054__$1;
(statearr_22091_22146[(1)] = (26));

} else {
var statearr_22092_22147 = state_22054__$1;
(statearr_22092_22147[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (35))){
var inst_22039 = (state_22054[(2)]);
var state_22054__$1 = state_22054;
if(cljs.core.truth_(inst_22039)){
var statearr_22093_22148 = state_22054__$1;
(statearr_22093_22148[(1)] = (36));

} else {
var statearr_22094_22149 = state_22054__$1;
(statearr_22094_22149[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (19))){
var inst_21984 = (state_22054[(7)]);
var inst_22003 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21984);
var state_22054__$1 = state_22054;
var statearr_22095_22150 = state_22054__$1;
(statearr_22095_22150[(2)] = inst_22003);

(statearr_22095_22150[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (11))){
var inst_21984 = (state_22054[(7)]);
var inst_21988 = (inst_21984 == null);
var inst_21989 = cljs.core.not.call(null,inst_21988);
var state_22054__$1 = state_22054;
if(inst_21989){
var statearr_22096_22151 = state_22054__$1;
(statearr_22096_22151[(1)] = (13));

} else {
var statearr_22097_22152 = state_22054__$1;
(statearr_22097_22152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (9))){
var inst_21960 = (state_22054[(8)]);
var state_22054__$1 = state_22054;
var statearr_22098_22153 = state_22054__$1;
(statearr_22098_22153[(2)] = inst_21960);

(statearr_22098_22153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (5))){
var state_22054__$1 = state_22054;
var statearr_22099_22154 = state_22054__$1;
(statearr_22099_22154[(2)] = true);

(statearr_22099_22154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (14))){
var state_22054__$1 = state_22054;
var statearr_22100_22155 = state_22054__$1;
(statearr_22100_22155[(2)] = false);

(statearr_22100_22155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (26))){
var inst_22014 = (state_22054[(11)]);
var inst_22021 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22014);
var state_22054__$1 = state_22054;
var statearr_22101_22156 = state_22054__$1;
(statearr_22101_22156[(2)] = inst_22021);

(statearr_22101_22156[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (16))){
var state_22054__$1 = state_22054;
var statearr_22102_22157 = state_22054__$1;
(statearr_22102_22157[(2)] = true);

(statearr_22102_22157[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (38))){
var inst_22044 = (state_22054[(2)]);
var state_22054__$1 = state_22054;
var statearr_22103_22158 = state_22054__$1;
(statearr_22103_22158[(2)] = inst_22044);

(statearr_22103_22158[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (30))){
var inst_22007 = (state_22054[(10)]);
var inst_22008 = (state_22054[(13)]);
var inst_22014 = (state_22054[(11)]);
var inst_22031 = cljs.core.empty_QMARK_.call(null,inst_22007);
var inst_22032 = inst_22008.call(null,inst_22014);
var inst_22033 = cljs.core.not.call(null,inst_22032);
var inst_22034 = (inst_22031) && (inst_22033);
var state_22054__$1 = state_22054;
var statearr_22104_22159 = state_22054__$1;
(statearr_22104_22159[(2)] = inst_22034);

(statearr_22104_22159[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (10))){
var inst_21960 = (state_22054[(8)]);
var inst_21980 = (state_22054[(2)]);
var inst_21981 = cljs.core.get.call(null,inst_21980,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21982 = cljs.core.get.call(null,inst_21980,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21983 = cljs.core.get.call(null,inst_21980,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21984 = inst_21960;
var state_22054__$1 = (function (){var statearr_22105 = state_22054;
(statearr_22105[(7)] = inst_21984);

(statearr_22105[(16)] = inst_21983);

(statearr_22105[(17)] = inst_21981);

(statearr_22105[(18)] = inst_21982);

return statearr_22105;
})();
var statearr_22106_22160 = state_22054__$1;
(statearr_22106_22160[(2)] = null);

(statearr_22106_22160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (18))){
var inst_21998 = (state_22054[(2)]);
var state_22054__$1 = state_22054;
var statearr_22107_22161 = state_22054__$1;
(statearr_22107_22161[(2)] = inst_21998);

(statearr_22107_22161[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (37))){
var state_22054__$1 = state_22054;
var statearr_22108_22162 = state_22054__$1;
(statearr_22108_22162[(2)] = null);

(statearr_22108_22162[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (8))){
var inst_21960 = (state_22054[(8)]);
var inst_21977 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21960);
var state_22054__$1 = state_22054;
var statearr_22109_22163 = state_22054__$1;
(statearr_22109_22163[(2)] = inst_21977);

(statearr_22109_22163[(1)] = (10));


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
});})(c__20441__auto___22117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20376__auto__,c__20441__auto___22117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20377__auto__ = null;
var cljs$core$async$mix_$_state_machine__20377__auto____0 = (function (){
var statearr_22113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22113[(0)] = cljs$core$async$mix_$_state_machine__20377__auto__);

(statearr_22113[(1)] = (1));

return statearr_22113;
});
var cljs$core$async$mix_$_state_machine__20377__auto____1 = (function (state_22054){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_22054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e22114){if((e22114 instanceof Object)){
var ex__20380__auto__ = e22114;
var statearr_22115_22164 = state_22054;
(statearr_22115_22164[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22165 = state_22054;
state_22054 = G__22165;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20377__auto__ = function(state_22054){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20377__auto____1.call(this,state_22054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20377__auto____0;
cljs$core$async$mix_$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20377__auto____1;
return cljs$core$async$mix_$_state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto___22117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20443__auto__ = (function (){var statearr_22116 = f__20442__auto__.call(null);
(statearr_22116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___22117);

return statearr_22116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto___22117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args22166 = [];
var len__19330__auto___22169 = arguments.length;
var i__19331__auto___22170 = (0);
while(true){
if((i__19331__auto___22170 < len__19330__auto___22169)){
args22166.push((arguments[i__19331__auto___22170]));

var G__22171 = (i__19331__auto___22170 + (1));
i__19331__auto___22170 = G__22171;
continue;
} else {
}
break;
}

var G__22168 = args22166.length;
switch (G__22168) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22166.length)].join('')));

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
var args22174 = [];
var len__19330__auto___22299 = arguments.length;
var i__19331__auto___22300 = (0);
while(true){
if((i__19331__auto___22300 < len__19330__auto___22299)){
args22174.push((arguments[i__19331__auto___22300]));

var G__22301 = (i__19331__auto___22300 + (1));
i__19331__auto___22300 = G__22301;
continue;
} else {
}
break;
}

var G__22176 = args22174.length;
switch (G__22176) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22174.length)].join('')));

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
return (function (p1__22173_SHARP_){
if(cljs.core.truth_(p1__22173_SHARP_.call(null,topic))){
return p1__22173_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22173_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18276__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22177 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22178){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22178 = meta22178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22179,meta22178__$1){
var self__ = this;
var _22179__$1 = this;
return (new cljs.core.async.t_cljs$core$async22177(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22178__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22179){
var self__ = this;
var _22179__$1 = this;
return self__.meta22178;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22177.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22177.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22177.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22177.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22177.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22177.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22177.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22177.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22178","meta22178",1216197652,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22177";

cljs.core.async.t_cljs$core$async22177.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async22177");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22177 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22177(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22178){
return (new cljs.core.async.t_cljs$core$async22177(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22178));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22177(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20441__auto___22303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto___22303,mults,ensure_mult,p){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto___22303,mults,ensure_mult,p){
return (function (state_22251){
var state_val_22252 = (state_22251[(1)]);
if((state_val_22252 === (7))){
var inst_22247 = (state_22251[(2)]);
var state_22251__$1 = state_22251;
var statearr_22253_22304 = state_22251__$1;
(statearr_22253_22304[(2)] = inst_22247);

(statearr_22253_22304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (20))){
var state_22251__$1 = state_22251;
var statearr_22254_22305 = state_22251__$1;
(statearr_22254_22305[(2)] = null);

(statearr_22254_22305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (1))){
var state_22251__$1 = state_22251;
var statearr_22255_22306 = state_22251__$1;
(statearr_22255_22306[(2)] = null);

(statearr_22255_22306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (24))){
var inst_22230 = (state_22251[(7)]);
var inst_22239 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22230);
var state_22251__$1 = state_22251;
var statearr_22256_22307 = state_22251__$1;
(statearr_22256_22307[(2)] = inst_22239);

(statearr_22256_22307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (4))){
var inst_22182 = (state_22251[(8)]);
var inst_22182__$1 = (state_22251[(2)]);
var inst_22183 = (inst_22182__$1 == null);
var state_22251__$1 = (function (){var statearr_22257 = state_22251;
(statearr_22257[(8)] = inst_22182__$1);

return statearr_22257;
})();
if(cljs.core.truth_(inst_22183)){
var statearr_22258_22308 = state_22251__$1;
(statearr_22258_22308[(1)] = (5));

} else {
var statearr_22259_22309 = state_22251__$1;
(statearr_22259_22309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (15))){
var inst_22224 = (state_22251[(2)]);
var state_22251__$1 = state_22251;
var statearr_22260_22310 = state_22251__$1;
(statearr_22260_22310[(2)] = inst_22224);

(statearr_22260_22310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (21))){
var inst_22244 = (state_22251[(2)]);
var state_22251__$1 = (function (){var statearr_22261 = state_22251;
(statearr_22261[(9)] = inst_22244);

return statearr_22261;
})();
var statearr_22262_22311 = state_22251__$1;
(statearr_22262_22311[(2)] = null);

(statearr_22262_22311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (13))){
var inst_22206 = (state_22251[(10)]);
var inst_22208 = cljs.core.chunked_seq_QMARK_.call(null,inst_22206);
var state_22251__$1 = state_22251;
if(inst_22208){
var statearr_22263_22312 = state_22251__$1;
(statearr_22263_22312[(1)] = (16));

} else {
var statearr_22264_22313 = state_22251__$1;
(statearr_22264_22313[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (22))){
var inst_22236 = (state_22251[(2)]);
var state_22251__$1 = state_22251;
if(cljs.core.truth_(inst_22236)){
var statearr_22265_22314 = state_22251__$1;
(statearr_22265_22314[(1)] = (23));

} else {
var statearr_22266_22315 = state_22251__$1;
(statearr_22266_22315[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (6))){
var inst_22230 = (state_22251[(7)]);
var inst_22232 = (state_22251[(11)]);
var inst_22182 = (state_22251[(8)]);
var inst_22230__$1 = topic_fn.call(null,inst_22182);
var inst_22231 = cljs.core.deref.call(null,mults);
var inst_22232__$1 = cljs.core.get.call(null,inst_22231,inst_22230__$1);
var state_22251__$1 = (function (){var statearr_22267 = state_22251;
(statearr_22267[(7)] = inst_22230__$1);

(statearr_22267[(11)] = inst_22232__$1);

return statearr_22267;
})();
if(cljs.core.truth_(inst_22232__$1)){
var statearr_22268_22316 = state_22251__$1;
(statearr_22268_22316[(1)] = (19));

} else {
var statearr_22269_22317 = state_22251__$1;
(statearr_22269_22317[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (25))){
var inst_22241 = (state_22251[(2)]);
var state_22251__$1 = state_22251;
var statearr_22270_22318 = state_22251__$1;
(statearr_22270_22318[(2)] = inst_22241);

(statearr_22270_22318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (17))){
var inst_22206 = (state_22251[(10)]);
var inst_22215 = cljs.core.first.call(null,inst_22206);
var inst_22216 = cljs.core.async.muxch_STAR_.call(null,inst_22215);
var inst_22217 = cljs.core.async.close_BANG_.call(null,inst_22216);
var inst_22218 = cljs.core.next.call(null,inst_22206);
var inst_22192 = inst_22218;
var inst_22193 = null;
var inst_22194 = (0);
var inst_22195 = (0);
var state_22251__$1 = (function (){var statearr_22271 = state_22251;
(statearr_22271[(12)] = inst_22193);

(statearr_22271[(13)] = inst_22194);

(statearr_22271[(14)] = inst_22192);

(statearr_22271[(15)] = inst_22195);

(statearr_22271[(16)] = inst_22217);

return statearr_22271;
})();
var statearr_22272_22319 = state_22251__$1;
(statearr_22272_22319[(2)] = null);

(statearr_22272_22319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (3))){
var inst_22249 = (state_22251[(2)]);
var state_22251__$1 = state_22251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22251__$1,inst_22249);
} else {
if((state_val_22252 === (12))){
var inst_22226 = (state_22251[(2)]);
var state_22251__$1 = state_22251;
var statearr_22273_22320 = state_22251__$1;
(statearr_22273_22320[(2)] = inst_22226);

(statearr_22273_22320[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (2))){
var state_22251__$1 = state_22251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22251__$1,(4),ch);
} else {
if((state_val_22252 === (23))){
var state_22251__$1 = state_22251;
var statearr_22274_22321 = state_22251__$1;
(statearr_22274_22321[(2)] = null);

(statearr_22274_22321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (19))){
var inst_22232 = (state_22251[(11)]);
var inst_22182 = (state_22251[(8)]);
var inst_22234 = cljs.core.async.muxch_STAR_.call(null,inst_22232);
var state_22251__$1 = state_22251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22251__$1,(22),inst_22234,inst_22182);
} else {
if((state_val_22252 === (11))){
var inst_22206 = (state_22251[(10)]);
var inst_22192 = (state_22251[(14)]);
var inst_22206__$1 = cljs.core.seq.call(null,inst_22192);
var state_22251__$1 = (function (){var statearr_22275 = state_22251;
(statearr_22275[(10)] = inst_22206__$1);

return statearr_22275;
})();
if(inst_22206__$1){
var statearr_22276_22322 = state_22251__$1;
(statearr_22276_22322[(1)] = (13));

} else {
var statearr_22277_22323 = state_22251__$1;
(statearr_22277_22323[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (9))){
var inst_22228 = (state_22251[(2)]);
var state_22251__$1 = state_22251;
var statearr_22278_22324 = state_22251__$1;
(statearr_22278_22324[(2)] = inst_22228);

(statearr_22278_22324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (5))){
var inst_22189 = cljs.core.deref.call(null,mults);
var inst_22190 = cljs.core.vals.call(null,inst_22189);
var inst_22191 = cljs.core.seq.call(null,inst_22190);
var inst_22192 = inst_22191;
var inst_22193 = null;
var inst_22194 = (0);
var inst_22195 = (0);
var state_22251__$1 = (function (){var statearr_22279 = state_22251;
(statearr_22279[(12)] = inst_22193);

(statearr_22279[(13)] = inst_22194);

(statearr_22279[(14)] = inst_22192);

(statearr_22279[(15)] = inst_22195);

return statearr_22279;
})();
var statearr_22280_22325 = state_22251__$1;
(statearr_22280_22325[(2)] = null);

(statearr_22280_22325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (14))){
var state_22251__$1 = state_22251;
var statearr_22284_22326 = state_22251__$1;
(statearr_22284_22326[(2)] = null);

(statearr_22284_22326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (16))){
var inst_22206 = (state_22251[(10)]);
var inst_22210 = cljs.core.chunk_first.call(null,inst_22206);
var inst_22211 = cljs.core.chunk_rest.call(null,inst_22206);
var inst_22212 = cljs.core.count.call(null,inst_22210);
var inst_22192 = inst_22211;
var inst_22193 = inst_22210;
var inst_22194 = inst_22212;
var inst_22195 = (0);
var state_22251__$1 = (function (){var statearr_22285 = state_22251;
(statearr_22285[(12)] = inst_22193);

(statearr_22285[(13)] = inst_22194);

(statearr_22285[(14)] = inst_22192);

(statearr_22285[(15)] = inst_22195);

return statearr_22285;
})();
var statearr_22286_22327 = state_22251__$1;
(statearr_22286_22327[(2)] = null);

(statearr_22286_22327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (10))){
var inst_22193 = (state_22251[(12)]);
var inst_22194 = (state_22251[(13)]);
var inst_22192 = (state_22251[(14)]);
var inst_22195 = (state_22251[(15)]);
var inst_22200 = cljs.core._nth.call(null,inst_22193,inst_22195);
var inst_22201 = cljs.core.async.muxch_STAR_.call(null,inst_22200);
var inst_22202 = cljs.core.async.close_BANG_.call(null,inst_22201);
var inst_22203 = (inst_22195 + (1));
var tmp22281 = inst_22193;
var tmp22282 = inst_22194;
var tmp22283 = inst_22192;
var inst_22192__$1 = tmp22283;
var inst_22193__$1 = tmp22281;
var inst_22194__$1 = tmp22282;
var inst_22195__$1 = inst_22203;
var state_22251__$1 = (function (){var statearr_22287 = state_22251;
(statearr_22287[(12)] = inst_22193__$1);

(statearr_22287[(17)] = inst_22202);

(statearr_22287[(13)] = inst_22194__$1);

(statearr_22287[(14)] = inst_22192__$1);

(statearr_22287[(15)] = inst_22195__$1);

return statearr_22287;
})();
var statearr_22288_22328 = state_22251__$1;
(statearr_22288_22328[(2)] = null);

(statearr_22288_22328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (18))){
var inst_22221 = (state_22251[(2)]);
var state_22251__$1 = state_22251;
var statearr_22289_22329 = state_22251__$1;
(statearr_22289_22329[(2)] = inst_22221);

(statearr_22289_22329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (8))){
var inst_22194 = (state_22251[(13)]);
var inst_22195 = (state_22251[(15)]);
var inst_22197 = (inst_22195 < inst_22194);
var inst_22198 = inst_22197;
var state_22251__$1 = state_22251;
if(cljs.core.truth_(inst_22198)){
var statearr_22290_22330 = state_22251__$1;
(statearr_22290_22330[(1)] = (10));

} else {
var statearr_22291_22331 = state_22251__$1;
(statearr_22291_22331[(1)] = (11));

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
});})(c__20441__auto___22303,mults,ensure_mult,p))
;
return ((function (switch__20376__auto__,c__20441__auto___22303,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20377__auto__ = null;
var cljs$core$async$state_machine__20377__auto____0 = (function (){
var statearr_22295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22295[(0)] = cljs$core$async$state_machine__20377__auto__);

(statearr_22295[(1)] = (1));

return statearr_22295;
});
var cljs$core$async$state_machine__20377__auto____1 = (function (state_22251){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_22251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e22296){if((e22296 instanceof Object)){
var ex__20380__auto__ = e22296;
var statearr_22297_22332 = state_22251;
(statearr_22297_22332[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22333 = state_22251;
state_22251 = G__22333;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$state_machine__20377__auto__ = function(state_22251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20377__auto____1.call(this,state_22251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20377__auto____0;
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20377__auto____1;
return cljs$core$async$state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto___22303,mults,ensure_mult,p))
})();
var state__20443__auto__ = (function (){var statearr_22298 = f__20442__auto__.call(null);
(statearr_22298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___22303);

return statearr_22298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto___22303,mults,ensure_mult,p))
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
var args22334 = [];
var len__19330__auto___22337 = arguments.length;
var i__19331__auto___22338 = (0);
while(true){
if((i__19331__auto___22338 < len__19330__auto___22337)){
args22334.push((arguments[i__19331__auto___22338]));

var G__22339 = (i__19331__auto___22338 + (1));
i__19331__auto___22338 = G__22339;
continue;
} else {
}
break;
}

var G__22336 = args22334.length;
switch (G__22336) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22334.length)].join('')));

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
var args22341 = [];
var len__19330__auto___22344 = arguments.length;
var i__19331__auto___22345 = (0);
while(true){
if((i__19331__auto___22345 < len__19330__auto___22344)){
args22341.push((arguments[i__19331__auto___22345]));

var G__22346 = (i__19331__auto___22345 + (1));
i__19331__auto___22345 = G__22346;
continue;
} else {
}
break;
}

var G__22343 = args22341.length;
switch (G__22343) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22341.length)].join('')));

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
var args22348 = [];
var len__19330__auto___22419 = arguments.length;
var i__19331__auto___22420 = (0);
while(true){
if((i__19331__auto___22420 < len__19330__auto___22419)){
args22348.push((arguments[i__19331__auto___22420]));

var G__22421 = (i__19331__auto___22420 + (1));
i__19331__auto___22420 = G__22421;
continue;
} else {
}
break;
}

var G__22350 = args22348.length;
switch (G__22350) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22348.length)].join('')));

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
var c__20441__auto___22423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto___22423,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto___22423,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22389){
var state_val_22390 = (state_22389[(1)]);
if((state_val_22390 === (7))){
var state_22389__$1 = state_22389;
var statearr_22391_22424 = state_22389__$1;
(statearr_22391_22424[(2)] = null);

(statearr_22391_22424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22390 === (1))){
var state_22389__$1 = state_22389;
var statearr_22392_22425 = state_22389__$1;
(statearr_22392_22425[(2)] = null);

(statearr_22392_22425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22390 === (4))){
var inst_22353 = (state_22389[(7)]);
var inst_22355 = (inst_22353 < cnt);
var state_22389__$1 = state_22389;
if(cljs.core.truth_(inst_22355)){
var statearr_22393_22426 = state_22389__$1;
(statearr_22393_22426[(1)] = (6));

} else {
var statearr_22394_22427 = state_22389__$1;
(statearr_22394_22427[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22390 === (15))){
var inst_22385 = (state_22389[(2)]);
var state_22389__$1 = state_22389;
var statearr_22395_22428 = state_22389__$1;
(statearr_22395_22428[(2)] = inst_22385);

(statearr_22395_22428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22390 === (13))){
var inst_22378 = cljs.core.async.close_BANG_.call(null,out);
var state_22389__$1 = state_22389;
var statearr_22396_22429 = state_22389__$1;
(statearr_22396_22429[(2)] = inst_22378);

(statearr_22396_22429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22390 === (6))){
var state_22389__$1 = state_22389;
var statearr_22397_22430 = state_22389__$1;
(statearr_22397_22430[(2)] = null);

(statearr_22397_22430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22390 === (3))){
var inst_22387 = (state_22389[(2)]);
var state_22389__$1 = state_22389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22389__$1,inst_22387);
} else {
if((state_val_22390 === (12))){
var inst_22375 = (state_22389[(8)]);
var inst_22375__$1 = (state_22389[(2)]);
var inst_22376 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22375__$1);
var state_22389__$1 = (function (){var statearr_22398 = state_22389;
(statearr_22398[(8)] = inst_22375__$1);

return statearr_22398;
})();
if(cljs.core.truth_(inst_22376)){
var statearr_22399_22431 = state_22389__$1;
(statearr_22399_22431[(1)] = (13));

} else {
var statearr_22400_22432 = state_22389__$1;
(statearr_22400_22432[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22390 === (2))){
var inst_22352 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22353 = (0);
var state_22389__$1 = (function (){var statearr_22401 = state_22389;
(statearr_22401[(7)] = inst_22353);

(statearr_22401[(9)] = inst_22352);

return statearr_22401;
})();
var statearr_22402_22433 = state_22389__$1;
(statearr_22402_22433[(2)] = null);

(statearr_22402_22433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22390 === (11))){
var inst_22353 = (state_22389[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22389,(10),Object,null,(9));
var inst_22362 = chs__$1.call(null,inst_22353);
var inst_22363 = done.call(null,inst_22353);
var inst_22364 = cljs.core.async.take_BANG_.call(null,inst_22362,inst_22363);
var state_22389__$1 = state_22389;
var statearr_22403_22434 = state_22389__$1;
(statearr_22403_22434[(2)] = inst_22364);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22389__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22390 === (9))){
var inst_22353 = (state_22389[(7)]);
var inst_22366 = (state_22389[(2)]);
var inst_22367 = (inst_22353 + (1));
var inst_22353__$1 = inst_22367;
var state_22389__$1 = (function (){var statearr_22404 = state_22389;
(statearr_22404[(10)] = inst_22366);

(statearr_22404[(7)] = inst_22353__$1);

return statearr_22404;
})();
var statearr_22405_22435 = state_22389__$1;
(statearr_22405_22435[(2)] = null);

(statearr_22405_22435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22390 === (5))){
var inst_22373 = (state_22389[(2)]);
var state_22389__$1 = (function (){var statearr_22406 = state_22389;
(statearr_22406[(11)] = inst_22373);

return statearr_22406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22389__$1,(12),dchan);
} else {
if((state_val_22390 === (14))){
var inst_22375 = (state_22389[(8)]);
var inst_22380 = cljs.core.apply.call(null,f,inst_22375);
var state_22389__$1 = state_22389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22389__$1,(16),out,inst_22380);
} else {
if((state_val_22390 === (16))){
var inst_22382 = (state_22389[(2)]);
var state_22389__$1 = (function (){var statearr_22407 = state_22389;
(statearr_22407[(12)] = inst_22382);

return statearr_22407;
})();
var statearr_22408_22436 = state_22389__$1;
(statearr_22408_22436[(2)] = null);

(statearr_22408_22436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22390 === (10))){
var inst_22357 = (state_22389[(2)]);
var inst_22358 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22389__$1 = (function (){var statearr_22409 = state_22389;
(statearr_22409[(13)] = inst_22357);

return statearr_22409;
})();
var statearr_22410_22437 = state_22389__$1;
(statearr_22410_22437[(2)] = inst_22358);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22389__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22390 === (8))){
var inst_22371 = (state_22389[(2)]);
var state_22389__$1 = state_22389;
var statearr_22411_22438 = state_22389__$1;
(statearr_22411_22438[(2)] = inst_22371);

(statearr_22411_22438[(1)] = (5));


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
});})(c__20441__auto___22423,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20376__auto__,c__20441__auto___22423,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20377__auto__ = null;
var cljs$core$async$state_machine__20377__auto____0 = (function (){
var statearr_22415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22415[(0)] = cljs$core$async$state_machine__20377__auto__);

(statearr_22415[(1)] = (1));

return statearr_22415;
});
var cljs$core$async$state_machine__20377__auto____1 = (function (state_22389){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_22389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e22416){if((e22416 instanceof Object)){
var ex__20380__auto__ = e22416;
var statearr_22417_22439 = state_22389;
(statearr_22417_22439[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22440 = state_22389;
state_22389 = G__22440;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$state_machine__20377__auto__ = function(state_22389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20377__auto____1.call(this,state_22389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20377__auto____0;
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20377__auto____1;
return cljs$core$async$state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto___22423,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20443__auto__ = (function (){var statearr_22418 = f__20442__auto__.call(null);
(statearr_22418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___22423);

return statearr_22418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto___22423,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args22442 = [];
var len__19330__auto___22498 = arguments.length;
var i__19331__auto___22499 = (0);
while(true){
if((i__19331__auto___22499 < len__19330__auto___22498)){
args22442.push((arguments[i__19331__auto___22499]));

var G__22500 = (i__19331__auto___22499 + (1));
i__19331__auto___22499 = G__22500;
continue;
} else {
}
break;
}

var G__22444 = args22442.length;
switch (G__22444) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22442.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20441__auto___22502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto___22502,out){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto___22502,out){
return (function (state_22474){
var state_val_22475 = (state_22474[(1)]);
if((state_val_22475 === (7))){
var inst_22453 = (state_22474[(7)]);
var inst_22454 = (state_22474[(8)]);
var inst_22453__$1 = (state_22474[(2)]);
var inst_22454__$1 = cljs.core.nth.call(null,inst_22453__$1,(0),null);
var inst_22455 = cljs.core.nth.call(null,inst_22453__$1,(1),null);
var inst_22456 = (inst_22454__$1 == null);
var state_22474__$1 = (function (){var statearr_22476 = state_22474;
(statearr_22476[(7)] = inst_22453__$1);

(statearr_22476[(8)] = inst_22454__$1);

(statearr_22476[(9)] = inst_22455);

return statearr_22476;
})();
if(cljs.core.truth_(inst_22456)){
var statearr_22477_22503 = state_22474__$1;
(statearr_22477_22503[(1)] = (8));

} else {
var statearr_22478_22504 = state_22474__$1;
(statearr_22478_22504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (1))){
var inst_22445 = cljs.core.vec.call(null,chs);
var inst_22446 = inst_22445;
var state_22474__$1 = (function (){var statearr_22479 = state_22474;
(statearr_22479[(10)] = inst_22446);

return statearr_22479;
})();
var statearr_22480_22505 = state_22474__$1;
(statearr_22480_22505[(2)] = null);

(statearr_22480_22505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (4))){
var inst_22446 = (state_22474[(10)]);
var state_22474__$1 = state_22474;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22474__$1,(7),inst_22446);
} else {
if((state_val_22475 === (6))){
var inst_22470 = (state_22474[(2)]);
var state_22474__$1 = state_22474;
var statearr_22481_22506 = state_22474__$1;
(statearr_22481_22506[(2)] = inst_22470);

(statearr_22481_22506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (3))){
var inst_22472 = (state_22474[(2)]);
var state_22474__$1 = state_22474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22474__$1,inst_22472);
} else {
if((state_val_22475 === (2))){
var inst_22446 = (state_22474[(10)]);
var inst_22448 = cljs.core.count.call(null,inst_22446);
var inst_22449 = (inst_22448 > (0));
var state_22474__$1 = state_22474;
if(cljs.core.truth_(inst_22449)){
var statearr_22483_22507 = state_22474__$1;
(statearr_22483_22507[(1)] = (4));

} else {
var statearr_22484_22508 = state_22474__$1;
(statearr_22484_22508[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (11))){
var inst_22446 = (state_22474[(10)]);
var inst_22463 = (state_22474[(2)]);
var tmp22482 = inst_22446;
var inst_22446__$1 = tmp22482;
var state_22474__$1 = (function (){var statearr_22485 = state_22474;
(statearr_22485[(10)] = inst_22446__$1);

(statearr_22485[(11)] = inst_22463);

return statearr_22485;
})();
var statearr_22486_22509 = state_22474__$1;
(statearr_22486_22509[(2)] = null);

(statearr_22486_22509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (9))){
var inst_22454 = (state_22474[(8)]);
var state_22474__$1 = state_22474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22474__$1,(11),out,inst_22454);
} else {
if((state_val_22475 === (5))){
var inst_22468 = cljs.core.async.close_BANG_.call(null,out);
var state_22474__$1 = state_22474;
var statearr_22487_22510 = state_22474__$1;
(statearr_22487_22510[(2)] = inst_22468);

(statearr_22487_22510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (10))){
var inst_22466 = (state_22474[(2)]);
var state_22474__$1 = state_22474;
var statearr_22488_22511 = state_22474__$1;
(statearr_22488_22511[(2)] = inst_22466);

(statearr_22488_22511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (8))){
var inst_22453 = (state_22474[(7)]);
var inst_22446 = (state_22474[(10)]);
var inst_22454 = (state_22474[(8)]);
var inst_22455 = (state_22474[(9)]);
var inst_22458 = (function (){var cs = inst_22446;
var vec__22451 = inst_22453;
var v = inst_22454;
var c = inst_22455;
return ((function (cs,vec__22451,v,c,inst_22453,inst_22446,inst_22454,inst_22455,state_val_22475,c__20441__auto___22502,out){
return (function (p1__22441_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22441_SHARP_);
});
;})(cs,vec__22451,v,c,inst_22453,inst_22446,inst_22454,inst_22455,state_val_22475,c__20441__auto___22502,out))
})();
var inst_22459 = cljs.core.filterv.call(null,inst_22458,inst_22446);
var inst_22446__$1 = inst_22459;
var state_22474__$1 = (function (){var statearr_22489 = state_22474;
(statearr_22489[(10)] = inst_22446__$1);

return statearr_22489;
})();
var statearr_22490_22512 = state_22474__$1;
(statearr_22490_22512[(2)] = null);

(statearr_22490_22512[(1)] = (2));


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
});})(c__20441__auto___22502,out))
;
return ((function (switch__20376__auto__,c__20441__auto___22502,out){
return (function() {
var cljs$core$async$state_machine__20377__auto__ = null;
var cljs$core$async$state_machine__20377__auto____0 = (function (){
var statearr_22494 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22494[(0)] = cljs$core$async$state_machine__20377__auto__);

(statearr_22494[(1)] = (1));

return statearr_22494;
});
var cljs$core$async$state_machine__20377__auto____1 = (function (state_22474){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_22474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e22495){if((e22495 instanceof Object)){
var ex__20380__auto__ = e22495;
var statearr_22496_22513 = state_22474;
(statearr_22496_22513[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22514 = state_22474;
state_22474 = G__22514;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$state_machine__20377__auto__ = function(state_22474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20377__auto____1.call(this,state_22474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20377__auto____0;
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20377__auto____1;
return cljs$core$async$state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto___22502,out))
})();
var state__20443__auto__ = (function (){var statearr_22497 = f__20442__auto__.call(null);
(statearr_22497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___22502);

return statearr_22497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto___22502,out))
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
var args22515 = [];
var len__19330__auto___22564 = arguments.length;
var i__19331__auto___22565 = (0);
while(true){
if((i__19331__auto___22565 < len__19330__auto___22564)){
args22515.push((arguments[i__19331__auto___22565]));

var G__22566 = (i__19331__auto___22565 + (1));
i__19331__auto___22565 = G__22566;
continue;
} else {
}
break;
}

var G__22517 = args22515.length;
switch (G__22517) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22515.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20441__auto___22568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto___22568,out){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto___22568,out){
return (function (state_22541){
var state_val_22542 = (state_22541[(1)]);
if((state_val_22542 === (7))){
var inst_22523 = (state_22541[(7)]);
var inst_22523__$1 = (state_22541[(2)]);
var inst_22524 = (inst_22523__$1 == null);
var inst_22525 = cljs.core.not.call(null,inst_22524);
var state_22541__$1 = (function (){var statearr_22543 = state_22541;
(statearr_22543[(7)] = inst_22523__$1);

return statearr_22543;
})();
if(inst_22525){
var statearr_22544_22569 = state_22541__$1;
(statearr_22544_22569[(1)] = (8));

} else {
var statearr_22545_22570 = state_22541__$1;
(statearr_22545_22570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (1))){
var inst_22518 = (0);
var state_22541__$1 = (function (){var statearr_22546 = state_22541;
(statearr_22546[(8)] = inst_22518);

return statearr_22546;
})();
var statearr_22547_22571 = state_22541__$1;
(statearr_22547_22571[(2)] = null);

(statearr_22547_22571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (4))){
var state_22541__$1 = state_22541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22541__$1,(7),ch);
} else {
if((state_val_22542 === (6))){
var inst_22536 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
var statearr_22548_22572 = state_22541__$1;
(statearr_22548_22572[(2)] = inst_22536);

(statearr_22548_22572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (3))){
var inst_22538 = (state_22541[(2)]);
var inst_22539 = cljs.core.async.close_BANG_.call(null,out);
var state_22541__$1 = (function (){var statearr_22549 = state_22541;
(statearr_22549[(9)] = inst_22538);

return statearr_22549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22541__$1,inst_22539);
} else {
if((state_val_22542 === (2))){
var inst_22518 = (state_22541[(8)]);
var inst_22520 = (inst_22518 < n);
var state_22541__$1 = state_22541;
if(cljs.core.truth_(inst_22520)){
var statearr_22550_22573 = state_22541__$1;
(statearr_22550_22573[(1)] = (4));

} else {
var statearr_22551_22574 = state_22541__$1;
(statearr_22551_22574[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (11))){
var inst_22518 = (state_22541[(8)]);
var inst_22528 = (state_22541[(2)]);
var inst_22529 = (inst_22518 + (1));
var inst_22518__$1 = inst_22529;
var state_22541__$1 = (function (){var statearr_22552 = state_22541;
(statearr_22552[(10)] = inst_22528);

(statearr_22552[(8)] = inst_22518__$1);

return statearr_22552;
})();
var statearr_22553_22575 = state_22541__$1;
(statearr_22553_22575[(2)] = null);

(statearr_22553_22575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (9))){
var state_22541__$1 = state_22541;
var statearr_22554_22576 = state_22541__$1;
(statearr_22554_22576[(2)] = null);

(statearr_22554_22576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (5))){
var state_22541__$1 = state_22541;
var statearr_22555_22577 = state_22541__$1;
(statearr_22555_22577[(2)] = null);

(statearr_22555_22577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (10))){
var inst_22533 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
var statearr_22556_22578 = state_22541__$1;
(statearr_22556_22578[(2)] = inst_22533);

(statearr_22556_22578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (8))){
var inst_22523 = (state_22541[(7)]);
var state_22541__$1 = state_22541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22541__$1,(11),out,inst_22523);
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
});})(c__20441__auto___22568,out))
;
return ((function (switch__20376__auto__,c__20441__auto___22568,out){
return (function() {
var cljs$core$async$state_machine__20377__auto__ = null;
var cljs$core$async$state_machine__20377__auto____0 = (function (){
var statearr_22560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22560[(0)] = cljs$core$async$state_machine__20377__auto__);

(statearr_22560[(1)] = (1));

return statearr_22560;
});
var cljs$core$async$state_machine__20377__auto____1 = (function (state_22541){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_22541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e22561){if((e22561 instanceof Object)){
var ex__20380__auto__ = e22561;
var statearr_22562_22579 = state_22541;
(statearr_22562_22579[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22580 = state_22541;
state_22541 = G__22580;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$state_machine__20377__auto__ = function(state_22541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20377__auto____1.call(this,state_22541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20377__auto____0;
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20377__auto____1;
return cljs$core$async$state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto___22568,out))
})();
var state__20443__auto__ = (function (){var statearr_22563 = f__20442__auto__.call(null);
(statearr_22563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___22568);

return statearr_22563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto___22568,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22588 = (function (map_LT_,f,ch,meta22589){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22589 = meta22589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22590,meta22589__$1){
var self__ = this;
var _22590__$1 = this;
return (new cljs.core.async.t_cljs$core$async22588(self__.map_LT_,self__.f,self__.ch,meta22589__$1));
});

cljs.core.async.t_cljs$core$async22588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22590){
var self__ = this;
var _22590__$1 = this;
return self__.meta22589;
});

cljs.core.async.t_cljs$core$async22588.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22588.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22588.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22588.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22588.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22591 = (function (map_LT_,f,ch,meta22589,_,fn1,meta22592){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22589 = meta22589;
this._ = _;
this.fn1 = fn1;
this.meta22592 = meta22592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22593,meta22592__$1){
var self__ = this;
var _22593__$1 = this;
return (new cljs.core.async.t_cljs$core$async22591(self__.map_LT_,self__.f,self__.ch,self__.meta22589,self__._,self__.fn1,meta22592__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22593){
var self__ = this;
var _22593__$1 = this;
return self__.meta22592;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22591.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22581_SHARP_){
return f1.call(null,(((p1__22581_SHARP_ == null))?null:self__.f.call(null,p1__22581_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22591.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22589","meta22589",212109135,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22588","cljs.core.async/t_cljs$core$async22588",905374624,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22592","meta22592",334346932,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22591";

cljs.core.async.t_cljs$core$async22591.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async22591");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22591 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22591(map_LT___$1,f__$1,ch__$1,meta22589__$1,___$2,fn1__$1,meta22592){
return (new cljs.core.async.t_cljs$core$async22591(map_LT___$1,f__$1,ch__$1,meta22589__$1,___$2,fn1__$1,meta22592));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22591(self__.map_LT_,self__.f,self__.ch,self__.meta22589,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async22588.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22588.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22589","meta22589",212109135,null)], null);
});

cljs.core.async.t_cljs$core$async22588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22588";

cljs.core.async.t_cljs$core$async22588.cljs$lang$ctorPrWriter = (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async22588");
});

cljs.core.async.__GT_t_cljs$core$async22588 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22588(map_LT___$1,f__$1,ch__$1,meta22589){
return (new cljs.core.async.t_cljs$core$async22588(map_LT___$1,f__$1,ch__$1,meta22589));
});

}

return (new cljs.core.async.t_cljs$core$async22588(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22597 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22597 = (function (map_GT_,f,ch,meta22598){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22598 = meta22598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22599,meta22598__$1){
var self__ = this;
var _22599__$1 = this;
return (new cljs.core.async.t_cljs$core$async22597(self__.map_GT_,self__.f,self__.ch,meta22598__$1));
});

cljs.core.async.t_cljs$core$async22597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22599){
var self__ = this;
var _22599__$1 = this;
return self__.meta22598;
});

cljs.core.async.t_cljs$core$async22597.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22597.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22597.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22597.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22597.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22597.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22598","meta22598",1521213786,null)], null);
});

cljs.core.async.t_cljs$core$async22597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22597";

cljs.core.async.t_cljs$core$async22597.cljs$lang$ctorPrWriter = (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async22597");
});

cljs.core.async.__GT_t_cljs$core$async22597 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22597(map_GT___$1,f__$1,ch__$1,meta22598){
return (new cljs.core.async.t_cljs$core$async22597(map_GT___$1,f__$1,ch__$1,meta22598));
});

}

return (new cljs.core.async.t_cljs$core$async22597(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22603 = (function (filter_GT_,p,ch,meta22604){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22604 = meta22604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22605,meta22604__$1){
var self__ = this;
var _22605__$1 = this;
return (new cljs.core.async.t_cljs$core$async22603(self__.filter_GT_,self__.p,self__.ch,meta22604__$1));
});

cljs.core.async.t_cljs$core$async22603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22605){
var self__ = this;
var _22605__$1 = this;
return self__.meta22604;
});

cljs.core.async.t_cljs$core$async22603.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22603.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22603.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22603.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22603.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22603.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22603.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22604","meta22604",1870020822,null)], null);
});

cljs.core.async.t_cljs$core$async22603.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22603";

cljs.core.async.t_cljs$core$async22603.cljs$lang$ctorPrWriter = (function (this__18874__auto__,writer__18875__auto__,opt__18876__auto__){
return cljs.core._write.call(null,writer__18875__auto__,"cljs.core.async/t_cljs$core$async22603");
});

cljs.core.async.__GT_t_cljs$core$async22603 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22603(filter_GT___$1,p__$1,ch__$1,meta22604){
return (new cljs.core.async.t_cljs$core$async22603(filter_GT___$1,p__$1,ch__$1,meta22604));
});

}

return (new cljs.core.async.t_cljs$core$async22603(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args22606 = [];
var len__19330__auto___22650 = arguments.length;
var i__19331__auto___22651 = (0);
while(true){
if((i__19331__auto___22651 < len__19330__auto___22650)){
args22606.push((arguments[i__19331__auto___22651]));

var G__22652 = (i__19331__auto___22651 + (1));
i__19331__auto___22651 = G__22652;
continue;
} else {
}
break;
}

var G__22608 = args22606.length;
switch (G__22608) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22606.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20441__auto___22654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto___22654,out){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto___22654,out){
return (function (state_22629){
var state_val_22630 = (state_22629[(1)]);
if((state_val_22630 === (7))){
var inst_22625 = (state_22629[(2)]);
var state_22629__$1 = state_22629;
var statearr_22631_22655 = state_22629__$1;
(statearr_22631_22655[(2)] = inst_22625);

(statearr_22631_22655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22630 === (1))){
var state_22629__$1 = state_22629;
var statearr_22632_22656 = state_22629__$1;
(statearr_22632_22656[(2)] = null);

(statearr_22632_22656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22630 === (4))){
var inst_22611 = (state_22629[(7)]);
var inst_22611__$1 = (state_22629[(2)]);
var inst_22612 = (inst_22611__$1 == null);
var state_22629__$1 = (function (){var statearr_22633 = state_22629;
(statearr_22633[(7)] = inst_22611__$1);

return statearr_22633;
})();
if(cljs.core.truth_(inst_22612)){
var statearr_22634_22657 = state_22629__$1;
(statearr_22634_22657[(1)] = (5));

} else {
var statearr_22635_22658 = state_22629__$1;
(statearr_22635_22658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22630 === (6))){
var inst_22611 = (state_22629[(7)]);
var inst_22616 = p.call(null,inst_22611);
var state_22629__$1 = state_22629;
if(cljs.core.truth_(inst_22616)){
var statearr_22636_22659 = state_22629__$1;
(statearr_22636_22659[(1)] = (8));

} else {
var statearr_22637_22660 = state_22629__$1;
(statearr_22637_22660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22630 === (3))){
var inst_22627 = (state_22629[(2)]);
var state_22629__$1 = state_22629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22629__$1,inst_22627);
} else {
if((state_val_22630 === (2))){
var state_22629__$1 = state_22629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22629__$1,(4),ch);
} else {
if((state_val_22630 === (11))){
var inst_22619 = (state_22629[(2)]);
var state_22629__$1 = state_22629;
var statearr_22638_22661 = state_22629__$1;
(statearr_22638_22661[(2)] = inst_22619);

(statearr_22638_22661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22630 === (9))){
var state_22629__$1 = state_22629;
var statearr_22639_22662 = state_22629__$1;
(statearr_22639_22662[(2)] = null);

(statearr_22639_22662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22630 === (5))){
var inst_22614 = cljs.core.async.close_BANG_.call(null,out);
var state_22629__$1 = state_22629;
var statearr_22640_22663 = state_22629__$1;
(statearr_22640_22663[(2)] = inst_22614);

(statearr_22640_22663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22630 === (10))){
var inst_22622 = (state_22629[(2)]);
var state_22629__$1 = (function (){var statearr_22641 = state_22629;
(statearr_22641[(8)] = inst_22622);

return statearr_22641;
})();
var statearr_22642_22664 = state_22629__$1;
(statearr_22642_22664[(2)] = null);

(statearr_22642_22664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22630 === (8))){
var inst_22611 = (state_22629[(7)]);
var state_22629__$1 = state_22629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22629__$1,(11),out,inst_22611);
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
});})(c__20441__auto___22654,out))
;
return ((function (switch__20376__auto__,c__20441__auto___22654,out){
return (function() {
var cljs$core$async$state_machine__20377__auto__ = null;
var cljs$core$async$state_machine__20377__auto____0 = (function (){
var statearr_22646 = [null,null,null,null,null,null,null,null,null];
(statearr_22646[(0)] = cljs$core$async$state_machine__20377__auto__);

(statearr_22646[(1)] = (1));

return statearr_22646;
});
var cljs$core$async$state_machine__20377__auto____1 = (function (state_22629){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_22629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e22647){if((e22647 instanceof Object)){
var ex__20380__auto__ = e22647;
var statearr_22648_22665 = state_22629;
(statearr_22648_22665[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22666 = state_22629;
state_22629 = G__22666;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$state_machine__20377__auto__ = function(state_22629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20377__auto____1.call(this,state_22629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20377__auto____0;
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20377__auto____1;
return cljs$core$async$state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto___22654,out))
})();
var state__20443__auto__ = (function (){var statearr_22649 = f__20442__auto__.call(null);
(statearr_22649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___22654);

return statearr_22649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto___22654,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22667 = [];
var len__19330__auto___22670 = arguments.length;
var i__19331__auto___22671 = (0);
while(true){
if((i__19331__auto___22671 < len__19330__auto___22670)){
args22667.push((arguments[i__19331__auto___22671]));

var G__22672 = (i__19331__auto___22671 + (1));
i__19331__auto___22671 = G__22672;
continue;
} else {
}
break;
}

var G__22669 = args22667.length;
switch (G__22669) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22667.length)].join('')));

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
var c__20441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto__){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto__){
return (function (state_22839){
var state_val_22840 = (state_22839[(1)]);
if((state_val_22840 === (7))){
var inst_22835 = (state_22839[(2)]);
var state_22839__$1 = state_22839;
var statearr_22841_22882 = state_22839__$1;
(statearr_22841_22882[(2)] = inst_22835);

(statearr_22841_22882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22840 === (20))){
var inst_22805 = (state_22839[(7)]);
var inst_22816 = (state_22839[(2)]);
var inst_22817 = cljs.core.next.call(null,inst_22805);
var inst_22791 = inst_22817;
var inst_22792 = null;
var inst_22793 = (0);
var inst_22794 = (0);
var state_22839__$1 = (function (){var statearr_22842 = state_22839;
(statearr_22842[(8)] = inst_22792);

(statearr_22842[(9)] = inst_22816);

(statearr_22842[(10)] = inst_22791);

(statearr_22842[(11)] = inst_22793);

(statearr_22842[(12)] = inst_22794);

return statearr_22842;
})();
var statearr_22843_22883 = state_22839__$1;
(statearr_22843_22883[(2)] = null);

(statearr_22843_22883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22840 === (1))){
var state_22839__$1 = state_22839;
var statearr_22844_22884 = state_22839__$1;
(statearr_22844_22884[(2)] = null);

(statearr_22844_22884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22840 === (4))){
var inst_22780 = (state_22839[(13)]);
var inst_22780__$1 = (state_22839[(2)]);
var inst_22781 = (inst_22780__$1 == null);
var state_22839__$1 = (function (){var statearr_22845 = state_22839;
(statearr_22845[(13)] = inst_22780__$1);

return statearr_22845;
})();
if(cljs.core.truth_(inst_22781)){
var statearr_22846_22885 = state_22839__$1;
(statearr_22846_22885[(1)] = (5));

} else {
var statearr_22847_22886 = state_22839__$1;
(statearr_22847_22886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22840 === (15))){
var state_22839__$1 = state_22839;
var statearr_22851_22887 = state_22839__$1;
(statearr_22851_22887[(2)] = null);

(statearr_22851_22887[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22840 === (21))){
var state_22839__$1 = state_22839;
var statearr_22852_22888 = state_22839__$1;
(statearr_22852_22888[(2)] = null);

(statearr_22852_22888[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22840 === (13))){
var inst_22792 = (state_22839[(8)]);
var inst_22791 = (state_22839[(10)]);
var inst_22793 = (state_22839[(11)]);
var inst_22794 = (state_22839[(12)]);
var inst_22801 = (state_22839[(2)]);
var inst_22802 = (inst_22794 + (1));
var tmp22848 = inst_22792;
var tmp22849 = inst_22791;
var tmp22850 = inst_22793;
var inst_22791__$1 = tmp22849;
var inst_22792__$1 = tmp22848;
var inst_22793__$1 = tmp22850;
var inst_22794__$1 = inst_22802;
var state_22839__$1 = (function (){var statearr_22853 = state_22839;
(statearr_22853[(8)] = inst_22792__$1);

(statearr_22853[(14)] = inst_22801);

(statearr_22853[(10)] = inst_22791__$1);

(statearr_22853[(11)] = inst_22793__$1);

(statearr_22853[(12)] = inst_22794__$1);

return statearr_22853;
})();
var statearr_22854_22889 = state_22839__$1;
(statearr_22854_22889[(2)] = null);

(statearr_22854_22889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22840 === (22))){
var state_22839__$1 = state_22839;
var statearr_22855_22890 = state_22839__$1;
(statearr_22855_22890[(2)] = null);

(statearr_22855_22890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22840 === (6))){
var inst_22780 = (state_22839[(13)]);
var inst_22789 = f.call(null,inst_22780);
var inst_22790 = cljs.core.seq.call(null,inst_22789);
var inst_22791 = inst_22790;
var inst_22792 = null;
var inst_22793 = (0);
var inst_22794 = (0);
var state_22839__$1 = (function (){var statearr_22856 = state_22839;
(statearr_22856[(8)] = inst_22792);

(statearr_22856[(10)] = inst_22791);

(statearr_22856[(11)] = inst_22793);

(statearr_22856[(12)] = inst_22794);

return statearr_22856;
})();
var statearr_22857_22891 = state_22839__$1;
(statearr_22857_22891[(2)] = null);

(statearr_22857_22891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22840 === (17))){
var inst_22805 = (state_22839[(7)]);
var inst_22809 = cljs.core.chunk_first.call(null,inst_22805);
var inst_22810 = cljs.core.chunk_rest.call(null,inst_22805);
var inst_22811 = cljs.core.count.call(null,inst_22809);
var inst_22791 = inst_22810;
var inst_22792 = inst_22809;
var inst_22793 = inst_22811;
var inst_22794 = (0);
var state_22839__$1 = (function (){var statearr_22858 = state_22839;
(statearr_22858[(8)] = inst_22792);

(statearr_22858[(10)] = inst_22791);

(statearr_22858[(11)] = inst_22793);

(statearr_22858[(12)] = inst_22794);

return statearr_22858;
})();
var statearr_22859_22892 = state_22839__$1;
(statearr_22859_22892[(2)] = null);

(statearr_22859_22892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22840 === (3))){
var inst_22837 = (state_22839[(2)]);
var state_22839__$1 = state_22839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22839__$1,inst_22837);
} else {
if((state_val_22840 === (12))){
var inst_22825 = (state_22839[(2)]);
var state_22839__$1 = state_22839;
var statearr_22860_22893 = state_22839__$1;
(statearr_22860_22893[(2)] = inst_22825);

(statearr_22860_22893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22840 === (2))){
var state_22839__$1 = state_22839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22839__$1,(4),in$);
} else {
if((state_val_22840 === (23))){
var inst_22833 = (state_22839[(2)]);
var state_22839__$1 = state_22839;
var statearr_22861_22894 = state_22839__$1;
(statearr_22861_22894[(2)] = inst_22833);

(statearr_22861_22894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22840 === (19))){
var inst_22820 = (state_22839[(2)]);
var state_22839__$1 = state_22839;
var statearr_22862_22895 = state_22839__$1;
(statearr_22862_22895[(2)] = inst_22820);

(statearr_22862_22895[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22840 === (11))){
var inst_22805 = (state_22839[(7)]);
var inst_22791 = (state_22839[(10)]);
var inst_22805__$1 = cljs.core.seq.call(null,inst_22791);
var state_22839__$1 = (function (){var statearr_22863 = state_22839;
(statearr_22863[(7)] = inst_22805__$1);

return statearr_22863;
})();
if(inst_22805__$1){
var statearr_22864_22896 = state_22839__$1;
(statearr_22864_22896[(1)] = (14));

} else {
var statearr_22865_22897 = state_22839__$1;
(statearr_22865_22897[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22840 === (9))){
var inst_22827 = (state_22839[(2)]);
var inst_22828 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22839__$1 = (function (){var statearr_22866 = state_22839;
(statearr_22866[(15)] = inst_22827);

return statearr_22866;
})();
if(cljs.core.truth_(inst_22828)){
var statearr_22867_22898 = state_22839__$1;
(statearr_22867_22898[(1)] = (21));

} else {
var statearr_22868_22899 = state_22839__$1;
(statearr_22868_22899[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22840 === (5))){
var inst_22783 = cljs.core.async.close_BANG_.call(null,out);
var state_22839__$1 = state_22839;
var statearr_22869_22900 = state_22839__$1;
(statearr_22869_22900[(2)] = inst_22783);

(statearr_22869_22900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22840 === (14))){
var inst_22805 = (state_22839[(7)]);
var inst_22807 = cljs.core.chunked_seq_QMARK_.call(null,inst_22805);
var state_22839__$1 = state_22839;
if(inst_22807){
var statearr_22870_22901 = state_22839__$1;
(statearr_22870_22901[(1)] = (17));

} else {
var statearr_22871_22902 = state_22839__$1;
(statearr_22871_22902[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22840 === (16))){
var inst_22823 = (state_22839[(2)]);
var state_22839__$1 = state_22839;
var statearr_22872_22903 = state_22839__$1;
(statearr_22872_22903[(2)] = inst_22823);

(statearr_22872_22903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22840 === (10))){
var inst_22792 = (state_22839[(8)]);
var inst_22794 = (state_22839[(12)]);
var inst_22799 = cljs.core._nth.call(null,inst_22792,inst_22794);
var state_22839__$1 = state_22839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22839__$1,(13),out,inst_22799);
} else {
if((state_val_22840 === (18))){
var inst_22805 = (state_22839[(7)]);
var inst_22814 = cljs.core.first.call(null,inst_22805);
var state_22839__$1 = state_22839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22839__$1,(20),out,inst_22814);
} else {
if((state_val_22840 === (8))){
var inst_22793 = (state_22839[(11)]);
var inst_22794 = (state_22839[(12)]);
var inst_22796 = (inst_22794 < inst_22793);
var inst_22797 = inst_22796;
var state_22839__$1 = state_22839;
if(cljs.core.truth_(inst_22797)){
var statearr_22873_22904 = state_22839__$1;
(statearr_22873_22904[(1)] = (10));

} else {
var statearr_22874_22905 = state_22839__$1;
(statearr_22874_22905[(1)] = (11));

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
});})(c__20441__auto__))
;
return ((function (switch__20376__auto__,c__20441__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20377__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20377__auto____0 = (function (){
var statearr_22878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22878[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20377__auto__);

(statearr_22878[(1)] = (1));

return statearr_22878;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20377__auto____1 = (function (state_22839){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_22839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e22879){if((e22879 instanceof Object)){
var ex__20380__auto__ = e22879;
var statearr_22880_22906 = state_22839;
(statearr_22880_22906[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22907 = state_22839;
state_22839 = G__22907;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20377__auto__ = function(state_22839){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20377__auto____1.call(this,state_22839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20377__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20377__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto__))
})();
var state__20443__auto__ = (function (){var statearr_22881 = f__20442__auto__.call(null);
(statearr_22881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto__);

return statearr_22881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto__))
);

return c__20441__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22908 = [];
var len__19330__auto___22911 = arguments.length;
var i__19331__auto___22912 = (0);
while(true){
if((i__19331__auto___22912 < len__19330__auto___22911)){
args22908.push((arguments[i__19331__auto___22912]));

var G__22913 = (i__19331__auto___22912 + (1));
i__19331__auto___22912 = G__22913;
continue;
} else {
}
break;
}

var G__22910 = args22908.length;
switch (G__22910) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22908.length)].join('')));

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
var args22915 = [];
var len__19330__auto___22918 = arguments.length;
var i__19331__auto___22919 = (0);
while(true){
if((i__19331__auto___22919 < len__19330__auto___22918)){
args22915.push((arguments[i__19331__auto___22919]));

var G__22920 = (i__19331__auto___22919 + (1));
i__19331__auto___22919 = G__22920;
continue;
} else {
}
break;
}

var G__22917 = args22915.length;
switch (G__22917) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22915.length)].join('')));

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
var args22922 = [];
var len__19330__auto___22973 = arguments.length;
var i__19331__auto___22974 = (0);
while(true){
if((i__19331__auto___22974 < len__19330__auto___22973)){
args22922.push((arguments[i__19331__auto___22974]));

var G__22975 = (i__19331__auto___22974 + (1));
i__19331__auto___22974 = G__22975;
continue;
} else {
}
break;
}

var G__22924 = args22922.length;
switch (G__22924) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22922.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20441__auto___22977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto___22977,out){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto___22977,out){
return (function (state_22948){
var state_val_22949 = (state_22948[(1)]);
if((state_val_22949 === (7))){
var inst_22943 = (state_22948[(2)]);
var state_22948__$1 = state_22948;
var statearr_22950_22978 = state_22948__$1;
(statearr_22950_22978[(2)] = inst_22943);

(statearr_22950_22978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (1))){
var inst_22925 = null;
var state_22948__$1 = (function (){var statearr_22951 = state_22948;
(statearr_22951[(7)] = inst_22925);

return statearr_22951;
})();
var statearr_22952_22979 = state_22948__$1;
(statearr_22952_22979[(2)] = null);

(statearr_22952_22979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (4))){
var inst_22928 = (state_22948[(8)]);
var inst_22928__$1 = (state_22948[(2)]);
var inst_22929 = (inst_22928__$1 == null);
var inst_22930 = cljs.core.not.call(null,inst_22929);
var state_22948__$1 = (function (){var statearr_22953 = state_22948;
(statearr_22953[(8)] = inst_22928__$1);

return statearr_22953;
})();
if(inst_22930){
var statearr_22954_22980 = state_22948__$1;
(statearr_22954_22980[(1)] = (5));

} else {
var statearr_22955_22981 = state_22948__$1;
(statearr_22955_22981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (6))){
var state_22948__$1 = state_22948;
var statearr_22956_22982 = state_22948__$1;
(statearr_22956_22982[(2)] = null);

(statearr_22956_22982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (3))){
var inst_22945 = (state_22948[(2)]);
var inst_22946 = cljs.core.async.close_BANG_.call(null,out);
var state_22948__$1 = (function (){var statearr_22957 = state_22948;
(statearr_22957[(9)] = inst_22945);

return statearr_22957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22948__$1,inst_22946);
} else {
if((state_val_22949 === (2))){
var state_22948__$1 = state_22948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22948__$1,(4),ch);
} else {
if((state_val_22949 === (11))){
var inst_22928 = (state_22948[(8)]);
var inst_22937 = (state_22948[(2)]);
var inst_22925 = inst_22928;
var state_22948__$1 = (function (){var statearr_22958 = state_22948;
(statearr_22958[(7)] = inst_22925);

(statearr_22958[(10)] = inst_22937);

return statearr_22958;
})();
var statearr_22959_22983 = state_22948__$1;
(statearr_22959_22983[(2)] = null);

(statearr_22959_22983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (9))){
var inst_22928 = (state_22948[(8)]);
var state_22948__$1 = state_22948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22948__$1,(11),out,inst_22928);
} else {
if((state_val_22949 === (5))){
var inst_22925 = (state_22948[(7)]);
var inst_22928 = (state_22948[(8)]);
var inst_22932 = cljs.core._EQ_.call(null,inst_22928,inst_22925);
var state_22948__$1 = state_22948;
if(inst_22932){
var statearr_22961_22984 = state_22948__$1;
(statearr_22961_22984[(1)] = (8));

} else {
var statearr_22962_22985 = state_22948__$1;
(statearr_22962_22985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (10))){
var inst_22940 = (state_22948[(2)]);
var state_22948__$1 = state_22948;
var statearr_22963_22986 = state_22948__$1;
(statearr_22963_22986[(2)] = inst_22940);

(statearr_22963_22986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22949 === (8))){
var inst_22925 = (state_22948[(7)]);
var tmp22960 = inst_22925;
var inst_22925__$1 = tmp22960;
var state_22948__$1 = (function (){var statearr_22964 = state_22948;
(statearr_22964[(7)] = inst_22925__$1);

return statearr_22964;
})();
var statearr_22965_22987 = state_22948__$1;
(statearr_22965_22987[(2)] = null);

(statearr_22965_22987[(1)] = (2));


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
});})(c__20441__auto___22977,out))
;
return ((function (switch__20376__auto__,c__20441__auto___22977,out){
return (function() {
var cljs$core$async$state_machine__20377__auto__ = null;
var cljs$core$async$state_machine__20377__auto____0 = (function (){
var statearr_22969 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22969[(0)] = cljs$core$async$state_machine__20377__auto__);

(statearr_22969[(1)] = (1));

return statearr_22969;
});
var cljs$core$async$state_machine__20377__auto____1 = (function (state_22948){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_22948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e22970){if((e22970 instanceof Object)){
var ex__20380__auto__ = e22970;
var statearr_22971_22988 = state_22948;
(statearr_22971_22988[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22989 = state_22948;
state_22948 = G__22989;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$state_machine__20377__auto__ = function(state_22948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20377__auto____1.call(this,state_22948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20377__auto____0;
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20377__auto____1;
return cljs$core$async$state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto___22977,out))
})();
var state__20443__auto__ = (function (){var statearr_22972 = f__20442__auto__.call(null);
(statearr_22972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___22977);

return statearr_22972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto___22977,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22990 = [];
var len__19330__auto___23060 = arguments.length;
var i__19331__auto___23061 = (0);
while(true){
if((i__19331__auto___23061 < len__19330__auto___23060)){
args22990.push((arguments[i__19331__auto___23061]));

var G__23062 = (i__19331__auto___23061 + (1));
i__19331__auto___23061 = G__23062;
continue;
} else {
}
break;
}

var G__22992 = args22990.length;
switch (G__22992) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22990.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20441__auto___23064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto___23064,out){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto___23064,out){
return (function (state_23030){
var state_val_23031 = (state_23030[(1)]);
if((state_val_23031 === (7))){
var inst_23026 = (state_23030[(2)]);
var state_23030__$1 = state_23030;
var statearr_23032_23065 = state_23030__$1;
(statearr_23032_23065[(2)] = inst_23026);

(statearr_23032_23065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23031 === (1))){
var inst_22993 = (new Array(n));
var inst_22994 = inst_22993;
var inst_22995 = (0);
var state_23030__$1 = (function (){var statearr_23033 = state_23030;
(statearr_23033[(7)] = inst_22995);

(statearr_23033[(8)] = inst_22994);

return statearr_23033;
})();
var statearr_23034_23066 = state_23030__$1;
(statearr_23034_23066[(2)] = null);

(statearr_23034_23066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23031 === (4))){
var inst_22998 = (state_23030[(9)]);
var inst_22998__$1 = (state_23030[(2)]);
var inst_22999 = (inst_22998__$1 == null);
var inst_23000 = cljs.core.not.call(null,inst_22999);
var state_23030__$1 = (function (){var statearr_23035 = state_23030;
(statearr_23035[(9)] = inst_22998__$1);

return statearr_23035;
})();
if(inst_23000){
var statearr_23036_23067 = state_23030__$1;
(statearr_23036_23067[(1)] = (5));

} else {
var statearr_23037_23068 = state_23030__$1;
(statearr_23037_23068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23031 === (15))){
var inst_23020 = (state_23030[(2)]);
var state_23030__$1 = state_23030;
var statearr_23038_23069 = state_23030__$1;
(statearr_23038_23069[(2)] = inst_23020);

(statearr_23038_23069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23031 === (13))){
var state_23030__$1 = state_23030;
var statearr_23039_23070 = state_23030__$1;
(statearr_23039_23070[(2)] = null);

(statearr_23039_23070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23031 === (6))){
var inst_22995 = (state_23030[(7)]);
var inst_23016 = (inst_22995 > (0));
var state_23030__$1 = state_23030;
if(cljs.core.truth_(inst_23016)){
var statearr_23040_23071 = state_23030__$1;
(statearr_23040_23071[(1)] = (12));

} else {
var statearr_23041_23072 = state_23030__$1;
(statearr_23041_23072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23031 === (3))){
var inst_23028 = (state_23030[(2)]);
var state_23030__$1 = state_23030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23030__$1,inst_23028);
} else {
if((state_val_23031 === (12))){
var inst_22994 = (state_23030[(8)]);
var inst_23018 = cljs.core.vec.call(null,inst_22994);
var state_23030__$1 = state_23030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23030__$1,(15),out,inst_23018);
} else {
if((state_val_23031 === (2))){
var state_23030__$1 = state_23030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23030__$1,(4),ch);
} else {
if((state_val_23031 === (11))){
var inst_23010 = (state_23030[(2)]);
var inst_23011 = (new Array(n));
var inst_22994 = inst_23011;
var inst_22995 = (0);
var state_23030__$1 = (function (){var statearr_23042 = state_23030;
(statearr_23042[(7)] = inst_22995);

(statearr_23042[(8)] = inst_22994);

(statearr_23042[(10)] = inst_23010);

return statearr_23042;
})();
var statearr_23043_23073 = state_23030__$1;
(statearr_23043_23073[(2)] = null);

(statearr_23043_23073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23031 === (9))){
var inst_22994 = (state_23030[(8)]);
var inst_23008 = cljs.core.vec.call(null,inst_22994);
var state_23030__$1 = state_23030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23030__$1,(11),out,inst_23008);
} else {
if((state_val_23031 === (5))){
var inst_22995 = (state_23030[(7)]);
var inst_22994 = (state_23030[(8)]);
var inst_23003 = (state_23030[(11)]);
var inst_22998 = (state_23030[(9)]);
var inst_23002 = (inst_22994[inst_22995] = inst_22998);
var inst_23003__$1 = (inst_22995 + (1));
var inst_23004 = (inst_23003__$1 < n);
var state_23030__$1 = (function (){var statearr_23044 = state_23030;
(statearr_23044[(12)] = inst_23002);

(statearr_23044[(11)] = inst_23003__$1);

return statearr_23044;
})();
if(cljs.core.truth_(inst_23004)){
var statearr_23045_23074 = state_23030__$1;
(statearr_23045_23074[(1)] = (8));

} else {
var statearr_23046_23075 = state_23030__$1;
(statearr_23046_23075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23031 === (14))){
var inst_23023 = (state_23030[(2)]);
var inst_23024 = cljs.core.async.close_BANG_.call(null,out);
var state_23030__$1 = (function (){var statearr_23048 = state_23030;
(statearr_23048[(13)] = inst_23023);

return statearr_23048;
})();
var statearr_23049_23076 = state_23030__$1;
(statearr_23049_23076[(2)] = inst_23024);

(statearr_23049_23076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23031 === (10))){
var inst_23014 = (state_23030[(2)]);
var state_23030__$1 = state_23030;
var statearr_23050_23077 = state_23030__$1;
(statearr_23050_23077[(2)] = inst_23014);

(statearr_23050_23077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23031 === (8))){
var inst_22994 = (state_23030[(8)]);
var inst_23003 = (state_23030[(11)]);
var tmp23047 = inst_22994;
var inst_22994__$1 = tmp23047;
var inst_22995 = inst_23003;
var state_23030__$1 = (function (){var statearr_23051 = state_23030;
(statearr_23051[(7)] = inst_22995);

(statearr_23051[(8)] = inst_22994__$1);

return statearr_23051;
})();
var statearr_23052_23078 = state_23030__$1;
(statearr_23052_23078[(2)] = null);

(statearr_23052_23078[(1)] = (2));


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
});})(c__20441__auto___23064,out))
;
return ((function (switch__20376__auto__,c__20441__auto___23064,out){
return (function() {
var cljs$core$async$state_machine__20377__auto__ = null;
var cljs$core$async$state_machine__20377__auto____0 = (function (){
var statearr_23056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23056[(0)] = cljs$core$async$state_machine__20377__auto__);

(statearr_23056[(1)] = (1));

return statearr_23056;
});
var cljs$core$async$state_machine__20377__auto____1 = (function (state_23030){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_23030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e23057){if((e23057 instanceof Object)){
var ex__20380__auto__ = e23057;
var statearr_23058_23079 = state_23030;
(statearr_23058_23079[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23080 = state_23030;
state_23030 = G__23080;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$state_machine__20377__auto__ = function(state_23030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20377__auto____1.call(this,state_23030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20377__auto____0;
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20377__auto____1;
return cljs$core$async$state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto___23064,out))
})();
var state__20443__auto__ = (function (){var statearr_23059 = f__20442__auto__.call(null);
(statearr_23059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___23064);

return statearr_23059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto___23064,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23081 = [];
var len__19330__auto___23155 = arguments.length;
var i__19331__auto___23156 = (0);
while(true){
if((i__19331__auto___23156 < len__19330__auto___23155)){
args23081.push((arguments[i__19331__auto___23156]));

var G__23157 = (i__19331__auto___23156 + (1));
i__19331__auto___23156 = G__23157;
continue;
} else {
}
break;
}

var G__23083 = args23081.length;
switch (G__23083) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23081.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20441__auto___23159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20441__auto___23159,out){
return (function (){
var f__20442__auto__ = (function (){var switch__20376__auto__ = ((function (c__20441__auto___23159,out){
return (function (state_23125){
var state_val_23126 = (state_23125[(1)]);
if((state_val_23126 === (7))){
var inst_23121 = (state_23125[(2)]);
var state_23125__$1 = state_23125;
var statearr_23127_23160 = state_23125__$1;
(statearr_23127_23160[(2)] = inst_23121);

(statearr_23127_23160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (1))){
var inst_23084 = [];
var inst_23085 = inst_23084;
var inst_23086 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23125__$1 = (function (){var statearr_23128 = state_23125;
(statearr_23128[(7)] = inst_23086);

(statearr_23128[(8)] = inst_23085);

return statearr_23128;
})();
var statearr_23129_23161 = state_23125__$1;
(statearr_23129_23161[(2)] = null);

(statearr_23129_23161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (4))){
var inst_23089 = (state_23125[(9)]);
var inst_23089__$1 = (state_23125[(2)]);
var inst_23090 = (inst_23089__$1 == null);
var inst_23091 = cljs.core.not.call(null,inst_23090);
var state_23125__$1 = (function (){var statearr_23130 = state_23125;
(statearr_23130[(9)] = inst_23089__$1);

return statearr_23130;
})();
if(inst_23091){
var statearr_23131_23162 = state_23125__$1;
(statearr_23131_23162[(1)] = (5));

} else {
var statearr_23132_23163 = state_23125__$1;
(statearr_23132_23163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (15))){
var inst_23115 = (state_23125[(2)]);
var state_23125__$1 = state_23125;
var statearr_23133_23164 = state_23125__$1;
(statearr_23133_23164[(2)] = inst_23115);

(statearr_23133_23164[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (13))){
var state_23125__$1 = state_23125;
var statearr_23134_23165 = state_23125__$1;
(statearr_23134_23165[(2)] = null);

(statearr_23134_23165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (6))){
var inst_23085 = (state_23125[(8)]);
var inst_23110 = inst_23085.length;
var inst_23111 = (inst_23110 > (0));
var state_23125__$1 = state_23125;
if(cljs.core.truth_(inst_23111)){
var statearr_23135_23166 = state_23125__$1;
(statearr_23135_23166[(1)] = (12));

} else {
var statearr_23136_23167 = state_23125__$1;
(statearr_23136_23167[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (3))){
var inst_23123 = (state_23125[(2)]);
var state_23125__$1 = state_23125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23125__$1,inst_23123);
} else {
if((state_val_23126 === (12))){
var inst_23085 = (state_23125[(8)]);
var inst_23113 = cljs.core.vec.call(null,inst_23085);
var state_23125__$1 = state_23125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23125__$1,(15),out,inst_23113);
} else {
if((state_val_23126 === (2))){
var state_23125__$1 = state_23125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23125__$1,(4),ch);
} else {
if((state_val_23126 === (11))){
var inst_23089 = (state_23125[(9)]);
var inst_23093 = (state_23125[(10)]);
var inst_23103 = (state_23125[(2)]);
var inst_23104 = [];
var inst_23105 = inst_23104.push(inst_23089);
var inst_23085 = inst_23104;
var inst_23086 = inst_23093;
var state_23125__$1 = (function (){var statearr_23137 = state_23125;
(statearr_23137[(7)] = inst_23086);

(statearr_23137[(8)] = inst_23085);

(statearr_23137[(11)] = inst_23103);

(statearr_23137[(12)] = inst_23105);

return statearr_23137;
})();
var statearr_23138_23168 = state_23125__$1;
(statearr_23138_23168[(2)] = null);

(statearr_23138_23168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (9))){
var inst_23085 = (state_23125[(8)]);
var inst_23101 = cljs.core.vec.call(null,inst_23085);
var state_23125__$1 = state_23125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23125__$1,(11),out,inst_23101);
} else {
if((state_val_23126 === (5))){
var inst_23089 = (state_23125[(9)]);
var inst_23086 = (state_23125[(7)]);
var inst_23093 = (state_23125[(10)]);
var inst_23093__$1 = f.call(null,inst_23089);
var inst_23094 = cljs.core._EQ_.call(null,inst_23093__$1,inst_23086);
var inst_23095 = cljs.core.keyword_identical_QMARK_.call(null,inst_23086,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23096 = (inst_23094) || (inst_23095);
var state_23125__$1 = (function (){var statearr_23139 = state_23125;
(statearr_23139[(10)] = inst_23093__$1);

return statearr_23139;
})();
if(cljs.core.truth_(inst_23096)){
var statearr_23140_23169 = state_23125__$1;
(statearr_23140_23169[(1)] = (8));

} else {
var statearr_23141_23170 = state_23125__$1;
(statearr_23141_23170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (14))){
var inst_23118 = (state_23125[(2)]);
var inst_23119 = cljs.core.async.close_BANG_.call(null,out);
var state_23125__$1 = (function (){var statearr_23143 = state_23125;
(statearr_23143[(13)] = inst_23118);

return statearr_23143;
})();
var statearr_23144_23171 = state_23125__$1;
(statearr_23144_23171[(2)] = inst_23119);

(statearr_23144_23171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (10))){
var inst_23108 = (state_23125[(2)]);
var state_23125__$1 = state_23125;
var statearr_23145_23172 = state_23125__$1;
(statearr_23145_23172[(2)] = inst_23108);

(statearr_23145_23172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23126 === (8))){
var inst_23089 = (state_23125[(9)]);
var inst_23085 = (state_23125[(8)]);
var inst_23093 = (state_23125[(10)]);
var inst_23098 = inst_23085.push(inst_23089);
var tmp23142 = inst_23085;
var inst_23085__$1 = tmp23142;
var inst_23086 = inst_23093;
var state_23125__$1 = (function (){var statearr_23146 = state_23125;
(statearr_23146[(7)] = inst_23086);

(statearr_23146[(8)] = inst_23085__$1);

(statearr_23146[(14)] = inst_23098);

return statearr_23146;
})();
var statearr_23147_23173 = state_23125__$1;
(statearr_23147_23173[(2)] = null);

(statearr_23147_23173[(1)] = (2));


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
});})(c__20441__auto___23159,out))
;
return ((function (switch__20376__auto__,c__20441__auto___23159,out){
return (function() {
var cljs$core$async$state_machine__20377__auto__ = null;
var cljs$core$async$state_machine__20377__auto____0 = (function (){
var statearr_23151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23151[(0)] = cljs$core$async$state_machine__20377__auto__);

(statearr_23151[(1)] = (1));

return statearr_23151;
});
var cljs$core$async$state_machine__20377__auto____1 = (function (state_23125){
while(true){
var ret_value__20378__auto__ = (function (){try{while(true){
var result__20379__auto__ = switch__20376__auto__.call(null,state_23125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20379__auto__;
}
break;
}
}catch (e23152){if((e23152 instanceof Object)){
var ex__20380__auto__ = e23152;
var statearr_23153_23174 = state_23125;
(statearr_23153_23174[(5)] = ex__20380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23175 = state_23125;
state_23125 = G__23175;
continue;
} else {
return ret_value__20378__auto__;
}
break;
}
});
cljs$core$async$state_machine__20377__auto__ = function(state_23125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20377__auto____1.call(this,state_23125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20377__auto____0;
cljs$core$async$state_machine__20377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20377__auto____1;
return cljs$core$async$state_machine__20377__auto__;
})()
;})(switch__20376__auto__,c__20441__auto___23159,out))
})();
var state__20443__auto__ = (function (){var statearr_23154 = f__20442__auto__.call(null);
(statearr_23154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20441__auto___23159);

return statearr_23154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20443__auto__);
});})(c__20441__auto___23159,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map