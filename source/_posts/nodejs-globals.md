---
title: Globals in a node.js environment
date: 2018-02-10 14:31:00
tags: [js,node.js]
layout: post
categories: node.js
id: 150
updated: 2018-02-10 20:04:25
version: 1.1
---

When working in a node.js environment there are many global variables to work with. Of course because it is server side javaScript there is what there is to work with in core js, or javaScript itself, however this post is on the additional global variables on top of core js that make core js server side js in a node.js environment.

<!-- more -->

## Coming from a client side javaScript background.

If you are familiar with client side javaScript, then you should be familiar with core js features that should be common between node.js and the browser, such as the javaScript syntax itself, things like Array, Function, Object, and so forth. In my experience when I was first starting out with node.js, I was able to quickly get up to speed as the core is more or less the same, compared to a browser that is complaint with the same javaScript spec (es5, es2015, ect).

There are naturally differences as well when it comes to things outside of core.js, and also some javaScript features may not work the same as you might expect, such as when you use the this keyword at the top level in node.js compared to a browser environment.


## Buffer

read my [full post on Buffer](/2018/02/07/nodejs-buffer/).

The Buffer class is what is used for working directly with binary data. Back when node.js was first starting out it was working with the es5 javaScript spec there was node of the [typed array constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) to work with, so Buffer was created to help work with binary data in a server environment, where a higher degree of control over the system is often typical, and legal.


## __dirname

This will give you the current dir of the module that you are working with, very useful when working with [paths](/2017/12/27/nodejs-paths/).


## __ filename

Another useful [paths](/2017/12/27/nodejs-paths/) related variable that is the full path to the current module, including it's filename.

## console

This provides simple console logging methods that you might be familiar with when working in a web browser. When using the console.log method the text is loged to the standard output rather than the javaScript console you may be familial with in a web browser.

```js
console.log('hello world');
// prints 'hello world' to the console
```

## exports

This is a way of exporting methods in a module to be used in another module by way of using require.

for example if I have a module.js file like this:
```js
exports.func = function(){
 
    return 'foo';
 
};
```

I can use that method in an index.js file in the same folder

```js
let func = require('./module.js').func;
console.log(func());
```

So when I call index.js with node the method will work in index.js

```
$ node index
foo
```

This is of course a way o go about breaking your code down into smaller, more manageable sections of code. It is essential to the process of defining a reusable package that can be used across projects, rather than writing the same code over, and over again from the ground up.

exports is what I generally used if I want to make a whole bunch of methods that are exported, If I just have one method to export there is also module.exports that is also of interest.

## global

## module

## process

## require