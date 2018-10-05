---
title:  SASS – best practices
date:   2017.08.05
layout: post
---

SASS is a wonderful tool for managing your CSS files as it gives us variables, mixins and all other goodies.
Here is my way of utilizing SASS features in the most effective way.
I don’t claim it is the only way but it is a good start for anyone who wants to manage styles wisely.

Here we go:

1) Having just one css file after compiling means only one call to the server, which gives us the best performance and lightness of our app.
So there should be just one non-partial .sass/.scss file, where I put all the imports from partial files.
Notice that in index.scss file there shouldn’t be anything except @imports;

For example, here is the file tree structure of a simple app:

~ index.scss
~ _app.scss
~ _page1.scss
~ _page2.scss

/ components

~ _header.scss
~ _sider.scss
~ _nav-bar.scss
~ _components-base.scss

/ grid

~ _desktop-grid.scss
~ _mobile-grid.scss
~ _grid-base.scss


As you see all files except index.scss are partials (i.e. with underscore _ as the first char of the name).
All folders have a “base” file where all the files of that folder are imported, then that _base.scss file is imported into index.scss file.
Thus we can create whole libraries and just put one import into index file to import everything we need. That means modularity and maintanability.
Also, this approach effectively eliminates the bloat from the libraries we create in this way due to rules of SASS partials compilation, which doesn’t compile partial files into separate css files.
So in the final compiled index.css file you will see only the classes you use! How awesome is that!!

2) In my html files (or whatever compiles to it in your framework) I have only one class for each element.

Example:

<div class="navbar">

<div class="navbar-button-group">
<div class="navbar-button"> </div>
</div>

</div>

I hold some naming conventions for the readability. The highest parent element has class name of the page or component,
it is one word for class, all the children are two or three words for a class, they can be as descriptive as needed, since no other class names are used for an element.

3) All the styling managment which is usually done by adding classes to html elements is abolished by the SASS mixins.
I create as many mixins as I need/want and then just “@include” them into the classes, thus the only link between html element and css is the single class name.

Example:

~ _mobile-grid.scss:

@mixin row {

display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-wrap: wrap;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
}

@mixin center-items-vertical {

align-items: center;
margin-top:15px;
margin-bottom: 15px;
}

@mixin justify-content($mode) {

justify-content: $mode;
}

@mixin col-1 {

width: 8.333333%;
}

@mixin col-2 {

width: 16.666667%;
}

~ _page1.scss:

.page1-row {

@include row;
@include center-items-vertical;
@include justify-content(space-between);
}

.page1-label {

@include col-1;
}

Notice that, as I mentioned already, col-2 will not be compiled to index.css file, because it is not used! It is a great way to reduce bloat in our styles.

4) Media queries can be also packed into mixins and imported in whatever files you need.

If you want to see this approach implemented in a real project go to my github page:

https://github.com/armikhalev/melasi_frontend_ember/tree/master/app/styles
or

https://github.com/armikhalev/artist-website-react/tree/master/artist-website/src/styles/sass

This approach is great for functional programming style (think React.js, Vue.js) as it uses composition instead of inheritance.

Happy coding!
