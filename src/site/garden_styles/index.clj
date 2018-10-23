(ns site.garden-styles.index
  (:require [garden.def :refer [defrule defstyles]]
            [garden.units :as u]
            [garden.selectors :as gs]
            [garden.stylesheet :as gsheet]))

(defstyles base
  [:.main
   {:margin "0px 10%"
    :font-family "Fira Sans"}]

  [:.main-header
   {:color "#bb883d"}]

  [:.text-center
   {:text-align "center"}]

  [:#search-by-tag
   {:width         "100%"
    :border-radius "12px"
    :padding       "6px 0px"
    :text-align    "center"}]

  [:section
   {:display     "flex"
    :padding-top "10px"}]


  [:button
   {:outline       "none"
    :background    "#d6b98e"}

   [:&#sort-by-date
    {:padding       "5px 10px"
     :height        "32px"
     :margin-top    "14px"
     :margin-left   "7px"
     :border-radius "4px"}]

   [:&#tags-button
    {:padding       "0px 7px"
     :position      "fixed"
     :height        "60px"
     :border-radius "23px"
     :top           "50%"
     :border-top-right-radius "0px"
     :border-bottom-right-radius "0px"
     :right         "1px"}]
   [:span {:display "block"}]]

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

  [:ul#list-items
   [:li
    {:padding   "7px 0"}

    [:a
     {:color           "#000000db"
      :text-decoration "none"}

     [:span.tags
      {:display    "block"
       :color      "darkgoldenrod"
       :font-size  "12px"
       :font-style "italic"}]]]
   [:& (gs/before)
    {:color       "#FF9800"
     }]]

  [:main.content
   {:font-size   "19px"
    :line-height "27px"}]

  (gsheet/at-media
   {:min-width (u/px 600)}

   [:button
    [:&#sort-by-date
     {:padding       "5px 10px"
      :height        "32px"
      :margin-top    "14px"
      :margin-left   "7px"
      :border-radius "4px"}]

    [:&#tags-button
     {:top           "7%"}]])
)

