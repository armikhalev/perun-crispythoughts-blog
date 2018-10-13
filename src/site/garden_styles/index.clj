(ns site.garden-styles.index
  (:require [garden.def :refer [defrule defstyles]]
            [garden.stylesheet :refer [rule]]))

(defstyles base
  [:#main
   {:margin "0px 10%"}]

  [:.text-center
   {:text-align "center"}]

  [:#search-by-tag
   {:width      "100%"
    :padding    "6px 0px"
    :text-align "center"}]

  [:section
   {:padding-top "10px"}]

  [:#sort-by-date
   {:padding       "5px 10px"
    :border-radius "4px"}]

   )
