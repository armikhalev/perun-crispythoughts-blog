(ns site.post
  (:require [hiccup.page :as hp]
            [clojure.string :as clj-str]))

(defn render [{global-meta :meta posts :entries post :entry}]
  (hp/html5 {:lang "en" :itemtype "http://schema.org/Blog"}
         [:head
          (hp/include-css "../index.css")
          [:title (str (:site-title global-meta) " | " (:title post))]
          [:meta {:charset "utf-8"}]
          [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge,chrome=1"}]
          [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0, user-scalable=no"}]
          [:link {:href "https://fonts.googleapis.com/css?family=Fira+Sans" :rel "stylesheet"}]]

         [:body.main
          [:h1.main-header (:title post)]
          [:main.content (:content post)]
          [:h2
           [:a.back-home {:href "/"} "↢ Back Home"]]

          [:footer
           [:div "Built by Sen Mikhalev with: "]
           [:span [:a {:href "https://github.com/clojure/clojurescript"} "Clojure(Script)"]]
           [:span ", "]
           [:span [:a {:href "https://github.com/hashobject/perun"} "Perun"]]
           [:span ", "]
           [:span [:a {:href "https://github.com/boot-clj/boot"} "Boot"]]
           [:span ", "]
           [:span [:a {:href "https://github.com/noprompt/garden"} "Garden"]]
           [:span " and "]
           [:span [:a {:href "https://github.com/plumatic/dommy"} "Dommy"]]]]))
