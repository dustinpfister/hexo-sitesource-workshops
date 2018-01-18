---
title: Threading in node.js with the cluster module
date: 2018-01-18 10:18:00
tags: [js,node.js]
layout: post
categories: node.js
id: 133
updated: 2018-01-18 18:16:38
version: 1.1
---

JavaScript has a reputation of being a single threaded language, for the most part it is if I only take into consideration core javaScript by itself. However when taking into account the full breath of what there is to work with in client side javaScript, as well as a node.js environment, it would appear that javaScripts reputation of being single threaded language is wrong, or at best a half truth.

In client side javaScript there is of course [webworker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) which to some extent can be used to achieve threading in client side javaScript. Yes there are some limitations as doing anything with the DOM can only be done in the main thread, not the webworker context. However this post is about [the cluster module](https://nodejs.org/api/cluster.html) in a node.js environment.

<!-- more -->

## What is threading?

A computer might have a single processor, and this single processor might only have a single core. On a system like this threading can be achieved by way of time slicing, that is switching between threads very fast giving the illusion that they are being executed in parallel.

On modern computers a computer might have more than one processor, and each processor might have more than one core. On a system like this time slicing could be done, however true parallel exaction of threads can be achieved as well.

## Why do so many people say javaScript is single threaded, are they wrong?

Maybe, maybe not, for me it looks like a bit of a half truth, and of course it depends on the environment. In any javaScript environment if I stick to core javaScript by itself, using


In client side javaScrpt something that is written in core javaScript can be offloaded into a web worker, but anything that has to do with the DOM is still very much single threaded. In the days before webworker, and node.js, javaScript was very much a single threaded language, now though not so much.


## How can true threading be done with javaScript in node.js?

then there are two built in modules that are of interest which are

* The child-process module
* The cluster module.


