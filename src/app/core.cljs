(ns app.core
  (:require [goog.object :as g]
            [dommy.core :refer-macros [sel sel1]
             :as dom]))

(enable-console-print!)

(defn js-log [i] (.log js/console i))

(defn on-click
  [list-items
   order-arrow
   arrow-state]

  (let [link-anchors (sel [list-items :li])]

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
          (dom/set-html! order-arrow " &uarr;")
          (dom/set-html! order-arrow " &darr;")))))


(defn on-keyup
  [search-by-tag
   list-items
   atom-list-items]

  ;; TODO sanitize input
  (let [link-anchors @atom-list-items
        value (.toLowerCase (dom/value search-by-tag))]
    (do (dom/clear! list-items)
        (->> link-anchors
             (filter
              #(re-find
                (re-pattern value)
                (.toLowerCase (dom/attr % :data-tags))))
             clj->js
             (map #(dom/append! list-items %))
             clj->js))))


(defonce atom-list-items (atom (sel [:#list-items :li])))

(defn main []
  (let [button          (sel1 :#sort-by-date)
        list-items      (sel1 :#list-items)
        order-arrow     (sel1 :#order-arrow)
        arrow-state     (atom (dom/attr order-arrow :data-state))
        search-by-tag   (sel1 :#search-by-tag)]

    (dom/listen! button
                 :click
                 #(on-click,
                   list-items
                   order-arrow
                   arrow-state))

    (dom/listen! search-by-tag
                 :keyup
                 #(on-keyup,
                   search-by-tag
                   list-items
                   atom-list-items))))
