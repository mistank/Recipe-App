goog.provide('cljs_http.client');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__5000__auto__ = v;
if(cljs.core.truth_(and__5000__auto__)){
return (v > (0));
} else {
return and__5000__auto__;
}
})())){
return v;
} else {
return null;
}
});
cljs_http.client.acc_param = (function cljs_http$client$acc_param(o,v){
if(cljs.core.coll_QMARK_(o)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(o,v);
} else {
if((!((o == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,v], null);
} else {
return v;

}
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if((!(clojure.string.blank_QMARK_(s)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__22703_SHARP_,p2__22702_SHARP_){
var vec__22704 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__22702_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22704,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22704,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__22703_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),cljs_http.client.acc_param,no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if((!(clojure.string.blank_QMARK_(url)))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos(uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not(query_data.isEmpty()))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params(cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [no.en.core.url_encode(cljs.core.name(k)),"=",no.en.core.url_encode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22707_SHARP_){
return cljs_http.client.encode_val(k,p1__22707_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__22708){
var vec__22709 = p__22708;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22709,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22709,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22712_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22712_SHARP_)].join('');
}),esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__5000__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type","")));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__5802__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto__)){
var params = temp__5802__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__22713 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0))),new cljs.core.Keyword(null,"headers","headers",-835030129),headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22713) : client.call(null, G__22713));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__22714_SHARP_){
return cljs_http.client.decode_body(p1__22714_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22839 = arguments.length;
var i__5727__auto___22840 = (0);
while(true){
if((i__5727__auto___22840 < len__5726__auto___22839)){
args__5732__auto__.push((arguments[i__5727__auto___22840]));

var G__22841 = (i__5727__auto___22840 + (1));
i__5727__auto___22840 = G__22841;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22717){
var vec__22718 = p__22717;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22718,(0),null);
return (function (request){
var temp__5802__auto__ = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var default_headers__$1 = temp__5802__auto__;
var G__22721 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22721) : client.call(null, G__22721));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request));
}
});
}));

(cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq22715){
var G__22716 = cljs.core.first(seq22715);
var seq22715__$1 = cljs.core.next(seq22715);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22716,seq22715__$1);
}));

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22842 = arguments.length;
var i__5727__auto___22843 = (0);
while(true){
if((i__5727__auto___22843 < len__5726__auto___22842)){
args__5732__auto__.push((arguments[i__5727__auto___22843]));

var G__22844 = (i__5727__auto___22843 + (1));
i__5727__auto___22843 = G__22844;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22724){
var vec__22725 = p__22724;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22725,(0),null);
return (function (request){
var temp__5802__auto__ = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var accept__$1 = temp__5802__auto__;
var G__22728 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22728) : client.call(null, G__22728));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request));
}
});
}));

(cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq22722){
var G__22723 = cljs.core.first(seq22722);
var seq22722__$1 = cljs.core.next(seq22722);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22723,seq22722__$1);
}));

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22845 = arguments.length;
var i__5727__auto___22846 = (0);
while(true){
if((i__5727__auto___22846 < len__5726__auto___22845)){
args__5732__auto__.push((arguments[i__5727__auto___22846]));

var G__22847 = (i__5727__auto___22846 + (1));
i__5727__auto___22846 = G__22847;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22731){
var vec__22732 = p__22731;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22732,(0),null);
return (function (request){
var temp__5802__auto__ = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var content_type__$1 = temp__5802__auto__;
var G__22735 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22735) : client.call(null, G__22735));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request));
}
});
}));

(cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq22729){
var G__22730 = cljs.core.first(seq22729);
var seq22729__$1 = cljs.core.next(seq22729);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22730,seq22729__$1);
}));

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__5802__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto__)){
var params = temp__5802__auto__;
var map__22736 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__22736__$1 = cljs.core.__destructure_map(map__22736);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22736__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22736__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__22737 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22737) : client.call(null, G__22737));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__22740 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__22740__$1 = cljs.core.__destructure_map(map__22740);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22740__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22740__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = (function (p1__22738_SHARP_){
return cljs_http.util.transit_decode(p1__22738_SHARP_,decoding,decoding_opts);
});
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__22739_SHARP_){
return cljs_http.client.decode_body(p1__22739_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5802__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto__)){
var params = temp__5802__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__22741 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode(params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22741) : client.call(null, G__22741));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__22742_SHARP_){
return cljs_http.client.decode_body(p1__22742_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__22743){
var map__22744 = p__22743;
var map__22744__$1 = cljs.core.__destructure_map(map__22744);
var req = map__22744__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22744__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
var G__22745 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22745) : client.call(null, G__22745));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null, req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__22746){
var map__22747 = p__22746;
var map__22747__$1 = cljs.core.__destructure_map(map__22747);
var request = map__22747__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22747__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22747__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22747__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__5000__auto__ = form_params;
if(cljs.core.truth_(and__5000__auto__)){
var fexpr__22748 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null);
return (fexpr__22748.cljs$core$IFn$_invoke$arity$1 ? fexpr__22748.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__22748.call(null, request_method));
} else {
return and__5000__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__22749 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string(form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22749) : client.call(null, G__22749));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__22750_22848 = cljs.core.seq(params);
var chunk__22751_22849 = null;
var count__22752_22850 = (0);
var i__22753_22851 = (0);
while(true){
if((i__22753_22851 < count__22752_22850)){
var vec__22760_22852 = chunk__22751_22849.cljs$core$IIndexed$_nth$arity$2(null, i__22753_22851);
var k_22853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22760_22852,(0),null);
var v_22854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22760_22852,(1),null);
if(cljs.core.coll_QMARK_(v_22854)){
form_data.append(cljs.core.name(k_22853),cljs.core.first(v_22854),cljs.core.second(v_22854));
} else {
form_data.append(cljs.core.name(k_22853),v_22854);
}


var G__22855 = seq__22750_22848;
var G__22856 = chunk__22751_22849;
var G__22857 = count__22752_22850;
var G__22858 = (i__22753_22851 + (1));
seq__22750_22848 = G__22855;
chunk__22751_22849 = G__22856;
count__22752_22850 = G__22857;
i__22753_22851 = G__22858;
continue;
} else {
var temp__5804__auto___22859 = cljs.core.seq(seq__22750_22848);
if(temp__5804__auto___22859){
var seq__22750_22860__$1 = temp__5804__auto___22859;
if(cljs.core.chunked_seq_QMARK_(seq__22750_22860__$1)){
var c__5525__auto___22861 = cljs.core.chunk_first(seq__22750_22860__$1);
var G__22862 = cljs.core.chunk_rest(seq__22750_22860__$1);
var G__22863 = c__5525__auto___22861;
var G__22864 = cljs.core.count(c__5525__auto___22861);
var G__22865 = (0);
seq__22750_22848 = G__22862;
chunk__22751_22849 = G__22863;
count__22752_22850 = G__22864;
i__22753_22851 = G__22865;
continue;
} else {
var vec__22763_22866 = cljs.core.first(seq__22750_22860__$1);
var k_22867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22763_22866,(0),null);
var v_22868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22763_22866,(1),null);
if(cljs.core.coll_QMARK_(v_22868)){
form_data.append(cljs.core.name(k_22867),cljs.core.first(v_22868),cljs.core.second(v_22868));
} else {
form_data.append(cljs.core.name(k_22867),v_22868);
}


var G__22869 = cljs.core.next(seq__22750_22860__$1);
var G__22870 = null;
var G__22871 = (0);
var G__22872 = (0);
seq__22750_22848 = G__22869;
chunk__22751_22849 = G__22870;
count__22752_22850 = G__22871;
i__22753_22851 = G__22872;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__22766){
var map__22767 = p__22766;
var map__22767__$1 = cljs.core.__destructure_map(map__22767);
var request = map__22767__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22767__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22767__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__5000__auto__ = multipart_params;
if(cljs.core.truth_(and__5000__auto__)){
var fexpr__22768 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null);
return (fexpr__22768.cljs$core$IFn$_invoke$arity$1 ? fexpr__22768.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__22768.call(null, request_method));
} else {
return and__5000__auto__;
}
})())){
var G__22769 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22769) : client.call(null, G__22769));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__5802__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var G__22770 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22770) : client.call(null, G__22770));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null, req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__22771_SHARP_){
var G__22772 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22771_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22772) : client.call(null, G__22772));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__22774){
var map__22775 = p__22774;
var map__22775__$1 = cljs.core.__destructure_map(map__22775);
var req = map__22775__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22775__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5802__auto__ = cljs_http.client.parse_url(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5802__auto__)){
var spec = temp__5802__auto__;
var G__22776 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,spec], 0)),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),(function (p1__22773_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__22773_SHARP_,query_params], 0));
}));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22776) : client.call(null, G__22776));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null, req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22873 = arguments.length;
var i__5727__auto___22874 = (0);
while(true){
if((i__5727__auto___22874 < len__5726__auto___22873)){
args__5732__auto__.push((arguments[i__5727__auto___22874]));

var G__22875 = (i__5727__auto___22874 + (1));
i__5727__auto___22874 = G__22875;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22779){
var vec__22780 = p__22779;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22780,(0),null);
return (function (req){
var credentials__$1 = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return credentials;
}
})();
if((!(cljs.core.empty_QMARK_(credentials__$1)))){
var G__22783 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22783) : client.call(null, G__22783));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null, req));
}
});
}));

(cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq22777){
var G__22778 = cljs.core.first(seq22777);
var seq22777__$1 = cljs.core.next(seq22777);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22778,seq22777__$1);
}));

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5802__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5802__auto__)){
var oauth_token = temp__5802__auto__;
var G__22784 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22784) : client.call(null, G__22784));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null, req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5802__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto__)){
var custom_channel = temp__5802__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22899 = arguments.length;
var i__5727__auto___22900 = (0);
while(true){
if((i__5727__auto___22900 < len__5726__auto___22899)){
args__5732__auto__.push((arguments[i__5727__auto___22900]));

var G__22901 = (i__5727__auto___22900 + (1));
i__5727__auto___22900 = G__22901;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22787){
var vec__22788 = p__22787;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22788,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.delete$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.delete$.cljs$lang$applyTo = (function (seq22785){
var G__22786 = cljs.core.first(seq22785);
var seq22785__$1 = cljs.core.next(seq22785);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22786,seq22785__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22902 = arguments.length;
var i__5727__auto___22903 = (0);
while(true){
if((i__5727__auto___22903 < len__5726__auto___22902)){
args__5732__auto__.push((arguments[i__5727__auto___22903]));

var G__22904 = (i__5727__auto___22903 + (1));
i__5727__auto___22903 = G__22904;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22793){
var vec__22794 = p__22793;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22794,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.get.cljs$lang$applyTo = (function (seq22791){
var G__22792 = cljs.core.first(seq22791);
var seq22791__$1 = cljs.core.next(seq22791);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22792,seq22791__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22908 = arguments.length;
var i__5727__auto___22909 = (0);
while(true){
if((i__5727__auto___22909 < len__5726__auto___22908)){
args__5732__auto__.push((arguments[i__5727__auto___22909]));

var G__22911 = (i__5727__auto___22909 + (1));
i__5727__auto___22909 = G__22911;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22799){
var vec__22800 = p__22799;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22800,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.head.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.head.cljs$lang$applyTo = (function (seq22797){
var G__22798 = cljs.core.first(seq22797);
var seq22797__$1 = cljs.core.next(seq22797);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22798,seq22797__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22913 = arguments.length;
var i__5727__auto___22914 = (0);
while(true){
if((i__5727__auto___22914 < len__5726__auto___22913)){
args__5732__auto__.push((arguments[i__5727__auto___22914]));

var G__22916 = (i__5727__auto___22914 + (1));
i__5727__auto___22914 = G__22916;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22805){
var vec__22806 = p__22805;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22806,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq22803){
var G__22804 = cljs.core.first(seq22803);
var seq22803__$1 = cljs.core.next(seq22803);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22804,seq22803__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22920 = arguments.length;
var i__5727__auto___22921 = (0);
while(true){
if((i__5727__auto___22921 < len__5726__auto___22920)){
args__5732__auto__.push((arguments[i__5727__auto___22921]));

var G__22922 = (i__5727__auto___22921 + (1));
i__5727__auto___22921 = G__22922;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22811){
var vec__22812 = p__22811;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22812,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.move.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.move.cljs$lang$applyTo = (function (seq22809){
var G__22810 = cljs.core.first(seq22809);
var seq22809__$1 = cljs.core.next(seq22809);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22810,seq22809__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22924 = arguments.length;
var i__5727__auto___22925 = (0);
while(true){
if((i__5727__auto___22925 < len__5726__auto___22924)){
args__5732__auto__.push((arguments[i__5727__auto___22925]));

var G__22926 = (i__5727__auto___22925 + (1));
i__5727__auto___22925 = G__22926;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22817){
var vec__22818 = p__22817;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22818,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.options.cljs$lang$applyTo = (function (seq22815){
var G__22816 = cljs.core.first(seq22815);
var seq22815__$1 = cljs.core.next(seq22815);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22816,seq22815__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22927 = arguments.length;
var i__5727__auto___22929 = (0);
while(true){
if((i__5727__auto___22929 < len__5726__auto___22927)){
args__5732__auto__.push((arguments[i__5727__auto___22929]));

var G__22931 = (i__5727__auto___22929 + (1));
i__5727__auto___22929 = G__22931;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22823){
var vec__22824 = p__22823;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22824,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.patch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.patch.cljs$lang$applyTo = (function (seq22821){
var G__22822 = cljs.core.first(seq22821);
var seq22821__$1 = cljs.core.next(seq22821);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22822,seq22821__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22934 = arguments.length;
var i__5727__auto___22935 = (0);
while(true){
if((i__5727__auto___22935 < len__5726__auto___22934)){
args__5732__auto__.push((arguments[i__5727__auto___22935]));

var G__22937 = (i__5727__auto___22935 + (1));
i__5727__auto___22935 = G__22937;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22829){
var vec__22830 = p__22829;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22830,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.post.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.post.cljs$lang$applyTo = (function (seq22827){
var G__22828 = cljs.core.first(seq22827);
var seq22827__$1 = cljs.core.next(seq22827);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22828,seq22827__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22940 = arguments.length;
var i__5727__auto___22941 = (0);
while(true){
if((i__5727__auto___22941 < len__5726__auto___22940)){
args__5732__auto__.push((arguments[i__5727__auto___22941]));

var G__22942 = (i__5727__auto___22941 + (1));
i__5727__auto___22941 = G__22942;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22835){
var vec__22836 = p__22835;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22836,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.put.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.put.cljs$lang$applyTo = (function (seq22833){
var G__22834 = cljs.core.first(seq22833);
var seq22833__$1 = cljs.core.next(seq22833);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22834,seq22833__$1);
}));


//# sourceMappingURL=cljs_http.client.js.map
