goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21519 = arguments.length;
var i__5727__auto___21520 = (0);
while(true){
if((i__5727__auto___21520 < len__5726__auto___21519)){
args__5732__auto__.push((arguments[i__5727__auto___21520]));

var G__21521 = (i__5727__auto___21520 + (1));
i__5727__auto___21520 = G__21521;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21072){
var G__21077 = cljs.core.first(seq21072);
var seq21072__$1 = cljs.core.next(seq21072);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21077,seq21072__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21087 = cljs.core.seq(sources);
var chunk__21088 = null;
var count__21089 = (0);
var i__21090 = (0);
while(true){
if((i__21090 < count__21089)){
var map__21101 = chunk__21088.cljs$core$IIndexed$_nth$arity$2(null, i__21090);
var map__21101__$1 = cljs.core.__destructure_map(map__21101);
var src = map__21101__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21101__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21101__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21101__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21101__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21114){var e_21522 = e21114;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21522);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21522.message)].join('')));
}

var G__21523 = seq__21087;
var G__21524 = chunk__21088;
var G__21525 = count__21089;
var G__21526 = (i__21090 + (1));
seq__21087 = G__21523;
chunk__21088 = G__21524;
count__21089 = G__21525;
i__21090 = G__21526;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21087);
if(temp__5804__auto__){
var seq__21087__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21087__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21087__$1);
var G__21527 = cljs.core.chunk_rest(seq__21087__$1);
var G__21528 = c__5525__auto__;
var G__21529 = cljs.core.count(c__5525__auto__);
var G__21530 = (0);
seq__21087 = G__21527;
chunk__21088 = G__21528;
count__21089 = G__21529;
i__21090 = G__21530;
continue;
} else {
var map__21115 = cljs.core.first(seq__21087__$1);
var map__21115__$1 = cljs.core.__destructure_map(map__21115);
var src = map__21115__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21115__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21115__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21115__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21115__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21116){var e_21531 = e21116;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21531);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21531.message)].join('')));
}

var G__21532 = cljs.core.next(seq__21087__$1);
var G__21533 = null;
var G__21534 = (0);
var G__21535 = (0);
seq__21087 = G__21532;
chunk__21088 = G__21533;
count__21089 = G__21534;
i__21090 = G__21535;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21118 = cljs.core.seq(js_requires);
var chunk__21119 = null;
var count__21120 = (0);
var i__21121 = (0);
while(true){
if((i__21121 < count__21120)){
var js_ns = chunk__21119.cljs$core$IIndexed$_nth$arity$2(null, i__21121);
var require_str_21538 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21538);


var G__21539 = seq__21118;
var G__21540 = chunk__21119;
var G__21541 = count__21120;
var G__21542 = (i__21121 + (1));
seq__21118 = G__21539;
chunk__21119 = G__21540;
count__21120 = G__21541;
i__21121 = G__21542;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21118);
if(temp__5804__auto__){
var seq__21118__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21118__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21118__$1);
var G__21543 = cljs.core.chunk_rest(seq__21118__$1);
var G__21544 = c__5525__auto__;
var G__21545 = cljs.core.count(c__5525__auto__);
var G__21546 = (0);
seq__21118 = G__21543;
chunk__21119 = G__21544;
count__21120 = G__21545;
i__21121 = G__21546;
continue;
} else {
var js_ns = cljs.core.first(seq__21118__$1);
var require_str_21547 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21547);


var G__21548 = cljs.core.next(seq__21118__$1);
var G__21549 = null;
var G__21550 = (0);
var G__21551 = (0);
seq__21118 = G__21548;
chunk__21119 = G__21549;
count__21120 = G__21550;
i__21121 = G__21551;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21143){
var map__21144 = p__21143;
var map__21144__$1 = cljs.core.__destructure_map(map__21144);
var msg = map__21144__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21144__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21144__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21145(s__21146){
return (new cljs.core.LazySeq(null,(function (){
var s__21146__$1 = s__21146;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21146__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21160 = cljs.core.first(xs__6360__auto__);
var map__21160__$1 = cljs.core.__destructure_map(map__21160);
var src = map__21160__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21160__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21160__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21146__$1,map__21160,map__21160__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21144,map__21144__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21145_$_iter__21147(s__21148){
return (new cljs.core.LazySeq(null,((function (s__21146__$1,map__21160,map__21160__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21144,map__21144__$1,msg,info,reload_info){
return (function (){
var s__21148__$1 = s__21148;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21148__$1);
if(temp__5804__auto____$1){
var s__21148__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21148__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21148__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21150 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21149 = (0);
while(true){
if((i__21149 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21149);
cljs.core.chunk_append(b__21150,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21554 = (i__21149 + (1));
i__21149 = G__21554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21150),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21145_$_iter__21147(cljs.core.chunk_rest(s__21148__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21150),null);
}
} else {
var warning = cljs.core.first(s__21148__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21145_$_iter__21147(cljs.core.rest(s__21148__$2)));
}
} else {
return null;
}
break;
}
});})(s__21146__$1,map__21160,map__21160__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21144,map__21144__$1,msg,info,reload_info))
,null,null));
});})(s__21146__$1,map__21160,map__21160__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21144,map__21144__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21145(cljs.core.rest(s__21146__$1)));
} else {
var G__21555 = cljs.core.rest(s__21146__$1);
s__21146__$1 = G__21555;
continue;
}
} else {
var G__21556 = cljs.core.rest(s__21146__$1);
s__21146__$1 = G__21556;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21161_21557 = cljs.core.seq(warnings);
var chunk__21162_21558 = null;
var count__21163_21559 = (0);
var i__21164_21560 = (0);
while(true){
if((i__21164_21560 < count__21163_21559)){
var map__21168_21561 = chunk__21162_21558.cljs$core$IIndexed$_nth$arity$2(null, i__21164_21560);
var map__21168_21562__$1 = cljs.core.__destructure_map(map__21168_21561);
var w_21563 = map__21168_21562__$1;
var msg_21564__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21168_21562__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21168_21562__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21168_21562__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21168_21562__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21567)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21565),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21566),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21564__$1)].join(''));


var G__21568 = seq__21161_21557;
var G__21569 = chunk__21162_21558;
var G__21570 = count__21163_21559;
var G__21571 = (i__21164_21560 + (1));
seq__21161_21557 = G__21568;
chunk__21162_21558 = G__21569;
count__21163_21559 = G__21570;
i__21164_21560 = G__21571;
continue;
} else {
var temp__5804__auto___21572 = cljs.core.seq(seq__21161_21557);
if(temp__5804__auto___21572){
var seq__21161_21573__$1 = temp__5804__auto___21572;
if(cljs.core.chunked_seq_QMARK_(seq__21161_21573__$1)){
var c__5525__auto___21574 = cljs.core.chunk_first(seq__21161_21573__$1);
var G__21575 = cljs.core.chunk_rest(seq__21161_21573__$1);
var G__21576 = c__5525__auto___21574;
var G__21577 = cljs.core.count(c__5525__auto___21574);
var G__21578 = (0);
seq__21161_21557 = G__21575;
chunk__21162_21558 = G__21576;
count__21163_21559 = G__21577;
i__21164_21560 = G__21578;
continue;
} else {
var map__21169_21579 = cljs.core.first(seq__21161_21573__$1);
var map__21169_21580__$1 = cljs.core.__destructure_map(map__21169_21579);
var w_21581 = map__21169_21580__$1;
var msg_21582__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21169_21580__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21169_21580__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21169_21580__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21169_21580__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21585)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21583),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21584),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21582__$1)].join(''));


var G__21586 = cljs.core.next(seq__21161_21573__$1);
var G__21587 = null;
var G__21588 = (0);
var G__21589 = (0);
seq__21161_21557 = G__21586;
chunk__21162_21558 = G__21587;
count__21163_21559 = G__21588;
i__21164_21560 = G__21589;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21142_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21142_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21185){
var map__21186 = p__21185;
var map__21186__$1 = cljs.core.__destructure_map(map__21186);
var msg = map__21186__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21186__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21186__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21187 = cljs.core.seq(updates);
var chunk__21189 = null;
var count__21190 = (0);
var i__21191 = (0);
while(true){
if((i__21191 < count__21190)){
var path = chunk__21189.cljs$core$IIndexed$_nth$arity$2(null, i__21191);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21342_21592 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21346_21593 = null;
var count__21347_21594 = (0);
var i__21348_21595 = (0);
while(true){
if((i__21348_21595 < count__21347_21594)){
var node_21596 = chunk__21346_21593.cljs$core$IIndexed$_nth$arity$2(null, i__21348_21595);
if(cljs.core.not(node_21596.shadow$old)){
var path_match_21597 = shadow.cljs.devtools.client.browser.match_paths(node_21596.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21597)){
var new_link_21598 = (function (){var G__21388 = node_21596.cloneNode(true);
G__21388.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21597),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21388;
})();
(node_21596.shadow$old = true);

(new_link_21598.onload = ((function (seq__21342_21592,chunk__21346_21593,count__21347_21594,i__21348_21595,seq__21187,chunk__21189,count__21190,i__21191,new_link_21598,path_match_21597,node_21596,path,map__21186,map__21186__$1,msg,updates,reload_info){
return (function (e){
var seq__21389_21599 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21391_21600 = null;
var count__21392_21601 = (0);
var i__21393_21602 = (0);
while(true){
if((i__21393_21602 < count__21392_21601)){
var map__21399_21603 = chunk__21391_21600.cljs$core$IIndexed$_nth$arity$2(null, i__21393_21602);
var map__21399_21604__$1 = cljs.core.__destructure_map(map__21399_21603);
var task_21605 = map__21399_21604__$1;
var fn_str_21606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21399_21604__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21399_21604__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21608 = goog.getObjectByName(fn_str_21606,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21607)].join(''));

(fn_obj_21608.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21608.cljs$core$IFn$_invoke$arity$2(path,new_link_21598) : fn_obj_21608.call(null, path,new_link_21598));


var G__21609 = seq__21389_21599;
var G__21610 = chunk__21391_21600;
var G__21611 = count__21392_21601;
var G__21612 = (i__21393_21602 + (1));
seq__21389_21599 = G__21609;
chunk__21391_21600 = G__21610;
count__21392_21601 = G__21611;
i__21393_21602 = G__21612;
continue;
} else {
var temp__5804__auto___21613 = cljs.core.seq(seq__21389_21599);
if(temp__5804__auto___21613){
var seq__21389_21614__$1 = temp__5804__auto___21613;
if(cljs.core.chunked_seq_QMARK_(seq__21389_21614__$1)){
var c__5525__auto___21615 = cljs.core.chunk_first(seq__21389_21614__$1);
var G__21616 = cljs.core.chunk_rest(seq__21389_21614__$1);
var G__21617 = c__5525__auto___21615;
var G__21618 = cljs.core.count(c__5525__auto___21615);
var G__21619 = (0);
seq__21389_21599 = G__21616;
chunk__21391_21600 = G__21617;
count__21392_21601 = G__21618;
i__21393_21602 = G__21619;
continue;
} else {
var map__21400_21620 = cljs.core.first(seq__21389_21614__$1);
var map__21400_21621__$1 = cljs.core.__destructure_map(map__21400_21620);
var task_21622 = map__21400_21621__$1;
var fn_str_21623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21400_21621__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21400_21621__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21625 = goog.getObjectByName(fn_str_21623,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21624)].join(''));

(fn_obj_21625.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21625.cljs$core$IFn$_invoke$arity$2(path,new_link_21598) : fn_obj_21625.call(null, path,new_link_21598));


var G__21626 = cljs.core.next(seq__21389_21614__$1);
var G__21627 = null;
var G__21628 = (0);
var G__21629 = (0);
seq__21389_21599 = G__21626;
chunk__21391_21600 = G__21627;
count__21392_21601 = G__21628;
i__21393_21602 = G__21629;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21596);
});})(seq__21342_21592,chunk__21346_21593,count__21347_21594,i__21348_21595,seq__21187,chunk__21189,count__21190,i__21191,new_link_21598,path_match_21597,node_21596,path,map__21186,map__21186__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21597], 0));

goog.dom.insertSiblingAfter(new_link_21598,node_21596);


var G__21630 = seq__21342_21592;
var G__21631 = chunk__21346_21593;
var G__21632 = count__21347_21594;
var G__21633 = (i__21348_21595 + (1));
seq__21342_21592 = G__21630;
chunk__21346_21593 = G__21631;
count__21347_21594 = G__21632;
i__21348_21595 = G__21633;
continue;
} else {
var G__21634 = seq__21342_21592;
var G__21635 = chunk__21346_21593;
var G__21636 = count__21347_21594;
var G__21637 = (i__21348_21595 + (1));
seq__21342_21592 = G__21634;
chunk__21346_21593 = G__21635;
count__21347_21594 = G__21636;
i__21348_21595 = G__21637;
continue;
}
} else {
var G__21638 = seq__21342_21592;
var G__21639 = chunk__21346_21593;
var G__21640 = count__21347_21594;
var G__21641 = (i__21348_21595 + (1));
seq__21342_21592 = G__21638;
chunk__21346_21593 = G__21639;
count__21347_21594 = G__21640;
i__21348_21595 = G__21641;
continue;
}
} else {
var temp__5804__auto___21642 = cljs.core.seq(seq__21342_21592);
if(temp__5804__auto___21642){
var seq__21342_21643__$1 = temp__5804__auto___21642;
if(cljs.core.chunked_seq_QMARK_(seq__21342_21643__$1)){
var c__5525__auto___21644 = cljs.core.chunk_first(seq__21342_21643__$1);
var G__21645 = cljs.core.chunk_rest(seq__21342_21643__$1);
var G__21646 = c__5525__auto___21644;
var G__21647 = cljs.core.count(c__5525__auto___21644);
var G__21648 = (0);
seq__21342_21592 = G__21645;
chunk__21346_21593 = G__21646;
count__21347_21594 = G__21647;
i__21348_21595 = G__21648;
continue;
} else {
var node_21649 = cljs.core.first(seq__21342_21643__$1);
if(cljs.core.not(node_21649.shadow$old)){
var path_match_21650 = shadow.cljs.devtools.client.browser.match_paths(node_21649.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21650)){
var new_link_21651 = (function (){var G__21401 = node_21649.cloneNode(true);
G__21401.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21650),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21401;
})();
(node_21649.shadow$old = true);

(new_link_21651.onload = ((function (seq__21342_21592,chunk__21346_21593,count__21347_21594,i__21348_21595,seq__21187,chunk__21189,count__21190,i__21191,new_link_21651,path_match_21650,node_21649,seq__21342_21643__$1,temp__5804__auto___21642,path,map__21186,map__21186__$1,msg,updates,reload_info){
return (function (e){
var seq__21404_21652 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21406_21653 = null;
var count__21407_21654 = (0);
var i__21408_21655 = (0);
while(true){
if((i__21408_21655 < count__21407_21654)){
var map__21412_21656 = chunk__21406_21653.cljs$core$IIndexed$_nth$arity$2(null, i__21408_21655);
var map__21412_21657__$1 = cljs.core.__destructure_map(map__21412_21656);
var task_21658 = map__21412_21657__$1;
var fn_str_21659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21412_21657__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21412_21657__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21661 = goog.getObjectByName(fn_str_21659,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21660)].join(''));

(fn_obj_21661.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21661.cljs$core$IFn$_invoke$arity$2(path,new_link_21651) : fn_obj_21661.call(null, path,new_link_21651));


var G__21662 = seq__21404_21652;
var G__21663 = chunk__21406_21653;
var G__21664 = count__21407_21654;
var G__21665 = (i__21408_21655 + (1));
seq__21404_21652 = G__21662;
chunk__21406_21653 = G__21663;
count__21407_21654 = G__21664;
i__21408_21655 = G__21665;
continue;
} else {
var temp__5804__auto___21666__$1 = cljs.core.seq(seq__21404_21652);
if(temp__5804__auto___21666__$1){
var seq__21404_21667__$1 = temp__5804__auto___21666__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21404_21667__$1)){
var c__5525__auto___21668 = cljs.core.chunk_first(seq__21404_21667__$1);
var G__21669 = cljs.core.chunk_rest(seq__21404_21667__$1);
var G__21670 = c__5525__auto___21668;
var G__21671 = cljs.core.count(c__5525__auto___21668);
var G__21672 = (0);
seq__21404_21652 = G__21669;
chunk__21406_21653 = G__21670;
count__21407_21654 = G__21671;
i__21408_21655 = G__21672;
continue;
} else {
var map__21414_21673 = cljs.core.first(seq__21404_21667__$1);
var map__21414_21674__$1 = cljs.core.__destructure_map(map__21414_21673);
var task_21675 = map__21414_21674__$1;
var fn_str_21676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21414_21674__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21414_21674__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21678 = goog.getObjectByName(fn_str_21676,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21677)].join(''));

(fn_obj_21678.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21678.cljs$core$IFn$_invoke$arity$2(path,new_link_21651) : fn_obj_21678.call(null, path,new_link_21651));


var G__21679 = cljs.core.next(seq__21404_21667__$1);
var G__21680 = null;
var G__21681 = (0);
var G__21682 = (0);
seq__21404_21652 = G__21679;
chunk__21406_21653 = G__21680;
count__21407_21654 = G__21681;
i__21408_21655 = G__21682;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21649);
});})(seq__21342_21592,chunk__21346_21593,count__21347_21594,i__21348_21595,seq__21187,chunk__21189,count__21190,i__21191,new_link_21651,path_match_21650,node_21649,seq__21342_21643__$1,temp__5804__auto___21642,path,map__21186,map__21186__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21650], 0));

goog.dom.insertSiblingAfter(new_link_21651,node_21649);


var G__21683 = cljs.core.next(seq__21342_21643__$1);
var G__21684 = null;
var G__21685 = (0);
var G__21686 = (0);
seq__21342_21592 = G__21683;
chunk__21346_21593 = G__21684;
count__21347_21594 = G__21685;
i__21348_21595 = G__21686;
continue;
} else {
var G__21687 = cljs.core.next(seq__21342_21643__$1);
var G__21688 = null;
var G__21689 = (0);
var G__21690 = (0);
seq__21342_21592 = G__21687;
chunk__21346_21593 = G__21688;
count__21347_21594 = G__21689;
i__21348_21595 = G__21690;
continue;
}
} else {
var G__21691 = cljs.core.next(seq__21342_21643__$1);
var G__21692 = null;
var G__21693 = (0);
var G__21694 = (0);
seq__21342_21592 = G__21691;
chunk__21346_21593 = G__21692;
count__21347_21594 = G__21693;
i__21348_21595 = G__21694;
continue;
}
}
} else {
}
}
break;
}


var G__21695 = seq__21187;
var G__21696 = chunk__21189;
var G__21697 = count__21190;
var G__21698 = (i__21191 + (1));
seq__21187 = G__21695;
chunk__21189 = G__21696;
count__21190 = G__21697;
i__21191 = G__21698;
continue;
} else {
var G__21699 = seq__21187;
var G__21700 = chunk__21189;
var G__21701 = count__21190;
var G__21702 = (i__21191 + (1));
seq__21187 = G__21699;
chunk__21189 = G__21700;
count__21190 = G__21701;
i__21191 = G__21702;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21187);
if(temp__5804__auto__){
var seq__21187__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21187__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21187__$1);
var G__21703 = cljs.core.chunk_rest(seq__21187__$1);
var G__21704 = c__5525__auto__;
var G__21705 = cljs.core.count(c__5525__auto__);
var G__21706 = (0);
seq__21187 = G__21703;
chunk__21189 = G__21704;
count__21190 = G__21705;
i__21191 = G__21706;
continue;
} else {
var path = cljs.core.first(seq__21187__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21421_21707 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21425_21708 = null;
var count__21426_21709 = (0);
var i__21427_21710 = (0);
while(true){
if((i__21427_21710 < count__21426_21709)){
var node_21711 = chunk__21425_21708.cljs$core$IIndexed$_nth$arity$2(null, i__21427_21710);
if(cljs.core.not(node_21711.shadow$old)){
var path_match_21712 = shadow.cljs.devtools.client.browser.match_paths(node_21711.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21712)){
var new_link_21713 = (function (){var G__21455 = node_21711.cloneNode(true);
G__21455.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21712),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21455;
})();
(node_21711.shadow$old = true);

(new_link_21713.onload = ((function (seq__21421_21707,chunk__21425_21708,count__21426_21709,i__21427_21710,seq__21187,chunk__21189,count__21190,i__21191,new_link_21713,path_match_21712,node_21711,path,seq__21187__$1,temp__5804__auto__,map__21186,map__21186__$1,msg,updates,reload_info){
return (function (e){
var seq__21456_21714 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21458_21715 = null;
var count__21459_21716 = (0);
var i__21460_21717 = (0);
while(true){
if((i__21460_21717 < count__21459_21716)){
var map__21464_21718 = chunk__21458_21715.cljs$core$IIndexed$_nth$arity$2(null, i__21460_21717);
var map__21464_21719__$1 = cljs.core.__destructure_map(map__21464_21718);
var task_21720 = map__21464_21719__$1;
var fn_str_21721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21464_21719__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21464_21719__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21723 = goog.getObjectByName(fn_str_21721,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21722)].join(''));

(fn_obj_21723.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21723.cljs$core$IFn$_invoke$arity$2(path,new_link_21713) : fn_obj_21723.call(null, path,new_link_21713));


var G__21724 = seq__21456_21714;
var G__21725 = chunk__21458_21715;
var G__21726 = count__21459_21716;
var G__21727 = (i__21460_21717 + (1));
seq__21456_21714 = G__21724;
chunk__21458_21715 = G__21725;
count__21459_21716 = G__21726;
i__21460_21717 = G__21727;
continue;
} else {
var temp__5804__auto___21728__$1 = cljs.core.seq(seq__21456_21714);
if(temp__5804__auto___21728__$1){
var seq__21456_21729__$1 = temp__5804__auto___21728__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21456_21729__$1)){
var c__5525__auto___21730 = cljs.core.chunk_first(seq__21456_21729__$1);
var G__21731 = cljs.core.chunk_rest(seq__21456_21729__$1);
var G__21732 = c__5525__auto___21730;
var G__21733 = cljs.core.count(c__5525__auto___21730);
var G__21734 = (0);
seq__21456_21714 = G__21731;
chunk__21458_21715 = G__21732;
count__21459_21716 = G__21733;
i__21460_21717 = G__21734;
continue;
} else {
var map__21465_21735 = cljs.core.first(seq__21456_21729__$1);
var map__21465_21736__$1 = cljs.core.__destructure_map(map__21465_21735);
var task_21737 = map__21465_21736__$1;
var fn_str_21738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21465_21736__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21465_21736__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21740 = goog.getObjectByName(fn_str_21738,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21739)].join(''));

(fn_obj_21740.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21740.cljs$core$IFn$_invoke$arity$2(path,new_link_21713) : fn_obj_21740.call(null, path,new_link_21713));


var G__21741 = cljs.core.next(seq__21456_21729__$1);
var G__21742 = null;
var G__21743 = (0);
var G__21744 = (0);
seq__21456_21714 = G__21741;
chunk__21458_21715 = G__21742;
count__21459_21716 = G__21743;
i__21460_21717 = G__21744;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21711);
});})(seq__21421_21707,chunk__21425_21708,count__21426_21709,i__21427_21710,seq__21187,chunk__21189,count__21190,i__21191,new_link_21713,path_match_21712,node_21711,path,seq__21187__$1,temp__5804__auto__,map__21186,map__21186__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21712], 0));

goog.dom.insertSiblingAfter(new_link_21713,node_21711);


var G__21745 = seq__21421_21707;
var G__21746 = chunk__21425_21708;
var G__21747 = count__21426_21709;
var G__21748 = (i__21427_21710 + (1));
seq__21421_21707 = G__21745;
chunk__21425_21708 = G__21746;
count__21426_21709 = G__21747;
i__21427_21710 = G__21748;
continue;
} else {
var G__21749 = seq__21421_21707;
var G__21750 = chunk__21425_21708;
var G__21751 = count__21426_21709;
var G__21752 = (i__21427_21710 + (1));
seq__21421_21707 = G__21749;
chunk__21425_21708 = G__21750;
count__21426_21709 = G__21751;
i__21427_21710 = G__21752;
continue;
}
} else {
var G__21753 = seq__21421_21707;
var G__21754 = chunk__21425_21708;
var G__21755 = count__21426_21709;
var G__21756 = (i__21427_21710 + (1));
seq__21421_21707 = G__21753;
chunk__21425_21708 = G__21754;
count__21426_21709 = G__21755;
i__21427_21710 = G__21756;
continue;
}
} else {
var temp__5804__auto___21757__$1 = cljs.core.seq(seq__21421_21707);
if(temp__5804__auto___21757__$1){
var seq__21421_21758__$1 = temp__5804__auto___21757__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21421_21758__$1)){
var c__5525__auto___21759 = cljs.core.chunk_first(seq__21421_21758__$1);
var G__21760 = cljs.core.chunk_rest(seq__21421_21758__$1);
var G__21761 = c__5525__auto___21759;
var G__21762 = cljs.core.count(c__5525__auto___21759);
var G__21763 = (0);
seq__21421_21707 = G__21760;
chunk__21425_21708 = G__21761;
count__21426_21709 = G__21762;
i__21427_21710 = G__21763;
continue;
} else {
var node_21764 = cljs.core.first(seq__21421_21758__$1);
if(cljs.core.not(node_21764.shadow$old)){
var path_match_21765 = shadow.cljs.devtools.client.browser.match_paths(node_21764.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21765)){
var new_link_21766 = (function (){var G__21466 = node_21764.cloneNode(true);
G__21466.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21765),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21466;
})();
(node_21764.shadow$old = true);

(new_link_21766.onload = ((function (seq__21421_21707,chunk__21425_21708,count__21426_21709,i__21427_21710,seq__21187,chunk__21189,count__21190,i__21191,new_link_21766,path_match_21765,node_21764,seq__21421_21758__$1,temp__5804__auto___21757__$1,path,seq__21187__$1,temp__5804__auto__,map__21186,map__21186__$1,msg,updates,reload_info){
return (function (e){
var seq__21467_21767 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21469_21768 = null;
var count__21470_21769 = (0);
var i__21471_21770 = (0);
while(true){
if((i__21471_21770 < count__21470_21769)){
var map__21477_21771 = chunk__21469_21768.cljs$core$IIndexed$_nth$arity$2(null, i__21471_21770);
var map__21477_21772__$1 = cljs.core.__destructure_map(map__21477_21771);
var task_21773 = map__21477_21772__$1;
var fn_str_21774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21477_21772__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21477_21772__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21776 = goog.getObjectByName(fn_str_21774,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21775)].join(''));

(fn_obj_21776.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21776.cljs$core$IFn$_invoke$arity$2(path,new_link_21766) : fn_obj_21776.call(null, path,new_link_21766));


var G__21777 = seq__21467_21767;
var G__21778 = chunk__21469_21768;
var G__21779 = count__21470_21769;
var G__21780 = (i__21471_21770 + (1));
seq__21467_21767 = G__21777;
chunk__21469_21768 = G__21778;
count__21470_21769 = G__21779;
i__21471_21770 = G__21780;
continue;
} else {
var temp__5804__auto___21781__$2 = cljs.core.seq(seq__21467_21767);
if(temp__5804__auto___21781__$2){
var seq__21467_21782__$1 = temp__5804__auto___21781__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21467_21782__$1)){
var c__5525__auto___21783 = cljs.core.chunk_first(seq__21467_21782__$1);
var G__21784 = cljs.core.chunk_rest(seq__21467_21782__$1);
var G__21785 = c__5525__auto___21783;
var G__21786 = cljs.core.count(c__5525__auto___21783);
var G__21787 = (0);
seq__21467_21767 = G__21784;
chunk__21469_21768 = G__21785;
count__21470_21769 = G__21786;
i__21471_21770 = G__21787;
continue;
} else {
var map__21482_21788 = cljs.core.first(seq__21467_21782__$1);
var map__21482_21789__$1 = cljs.core.__destructure_map(map__21482_21788);
var task_21790 = map__21482_21789__$1;
var fn_str_21791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21482_21789__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21482_21789__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21793 = goog.getObjectByName(fn_str_21791,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21792)].join(''));

(fn_obj_21793.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21793.cljs$core$IFn$_invoke$arity$2(path,new_link_21766) : fn_obj_21793.call(null, path,new_link_21766));


var G__21794 = cljs.core.next(seq__21467_21782__$1);
var G__21795 = null;
var G__21796 = (0);
var G__21797 = (0);
seq__21467_21767 = G__21794;
chunk__21469_21768 = G__21795;
count__21470_21769 = G__21796;
i__21471_21770 = G__21797;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21764);
});})(seq__21421_21707,chunk__21425_21708,count__21426_21709,i__21427_21710,seq__21187,chunk__21189,count__21190,i__21191,new_link_21766,path_match_21765,node_21764,seq__21421_21758__$1,temp__5804__auto___21757__$1,path,seq__21187__$1,temp__5804__auto__,map__21186,map__21186__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21765], 0));

goog.dom.insertSiblingAfter(new_link_21766,node_21764);


var G__21798 = cljs.core.next(seq__21421_21758__$1);
var G__21799 = null;
var G__21800 = (0);
var G__21801 = (0);
seq__21421_21707 = G__21798;
chunk__21425_21708 = G__21799;
count__21426_21709 = G__21800;
i__21427_21710 = G__21801;
continue;
} else {
var G__21802 = cljs.core.next(seq__21421_21758__$1);
var G__21803 = null;
var G__21804 = (0);
var G__21805 = (0);
seq__21421_21707 = G__21802;
chunk__21425_21708 = G__21803;
count__21426_21709 = G__21804;
i__21427_21710 = G__21805;
continue;
}
} else {
var G__21806 = cljs.core.next(seq__21421_21758__$1);
var G__21807 = null;
var G__21808 = (0);
var G__21809 = (0);
seq__21421_21707 = G__21806;
chunk__21425_21708 = G__21807;
count__21426_21709 = G__21808;
i__21427_21710 = G__21809;
continue;
}
}
} else {
}
}
break;
}


var G__21810 = cljs.core.next(seq__21187__$1);
var G__21811 = null;
var G__21812 = (0);
var G__21813 = (0);
seq__21187 = G__21810;
chunk__21189 = G__21811;
count__21190 = G__21812;
i__21191 = G__21813;
continue;
} else {
var G__21814 = cljs.core.next(seq__21187__$1);
var G__21815 = null;
var G__21816 = (0);
var G__21817 = (0);
seq__21187 = G__21814;
chunk__21189 = G__21815;
count__21190 = G__21816;
i__21191 = G__21817;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__21490){
var map__21491 = p__21490;
var map__21491__$1 = cljs.core.__destructure_map(map__21491);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21491__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21492,done,error){
var map__21493 = p__21492;
var map__21493__$1 = cljs.core.__destructure_map(map__21493);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21493__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21494,done,error){
var map__21495 = p__21494;
var map__21495__$1 = cljs.core.__destructure_map(map__21495);
var msg = map__21495__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21495__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21495__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21495__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21500){
var map__21501 = p__21500;
var map__21501__$1 = cljs.core.__destructure_map(map__21501);
var src = map__21501__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21501__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21502 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21502) : done.call(null, G__21502));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21503){
var map__21504 = p__21503;
var map__21504__$1 = cljs.core.__destructure_map(map__21504);
var msg__$1 = map__21504__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21504__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e21505){var ex = e21505;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21506){
var map__21507 = p__21506;
var map__21507__$1 = cljs.core.__destructure_map(map__21507);
var env = map__21507__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21507__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21512){
var map__21513 = p__21512;
var map__21513__$1 = cljs.core.__destructure_map(map__21513);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21513__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21513__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21517){
var map__21518 = p__21517;
var map__21518__$1 = cljs.core.__destructure_map(map__21518);
var svc = map__21518__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21518__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
