(ns site.about
  (:require [hiccup.page :as hp]))


(defn render [{global-meta :meta posts :entries}]
  (hp/html5 {:lang "en" :itemtype "http://schema.org/Blog"}
         [:head
          (hp/include-css "index.css")
          [:title (:site-title global-meta)]
          [:meta {:charset "utf-8"}]
          [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge,chrome=1"}]
          [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0, user-scalable=no"}]
          [:link {:href "https://fonts.googleapis.com/css?family=Fira+Sans" :rel "stylesheet"}]]

         [:body.main
          [:h1.main-header "Welcome to Crispy Thoughts!"]

          [:main.content "Here I will write about my discoveries in everything what I encounter and what I find to be interesting and useful. This blog must be regarded as a diary or a notebook of everything what I have learned, studied, experienced. Hopefully, my posts would be useful to others as well.

           The main topics of this blog: programming, web development, JavaScript, Clojure(Script), Python, languages, artlangs, books, movies.

           There won’t be many words, only the useful and important information."]
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
