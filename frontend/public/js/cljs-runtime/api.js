goog.provide('api');
api.fetch_recipes = (function api$fetch_recipes(){
var query = clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state.app_state)));
var url = ["https://www.themealdb.com/api/json/v2/","/filter.php?i=",query].join('');
var c__11670__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11671__auto__ = (function (){var switch__11506__auto__ = (function (state_14909){
var state_val_14910 = (state_14909[(1)]);
if((state_val_14910 === (1))){
var inst_14891 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_14892 = [false];
var inst_14893 = cljs.core.PersistentHashMap.fromArrays(inst_14891,inst_14892);
var inst_14894 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_14893], 0));
var state_14909__$1 = state_14909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14909__$1,(2),inst_14894);
} else {
if((state_val_14910 === (2))){
var inst_14896 = (state_14909[(7)]);
var inst_14896__$1 = (state_14909[(2)]);
var inst_14897 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_14896__$1);
var inst_14898 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_14897);
var state_14909__$1 = (function (){var statearr_14911 = state_14909;
(statearr_14911[(7)] = inst_14896__$1);

return statearr_14911;
})();
if(inst_14898){
var statearr_14912_14921 = state_14909__$1;
(statearr_14912_14921[(1)] = (3));

} else {
var statearr_14913_14922 = state_14909__$1;
(statearr_14913_14922[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14910 === (3))){
var inst_14896 = (state_14909[(7)]);
var inst_14900 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_14896);
var inst_14901 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"recipes","recipes",-325236209),inst_14900);
var state_14909__$1 = state_14909;
var statearr_14914_14923 = state_14909__$1;
(statearr_14914_14923[(2)] = inst_14901);

(statearr_14914_14923[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14910 === (4))){
var inst_14896 = (state_14909[(7)]);
var inst_14903 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_14896);
var inst_14904 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_14896);
var inst_14905 = console.error("Failed to fetch recipes",inst_14903,inst_14904);
var state_14909__$1 = state_14909;
var statearr_14915_14924 = state_14909__$1;
(statearr_14915_14924[(2)] = inst_14905);

(statearr_14915_14924[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14910 === (5))){
var inst_14907 = (state_14909[(2)]);
var state_14909__$1 = state_14909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14909__$1,inst_14907);
} else {
return null;
}
}
}
}
}
});
return (function() {
var api$fetch_recipes_$_state_machine__11507__auto__ = null;
var api$fetch_recipes_$_state_machine__11507__auto____0 = (function (){
var statearr_14916 = [null,null,null,null,null,null,null,null];
(statearr_14916[(0)] = api$fetch_recipes_$_state_machine__11507__auto__);

(statearr_14916[(1)] = (1));

return statearr_14916;
});
var api$fetch_recipes_$_state_machine__11507__auto____1 = (function (state_14909){
while(true){
var ret_value__11508__auto__ = (function (){try{while(true){
var result__11509__auto__ = switch__11506__auto__(state_14909);
if(cljs.core.keyword_identical_QMARK_(result__11509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11509__auto__;
}
break;
}
}catch (e14917){var ex__11510__auto__ = e14917;
var statearr_14918_14925 = state_14909;
(statearr_14918_14925[(2)] = ex__11510__auto__);


if(cljs.core.seq((state_14909[(4)]))){
var statearr_14919_14926 = state_14909;
(statearr_14919_14926[(1)] = cljs.core.first((state_14909[(4)])));

} else {
throw ex__11510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14927 = state_14909;
state_14909 = G__14927;
continue;
} else {
return ret_value__11508__auto__;
}
break;
}
});
api$fetch_recipes_$_state_machine__11507__auto__ = function(state_14909){
switch(arguments.length){
case 0:
return api$fetch_recipes_$_state_machine__11507__auto____0.call(this);
case 1:
return api$fetch_recipes_$_state_machine__11507__auto____1.call(this,state_14909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
api$fetch_recipes_$_state_machine__11507__auto__.cljs$core$IFn$_invoke$arity$0 = api$fetch_recipes_$_state_machine__11507__auto____0;
api$fetch_recipes_$_state_machine__11507__auto__.cljs$core$IFn$_invoke$arity$1 = api$fetch_recipes_$_state_machine__11507__auto____1;
return api$fetch_recipes_$_state_machine__11507__auto__;
})()
})();
var state__11672__auto__ = (function (){var statearr_14920 = f__11671__auto__();
(statearr_14920[(6)] = c__11670__auto__);

return statearr_14920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11672__auto__);
}));

return c__11670__auto__;
});

//# sourceMappingURL=api.js.map
