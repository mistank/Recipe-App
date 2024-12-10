goog.provide('recipe_app.components.list.list');
recipe_app.components.list.list.recipe_list = (function recipe_app$components$list$list$recipe_list(){
var recipes = new cljs.core.Keyword(null,"recipes","recipes",-325236209).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state.app_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),recipe_app.components.list.styles.list_style], null),((cljs.core.seq(recipes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function recipe_app$components$list$list$recipe_list_$_iter__22951(s__22952){
return (new cljs.core.LazySeq(null,(function (){
var s__22952__$1 = s__22952;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22952__$1);
if(temp__5804__auto__){
var s__22952__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22952__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22952__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22954 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22953 = (0);
while(true){
if((i__22953 < size__5479__auto__)){
var recipe = cljs.core._nth(c__5478__auto__,i__22953);
cljs.core.chunk_append(b__22954,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),recipe_app.components.list.styles.recipe_item_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(recipe)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Ingredients: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917).cljs$core$IFn$_invoke$arity$1(recipe))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(recipe)], null)));

var G__22955 = (i__22953 + (1));
i__22953 = G__22955;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22954),recipe_app$components$list$list$recipe_list_$_iter__22951(cljs.core.chunk_rest(s__22952__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22954),null);
}
} else {
var recipe = cljs.core.first(s__22952__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),recipe_app.components.list.styles.recipe_item_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(recipe)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Ingredients: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917).cljs$core$IFn$_invoke$arity$1(recipe))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(recipe)], null)),recipe_app$components$list$list$recipe_list_$_iter__22951(cljs.core.rest(s__22952__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(recipes);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No recipes found. Add ingredients and click 'Find Recipes'!"], null))], null);
});

//# sourceMappingURL=recipe_app.components.list.list.js.map
