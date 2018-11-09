---
title:  Principles of Computing on Coursera. My notes.
layout: post
date:   2015.11.12
tags:
  - Coursera
  - Python
---
Recently I have finished the Principles of Computing (1 and 2) on [ Coursera ](https://www.coursera.org/). It was a great on-line course, but I’m not making a review here, if you want a review you should go ahead and read [ this ](http://gregorulm.com/review-principles-of-computing-coursera/).

Today’s post is about useful tips for programming in Python I have learned during the course. Nevertheless, I’m sure you can apply the same principles to any other programming language.

<br/>

**First**. Math is a great tool in programming. It makes code beautiful, concise and logically structured.
Let’s look at some slick, though not very complicated ways of using math in programming:

<br/>

– If you have a grid of ordered numbers, let’s say you need to find the **row and the column** of a given number, you can use the following method:

```python
row = number / width
column = number % width
```

It works because every number in the grid has its specific place that depends on the width of the grid.

<br/>

– Otherwise, if you need a value of the number and you already have the row and the column where it is located, but not the value, you can use this:

```python
value_of_number = row * width + col
```

Again the value of the number depends on the width of the grid.

<br/>

– if you want to iterate over a grid and apply some actions to every value in the grid, you can use range() in a very effective way:

```python
for row in range(height – 1, 1, -1):
for col in range(width – 1, -1, -1):
your_result = some_function(row, col) if col == whatever_number else other_function(row, col)
```

Note the syntactic sugar of *“if… else….”* statements. This was introduced in Python 2.5 to make it no less sugary than Java and C, or C++, so enjoy! It is not much about math though, but still this method is cool enough to mention.

<br/>

– This is how to make **a grid of numbers** with values **containing the biggest number in the grid for every cell**, it is written in a very pythonic way:

```python
grid = [[height * width for dummy_iter in range(width)] for dummy_iter in range(height)]
```


if you have a 4×4 grid you’ll have the following output:

```python
[[16, 16, 16, 16],
[16, 16, 16, 16],
[16, 16, 16, 16],
[16, 16, 16, 16]]
```

– to move an object from one position to another you need a distance formula, that you can write in Python this way:

```python
math.sqrt((x2[0] – x1[0]) ** 2 + (y2[1] – y1[1]) ** 2
```

Also, if you want to rotate an object, you should use this:

```python
angle_to_vector = [math.cos(angle), math.sin(angle)]
```

I’m not going in detail about this, but I just want to make a point that math is useful, especially if you are doing games or anything visual.

You can find many other slick python tricks [ here ](https://sahandsaba.com/thirty-python-language-features-and-tricks-you-may-not-know.html)

<br/>

**Second** thing I have learned from this course is **recursion**. I’m still very hesitant to use recursion in my programs, because it is hard to handle without deep understanding of what is going on. However, recursion is a great tool that makes a program cleaner. Also, it is important to use **memoization** for recursive functions, it will give a really great boost of speed to your program, otherwise recursion can take forever. The good source to learn more about it is [here](https://programmingzen.com/memoization-in-ruby-and-python/).

<br/>

**Third** and most useful thing I have learned is the importance of writing **thorough tests**. I can not stress it enough how important it is to write tests for every step of your program. You write a function, then you test it, you write another function, you test it with the previous test and a new one. Eventually you end up with number of tests that you can use every time you change your program. If your program still passes all your tests after implementing changes, then you can write another test for the changes you applied. It is a good idea to have your tests in a separate file. Though it should be obvious for any programmer, it might not for a newbie.

<br/>

Overall, I’m looking forward to learning more in the following course [ “Algorithmic Thinking” ](https://www.coursera.org/learn/algorithmic-thinking-1). It will focus on the intrinsic logic of the programs, also we will learn how to go from the basic idea of a problem to a mathematical algorithm and then to a programmatic solution. So far I am enjoying the course and recommend it to everyone who wants to learn about programming in more depth.
