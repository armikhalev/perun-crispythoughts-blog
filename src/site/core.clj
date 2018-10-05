(ns site.core
  (:require [hiccup.page :as hp]))

(defn render [{global-meta :meta posts :entries}]
  (hp/html5
   {:lang "en" :itemtype "http://schema.org/Blog"}
   [:head
    (hp/include-css "index.css")
    [:title (:site-title global-meta)]
    [:meta {:charset "utf-8"}]
    [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge,chrome=1"}]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0, user-scalable=no"}]]
   [:body#container
    [:h1 "List of My Posts"]
    [:button#sort-by-date  "Sort by date"]
    [:ul#list-items
     (for [post posts]
       [:li
        [:a
         {:href (:permalink post)
          :data-key (:date post)}
         (:title post)]])]]

   ;; scripts
   (hp/include-js "main.js")))

