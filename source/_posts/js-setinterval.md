---
title: using setInterval in javaScript
date: 2018-03-08 11:31:00
tags: [js,corejs]
layout: post
categories: js
id: 162
updated: 2018-03-08 12:25:43
version: 1.0
---

Many javaScript projects will require some kind of main application loop that will execute over an over again. There are many ways to go about doing this, one of which is [setInteval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval). The setInterval method will fire a given method after a given millisecond value has elapsed, after which point it will fire again after the given millisecond value has elapsed again, and so forth. It is therefor a popular, and well known way of implementing an application loop. It can also be thought of as a starting point that can branch off into other topics such as state management, and the nature of threading.

<!-- more -->

## Basic example of setInterval

At a minimum setInterval must be given at least two arguments, the first of which is the function to call, and the second is the minimum amount of time that should pass before the function is called.

```js
setInterval(function(){
 
    console.log('tick');
 
},1000);
```