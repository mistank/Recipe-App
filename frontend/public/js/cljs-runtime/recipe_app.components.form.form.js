goog.provide('recipe_app.components.form.form');
recipe_app.components.form.form.form = (function recipe_app$components$form$form$form(){
var input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),recipe_app.components.form.styles.form_style()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter an ingredient",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(input),new cljs.core.Keyword(null,"className","className",-1983287057),recipe_app.components.form.styles.input_style(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13936_SHARP_){
return cljs.core.reset_BANG_(input,p1__13936_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (p1__13937_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__13937_SHARP_.key,"Enter")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state.app_state,cljs.core.update,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(input)], 0));

return cljs.core.reset_BANG_(input,"");
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state.app_state,cljs.core.update,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(input)], 0));
}),new cljs.core.Keyword(null,"className","className",-1983287057),recipe_app.components.form.styles.button_style()], null),"Add"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function recipe_app$components$form$form$form_$_iter__13938(s__13939){
return (new cljs.core.LazySeq(null,(function (){
var s__13939__$1 = s__13939;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13939__$1);
if(temp__5804__auto__){
var s__13939__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13939__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13939__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13941 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13940 = (0);
while(true){
if((i__13940 < size__5479__auto__)){
var ingredient = cljs.core._nth(c__5478__auto__,i__13940);
cljs.core.chunk_append(b__13941,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),ingredient], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ingredient], null)));

var G__13942 = (i__13940 + (1));
i__13940 = G__13942;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13941),recipe_app$components$form$form$form_$_iter__13938(cljs.core.chunk_rest(s__13939__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13941),null);
}
} else {
var ingredient = cljs.core.first(s__13939__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),ingredient], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ingredient], null)),recipe_app$components$form$form$form_$_iter__13938(cljs.core.rest(s__13939__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state.app_state)));
})()], null)], null);
});
});

//# sourceMappingURL=recipe_app.components.form.form.js.map
