(set-env!
	:source-paths #{"src" "content"}
  ;; :resource-paths  #{"js"}
  :dependencies '[[perun "0.4.2-SNAPSHOT" :scope "test"]
                  [adzerk/boot-cljs "2.1.4" :scope "test"]
                  [pandeiro/boot-http "0.8.3" :exclusions [org.clojure/clojure]]
                  [org.martinklepsch/boot-garden "1.3.2-1"]
                  [prismatic/dommy "1.1.0"]
                  [hiccup "1.0.5" :exclusions [org.clojure/clojure]]])

(require '[io.perun :as p]
         '[pandeiro.boot-http :refer [serve]]
         '[org.martinklepsch.boot-garden :refer [garden]]
         '[adzerk.boot-cljs :refer [cljs]])


(deftask build
  "Build my project."
  []
  (comp (p/global-metadata :filename "base.meta.edn")
     (p/markdown        :out-dir "posts")
     (p/render          :out-dir "app" :renderer 'site.post/render)
     (p/collection      :out-dir "app" :renderer 'site.core/render :page "index.html")
     (p/tags            :out-dir "app" :renderer 'site.tags/render)
     (p/print-meta)
     #_(p/inject-scripts :scripts  #{"index.js"})))


(deftask gen-js
  "Generate JS files using CLJS"
  []
  (comp (cljs
      :source-map true
      :optimizations :advanced)))


(deftask gen-css
  "Generate CSS from Garden and watch for future changes"
  []
  (comp (garden
      :styles-var 'site.garden-styles.index/base
      :output-to "./app/index.css")))


(deftask dev
  []
  (comp (watch)
     (build)
     (gen-css)
     (gen-js)
     (serve :resource-root "app")))


(deftask prod
  []
  (comp (build)
     (gen-css)
     (gen-js)
     (target)))
