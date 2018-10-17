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
   {:display     "flex"
    :padding-top "10px"}]

  [:#sort-by-date
   {:padding       "5px 10px"
    :height        "32px"
    :margin-top    "14px"
    :margin-left   "7px"
    :border-radius "4px"}]

  [:button#tags-button
   {:padding       "0px 7px"
    :position      "fixed"
    :height        "80px"
    :border-radius "23px"
    :bottom        "1px"
    :outline       "none"
    :right         "1px"}]

  [:aside#tags
   {:position       "absolute"
    :top            "0px"
    :background     "#ffb59bf2"
    :width          "100%"
    :left           "0px"
    :padding        "23px"
    :height         "100%"
    :display        "flex"
    :flex-direction "column"
    :flex-wrap      "wrap"
    :aling-items    "center"
    }]

  [:p.tag
   {:width        "23px"
    :padding      "5px"
    :border       "2px solid orange"
    :border-right "0px"
    :border-top   "0px"}]

  [:li
   {:padding "7px 0"}]
)

