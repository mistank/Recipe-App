goog.provide('recipe_app.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
recipe_app.core.app_root = (function recipe_app$core$app_root(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recipe_app.components.header.header.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recipe_app.components.form.form.form], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),api.fetch_recipes,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#28a745",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),"Find Recipes"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recipe_app.components.list.list.recipe_list], null)], null);
});
recipe_app.core.init = (function recipe_app$core$init(){
var root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
return root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recipe_app.core.app_root], null)));
});

//# sourceMappingURL=recipe_app.core.js.map
