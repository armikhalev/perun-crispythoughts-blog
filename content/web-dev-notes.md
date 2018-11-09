---
title:  My notes on WebDevelopment
layout: post
date:   2016.03.29
tags:
  - html
  - tables
  - web development
---

Tables.

When you create a table, you might want to place some word or a sign after or in front of table data like this:

```html

<table>

  <td>some data</td>some sign like $#@

</table>

```

You can achieve this easily if you just use another `<td></td>`, in this simple way:

```html

<table>

  <td>some data</td>

  <td>some sign like $#@</td>

</table>
```

However, if you have used headers as well, then your headers will be off the right column, then just use “non-breaking space”, like this:

```html
<th>header of some data</th>

<th>&nbsp</th>

<th>new header</th>
```

to be continued …
