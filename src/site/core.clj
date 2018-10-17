(ns site.core
  (:require [hiccup.page :as hp]
            [clojure.string :as clj-str]))

(defn render [{global-meta :meta
               posts       :entries}]

  (hp/html5
   {:lang "en" :itemtype "http://schema.org/Blog"}
   [:head
    (hp/include-css "index.css")
    [:title (:site-title global-meta)]
    [:meta {:charset "utf-8"}]
    [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge,chrome=1"}]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0, user-scalable=no"}]]
   [:body#main
    [:h1.text-center "List of My Posts"]

    [:input#search-by-tag
     {:placeholder  "Search by tag..."}]


    [:section

     [:ul#list-items
      (for [post posts]
        (when (= "post" (:layout post))
          [:li
           {:data-key  (:date post)
            :data-tags (clj-str/join ", " (:tags post))}
           [:a
            {:href (:permalink post)}
            (str (:date post) " - " (:title post) " | TAGS -> " (clj-str/join ", " (:tags post)))]]))]

     [:button#sort-by-date
      [:span#order-arrow
       {:data-state "up"
        :title      "Sort by date"}
       " &darr;"]]]

    [:aside#tags
     (for [post posts]
       (when (:tag post)
         [:p.tag
          [:a
           {:href (:permalink post)}
           (:tag post)]]))]

    [:button#tags-button
     {:data-state "closed"}
     "Tags"]
    ]

   ;; scripts
   (hp/include-js "main.js")))

