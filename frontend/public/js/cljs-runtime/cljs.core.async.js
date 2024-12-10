goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14550 = (function (f,blockable,meta14551){
this.f = f;
this.blockable = blockable;
this.meta14551 = meta14551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14552,meta14551__$1){
var self__ = this;
var _14552__$1 = this;
return (new cljs.core.async.t_cljs$core$async14550(self__.f,self__.blockable,meta14551__$1));
}));

(cljs.core.async.t_cljs$core$async14550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14552){
var self__ = this;
var _14552__$1 = this;
return self__.meta14551;
}));

(cljs.core.async.t_cljs$core$async14550.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14550.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14550.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14550.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14550.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14551","meta14551",-1507166416,null)], null);
}));

(cljs.core.async.t_cljs$core$async14550.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14550");

(cljs.core.async.t_cljs$core$async14550.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14550");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14550.
 */
cljs.core.async.__GT_t_cljs$core$async14550 = (function cljs$core$async$__GT_t_cljs$core$async14550(f,blockable,meta14551){
return (new cljs.core.async.t_cljs$core$async14550(f,blockable,meta14551));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14546 = arguments.length;
switch (G__14546) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14550(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__14563 = arguments.length;
switch (G__14563) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14566 = arguments.length;
switch (G__14566) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__14569 = arguments.length;
switch (G__14569) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17739 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17739) : fn1.call(null, val_17739));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17739) : fn1.call(null, val_17739));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14577 = arguments.length;
switch (G__14577) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17750 = n;
var x_17751 = (0);
while(true){
if((x_17751 < n__5593__auto___17750)){
(a[x_17751] = x_17751);

var G__17752 = (x_17751 + (1));
x_17751 = G__17752;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14582 = (function (flag,meta14583){
this.flag = flag;
this.meta14583 = meta14583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14584,meta14583__$1){
var self__ = this;
var _14584__$1 = this;
return (new cljs.core.async.t_cljs$core$async14582(self__.flag,meta14583__$1));
}));

(cljs.core.async.t_cljs$core$async14582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14584){
var self__ = this;
var _14584__$1 = this;
return self__.meta14583;
}));

(cljs.core.async.t_cljs$core$async14582.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14582.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14583","meta14583",1344479000,null)], null);
}));

(cljs.core.async.t_cljs$core$async14582.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14582");

(cljs.core.async.t_cljs$core$async14582.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14582");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14582.
 */
cljs.core.async.__GT_t_cljs$core$async14582 = (function cljs$core$async$__GT_t_cljs$core$async14582(flag,meta14583){
return (new cljs.core.async.t_cljs$core$async14582(flag,meta14583));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14582(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14587 = (function (flag,cb,meta14588){
this.flag = flag;
this.cb = cb;
this.meta14588 = meta14588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14589,meta14588__$1){
var self__ = this;
var _14589__$1 = this;
return (new cljs.core.async.t_cljs$core$async14587(self__.flag,self__.cb,meta14588__$1));
}));

(cljs.core.async.t_cljs$core$async14587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14589){
var self__ = this;
var _14589__$1 = this;
return self__.meta14588;
}));

(cljs.core.async.t_cljs$core$async14587.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14587.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14588","meta14588",-474434579,null)], null);
}));

(cljs.core.async.t_cljs$core$async14587.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14587");

(cljs.core.async.t_cljs$core$async14587.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14587");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14587.
 */
cljs.core.async.__GT_t_cljs$core$async14587 = (function cljs$core$async$__GT_t_cljs$core$async14587(flag,cb,meta14588){
return (new cljs.core.async.t_cljs$core$async14587(flag,cb,meta14588));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14587(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14603_SHARP_){
var G__14628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14603_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14628) : fret.call(null, G__14628));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14604_SHARP_){
var G__14629 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14604_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14629) : fret.call(null, G__14629));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17783 = (i + (1));
i = G__17783;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5732__auto__ = [];
var len__5726__auto___17784 = arguments.length;
var i__5727__auto___17785 = (0);
while(true){
if((i__5727__auto___17785 < len__5726__auto___17784)){
args__5732__auto__.push((arguments[i__5727__auto___17785]));

var G__17786 = (i__5727__auto___17785 + (1));
i__5727__auto___17785 = G__17786;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14653){
var map__14654 = p__14653;
var map__14654__$1 = cljs.core.__destructure_map(map__14654);
var opts = map__14654__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14644){
var G__14645 = cljs.core.first(seq14644);
var seq14644__$1 = cljs.core.next(seq14644);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14645,seq14644__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14664 = arguments.length;
switch (G__14664) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14468__auto___17802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_14778){
var state_val_14786 = (state_14778[(1)]);
if((state_val_14786 === (7))){
var inst_14751 = (state_14778[(2)]);
var state_14778__$1 = state_14778;
var statearr_14813_17803 = state_14778__$1;
(statearr_14813_17803[(2)] = inst_14751);

(statearr_14813_17803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14786 === (1))){
var state_14778__$1 = state_14778;
var statearr_14814_17805 = state_14778__$1;
(statearr_14814_17805[(2)] = null);

(statearr_14814_17805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14786 === (4))){
var inst_14693 = (state_14778[(7)]);
var inst_14693__$1 = (state_14778[(2)]);
var inst_14718 = (inst_14693__$1 == null);
var state_14778__$1 = (function (){var statearr_14820 = state_14778;
(statearr_14820[(7)] = inst_14693__$1);

return statearr_14820;
})();
if(cljs.core.truth_(inst_14718)){
var statearr_14823_17807 = state_14778__$1;
(statearr_14823_17807[(1)] = (5));

} else {
var statearr_14824_17809 = state_14778__$1;
(statearr_14824_17809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14786 === (13))){
var state_14778__$1 = state_14778;
var statearr_14825_17813 = state_14778__$1;
(statearr_14825_17813[(2)] = null);

(statearr_14825_17813[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14786 === (6))){
var inst_14693 = (state_14778[(7)]);
var state_14778__$1 = state_14778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14778__$1,(11),to,inst_14693);
} else {
if((state_val_14786 === (3))){
var inst_14760 = (state_14778[(2)]);
var state_14778__$1 = state_14778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14778__$1,inst_14760);
} else {
if((state_val_14786 === (12))){
var state_14778__$1 = state_14778;
var statearr_14828_17823 = state_14778__$1;
(statearr_14828_17823[(2)] = null);

(statearr_14828_17823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14786 === (2))){
var state_14778__$1 = state_14778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14778__$1,(4),from);
} else {
if((state_val_14786 === (11))){
var inst_14731 = (state_14778[(2)]);
var state_14778__$1 = state_14778;
if(cljs.core.truth_(inst_14731)){
var statearr_14830_17827 = state_14778__$1;
(statearr_14830_17827[(1)] = (12));

} else {
var statearr_14831_17829 = state_14778__$1;
(statearr_14831_17829[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14786 === (9))){
var state_14778__$1 = state_14778;
var statearr_14835_17834 = state_14778__$1;
(statearr_14835_17834[(2)] = null);

(statearr_14835_17834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14786 === (5))){
var state_14778__$1 = state_14778;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14838_17835 = state_14778__$1;
(statearr_14838_17835[(1)] = (8));

} else {
var statearr_14839_17836 = state_14778__$1;
(statearr_14839_17836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14786 === (14))){
var inst_14749 = (state_14778[(2)]);
var state_14778__$1 = state_14778;
var statearr_14840_17837 = state_14778__$1;
(statearr_14840_17837[(2)] = inst_14749);

(statearr_14840_17837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14786 === (10))){
var inst_14728 = (state_14778[(2)]);
var state_14778__$1 = state_14778;
var statearr_14841_17838 = state_14778__$1;
(statearr_14841_17838[(2)] = inst_14728);

(statearr_14841_17838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14786 === (8))){
var inst_14722 = cljs.core.async.close_BANG_(to);
var state_14778__$1 = state_14778;
var statearr_14842_17839 = state_14778__$1;
(statearr_14842_17839[(2)] = inst_14722);

(statearr_14842_17839[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__14124__auto__ = null;
var cljs$core$async$state_machine__14124__auto____0 = (function (){
var statearr_14843 = [null,null,null,null,null,null,null,null];
(statearr_14843[(0)] = cljs$core$async$state_machine__14124__auto__);

(statearr_14843[(1)] = (1));

return statearr_14843;
});
var cljs$core$async$state_machine__14124__auto____1 = (function (state_14778){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_14778);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e14844){var ex__14127__auto__ = e14844;
var statearr_14845_17844 = state_14778;
(statearr_14845_17844[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_14778[(4)]))){
var statearr_14847_17845 = state_14778;
(statearr_14847_17845[(1)] = cljs.core.first((state_14778[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17847 = state_14778;
state_14778 = G__17847;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$state_machine__14124__auto__ = function(state_14778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14124__auto____1.call(this,state_14778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14124__auto____0;
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14124__auto____1;
return cljs$core$async$state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_14849 = f__14469__auto__();
(statearr_14849[(6)] = c__14468__auto___17802);

return statearr_14849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14865){
var vec__14867 = p__14865;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14867,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14867,(1),null);
var job = vec__14867;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14468__auto___17850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_14876){
var state_val_14877 = (state_14876[(1)]);
if((state_val_14877 === (1))){
var state_14876__$1 = state_14876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14876__$1,(2),res,v);
} else {
if((state_val_14877 === (2))){
var inst_14873 = (state_14876[(2)]);
var inst_14874 = cljs.core.async.close_BANG_(res);
var state_14876__$1 = (function (){var statearr_14883 = state_14876;
(statearr_14883[(7)] = inst_14873);

return statearr_14883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14876__$1,inst_14874);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____0 = (function (){
var statearr_14889 = [null,null,null,null,null,null,null,null];
(statearr_14889[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__);

(statearr_14889[(1)] = (1));

return statearr_14889;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____1 = (function (state_14876){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_14876);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e14894){var ex__14127__auto__ = e14894;
var statearr_14895_17854 = state_14876;
(statearr_14895_17854[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_14876[(4)]))){
var statearr_14901_17855 = state_14876;
(statearr_14901_17855[(1)] = cljs.core.first((state_14876[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17856 = state_14876;
state_14876 = G__17856;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__ = function(state_14876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____1.call(this,state_14876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_14908 = f__14469__auto__();
(statearr_14908[(6)] = c__14468__auto___17850);

return statearr_14908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14915){
var vec__14916 = p__14915;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14916,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14916,(1),null);
var job = vec__14916;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___17857 = n;
var __17858 = (0);
while(true){
if((__17858 < n__5593__auto___17857)){
var G__14924_17859 = type;
var G__14924_17860__$1 = (((G__14924_17859 instanceof cljs.core.Keyword))?G__14924_17859.fqn:null);
switch (G__14924_17860__$1) {
case "compute":
var c__14468__auto___17868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17858,c__14468__auto___17868,G__14924_17859,G__14924_17860__$1,n__5593__auto___17857,jobs,results,process__$1,async){
return (function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = ((function (__17858,c__14468__auto___17868,G__14924_17859,G__14924_17860__$1,n__5593__auto___17857,jobs,results,process__$1,async){
return (function (state_14941){
var state_val_14942 = (state_14941[(1)]);
if((state_val_14942 === (1))){
var state_14941__$1 = state_14941;
var statearr_14944_17877 = state_14941__$1;
(statearr_14944_17877[(2)] = null);

(statearr_14944_17877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14942 === (2))){
var state_14941__$1 = state_14941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14941__$1,(4),jobs);
} else {
if((state_val_14942 === (3))){
var inst_14936 = (state_14941[(2)]);
var state_14941__$1 = state_14941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14941__$1,inst_14936);
} else {
if((state_val_14942 === (4))){
var inst_14928 = (state_14941[(2)]);
var inst_14929 = process__$1(inst_14928);
var state_14941__$1 = state_14941;
if(cljs.core.truth_(inst_14929)){
var statearr_14954_17882 = state_14941__$1;
(statearr_14954_17882[(1)] = (5));

} else {
var statearr_14956_17883 = state_14941__$1;
(statearr_14956_17883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14942 === (5))){
var state_14941__$1 = state_14941;
var statearr_14957_17887 = state_14941__$1;
(statearr_14957_17887[(2)] = null);

(statearr_14957_17887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14942 === (6))){
var state_14941__$1 = state_14941;
var statearr_14959_17888 = state_14941__$1;
(statearr_14959_17888[(2)] = null);

(statearr_14959_17888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14942 === (7))){
var inst_14934 = (state_14941[(2)]);
var state_14941__$1 = state_14941;
var statearr_14960_17889 = state_14941__$1;
(statearr_14960_17889[(2)] = inst_14934);

(statearr_14960_17889[(1)] = (3));


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
});})(__17858,c__14468__auto___17868,G__14924_17859,G__14924_17860__$1,n__5593__auto___17857,jobs,results,process__$1,async))
;
return ((function (__17858,switch__14123__auto__,c__14468__auto___17868,G__14924_17859,G__14924_17860__$1,n__5593__auto___17857,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____0 = (function (){
var statearr_14963 = [null,null,null,null,null,null,null];
(statearr_14963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__);

(statearr_14963[(1)] = (1));

return statearr_14963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____1 = (function (state_14941){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_14941);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e14966){var ex__14127__auto__ = e14966;
var statearr_14967_17894 = state_14941;
(statearr_14967_17894[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_14941[(4)]))){
var statearr_14968_17895 = state_14941;
(statearr_14968_17895[(1)] = cljs.core.first((state_14941[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17896 = state_14941;
state_14941 = G__17896;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__ = function(state_14941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____1.call(this,state_14941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__;
})()
;})(__17858,switch__14123__auto__,c__14468__auto___17868,G__14924_17859,G__14924_17860__$1,n__5593__auto___17857,jobs,results,process__$1,async))
})();
var state__14470__auto__ = (function (){var statearr_14971 = f__14469__auto__();
(statearr_14971[(6)] = c__14468__auto___17868);

return statearr_14971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
});})(__17858,c__14468__auto___17868,G__14924_17859,G__14924_17860__$1,n__5593__auto___17857,jobs,results,process__$1,async))
);


break;
case "async":
var c__14468__auto___17897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17858,c__14468__auto___17897,G__14924_17859,G__14924_17860__$1,n__5593__auto___17857,jobs,results,process__$1,async){
return (function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = ((function (__17858,c__14468__auto___17897,G__14924_17859,G__14924_17860__$1,n__5593__auto___17857,jobs,results,process__$1,async){
return (function (state_14984){
var state_val_14985 = (state_14984[(1)]);
if((state_val_14985 === (1))){
var state_14984__$1 = state_14984;
var statearr_14989_17898 = state_14984__$1;
(statearr_14989_17898[(2)] = null);

(statearr_14989_17898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (2))){
var state_14984__$1 = state_14984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14984__$1,(4),jobs);
} else {
if((state_val_14985 === (3))){
var inst_14982 = (state_14984[(2)]);
var state_14984__$1 = state_14984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14984__$1,inst_14982);
} else {
if((state_val_14985 === (4))){
var inst_14974 = (state_14984[(2)]);
var inst_14975 = async(inst_14974);
var state_14984__$1 = state_14984;
if(cljs.core.truth_(inst_14975)){
var statearr_14994_17904 = state_14984__$1;
(statearr_14994_17904[(1)] = (5));

} else {
var statearr_14995_17905 = state_14984__$1;
(statearr_14995_17905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (5))){
var state_14984__$1 = state_14984;
var statearr_14998_17906 = state_14984__$1;
(statearr_14998_17906[(2)] = null);

(statearr_14998_17906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (6))){
var state_14984__$1 = state_14984;
var statearr_15002_17907 = state_14984__$1;
(statearr_15002_17907[(2)] = null);

(statearr_15002_17907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (7))){
var inst_14980 = (state_14984[(2)]);
var state_14984__$1 = state_14984;
var statearr_15003_17908 = state_14984__$1;
(statearr_15003_17908[(2)] = inst_14980);

(statearr_15003_17908[(1)] = (3));


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
});})(__17858,c__14468__auto___17897,G__14924_17859,G__14924_17860__$1,n__5593__auto___17857,jobs,results,process__$1,async))
;
return ((function (__17858,switch__14123__auto__,c__14468__auto___17897,G__14924_17859,G__14924_17860__$1,n__5593__auto___17857,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____0 = (function (){
var statearr_15004 = [null,null,null,null,null,null,null];
(statearr_15004[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__);

(statearr_15004[(1)] = (1));

return statearr_15004;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____1 = (function (state_14984){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_14984);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e15006){var ex__14127__auto__ = e15006;
var statearr_15007_17920 = state_14984;
(statearr_15007_17920[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_14984[(4)]))){
var statearr_15010_17921 = state_14984;
(statearr_15010_17921[(1)] = cljs.core.first((state_14984[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17924 = state_14984;
state_14984 = G__17924;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__ = function(state_14984){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____1.call(this,state_14984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__;
})()
;})(__17858,switch__14123__auto__,c__14468__auto___17897,G__14924_17859,G__14924_17860__$1,n__5593__auto___17857,jobs,results,process__$1,async))
})();
var state__14470__auto__ = (function (){var statearr_15022 = f__14469__auto__();
(statearr_15022[(6)] = c__14468__auto___17897);

return statearr_15022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
});})(__17858,c__14468__auto___17897,G__14924_17859,G__14924_17860__$1,n__5593__auto___17857,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14924_17860__$1)].join('')));

}

var G__17926 = (__17858 + (1));
__17858 = G__17926;
continue;
} else {
}
break;
}

var c__14468__auto___17927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_15049){
var state_val_15050 = (state_15049[(1)]);
if((state_val_15050 === (7))){
var inst_15045 = (state_15049[(2)]);
var state_15049__$1 = state_15049;
var statearr_15056_17929 = state_15049__$1;
(statearr_15056_17929[(2)] = inst_15045);

(statearr_15056_17929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (1))){
var state_15049__$1 = state_15049;
var statearr_15058_17940 = state_15049__$1;
(statearr_15058_17940[(2)] = null);

(statearr_15058_17940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (4))){
var inst_15026 = (state_15049[(7)]);
var inst_15026__$1 = (state_15049[(2)]);
var inst_15027 = (inst_15026__$1 == null);
var state_15049__$1 = (function (){var statearr_15060 = state_15049;
(statearr_15060[(7)] = inst_15026__$1);

return statearr_15060;
})();
if(cljs.core.truth_(inst_15027)){
var statearr_15062_17944 = state_15049__$1;
(statearr_15062_17944[(1)] = (5));

} else {
var statearr_15063_17945 = state_15049__$1;
(statearr_15063_17945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (6))){
var inst_15033 = (state_15049[(8)]);
var inst_15026 = (state_15049[(7)]);
var inst_15033__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15036 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15037 = [inst_15026,inst_15033__$1];
var inst_15038 = (new cljs.core.PersistentVector(null,2,(5),inst_15036,inst_15037,null));
var state_15049__$1 = (function (){var statearr_15064 = state_15049;
(statearr_15064[(8)] = inst_15033__$1);

return statearr_15064;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15049__$1,(8),jobs,inst_15038);
} else {
if((state_val_15050 === (3))){
var inst_15047 = (state_15049[(2)]);
var state_15049__$1 = state_15049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15049__$1,inst_15047);
} else {
if((state_val_15050 === (2))){
var state_15049__$1 = state_15049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15049__$1,(4),from);
} else {
if((state_val_15050 === (9))){
var inst_15042 = (state_15049[(2)]);
var state_15049__$1 = (function (){var statearr_15065 = state_15049;
(statearr_15065[(9)] = inst_15042);

return statearr_15065;
})();
var statearr_15066_17963 = state_15049__$1;
(statearr_15066_17963[(2)] = null);

(statearr_15066_17963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (5))){
var inst_15029 = cljs.core.async.close_BANG_(jobs);
var state_15049__$1 = state_15049;
var statearr_15071_17966 = state_15049__$1;
(statearr_15071_17966[(2)] = inst_15029);

(statearr_15071_17966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (8))){
var inst_15033 = (state_15049[(8)]);
var inst_15040 = (state_15049[(2)]);
var state_15049__$1 = (function (){var statearr_15076 = state_15049;
(statearr_15076[(10)] = inst_15040);

return statearr_15076;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15049__$1,(9),results,inst_15033);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____0 = (function (){
var statearr_15077 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15077[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__);

(statearr_15077[(1)] = (1));

return statearr_15077;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____1 = (function (state_15049){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_15049);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e15082){var ex__14127__auto__ = e15082;
var statearr_15083_17973 = state_15049;
(statearr_15083_17973[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_15049[(4)]))){
var statearr_15084_17974 = state_15049;
(statearr_15084_17974[(1)] = cljs.core.first((state_15049[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17975 = state_15049;
state_15049 = G__17975;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__ = function(state_15049){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____1.call(this,state_15049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_15093 = f__14469__auto__();
(statearr_15093[(6)] = c__14468__auto___17927);

return statearr_15093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


var c__14468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_15137){
var state_val_15138 = (state_15137[(1)]);
if((state_val_15138 === (7))){
var inst_15133 = (state_15137[(2)]);
var state_15137__$1 = state_15137;
var statearr_15144_17976 = state_15137__$1;
(statearr_15144_17976[(2)] = inst_15133);

(statearr_15144_17976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15138 === (20))){
var state_15137__$1 = state_15137;
var statearr_15148_17977 = state_15137__$1;
(statearr_15148_17977[(2)] = null);

(statearr_15148_17977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15138 === (1))){
var state_15137__$1 = state_15137;
var statearr_15153_17978 = state_15137__$1;
(statearr_15153_17978[(2)] = null);

(statearr_15153_17978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15138 === (4))){
var inst_15096 = (state_15137[(7)]);
var inst_15096__$1 = (state_15137[(2)]);
var inst_15097 = (inst_15096__$1 == null);
var state_15137__$1 = (function (){var statearr_15154 = state_15137;
(statearr_15154[(7)] = inst_15096__$1);

return statearr_15154;
})();
if(cljs.core.truth_(inst_15097)){
var statearr_15156_17979 = state_15137__$1;
(statearr_15156_17979[(1)] = (5));

} else {
var statearr_15157_17983 = state_15137__$1;
(statearr_15157_17983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15138 === (15))){
var inst_15113 = (state_15137[(8)]);
var state_15137__$1 = state_15137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15137__$1,(18),to,inst_15113);
} else {
if((state_val_15138 === (21))){
var inst_15128 = (state_15137[(2)]);
var state_15137__$1 = state_15137;
var statearr_15159_17984 = state_15137__$1;
(statearr_15159_17984[(2)] = inst_15128);

(statearr_15159_17984[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15138 === (13))){
var inst_15130 = (state_15137[(2)]);
var state_15137__$1 = (function (){var statearr_15162 = state_15137;
(statearr_15162[(9)] = inst_15130);

return statearr_15162;
})();
var statearr_15164_17986 = state_15137__$1;
(statearr_15164_17986[(2)] = null);

(statearr_15164_17986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15138 === (6))){
var inst_15096 = (state_15137[(7)]);
var state_15137__$1 = state_15137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15137__$1,(11),inst_15096);
} else {
if((state_val_15138 === (17))){
var inst_15123 = (state_15137[(2)]);
var state_15137__$1 = state_15137;
if(cljs.core.truth_(inst_15123)){
var statearr_15173_17989 = state_15137__$1;
(statearr_15173_17989[(1)] = (19));

} else {
var statearr_15174_17990 = state_15137__$1;
(statearr_15174_17990[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15138 === (3))){
var inst_15135 = (state_15137[(2)]);
var state_15137__$1 = state_15137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15137__$1,inst_15135);
} else {
if((state_val_15138 === (12))){
var inst_15109 = (state_15137[(10)]);
var state_15137__$1 = state_15137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15137__$1,(14),inst_15109);
} else {
if((state_val_15138 === (2))){
var state_15137__$1 = state_15137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15137__$1,(4),results);
} else {
if((state_val_15138 === (19))){
var state_15137__$1 = state_15137;
var statearr_15180_17991 = state_15137__$1;
(statearr_15180_17991[(2)] = null);

(statearr_15180_17991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15138 === (11))){
var inst_15109 = (state_15137[(2)]);
var state_15137__$1 = (function (){var statearr_15185 = state_15137;
(statearr_15185[(10)] = inst_15109);

return statearr_15185;
})();
var statearr_15190_17993 = state_15137__$1;
(statearr_15190_17993[(2)] = null);

(statearr_15190_17993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15138 === (9))){
var state_15137__$1 = state_15137;
var statearr_15192_17994 = state_15137__$1;
(statearr_15192_17994[(2)] = null);

(statearr_15192_17994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15138 === (5))){
var state_15137__$1 = state_15137;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15193_17995 = state_15137__$1;
(statearr_15193_17995[(1)] = (8));

} else {
var statearr_15194_17996 = state_15137__$1;
(statearr_15194_17996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15138 === (14))){
var inst_15116 = (state_15137[(11)]);
var inst_15113 = (state_15137[(8)]);
var inst_15113__$1 = (state_15137[(2)]);
var inst_15115 = (inst_15113__$1 == null);
var inst_15116__$1 = cljs.core.not(inst_15115);
var state_15137__$1 = (function (){var statearr_15203 = state_15137;
(statearr_15203[(11)] = inst_15116__$1);

(statearr_15203[(8)] = inst_15113__$1);

return statearr_15203;
})();
if(inst_15116__$1){
var statearr_15207_17999 = state_15137__$1;
(statearr_15207_17999[(1)] = (15));

} else {
var statearr_15210_18003 = state_15137__$1;
(statearr_15210_18003[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15138 === (16))){
var inst_15116 = (state_15137[(11)]);
var state_15137__$1 = state_15137;
var statearr_15218_18004 = state_15137__$1;
(statearr_15218_18004[(2)] = inst_15116);

(statearr_15218_18004[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15138 === (10))){
var inst_15105 = (state_15137[(2)]);
var state_15137__$1 = state_15137;
var statearr_15221_18006 = state_15137__$1;
(statearr_15221_18006[(2)] = inst_15105);

(statearr_15221_18006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15138 === (18))){
var inst_15120 = (state_15137[(2)]);
var state_15137__$1 = state_15137;
var statearr_15223_18017 = state_15137__$1;
(statearr_15223_18017[(2)] = inst_15120);

(statearr_15223_18017[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15138 === (8))){
var inst_15100 = cljs.core.async.close_BANG_(to);
var state_15137__$1 = state_15137;
var statearr_15225_18018 = state_15137__$1;
(statearr_15225_18018[(2)] = inst_15100);

(statearr_15225_18018[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____0 = (function (){
var statearr_15227 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__);

(statearr_15227[(1)] = (1));

return statearr_15227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____1 = (function (state_15137){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_15137);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e15228){var ex__14127__auto__ = e15228;
var statearr_15229_18024 = state_15137;
(statearr_15229_18024[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_15137[(4)]))){
var statearr_15233_18026 = state_15137;
(statearr_15233_18026[(1)] = cljs.core.first((state_15137[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18029 = state_15137;
state_15137 = G__18029;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__ = function(state_15137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____1.call(this,state_15137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_15236 = f__14469__auto__();
(statearr_15236[(6)] = c__14468__auto__);

return statearr_15236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));

return c__14468__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15239 = arguments.length;
switch (G__15239) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__15251 = arguments.length;
switch (G__15251) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__15270 = arguments.length;
switch (G__15270) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14468__auto___18046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_15309){
var state_val_15310 = (state_15309[(1)]);
if((state_val_15310 === (7))){
var inst_15305 = (state_15309[(2)]);
var state_15309__$1 = state_15309;
var statearr_15317_18050 = state_15309__$1;
(statearr_15317_18050[(2)] = inst_15305);

(statearr_15317_18050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (1))){
var state_15309__$1 = state_15309;
var statearr_15322_18053 = state_15309__$1;
(statearr_15322_18053[(2)] = null);

(statearr_15322_18053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (4))){
var inst_15280 = (state_15309[(7)]);
var inst_15280__$1 = (state_15309[(2)]);
var inst_15281 = (inst_15280__$1 == null);
var state_15309__$1 = (function (){var statearr_15323 = state_15309;
(statearr_15323[(7)] = inst_15280__$1);

return statearr_15323;
})();
if(cljs.core.truth_(inst_15281)){
var statearr_15324_18054 = state_15309__$1;
(statearr_15324_18054[(1)] = (5));

} else {
var statearr_15331_18055 = state_15309__$1;
(statearr_15331_18055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (13))){
var state_15309__$1 = state_15309;
var statearr_15332_18056 = state_15309__$1;
(statearr_15332_18056[(2)] = null);

(statearr_15332_18056[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (6))){
var inst_15280 = (state_15309[(7)]);
var inst_15286 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15280) : p.call(null, inst_15280));
var state_15309__$1 = state_15309;
if(cljs.core.truth_(inst_15286)){
var statearr_15339_18061 = state_15309__$1;
(statearr_15339_18061[(1)] = (9));

} else {
var statearr_15340_18062 = state_15309__$1;
(statearr_15340_18062[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (3))){
var inst_15307 = (state_15309[(2)]);
var state_15309__$1 = state_15309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15309__$1,inst_15307);
} else {
if((state_val_15310 === (12))){
var state_15309__$1 = state_15309;
var statearr_15341_18064 = state_15309__$1;
(statearr_15341_18064[(2)] = null);

(statearr_15341_18064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (2))){
var state_15309__$1 = state_15309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15309__$1,(4),ch);
} else {
if((state_val_15310 === (11))){
var inst_15280 = (state_15309[(7)]);
var inst_15290 = (state_15309[(2)]);
var state_15309__$1 = state_15309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15309__$1,(8),inst_15290,inst_15280);
} else {
if((state_val_15310 === (9))){
var state_15309__$1 = state_15309;
var statearr_15347_18065 = state_15309__$1;
(statearr_15347_18065[(2)] = tc);

(statearr_15347_18065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (5))){
var inst_15283 = cljs.core.async.close_BANG_(tc);
var inst_15284 = cljs.core.async.close_BANG_(fc);
var state_15309__$1 = (function (){var statearr_15350 = state_15309;
(statearr_15350[(8)] = inst_15283);

return statearr_15350;
})();
var statearr_15352_18069 = state_15309__$1;
(statearr_15352_18069[(2)] = inst_15284);

(statearr_15352_18069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (14))){
var inst_15303 = (state_15309[(2)]);
var state_15309__$1 = state_15309;
var statearr_15356_18073 = state_15309__$1;
(statearr_15356_18073[(2)] = inst_15303);

(statearr_15356_18073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (10))){
var state_15309__$1 = state_15309;
var statearr_15359_18074 = state_15309__$1;
(statearr_15359_18074[(2)] = fc);

(statearr_15359_18074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15310 === (8))){
var inst_15298 = (state_15309[(2)]);
var state_15309__$1 = state_15309;
if(cljs.core.truth_(inst_15298)){
var statearr_15362_18075 = state_15309__$1;
(statearr_15362_18075[(1)] = (12));

} else {
var statearr_15363_18076 = state_15309__$1;
(statearr_15363_18076[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__14124__auto__ = null;
var cljs$core$async$state_machine__14124__auto____0 = (function (){
var statearr_15364 = [null,null,null,null,null,null,null,null,null];
(statearr_15364[(0)] = cljs$core$async$state_machine__14124__auto__);

(statearr_15364[(1)] = (1));

return statearr_15364;
});
var cljs$core$async$state_machine__14124__auto____1 = (function (state_15309){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_15309);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e15365){var ex__14127__auto__ = e15365;
var statearr_15366_18087 = state_15309;
(statearr_15366_18087[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_15309[(4)]))){
var statearr_15367_18089 = state_15309;
(statearr_15367_18089[(1)] = cljs.core.first((state_15309[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18092 = state_15309;
state_15309 = G__18092;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$state_machine__14124__auto__ = function(state_15309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14124__auto____1.call(this,state_15309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14124__auto____0;
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14124__auto____1;
return cljs$core$async$state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_15368 = f__14469__auto__();
(statearr_15368[(6)] = c__14468__auto___18046);

return statearr_15368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_15390){
var state_val_15391 = (state_15390[(1)]);
if((state_val_15391 === (7))){
var inst_15386 = (state_15390[(2)]);
var state_15390__$1 = state_15390;
var statearr_15394_18107 = state_15390__$1;
(statearr_15394_18107[(2)] = inst_15386);

(statearr_15394_18107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15391 === (1))){
var inst_15369 = init;
var inst_15370 = inst_15369;
var state_15390__$1 = (function (){var statearr_15395 = state_15390;
(statearr_15395[(7)] = inst_15370);

return statearr_15395;
})();
var statearr_15396_18108 = state_15390__$1;
(statearr_15396_18108[(2)] = null);

(statearr_15396_18108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15391 === (4))){
var inst_15373 = (state_15390[(8)]);
var inst_15373__$1 = (state_15390[(2)]);
var inst_15374 = (inst_15373__$1 == null);
var state_15390__$1 = (function (){var statearr_15399 = state_15390;
(statearr_15399[(8)] = inst_15373__$1);

return statearr_15399;
})();
if(cljs.core.truth_(inst_15374)){
var statearr_15401_18109 = state_15390__$1;
(statearr_15401_18109[(1)] = (5));

} else {
var statearr_15403_18110 = state_15390__$1;
(statearr_15403_18110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15391 === (6))){
var inst_15373 = (state_15390[(8)]);
var inst_15370 = (state_15390[(7)]);
var inst_15377 = (state_15390[(9)]);
var inst_15377__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15370,inst_15373) : f.call(null, inst_15370,inst_15373));
var inst_15378 = cljs.core.reduced_QMARK_(inst_15377__$1);
var state_15390__$1 = (function (){var statearr_15404 = state_15390;
(statearr_15404[(9)] = inst_15377__$1);

return statearr_15404;
})();
if(inst_15378){
var statearr_15405_18115 = state_15390__$1;
(statearr_15405_18115[(1)] = (8));

} else {
var statearr_15406_18116 = state_15390__$1;
(statearr_15406_18116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15391 === (3))){
var inst_15388 = (state_15390[(2)]);
var state_15390__$1 = state_15390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15390__$1,inst_15388);
} else {
if((state_val_15391 === (2))){
var state_15390__$1 = state_15390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15390__$1,(4),ch);
} else {
if((state_val_15391 === (9))){
var inst_15377 = (state_15390[(9)]);
var inst_15370 = inst_15377;
var state_15390__$1 = (function (){var statearr_15407 = state_15390;
(statearr_15407[(7)] = inst_15370);

return statearr_15407;
})();
var statearr_15408_18117 = state_15390__$1;
(statearr_15408_18117[(2)] = null);

(statearr_15408_18117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15391 === (5))){
var inst_15370 = (state_15390[(7)]);
var state_15390__$1 = state_15390;
var statearr_15411_18118 = state_15390__$1;
(statearr_15411_18118[(2)] = inst_15370);

(statearr_15411_18118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15391 === (10))){
var inst_15384 = (state_15390[(2)]);
var state_15390__$1 = state_15390;
var statearr_15412_18126 = state_15390__$1;
(statearr_15412_18126[(2)] = inst_15384);

(statearr_15412_18126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15391 === (8))){
var inst_15377 = (state_15390[(9)]);
var inst_15380 = cljs.core.deref(inst_15377);
var state_15390__$1 = state_15390;
var statearr_15420_18127 = state_15390__$1;
(statearr_15420_18127[(2)] = inst_15380);

(statearr_15420_18127[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14124__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14124__auto____0 = (function (){
var statearr_15428 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15428[(0)] = cljs$core$async$reduce_$_state_machine__14124__auto__);

(statearr_15428[(1)] = (1));

return statearr_15428;
});
var cljs$core$async$reduce_$_state_machine__14124__auto____1 = (function (state_15390){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_15390);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e15432){var ex__14127__auto__ = e15432;
var statearr_15433_18132 = state_15390;
(statearr_15433_18132[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_15390[(4)]))){
var statearr_15435_18133 = state_15390;
(statearr_15435_18133[(1)] = cljs.core.first((state_15390[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18136 = state_15390;
state_15390 = G__18136;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14124__auto__ = function(state_15390){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14124__auto____1.call(this,state_15390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14124__auto____0;
cljs$core$async$reduce_$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14124__auto____1;
return cljs$core$async$reduce_$_state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_15443 = f__14469__auto__();
(statearr_15443[(6)] = c__14468__auto__);

return statearr_15443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));

return c__14468__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_15456){
var state_val_15457 = (state_15456[(1)]);
if((state_val_15457 === (1))){
var inst_15450 = cljs.core.async.reduce(f__$1,init,ch);
var state_15456__$1 = state_15456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15456__$1,(2),inst_15450);
} else {
if((state_val_15457 === (2))){
var inst_15452 = (state_15456[(2)]);
var inst_15453 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15452) : f__$1.call(null, inst_15452));
var state_15456__$1 = state_15456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15456__$1,inst_15453);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14124__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14124__auto____0 = (function (){
var statearr_15462 = [null,null,null,null,null,null,null];
(statearr_15462[(0)] = cljs$core$async$transduce_$_state_machine__14124__auto__);

(statearr_15462[(1)] = (1));

return statearr_15462;
});
var cljs$core$async$transduce_$_state_machine__14124__auto____1 = (function (state_15456){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_15456);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e15464){var ex__14127__auto__ = e15464;
var statearr_15465_18155 = state_15456;
(statearr_15465_18155[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_15456[(4)]))){
var statearr_15466_18156 = state_15456;
(statearr_15466_18156[(1)] = cljs.core.first((state_15456[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18159 = state_15456;
state_15456 = G__18159;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14124__auto__ = function(state_15456){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14124__auto____1.call(this,state_15456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14124__auto____0;
cljs$core$async$transduce_$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14124__auto____1;
return cljs$core$async$transduce_$_state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_15470 = f__14469__auto__();
(statearr_15470[(6)] = c__14468__auto__);

return statearr_15470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));

return c__14468__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15473 = arguments.length;
switch (G__15473) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_15513){
var state_val_15514 = (state_15513[(1)]);
if((state_val_15514 === (7))){
var inst_15487 = (state_15513[(2)]);
var state_15513__$1 = state_15513;
var statearr_15517_18172 = state_15513__$1;
(statearr_15517_18172[(2)] = inst_15487);

(statearr_15517_18172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15514 === (1))){
var inst_15480 = cljs.core.seq(coll);
var inst_15482 = inst_15480;
var state_15513__$1 = (function (){var statearr_15518 = state_15513;
(statearr_15518[(7)] = inst_15482);

return statearr_15518;
})();
var statearr_15519_18173 = state_15513__$1;
(statearr_15519_18173[(2)] = null);

(statearr_15519_18173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15514 === (4))){
var inst_15482 = (state_15513[(7)]);
var inst_15485 = cljs.core.first(inst_15482);
var state_15513__$1 = state_15513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15513__$1,(7),ch,inst_15485);
} else {
if((state_val_15514 === (13))){
var inst_15499 = (state_15513[(2)]);
var state_15513__$1 = state_15513;
var statearr_15523_18175 = state_15513__$1;
(statearr_15523_18175[(2)] = inst_15499);

(statearr_15523_18175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15514 === (6))){
var inst_15490 = (state_15513[(2)]);
var state_15513__$1 = state_15513;
if(cljs.core.truth_(inst_15490)){
var statearr_15526_18177 = state_15513__$1;
(statearr_15526_18177[(1)] = (8));

} else {
var statearr_15527_18178 = state_15513__$1;
(statearr_15527_18178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15514 === (3))){
var inst_15503 = (state_15513[(2)]);
var state_15513__$1 = state_15513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15513__$1,inst_15503);
} else {
if((state_val_15514 === (12))){
var state_15513__$1 = state_15513;
var statearr_15531_18180 = state_15513__$1;
(statearr_15531_18180[(2)] = null);

(statearr_15531_18180[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15514 === (2))){
var inst_15482 = (state_15513[(7)]);
var state_15513__$1 = state_15513;
if(cljs.core.truth_(inst_15482)){
var statearr_15532_18181 = state_15513__$1;
(statearr_15532_18181[(1)] = (4));

} else {
var statearr_15533_18184 = state_15513__$1;
(statearr_15533_18184[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15514 === (11))){
var inst_15496 = cljs.core.async.close_BANG_(ch);
var state_15513__$1 = state_15513;
var statearr_15534_18185 = state_15513__$1;
(statearr_15534_18185[(2)] = inst_15496);

(statearr_15534_18185[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15514 === (9))){
var state_15513__$1 = state_15513;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15537_18186 = state_15513__$1;
(statearr_15537_18186[(1)] = (11));

} else {
var statearr_15538_18187 = state_15513__$1;
(statearr_15538_18187[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15514 === (5))){
var inst_15482 = (state_15513[(7)]);
var state_15513__$1 = state_15513;
var statearr_15540_18190 = state_15513__$1;
(statearr_15540_18190[(2)] = inst_15482);

(statearr_15540_18190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15514 === (10))){
var inst_15501 = (state_15513[(2)]);
var state_15513__$1 = state_15513;
var statearr_15543_18192 = state_15513__$1;
(statearr_15543_18192[(2)] = inst_15501);

(statearr_15543_18192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15514 === (8))){
var inst_15482 = (state_15513[(7)]);
var inst_15492 = cljs.core.next(inst_15482);
var inst_15482__$1 = inst_15492;
var state_15513__$1 = (function (){var statearr_15544 = state_15513;
(statearr_15544[(7)] = inst_15482__$1);

return statearr_15544;
})();
var statearr_15545_18193 = state_15513__$1;
(statearr_15545_18193[(2)] = null);

(statearr_15545_18193[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14124__auto__ = null;
var cljs$core$async$state_machine__14124__auto____0 = (function (){
var statearr_15548 = [null,null,null,null,null,null,null,null];
(statearr_15548[(0)] = cljs$core$async$state_machine__14124__auto__);

(statearr_15548[(1)] = (1));

return statearr_15548;
});
var cljs$core$async$state_machine__14124__auto____1 = (function (state_15513){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_15513);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e15551){var ex__14127__auto__ = e15551;
var statearr_15552_18201 = state_15513;
(statearr_15552_18201[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_15513[(4)]))){
var statearr_15553_18202 = state_15513;
(statearr_15553_18202[(1)] = cljs.core.first((state_15513[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18204 = state_15513;
state_15513 = G__18204;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$state_machine__14124__auto__ = function(state_15513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14124__auto____1.call(this,state_15513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14124__auto____0;
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14124__auto____1;
return cljs$core$async$state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_15560 = f__14469__auto__();
(statearr_15560[(6)] = c__14468__auto__);

return statearr_15560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));

return c__14468__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15569 = arguments.length;
switch (G__15569) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18215 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18215(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18219 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18219(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18220 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18220(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18221 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18221(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15604 = (function (ch,cs,meta15605){
this.ch = ch;
this.cs = cs;
this.meta15605 = meta15605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15606,meta15605__$1){
var self__ = this;
var _15606__$1 = this;
return (new cljs.core.async.t_cljs$core$async15604(self__.ch,self__.cs,meta15605__$1));
}));

(cljs.core.async.t_cljs$core$async15604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15606){
var self__ = this;
var _15606__$1 = this;
return self__.meta15605;
}));

(cljs.core.async.t_cljs$core$async15604.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15604.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15604.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15604.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15604.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15604.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15605","meta15605",1024255844,null)], null);
}));

(cljs.core.async.t_cljs$core$async15604.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15604");

(cljs.core.async.t_cljs$core$async15604.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15604");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15604.
 */
cljs.core.async.__GT_t_cljs$core$async15604 = (function cljs$core$async$__GT_t_cljs$core$async15604(ch,cs,meta15605){
return (new cljs.core.async.t_cljs$core$async15604(ch,cs,meta15605));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15604(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14468__auto___18259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_15765){
var state_val_15767 = (state_15765[(1)]);
if((state_val_15767 === (7))){
var inst_15761 = (state_15765[(2)]);
var state_15765__$1 = state_15765;
var statearr_15768_18266 = state_15765__$1;
(statearr_15768_18266[(2)] = inst_15761);

(statearr_15768_18266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (20))){
var inst_15659 = (state_15765[(7)]);
var inst_15672 = cljs.core.first(inst_15659);
var inst_15673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15672,(0),null);
var inst_15674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15672,(1),null);
var state_15765__$1 = (function (){var statearr_15770 = state_15765;
(statearr_15770[(8)] = inst_15673);

return statearr_15770;
})();
if(cljs.core.truth_(inst_15674)){
var statearr_15771_18268 = state_15765__$1;
(statearr_15771_18268[(1)] = (22));

} else {
var statearr_15772_18269 = state_15765__$1;
(statearr_15772_18269[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (27))){
var inst_15623 = (state_15765[(9)]);
var inst_15708 = (state_15765[(10)]);
var inst_15706 = (state_15765[(11)]);
var inst_15713 = (state_15765[(12)]);
var inst_15713__$1 = cljs.core._nth(inst_15706,inst_15708);
var inst_15714 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15713__$1,inst_15623,done);
var state_15765__$1 = (function (){var statearr_15774 = state_15765;
(statearr_15774[(12)] = inst_15713__$1);

return statearr_15774;
})();
if(cljs.core.truth_(inst_15714)){
var statearr_15777_18279 = state_15765__$1;
(statearr_15777_18279[(1)] = (30));

} else {
var statearr_15779_18280 = state_15765__$1;
(statearr_15779_18280[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (1))){
var state_15765__$1 = state_15765;
var statearr_15780_18284 = state_15765__$1;
(statearr_15780_18284[(2)] = null);

(statearr_15780_18284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (24))){
var inst_15659 = (state_15765[(7)]);
var inst_15682 = (state_15765[(2)]);
var inst_15683 = cljs.core.next(inst_15659);
var inst_15633 = inst_15683;
var inst_15634 = null;
var inst_15635 = (0);
var inst_15636 = (0);
var state_15765__$1 = (function (){var statearr_15786 = state_15765;
(statearr_15786[(13)] = inst_15633);

(statearr_15786[(14)] = inst_15635);

(statearr_15786[(15)] = inst_15682);

(statearr_15786[(16)] = inst_15634);

(statearr_15786[(17)] = inst_15636);

return statearr_15786;
})();
var statearr_15787_18286 = state_15765__$1;
(statearr_15787_18286[(2)] = null);

(statearr_15787_18286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (39))){
var state_15765__$1 = state_15765;
var statearr_15807_18291 = state_15765__$1;
(statearr_15807_18291[(2)] = null);

(statearr_15807_18291[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (4))){
var inst_15623 = (state_15765[(9)]);
var inst_15623__$1 = (state_15765[(2)]);
var inst_15624 = (inst_15623__$1 == null);
var state_15765__$1 = (function (){var statearr_15809 = state_15765;
(statearr_15809[(9)] = inst_15623__$1);

return statearr_15809;
})();
if(cljs.core.truth_(inst_15624)){
var statearr_15810_18295 = state_15765__$1;
(statearr_15810_18295[(1)] = (5));

} else {
var statearr_15811_18296 = state_15765__$1;
(statearr_15811_18296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (15))){
var inst_15633 = (state_15765[(13)]);
var inst_15635 = (state_15765[(14)]);
var inst_15634 = (state_15765[(16)]);
var inst_15636 = (state_15765[(17)]);
var inst_15652 = (state_15765[(2)]);
var inst_15656 = (inst_15636 + (1));
var tmp15803 = inst_15633;
var tmp15804 = inst_15635;
var tmp15805 = inst_15634;
var inst_15633__$1 = tmp15803;
var inst_15634__$1 = tmp15805;
var inst_15635__$1 = tmp15804;
var inst_15636__$1 = inst_15656;
var state_15765__$1 = (function (){var statearr_15812 = state_15765;
(statearr_15812[(13)] = inst_15633__$1);

(statearr_15812[(14)] = inst_15635__$1);

(statearr_15812[(16)] = inst_15634__$1);

(statearr_15812[(18)] = inst_15652);

(statearr_15812[(17)] = inst_15636__$1);

return statearr_15812;
})();
var statearr_15813_18303 = state_15765__$1;
(statearr_15813_18303[(2)] = null);

(statearr_15813_18303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (21))){
var inst_15686 = (state_15765[(2)]);
var state_15765__$1 = state_15765;
var statearr_15821_18304 = state_15765__$1;
(statearr_15821_18304[(2)] = inst_15686);

(statearr_15821_18304[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (31))){
var inst_15713 = (state_15765[(12)]);
var inst_15717 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15713);
var state_15765__$1 = state_15765;
var statearr_15824_18311 = state_15765__$1;
(statearr_15824_18311[(2)] = inst_15717);

(statearr_15824_18311[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (32))){
var inst_15707 = (state_15765[(19)]);
var inst_15708 = (state_15765[(10)]);
var inst_15706 = (state_15765[(11)]);
var inst_15705 = (state_15765[(20)]);
var inst_15719 = (state_15765[(2)]);
var inst_15721 = (inst_15708 + (1));
var tmp15814 = inst_15707;
var tmp15815 = inst_15706;
var tmp15816 = inst_15705;
var inst_15705__$1 = tmp15816;
var inst_15706__$1 = tmp15815;
var inst_15707__$1 = tmp15814;
var inst_15708__$1 = inst_15721;
var state_15765__$1 = (function (){var statearr_15825 = state_15765;
(statearr_15825[(19)] = inst_15707__$1);

(statearr_15825[(21)] = inst_15719);

(statearr_15825[(10)] = inst_15708__$1);

(statearr_15825[(11)] = inst_15706__$1);

(statearr_15825[(20)] = inst_15705__$1);

return statearr_15825;
})();
var statearr_15826_18325 = state_15765__$1;
(statearr_15826_18325[(2)] = null);

(statearr_15826_18325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (40))){
var inst_15733 = (state_15765[(22)]);
var inst_15738 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15733);
var state_15765__$1 = state_15765;
var statearr_15828_18326 = state_15765__$1;
(statearr_15828_18326[(2)] = inst_15738);

(statearr_15828_18326[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (33))){
var inst_15724 = (state_15765[(23)]);
var inst_15726 = cljs.core.chunked_seq_QMARK_(inst_15724);
var state_15765__$1 = state_15765;
if(inst_15726){
var statearr_15830_18328 = state_15765__$1;
(statearr_15830_18328[(1)] = (36));

} else {
var statearr_15832_18329 = state_15765__$1;
(statearr_15832_18329[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (13))){
var inst_15646 = (state_15765[(24)]);
var inst_15649 = cljs.core.async.close_BANG_(inst_15646);
var state_15765__$1 = state_15765;
var statearr_15838_18333 = state_15765__$1;
(statearr_15838_18333[(2)] = inst_15649);

(statearr_15838_18333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (22))){
var inst_15673 = (state_15765[(8)]);
var inst_15679 = cljs.core.async.close_BANG_(inst_15673);
var state_15765__$1 = state_15765;
var statearr_15839_18335 = state_15765__$1;
(statearr_15839_18335[(2)] = inst_15679);

(statearr_15839_18335[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (36))){
var inst_15724 = (state_15765[(23)]);
var inst_15728 = cljs.core.chunk_first(inst_15724);
var inst_15729 = cljs.core.chunk_rest(inst_15724);
var inst_15730 = cljs.core.count(inst_15728);
var inst_15705 = inst_15729;
var inst_15706 = inst_15728;
var inst_15707 = inst_15730;
var inst_15708 = (0);
var state_15765__$1 = (function (){var statearr_15840 = state_15765;
(statearr_15840[(19)] = inst_15707);

(statearr_15840[(10)] = inst_15708);

(statearr_15840[(11)] = inst_15706);

(statearr_15840[(20)] = inst_15705);

return statearr_15840;
})();
var statearr_15841_18349 = state_15765__$1;
(statearr_15841_18349[(2)] = null);

(statearr_15841_18349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (41))){
var inst_15724 = (state_15765[(23)]);
var inst_15740 = (state_15765[(2)]);
var inst_15741 = cljs.core.next(inst_15724);
var inst_15705 = inst_15741;
var inst_15706 = null;
var inst_15707 = (0);
var inst_15708 = (0);
var state_15765__$1 = (function (){var statearr_15843 = state_15765;
(statearr_15843[(19)] = inst_15707);

(statearr_15843[(10)] = inst_15708);

(statearr_15843[(25)] = inst_15740);

(statearr_15843[(11)] = inst_15706);

(statearr_15843[(20)] = inst_15705);

return statearr_15843;
})();
var statearr_15846_18350 = state_15765__$1;
(statearr_15846_18350[(2)] = null);

(statearr_15846_18350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (43))){
var state_15765__$1 = state_15765;
var statearr_15849_18351 = state_15765__$1;
(statearr_15849_18351[(2)] = null);

(statearr_15849_18351[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (29))){
var inst_15749 = (state_15765[(2)]);
var state_15765__$1 = state_15765;
var statearr_15850_18353 = state_15765__$1;
(statearr_15850_18353[(2)] = inst_15749);

(statearr_15850_18353[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (44))){
var inst_15758 = (state_15765[(2)]);
var state_15765__$1 = (function (){var statearr_15851 = state_15765;
(statearr_15851[(26)] = inst_15758);

return statearr_15851;
})();
var statearr_15853_18354 = state_15765__$1;
(statearr_15853_18354[(2)] = null);

(statearr_15853_18354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (6))){
var inst_15697 = (state_15765[(27)]);
var inst_15696 = cljs.core.deref(cs);
var inst_15697__$1 = cljs.core.keys(inst_15696);
var inst_15698 = cljs.core.count(inst_15697__$1);
var inst_15699 = cljs.core.reset_BANG_(dctr,inst_15698);
var inst_15704 = cljs.core.seq(inst_15697__$1);
var inst_15705 = inst_15704;
var inst_15706 = null;
var inst_15707 = (0);
var inst_15708 = (0);
var state_15765__$1 = (function (){var statearr_15857 = state_15765;
(statearr_15857[(19)] = inst_15707);

(statearr_15857[(28)] = inst_15699);

(statearr_15857[(10)] = inst_15708);

(statearr_15857[(27)] = inst_15697__$1);

(statearr_15857[(11)] = inst_15706);

(statearr_15857[(20)] = inst_15705);

return statearr_15857;
})();
var statearr_15858_18361 = state_15765__$1;
(statearr_15858_18361[(2)] = null);

(statearr_15858_18361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (28))){
var inst_15724 = (state_15765[(23)]);
var inst_15705 = (state_15765[(20)]);
var inst_15724__$1 = cljs.core.seq(inst_15705);
var state_15765__$1 = (function (){var statearr_15860 = state_15765;
(statearr_15860[(23)] = inst_15724__$1);

return statearr_15860;
})();
if(inst_15724__$1){
var statearr_15861_18362 = state_15765__$1;
(statearr_15861_18362[(1)] = (33));

} else {
var statearr_15863_18363 = state_15765__$1;
(statearr_15863_18363[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (25))){
var inst_15707 = (state_15765[(19)]);
var inst_15708 = (state_15765[(10)]);
var inst_15710 = (inst_15708 < inst_15707);
var inst_15711 = inst_15710;
var state_15765__$1 = state_15765;
if(cljs.core.truth_(inst_15711)){
var statearr_15866_18364 = state_15765__$1;
(statearr_15866_18364[(1)] = (27));

} else {
var statearr_15867_18365 = state_15765__$1;
(statearr_15867_18365[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (34))){
var state_15765__$1 = state_15765;
var statearr_15869_18366 = state_15765__$1;
(statearr_15869_18366[(2)] = null);

(statearr_15869_18366[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (17))){
var state_15765__$1 = state_15765;
var statearr_15872_18369 = state_15765__$1;
(statearr_15872_18369[(2)] = null);

(statearr_15872_18369[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (3))){
var inst_15763 = (state_15765[(2)]);
var state_15765__$1 = state_15765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15765__$1,inst_15763);
} else {
if((state_val_15767 === (12))){
var inst_15691 = (state_15765[(2)]);
var state_15765__$1 = state_15765;
var statearr_15876_18372 = state_15765__$1;
(statearr_15876_18372[(2)] = inst_15691);

(statearr_15876_18372[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (2))){
var state_15765__$1 = state_15765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15765__$1,(4),ch);
} else {
if((state_val_15767 === (23))){
var state_15765__$1 = state_15765;
var statearr_15877_18376 = state_15765__$1;
(statearr_15877_18376[(2)] = null);

(statearr_15877_18376[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (35))){
var inst_15747 = (state_15765[(2)]);
var state_15765__$1 = state_15765;
var statearr_15879_18377 = state_15765__$1;
(statearr_15879_18377[(2)] = inst_15747);

(statearr_15879_18377[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (19))){
var inst_15659 = (state_15765[(7)]);
var inst_15664 = cljs.core.chunk_first(inst_15659);
var inst_15665 = cljs.core.chunk_rest(inst_15659);
var inst_15666 = cljs.core.count(inst_15664);
var inst_15633 = inst_15665;
var inst_15634 = inst_15664;
var inst_15635 = inst_15666;
var inst_15636 = (0);
var state_15765__$1 = (function (){var statearr_15881 = state_15765;
(statearr_15881[(13)] = inst_15633);

(statearr_15881[(14)] = inst_15635);

(statearr_15881[(16)] = inst_15634);

(statearr_15881[(17)] = inst_15636);

return statearr_15881;
})();
var statearr_15882_18390 = state_15765__$1;
(statearr_15882_18390[(2)] = null);

(statearr_15882_18390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (11))){
var inst_15659 = (state_15765[(7)]);
var inst_15633 = (state_15765[(13)]);
var inst_15659__$1 = cljs.core.seq(inst_15633);
var state_15765__$1 = (function (){var statearr_15883 = state_15765;
(statearr_15883[(7)] = inst_15659__$1);

return statearr_15883;
})();
if(inst_15659__$1){
var statearr_15884_18405 = state_15765__$1;
(statearr_15884_18405[(1)] = (16));

} else {
var statearr_15886_18407 = state_15765__$1;
(statearr_15886_18407[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (9))){
var inst_15694 = (state_15765[(2)]);
var state_15765__$1 = state_15765;
var statearr_15888_18408 = state_15765__$1;
(statearr_15888_18408[(2)] = inst_15694);

(statearr_15888_18408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (5))){
var inst_15630 = cljs.core.deref(cs);
var inst_15632 = cljs.core.seq(inst_15630);
var inst_15633 = inst_15632;
var inst_15634 = null;
var inst_15635 = (0);
var inst_15636 = (0);
var state_15765__$1 = (function (){var statearr_15891 = state_15765;
(statearr_15891[(13)] = inst_15633);

(statearr_15891[(14)] = inst_15635);

(statearr_15891[(16)] = inst_15634);

(statearr_15891[(17)] = inst_15636);

return statearr_15891;
})();
var statearr_15892_18416 = state_15765__$1;
(statearr_15892_18416[(2)] = null);

(statearr_15892_18416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (14))){
var state_15765__$1 = state_15765;
var statearr_15894_18420 = state_15765__$1;
(statearr_15894_18420[(2)] = null);

(statearr_15894_18420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (45))){
var inst_15755 = (state_15765[(2)]);
var state_15765__$1 = state_15765;
var statearr_15895_18422 = state_15765__$1;
(statearr_15895_18422[(2)] = inst_15755);

(statearr_15895_18422[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (26))){
var inst_15697 = (state_15765[(27)]);
var inst_15751 = (state_15765[(2)]);
var inst_15752 = cljs.core.seq(inst_15697);
var state_15765__$1 = (function (){var statearr_15897 = state_15765;
(statearr_15897[(29)] = inst_15751);

return statearr_15897;
})();
if(inst_15752){
var statearr_15898_18432 = state_15765__$1;
(statearr_15898_18432[(1)] = (42));

} else {
var statearr_15899_18433 = state_15765__$1;
(statearr_15899_18433[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (16))){
var inst_15659 = (state_15765[(7)]);
var inst_15662 = cljs.core.chunked_seq_QMARK_(inst_15659);
var state_15765__$1 = state_15765;
if(inst_15662){
var statearr_15900_18436 = state_15765__$1;
(statearr_15900_18436[(1)] = (19));

} else {
var statearr_15905_18438 = state_15765__$1;
(statearr_15905_18438[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (38))){
var inst_15744 = (state_15765[(2)]);
var state_15765__$1 = state_15765;
var statearr_15906_18439 = state_15765__$1;
(statearr_15906_18439[(2)] = inst_15744);

(statearr_15906_18439[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (30))){
var state_15765__$1 = state_15765;
var statearr_15908_18440 = state_15765__$1;
(statearr_15908_18440[(2)] = null);

(statearr_15908_18440[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (10))){
var inst_15634 = (state_15765[(16)]);
var inst_15636 = (state_15765[(17)]);
var inst_15645 = cljs.core._nth(inst_15634,inst_15636);
var inst_15646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15645,(0),null);
var inst_15647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15645,(1),null);
var state_15765__$1 = (function (){var statearr_15910 = state_15765;
(statearr_15910[(24)] = inst_15646);

return statearr_15910;
})();
if(cljs.core.truth_(inst_15647)){
var statearr_15911_18441 = state_15765__$1;
(statearr_15911_18441[(1)] = (13));

} else {
var statearr_15912_18443 = state_15765__$1;
(statearr_15912_18443[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (18))){
var inst_15689 = (state_15765[(2)]);
var state_15765__$1 = state_15765;
var statearr_15914_18446 = state_15765__$1;
(statearr_15914_18446[(2)] = inst_15689);

(statearr_15914_18446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (42))){
var state_15765__$1 = state_15765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15765__$1,(45),dchan);
} else {
if((state_val_15767 === (37))){
var inst_15724 = (state_15765[(23)]);
var inst_15623 = (state_15765[(9)]);
var inst_15733 = (state_15765[(22)]);
var inst_15733__$1 = cljs.core.first(inst_15724);
var inst_15735 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15733__$1,inst_15623,done);
var state_15765__$1 = (function (){var statearr_15918 = state_15765;
(statearr_15918[(22)] = inst_15733__$1);

return statearr_15918;
})();
if(cljs.core.truth_(inst_15735)){
var statearr_15925_18448 = state_15765__$1;
(statearr_15925_18448[(1)] = (39));

} else {
var statearr_15926_18449 = state_15765__$1;
(statearr_15926_18449[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (8))){
var inst_15635 = (state_15765[(14)]);
var inst_15636 = (state_15765[(17)]);
var inst_15638 = (inst_15636 < inst_15635);
var inst_15639 = inst_15638;
var state_15765__$1 = state_15765;
if(cljs.core.truth_(inst_15639)){
var statearr_15928_18453 = state_15765__$1;
(statearr_15928_18453[(1)] = (10));

} else {
var statearr_15929_18454 = state_15765__$1;
(statearr_15929_18454[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__14124__auto__ = null;
var cljs$core$async$mult_$_state_machine__14124__auto____0 = (function (){
var statearr_15935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15935[(0)] = cljs$core$async$mult_$_state_machine__14124__auto__);

(statearr_15935[(1)] = (1));

return statearr_15935;
});
var cljs$core$async$mult_$_state_machine__14124__auto____1 = (function (state_15765){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_15765);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e15936){var ex__14127__auto__ = e15936;
var statearr_15937_18462 = state_15765;
(statearr_15937_18462[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_15765[(4)]))){
var statearr_15939_18463 = state_15765;
(statearr_15939_18463[(1)] = cljs.core.first((state_15765[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18464 = state_15765;
state_15765 = G__18464;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14124__auto__ = function(state_15765){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14124__auto____1.call(this,state_15765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14124__auto____0;
cljs$core$async$mult_$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14124__auto____1;
return cljs$core$async$mult_$_state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_15944 = f__14469__auto__();
(statearr_15944[(6)] = c__14468__auto___18259);

return statearr_15944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15951 = arguments.length;
switch (G__15951) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18478 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18478(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18481 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18481(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18489 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18489(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18490 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18490(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18497 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18497(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18502 = arguments.length;
var i__5727__auto___18503 = (0);
while(true){
if((i__5727__auto___18503 < len__5726__auto___18502)){
args__5732__auto__.push((arguments[i__5727__auto___18503]));

var G__18504 = (i__5727__auto___18503 + (1));
i__5727__auto___18503 = G__18504;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state__$1,cont_block,ports,p__15992){
var map__15993 = p__15992;
var map__15993__$1 = cljs.core.__destructure_map(map__15993);
var opts = map__15993__$1;
var statearr_15994_18506 = state__$1;
(statearr_15994_18506[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16000_18508 = state__$1;
(statearr_16000_18508[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__$1);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16002_18509 = state__$1;
(statearr_16002_18509[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15984){
var G__15985 = cljs.core.first(seq15984);
var seq15984__$1 = cljs.core.next(seq15984);
var G__15986 = cljs.core.first(seq15984__$1);
var seq15984__$2 = cljs.core.next(seq15984__$1);
var G__15987 = cljs.core.first(seq15984__$2);
var seq15984__$3 = cljs.core.next(seq15984__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15985,G__15986,G__15987,seq15984__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16013 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16014){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16014 = meta16014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16015,meta16014__$1){
var self__ = this;
var _16015__$1 = this;
return (new cljs.core.async.t_cljs$core$async16013(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16014__$1));
}));

(cljs.core.async.t_cljs$core$async16013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16015){
var self__ = this;
var _16015__$1 = this;
return self__.meta16014;
}));

(cljs.core.async.t_cljs$core$async16013.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16013.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16013.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16013.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16013.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16013.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16013.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16013.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16014","meta16014",1182978388,null)], null);
}));

(cljs.core.async.t_cljs$core$async16013.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16013");

(cljs.core.async.t_cljs$core$async16013.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16013");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16013.
 */
cljs.core.async.__GT_t_cljs$core$async16013 = (function cljs$core$async$__GT_t_cljs$core$async16013(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16014){
return (new cljs.core.async.t_cljs$core$async16013(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16014));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16013(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14468__auto___18556 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_16105){
var state_val_16106 = (state_16105[(1)]);
if((state_val_16106 === (7))){
var inst_16060 = (state_16105[(2)]);
var state_16105__$1 = state_16105;
if(cljs.core.truth_(inst_16060)){
var statearr_16111_18558 = state_16105__$1;
(statearr_16111_18558[(1)] = (8));

} else {
var statearr_16112_18559 = state_16105__$1;
(statearr_16112_18559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (20))){
var inst_16047 = (state_16105[(7)]);
var state_16105__$1 = state_16105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16105__$1,(23),out,inst_16047);
} else {
if((state_val_16106 === (1))){
var inst_16030 = calc_state();
var inst_16031 = cljs.core.__destructure_map(inst_16030);
var inst_16032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16031,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16031,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16031,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16035 = inst_16030;
var state_16105__$1 = (function (){var statearr_16119 = state_16105;
(statearr_16119[(8)] = inst_16033);

(statearr_16119[(9)] = inst_16032);

(statearr_16119[(10)] = inst_16035);

(statearr_16119[(11)] = inst_16034);

return statearr_16119;
})();
var statearr_16121_18561 = state_16105__$1;
(statearr_16121_18561[(2)] = null);

(statearr_16121_18561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (24))){
var inst_16038 = (state_16105[(12)]);
var inst_16035 = inst_16038;
var state_16105__$1 = (function (){var statearr_16123 = state_16105;
(statearr_16123[(10)] = inst_16035);

return statearr_16123;
})();
var statearr_16124_18567 = state_16105__$1;
(statearr_16124_18567[(2)] = null);

(statearr_16124_18567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (4))){
var inst_16053 = (state_16105[(13)]);
var inst_16047 = (state_16105[(7)]);
var inst_16046 = (state_16105[(2)]);
var inst_16047__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16046,(0),null);
var inst_16048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16046,(1),null);
var inst_16053__$1 = (inst_16047__$1 == null);
var state_16105__$1 = (function (){var statearr_16127 = state_16105;
(statearr_16127[(14)] = inst_16048);

(statearr_16127[(13)] = inst_16053__$1);

(statearr_16127[(7)] = inst_16047__$1);

return statearr_16127;
})();
if(cljs.core.truth_(inst_16053__$1)){
var statearr_16128_18568 = state_16105__$1;
(statearr_16128_18568[(1)] = (5));

} else {
var statearr_16129_18569 = state_16105__$1;
(statearr_16129_18569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (15))){
var inst_16077 = (state_16105[(15)]);
var inst_16039 = (state_16105[(16)]);
var inst_16077__$1 = cljs.core.empty_QMARK_(inst_16039);
var state_16105__$1 = (function (){var statearr_16132 = state_16105;
(statearr_16132[(15)] = inst_16077__$1);

return statearr_16132;
})();
if(inst_16077__$1){
var statearr_16133_18580 = state_16105__$1;
(statearr_16133_18580[(1)] = (17));

} else {
var statearr_16134_18581 = state_16105__$1;
(statearr_16134_18581[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (21))){
var inst_16038 = (state_16105[(12)]);
var inst_16035 = inst_16038;
var state_16105__$1 = (function (){var statearr_16135 = state_16105;
(statearr_16135[(10)] = inst_16035);

return statearr_16135;
})();
var statearr_16136_18588 = state_16105__$1;
(statearr_16136_18588[(2)] = null);

(statearr_16136_18588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (13))){
var inst_16068 = (state_16105[(2)]);
var inst_16069 = calc_state();
var inst_16035 = inst_16069;
var state_16105__$1 = (function (){var statearr_16137 = state_16105;
(statearr_16137[(17)] = inst_16068);

(statearr_16137[(10)] = inst_16035);

return statearr_16137;
})();
var statearr_16138_18589 = state_16105__$1;
(statearr_16138_18589[(2)] = null);

(statearr_16138_18589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (22))){
var inst_16097 = (state_16105[(2)]);
var state_16105__$1 = state_16105;
var statearr_16139_18590 = state_16105__$1;
(statearr_16139_18590[(2)] = inst_16097);

(statearr_16139_18590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (6))){
var inst_16048 = (state_16105[(14)]);
var inst_16058 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16048,change);
var state_16105__$1 = state_16105;
var statearr_16140_18595 = state_16105__$1;
(statearr_16140_18595[(2)] = inst_16058);

(statearr_16140_18595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (25))){
var state_16105__$1 = state_16105;
var statearr_16141_18600 = state_16105__$1;
(statearr_16141_18600[(2)] = null);

(statearr_16141_18600[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (17))){
var inst_16048 = (state_16105[(14)]);
var inst_16040 = (state_16105[(18)]);
var inst_16079 = (inst_16040.cljs$core$IFn$_invoke$arity$1 ? inst_16040.cljs$core$IFn$_invoke$arity$1(inst_16048) : inst_16040.call(null, inst_16048));
var inst_16080 = cljs.core.not(inst_16079);
var state_16105__$1 = state_16105;
var statearr_16142_18606 = state_16105__$1;
(statearr_16142_18606[(2)] = inst_16080);

(statearr_16142_18606[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (3))){
var inst_16101 = (state_16105[(2)]);
var state_16105__$1 = state_16105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16105__$1,inst_16101);
} else {
if((state_val_16106 === (12))){
var state_16105__$1 = state_16105;
var statearr_16143_18622 = state_16105__$1;
(statearr_16143_18622[(2)] = null);

(statearr_16143_18622[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (2))){
var inst_16038 = (state_16105[(12)]);
var inst_16035 = (state_16105[(10)]);
var inst_16038__$1 = cljs.core.__destructure_map(inst_16035);
var inst_16039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16038__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16038__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16038__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16105__$1 = (function (){var statearr_16144 = state_16105;
(statearr_16144[(16)] = inst_16039);

(statearr_16144[(12)] = inst_16038__$1);

(statearr_16144[(18)] = inst_16040);

return statearr_16144;
})();
return cljs.core.async.ioc_alts_BANG_(state_16105__$1,(4),inst_16041);
} else {
if((state_val_16106 === (23))){
var inst_16088 = (state_16105[(2)]);
var state_16105__$1 = state_16105;
if(cljs.core.truth_(inst_16088)){
var statearr_16146_18628 = state_16105__$1;
(statearr_16146_18628[(1)] = (24));

} else {
var statearr_16147_18629 = state_16105__$1;
(statearr_16147_18629[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (19))){
var inst_16083 = (state_16105[(2)]);
var state_16105__$1 = state_16105;
var statearr_16151_18630 = state_16105__$1;
(statearr_16151_18630[(2)] = inst_16083);

(statearr_16151_18630[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (11))){
var inst_16048 = (state_16105[(14)]);
var inst_16065 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16048);
var state_16105__$1 = state_16105;
var statearr_16152_18631 = state_16105__$1;
(statearr_16152_18631[(2)] = inst_16065);

(statearr_16152_18631[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (9))){
var inst_16048 = (state_16105[(14)]);
var inst_16039 = (state_16105[(16)]);
var inst_16073 = (state_16105[(19)]);
var inst_16073__$1 = (inst_16039.cljs$core$IFn$_invoke$arity$1 ? inst_16039.cljs$core$IFn$_invoke$arity$1(inst_16048) : inst_16039.call(null, inst_16048));
var state_16105__$1 = (function (){var statearr_16153 = state_16105;
(statearr_16153[(19)] = inst_16073__$1);

return statearr_16153;
})();
if(cljs.core.truth_(inst_16073__$1)){
var statearr_16154_18632 = state_16105__$1;
(statearr_16154_18632[(1)] = (14));

} else {
var statearr_16155_18633 = state_16105__$1;
(statearr_16155_18633[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (5))){
var inst_16053 = (state_16105[(13)]);
var state_16105__$1 = state_16105;
var statearr_16157_18636 = state_16105__$1;
(statearr_16157_18636[(2)] = inst_16053);

(statearr_16157_18636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (14))){
var inst_16073 = (state_16105[(19)]);
var state_16105__$1 = state_16105;
var statearr_16159_18637 = state_16105__$1;
(statearr_16159_18637[(2)] = inst_16073);

(statearr_16159_18637[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (26))){
var inst_16093 = (state_16105[(2)]);
var state_16105__$1 = state_16105;
var statearr_16161_18638 = state_16105__$1;
(statearr_16161_18638[(2)] = inst_16093);

(statearr_16161_18638[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (16))){
var inst_16085 = (state_16105[(2)]);
var state_16105__$1 = state_16105;
if(cljs.core.truth_(inst_16085)){
var statearr_16162_18639 = state_16105__$1;
(statearr_16162_18639[(1)] = (20));

} else {
var statearr_16163_18640 = state_16105__$1;
(statearr_16163_18640[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (10))){
var inst_16099 = (state_16105[(2)]);
var state_16105__$1 = state_16105;
var statearr_16164_18642 = state_16105__$1;
(statearr_16164_18642[(2)] = inst_16099);

(statearr_16164_18642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (18))){
var inst_16077 = (state_16105[(15)]);
var state_16105__$1 = state_16105;
var statearr_16165_18645 = state_16105__$1;
(statearr_16165_18645[(2)] = inst_16077);

(statearr_16165_18645[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (8))){
var inst_16047 = (state_16105[(7)]);
var inst_16062 = (inst_16047 == null);
var state_16105__$1 = state_16105;
if(cljs.core.truth_(inst_16062)){
var statearr_16166_18649 = state_16105__$1;
(statearr_16166_18649[(1)] = (11));

} else {
var statearr_16167_18650 = state_16105__$1;
(statearr_16167_18650[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__14124__auto__ = null;
var cljs$core$async$mix_$_state_machine__14124__auto____0 = (function (){
var statearr_16174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16174[(0)] = cljs$core$async$mix_$_state_machine__14124__auto__);

(statearr_16174[(1)] = (1));

return statearr_16174;
});
var cljs$core$async$mix_$_state_machine__14124__auto____1 = (function (state_16105){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_16105);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e16176){var ex__14127__auto__ = e16176;
var statearr_16177_18659 = state_16105;
(statearr_16177_18659[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_16105[(4)]))){
var statearr_16180_18660 = state_16105;
(statearr_16180_18660[(1)] = cljs.core.first((state_16105[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18661 = state_16105;
state_16105 = G__18661;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14124__auto__ = function(state_16105){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14124__auto____1.call(this,state_16105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14124__auto____0;
cljs$core$async$mix_$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14124__auto____1;
return cljs$core$async$mix_$_state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_16181 = f__14469__auto__();
(statearr_16181[(6)] = c__14468__auto___18556);

return statearr_16181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18671 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18671(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18680 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18680(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18686 = (function() {
var G__18690 = null;
var G__18690__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18690__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18690 = function(p,v){
switch(arguments.length){
case 1:
return G__18690__1.call(this,p);
case 2:
return G__18690__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18690.cljs$core$IFn$_invoke$arity$1 = G__18690__1;
G__18690.cljs$core$IFn$_invoke$arity$2 = G__18690__2;
return G__18690;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16198 = arguments.length;
switch (G__16198) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18686(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18686(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16217 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16218){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16218 = meta16218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16219,meta16218__$1){
var self__ = this;
var _16219__$1 = this;
return (new cljs.core.async.t_cljs$core$async16217(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16218__$1));
}));

(cljs.core.async.t_cljs$core$async16217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16219){
var self__ = this;
var _16219__$1 = this;
return self__.meta16218;
}));

(cljs.core.async.t_cljs$core$async16217.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16217.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16217.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16217.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16217.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16217.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16217.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16218","meta16218",-668181131,null)], null);
}));

(cljs.core.async.t_cljs$core$async16217.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16217");

(cljs.core.async.t_cljs$core$async16217.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16217");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16217.
 */
cljs.core.async.__GT_t_cljs$core$async16217 = (function cljs$core$async$__GT_t_cljs$core$async16217(ch,topic_fn,buf_fn,mults,ensure_mult,meta16218){
return (new cljs.core.async.t_cljs$core$async16217(ch,topic_fn,buf_fn,mults,ensure_mult,meta16218));
});


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
var G__16212 = arguments.length;
switch (G__16212) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16209_SHARP_){
if(cljs.core.truth_((p1__16209_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16209_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16209_SHARP_.call(null, topic)))){
return p1__16209_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16209_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16217(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14468__auto___18712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_16312){
var state_val_16313 = (state_16312[(1)]);
if((state_val_16313 === (7))){
var inst_16308 = (state_16312[(2)]);
var state_16312__$1 = state_16312;
var statearr_16315_18718 = state_16312__$1;
(statearr_16315_18718[(2)] = inst_16308);

(statearr_16315_18718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (20))){
var state_16312__$1 = state_16312;
var statearr_16320_18720 = state_16312__$1;
(statearr_16320_18720[(2)] = null);

(statearr_16320_18720[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (1))){
var state_16312__$1 = state_16312;
var statearr_16321_18724 = state_16312__$1;
(statearr_16321_18724[(2)] = null);

(statearr_16321_18724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (24))){
var inst_16291 = (state_16312[(7)]);
var inst_16300 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16291);
var state_16312__$1 = state_16312;
var statearr_16323_18729 = state_16312__$1;
(statearr_16323_18729[(2)] = inst_16300);

(statearr_16323_18729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (4))){
var inst_16235 = (state_16312[(8)]);
var inst_16235__$1 = (state_16312[(2)]);
var inst_16236 = (inst_16235__$1 == null);
var state_16312__$1 = (function (){var statearr_16326 = state_16312;
(statearr_16326[(8)] = inst_16235__$1);

return statearr_16326;
})();
if(cljs.core.truth_(inst_16236)){
var statearr_16328_18737 = state_16312__$1;
(statearr_16328_18737[(1)] = (5));

} else {
var statearr_16329_18738 = state_16312__$1;
(statearr_16329_18738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (15))){
var inst_16285 = (state_16312[(2)]);
var state_16312__$1 = state_16312;
var statearr_16330_18743 = state_16312__$1;
(statearr_16330_18743[(2)] = inst_16285);

(statearr_16330_18743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (21))){
var inst_16305 = (state_16312[(2)]);
var state_16312__$1 = (function (){var statearr_16333 = state_16312;
(statearr_16333[(9)] = inst_16305);

return statearr_16333;
})();
var statearr_16334_18744 = state_16312__$1;
(statearr_16334_18744[(2)] = null);

(statearr_16334_18744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (13))){
var inst_16260 = (state_16312[(10)]);
var inst_16266 = cljs.core.chunked_seq_QMARK_(inst_16260);
var state_16312__$1 = state_16312;
if(inst_16266){
var statearr_16337_18745 = state_16312__$1;
(statearr_16337_18745[(1)] = (16));

} else {
var statearr_16339_18746 = state_16312__$1;
(statearr_16339_18746[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (22))){
var inst_16297 = (state_16312[(2)]);
var state_16312__$1 = state_16312;
if(cljs.core.truth_(inst_16297)){
var statearr_16341_18751 = state_16312__$1;
(statearr_16341_18751[(1)] = (23));

} else {
var statearr_16342_18756 = state_16312__$1;
(statearr_16342_18756[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (6))){
var inst_16291 = (state_16312[(7)]);
var inst_16293 = (state_16312[(11)]);
var inst_16235 = (state_16312[(8)]);
var inst_16291__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16235) : topic_fn.call(null, inst_16235));
var inst_16292 = cljs.core.deref(mults);
var inst_16293__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16292,inst_16291__$1);
var state_16312__$1 = (function (){var statearr_16344 = state_16312;
(statearr_16344[(7)] = inst_16291__$1);

(statearr_16344[(11)] = inst_16293__$1);

return statearr_16344;
})();
if(cljs.core.truth_(inst_16293__$1)){
var statearr_16346_18757 = state_16312__$1;
(statearr_16346_18757[(1)] = (19));

} else {
var statearr_16348_18761 = state_16312__$1;
(statearr_16348_18761[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (25))){
var inst_16302 = (state_16312[(2)]);
var state_16312__$1 = state_16312;
var statearr_16351_18762 = state_16312__$1;
(statearr_16351_18762[(2)] = inst_16302);

(statearr_16351_18762[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (17))){
var inst_16260 = (state_16312[(10)]);
var inst_16275 = cljs.core.first(inst_16260);
var inst_16276 = cljs.core.async.muxch_STAR_(inst_16275);
var inst_16277 = cljs.core.async.close_BANG_(inst_16276);
var inst_16278 = cljs.core.next(inst_16260);
var inst_16246 = inst_16278;
var inst_16247 = null;
var inst_16248 = (0);
var inst_16249 = (0);
var state_16312__$1 = (function (){var statearr_16354 = state_16312;
(statearr_16354[(12)] = inst_16246);

(statearr_16354[(13)] = inst_16247);

(statearr_16354[(14)] = inst_16248);

(statearr_16354[(15)] = inst_16249);

(statearr_16354[(16)] = inst_16277);

return statearr_16354;
})();
var statearr_16358_18767 = state_16312__$1;
(statearr_16358_18767[(2)] = null);

(statearr_16358_18767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (3))){
var inst_16310 = (state_16312[(2)]);
var state_16312__$1 = state_16312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16312__$1,inst_16310);
} else {
if((state_val_16313 === (12))){
var inst_16287 = (state_16312[(2)]);
var state_16312__$1 = state_16312;
var statearr_16362_18771 = state_16312__$1;
(statearr_16362_18771[(2)] = inst_16287);

(statearr_16362_18771[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (2))){
var state_16312__$1 = state_16312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16312__$1,(4),ch);
} else {
if((state_val_16313 === (23))){
var state_16312__$1 = state_16312;
var statearr_16365_18776 = state_16312__$1;
(statearr_16365_18776[(2)] = null);

(statearr_16365_18776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (19))){
var inst_16293 = (state_16312[(11)]);
var inst_16235 = (state_16312[(8)]);
var inst_16295 = cljs.core.async.muxch_STAR_(inst_16293);
var state_16312__$1 = state_16312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16312__$1,(22),inst_16295,inst_16235);
} else {
if((state_val_16313 === (11))){
var inst_16246 = (state_16312[(12)]);
var inst_16260 = (state_16312[(10)]);
var inst_16260__$1 = cljs.core.seq(inst_16246);
var state_16312__$1 = (function (){var statearr_16371 = state_16312;
(statearr_16371[(10)] = inst_16260__$1);

return statearr_16371;
})();
if(inst_16260__$1){
var statearr_16372_18793 = state_16312__$1;
(statearr_16372_18793[(1)] = (13));

} else {
var statearr_16373_18794 = state_16312__$1;
(statearr_16373_18794[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (9))){
var inst_16289 = (state_16312[(2)]);
var state_16312__$1 = state_16312;
var statearr_16376_18795 = state_16312__$1;
(statearr_16376_18795[(2)] = inst_16289);

(statearr_16376_18795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (5))){
var inst_16243 = cljs.core.deref(mults);
var inst_16244 = cljs.core.vals(inst_16243);
var inst_16245 = cljs.core.seq(inst_16244);
var inst_16246 = inst_16245;
var inst_16247 = null;
var inst_16248 = (0);
var inst_16249 = (0);
var state_16312__$1 = (function (){var statearr_16380 = state_16312;
(statearr_16380[(12)] = inst_16246);

(statearr_16380[(13)] = inst_16247);

(statearr_16380[(14)] = inst_16248);

(statearr_16380[(15)] = inst_16249);

return statearr_16380;
})();
var statearr_16383_18809 = state_16312__$1;
(statearr_16383_18809[(2)] = null);

(statearr_16383_18809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (14))){
var state_16312__$1 = state_16312;
var statearr_16389_18810 = state_16312__$1;
(statearr_16389_18810[(2)] = null);

(statearr_16389_18810[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (16))){
var inst_16260 = (state_16312[(10)]);
var inst_16268 = cljs.core.chunk_first(inst_16260);
var inst_16269 = cljs.core.chunk_rest(inst_16260);
var inst_16270 = cljs.core.count(inst_16268);
var inst_16246 = inst_16269;
var inst_16247 = inst_16268;
var inst_16248 = inst_16270;
var inst_16249 = (0);
var state_16312__$1 = (function (){var statearr_16392 = state_16312;
(statearr_16392[(12)] = inst_16246);

(statearr_16392[(13)] = inst_16247);

(statearr_16392[(14)] = inst_16248);

(statearr_16392[(15)] = inst_16249);

return statearr_16392;
})();
var statearr_16397_18814 = state_16312__$1;
(statearr_16397_18814[(2)] = null);

(statearr_16397_18814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (10))){
var inst_16246 = (state_16312[(12)]);
var inst_16247 = (state_16312[(13)]);
var inst_16248 = (state_16312[(14)]);
var inst_16249 = (state_16312[(15)]);
var inst_16254 = cljs.core._nth(inst_16247,inst_16249);
var inst_16255 = cljs.core.async.muxch_STAR_(inst_16254);
var inst_16256 = cljs.core.async.close_BANG_(inst_16255);
var inst_16257 = (inst_16249 + (1));
var tmp16386 = inst_16246;
var tmp16387 = inst_16247;
var tmp16388 = inst_16248;
var inst_16246__$1 = tmp16386;
var inst_16247__$1 = tmp16387;
var inst_16248__$1 = tmp16388;
var inst_16249__$1 = inst_16257;
var state_16312__$1 = (function (){var statearr_16402 = state_16312;
(statearr_16402[(12)] = inst_16246__$1);

(statearr_16402[(13)] = inst_16247__$1);

(statearr_16402[(14)] = inst_16248__$1);

(statearr_16402[(15)] = inst_16249__$1);

(statearr_16402[(17)] = inst_16256);

return statearr_16402;
})();
var statearr_16404_18816 = state_16312__$1;
(statearr_16404_18816[(2)] = null);

(statearr_16404_18816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (18))){
var inst_16281 = (state_16312[(2)]);
var state_16312__$1 = state_16312;
var statearr_16407_18818 = state_16312__$1;
(statearr_16407_18818[(2)] = inst_16281);

(statearr_16407_18818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (8))){
var inst_16248 = (state_16312[(14)]);
var inst_16249 = (state_16312[(15)]);
var inst_16251 = (inst_16249 < inst_16248);
var inst_16252 = inst_16251;
var state_16312__$1 = state_16312;
if(cljs.core.truth_(inst_16252)){
var statearr_16408_18820 = state_16312__$1;
(statearr_16408_18820[(1)] = (10));

} else {
var statearr_16409_18821 = state_16312__$1;
(statearr_16409_18821[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__14124__auto__ = null;
var cljs$core$async$state_machine__14124__auto____0 = (function (){
var statearr_16413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16413[(0)] = cljs$core$async$state_machine__14124__auto__);

(statearr_16413[(1)] = (1));

return statearr_16413;
});
var cljs$core$async$state_machine__14124__auto____1 = (function (state_16312){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_16312);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e16415){var ex__14127__auto__ = e16415;
var statearr_16417_18828 = state_16312;
(statearr_16417_18828[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_16312[(4)]))){
var statearr_16418_18830 = state_16312;
(statearr_16418_18830[(1)] = cljs.core.first((state_16312[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18831 = state_16312;
state_16312 = G__18831;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$state_machine__14124__auto__ = function(state_16312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14124__auto____1.call(this,state_16312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14124__auto____0;
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14124__auto____1;
return cljs$core$async$state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_16426 = f__14469__auto__();
(statearr_16426[(6)] = c__14468__auto___18712);

return statearr_16426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16432 = arguments.length;
switch (G__16432) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16442 = arguments.length;
switch (G__16442) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__16448 = arguments.length;
switch (G__16448) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14468__auto___18855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_16586){
var state_val_16594 = (state_16586[(1)]);
if((state_val_16594 === (7))){
var state_16586__$1 = state_16586;
var statearr_16601_18857 = state_16586__$1;
(statearr_16601_18857[(2)] = null);

(statearr_16601_18857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16594 === (1))){
var state_16586__$1 = state_16586;
var statearr_16606_18858 = state_16586__$1;
(statearr_16606_18858[(2)] = null);

(statearr_16606_18858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16594 === (4))){
var inst_16521 = (state_16586[(7)]);
var inst_16522 = (state_16586[(8)]);
var inst_16524 = (inst_16522 < inst_16521);
var state_16586__$1 = state_16586;
if(cljs.core.truth_(inst_16524)){
var statearr_16610_18859 = state_16586__$1;
(statearr_16610_18859[(1)] = (6));

} else {
var statearr_16611_18860 = state_16586__$1;
(statearr_16611_18860[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16594 === (15))){
var inst_16555 = (state_16586[(9)]);
var inst_16560 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16555);
var state_16586__$1 = state_16586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16586__$1,(17),out,inst_16560);
} else {
if((state_val_16594 === (13))){
var inst_16555 = (state_16586[(9)]);
var inst_16555__$1 = (state_16586[(2)]);
var inst_16556 = cljs.core.some(cljs.core.nil_QMARK_,inst_16555__$1);
var state_16586__$1 = (function (){var statearr_16625 = state_16586;
(statearr_16625[(9)] = inst_16555__$1);

return statearr_16625;
})();
if(cljs.core.truth_(inst_16556)){
var statearr_16629_18865 = state_16586__$1;
(statearr_16629_18865[(1)] = (14));

} else {
var statearr_16630_18867 = state_16586__$1;
(statearr_16630_18867[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16594 === (6))){
var state_16586__$1 = state_16586;
var statearr_16634_18868 = state_16586__$1;
(statearr_16634_18868[(2)] = null);

(statearr_16634_18868[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16594 === (17))){
var inst_16562 = (state_16586[(2)]);
var state_16586__$1 = (function (){var statearr_16656 = state_16586;
(statearr_16656[(10)] = inst_16562);

return statearr_16656;
})();
var statearr_16658_18870 = state_16586__$1;
(statearr_16658_18870[(2)] = null);

(statearr_16658_18870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16594 === (3))){
var inst_16567 = (state_16586[(2)]);
var state_16586__$1 = state_16586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16586__$1,inst_16567);
} else {
if((state_val_16594 === (12))){
var _ = (function (){var statearr_16662 = state_16586;
(statearr_16662[(4)] = cljs.core.rest((state_16586[(4)])));

return statearr_16662;
})();
var state_16586__$1 = state_16586;
var ex16654 = (state_16586__$1[(2)]);
var statearr_16663_18875 = state_16586__$1;
(statearr_16663_18875[(5)] = ex16654);


if((ex16654 instanceof Object)){
var statearr_16668_18876 = state_16586__$1;
(statearr_16668_18876[(1)] = (11));

(statearr_16668_18876[(5)] = null);

} else {
throw ex16654;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16594 === (2))){
var inst_16517 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16521 = cnt;
var inst_16522 = (0);
var state_16586__$1 = (function (){var statearr_16681 = state_16586;
(statearr_16681[(11)] = inst_16517);

(statearr_16681[(7)] = inst_16521);

(statearr_16681[(8)] = inst_16522);

return statearr_16681;
})();
var statearr_16685_18880 = state_16586__$1;
(statearr_16685_18880[(2)] = null);

(statearr_16685_18880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16594 === (11))){
var inst_16530 = (state_16586[(2)]);
var inst_16531 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16586__$1 = (function (){var statearr_16689 = state_16586;
(statearr_16689[(12)] = inst_16530);

return statearr_16689;
})();
var statearr_16691_18881 = state_16586__$1;
(statearr_16691_18881[(2)] = inst_16531);

(statearr_16691_18881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16594 === (9))){
var inst_16522 = (state_16586[(8)]);
var _ = (function (){var statearr_16696 = state_16586;
(statearr_16696[(4)] = cljs.core.cons((12),(state_16586[(4)])));

return statearr_16696;
})();
var inst_16538 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16522) : chs__$1.call(null, inst_16522));
var inst_16539 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16522) : done.call(null, inst_16522));
var inst_16540 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16538,inst_16539);
var ___$1 = (function (){var statearr_16701 = state_16586;
(statearr_16701[(4)] = cljs.core.rest((state_16586[(4)])));

return statearr_16701;
})();
var state_16586__$1 = state_16586;
var statearr_16703_18889 = state_16586__$1;
(statearr_16703_18889[(2)] = inst_16540);

(statearr_16703_18889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16594 === (5))){
var inst_16552 = (state_16586[(2)]);
var state_16586__$1 = (function (){var statearr_16704 = state_16586;
(statearr_16704[(13)] = inst_16552);

return statearr_16704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16586__$1,(13),dchan);
} else {
if((state_val_16594 === (14))){
var inst_16558 = cljs.core.async.close_BANG_(out);
var state_16586__$1 = state_16586;
var statearr_16710_18894 = state_16586__$1;
(statearr_16710_18894[(2)] = inst_16558);

(statearr_16710_18894[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16594 === (16))){
var inst_16565 = (state_16586[(2)]);
var state_16586__$1 = state_16586;
var statearr_16713_18899 = state_16586__$1;
(statearr_16713_18899[(2)] = inst_16565);

(statearr_16713_18899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16594 === (10))){
var inst_16522 = (state_16586[(8)]);
var inst_16544 = (state_16586[(2)]);
var inst_16546 = (inst_16522 + (1));
var inst_16522__$1 = inst_16546;
var state_16586__$1 = (function (){var statearr_16714 = state_16586;
(statearr_16714[(14)] = inst_16544);

(statearr_16714[(8)] = inst_16522__$1);

return statearr_16714;
})();
var statearr_16716_18900 = state_16586__$1;
(statearr_16716_18900[(2)] = null);

(statearr_16716_18900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16594 === (8))){
var inst_16550 = (state_16586[(2)]);
var state_16586__$1 = state_16586;
var statearr_16718_18906 = state_16586__$1;
(statearr_16718_18906[(2)] = inst_16550);

(statearr_16718_18906[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__14124__auto__ = null;
var cljs$core$async$state_machine__14124__auto____0 = (function (){
var statearr_16719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16719[(0)] = cljs$core$async$state_machine__14124__auto__);

(statearr_16719[(1)] = (1));

return statearr_16719;
});
var cljs$core$async$state_machine__14124__auto____1 = (function (state_16586){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_16586);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e16722){var ex__14127__auto__ = e16722;
var statearr_16724_18911 = state_16586;
(statearr_16724_18911[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_16586[(4)]))){
var statearr_16725_18912 = state_16586;
(statearr_16725_18912[(1)] = cljs.core.first((state_16586[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18918 = state_16586;
state_16586 = G__18918;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$state_machine__14124__auto__ = function(state_16586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14124__auto____1.call(this,state_16586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14124__auto____0;
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14124__auto____1;
return cljs$core$async$state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_16735 = f__14469__auto__();
(statearr_16735[(6)] = c__14468__auto___18855);

return statearr_16735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16751 = arguments.length;
switch (G__16751) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14468__auto___18930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_16796){
var state_val_16798 = (state_16796[(1)]);
if((state_val_16798 === (7))){
var inst_16774 = (state_16796[(7)]);
var inst_16775 = (state_16796[(8)]);
var inst_16774__$1 = (state_16796[(2)]);
var inst_16775__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16774__$1,(0),null);
var inst_16776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16774__$1,(1),null);
var inst_16777 = (inst_16775__$1 == null);
var state_16796__$1 = (function (){var statearr_16826 = state_16796;
(statearr_16826[(7)] = inst_16774__$1);

(statearr_16826[(8)] = inst_16775__$1);

(statearr_16826[(9)] = inst_16776);

return statearr_16826;
})();
if(cljs.core.truth_(inst_16777)){
var statearr_16828_18952 = state_16796__$1;
(statearr_16828_18952[(1)] = (8));

} else {
var statearr_16830_18953 = state_16796__$1;
(statearr_16830_18953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (1))){
var inst_16764 = cljs.core.vec(chs);
var inst_16765 = inst_16764;
var state_16796__$1 = (function (){var statearr_16833 = state_16796;
(statearr_16833[(10)] = inst_16765);

return statearr_16833;
})();
var statearr_16834_18960 = state_16796__$1;
(statearr_16834_18960[(2)] = null);

(statearr_16834_18960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (4))){
var inst_16765 = (state_16796[(10)]);
var state_16796__$1 = state_16796;
return cljs.core.async.ioc_alts_BANG_(state_16796__$1,(7),inst_16765);
} else {
if((state_val_16798 === (6))){
var inst_16792 = (state_16796[(2)]);
var state_16796__$1 = state_16796;
var statearr_16842_18965 = state_16796__$1;
(statearr_16842_18965[(2)] = inst_16792);

(statearr_16842_18965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (3))){
var inst_16794 = (state_16796[(2)]);
var state_16796__$1 = state_16796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16796__$1,inst_16794);
} else {
if((state_val_16798 === (2))){
var inst_16765 = (state_16796[(10)]);
var inst_16767 = cljs.core.count(inst_16765);
var inst_16768 = (inst_16767 > (0));
var state_16796__$1 = state_16796;
if(cljs.core.truth_(inst_16768)){
var statearr_16847_18968 = state_16796__$1;
(statearr_16847_18968[(1)] = (4));

} else {
var statearr_16849_18969 = state_16796__$1;
(statearr_16849_18969[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (11))){
var inst_16765 = (state_16796[(10)]);
var inst_16785 = (state_16796[(2)]);
var tmp16845 = inst_16765;
var inst_16765__$1 = tmp16845;
var state_16796__$1 = (function (){var statearr_16851 = state_16796;
(statearr_16851[(10)] = inst_16765__$1);

(statearr_16851[(11)] = inst_16785);

return statearr_16851;
})();
var statearr_16853_18975 = state_16796__$1;
(statearr_16853_18975[(2)] = null);

(statearr_16853_18975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (9))){
var inst_16775 = (state_16796[(8)]);
var state_16796__$1 = state_16796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16796__$1,(11),out,inst_16775);
} else {
if((state_val_16798 === (5))){
var inst_16790 = cljs.core.async.close_BANG_(out);
var state_16796__$1 = state_16796;
var statearr_16858_18979 = state_16796__$1;
(statearr_16858_18979[(2)] = inst_16790);

(statearr_16858_18979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (10))){
var inst_16788 = (state_16796[(2)]);
var state_16796__$1 = state_16796;
var statearr_16859_18985 = state_16796__$1;
(statearr_16859_18985[(2)] = inst_16788);

(statearr_16859_18985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (8))){
var inst_16765 = (state_16796[(10)]);
var inst_16774 = (state_16796[(7)]);
var inst_16775 = (state_16796[(8)]);
var inst_16776 = (state_16796[(9)]);
var inst_16780 = (function (){var cs = inst_16765;
var vec__16770 = inst_16774;
var v = inst_16775;
var c = inst_16776;
return (function (p1__16743_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16743_SHARP_);
});
})();
var inst_16781 = cljs.core.filterv(inst_16780,inst_16765);
var inst_16765__$1 = inst_16781;
var state_16796__$1 = (function (){var statearr_16863 = state_16796;
(statearr_16863[(10)] = inst_16765__$1);

return statearr_16863;
})();
var statearr_16864_18988 = state_16796__$1;
(statearr_16864_18988[(2)] = null);

(statearr_16864_18988[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14124__auto__ = null;
var cljs$core$async$state_machine__14124__auto____0 = (function (){
var statearr_16866 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16866[(0)] = cljs$core$async$state_machine__14124__auto__);

(statearr_16866[(1)] = (1));

return statearr_16866;
});
var cljs$core$async$state_machine__14124__auto____1 = (function (state_16796){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_16796);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e16867){var ex__14127__auto__ = e16867;
var statearr_16868_18992 = state_16796;
(statearr_16868_18992[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_16796[(4)]))){
var statearr_16869_18993 = state_16796;
(statearr_16869_18993[(1)] = cljs.core.first((state_16796[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18995 = state_16796;
state_16796 = G__18995;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$state_machine__14124__auto__ = function(state_16796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14124__auto____1.call(this,state_16796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14124__auto____0;
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14124__auto____1;
return cljs$core$async$state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_16873 = f__14469__auto__();
(statearr_16873[(6)] = c__14468__auto___18930);

return statearr_16873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16883 = arguments.length;
switch (G__16883) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14468__auto___19007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_16912){
var state_val_16913 = (state_16912[(1)]);
if((state_val_16913 === (7))){
var inst_16893 = (state_16912[(7)]);
var inst_16893__$1 = (state_16912[(2)]);
var inst_16894 = (inst_16893__$1 == null);
var inst_16895 = cljs.core.not(inst_16894);
var state_16912__$1 = (function (){var statearr_16919 = state_16912;
(statearr_16919[(7)] = inst_16893__$1);

return statearr_16919;
})();
if(inst_16895){
var statearr_16922_19016 = state_16912__$1;
(statearr_16922_19016[(1)] = (8));

} else {
var statearr_16923_19021 = state_16912__$1;
(statearr_16923_19021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (1))){
var inst_16887 = (0);
var state_16912__$1 = (function (){var statearr_16924 = state_16912;
(statearr_16924[(8)] = inst_16887);

return statearr_16924;
})();
var statearr_16925_19022 = state_16912__$1;
(statearr_16925_19022[(2)] = null);

(statearr_16925_19022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (4))){
var state_16912__$1 = state_16912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16912__$1,(7),ch);
} else {
if((state_val_16913 === (6))){
var inst_16906 = (state_16912[(2)]);
var state_16912__$1 = state_16912;
var statearr_16927_19027 = state_16912__$1;
(statearr_16927_19027[(2)] = inst_16906);

(statearr_16927_19027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (3))){
var inst_16908 = (state_16912[(2)]);
var inst_16909 = cljs.core.async.close_BANG_(out);
var state_16912__$1 = (function (){var statearr_16931 = state_16912;
(statearr_16931[(9)] = inst_16908);

return statearr_16931;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16912__$1,inst_16909);
} else {
if((state_val_16913 === (2))){
var inst_16887 = (state_16912[(8)]);
var inst_16890 = (inst_16887 < n);
var state_16912__$1 = state_16912;
if(cljs.core.truth_(inst_16890)){
var statearr_16935_19040 = state_16912__$1;
(statearr_16935_19040[(1)] = (4));

} else {
var statearr_16936_19041 = state_16912__$1;
(statearr_16936_19041[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (11))){
var inst_16887 = (state_16912[(8)]);
var inst_16898 = (state_16912[(2)]);
var inst_16899 = (inst_16887 + (1));
var inst_16887__$1 = inst_16899;
var state_16912__$1 = (function (){var statearr_16942 = state_16912;
(statearr_16942[(10)] = inst_16898);

(statearr_16942[(8)] = inst_16887__$1);

return statearr_16942;
})();
var statearr_16943_19043 = state_16912__$1;
(statearr_16943_19043[(2)] = null);

(statearr_16943_19043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (9))){
var state_16912__$1 = state_16912;
var statearr_16944_19048 = state_16912__$1;
(statearr_16944_19048[(2)] = null);

(statearr_16944_19048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (5))){
var state_16912__$1 = state_16912;
var statearr_16946_19062 = state_16912__$1;
(statearr_16946_19062[(2)] = null);

(statearr_16946_19062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (10))){
var inst_16903 = (state_16912[(2)]);
var state_16912__$1 = state_16912;
var statearr_16952_19065 = state_16912__$1;
(statearr_16952_19065[(2)] = inst_16903);

(statearr_16952_19065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (8))){
var inst_16893 = (state_16912[(7)]);
var state_16912__$1 = state_16912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16912__$1,(11),out,inst_16893);
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
});
return (function() {
var cljs$core$async$state_machine__14124__auto__ = null;
var cljs$core$async$state_machine__14124__auto____0 = (function (){
var statearr_16957 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16957[(0)] = cljs$core$async$state_machine__14124__auto__);

(statearr_16957[(1)] = (1));

return statearr_16957;
});
var cljs$core$async$state_machine__14124__auto____1 = (function (state_16912){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_16912);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e16959){var ex__14127__auto__ = e16959;
var statearr_16962_19076 = state_16912;
(statearr_16962_19076[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_16912[(4)]))){
var statearr_16963_19092 = state_16912;
(statearr_16963_19092[(1)] = cljs.core.first((state_16912[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19093 = state_16912;
state_16912 = G__19093;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$state_machine__14124__auto__ = function(state_16912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14124__auto____1.call(this,state_16912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14124__auto____0;
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14124__auto____1;
return cljs$core$async$state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_16964 = f__14469__auto__();
(statearr_16964[(6)] = c__14468__auto___19007);

return statearr_16964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16976 = (function (f,ch,meta16967,_,fn1,meta16977){
this.f = f;
this.ch = ch;
this.meta16967 = meta16967;
this._ = _;
this.fn1 = fn1;
this.meta16977 = meta16977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16978,meta16977__$1){
var self__ = this;
var _16978__$1 = this;
return (new cljs.core.async.t_cljs$core$async16976(self__.f,self__.ch,self__.meta16967,self__._,self__.fn1,meta16977__$1));
}));

(cljs.core.async.t_cljs$core$async16976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16978){
var self__ = this;
var _16978__$1 = this;
return self__.meta16977;
}));

(cljs.core.async.t_cljs$core$async16976.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16976.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16976.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16976.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16965_SHARP_){
var G__16989 = (((p1__16965_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16965_SHARP_) : self__.f.call(null, p1__16965_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16989) : f1.call(null, G__16989));
});
}));

(cljs.core.async.t_cljs$core$async16976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16967","meta16967",618474907,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16966","cljs.core.async/t_cljs$core$async16966",-1098644381,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16977","meta16977",174462201,null)], null);
}));

(cljs.core.async.t_cljs$core$async16976.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16976");

(cljs.core.async.t_cljs$core$async16976.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16976");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16976.
 */
cljs.core.async.__GT_t_cljs$core$async16976 = (function cljs$core$async$__GT_t_cljs$core$async16976(f,ch,meta16967,_,fn1,meta16977){
return (new cljs.core.async.t_cljs$core$async16976(f,ch,meta16967,_,fn1,meta16977));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16966 = (function (f,ch,meta16967){
this.f = f;
this.ch = ch;
this.meta16967 = meta16967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16968,meta16967__$1){
var self__ = this;
var _16968__$1 = this;
return (new cljs.core.async.t_cljs$core$async16966(self__.f,self__.ch,meta16967__$1));
}));

(cljs.core.async.t_cljs$core$async16966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16968){
var self__ = this;
var _16968__$1 = this;
return self__.meta16967;
}));

(cljs.core.async.t_cljs$core$async16966.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16966.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16966.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16966.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16966.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16976(self__.f,self__.ch,self__.meta16967,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16997 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16997) : self__.f.call(null, G__16997));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16966.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16966.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16967","meta16967",618474907,null)], null);
}));

(cljs.core.async.t_cljs$core$async16966.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16966");

(cljs.core.async.t_cljs$core$async16966.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16966");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16966.
 */
cljs.core.async.__GT_t_cljs$core$async16966 = (function cljs$core$async$__GT_t_cljs$core$async16966(f,ch,meta16967){
return (new cljs.core.async.t_cljs$core$async16966(f,ch,meta16967));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16966(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17011 = (function (f,ch,meta17012){
this.f = f;
this.ch = ch;
this.meta17012 = meta17012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17013,meta17012__$1){
var self__ = this;
var _17013__$1 = this;
return (new cljs.core.async.t_cljs$core$async17011(self__.f,self__.ch,meta17012__$1));
}));

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17013){
var self__ = this;
var _17013__$1 = this;
return self__.meta17012;
}));

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17012","meta17012",1594935113,null)], null);
}));

(cljs.core.async.t_cljs$core$async17011.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17011");

(cljs.core.async.t_cljs$core$async17011.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17011");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17011.
 */
cljs.core.async.__GT_t_cljs$core$async17011 = (function cljs$core$async$__GT_t_cljs$core$async17011(f,ch,meta17012){
return (new cljs.core.async.t_cljs$core$async17011(f,ch,meta17012));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17011(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17044 = (function (p,ch,meta17045){
this.p = p;
this.ch = ch;
this.meta17045 = meta17045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17046,meta17045__$1){
var self__ = this;
var _17046__$1 = this;
return (new cljs.core.async.t_cljs$core$async17044(self__.p,self__.ch,meta17045__$1));
}));

(cljs.core.async.t_cljs$core$async17044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17046){
var self__ = this;
var _17046__$1 = this;
return self__.meta17045;
}));

(cljs.core.async.t_cljs$core$async17044.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17044.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17044.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17044.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17044.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17044.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17044.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17045","meta17045",1525098089,null)], null);
}));

(cljs.core.async.t_cljs$core$async17044.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17044");

(cljs.core.async.t_cljs$core$async17044.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17044");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17044.
 */
cljs.core.async.__GT_t_cljs$core$async17044 = (function cljs$core$async$__GT_t_cljs$core$async17044(p,ch,meta17045){
return (new cljs.core.async.t_cljs$core$async17044(p,ch,meta17045));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17044(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17069 = arguments.length;
switch (G__17069) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14468__auto___19186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_17092){
var state_val_17093 = (state_17092[(1)]);
if((state_val_17093 === (7))){
var inst_17088 = (state_17092[(2)]);
var state_17092__$1 = state_17092;
var statearr_17097_19191 = state_17092__$1;
(statearr_17097_19191[(2)] = inst_17088);

(statearr_17097_19191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (1))){
var state_17092__$1 = state_17092;
var statearr_17102_19192 = state_17092__$1;
(statearr_17102_19192[(2)] = null);

(statearr_17102_19192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (4))){
var inst_17074 = (state_17092[(7)]);
var inst_17074__$1 = (state_17092[(2)]);
var inst_17075 = (inst_17074__$1 == null);
var state_17092__$1 = (function (){var statearr_17103 = state_17092;
(statearr_17103[(7)] = inst_17074__$1);

return statearr_17103;
})();
if(cljs.core.truth_(inst_17075)){
var statearr_17104_19193 = state_17092__$1;
(statearr_17104_19193[(1)] = (5));

} else {
var statearr_17105_19202 = state_17092__$1;
(statearr_17105_19202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (6))){
var inst_17074 = (state_17092[(7)]);
var inst_17079 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17074) : p.call(null, inst_17074));
var state_17092__$1 = state_17092;
if(cljs.core.truth_(inst_17079)){
var statearr_17106_19203 = state_17092__$1;
(statearr_17106_19203[(1)] = (8));

} else {
var statearr_17109_19204 = state_17092__$1;
(statearr_17109_19204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (3))){
var inst_17090 = (state_17092[(2)]);
var state_17092__$1 = state_17092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17092__$1,inst_17090);
} else {
if((state_val_17093 === (2))){
var state_17092__$1 = state_17092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17092__$1,(4),ch);
} else {
if((state_val_17093 === (11))){
var inst_17082 = (state_17092[(2)]);
var state_17092__$1 = state_17092;
var statearr_17111_19209 = state_17092__$1;
(statearr_17111_19209[(2)] = inst_17082);

(statearr_17111_19209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (9))){
var state_17092__$1 = state_17092;
var statearr_17112_19214 = state_17092__$1;
(statearr_17112_19214[(2)] = null);

(statearr_17112_19214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (5))){
var inst_17077 = cljs.core.async.close_BANG_(out);
var state_17092__$1 = state_17092;
var statearr_17114_19223 = state_17092__$1;
(statearr_17114_19223[(2)] = inst_17077);

(statearr_17114_19223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (10))){
var inst_17085 = (state_17092[(2)]);
var state_17092__$1 = (function (){var statearr_17116 = state_17092;
(statearr_17116[(8)] = inst_17085);

return statearr_17116;
})();
var statearr_17117_19225 = state_17092__$1;
(statearr_17117_19225[(2)] = null);

(statearr_17117_19225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17093 === (8))){
var inst_17074 = (state_17092[(7)]);
var state_17092__$1 = state_17092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17092__$1,(11),out,inst_17074);
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
});
return (function() {
var cljs$core$async$state_machine__14124__auto__ = null;
var cljs$core$async$state_machine__14124__auto____0 = (function (){
var statearr_17119 = [null,null,null,null,null,null,null,null,null];
(statearr_17119[(0)] = cljs$core$async$state_machine__14124__auto__);

(statearr_17119[(1)] = (1));

return statearr_17119;
});
var cljs$core$async$state_machine__14124__auto____1 = (function (state_17092){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_17092);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e17121){var ex__14127__auto__ = e17121;
var statearr_17122_19230 = state_17092;
(statearr_17122_19230[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_17092[(4)]))){
var statearr_17123_19231 = state_17092;
(statearr_17123_19231[(1)] = cljs.core.first((state_17092[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19236 = state_17092;
state_17092 = G__19236;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$state_machine__14124__auto__ = function(state_17092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14124__auto____1.call(this,state_17092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14124__auto____0;
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14124__auto____1;
return cljs$core$async$state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_17124 = f__14469__auto__();
(statearr_17124[(6)] = c__14468__auto___19186);

return statearr_17124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17126 = arguments.length;
switch (G__17126) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_17197){
var state_val_17201 = (state_17197[(1)]);
if((state_val_17201 === (7))){
var inst_17192 = (state_17197[(2)]);
var state_17197__$1 = state_17197;
var statearr_17202_19244 = state_17197__$1;
(statearr_17202_19244[(2)] = inst_17192);

(statearr_17202_19244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (20))){
var inst_17158 = (state_17197[(7)]);
var inst_17170 = (state_17197[(2)]);
var inst_17171 = cljs.core.next(inst_17158);
var inst_17143 = inst_17171;
var inst_17144 = null;
var inst_17145 = (0);
var inst_17146 = (0);
var state_17197__$1 = (function (){var statearr_17204 = state_17197;
(statearr_17204[(8)] = inst_17146);

(statearr_17204[(9)] = inst_17145);

(statearr_17204[(10)] = inst_17144);

(statearr_17204[(11)] = inst_17170);

(statearr_17204[(12)] = inst_17143);

return statearr_17204;
})();
var statearr_17205_19246 = state_17197__$1;
(statearr_17205_19246[(2)] = null);

(statearr_17205_19246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (1))){
var state_17197__$1 = state_17197;
var statearr_17208_19251 = state_17197__$1;
(statearr_17208_19251[(2)] = null);

(statearr_17208_19251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (4))){
var inst_17132 = (state_17197[(13)]);
var inst_17132__$1 = (state_17197[(2)]);
var inst_17133 = (inst_17132__$1 == null);
var state_17197__$1 = (function (){var statearr_17211 = state_17197;
(statearr_17211[(13)] = inst_17132__$1);

return statearr_17211;
})();
if(cljs.core.truth_(inst_17133)){
var statearr_17212_19257 = state_17197__$1;
(statearr_17212_19257[(1)] = (5));

} else {
var statearr_17214_19258 = state_17197__$1;
(statearr_17214_19258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (15))){
var state_17197__$1 = state_17197;
var statearr_17218_19260 = state_17197__$1;
(statearr_17218_19260[(2)] = null);

(statearr_17218_19260[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (21))){
var state_17197__$1 = state_17197;
var statearr_17219_19263 = state_17197__$1;
(statearr_17219_19263[(2)] = null);

(statearr_17219_19263[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (13))){
var inst_17146 = (state_17197[(8)]);
var inst_17145 = (state_17197[(9)]);
var inst_17144 = (state_17197[(10)]);
var inst_17143 = (state_17197[(12)]);
var inst_17154 = (state_17197[(2)]);
var inst_17155 = (inst_17146 + (1));
var tmp17215 = inst_17145;
var tmp17216 = inst_17144;
var tmp17217 = inst_17143;
var inst_17143__$1 = tmp17217;
var inst_17144__$1 = tmp17216;
var inst_17145__$1 = tmp17215;
var inst_17146__$1 = inst_17155;
var state_17197__$1 = (function (){var statearr_17220 = state_17197;
(statearr_17220[(8)] = inst_17146__$1);

(statearr_17220[(9)] = inst_17145__$1);

(statearr_17220[(10)] = inst_17144__$1);

(statearr_17220[(14)] = inst_17154);

(statearr_17220[(12)] = inst_17143__$1);

return statearr_17220;
})();
var statearr_17221_19275 = state_17197__$1;
(statearr_17221_19275[(2)] = null);

(statearr_17221_19275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (22))){
var state_17197__$1 = state_17197;
var statearr_17224_19278 = state_17197__$1;
(statearr_17224_19278[(2)] = null);

(statearr_17224_19278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (6))){
var inst_17132 = (state_17197[(13)]);
var inst_17141 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17132) : f.call(null, inst_17132));
var inst_17142 = cljs.core.seq(inst_17141);
var inst_17143 = inst_17142;
var inst_17144 = null;
var inst_17145 = (0);
var inst_17146 = (0);
var state_17197__$1 = (function (){var statearr_17225 = state_17197;
(statearr_17225[(8)] = inst_17146);

(statearr_17225[(9)] = inst_17145);

(statearr_17225[(10)] = inst_17144);

(statearr_17225[(12)] = inst_17143);

return statearr_17225;
})();
var statearr_17226_19284 = state_17197__$1;
(statearr_17226_19284[(2)] = null);

(statearr_17226_19284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (17))){
var inst_17158 = (state_17197[(7)]);
var inst_17162 = cljs.core.chunk_first(inst_17158);
var inst_17163 = cljs.core.chunk_rest(inst_17158);
var inst_17164 = cljs.core.count(inst_17162);
var inst_17143 = inst_17163;
var inst_17144 = inst_17162;
var inst_17145 = inst_17164;
var inst_17146 = (0);
var state_17197__$1 = (function (){var statearr_17228 = state_17197;
(statearr_17228[(8)] = inst_17146);

(statearr_17228[(9)] = inst_17145);

(statearr_17228[(10)] = inst_17144);

(statearr_17228[(12)] = inst_17143);

return statearr_17228;
})();
var statearr_17232_19287 = state_17197__$1;
(statearr_17232_19287[(2)] = null);

(statearr_17232_19287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (3))){
var inst_17194 = (state_17197[(2)]);
var state_17197__$1 = state_17197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17197__$1,inst_17194);
} else {
if((state_val_17201 === (12))){
var inst_17182 = (state_17197[(2)]);
var state_17197__$1 = state_17197;
var statearr_17233_19288 = state_17197__$1;
(statearr_17233_19288[(2)] = inst_17182);

(statearr_17233_19288[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (2))){
var state_17197__$1 = state_17197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17197__$1,(4),in$);
} else {
if((state_val_17201 === (23))){
var inst_17190 = (state_17197[(2)]);
var state_17197__$1 = state_17197;
var statearr_17235_19289 = state_17197__$1;
(statearr_17235_19289[(2)] = inst_17190);

(statearr_17235_19289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (19))){
var inst_17174 = (state_17197[(2)]);
var state_17197__$1 = state_17197;
var statearr_17236_19290 = state_17197__$1;
(statearr_17236_19290[(2)] = inst_17174);

(statearr_17236_19290[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (11))){
var inst_17158 = (state_17197[(7)]);
var inst_17143 = (state_17197[(12)]);
var inst_17158__$1 = cljs.core.seq(inst_17143);
var state_17197__$1 = (function (){var statearr_17238 = state_17197;
(statearr_17238[(7)] = inst_17158__$1);

return statearr_17238;
})();
if(inst_17158__$1){
var statearr_17240_19292 = state_17197__$1;
(statearr_17240_19292[(1)] = (14));

} else {
var statearr_17241_19293 = state_17197__$1;
(statearr_17241_19293[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (9))){
var inst_17184 = (state_17197[(2)]);
var inst_17185 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17197__$1 = (function (){var statearr_17242 = state_17197;
(statearr_17242[(15)] = inst_17184);

return statearr_17242;
})();
if(cljs.core.truth_(inst_17185)){
var statearr_17244_19295 = state_17197__$1;
(statearr_17244_19295[(1)] = (21));

} else {
var statearr_17245_19296 = state_17197__$1;
(statearr_17245_19296[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (5))){
var inst_17135 = cljs.core.async.close_BANG_(out);
var state_17197__$1 = state_17197;
var statearr_17246_19298 = state_17197__$1;
(statearr_17246_19298[(2)] = inst_17135);

(statearr_17246_19298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (14))){
var inst_17158 = (state_17197[(7)]);
var inst_17160 = cljs.core.chunked_seq_QMARK_(inst_17158);
var state_17197__$1 = state_17197;
if(inst_17160){
var statearr_17248_19299 = state_17197__$1;
(statearr_17248_19299[(1)] = (17));

} else {
var statearr_17250_19300 = state_17197__$1;
(statearr_17250_19300[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (16))){
var inst_17180 = (state_17197[(2)]);
var state_17197__$1 = state_17197;
var statearr_17251_19302 = state_17197__$1;
(statearr_17251_19302[(2)] = inst_17180);

(statearr_17251_19302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (10))){
var inst_17146 = (state_17197[(8)]);
var inst_17144 = (state_17197[(10)]);
var inst_17152 = cljs.core._nth(inst_17144,inst_17146);
var state_17197__$1 = state_17197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17197__$1,(13),out,inst_17152);
} else {
if((state_val_17201 === (18))){
var inst_17158 = (state_17197[(7)]);
var inst_17168 = cljs.core.first(inst_17158);
var state_17197__$1 = state_17197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17197__$1,(20),out,inst_17168);
} else {
if((state_val_17201 === (8))){
var inst_17146 = (state_17197[(8)]);
var inst_17145 = (state_17197[(9)]);
var inst_17148 = (inst_17146 < inst_17145);
var inst_17150 = inst_17148;
var state_17197__$1 = state_17197;
if(cljs.core.truth_(inst_17150)){
var statearr_17255_19309 = state_17197__$1;
(statearr_17255_19309[(1)] = (10));

} else {
var statearr_17256_19311 = state_17197__$1;
(statearr_17256_19311[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14124__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14124__auto____0 = (function (){
var statearr_17257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17257[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14124__auto__);

(statearr_17257[(1)] = (1));

return statearr_17257;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14124__auto____1 = (function (state_17197){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_17197);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e17258){var ex__14127__auto__ = e17258;
var statearr_17259_19313 = state_17197;
(statearr_17259_19313[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_17197[(4)]))){
var statearr_17260_19316 = state_17197;
(statearr_17260_19316[(1)] = cljs.core.first((state_17197[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19322 = state_17197;
state_17197 = G__19322;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14124__auto__ = function(state_17197){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14124__auto____1.call(this,state_17197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14124__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14124__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_17261 = f__14469__auto__();
(statearr_17261[(6)] = c__14468__auto__);

return statearr_17261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));

return c__14468__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17271 = arguments.length;
switch (G__17271) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17283 = arguments.length;
switch (G__17283) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17288 = arguments.length;
switch (G__17288) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14468__auto___19349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_17312){
var state_val_17313 = (state_17312[(1)]);
if((state_val_17313 === (7))){
var inst_17307 = (state_17312[(2)]);
var state_17312__$1 = state_17312;
var statearr_17317_19360 = state_17312__$1;
(statearr_17317_19360[(2)] = inst_17307);

(statearr_17317_19360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (1))){
var inst_17289 = null;
var state_17312__$1 = (function (){var statearr_17318 = state_17312;
(statearr_17318[(7)] = inst_17289);

return statearr_17318;
})();
var statearr_17319_19364 = state_17312__$1;
(statearr_17319_19364[(2)] = null);

(statearr_17319_19364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (4))){
var inst_17292 = (state_17312[(8)]);
var inst_17292__$1 = (state_17312[(2)]);
var inst_17293 = (inst_17292__$1 == null);
var inst_17294 = cljs.core.not(inst_17293);
var state_17312__$1 = (function (){var statearr_17323 = state_17312;
(statearr_17323[(8)] = inst_17292__$1);

return statearr_17323;
})();
if(inst_17294){
var statearr_17325_19376 = state_17312__$1;
(statearr_17325_19376[(1)] = (5));

} else {
var statearr_17326_19377 = state_17312__$1;
(statearr_17326_19377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (6))){
var state_17312__$1 = state_17312;
var statearr_17328_19382 = state_17312__$1;
(statearr_17328_19382[(2)] = null);

(statearr_17328_19382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (3))){
var inst_17309 = (state_17312[(2)]);
var inst_17310 = cljs.core.async.close_BANG_(out);
var state_17312__$1 = (function (){var statearr_17329 = state_17312;
(statearr_17329[(9)] = inst_17309);

return statearr_17329;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17312__$1,inst_17310);
} else {
if((state_val_17313 === (2))){
var state_17312__$1 = state_17312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17312__$1,(4),ch);
} else {
if((state_val_17313 === (11))){
var inst_17292 = (state_17312[(8)]);
var inst_17301 = (state_17312[(2)]);
var inst_17289 = inst_17292;
var state_17312__$1 = (function (){var statearr_17333 = state_17312;
(statearr_17333[(7)] = inst_17289);

(statearr_17333[(10)] = inst_17301);

return statearr_17333;
})();
var statearr_17334_19394 = state_17312__$1;
(statearr_17334_19394[(2)] = null);

(statearr_17334_19394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (9))){
var inst_17292 = (state_17312[(8)]);
var state_17312__$1 = state_17312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17312__$1,(11),out,inst_17292);
} else {
if((state_val_17313 === (5))){
var inst_17289 = (state_17312[(7)]);
var inst_17292 = (state_17312[(8)]);
var inst_17296 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17292,inst_17289);
var state_17312__$1 = state_17312;
if(inst_17296){
var statearr_17336_19585 = state_17312__$1;
(statearr_17336_19585[(1)] = (8));

} else {
var statearr_17337_19586 = state_17312__$1;
(statearr_17337_19586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (10))){
var inst_17304 = (state_17312[(2)]);
var state_17312__$1 = state_17312;
var statearr_17338_19587 = state_17312__$1;
(statearr_17338_19587[(2)] = inst_17304);

(statearr_17338_19587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (8))){
var inst_17289 = (state_17312[(7)]);
var tmp17335 = inst_17289;
var inst_17289__$1 = tmp17335;
var state_17312__$1 = (function (){var statearr_17339 = state_17312;
(statearr_17339[(7)] = inst_17289__$1);

return statearr_17339;
})();
var statearr_17340_19593 = state_17312__$1;
(statearr_17340_19593[(2)] = null);

(statearr_17340_19593[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14124__auto__ = null;
var cljs$core$async$state_machine__14124__auto____0 = (function (){
var statearr_17341 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17341[(0)] = cljs$core$async$state_machine__14124__auto__);

(statearr_17341[(1)] = (1));

return statearr_17341;
});
var cljs$core$async$state_machine__14124__auto____1 = (function (state_17312){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_17312);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e17342){var ex__14127__auto__ = e17342;
var statearr_17343_19598 = state_17312;
(statearr_17343_19598[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_17312[(4)]))){
var statearr_17344_19599 = state_17312;
(statearr_17344_19599[(1)] = cljs.core.first((state_17312[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19600 = state_17312;
state_17312 = G__19600;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$state_machine__14124__auto__ = function(state_17312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14124__auto____1.call(this,state_17312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14124__auto____0;
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14124__auto____1;
return cljs$core$async$state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_17356 = f__14469__auto__();
(statearr_17356[(6)] = c__14468__auto___19349);

return statearr_17356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17364 = arguments.length;
switch (G__17364) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14468__auto___19606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_17408){
var state_val_17409 = (state_17408[(1)]);
if((state_val_17409 === (7))){
var inst_17402 = (state_17408[(2)]);
var state_17408__$1 = state_17408;
var statearr_17413_19608 = state_17408__$1;
(statearr_17413_19608[(2)] = inst_17402);

(statearr_17413_19608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17409 === (1))){
var inst_17365 = (new Array(n));
var inst_17366 = inst_17365;
var inst_17367 = (0);
var state_17408__$1 = (function (){var statearr_17414 = state_17408;
(statearr_17414[(7)] = inst_17366);

(statearr_17414[(8)] = inst_17367);

return statearr_17414;
})();
var statearr_17415_19614 = state_17408__$1;
(statearr_17415_19614[(2)] = null);

(statearr_17415_19614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17409 === (4))){
var inst_17371 = (state_17408[(9)]);
var inst_17371__$1 = (state_17408[(2)]);
var inst_17372 = (inst_17371__$1 == null);
var inst_17373 = cljs.core.not(inst_17372);
var state_17408__$1 = (function (){var statearr_17422 = state_17408;
(statearr_17422[(9)] = inst_17371__$1);

return statearr_17422;
})();
if(inst_17373){
var statearr_17425_19617 = state_17408__$1;
(statearr_17425_19617[(1)] = (5));

} else {
var statearr_17426_19618 = state_17408__$1;
(statearr_17426_19618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17409 === (15))){
var inst_17396 = (state_17408[(2)]);
var state_17408__$1 = state_17408;
var statearr_17432_19758 = state_17408__$1;
(statearr_17432_19758[(2)] = inst_17396);

(statearr_17432_19758[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17409 === (13))){
var state_17408__$1 = state_17408;
var statearr_17433_19760 = state_17408__$1;
(statearr_17433_19760[(2)] = null);

(statearr_17433_19760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17409 === (6))){
var inst_17367 = (state_17408[(8)]);
var inst_17392 = (inst_17367 > (0));
var state_17408__$1 = state_17408;
if(cljs.core.truth_(inst_17392)){
var statearr_17437_19768 = state_17408__$1;
(statearr_17437_19768[(1)] = (12));

} else {
var statearr_17438_19769 = state_17408__$1;
(statearr_17438_19769[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17409 === (3))){
var inst_17404 = (state_17408[(2)]);
var state_17408__$1 = state_17408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17408__$1,inst_17404);
} else {
if((state_val_17409 === (12))){
var inst_17366 = (state_17408[(7)]);
var inst_17394 = cljs.core.vec(inst_17366);
var state_17408__$1 = state_17408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17408__$1,(15),out,inst_17394);
} else {
if((state_val_17409 === (2))){
var state_17408__$1 = state_17408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17408__$1,(4),ch);
} else {
if((state_val_17409 === (11))){
var inst_17386 = (state_17408[(2)]);
var inst_17387 = (new Array(n));
var inst_17366 = inst_17387;
var inst_17367 = (0);
var state_17408__$1 = (function (){var statearr_17446 = state_17408;
(statearr_17446[(7)] = inst_17366);

(statearr_17446[(10)] = inst_17386);

(statearr_17446[(8)] = inst_17367);

return statearr_17446;
})();
var statearr_17447_19780 = state_17408__$1;
(statearr_17447_19780[(2)] = null);

(statearr_17447_19780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17409 === (9))){
var inst_17366 = (state_17408[(7)]);
var inst_17384 = cljs.core.vec(inst_17366);
var state_17408__$1 = state_17408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17408__$1,(11),out,inst_17384);
} else {
if((state_val_17409 === (5))){
var inst_17371 = (state_17408[(9)]);
var inst_17366 = (state_17408[(7)]);
var inst_17376 = (state_17408[(11)]);
var inst_17367 = (state_17408[(8)]);
var inst_17375 = (inst_17366[inst_17367] = inst_17371);
var inst_17376__$1 = (inst_17367 + (1));
var inst_17377 = (inst_17376__$1 < n);
var state_17408__$1 = (function (){var statearr_17459 = state_17408;
(statearr_17459[(11)] = inst_17376__$1);

(statearr_17459[(12)] = inst_17375);

return statearr_17459;
})();
if(cljs.core.truth_(inst_17377)){
var statearr_17466_19795 = state_17408__$1;
(statearr_17466_19795[(1)] = (8));

} else {
var statearr_17467_19796 = state_17408__$1;
(statearr_17467_19796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17409 === (14))){
var inst_17399 = (state_17408[(2)]);
var inst_17400 = cljs.core.async.close_BANG_(out);
var state_17408__$1 = (function (){var statearr_17469 = state_17408;
(statearr_17469[(13)] = inst_17399);

return statearr_17469;
})();
var statearr_17471_19800 = state_17408__$1;
(statearr_17471_19800[(2)] = inst_17400);

(statearr_17471_19800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17409 === (10))){
var inst_17390 = (state_17408[(2)]);
var state_17408__$1 = state_17408;
var statearr_17473_19808 = state_17408__$1;
(statearr_17473_19808[(2)] = inst_17390);

(statearr_17473_19808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17409 === (8))){
var inst_17366 = (state_17408[(7)]);
var inst_17376 = (state_17408[(11)]);
var tmp17468 = inst_17366;
var inst_17366__$1 = tmp17468;
var inst_17367 = inst_17376;
var state_17408__$1 = (function (){var statearr_17477 = state_17408;
(statearr_17477[(7)] = inst_17366__$1);

(statearr_17477[(8)] = inst_17367);

return statearr_17477;
})();
var statearr_17478_19810 = state_17408__$1;
(statearr_17478_19810[(2)] = null);

(statearr_17478_19810[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14124__auto__ = null;
var cljs$core$async$state_machine__14124__auto____0 = (function (){
var statearr_17481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17481[(0)] = cljs$core$async$state_machine__14124__auto__);

(statearr_17481[(1)] = (1));

return statearr_17481;
});
var cljs$core$async$state_machine__14124__auto____1 = (function (state_17408){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_17408);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e17482){var ex__14127__auto__ = e17482;
var statearr_17486_19811 = state_17408;
(statearr_17486_19811[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_17408[(4)]))){
var statearr_17489_19812 = state_17408;
(statearr_17489_19812[(1)] = cljs.core.first((state_17408[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19813 = state_17408;
state_17408 = G__19813;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$state_machine__14124__auto__ = function(state_17408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14124__auto____1.call(this,state_17408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14124__auto____0;
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14124__auto____1;
return cljs$core$async$state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_17498 = f__14469__auto__();
(statearr_17498[(6)] = c__14468__auto___19606);

return statearr_17498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17522 = arguments.length;
switch (G__17522) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14468__auto___19820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__14123__auto__ = (function (state_17597){
var state_val_17598 = (state_17597[(1)]);
if((state_val_17598 === (7))){
var inst_17593 = (state_17597[(2)]);
var state_17597__$1 = state_17597;
var statearr_17600_19821 = state_17597__$1;
(statearr_17600_19821[(2)] = inst_17593);

(statearr_17600_19821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17598 === (1))){
var inst_17539 = [];
var inst_17540 = inst_17539;
var inst_17541 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17597__$1 = (function (){var statearr_17605 = state_17597;
(statearr_17605[(7)] = inst_17540);

(statearr_17605[(8)] = inst_17541);

return statearr_17605;
})();
var statearr_17606_19822 = state_17597__$1;
(statearr_17606_19822[(2)] = null);

(statearr_17606_19822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17598 === (4))){
var inst_17550 = (state_17597[(9)]);
var inst_17550__$1 = (state_17597[(2)]);
var inst_17554 = (inst_17550__$1 == null);
var inst_17555 = cljs.core.not(inst_17554);
var state_17597__$1 = (function (){var statearr_17607 = state_17597;
(statearr_17607[(9)] = inst_17550__$1);

return statearr_17607;
})();
if(inst_17555){
var statearr_17608_19823 = state_17597__$1;
(statearr_17608_19823[(1)] = (5));

} else {
var statearr_17609_19824 = state_17597__$1;
(statearr_17609_19824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17598 === (15))){
var inst_17540 = (state_17597[(7)]);
var inst_17585 = cljs.core.vec(inst_17540);
var state_17597__$1 = state_17597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17597__$1,(18),out,inst_17585);
} else {
if((state_val_17598 === (13))){
var inst_17578 = (state_17597[(2)]);
var state_17597__$1 = state_17597;
var statearr_17612_19825 = state_17597__$1;
(statearr_17612_19825[(2)] = inst_17578);

(statearr_17612_19825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17598 === (6))){
var inst_17540 = (state_17597[(7)]);
var inst_17580 = inst_17540.length;
var inst_17581 = (inst_17580 > (0));
var state_17597__$1 = state_17597;
if(cljs.core.truth_(inst_17581)){
var statearr_17613_19827 = state_17597__$1;
(statearr_17613_19827[(1)] = (15));

} else {
var statearr_17614_19828 = state_17597__$1;
(statearr_17614_19828[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17598 === (17))){
var inst_17590 = (state_17597[(2)]);
var inst_17591 = cljs.core.async.close_BANG_(out);
var state_17597__$1 = (function (){var statearr_17615 = state_17597;
(statearr_17615[(10)] = inst_17590);

return statearr_17615;
})();
var statearr_17616_19830 = state_17597__$1;
(statearr_17616_19830[(2)] = inst_17591);

(statearr_17616_19830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17598 === (3))){
var inst_17595 = (state_17597[(2)]);
var state_17597__$1 = state_17597;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17597__$1,inst_17595);
} else {
if((state_val_17598 === (12))){
var inst_17540 = (state_17597[(7)]);
var inst_17570 = cljs.core.vec(inst_17540);
var state_17597__$1 = state_17597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17597__$1,(14),out,inst_17570);
} else {
if((state_val_17598 === (2))){
var state_17597__$1 = state_17597;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17597__$1,(4),ch);
} else {
if((state_val_17598 === (11))){
var inst_17540 = (state_17597[(7)]);
var inst_17550 = (state_17597[(9)]);
var inst_17557 = (state_17597[(11)]);
var inst_17567 = inst_17540.push(inst_17550);
var tmp17620 = inst_17540;
var inst_17540__$1 = tmp17620;
var inst_17541 = inst_17557;
var state_17597__$1 = (function (){var statearr_17621 = state_17597;
(statearr_17621[(7)] = inst_17540__$1);

(statearr_17621[(12)] = inst_17567);

(statearr_17621[(8)] = inst_17541);

return statearr_17621;
})();
var statearr_17622_19835 = state_17597__$1;
(statearr_17622_19835[(2)] = null);

(statearr_17622_19835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17598 === (9))){
var inst_17541 = (state_17597[(8)]);
var inst_17563 = cljs.core.keyword_identical_QMARK_(inst_17541,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17597__$1 = state_17597;
var statearr_17623_19840 = state_17597__$1;
(statearr_17623_19840[(2)] = inst_17563);

(statearr_17623_19840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17598 === (5))){
var inst_17550 = (state_17597[(9)]);
var inst_17541 = (state_17597[(8)]);
var inst_17560 = (state_17597[(13)]);
var inst_17557 = (state_17597[(11)]);
var inst_17557__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17550) : f.call(null, inst_17550));
var inst_17560__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17557__$1,inst_17541);
var state_17597__$1 = (function (){var statearr_17624 = state_17597;
(statearr_17624[(13)] = inst_17560__$1);

(statearr_17624[(11)] = inst_17557__$1);

return statearr_17624;
})();
if(inst_17560__$1){
var statearr_17625_19844 = state_17597__$1;
(statearr_17625_19844[(1)] = (8));

} else {
var statearr_17626_19846 = state_17597__$1;
(statearr_17626_19846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17598 === (14))){
var inst_17550 = (state_17597[(9)]);
var inst_17557 = (state_17597[(11)]);
var inst_17572 = (state_17597[(2)]);
var inst_17573 = [];
var inst_17575 = inst_17573.push(inst_17550);
var inst_17540 = inst_17573;
var inst_17541 = inst_17557;
var state_17597__$1 = (function (){var statearr_17639 = state_17597;
(statearr_17639[(7)] = inst_17540);

(statearr_17639[(14)] = inst_17572);

(statearr_17639[(15)] = inst_17575);

(statearr_17639[(8)] = inst_17541);

return statearr_17639;
})();
var statearr_17640_19847 = state_17597__$1;
(statearr_17640_19847[(2)] = null);

(statearr_17640_19847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17598 === (16))){
var state_17597__$1 = state_17597;
var statearr_17641_19848 = state_17597__$1;
(statearr_17641_19848[(2)] = null);

(statearr_17641_19848[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17598 === (10))){
var inst_17565 = (state_17597[(2)]);
var state_17597__$1 = state_17597;
if(cljs.core.truth_(inst_17565)){
var statearr_17642_19849 = state_17597__$1;
(statearr_17642_19849[(1)] = (11));

} else {
var statearr_17643_19850 = state_17597__$1;
(statearr_17643_19850[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17598 === (18))){
var inst_17587 = (state_17597[(2)]);
var state_17597__$1 = state_17597;
var statearr_17644_19852 = state_17597__$1;
(statearr_17644_19852[(2)] = inst_17587);

(statearr_17644_19852[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17598 === (8))){
var inst_17560 = (state_17597[(13)]);
var state_17597__$1 = state_17597;
var statearr_17647_19853 = state_17597__$1;
(statearr_17647_19853[(2)] = inst_17560);

(statearr_17647_19853[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__14124__auto__ = null;
var cljs$core$async$state_machine__14124__auto____0 = (function (){
var statearr_17652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17652[(0)] = cljs$core$async$state_machine__14124__auto__);

(statearr_17652[(1)] = (1));

return statearr_17652;
});
var cljs$core$async$state_machine__14124__auto____1 = (function (state_17597){
while(true){
var ret_value__14125__auto__ = (function (){try{while(true){
var result__14126__auto__ = switch__14123__auto__(state_17597);
if(cljs.core.keyword_identical_QMARK_(result__14126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14126__auto__;
}
break;
}
}catch (e17653){var ex__14127__auto__ = e17653;
var statearr_17654_19862 = state_17597;
(statearr_17654_19862[(2)] = ex__14127__auto__);


if(cljs.core.seq((state_17597[(4)]))){
var statearr_17655_19863 = state_17597;
(statearr_17655_19863[(1)] = cljs.core.first((state_17597[(4)])));

} else {
throw ex__14127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19867 = state_17597;
state_17597 = G__19867;
continue;
} else {
return ret_value__14125__auto__;
}
break;
}
});
cljs$core$async$state_machine__14124__auto__ = function(state_17597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14124__auto____1.call(this,state_17597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14124__auto____0;
cljs$core$async$state_machine__14124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14124__auto____1;
return cljs$core$async$state_machine__14124__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_17656 = f__14469__auto__();
(statearr_17656[(6)] = c__14468__auto___19820);

return statearr_17656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
