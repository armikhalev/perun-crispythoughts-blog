(ns site.garden-styles.index
  (:require [garden.def :refer [defrule defstyles]]
            [garden.units :as u]
            [garden.selectors :as gs]
            [garden.stylesheet :as gsheet]))

;; Vars

(def font-size (u/px 19))


;; Styles

(defstyles base
  [:header
   {:font-size  (u/px 34)
    :margin-top "1em"}

   [:a
    {:text-decoration "none"
     :color      "black"}

    [:.bold
     {:font-weight "bold"}]]]

  [:.tag-link
   [:a
    {:color "#000000db"}]]

  [:.main
   {:margin "0px 10%"
    :font-family "Fira Sans"}

   [:a
    {:text-decoration "none"}

    [:a.back-home
     {:color  "darkgoldenrod"}]]]

  [:main.content
   {:font-size   font-size
    :line-height "27px"}]

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
    :background    "#d6b98e"
    :cursor        "pointer"}

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

  [:.tag
   {:width        "23px"
    :padding      "5px"
    :border       "2px solid orange"
    :border-right "0px"
    :border-top   "0px"}

   [:a
    {:text-decoration "none"
     :color           "dimgray"}]]

  [:ul#list-items
   [:li
    {:padding   "7px 0"}

    [:a
     {:color           "#000000db"
      :font-size       font-size
      :text-decoration "none"}

     [:span.tags
      {:display    "block"
       :color      "darkgoldenrod"
       :font-size  "12px"
       :font-style "italic"}]]]
   [:& (gs/before)
    {:color       "#FF9800"
     }]]

  [:footer
   {:font-size     "small"
    :text-align    "center"
    :margin-top    "4em"
    :margin-bottom "2em"}]

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
     {:top           (u/px 66)}]])

  (gsheet/at-media
   {:min-width (u/px 900)}

   [:section
    {:justify-content "center"}])
)

