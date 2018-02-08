---
title: Buffers in node.js
date: 2018-02-07 22:23:00
tags: [js,node.js]
layout: post
categories: node.js
id: 147
updated: 2018-02-07 22:34:11
version: 1.1
---

Buffers in node.js

<!-- more -->

```js
let buff = Buffer.from('hello buffer!');
 
console.log(buff);
// <Buffer 68 65 6c 6c 6f 20 62 75 66 66 65 72 21>
 
console.log(buff.toString());
// 'hello buffer!'
```