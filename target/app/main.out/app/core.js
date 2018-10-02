// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('app.core');
goog.require('cljs.core');
app.core.main = (function app$core$main(){
console.log("Wow, it works!");

var c = document.createElement("DIV");
(c["innerHTML"] = "<p>i'm dynamically created</p>");

return document.getElementById("container").appendChild(c);
});
