goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12507 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12507(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12509 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12509(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11717 = coll;
var G__11718 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11717,G__11718) : shadow.dom.lazy_native_coll_seq.call(null, G__11717,G__11718));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11728 = arguments.length;
switch (G__11728) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11737 = arguments.length;
switch (G__11737) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11744 = arguments.length;
switch (G__11744) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11763 = arguments.length;
switch (G__11763) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11781 = arguments.length;
switch (G__11781) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11794 = arguments.length;
switch (G__11794) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e11803){if((e11803 instanceof Object)){
var e = e11803;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11803;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11810 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11811 = null;
var count__11812 = (0);
var i__11813 = (0);
while(true){
if((i__11813 < count__11812)){
var el = chunk__11811.cljs$core$IIndexed$_nth$arity$2(null, i__11813);
var handler_12572__$1 = ((function (seq__11810,chunk__11811,count__11812,i__11813,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11810,chunk__11811,count__11812,i__11813,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12572__$1);


var G__12573 = seq__11810;
var G__12574 = chunk__11811;
var G__12575 = count__11812;
var G__12576 = (i__11813 + (1));
seq__11810 = G__12573;
chunk__11811 = G__12574;
count__11812 = G__12575;
i__11813 = G__12576;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11810);
if(temp__5804__auto__){
var seq__11810__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11810__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11810__$1);
var G__12577 = cljs.core.chunk_rest(seq__11810__$1);
var G__12578 = c__5525__auto__;
var G__12579 = cljs.core.count(c__5525__auto__);
var G__12580 = (0);
seq__11810 = G__12577;
chunk__11811 = G__12578;
count__11812 = G__12579;
i__11813 = G__12580;
continue;
} else {
var el = cljs.core.first(seq__11810__$1);
var handler_12583__$1 = ((function (seq__11810,chunk__11811,count__11812,i__11813,el,seq__11810__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11810,chunk__11811,count__11812,i__11813,el,seq__11810__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12583__$1);


var G__12588 = cljs.core.next(seq__11810__$1);
var G__12589 = null;
var G__12590 = (0);
var G__12591 = (0);
seq__11810 = G__12588;
chunk__11811 = G__12589;
count__11812 = G__12590;
i__11813 = G__12591;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11825 = arguments.length;
switch (G__11825) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11831 = cljs.core.seq(events);
var chunk__11832 = null;
var count__11833 = (0);
var i__11834 = (0);
while(true){
if((i__11834 < count__11833)){
var vec__11841 = chunk__11832.cljs$core$IIndexed$_nth$arity$2(null, i__11834);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11841,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11841,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12606 = seq__11831;
var G__12607 = chunk__11832;
var G__12608 = count__11833;
var G__12609 = (i__11834 + (1));
seq__11831 = G__12606;
chunk__11832 = G__12607;
count__11833 = G__12608;
i__11834 = G__12609;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11831);
if(temp__5804__auto__){
var seq__11831__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11831__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11831__$1);
var G__12611 = cljs.core.chunk_rest(seq__11831__$1);
var G__12612 = c__5525__auto__;
var G__12613 = cljs.core.count(c__5525__auto__);
var G__12614 = (0);
seq__11831 = G__12611;
chunk__11832 = G__12612;
count__11833 = G__12613;
i__11834 = G__12614;
continue;
} else {
var vec__11844 = cljs.core.first(seq__11831__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11844,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11844,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12623 = cljs.core.next(seq__11831__$1);
var G__12624 = null;
var G__12625 = (0);
var G__12626 = (0);
seq__11831 = G__12623;
chunk__11832 = G__12624;
count__11833 = G__12625;
i__11834 = G__12626;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11921 = cljs.core.seq(styles);
var chunk__11922 = null;
var count__11923 = (0);
var i__11924 = (0);
while(true){
if((i__11924 < count__11923)){
var vec__11931 = chunk__11922.cljs$core$IIndexed$_nth$arity$2(null, i__11924);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11931,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11931,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12636 = seq__11921;
var G__12637 = chunk__11922;
var G__12638 = count__11923;
var G__12639 = (i__11924 + (1));
seq__11921 = G__12636;
chunk__11922 = G__12637;
count__11923 = G__12638;
i__11924 = G__12639;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11921);
if(temp__5804__auto__){
var seq__11921__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11921__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11921__$1);
var G__12642 = cljs.core.chunk_rest(seq__11921__$1);
var G__12643 = c__5525__auto__;
var G__12644 = cljs.core.count(c__5525__auto__);
var G__12645 = (0);
seq__11921 = G__12642;
chunk__11922 = G__12643;
count__11923 = G__12644;
i__11924 = G__12645;
continue;
} else {
var vec__11934 = cljs.core.first(seq__11921__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11934,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11934,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12648 = cljs.core.next(seq__11921__$1);
var G__12649 = null;
var G__12650 = (0);
var G__12651 = (0);
seq__11921 = G__12648;
chunk__11922 = G__12649;
count__11923 = G__12650;
i__11924 = G__12651;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11940_12652 = key;
var G__11940_12653__$1 = (((G__11940_12652 instanceof cljs.core.Keyword))?G__11940_12652.fqn:null);
switch (G__11940_12653__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12672 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12672,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12672,"aria-");
}
})())){
el.setAttribute(ks_12672,value);
} else {
(el[ks_12672] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11945){
var map__11946 = p__11945;
var map__11946__$1 = cljs.core.__destructure_map(map__11946);
var props = map__11946__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11946__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11948 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11948,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11948,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11948,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11951 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11951,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11951;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11953 = arguments.length;
switch (G__11953) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11954){
var vec__11955 = p__11954;
var seq__11956 = cljs.core.seq(vec__11955);
var first__11957 = cljs.core.first(seq__11956);
var seq__11956__$1 = cljs.core.next(seq__11956);
var nn = first__11957;
var first__11957__$1 = cljs.core.first(seq__11956__$1);
var seq__11956__$2 = cljs.core.next(seq__11956__$1);
var np = first__11957__$1;
var nc = seq__11956__$2;
var node = vec__11955;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11958 = nn;
var G__11959 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11958,G__11959) : create_fn.call(null, G__11958,G__11959));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11960 = nn;
var G__11961 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11960,G__11961) : create_fn.call(null, G__11960,G__11961));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11962 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11962,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11962,(1),null);
var seq__11965_12720 = cljs.core.seq(node_children);
var chunk__11966_12721 = null;
var count__11967_12724 = (0);
var i__11968_12725 = (0);
while(true){
if((i__11968_12725 < count__11967_12724)){
var child_struct_12726 = chunk__11966_12721.cljs$core$IIndexed$_nth$arity$2(null, i__11968_12725);
var children_12727 = shadow.dom.dom_node(child_struct_12726);
if(cljs.core.seq_QMARK_(children_12727)){
var seq__11994_12728 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12727));
var chunk__11996_12729 = null;
var count__11997_12730 = (0);
var i__11998_12731 = (0);
while(true){
if((i__11998_12731 < count__11997_12730)){
var child_12733 = chunk__11996_12729.cljs$core$IIndexed$_nth$arity$2(null, i__11998_12731);
if(cljs.core.truth_(child_12733)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12733);


var G__12736 = seq__11994_12728;
var G__12737 = chunk__11996_12729;
var G__12738 = count__11997_12730;
var G__12739 = (i__11998_12731 + (1));
seq__11994_12728 = G__12736;
chunk__11996_12729 = G__12737;
count__11997_12730 = G__12738;
i__11998_12731 = G__12739;
continue;
} else {
var G__12740 = seq__11994_12728;
var G__12741 = chunk__11996_12729;
var G__12742 = count__11997_12730;
var G__12743 = (i__11998_12731 + (1));
seq__11994_12728 = G__12740;
chunk__11996_12729 = G__12741;
count__11997_12730 = G__12742;
i__11998_12731 = G__12743;
continue;
}
} else {
var temp__5804__auto___12747 = cljs.core.seq(seq__11994_12728);
if(temp__5804__auto___12747){
var seq__11994_12750__$1 = temp__5804__auto___12747;
if(cljs.core.chunked_seq_QMARK_(seq__11994_12750__$1)){
var c__5525__auto___12752 = cljs.core.chunk_first(seq__11994_12750__$1);
var G__12753 = cljs.core.chunk_rest(seq__11994_12750__$1);
var G__12754 = c__5525__auto___12752;
var G__12755 = cljs.core.count(c__5525__auto___12752);
var G__12756 = (0);
seq__11994_12728 = G__12753;
chunk__11996_12729 = G__12754;
count__11997_12730 = G__12755;
i__11998_12731 = G__12756;
continue;
} else {
var child_12757 = cljs.core.first(seq__11994_12750__$1);
if(cljs.core.truth_(child_12757)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12757);


var G__12759 = cljs.core.next(seq__11994_12750__$1);
var G__12760 = null;
var G__12761 = (0);
var G__12762 = (0);
seq__11994_12728 = G__12759;
chunk__11996_12729 = G__12760;
count__11997_12730 = G__12761;
i__11998_12731 = G__12762;
continue;
} else {
var G__12763 = cljs.core.next(seq__11994_12750__$1);
var G__12764 = null;
var G__12765 = (0);
var G__12766 = (0);
seq__11994_12728 = G__12763;
chunk__11996_12729 = G__12764;
count__11997_12730 = G__12765;
i__11998_12731 = G__12766;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12727);
}


var G__12771 = seq__11965_12720;
var G__12772 = chunk__11966_12721;
var G__12773 = count__11967_12724;
var G__12774 = (i__11968_12725 + (1));
seq__11965_12720 = G__12771;
chunk__11966_12721 = G__12772;
count__11967_12724 = G__12773;
i__11968_12725 = G__12774;
continue;
} else {
var temp__5804__auto___12778 = cljs.core.seq(seq__11965_12720);
if(temp__5804__auto___12778){
var seq__11965_12781__$1 = temp__5804__auto___12778;
if(cljs.core.chunked_seq_QMARK_(seq__11965_12781__$1)){
var c__5525__auto___12782 = cljs.core.chunk_first(seq__11965_12781__$1);
var G__12783 = cljs.core.chunk_rest(seq__11965_12781__$1);
var G__12784 = c__5525__auto___12782;
var G__12785 = cljs.core.count(c__5525__auto___12782);
var G__12786 = (0);
seq__11965_12720 = G__12783;
chunk__11966_12721 = G__12784;
count__11967_12724 = G__12785;
i__11968_12725 = G__12786;
continue;
} else {
var child_struct_12787 = cljs.core.first(seq__11965_12781__$1);
var children_12788 = shadow.dom.dom_node(child_struct_12787);
if(cljs.core.seq_QMARK_(children_12788)){
var seq__12000_12789 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12788));
var chunk__12002_12790 = null;
var count__12003_12791 = (0);
var i__12004_12792 = (0);
while(true){
if((i__12004_12792 < count__12003_12791)){
var child_12793 = chunk__12002_12790.cljs$core$IIndexed$_nth$arity$2(null, i__12004_12792);
if(cljs.core.truth_(child_12793)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12793);


var G__12794 = seq__12000_12789;
var G__12795 = chunk__12002_12790;
var G__12796 = count__12003_12791;
var G__12797 = (i__12004_12792 + (1));
seq__12000_12789 = G__12794;
chunk__12002_12790 = G__12795;
count__12003_12791 = G__12796;
i__12004_12792 = G__12797;
continue;
} else {
var G__12799 = seq__12000_12789;
var G__12800 = chunk__12002_12790;
var G__12801 = count__12003_12791;
var G__12802 = (i__12004_12792 + (1));
seq__12000_12789 = G__12799;
chunk__12002_12790 = G__12800;
count__12003_12791 = G__12801;
i__12004_12792 = G__12802;
continue;
}
} else {
var temp__5804__auto___12803__$1 = cljs.core.seq(seq__12000_12789);
if(temp__5804__auto___12803__$1){
var seq__12000_12805__$1 = temp__5804__auto___12803__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12000_12805__$1)){
var c__5525__auto___12807 = cljs.core.chunk_first(seq__12000_12805__$1);
var G__12808 = cljs.core.chunk_rest(seq__12000_12805__$1);
var G__12809 = c__5525__auto___12807;
var G__12810 = cljs.core.count(c__5525__auto___12807);
var G__12811 = (0);
seq__12000_12789 = G__12808;
chunk__12002_12790 = G__12809;
count__12003_12791 = G__12810;
i__12004_12792 = G__12811;
continue;
} else {
var child_12813 = cljs.core.first(seq__12000_12805__$1);
if(cljs.core.truth_(child_12813)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12813);


var G__12814 = cljs.core.next(seq__12000_12805__$1);
var G__12815 = null;
var G__12816 = (0);
var G__12817 = (0);
seq__12000_12789 = G__12814;
chunk__12002_12790 = G__12815;
count__12003_12791 = G__12816;
i__12004_12792 = G__12817;
continue;
} else {
var G__12819 = cljs.core.next(seq__12000_12805__$1);
var G__12820 = null;
var G__12821 = (0);
var G__12822 = (0);
seq__12000_12789 = G__12819;
chunk__12002_12790 = G__12820;
count__12003_12791 = G__12821;
i__12004_12792 = G__12822;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12788);
}


var G__12824 = cljs.core.next(seq__11965_12781__$1);
var G__12825 = null;
var G__12826 = (0);
var G__12827 = (0);
seq__11965_12720 = G__12824;
chunk__11966_12721 = G__12825;
count__11967_12724 = G__12826;
i__11968_12725 = G__12827;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12007 = cljs.core.seq(node);
var chunk__12008 = null;
var count__12009 = (0);
var i__12010 = (0);
while(true){
if((i__12010 < count__12009)){
var n = chunk__12008.cljs$core$IIndexed$_nth$arity$2(null, i__12010);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12834 = seq__12007;
var G__12835 = chunk__12008;
var G__12836 = count__12009;
var G__12837 = (i__12010 + (1));
seq__12007 = G__12834;
chunk__12008 = G__12835;
count__12009 = G__12836;
i__12010 = G__12837;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12007);
if(temp__5804__auto__){
var seq__12007__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12007__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12007__$1);
var G__12838 = cljs.core.chunk_rest(seq__12007__$1);
var G__12839 = c__5525__auto__;
var G__12840 = cljs.core.count(c__5525__auto__);
var G__12841 = (0);
seq__12007 = G__12838;
chunk__12008 = G__12839;
count__12009 = G__12840;
i__12010 = G__12841;
continue;
} else {
var n = cljs.core.first(seq__12007__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12842 = cljs.core.next(seq__12007__$1);
var G__12843 = null;
var G__12844 = (0);
var G__12845 = (0);
seq__12007 = G__12842;
chunk__12008 = G__12843;
count__12009 = G__12844;
i__12010 = G__12845;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12012 = arguments.length;
switch (G__12012) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12014 = arguments.length;
switch (G__12014) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12016 = arguments.length;
switch (G__12016) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12869 = arguments.length;
var i__5727__auto___12870 = (0);
while(true){
if((i__5727__auto___12870 < len__5726__auto___12869)){
args__5732__auto__.push((arguments[i__5727__auto___12870]));

var G__12871 = (i__5727__auto___12870 + (1));
i__5727__auto___12870 = G__12871;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12018_12873 = cljs.core.seq(nodes);
var chunk__12019_12874 = null;
var count__12020_12875 = (0);
var i__12021_12879 = (0);
while(true){
if((i__12021_12879 < count__12020_12875)){
var node_12880 = chunk__12019_12874.cljs$core$IIndexed$_nth$arity$2(null, i__12021_12879);
fragment.appendChild(shadow.dom._to_dom(node_12880));


var G__12882 = seq__12018_12873;
var G__12883 = chunk__12019_12874;
var G__12884 = count__12020_12875;
var G__12885 = (i__12021_12879 + (1));
seq__12018_12873 = G__12882;
chunk__12019_12874 = G__12883;
count__12020_12875 = G__12884;
i__12021_12879 = G__12885;
continue;
} else {
var temp__5804__auto___12886 = cljs.core.seq(seq__12018_12873);
if(temp__5804__auto___12886){
var seq__12018_12887__$1 = temp__5804__auto___12886;
if(cljs.core.chunked_seq_QMARK_(seq__12018_12887__$1)){
var c__5525__auto___12888 = cljs.core.chunk_first(seq__12018_12887__$1);
var G__12890 = cljs.core.chunk_rest(seq__12018_12887__$1);
var G__12891 = c__5525__auto___12888;
var G__12892 = cljs.core.count(c__5525__auto___12888);
var G__12893 = (0);
seq__12018_12873 = G__12890;
chunk__12019_12874 = G__12891;
count__12020_12875 = G__12892;
i__12021_12879 = G__12893;
continue;
} else {
var node_12894 = cljs.core.first(seq__12018_12887__$1);
fragment.appendChild(shadow.dom._to_dom(node_12894));


var G__12895 = cljs.core.next(seq__12018_12887__$1);
var G__12896 = null;
var G__12897 = (0);
var G__12898 = (0);
seq__12018_12873 = G__12895;
chunk__12019_12874 = G__12896;
count__12020_12875 = G__12897;
i__12021_12879 = G__12898;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12017){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12017));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12022_12901 = cljs.core.seq(scripts);
var chunk__12023_12902 = null;
var count__12024_12903 = (0);
var i__12025_12904 = (0);
while(true){
if((i__12025_12904 < count__12024_12903)){
var vec__12032_12905 = chunk__12023_12902.cljs$core$IIndexed$_nth$arity$2(null, i__12025_12904);
var script_tag_12906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12032_12905,(0),null);
var script_body_12907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12032_12905,(1),null);
eval(script_body_12907);


var G__12909 = seq__12022_12901;
var G__12910 = chunk__12023_12902;
var G__12911 = count__12024_12903;
var G__12912 = (i__12025_12904 + (1));
seq__12022_12901 = G__12909;
chunk__12023_12902 = G__12910;
count__12024_12903 = G__12911;
i__12025_12904 = G__12912;
continue;
} else {
var temp__5804__auto___12913 = cljs.core.seq(seq__12022_12901);
if(temp__5804__auto___12913){
var seq__12022_12915__$1 = temp__5804__auto___12913;
if(cljs.core.chunked_seq_QMARK_(seq__12022_12915__$1)){
var c__5525__auto___12916 = cljs.core.chunk_first(seq__12022_12915__$1);
var G__12917 = cljs.core.chunk_rest(seq__12022_12915__$1);
var G__12918 = c__5525__auto___12916;
var G__12919 = cljs.core.count(c__5525__auto___12916);
var G__12920 = (0);
seq__12022_12901 = G__12917;
chunk__12023_12902 = G__12918;
count__12024_12903 = G__12919;
i__12025_12904 = G__12920;
continue;
} else {
var vec__12035_12921 = cljs.core.first(seq__12022_12915__$1);
var script_tag_12922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12035_12921,(0),null);
var script_body_12923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12035_12921,(1),null);
eval(script_body_12923);


var G__12924 = cljs.core.next(seq__12022_12915__$1);
var G__12925 = null;
var G__12926 = (0);
var G__12927 = (0);
seq__12022_12901 = G__12924;
chunk__12023_12902 = G__12925;
count__12024_12903 = G__12926;
i__12025_12904 = G__12927;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12038){
var vec__12039 = p__12038;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12039,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12039,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12043 = arguments.length;
switch (G__12043) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12044 = cljs.core.seq(style_keys);
var chunk__12045 = null;
var count__12046 = (0);
var i__12047 = (0);
while(true){
if((i__12047 < count__12046)){
var it = chunk__12045.cljs$core$IIndexed$_nth$arity$2(null, i__12047);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12938 = seq__12044;
var G__12939 = chunk__12045;
var G__12940 = count__12046;
var G__12941 = (i__12047 + (1));
seq__12044 = G__12938;
chunk__12045 = G__12939;
count__12046 = G__12940;
i__12047 = G__12941;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12044);
if(temp__5804__auto__){
var seq__12044__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12044__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12044__$1);
var G__12945 = cljs.core.chunk_rest(seq__12044__$1);
var G__12946 = c__5525__auto__;
var G__12948 = cljs.core.count(c__5525__auto__);
var G__12949 = (0);
seq__12044 = G__12945;
chunk__12045 = G__12946;
count__12046 = G__12948;
i__12047 = G__12949;
continue;
} else {
var it = cljs.core.first(seq__12044__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12954 = cljs.core.next(seq__12044__$1);
var G__12955 = null;
var G__12956 = (0);
var G__12957 = (0);
seq__12044 = G__12954;
chunk__12045 = G__12955;
count__12046 = G__12956;
i__12047 = G__12957;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12052,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12060 = k12052;
var G__12060__$1 = (((G__12060 instanceof cljs.core.Keyword))?G__12060.fqn:null);
switch (G__12060__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12052,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12062){
var vec__12063 = p__12062;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12063,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12063,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12051){
var self__ = this;
var G__12051__$1 = this;
return (new cljs.core.RecordIter((0),G__12051__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12053,other12054){
var self__ = this;
var this12053__$1 = this;
return (((!((other12054 == null)))) && ((((this12053__$1.constructor === other12054.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12053__$1.x,other12054.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12053__$1.y,other12054.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12053__$1.__extmap,other12054.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12052){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12075 = k12052;
var G__12075__$1 = (((G__12075 instanceof cljs.core.Keyword))?G__12075.fqn:null);
switch (G__12075__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12052);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12051){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12076 = cljs.core.keyword_identical_QMARK_;
var expr__12077 = k__5309__auto__;
if(cljs.core.truth_((pred__12076.cljs$core$IFn$_invoke$arity$2 ? pred__12076.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12077) : pred__12076.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12077)))){
return (new shadow.dom.Coordinate(G__12051,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12076.cljs$core$IFn$_invoke$arity$2 ? pred__12076.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12077) : pred__12076.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12077)))){
return (new shadow.dom.Coordinate(self__.x,G__12051,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12051),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12051){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12051,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12057){
var extmap__5342__auto__ = (function (){var G__12082 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12057,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12057)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12082);
} else {
return G__12082;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12057),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12057),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12085,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12138 = k12085;
var G__12138__$1 = (((G__12138 instanceof cljs.core.Keyword))?G__12138.fqn:null);
switch (G__12138__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12085,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12155){
var vec__12156 = p__12155;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12156,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12156,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12084){
var self__ = this;
var G__12084__$1 = this;
return (new cljs.core.RecordIter((0),G__12084__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12086,other12087){
var self__ = this;
var this12086__$1 = this;
return (((!((other12087 == null)))) && ((((this12086__$1.constructor === other12087.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12086__$1.w,other12087.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12086__$1.h,other12087.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12086__$1.__extmap,other12087.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12085){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12174 = k12085;
var G__12174__$1 = (((G__12174 instanceof cljs.core.Keyword))?G__12174.fqn:null);
switch (G__12174__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12085);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12084){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12175 = cljs.core.keyword_identical_QMARK_;
var expr__12176 = k__5309__auto__;
if(cljs.core.truth_((pred__12175.cljs$core$IFn$_invoke$arity$2 ? pred__12175.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12176) : pred__12175.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12176)))){
return (new shadow.dom.Size(G__12084,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12175.cljs$core$IFn$_invoke$arity$2 ? pred__12175.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12176) : pred__12175.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12176)))){
return (new shadow.dom.Size(self__.w,G__12084,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12084),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12084){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12084,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12095){
var extmap__5342__auto__ = (function (){var G__12189 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12095,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12095)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12189);
} else {
return G__12189;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12095),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12095),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__13020 = (i + (1));
var G__13021 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13020;
ret = G__13021;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12214){
var vec__12216 = p__12214;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12216,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12216,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12231 = arguments.length;
switch (G__12231) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13030 = ps;
var G__13031 = (i + (1));
el__$1 = G__13030;
i = G__13031;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12266 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12266,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12266,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12266,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12291_13050 = cljs.core.seq(props);
var chunk__12292_13051 = null;
var count__12293_13052 = (0);
var i__12294_13053 = (0);
while(true){
if((i__12294_13053 < count__12293_13052)){
var vec__12316_13055 = chunk__12292_13051.cljs$core$IIndexed$_nth$arity$2(null, i__12294_13053);
var k_13056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12316_13055,(0),null);
var v_13057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12316_13055,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_13056);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13056),v_13057);


var G__13060 = seq__12291_13050;
var G__13061 = chunk__12292_13051;
var G__13062 = count__12293_13052;
var G__13063 = (i__12294_13053 + (1));
seq__12291_13050 = G__13060;
chunk__12292_13051 = G__13061;
count__12293_13052 = G__13062;
i__12294_13053 = G__13063;
continue;
} else {
var temp__5804__auto___13065 = cljs.core.seq(seq__12291_13050);
if(temp__5804__auto___13065){
var seq__12291_13067__$1 = temp__5804__auto___13065;
if(cljs.core.chunked_seq_QMARK_(seq__12291_13067__$1)){
var c__5525__auto___13068 = cljs.core.chunk_first(seq__12291_13067__$1);
var G__13069 = cljs.core.chunk_rest(seq__12291_13067__$1);
var G__13070 = c__5525__auto___13068;
var G__13071 = cljs.core.count(c__5525__auto___13068);
var G__13072 = (0);
seq__12291_13050 = G__13069;
chunk__12292_13051 = G__13070;
count__12293_13052 = G__13071;
i__12294_13053 = G__13072;
continue;
} else {
var vec__12329_13075 = cljs.core.first(seq__12291_13067__$1);
var k_13076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12329_13075,(0),null);
var v_13077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12329_13075,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_13076);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13076),v_13077);


var G__13081 = cljs.core.next(seq__12291_13067__$1);
var G__13082 = null;
var G__13083 = (0);
var G__13084 = (0);
seq__12291_13050 = G__13081;
chunk__12292_13051 = G__13082;
count__12293_13052 = G__13083;
i__12294_13053 = G__13084;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12343 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12343,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12343,(1),null);
var seq__12347_13097 = cljs.core.seq(node_children);
var chunk__12349_13098 = null;
var count__12350_13099 = (0);
var i__12351_13102 = (0);
while(true){
if((i__12351_13102 < count__12350_13099)){
var child_struct_13104 = chunk__12349_13098.cljs$core$IIndexed$_nth$arity$2(null, i__12351_13102);
if((!((child_struct_13104 == null)))){
if(typeof child_struct_13104 === 'string'){
var text_13105 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13105),child_struct_13104].join(''));
} else {
var children_13107 = shadow.dom.svg_node(child_struct_13104);
if(cljs.core.seq_QMARK_(children_13107)){
var seq__12403_13109 = cljs.core.seq(children_13107);
var chunk__12405_13110 = null;
var count__12406_13111 = (0);
var i__12407_13112 = (0);
while(true){
if((i__12407_13112 < count__12406_13111)){
var child_13114 = chunk__12405_13110.cljs$core$IIndexed$_nth$arity$2(null, i__12407_13112);
if(cljs.core.truth_(child_13114)){
node.appendChild(child_13114);


var G__13117 = seq__12403_13109;
var G__13118 = chunk__12405_13110;
var G__13119 = count__12406_13111;
var G__13120 = (i__12407_13112 + (1));
seq__12403_13109 = G__13117;
chunk__12405_13110 = G__13118;
count__12406_13111 = G__13119;
i__12407_13112 = G__13120;
continue;
} else {
var G__13121 = seq__12403_13109;
var G__13122 = chunk__12405_13110;
var G__13123 = count__12406_13111;
var G__13124 = (i__12407_13112 + (1));
seq__12403_13109 = G__13121;
chunk__12405_13110 = G__13122;
count__12406_13111 = G__13123;
i__12407_13112 = G__13124;
continue;
}
} else {
var temp__5804__auto___13125 = cljs.core.seq(seq__12403_13109);
if(temp__5804__auto___13125){
var seq__12403_13127__$1 = temp__5804__auto___13125;
if(cljs.core.chunked_seq_QMARK_(seq__12403_13127__$1)){
var c__5525__auto___13128 = cljs.core.chunk_first(seq__12403_13127__$1);
var G__13130 = cljs.core.chunk_rest(seq__12403_13127__$1);
var G__13131 = c__5525__auto___13128;
var G__13132 = cljs.core.count(c__5525__auto___13128);
var G__13133 = (0);
seq__12403_13109 = G__13130;
chunk__12405_13110 = G__13131;
count__12406_13111 = G__13132;
i__12407_13112 = G__13133;
continue;
} else {
var child_13134 = cljs.core.first(seq__12403_13127__$1);
if(cljs.core.truth_(child_13134)){
node.appendChild(child_13134);


var G__13135 = cljs.core.next(seq__12403_13127__$1);
var G__13136 = null;
var G__13137 = (0);
var G__13138 = (0);
seq__12403_13109 = G__13135;
chunk__12405_13110 = G__13136;
count__12406_13111 = G__13137;
i__12407_13112 = G__13138;
continue;
} else {
var G__13139 = cljs.core.next(seq__12403_13127__$1);
var G__13140 = null;
var G__13141 = (0);
var G__13142 = (0);
seq__12403_13109 = G__13139;
chunk__12405_13110 = G__13140;
count__12406_13111 = G__13141;
i__12407_13112 = G__13142;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13107);
}
}


var G__13145 = seq__12347_13097;
var G__13146 = chunk__12349_13098;
var G__13147 = count__12350_13099;
var G__13148 = (i__12351_13102 + (1));
seq__12347_13097 = G__13145;
chunk__12349_13098 = G__13146;
count__12350_13099 = G__13147;
i__12351_13102 = G__13148;
continue;
} else {
var G__13149 = seq__12347_13097;
var G__13150 = chunk__12349_13098;
var G__13151 = count__12350_13099;
var G__13152 = (i__12351_13102 + (1));
seq__12347_13097 = G__13149;
chunk__12349_13098 = G__13150;
count__12350_13099 = G__13151;
i__12351_13102 = G__13152;
continue;
}
} else {
var temp__5804__auto___13154 = cljs.core.seq(seq__12347_13097);
if(temp__5804__auto___13154){
var seq__12347_13156__$1 = temp__5804__auto___13154;
if(cljs.core.chunked_seq_QMARK_(seq__12347_13156__$1)){
var c__5525__auto___13157 = cljs.core.chunk_first(seq__12347_13156__$1);
var G__13158 = cljs.core.chunk_rest(seq__12347_13156__$1);
var G__13159 = c__5525__auto___13157;
var G__13160 = cljs.core.count(c__5525__auto___13157);
var G__13161 = (0);
seq__12347_13097 = G__13158;
chunk__12349_13098 = G__13159;
count__12350_13099 = G__13160;
i__12351_13102 = G__13161;
continue;
} else {
var child_struct_13163 = cljs.core.first(seq__12347_13156__$1);
if((!((child_struct_13163 == null)))){
if(typeof child_struct_13163 === 'string'){
var text_13170 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13170),child_struct_13163].join(''));
} else {
var children_13171 = shadow.dom.svg_node(child_struct_13163);
if(cljs.core.seq_QMARK_(children_13171)){
var seq__12438_13172 = cljs.core.seq(children_13171);
var chunk__12440_13173 = null;
var count__12441_13174 = (0);
var i__12442_13175 = (0);
while(true){
if((i__12442_13175 < count__12441_13174)){
var child_13177 = chunk__12440_13173.cljs$core$IIndexed$_nth$arity$2(null, i__12442_13175);
if(cljs.core.truth_(child_13177)){
node.appendChild(child_13177);


var G__13179 = seq__12438_13172;
var G__13180 = chunk__12440_13173;
var G__13181 = count__12441_13174;
var G__13182 = (i__12442_13175 + (1));
seq__12438_13172 = G__13179;
chunk__12440_13173 = G__13180;
count__12441_13174 = G__13181;
i__12442_13175 = G__13182;
continue;
} else {
var G__13188 = seq__12438_13172;
var G__13189 = chunk__12440_13173;
var G__13190 = count__12441_13174;
var G__13191 = (i__12442_13175 + (1));
seq__12438_13172 = G__13188;
chunk__12440_13173 = G__13189;
count__12441_13174 = G__13190;
i__12442_13175 = G__13191;
continue;
}
} else {
var temp__5804__auto___13193__$1 = cljs.core.seq(seq__12438_13172);
if(temp__5804__auto___13193__$1){
var seq__12438_13194__$1 = temp__5804__auto___13193__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12438_13194__$1)){
var c__5525__auto___13195 = cljs.core.chunk_first(seq__12438_13194__$1);
var G__13196 = cljs.core.chunk_rest(seq__12438_13194__$1);
var G__13197 = c__5525__auto___13195;
var G__13198 = cljs.core.count(c__5525__auto___13195);
var G__13199 = (0);
seq__12438_13172 = G__13196;
chunk__12440_13173 = G__13197;
count__12441_13174 = G__13198;
i__12442_13175 = G__13199;
continue;
} else {
var child_13201 = cljs.core.first(seq__12438_13194__$1);
if(cljs.core.truth_(child_13201)){
node.appendChild(child_13201);


var G__13206 = cljs.core.next(seq__12438_13194__$1);
var G__13207 = null;
var G__13208 = (0);
var G__13209 = (0);
seq__12438_13172 = G__13206;
chunk__12440_13173 = G__13207;
count__12441_13174 = G__13208;
i__12442_13175 = G__13209;
continue;
} else {
var G__13210 = cljs.core.next(seq__12438_13194__$1);
var G__13211 = null;
var G__13212 = (0);
var G__13213 = (0);
seq__12438_13172 = G__13210;
chunk__12440_13173 = G__13211;
count__12441_13174 = G__13212;
i__12442_13175 = G__13213;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13171);
}
}


var G__13214 = cljs.core.next(seq__12347_13156__$1);
var G__13215 = null;
var G__13216 = (0);
var G__13217 = (0);
seq__12347_13097 = G__13214;
chunk__12349_13098 = G__13215;
count__12350_13099 = G__13216;
i__12351_13102 = G__13217;
continue;
} else {
var G__13218 = cljs.core.next(seq__12347_13156__$1);
var G__13219 = null;
var G__13220 = (0);
var G__13221 = (0);
seq__12347_13097 = G__13218;
chunk__12349_13098 = G__13219;
count__12350_13099 = G__13220;
i__12351_13102 = G__13221;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13235 = arguments.length;
var i__5727__auto___13236 = (0);
while(true){
if((i__5727__auto___13236 < len__5726__auto___13235)){
args__5732__auto__.push((arguments[i__5727__auto___13236]));

var G__13239 = (i__5727__auto___13236 + (1));
i__5727__auto___13236 = G__13239;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12494){
var G__12495 = cljs.core.first(seq12494);
var seq12494__$1 = cljs.core.next(seq12494);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12495,seq12494__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
