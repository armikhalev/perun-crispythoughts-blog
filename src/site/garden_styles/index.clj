(ns site.garden-styles.index
  (:require [garden.def :refer [defrule defstyles]]
            [garden.stylesheet :refer [rule]]))

(defstyles base
  [:.search-fns
   {:display "flex"
    :width "50%"
    :justify-content "space-between"}]

  [:#sort-by-date
   {:width "200px"}]

  [:#search-by-tag
   {:width "200px"}] )
