(ns site.core
  (:require [hiccup.page :as hp]
            [clojure.string :as clj-str]))

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

    [:div.search-fns
     [:button#sort-by-date  "Sort by date"
      [:span#order-arrow
       {:data-state "down"}
       " &darr;"]]

     [:div
      [:label "Search by tag: "]
      [:input#search-by-tag ]]]

    [:ul#list-items
     (for [post posts]
       [:li
        {:data-key  (:date post)
         :data-tags (clj-str/join ", " (:tags post))}
        [:a
         {:href (str "./posts/"(:filename post))}
         (str (:date post) " - " (:title post) " | TAGS -> " (clj-str/join ", " (:tags post)))]])]]

   ;; scripts
   (hp/include-js "main.js")))

