(ns app.core
  (:require [goog.object :as g]
            [dommy.core :refer-macros [sel sel1]
             :as dom]))

(enable-console-print!)

(defn js-log [i] (.log js/console i))

(defn on-click [list-items order-arrow]
  (let [link-anchors (sel [list-items :li])
        arrow-state (atom (dom/attr order-arrow :data-state))]

    (do (dom/clear! list-items)
        (->> link-anchors
             (sort-by #(dom/attr % :data-key) (if (= @arrow-state "down") > <))
             clj->js
             (map #(dom/append! list-items %))
             clj->js)
        (if (= @arrow-state "down")
          (reset! arrow-state "up")
          (reset! arrow-state "down"))
        (if (= @arrow-state "down")
          (dom/set-text! order-arrow " &darr;")
          (dom/set-text! order-arrow " &uarr;")))))


(defn main []
  (let [button      (sel1 :#sort-by-date)
        list-items  (sel1 :#list-items)
        order-arrow (sel1 :#order-arrow)]
    (dom/listen! button :click #(on-click list-items order-arrow))))
