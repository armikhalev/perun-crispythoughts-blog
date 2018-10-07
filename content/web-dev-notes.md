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

– when you create a table, you might want to place some word or a sign after or in front of table data like this:

<table>

<td>some data</td>some sign like $#@

</table>

you can achieve this easily if you just use another <td></td>, in this simple way:

<table>

<td>some data</td>

<td>some sign like $#@</td>

</table>

However, if you have used headers as well, then your headers will be off the right column, then just use “non-breaking space”, like this:

<th>header of some data</th>

<th>&nbsp</th>

<th>new header</th>

to be continued …
