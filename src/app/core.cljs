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
          (dom/set-html! order-arrow " &darr;")
          (dom/set-html! order-arrow " &uarr;")))))


(defn on-keyup
  [search-by-tag
   list-items]

  (let [link-anchors (sel [list-items :li])
        value (dom/value search-by-tag)]
    (js-log 
     (filter
      #(re-find
        (re-pattern value)
         (dom/attr % :data-tags))
      link-anchors))))

;; (let [key-search-by (if (= lang "English") :word :la)]
;;   (filter
;;    #(re-find
;;      (re-pattern (sanitize-input word))
;;      (key-search-by %))
;;    dict)))


(defn main []
  (let [button        (sel1 :#sort-by-date)
        list-items    (sel1 :#list-items)
        order-arrow   (sel1 :#order-arrow)
        arrow-state   (atom (dom/attr order-arrow :data-state))
        search-by-tag (sel1 :#search-by-tag)]

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
                   list-items))))
