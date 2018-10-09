// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__6466__auto__ = elem.textContent;
if(cljs.core.truth_(or__6466__auto__)){
return or__6466__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args12196 = [];
var len__7524__auto___12199 = arguments.length;
var i__7525__auto___12200 = (0);
while(true){
if((i__7525__auto___12200 < len__7524__auto___12199)){
args12196.push((arguments[i__7525__auto___12200]));

var G__12201 = (i__7525__auto___12200 + (1));
i__7525__auto___12200 = G__12201;
continue;
} else {
}
break;
}

var G__12198 = args12196.length;
switch (G__12198) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12196.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,cljs.core.cst$kw$display) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$top,r.top,cljs.core.cst$kw$bottom,r.bottom,cljs.core.cst$kw$left,r.left,cljs.core.cst$kw$right,r.right,cljs.core.cst$kw$width,r.width,cljs.core.cst$kw$height,r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args12203 = [];
var len__7524__auto___12206 = arguments.length;
var i__7525__auto___12207 = (0);
while(true){
if((i__7525__auto___12207 < len__7524__auto___12206)){
args12203.push((arguments[i__7525__auto___12207]));

var G__12208 = (i__7525__auto___12207 + (1));
i__7525__auto___12207 = G__12208;
continue;
} else {
}
break;
}

var G__12205 = args12203.length;
switch (G__12205) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12203.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args12211 = [];
var len__7524__auto___12214 = arguments.length;
var i__7525__auto___12215 = (0);
while(true){
if((i__7525__auto___12215 < len__7524__auto___12214)){
args12211.push((arguments[i__7525__auto___12215]));

var G__12216 = (i__7525__auto___12215 + (1));
i__7525__auto___12215 = G__12216;
continue;
} else {
}
break;
}

var G__12213 = args12211.length;
switch (G__12213) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12211.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__12210_SHARP_){
return !((p1__12210_SHARP_ === base));
}),dommy.core.ancestors(elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__7531__auto__ = [];
var len__7524__auto___12226 = arguments.length;
var i__7525__auto___12227 = (0);
while(true){
if((i__7525__auto___12227 < len__7524__auto___12226)){
args__7531__auto__.push((arguments[i__7525__auto___12227]));

var G__12228 = (i__7525__auto___12227 + (1));
i__7525__auto___12227 = G__12228;
continue;
} else {
}
break;
}

var argseq__7532__auto__ = ((((1) < args__7531__auto__.length))?(new cljs.core.IndexedSeq(args__7531__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7532__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$kvs))], 0)))].join('')));
}

var style = elem.style;
var seq__12220_12229 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__12221_12230 = null;
var count__12222_12231 = (0);
var i__12223_12232 = (0);
while(true){
if((i__12223_12232 < count__12222_12231)){
var vec__12224_12233 = chunk__12221_12230.cljs$core$IIndexed$_nth$arity$2(null,i__12223_12232);
var k_12234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12224_12233,(0),null);
var v_12235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12224_12233,(1),null);
style.setProperty(dommy.utils.as_str(k_12234),v_12235);

var G__12236 = seq__12220_12229;
var G__12237 = chunk__12221_12230;
var G__12238 = count__12222_12231;
var G__12239 = (i__12223_12232 + (1));
seq__12220_12229 = G__12236;
chunk__12221_12230 = G__12237;
count__12222_12231 = G__12238;
i__12223_12232 = G__12239;
continue;
} else {
var temp__4657__auto___12240 = cljs.core.seq(seq__12220_12229);
if(temp__4657__auto___12240){
var seq__12220_12241__$1 = temp__4657__auto___12240;
if(cljs.core.chunked_seq_QMARK_(seq__12220_12241__$1)){
var c__7269__auto___12242 = cljs.core.chunk_first(seq__12220_12241__$1);
var G__12243 = cljs.core.chunk_rest(seq__12220_12241__$1);
var G__12244 = c__7269__auto___12242;
var G__12245 = cljs.core.count(c__7269__auto___12242);
var G__12246 = (0);
seq__12220_12229 = G__12243;
chunk__12221_12230 = G__12244;
count__12222_12231 = G__12245;
i__12223_12232 = G__12246;
continue;
} else {
var vec__12225_12247 = cljs.core.first(seq__12220_12241__$1);
var k_12248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12225_12247,(0),null);
var v_12249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12225_12247,(1),null);
style.setProperty(dommy.utils.as_str(k_12248),v_12249);

var G__12250 = cljs.core.next(seq__12220_12241__$1);
var G__12251 = null;
var G__12252 = (0);
var G__12253 = (0);
seq__12220_12229 = G__12250;
chunk__12221_12230 = G__12251;
count__12222_12231 = G__12252;
i__12223_12232 = G__12253;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq12218){
var G__12219 = cljs.core.first(seq12218);
var seq12218__$1 = cljs.core.next(seq12218);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12219,seq12218__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__7531__auto__ = [];
var len__7524__auto___12260 = arguments.length;
var i__7525__auto___12261 = (0);
while(true){
if((i__7525__auto___12261 < len__7524__auto___12260)){
args__7531__auto__.push((arguments[i__7525__auto___12261]));

var G__12262 = (i__7525__auto___12261 + (1));
i__7525__auto___12261 = G__12262;
continue;
} else {
}
break;
}

var argseq__7532__auto__ = ((((1) < args__7531__auto__.length))?(new cljs.core.IndexedSeq(args__7531__auto__.slice((1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7532__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__12256_12263 = cljs.core.seq(keywords);
var chunk__12257_12264 = null;
var count__12258_12265 = (0);
var i__12259_12266 = (0);
while(true){
if((i__12259_12266 < count__12258_12265)){
var kw_12267 = chunk__12257_12264.cljs$core$IIndexed$_nth$arity$2(null,i__12259_12266);
style.removeProperty(dommy.utils.as_str(kw_12267));

var G__12268 = seq__12256_12263;
var G__12269 = chunk__12257_12264;
var G__12270 = count__12258_12265;
var G__12271 = (i__12259_12266 + (1));
seq__12256_12263 = G__12268;
chunk__12257_12264 = G__12269;
count__12258_12265 = G__12270;
i__12259_12266 = G__12271;
continue;
} else {
var temp__4657__auto___12272 = cljs.core.seq(seq__12256_12263);
if(temp__4657__auto___12272){
var seq__12256_12273__$1 = temp__4657__auto___12272;
if(cljs.core.chunked_seq_QMARK_(seq__12256_12273__$1)){
var c__7269__auto___12274 = cljs.core.chunk_first(seq__12256_12273__$1);
var G__12275 = cljs.core.chunk_rest(seq__12256_12273__$1);
var G__12276 = c__7269__auto___12274;
var G__12277 = cljs.core.count(c__7269__auto___12274);
var G__12278 = (0);
seq__12256_12263 = G__12275;
chunk__12257_12264 = G__12276;
count__12258_12265 = G__12277;
i__12259_12266 = G__12278;
continue;
} else {
var kw_12279 = cljs.core.first(seq__12256_12273__$1);
style.removeProperty(dommy.utils.as_str(kw_12279));

var G__12280 = cljs.core.next(seq__12256_12273__$1);
var G__12281 = null;
var G__12282 = (0);
var G__12283 = (0);
seq__12256_12263 = G__12280;
chunk__12257_12264 = G__12281;
count__12258_12265 = G__12282;
i__12259_12266 = G__12283;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq12254){
var G__12255 = cljs.core.first(seq12254);
var seq12254__$1 = cljs.core.next(seq12254);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12255,seq12254__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__7531__auto__ = [];
var len__7524__auto___12292 = arguments.length;
var i__7525__auto___12293 = (0);
while(true){
if((i__7525__auto___12293 < len__7524__auto___12292)){
args__7531__auto__.push((arguments[i__7525__auto___12293]));

var G__12294 = (i__7525__auto___12293 + (1));
i__7525__auto___12293 = G__12294;
continue;
} else {
}
break;
}

var argseq__7532__auto__ = ((((1) < args__7531__auto__.length))?(new cljs.core.IndexedSeq(args__7531__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7532__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$kvs))], 0)))].join('')));
}

var seq__12286_12295 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__12287_12296 = null;
var count__12288_12297 = (0);
var i__12289_12298 = (0);
while(true){
if((i__12289_12298 < count__12288_12297)){
var vec__12290_12299 = chunk__12287_12296.cljs$core$IIndexed$_nth$arity$2(null,i__12289_12298);
var k_12300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12290_12299,(0),null);
var v_12301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12290_12299,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_12300,[cljs.core.str(v_12301),cljs.core.str("px")].join('')], 0));

var G__12302 = seq__12286_12295;
var G__12303 = chunk__12287_12296;
var G__12304 = count__12288_12297;
var G__12305 = (i__12289_12298 + (1));
seq__12286_12295 = G__12302;
chunk__12287_12296 = G__12303;
count__12288_12297 = G__12304;
i__12289_12298 = G__12305;
continue;
} else {
var temp__4657__auto___12306 = cljs.core.seq(seq__12286_12295);
if(temp__4657__auto___12306){
var seq__12286_12307__$1 = temp__4657__auto___12306;
if(cljs.core.chunked_seq_QMARK_(seq__12286_12307__$1)){
var c__7269__auto___12308 = cljs.core.chunk_first(seq__12286_12307__$1);
var G__12309 = cljs.core.chunk_rest(seq__12286_12307__$1);
var G__12310 = c__7269__auto___12308;
var G__12311 = cljs.core.count(c__7269__auto___12308);
var G__12312 = (0);
seq__12286_12295 = G__12309;
chunk__12287_12296 = G__12310;
count__12288_12297 = G__12311;
i__12289_12298 = G__12312;
continue;
} else {
var vec__12291_12313 = cljs.core.first(seq__12286_12307__$1);
var k_12314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12291_12313,(0),null);
var v_12315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12291_12313,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_12314,[cljs.core.str(v_12315),cljs.core.str("px")].join('')], 0));

var G__12316 = cljs.core.next(seq__12286_12307__$1);
var G__12317 = null;
var G__12318 = (0);
var G__12319 = (0);
seq__12286_12295 = G__12316;
chunk__12287_12296 = G__12317;
count__12288_12297 = G__12318;
i__12289_12298 = G__12319;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq12284){
var G__12285 = cljs.core.first(seq12284);
var seq12284__$1 = cljs.core.next(seq12284);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12285,seq12284__$1);
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args12320 = [];
var len__7524__auto___12335 = arguments.length;
var i__7525__auto___12336 = (0);
while(true){
if((i__7525__auto___12336 < len__7524__auto___12335)){
args12320.push((arguments[i__7525__auto___12336]));

var G__12337 = (i__7525__auto___12336 + (1));
i__7525__auto___12336 = G__12337;
continue;
} else {
}
break;
}

var G__12326 = args12320.length;
switch (G__12326) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7543__auto__ = (new cljs.core.IndexedSeq(args12320.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7543__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__12327 = elem;
(G__12327[k__$1] = v);

return G__12327;
} else {
var G__12328 = elem;
G__12328.setAttribute(k__$1,v);

return G__12328;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$kvs))], 0)))].join('')));
}

var seq__12329_12339 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__12330_12340 = null;
var count__12331_12341 = (0);
var i__12332_12342 = (0);
while(true){
if((i__12332_12342 < count__12331_12341)){
var vec__12333_12343 = chunk__12330_12340.cljs$core$IIndexed$_nth$arity$2(null,i__12332_12342);
var k_12344__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12333_12343,(0),null);
var v_12345__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12333_12343,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_12344__$1,v_12345__$1);

var G__12346 = seq__12329_12339;
var G__12347 = chunk__12330_12340;
var G__12348 = count__12331_12341;
var G__12349 = (i__12332_12342 + (1));
seq__12329_12339 = G__12346;
chunk__12330_12340 = G__12347;
count__12331_12341 = G__12348;
i__12332_12342 = G__12349;
continue;
} else {
var temp__4657__auto___12350 = cljs.core.seq(seq__12329_12339);
if(temp__4657__auto___12350){
var seq__12329_12351__$1 = temp__4657__auto___12350;
if(cljs.core.chunked_seq_QMARK_(seq__12329_12351__$1)){
var c__7269__auto___12352 = cljs.core.chunk_first(seq__12329_12351__$1);
var G__12353 = cljs.core.chunk_rest(seq__12329_12351__$1);
var G__12354 = c__7269__auto___12352;
var G__12355 = cljs.core.count(c__7269__auto___12352);
var G__12356 = (0);
seq__12329_12339 = G__12353;
chunk__12330_12340 = G__12354;
count__12331_12341 = G__12355;
i__12332_12342 = G__12356;
continue;
} else {
var vec__12334_12357 = cljs.core.first(seq__12329_12351__$1);
var k_12358__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12334_12357,(0),null);
var v_12359__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12334_12357,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_12358__$1,v_12359__$1);

var G__12360 = cljs.core.next(seq__12329_12351__$1);
var G__12361 = null;
var G__12362 = (0);
var G__12363 = (0);
seq__12329_12339 = G__12360;
chunk__12330_12340 = G__12361;
count__12331_12341 = G__12362;
i__12332_12342 = G__12363;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq12321){
var G__12322 = cljs.core.first(seq12321);
var seq12321__$1 = cljs.core.next(seq12321);
var G__12323 = cljs.core.first(seq12321__$1);
var seq12321__$2 = cljs.core.next(seq12321__$1);
var G__12324 = cljs.core.first(seq12321__$2);
var seq12321__$3 = cljs.core.next(seq12321__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12322,G__12323,G__12324,seq12321__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args12364 = [];
var len__7524__auto___12374 = arguments.length;
var i__7525__auto___12375 = (0);
while(true){
if((i__7525__auto___12375 < len__7524__auto___12374)){
args12364.push((arguments[i__7525__auto___12375]));

var G__12376 = (i__7525__auto___12375 + (1));
i__7525__auto___12375 = G__12376;
continue;
} else {
}
break;
}

var G__12369 = args12364.length;
switch (G__12369) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7543__auto__ = (new cljs.core.IndexedSeq(args12364.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7543__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_12378__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_12378__$1))){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_12378__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__12370_12379 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__12371_12380 = null;
var count__12372_12381 = (0);
var i__12373_12382 = (0);
while(true){
if((i__12373_12382 < count__12372_12381)){
var k_12383__$1 = chunk__12371_12380.cljs$core$IIndexed$_nth$arity$2(null,i__12373_12382);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_12383__$1);

var G__12384 = seq__12370_12379;
var G__12385 = chunk__12371_12380;
var G__12386 = count__12372_12381;
var G__12387 = (i__12373_12382 + (1));
seq__12370_12379 = G__12384;
chunk__12371_12380 = G__12385;
count__12372_12381 = G__12386;
i__12373_12382 = G__12387;
continue;
} else {
var temp__4657__auto___12388 = cljs.core.seq(seq__12370_12379);
if(temp__4657__auto___12388){
var seq__12370_12389__$1 = temp__4657__auto___12388;
if(cljs.core.chunked_seq_QMARK_(seq__12370_12389__$1)){
var c__7269__auto___12390 = cljs.core.chunk_first(seq__12370_12389__$1);
var G__12391 = cljs.core.chunk_rest(seq__12370_12389__$1);
var G__12392 = c__7269__auto___12390;
var G__12393 = cljs.core.count(c__7269__auto___12390);
var G__12394 = (0);
seq__12370_12379 = G__12391;
chunk__12371_12380 = G__12392;
count__12372_12381 = G__12393;
i__12373_12382 = G__12394;
continue;
} else {
var k_12395__$1 = cljs.core.first(seq__12370_12389__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_12395__$1);

var G__12396 = cljs.core.next(seq__12370_12389__$1);
var G__12397 = null;
var G__12398 = (0);
var G__12399 = (0);
seq__12370_12379 = G__12396;
chunk__12371_12380 = G__12397;
count__12372_12381 = G__12398;
i__12373_12382 = G__12399;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq12365){
var G__12366 = cljs.core.first(seq12365);
var seq12365__$1 = cljs.core.next(seq12365);
var G__12367 = cljs.core.first(seq12365__$1);
var seq12365__$2 = cljs.core.next(seq12365__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12366,G__12367,seq12365__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args12400 = [];
var len__7524__auto___12403 = arguments.length;
var i__7525__auto___12404 = (0);
while(true){
if((i__7525__auto___12404 < len__7524__auto___12403)){
args12400.push((arguments[i__7525__auto___12404]));

var G__12405 = (i__7525__auto___12404 + (1));
i__7525__auto___12404 = G__12405;
continue;
} else {
}
break;
}

var G__12402 = args12400.length;
switch (G__12402) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12400.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args12407 = [];
var len__7524__auto___12425 = arguments.length;
var i__7525__auto___12426 = (0);
while(true){
if((i__7525__auto___12426 < len__7524__auto___12425)){
args12407.push((arguments[i__7525__auto___12426]));

var G__12427 = (i__7525__auto___12426 + (1));
i__7525__auto___12426 = G__12427;
continue;
} else {
}
break;
}

var G__12412 = args12407.length;
switch (G__12412) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7543__auto__ = (new cljs.core.IndexedSeq(args12407.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7543__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__4655__auto___12429 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___12429)){
var class_list_12430 = temp__4655__auto___12429;
var seq__12413_12431 = cljs.core.seq(classes__$1);
var chunk__12414_12432 = null;
var count__12415_12433 = (0);
var i__12416_12434 = (0);
while(true){
if((i__12416_12434 < count__12415_12433)){
var c_12435 = chunk__12414_12432.cljs$core$IIndexed$_nth$arity$2(null,i__12416_12434);
class_list_12430.add(c_12435);

var G__12436 = seq__12413_12431;
var G__12437 = chunk__12414_12432;
var G__12438 = count__12415_12433;
var G__12439 = (i__12416_12434 + (1));
seq__12413_12431 = G__12436;
chunk__12414_12432 = G__12437;
count__12415_12433 = G__12438;
i__12416_12434 = G__12439;
continue;
} else {
var temp__4657__auto___12440 = cljs.core.seq(seq__12413_12431);
if(temp__4657__auto___12440){
var seq__12413_12441__$1 = temp__4657__auto___12440;
if(cljs.core.chunked_seq_QMARK_(seq__12413_12441__$1)){
var c__7269__auto___12442 = cljs.core.chunk_first(seq__12413_12441__$1);
var G__12443 = cljs.core.chunk_rest(seq__12413_12441__$1);
var G__12444 = c__7269__auto___12442;
var G__12445 = cljs.core.count(c__7269__auto___12442);
var G__12446 = (0);
seq__12413_12431 = G__12443;
chunk__12414_12432 = G__12444;
count__12415_12433 = G__12445;
i__12416_12434 = G__12446;
continue;
} else {
var c_12447 = cljs.core.first(seq__12413_12441__$1);
class_list_12430.add(c_12447);

var G__12448 = cljs.core.next(seq__12413_12441__$1);
var G__12449 = null;
var G__12450 = (0);
var G__12451 = (0);
seq__12413_12431 = G__12448;
chunk__12414_12432 = G__12449;
count__12415_12433 = G__12450;
i__12416_12434 = G__12451;
continue;
}
} else {
}
}
break;
}
} else {
var seq__12417_12452 = cljs.core.seq(classes__$1);
var chunk__12418_12453 = null;
var count__12419_12454 = (0);
var i__12420_12455 = (0);
while(true){
if((i__12420_12455 < count__12419_12454)){
var c_12456 = chunk__12418_12453.cljs$core$IIndexed$_nth$arity$2(null,i__12420_12455);
var class_name_12457 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_12457,c_12456))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_12457 === ""))?c_12456:[cljs.core.str(class_name_12457),cljs.core.str(" "),cljs.core.str(c_12456)].join('')));
}

var G__12458 = seq__12417_12452;
var G__12459 = chunk__12418_12453;
var G__12460 = count__12419_12454;
var G__12461 = (i__12420_12455 + (1));
seq__12417_12452 = G__12458;
chunk__12418_12453 = G__12459;
count__12419_12454 = G__12460;
i__12420_12455 = G__12461;
continue;
} else {
var temp__4657__auto___12462 = cljs.core.seq(seq__12417_12452);
if(temp__4657__auto___12462){
var seq__12417_12463__$1 = temp__4657__auto___12462;
if(cljs.core.chunked_seq_QMARK_(seq__12417_12463__$1)){
var c__7269__auto___12464 = cljs.core.chunk_first(seq__12417_12463__$1);
var G__12465 = cljs.core.chunk_rest(seq__12417_12463__$1);
var G__12466 = c__7269__auto___12464;
var G__12467 = cljs.core.count(c__7269__auto___12464);
var G__12468 = (0);
seq__12417_12452 = G__12465;
chunk__12418_12453 = G__12466;
count__12419_12454 = G__12467;
i__12420_12455 = G__12468;
continue;
} else {
var c_12469 = cljs.core.first(seq__12417_12463__$1);
var class_name_12470 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_12470,c_12469))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_12470 === ""))?c_12469:[cljs.core.str(class_name_12470),cljs.core.str(" "),cljs.core.str(c_12469)].join('')));
}

var G__12471 = cljs.core.next(seq__12417_12463__$1);
var G__12472 = null;
var G__12473 = (0);
var G__12474 = (0);
seq__12417_12452 = G__12471;
chunk__12418_12453 = G__12472;
count__12419_12454 = G__12473;
i__12420_12455 = G__12474;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__12421_12475 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__12422_12476 = null;
var count__12423_12477 = (0);
var i__12424_12478 = (0);
while(true){
if((i__12424_12478 < count__12423_12477)){
var c_12479 = chunk__12422_12476.cljs$core$IIndexed$_nth$arity$2(null,i__12424_12478);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_12479);

var G__12480 = seq__12421_12475;
var G__12481 = chunk__12422_12476;
var G__12482 = count__12423_12477;
var G__12483 = (i__12424_12478 + (1));
seq__12421_12475 = G__12480;
chunk__12422_12476 = G__12481;
count__12423_12477 = G__12482;
i__12424_12478 = G__12483;
continue;
} else {
var temp__4657__auto___12484 = cljs.core.seq(seq__12421_12475);
if(temp__4657__auto___12484){
var seq__12421_12485__$1 = temp__4657__auto___12484;
if(cljs.core.chunked_seq_QMARK_(seq__12421_12485__$1)){
var c__7269__auto___12486 = cljs.core.chunk_first(seq__12421_12485__$1);
var G__12487 = cljs.core.chunk_rest(seq__12421_12485__$1);
var G__12488 = c__7269__auto___12486;
var G__12489 = cljs.core.count(c__7269__auto___12486);
var G__12490 = (0);
seq__12421_12475 = G__12487;
chunk__12422_12476 = G__12488;
count__12423_12477 = G__12489;
i__12424_12478 = G__12490;
continue;
} else {
var c_12491 = cljs.core.first(seq__12421_12485__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_12491);

var G__12492 = cljs.core.next(seq__12421_12485__$1);
var G__12493 = null;
var G__12494 = (0);
var G__12495 = (0);
seq__12421_12475 = G__12492;
chunk__12422_12476 = G__12493;
count__12423_12477 = G__12494;
i__12424_12478 = G__12495;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq12408){
var G__12409 = cljs.core.first(seq12408);
var seq12408__$1 = cljs.core.next(seq12408);
var G__12410 = cljs.core.first(seq12408__$1);
var seq12408__$2 = cljs.core.next(seq12408__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12409,G__12410,seq12408__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args12496 = [];
var len__7524__auto___12506 = arguments.length;
var i__7525__auto___12507 = (0);
while(true){
if((i__7525__auto___12507 < len__7524__auto___12506)){
args12496.push((arguments[i__7525__auto___12507]));

var G__12508 = (i__7525__auto___12507 + (1));
i__7525__auto___12507 = G__12508;
continue;
} else {
}
break;
}

var G__12501 = args12496.length;
switch (G__12501) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7543__auto__ = (new cljs.core.IndexedSeq(args12496.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7543__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4655__auto___12510 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___12510)){
var class_list_12511 = temp__4655__auto___12510;
class_list_12511.remove(c__$1);
} else {
var class_name_12512 = dommy.core.class$(elem);
var new_class_name_12513 = dommy.utils.remove_class_str(class_name_12512,c__$1);
if((class_name_12512 === new_class_name_12513)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_12513);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__12502 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__12503 = null;
var count__12504 = (0);
var i__12505 = (0);
while(true){
if((i__12505 < count__12504)){
var c = chunk__12503.cljs$core$IIndexed$_nth$arity$2(null,i__12505);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__12514 = seq__12502;
var G__12515 = chunk__12503;
var G__12516 = count__12504;
var G__12517 = (i__12505 + (1));
seq__12502 = G__12514;
chunk__12503 = G__12515;
count__12504 = G__12516;
i__12505 = G__12517;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__12502);
if(temp__4657__auto__){
var seq__12502__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12502__$1)){
var c__7269__auto__ = cljs.core.chunk_first(seq__12502__$1);
var G__12518 = cljs.core.chunk_rest(seq__12502__$1);
var G__12519 = c__7269__auto__;
var G__12520 = cljs.core.count(c__7269__auto__);
var G__12521 = (0);
seq__12502 = G__12518;
chunk__12503 = G__12519;
count__12504 = G__12520;
i__12505 = G__12521;
continue;
} else {
var c = cljs.core.first(seq__12502__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__12522 = cljs.core.next(seq__12502__$1);
var G__12523 = null;
var G__12524 = (0);
var G__12525 = (0);
seq__12502 = G__12522;
chunk__12503 = G__12523;
count__12504 = G__12524;
i__12505 = G__12525;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq12497){
var G__12498 = cljs.core.first(seq12497);
var seq12497__$1 = cljs.core.next(seq12497);
var G__12499 = cljs.core.first(seq12497__$1);
var seq12497__$2 = cljs.core.next(seq12497__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12498,G__12499,seq12497__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args12526 = [];
var len__7524__auto___12529 = arguments.length;
var i__7525__auto___12530 = (0);
while(true){
if((i__7525__auto___12530 < len__7524__auto___12529)){
args12526.push((arguments[i__7525__auto___12530]));

var G__12531 = (i__7525__auto___12530 + (1));
i__7525__auto___12530 = G__12531;
continue;
} else {
}
break;
}

var G__12528 = args12526.length;
switch (G__12528) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12526.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4655__auto___12533 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___12533)){
var class_list_12534 = temp__4655__auto___12533;
class_list_12534.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,!(dommy.core.has_class_QMARK_(elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args12535 = [];
var len__7524__auto___12538 = arguments.length;
var i__7525__auto___12539 = (0);
while(true){
if((i__7525__auto___12539 < len__7524__auto___12538)){
args12535.push((arguments[i__7525__auto___12539]));

var G__12540 = (i__7525__auto___12539 + (1));
i__7525__auto___12539 = G__12540;
continue;
} else {
}
break;
}

var G__12537 = args12535.length;
switch (G__12537) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12535.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([cljs.core.cst$kw$display,((show_QMARK_)?"":"none")], 0));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args12542 = [];
var len__7524__auto___12545 = arguments.length;
var i__7525__auto___12546 = (0);
while(true){
if((i__7525__auto___12546 < len__7524__auto___12545)){
args12542.push((arguments[i__7525__auto___12546]));

var G__12547 = (i__7525__auto___12546 + (1));
i__7525__auto___12546 = G__12547;
continue;
} else {
}
break;
}

var G__12544 = args12542.length;
switch (G__12544) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12542.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args12549 = [];
var len__7524__auto___12560 = arguments.length;
var i__7525__auto___12561 = (0);
while(true){
if((i__7525__auto___12561 < len__7524__auto___12560)){
args12549.push((arguments[i__7525__auto___12561]));

var G__12562 = (i__7525__auto___12561 + (1));
i__7525__auto___12561 = G__12562;
continue;
} else {
}
break;
}

var G__12554 = args12549.length;
switch (G__12554) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7543__auto__ = (new cljs.core.IndexedSeq(args12549.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7543__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__12555 = parent;
G__12555.appendChild(child);

return G__12555;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__12556_12564 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__12557_12565 = null;
var count__12558_12566 = (0);
var i__12559_12567 = (0);
while(true){
if((i__12559_12567 < count__12558_12566)){
var c_12568 = chunk__12557_12565.cljs$core$IIndexed$_nth$arity$2(null,i__12559_12567);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_12568);

var G__12569 = seq__12556_12564;
var G__12570 = chunk__12557_12565;
var G__12571 = count__12558_12566;
var G__12572 = (i__12559_12567 + (1));
seq__12556_12564 = G__12569;
chunk__12557_12565 = G__12570;
count__12558_12566 = G__12571;
i__12559_12567 = G__12572;
continue;
} else {
var temp__4657__auto___12573 = cljs.core.seq(seq__12556_12564);
if(temp__4657__auto___12573){
var seq__12556_12574__$1 = temp__4657__auto___12573;
if(cljs.core.chunked_seq_QMARK_(seq__12556_12574__$1)){
var c__7269__auto___12575 = cljs.core.chunk_first(seq__12556_12574__$1);
var G__12576 = cljs.core.chunk_rest(seq__12556_12574__$1);
var G__12577 = c__7269__auto___12575;
var G__12578 = cljs.core.count(c__7269__auto___12575);
var G__12579 = (0);
seq__12556_12564 = G__12576;
chunk__12557_12565 = G__12577;
count__12558_12566 = G__12578;
i__12559_12567 = G__12579;
continue;
} else {
var c_12580 = cljs.core.first(seq__12556_12574__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_12580);

var G__12581 = cljs.core.next(seq__12556_12574__$1);
var G__12582 = null;
var G__12583 = (0);
var G__12584 = (0);
seq__12556_12564 = G__12581;
chunk__12557_12565 = G__12582;
count__12558_12566 = G__12583;
i__12559_12567 = G__12584;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq12550){
var G__12551 = cljs.core.first(seq12550);
var seq12550__$1 = cljs.core.next(seq12550);
var G__12552 = cljs.core.first(seq12550__$1);
var seq12550__$2 = cljs.core.next(seq12550__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12551,G__12552,seq12550__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args12585 = [];
var len__7524__auto___12596 = arguments.length;
var i__7525__auto___12597 = (0);
while(true){
if((i__7525__auto___12597 < len__7524__auto___12596)){
args12585.push((arguments[i__7525__auto___12597]));

var G__12598 = (i__7525__auto___12597 + (1));
i__7525__auto___12597 = G__12598;
continue;
} else {
}
break;
}

var G__12590 = args12585.length;
switch (G__12590) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7543__auto__ = (new cljs.core.IndexedSeq(args12585.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7543__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__12591 = parent;
G__12591.insertBefore(child,parent.firstChild);

return G__12591;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__12592_12600 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__12593_12601 = null;
var count__12594_12602 = (0);
var i__12595_12603 = (0);
while(true){
if((i__12595_12603 < count__12594_12602)){
var c_12604 = chunk__12593_12601.cljs$core$IIndexed$_nth$arity$2(null,i__12595_12603);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_12604);

var G__12605 = seq__12592_12600;
var G__12606 = chunk__12593_12601;
var G__12607 = count__12594_12602;
var G__12608 = (i__12595_12603 + (1));
seq__12592_12600 = G__12605;
chunk__12593_12601 = G__12606;
count__12594_12602 = G__12607;
i__12595_12603 = G__12608;
continue;
} else {
var temp__4657__auto___12609 = cljs.core.seq(seq__12592_12600);
if(temp__4657__auto___12609){
var seq__12592_12610__$1 = temp__4657__auto___12609;
if(cljs.core.chunked_seq_QMARK_(seq__12592_12610__$1)){
var c__7269__auto___12611 = cljs.core.chunk_first(seq__12592_12610__$1);
var G__12612 = cljs.core.chunk_rest(seq__12592_12610__$1);
var G__12613 = c__7269__auto___12611;
var G__12614 = cljs.core.count(c__7269__auto___12611);
var G__12615 = (0);
seq__12592_12600 = G__12612;
chunk__12593_12601 = G__12613;
count__12594_12602 = G__12614;
i__12595_12603 = G__12615;
continue;
} else {
var c_12616 = cljs.core.first(seq__12592_12610__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_12616);

var G__12617 = cljs.core.next(seq__12592_12610__$1);
var G__12618 = null;
var G__12619 = (0);
var G__12620 = (0);
seq__12592_12600 = G__12617;
chunk__12593_12601 = G__12618;
count__12594_12602 = G__12619;
i__12595_12603 = G__12620;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq12586){
var G__12587 = cljs.core.first(seq12586);
var seq12586__$1 = cljs.core.next(seq12586);
var G__12588 = cljs.core.first(seq12586__$1);
var seq12586__$2 = cljs.core.next(seq12586__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12587,G__12588,seq12586__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$p], 0)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___12621 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___12621)){
var next_12622 = temp__4655__auto___12621;
dommy.core.insert_before_BANG_(elem,next_12622);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$p], 0)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args12623 = [];
var len__7524__auto___12627 = arguments.length;
var i__7525__auto___12628 = (0);
while(true){
if((i__7525__auto___12628 < len__7524__auto___12627)){
args12623.push((arguments[i__7525__auto___12628]));

var G__12629 = (i__7525__auto___12628 + (1));
i__7525__auto___12628 = G__12629;
continue;
} else {
}
break;
}

var G__12625 = args12623.length;
switch (G__12625) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12623.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$p], 0)))].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__12626 = p;
G__12626.removeChild(elem);

return G__12626;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12631){
var vec__12632 = p__12631;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12632,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12632,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__12632,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__12632,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__6466__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__6466__auto__)){
return or__6466__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__6454__auto__ = related_target;
if(cljs.core.truth_(and__6454__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__6454__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
;})(vec__12632,special_mouse_event,real_mouse_event))
});})(vec__12632,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mouseenter,cljs.core.cst$kw$mouseover,cljs.core.cst$kw$mouseleave,cljs.core.cst$kw$mouseout], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__6454__auto__ = selected_target;
if(cljs.core.truth_(and__6454__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,cljs.core.cst$kw$disabled));
} else {
return and__6454__auto__;
}
})())){
event.selectedTarget = selected_target;

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__6466__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__6466__auto__)){
return or__6466__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__7531__auto__ = [];
var len__7524__auto___12636 = arguments.length;
var i__7525__auto___12637 = (0);
while(true){
if((i__7525__auto___12637 < len__7524__auto___12636)){
args__7531__auto__.push((arguments[i__7525__auto___12637]));

var G__12638 = (i__7525__auto___12637 + (1));
i__7525__auto___12637 = G__12638;
continue;
} else {
}
break;
}

var argseq__7532__auto__ = ((((2) < args__7531__auto__.length))?(new cljs.core.IndexedSeq(args__7531__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7532__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq12633){
var G__12634 = cljs.core.first(seq12633);
var seq12633__$1 = cljs.core.next(seq12633);
var G__12635 = cljs.core.first(seq12633__$1);
var seq12633__$2 = cljs.core.next(seq12633__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12634,G__12635,seq12633__$2);
});
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__7531__auto__ = [];
var len__7524__auto___12664 = arguments.length;
var i__7525__auto___12665 = (0);
while(true){
if((i__7525__auto___12665 < len__7524__auto___12664)){
args__7531__auto__.push((arguments[i__7525__auto___12665]));

var G__12666 = (i__7525__auto___12665 + (1));
i__7525__auto___12665 = G__12666;
continue;
} else {
}
break;
}

var argseq__7532__auto__ = ((((1) < args__7531__auto__.length))?(new cljs.core.IndexedSeq(args__7531__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7532__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$type_DASH_fs))], 0)))].join('')));
}

var vec__12641_12667 = dommy.core.elem_and_selector(elem_sel);
var elem_12668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12641_12667,(0),null);
var selector_12669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12641_12667,(1),null);
var seq__12642_12670 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__12649_12671 = null;
var count__12650_12672 = (0);
var i__12651_12673 = (0);
while(true){
if((i__12651_12673 < count__12650_12672)){
var vec__12658_12674 = chunk__12649_12671.cljs$core$IIndexed$_nth$arity$2(null,i__12651_12673);
var orig_type_12675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12658_12674,(0),null);
var f_12676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12658_12674,(1),null);
var seq__12652_12677 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_12675,cljs.core.PersistentArrayMap.fromArray([orig_type_12675,cljs.core.identity], true, false)));
var chunk__12654_12678 = null;
var count__12655_12679 = (0);
var i__12656_12680 = (0);
while(true){
if((i__12656_12680 < count__12655_12679)){
var vec__12659_12681 = chunk__12654_12678.cljs$core$IIndexed$_nth$arity$2(null,i__12656_12680);
var actual_type_12682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12659_12681,(0),null);
var factory_12683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12659_12681,(1),null);
var canonical_f_12684 = (cljs.core.truth_(selector_12669)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_12668,selector_12669):cljs.core.identity).call(null,(factory_12683.cljs$core$IFn$_invoke$arity$1 ? factory_12683.cljs$core$IFn$_invoke$arity$1(f_12676) : factory_12683.call(null,f_12676)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12668,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12669,actual_type_12682,f_12676], null),canonical_f_12684], 0));

if(cljs.core.truth_(elem_12668.addEventListener)){
elem_12668.addEventListener(cljs.core.name(actual_type_12682),canonical_f_12684);
} else {
elem_12668.attachEvent(cljs.core.name(actual_type_12682),canonical_f_12684);
}

var G__12685 = seq__12652_12677;
var G__12686 = chunk__12654_12678;
var G__12687 = count__12655_12679;
var G__12688 = (i__12656_12680 + (1));
seq__12652_12677 = G__12685;
chunk__12654_12678 = G__12686;
count__12655_12679 = G__12687;
i__12656_12680 = G__12688;
continue;
} else {
var temp__4657__auto___12689 = cljs.core.seq(seq__12652_12677);
if(temp__4657__auto___12689){
var seq__12652_12690__$1 = temp__4657__auto___12689;
if(cljs.core.chunked_seq_QMARK_(seq__12652_12690__$1)){
var c__7269__auto___12691 = cljs.core.chunk_first(seq__12652_12690__$1);
var G__12692 = cljs.core.chunk_rest(seq__12652_12690__$1);
var G__12693 = c__7269__auto___12691;
var G__12694 = cljs.core.count(c__7269__auto___12691);
var G__12695 = (0);
seq__12652_12677 = G__12692;
chunk__12654_12678 = G__12693;
count__12655_12679 = G__12694;
i__12656_12680 = G__12695;
continue;
} else {
var vec__12660_12696 = cljs.core.first(seq__12652_12690__$1);
var actual_type_12697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12660_12696,(0),null);
var factory_12698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12660_12696,(1),null);
var canonical_f_12699 = (cljs.core.truth_(selector_12669)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_12668,selector_12669):cljs.core.identity).call(null,(factory_12698.cljs$core$IFn$_invoke$arity$1 ? factory_12698.cljs$core$IFn$_invoke$arity$1(f_12676) : factory_12698.call(null,f_12676)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12668,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12669,actual_type_12697,f_12676], null),canonical_f_12699], 0));

if(cljs.core.truth_(elem_12668.addEventListener)){
elem_12668.addEventListener(cljs.core.name(actual_type_12697),canonical_f_12699);
} else {
elem_12668.attachEvent(cljs.core.name(actual_type_12697),canonical_f_12699);
}

var G__12700 = cljs.core.next(seq__12652_12690__$1);
var G__12701 = null;
var G__12702 = (0);
var G__12703 = (0);
seq__12652_12677 = G__12700;
chunk__12654_12678 = G__12701;
count__12655_12679 = G__12702;
i__12656_12680 = G__12703;
continue;
}
} else {
}
}
break;
}

var G__12704 = seq__12642_12670;
var G__12705 = chunk__12649_12671;
var G__12706 = count__12650_12672;
var G__12707 = (i__12651_12673 + (1));
seq__12642_12670 = G__12704;
chunk__12649_12671 = G__12705;
count__12650_12672 = G__12706;
i__12651_12673 = G__12707;
continue;
} else {
var temp__4657__auto___12708 = cljs.core.seq(seq__12642_12670);
if(temp__4657__auto___12708){
var seq__12642_12709__$1 = temp__4657__auto___12708;
if(cljs.core.chunked_seq_QMARK_(seq__12642_12709__$1)){
var c__7269__auto___12710 = cljs.core.chunk_first(seq__12642_12709__$1);
var G__12711 = cljs.core.chunk_rest(seq__12642_12709__$1);
var G__12712 = c__7269__auto___12710;
var G__12713 = cljs.core.count(c__7269__auto___12710);
var G__12714 = (0);
seq__12642_12670 = G__12711;
chunk__12649_12671 = G__12712;
count__12650_12672 = G__12713;
i__12651_12673 = G__12714;
continue;
} else {
var vec__12661_12715 = cljs.core.first(seq__12642_12709__$1);
var orig_type_12716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12661_12715,(0),null);
var f_12717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12661_12715,(1),null);
var seq__12643_12718 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_12716,cljs.core.PersistentArrayMap.fromArray([orig_type_12716,cljs.core.identity], true, false)));
var chunk__12645_12719 = null;
var count__12646_12720 = (0);
var i__12647_12721 = (0);
while(true){
if((i__12647_12721 < count__12646_12720)){
var vec__12662_12722 = chunk__12645_12719.cljs$core$IIndexed$_nth$arity$2(null,i__12647_12721);
var actual_type_12723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12662_12722,(0),null);
var factory_12724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12662_12722,(1),null);
var canonical_f_12725 = (cljs.core.truth_(selector_12669)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_12668,selector_12669):cljs.core.identity).call(null,(factory_12724.cljs$core$IFn$_invoke$arity$1 ? factory_12724.cljs$core$IFn$_invoke$arity$1(f_12717) : factory_12724.call(null,f_12717)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12668,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12669,actual_type_12723,f_12717], null),canonical_f_12725], 0));

if(cljs.core.truth_(elem_12668.addEventListener)){
elem_12668.addEventListener(cljs.core.name(actual_type_12723),canonical_f_12725);
} else {
elem_12668.attachEvent(cljs.core.name(actual_type_12723),canonical_f_12725);
}

var G__12726 = seq__12643_12718;
var G__12727 = chunk__12645_12719;
var G__12728 = count__12646_12720;
var G__12729 = (i__12647_12721 + (1));
seq__12643_12718 = G__12726;
chunk__12645_12719 = G__12727;
count__12646_12720 = G__12728;
i__12647_12721 = G__12729;
continue;
} else {
var temp__4657__auto___12730__$1 = cljs.core.seq(seq__12643_12718);
if(temp__4657__auto___12730__$1){
var seq__12643_12731__$1 = temp__4657__auto___12730__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12643_12731__$1)){
var c__7269__auto___12732 = cljs.core.chunk_first(seq__12643_12731__$1);
var G__12733 = cljs.core.chunk_rest(seq__12643_12731__$1);
var G__12734 = c__7269__auto___12732;
var G__12735 = cljs.core.count(c__7269__auto___12732);
var G__12736 = (0);
seq__12643_12718 = G__12733;
chunk__12645_12719 = G__12734;
count__12646_12720 = G__12735;
i__12647_12721 = G__12736;
continue;
} else {
var vec__12663_12737 = cljs.core.first(seq__12643_12731__$1);
var actual_type_12738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12663_12737,(0),null);
var factory_12739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12663_12737,(1),null);
var canonical_f_12740 = (cljs.core.truth_(selector_12669)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_12668,selector_12669):cljs.core.identity).call(null,(factory_12739.cljs$core$IFn$_invoke$arity$1 ? factory_12739.cljs$core$IFn$_invoke$arity$1(f_12717) : factory_12739.call(null,f_12717)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12668,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12669,actual_type_12738,f_12717], null),canonical_f_12740], 0));

if(cljs.core.truth_(elem_12668.addEventListener)){
elem_12668.addEventListener(cljs.core.name(actual_type_12738),canonical_f_12740);
} else {
elem_12668.attachEvent(cljs.core.name(actual_type_12738),canonical_f_12740);
}

var G__12741 = cljs.core.next(seq__12643_12731__$1);
var G__12742 = null;
var G__12743 = (0);
var G__12744 = (0);
seq__12643_12718 = G__12741;
chunk__12645_12719 = G__12742;
count__12646_12720 = G__12743;
i__12647_12721 = G__12744;
continue;
}
} else {
}
}
break;
}

var G__12745 = cljs.core.next(seq__12642_12709__$1);
var G__12746 = null;
var G__12747 = (0);
var G__12748 = (0);
seq__12642_12670 = G__12745;
chunk__12649_12671 = G__12746;
count__12650_12672 = G__12747;
i__12651_12673 = G__12748;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq12639){
var G__12640 = cljs.core.first(seq12639);
var seq12639__$1 = cljs.core.next(seq12639);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12640,seq12639__$1);
});
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__7531__auto__ = [];
var len__7524__auto___12774 = arguments.length;
var i__7525__auto___12775 = (0);
while(true){
if((i__7525__auto___12775 < len__7524__auto___12774)){
args__7531__auto__.push((arguments[i__7525__auto___12775]));

var G__12776 = (i__7525__auto___12775 + (1));
i__7525__auto___12775 = G__12776;
continue;
} else {
}
break;
}

var argseq__7532__auto__ = ((((1) < args__7531__auto__.length))?(new cljs.core.IndexedSeq(args__7531__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7532__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$type_DASH_fs))], 0)))].join('')));
}

var vec__12751_12777 = dommy.core.elem_and_selector(elem_sel);
var elem_12778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12751_12777,(0),null);
var selector_12779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12751_12777,(1),null);
var seq__12752_12780 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__12759_12781 = null;
var count__12760_12782 = (0);
var i__12761_12783 = (0);
while(true){
if((i__12761_12783 < count__12760_12782)){
var vec__12768_12784 = chunk__12759_12781.cljs$core$IIndexed$_nth$arity$2(null,i__12761_12783);
var orig_type_12785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12768_12784,(0),null);
var f_12786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12768_12784,(1),null);
var seq__12762_12787 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_12785,cljs.core.PersistentArrayMap.fromArray([orig_type_12785,cljs.core.identity], true, false)));
var chunk__12764_12788 = null;
var count__12765_12789 = (0);
var i__12766_12790 = (0);
while(true){
if((i__12766_12790 < count__12765_12789)){
var vec__12769_12791 = chunk__12764_12788.cljs$core$IIndexed$_nth$arity$2(null,i__12766_12790);
var actual_type_12792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12769_12791,(0),null);
var __12793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12769_12791,(1),null);
var keys_12794 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12779,actual_type_12792,f_12786], null);
var canonical_f_12795 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_12778),keys_12794);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12778,dommy.utils.dissoc_in,cljs.core.array_seq([keys_12794], 0));

if(cljs.core.truth_(elem_12778.removeEventListener)){
elem_12778.removeEventListener(cljs.core.name(actual_type_12792),canonical_f_12795);
} else {
elem_12778.detachEvent(cljs.core.name(actual_type_12792),canonical_f_12795);
}

var G__12796 = seq__12762_12787;
var G__12797 = chunk__12764_12788;
var G__12798 = count__12765_12789;
var G__12799 = (i__12766_12790 + (1));
seq__12762_12787 = G__12796;
chunk__12764_12788 = G__12797;
count__12765_12789 = G__12798;
i__12766_12790 = G__12799;
continue;
} else {
var temp__4657__auto___12800 = cljs.core.seq(seq__12762_12787);
if(temp__4657__auto___12800){
var seq__12762_12801__$1 = temp__4657__auto___12800;
if(cljs.core.chunked_seq_QMARK_(seq__12762_12801__$1)){
var c__7269__auto___12802 = cljs.core.chunk_first(seq__12762_12801__$1);
var G__12803 = cljs.core.chunk_rest(seq__12762_12801__$1);
var G__12804 = c__7269__auto___12802;
var G__12805 = cljs.core.count(c__7269__auto___12802);
var G__12806 = (0);
seq__12762_12787 = G__12803;
chunk__12764_12788 = G__12804;
count__12765_12789 = G__12805;
i__12766_12790 = G__12806;
continue;
} else {
var vec__12770_12807 = cljs.core.first(seq__12762_12801__$1);
var actual_type_12808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12770_12807,(0),null);
var __12809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12770_12807,(1),null);
var keys_12810 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12779,actual_type_12808,f_12786], null);
var canonical_f_12811 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_12778),keys_12810);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12778,dommy.utils.dissoc_in,cljs.core.array_seq([keys_12810], 0));

if(cljs.core.truth_(elem_12778.removeEventListener)){
elem_12778.removeEventListener(cljs.core.name(actual_type_12808),canonical_f_12811);
} else {
elem_12778.detachEvent(cljs.core.name(actual_type_12808),canonical_f_12811);
}

var G__12812 = cljs.core.next(seq__12762_12801__$1);
var G__12813 = null;
var G__12814 = (0);
var G__12815 = (0);
seq__12762_12787 = G__12812;
chunk__12764_12788 = G__12813;
count__12765_12789 = G__12814;
i__12766_12790 = G__12815;
continue;
}
} else {
}
}
break;
}

var G__12816 = seq__12752_12780;
var G__12817 = chunk__12759_12781;
var G__12818 = count__12760_12782;
var G__12819 = (i__12761_12783 + (1));
seq__12752_12780 = G__12816;
chunk__12759_12781 = G__12817;
count__12760_12782 = G__12818;
i__12761_12783 = G__12819;
continue;
} else {
var temp__4657__auto___12820 = cljs.core.seq(seq__12752_12780);
if(temp__4657__auto___12820){
var seq__12752_12821__$1 = temp__4657__auto___12820;
if(cljs.core.chunked_seq_QMARK_(seq__12752_12821__$1)){
var c__7269__auto___12822 = cljs.core.chunk_first(seq__12752_12821__$1);
var G__12823 = cljs.core.chunk_rest(seq__12752_12821__$1);
var G__12824 = c__7269__auto___12822;
var G__12825 = cljs.core.count(c__7269__auto___12822);
var G__12826 = (0);
seq__12752_12780 = G__12823;
chunk__12759_12781 = G__12824;
count__12760_12782 = G__12825;
i__12761_12783 = G__12826;
continue;
} else {
var vec__12771_12827 = cljs.core.first(seq__12752_12821__$1);
var orig_type_12828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12771_12827,(0),null);
var f_12829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12771_12827,(1),null);
var seq__12753_12830 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_12828,cljs.core.PersistentArrayMap.fromArray([orig_type_12828,cljs.core.identity], true, false)));
var chunk__12755_12831 = null;
var count__12756_12832 = (0);
var i__12757_12833 = (0);
while(true){
if((i__12757_12833 < count__12756_12832)){
var vec__12772_12834 = chunk__12755_12831.cljs$core$IIndexed$_nth$arity$2(null,i__12757_12833);
var actual_type_12835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12772_12834,(0),null);
var __12836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12772_12834,(1),null);
var keys_12837 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12779,actual_type_12835,f_12829], null);
var canonical_f_12838 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_12778),keys_12837);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12778,dommy.utils.dissoc_in,cljs.core.array_seq([keys_12837], 0));

if(cljs.core.truth_(elem_12778.removeEventListener)){
elem_12778.removeEventListener(cljs.core.name(actual_type_12835),canonical_f_12838);
} else {
elem_12778.detachEvent(cljs.core.name(actual_type_12835),canonical_f_12838);
}

var G__12839 = seq__12753_12830;
var G__12840 = chunk__12755_12831;
var G__12841 = count__12756_12832;
var G__12842 = (i__12757_12833 + (1));
seq__12753_12830 = G__12839;
chunk__12755_12831 = G__12840;
count__12756_12832 = G__12841;
i__12757_12833 = G__12842;
continue;
} else {
var temp__4657__auto___12843__$1 = cljs.core.seq(seq__12753_12830);
if(temp__4657__auto___12843__$1){
var seq__12753_12844__$1 = temp__4657__auto___12843__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12753_12844__$1)){
var c__7269__auto___12845 = cljs.core.chunk_first(seq__12753_12844__$1);
var G__12846 = cljs.core.chunk_rest(seq__12753_12844__$1);
var G__12847 = c__7269__auto___12845;
var G__12848 = cljs.core.count(c__7269__auto___12845);
var G__12849 = (0);
seq__12753_12830 = G__12846;
chunk__12755_12831 = G__12847;
count__12756_12832 = G__12848;
i__12757_12833 = G__12849;
continue;
} else {
var vec__12773_12850 = cljs.core.first(seq__12753_12844__$1);
var actual_type_12851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12773_12850,(0),null);
var __12852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12773_12850,(1),null);
var keys_12853 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12779,actual_type_12851,f_12829], null);
var canonical_f_12854 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_12778),keys_12853);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12778,dommy.utils.dissoc_in,cljs.core.array_seq([keys_12853], 0));

if(cljs.core.truth_(elem_12778.removeEventListener)){
elem_12778.removeEventListener(cljs.core.name(actual_type_12851),canonical_f_12854);
} else {
elem_12778.detachEvent(cljs.core.name(actual_type_12851),canonical_f_12854);
}

var G__12855 = cljs.core.next(seq__12753_12844__$1);
var G__12856 = null;
var G__12857 = (0);
var G__12858 = (0);
seq__12753_12830 = G__12855;
chunk__12755_12831 = G__12856;
count__12756_12832 = G__12857;
i__12757_12833 = G__12858;
continue;
}
} else {
}
}
break;
}

var G__12859 = cljs.core.next(seq__12752_12821__$1);
var G__12860 = null;
var G__12861 = (0);
var G__12862 = (0);
seq__12752_12780 = G__12859;
chunk__12759_12781 = G__12860;
count__12760_12782 = G__12861;
i__12761_12783 = G__12862;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq12749){
var G__12750 = cljs.core.first(seq12749);
var seq12749__$1 = cljs.core.next(seq12749);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12750,seq12749__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__7531__auto__ = [];
var len__7524__auto___12872 = arguments.length;
var i__7525__auto___12873 = (0);
while(true){
if((i__7525__auto___12873 < len__7524__auto___12872)){
args__7531__auto__.push((arguments[i__7525__auto___12873]));

var G__12874 = (i__7525__auto___12873 + (1));
i__7525__auto___12873 = G__12874;
continue;
} else {
}
break;
}

var argseq__7532__auto__ = ((((1) < args__7531__auto__.length))?(new cljs.core.IndexedSeq(args__7531__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7532__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$type_DASH_fs))], 0)))].join('')));
}

var vec__12865_12875 = dommy.core.elem_and_selector(elem_sel);
var elem_12876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12865_12875,(0),null);
var selector_12877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12865_12875,(1),null);
var seq__12866_12878 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__12867_12879 = null;
var count__12868_12880 = (0);
var i__12869_12881 = (0);
while(true){
if((i__12869_12881 < count__12868_12880)){
var vec__12870_12882 = chunk__12867_12879.cljs$core$IIndexed$_nth$arity$2(null,i__12869_12881);
var type_12883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12870_12882,(0),null);
var f_12884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12870_12882,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_12883,((function (seq__12866_12878,chunk__12867_12879,count__12868_12880,i__12869_12881,vec__12870_12882,type_12883,f_12884,vec__12865_12875,elem_12876,selector_12877){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_12883,dommy$core$this_fn], 0));

return (f_12884.cljs$core$IFn$_invoke$arity$1 ? f_12884.cljs$core$IFn$_invoke$arity$1(e) : f_12884.call(null,e));
});})(seq__12866_12878,chunk__12867_12879,count__12868_12880,i__12869_12881,vec__12870_12882,type_12883,f_12884,vec__12865_12875,elem_12876,selector_12877))
], 0));

var G__12885 = seq__12866_12878;
var G__12886 = chunk__12867_12879;
var G__12887 = count__12868_12880;
var G__12888 = (i__12869_12881 + (1));
seq__12866_12878 = G__12885;
chunk__12867_12879 = G__12886;
count__12868_12880 = G__12887;
i__12869_12881 = G__12888;
continue;
} else {
var temp__4657__auto___12889 = cljs.core.seq(seq__12866_12878);
if(temp__4657__auto___12889){
var seq__12866_12890__$1 = temp__4657__auto___12889;
if(cljs.core.chunked_seq_QMARK_(seq__12866_12890__$1)){
var c__7269__auto___12891 = cljs.core.chunk_first(seq__12866_12890__$1);
var G__12892 = cljs.core.chunk_rest(seq__12866_12890__$1);
var G__12893 = c__7269__auto___12891;
var G__12894 = cljs.core.count(c__7269__auto___12891);
var G__12895 = (0);
seq__12866_12878 = G__12892;
chunk__12867_12879 = G__12893;
count__12868_12880 = G__12894;
i__12869_12881 = G__12895;
continue;
} else {
var vec__12871_12896 = cljs.core.first(seq__12866_12890__$1);
var type_12897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12871_12896,(0),null);
var f_12898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12871_12896,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_12897,((function (seq__12866_12878,chunk__12867_12879,count__12868_12880,i__12869_12881,vec__12871_12896,type_12897,f_12898,seq__12866_12890__$1,temp__4657__auto___12889,vec__12865_12875,elem_12876,selector_12877){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_12897,dommy$core$this_fn], 0));

return (f_12898.cljs$core$IFn$_invoke$arity$1 ? f_12898.cljs$core$IFn$_invoke$arity$1(e) : f_12898.call(null,e));
});})(seq__12866_12878,chunk__12867_12879,count__12868_12880,i__12869_12881,vec__12871_12896,type_12897,f_12898,seq__12866_12890__$1,temp__4657__auto___12889,vec__12865_12875,elem_12876,selector_12877))
], 0));

var G__12899 = cljs.core.next(seq__12866_12890__$1);
var G__12900 = null;
var G__12901 = (0);
var G__12902 = (0);
seq__12866_12878 = G__12899;
chunk__12867_12879 = G__12900;
count__12868_12880 = G__12901;
i__12869_12881 = G__12902;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq12863){
var G__12864 = cljs.core.first(seq12863);
var seq12863__$1 = cljs.core.next(seq12863);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12864,seq12863__$1);
});
