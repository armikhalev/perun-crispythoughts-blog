// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_();
app.core.js_log = (function app$core$js_log(i){
return console.log(i);
});
app.core.on_click = (function app$core$on_click(list_items,order_arrow,arrow_state){
var link_anchors = dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_items,cljs.core.cst$kw$li], null))));
dommy.core.clear_BANG_(list_items);

cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (link_anchors){
return (function (p1__12906_SHARP_){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(list_items,p1__12906_SHARP_);
});})(link_anchors))
,cljs.core.clj__GT_js(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(((function (link_anchors){
return (function (p1__12905_SHARP_){
return dommy.core.attr(p1__12905_SHARP_,cljs.core.cst$kw$data_DASH_key);
});})(link_anchors))
,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(arrow_state) : cljs.core.deref.call(null,arrow_state)),"down"))?cljs.core._GT_:cljs.core._LT_),link_anchors))));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(arrow_state) : cljs.core.deref.call(null,arrow_state)),"down")){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(arrow_state,"up") : cljs.core.reset_BANG_.call(null,arrow_state,"up"));
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(arrow_state,"down") : cljs.core.reset_BANG_.call(null,arrow_state,"down"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(arrow_state) : cljs.core.deref.call(null,arrow_state)),"down")){
return dommy.core.set_html_BANG_(order_arrow," &uarr;");
} else {
return dommy.core.set_html_BANG_(order_arrow," &darr;");
}
});
/**
 * Ensures that `input` string is alphanumeric, apostroph, dash or space.
 *   Otherwise returns empty string.
 */
app.core.sanitize_input = (function app$core$sanitize_input(input){
var sanitized = cljs.core.re_find(/[a-zA-Z0-9'-]*\s*[a-zA-Z0-9'-]*/,input);
if(cljs.core.some_QMARK_(sanitized)){
return sanitized;
} else {
return "";
}
});
app.core.on_keyup = (function app$core$on_keyup(search_by_tag,list_items,atom_list_items){
var link_anchors = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_list_items) : cljs.core.deref.call(null,atom_list_items));
var value = app.core.sanitize_input(dommy.core.value(search_by_tag)).toLowerCase();
dommy.core.clear_BANG_(list_items);

return cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (link_anchors,value){
return (function (p1__12908_SHARP_){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(list_items,p1__12908_SHARP_);
});})(link_anchors,value))
,cljs.core.clj__GT_js(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (link_anchors,value){
return (function (p1__12907_SHARP_){
return cljs.core.re_find(cljs.core.re_pattern(value),dommy.core.attr(p1__12907_SHARP_,cljs.core.cst$kw$data_DASH_tags).toLowerCase());
});})(link_anchors,value))
,link_anchors))));
});
app.core.on_tags_button_click = (function app$core$on_tags_button_click(tags){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1(tags);
});
if(typeof app.core.atom_list_items !== 'undefined'){
} else {
app.core.atom_list_items = (function (){var G__12909 = dommy.utils.__GT_Array(document.querySelectorAll("#list-items li"));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12909) : cljs.core.atom.call(null,G__12909));
})();
}
app.core.main = (function app$core$main(){
var button = document.getElementById("sort-by-date");
var list_items = document.getElementById("list-items");
var order_arrow = document.getElementById("order-arrow");
var arrow_state = (function (){var G__12911 = dommy.core.attr(order_arrow,cljs.core.cst$kw$data_DASH_state);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12911) : cljs.core.atom.call(null,G__12911));
})();
var search_by_tag = document.getElementById("search-by-tag");
var tags_button = document.getElementById("tags-button");
var aside_tags = document.querySelector("aside#tags");
dommy.core.hide_BANG_(aside_tags);

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(button,cljs.core.array_seq([cljs.core.cst$kw$click,((function (button,list_items,order_arrow,arrow_state,search_by_tag,tags_button,aside_tags){
return (function (){
return app.core.on_click(list_items,order_arrow,arrow_state);
});})(button,list_items,order_arrow,arrow_state,search_by_tag,tags_button,aside_tags))
], 0));

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(tags_button,cljs.core.array_seq([cljs.core.cst$kw$click,((function (button,list_items,order_arrow,arrow_state,search_by_tag,tags_button,aside_tags){
return (function (){
return app.core.on_tags_button_click(aside_tags);
});})(button,list_items,order_arrow,arrow_state,search_by_tag,tags_button,aside_tags))
], 0));

return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(search_by_tag,cljs.core.array_seq([cljs.core.cst$kw$keyup,((function (button,list_items,order_arrow,arrow_state,search_by_tag,tags_button,aside_tags){
return (function (){
return app.core.on_keyup(search_by_tag,list_items,app.core.atom_list_items);
});})(button,list_items,order_arrow,arrow_state,search_by_tag,tags_button,aside_tags))
], 0));
});
