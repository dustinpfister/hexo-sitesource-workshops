---
title: Example of the _.findIndex array method in lodash
date: 2018-02-09 18:23:00
tags: [js,lodash,node.js]
layout: post
categories: lodash
id: 149
updated: 2018-02-09 19:20:01
version: 1.0
---

The [\_.findIndex](https://lodash.com/docs/4.17.5#findIndex) array method in [lodash](https://lodash.com/) can be used to find the index of an element in an Array. In modern browsers there is now Array.findIndex that works in very much the same manor as \_.findIndex, making this yet another one of those lodash methods that you might only bother with for the sake of backward compatibility with older browsers.

<!-- more -->

## Basic example of \_.findIndex

So even when it comes to older browsers, Array.indexOf works fine when dealing with an array of primitives. As such typical use case scenarios of \_.findIndex involve arrays of Objects.

```js
var users = [
    { name: 'John', points: 1200},
    { name: 'Jerry', points: 300}, 
    { name: 'bill', points: 935}
 
];
 
// find bill using the _.matches shorthand
console.log(_.findIndex(users, {name: 'bill'})); // 2
```
