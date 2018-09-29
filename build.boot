(set-env!
	:source-paths #{"src" "content"}
  :asset-paths  #{ "js"}
  :dependencies '[[perun "0.4.2-SNAPSHOT" :scope "test"]
                  [adzerk/boot-cljs "2.1.4" :scope "test"]
                  [pandeiro/boot-http "0.8.3" :exclusions [org.clojure/clojure]]
                  [org.martinklepsch/boot-garden "1.3.2-1"]
                  [hiccup "1.0.5" :exclusions [org.clojure/clojure]]])

(require '[io.perun :as p]
         '[pandeiro.boot-http :refer [serve]]
         '[org.martinklepsch.boot-garden :refer [garden]]
         '[adzerk.boot-cljs :refer [cljs]])

(deftask build
  "Build my project."
  []
  (comp (p/global-metadata :filename "base.meta.edn")
     (p/markdown)
     (p/render         :renderer 'site.post/render)
     (p/collection     :renderer 'site.core/render)
     (p/inject-scripts :scripts  #{"index.js"})))

(deftask gen-css
  "Generate CSS from Garden and watch for future changes"
  []
  (comp (garden
      :styles-var 'site.garden-styles.index/base
      :output-to "./public/index.css")))

(deftask dev
  []
  (comp (watch)
     (build)
     (gen-css)
     (serve :resource-root "public")))

(deftask prod
  []
  (comp (gen-css)
     (build)
     (target)))
