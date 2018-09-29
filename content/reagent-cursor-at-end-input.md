---
title:  Reagent how to place cursor at end of text in text input element
layout: post
date:   08-04-2018
tags:
  - Clojure
  - Reframe
  - Reagent
---
### Here is a problem:
I have input field which has text in it on page load, for example, if I get there by url like this: `www.my-site/words?search=awesome` then I have _awesome _ in the input field.
However, cursor will go to the beginning of the word, not to the end as I would prefer, because usually you delete that word to put a new word for the next search.

In a [Reagent](https://reagent-project.github.io/) app written in [Clojurescript](https://clojurescript.org/) I can use excellent interop with Javascript to achieve that.
I found one part of the answer on [StackOverflow](https://stackoverflow.com/questions/19568041/set-focus-and-cursor-to-end-of-text-input-field-string-w-jquery/19568146#19568146): Basically by using [setSelectionRange()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange) method of `HTMLInputElement` we move cursor to the end of text by using length of the string as the first argument to the method.

Another part was to figure out how to get HTMLInputElement on page load.
A [Reagent](https://reagent-project.github.io/) component is a Clojurescript wrapper around React component, that means we can use React’s lifecycle methods.
In this particular case we need `componentDidMount()` method to move cursor after `HTMLInputElement` appeared on page.
Reagent has [three forms of components](https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md), the third form has access to React’s lifecycle methods. So we have to create a Reagent class by using `reagent/create-class` where we use `:component-did-mount` key where we write the main logic of the solution.
Here is the code below taken from Reagent docs but with applied solution to the input cursor problem:
```clojure

(defn search-field ;; Start input component as usual
  [placeholder
   >dis-search-input-entered
   search-input] ;; These args are not relevant to the problem

  (let [] ;; Here we create Reagent class
    (reagent/create-class
     {:display-name "search-field" ;; Needs a display-name for debugging

      ;; NOTE: Using 3d reagent form to make cursor go to the end of the input value
      :component-did-mount
      (fn [self] 
        (let [inputLen (-> self
                          reagent-dom/dom-node ;; get HTMLInputElement
                          .-value
                          count)]
          ;; setSelectionRange is js method
          (-> self
              reagent-dom/dom-node ;; get HTMLInputElement

              ;; second argument can be any number higher than input length
              (.setSelectionRange inputLen (* inputLen 2))))) 

      :reagent-render
      (fn
        [placeholder
         >dis-search-input-entered
         search-input]
        [:input
         {:placeholder placeholder
          :auto-focus true ;; Gets normal autofocus but puts cursor to beginning of word
          :value search-input
          :on-change #(>dis-search-input-entered (-> % .-target .-value))}])})))

```
