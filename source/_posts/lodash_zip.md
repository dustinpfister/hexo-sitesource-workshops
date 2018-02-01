---
title: The lodash _.zip method
date: 2018-02-01 16:37:00
tags: [js,lodash]
layout: post
categories: lodash
id: 141
updated: 2018-02-01 16:39:19
version: 1.0
---

The [lodash](https://lodash.com/) [\_.property method](https://lodash.com/docs/4.17.4#zip)

<!-- more -->

## Basic example of \_.zip

```js
var x = [10,20,30],
y = [8,16,32],
 
matrix = _.zip(x,y,[5,5,5],[3,3,3]);
 
_.each(matrix, function(pt){

    // [10,8] => [20,16] => [30,32]
    console.log(pt[0] + ',' + pt[1]);
 
});
```