---
title:  CS50 Edx course notes
layout: post
date:   2016.01.21
tags:
  - C programming
  - CS50
---
Before I begin, for those who have never heard of CS50, you can learn more on [the official website](https://cs50.harvard.edu).

So, recently I’ve finished the CS50 Harvard online course on [ https://www.edx.org/. ](https://www.edx.org/)

I will not talk about how good or bad the course is, in short, in my opinion it is excellent, so I rather focus on the things I have learned in this course (specifically problem sets), though I will not give away any answers following the CS50’s “philosophy on academic honesty”.

<br/>

**Problem set ZERO.** An amazing tool to learn programming for the very beginners is located at [ https://scratch.mit.edu/ ]( https://scratch.mit.edu/ ). The Scratch might be especially useful for introducing kids to programming, because it is essentially a game, a puzzle leading towards programming thinking.

<br/>

**Problem set ONE.** Looking back at the code of mario.c that builds a “pyramid” of hashes, I realized, well, I really moved up since then. I think it is useful to note, because sometimes people get discouraged by not being able to solve the current problem, it has happened to me many times, at many points I thought I would never become a programmer, because I did this and that stupid mistake, however, when I look back, I see that there is real progress, so keep up learning! I don’t see anything particularly interesting in this pset, though it might be due to the developed skills and interests.

<br/>

**Problem set TWO.** For those like me struggling to understand what all those *args and **kwargs mean, please read the following [ stackoverflow answer ](https://stackoverflow.com/questions/3394835/args-and-kwargs).

Don’t forget that every letter has a numerical value in ASCII table, it can come handy if you use the basic math. For example, if you want your program to make some changes to the letter ‘b’, which is number 98 in ASCII table and ‘a’ is 97, if you do with modulo something like ( ‘b’ – ‘a’ ** % 26 + 1 you’ll get the order number of ‘b’ in the alphabet.
One nice trick to speed up your program:

```c
for( int i = 0; int len = strlen(key); i < len; i++ )
```
This way loop doesn’t check for length every time it loops, which could become significant if length of the key is very big.

<br/>

**Problem set THREE.** Pointers in C can be very helpful but most of the time, if you don’t know how to use them, it is a nightmare when you try even the basics. However, there is no need of pointers in this pset, though at some point I was trying to implement them. So, basically you should be careful taking in the account that pointers should be used when you have to change the actual value of some variable which becomes the result or output of your program. However, if your program uses variables as blocks for other functions and their values will not be essential or used as output in any way, then no pointers are needed. If I’m wrong, please comment below, but that is how I perceived it.

<br/>

**Problem set FOUR.** It wouldn’t be any news for C programmers, however, for me this pset was the most exciting, because finally we were using C for something really low level, we were manipulating bytes. Ah, pointers eventually came up. Basically what you do, you should make sure you count bytes correctly, you have to find documentation to see how many bytes are in that specific thing like pixel, header, padding etc., then you should read document line by line changing the bytes you need. Sorry, I can not be more specific without the real code but it could be a separate post. **Also**, every type of file has its own signature which means they start with some specific sequences of bytes, for example, JPEG starts with `“0xff  0xd8  0xff  0xe0“`, knowing that all files are located side by side, we can easily find the beginning and the end of a file.

<br/>

**Problem set FIVE.** Structs in C is another tough topic, especially if you are still not too comfortable with pointers, so it might be better first to master pointers, then go to structs. A struct is a new type in the same way as integers or characters are types in C but optionally more complex. It means you can define your own type mixing in together other different types. Specifically for this pset we have used structs for creating nodes.

```c
typedef struct node
{
    char word[LENGTH + 1]; 
    struct node* next;
}
node; 
```

Now, you can create a new node, assign some string to its `word`, then create many other nodes, putting them into a hashtable. When you need a word in a node, you can get it by `node->word**.

<br/>

**Problem set SIX.** Do not perform several actions on the same variable, because if you want to use this same variable later, it should not be changed, so make **a copy of the variable** and then use it for other operations. Name your variables in a way that the name explicitly reflects the value of the variable.

That is it. Other two problem sets dealing with websites were not something really new for me, because I did this kind of a job before, however, it was good practice.

<br/>

**Thanks to CS50 staff for their great work!**
