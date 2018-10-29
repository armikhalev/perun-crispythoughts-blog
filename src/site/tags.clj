(ns site.tags
  (:require [hiccup.page :as hp]))

(defn render [{global-meta :meta posts :entries entry :entry}]
  (hp/html5 {:lang "en" :itemtype "http://schema.org/Blog"}
         [:head
          (hp/include-css "../index.css")
          [:title (str (:site-title global-meta) "|" (:tag entry))]
          [:meta {:charset "utf-8"}]
          [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge,chrome=1"}]
          [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0, user-scalable=no"}]]
         [:body.main
          [:h1 (-> entry
                   (:tag )
                   (clojure.string/upper-case)
                   (str , " tag"))]
          [:ul.tags
           (for [post posts]
             [:li.tag-link
              [:a
               {:href (str "./posts/"(:filename post))}
               (:title post)]])]
          [:h2
           [:a.back-home {:href "/"} "↢ Back Home"]]]))
