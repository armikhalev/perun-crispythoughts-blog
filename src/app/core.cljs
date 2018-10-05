(ns app.core
  (:require [goog.object :as g]
            [dommy.core :refer-macros [sel sel1]
             :as dom]))

(enable-console-print!)


(defn on-click [list-items]
  (do (.log js/console "fok, it works!"  list-items)
      (.log js/console  (sort-by #(dom/attr % :data-key) (sel [list-items :li :a])))))


(defn main []
  (let [button     (sel1 :#sort-by-date)
        list-items (sel1 :#list-items)]
    (dom/listen! button :click #(on-click list-items))))
