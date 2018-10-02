(ns app.core)

(defn main []
  (.log js/console "Wow, it works!")
  (let [c (.. js/document (createElement "DIV"))]
    (aset c "innerHTML" "<p>i'm dynamically created</p>")
    (.. js/document (getElementById "container") (appendChild c))))
