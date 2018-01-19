---
title: Threading in node.js with the cluster module
date: 2018-01-18 10:18:00
tags: [js,node.js]
layout: post
categories: node.js
id: 133
updated: 2018-01-19 11:08:27
version: 1.2
---

JavaScript has a reputation of being a single threaded language, for the most part it is if I only take into consideration core javaScript by itself. However when taking into account the full breath of what there is to work with in client side javaScript, as well as a node.js environment, it would appear that javaScripts reputation of being single threaded language is wrong, or at best a half truth.

In client side javaScript there is of course [webworker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) which to some extent can be used to achieve threading in client side javaScript. Yes there are some limitations as doing anything with the DOM can only be done in the main thread, not the webworker context. However this post is about [the cluster module](https://nodejs.org/api/cluster.html) in a node.js environment.

<!-- more -->

## What is threading?

So a computer might have a single processor, and this single processor might only have a single core. On a system like this threading can be achieved by way of time slicing, that is switching between instructions very fast giving the illusion that they are being executed in parallel.

On modern computers a computer might have more than one processor, and each processor might have more than one core. On a system like this time slicing could be done, however true parallel exaction of instructions can be achieved as well.

As I understand it, threads are part of what makes up a process that runs on an operating system. There can be one or more threads per process, and then more than one process running on the operating system of a computer. All the threads might be running on the same core by way of time slicing, or on separate cores in parallel.

## Why do so many people say javaScript is single threaded, are they wrong?

Maybe, maybe not, for me it looks like a bit of a half truth, and of course it depends on the environment. In any javaScript environment if I stick to core javaScript by itself, using just setInterval, and setTimeout only by themselves, then I what I am making is very much single threaded. However modern client side javaScript there is webworker, and in node.js there is the cluster module that can be used to pull of something that can be considered more in line with true threading.

In client side javaScrpt something that is written in core javaScript can be offloaded into a web worker, but anything that has to do with the DOM is still very much single threaded. 


When it comes to server side javaScript there are ways of taking advantage of a computers many cores. This post will be covering use of the cluster module which can be used to fork a script for each core on the system. In addition there is the child-process module as well that can be used to launch anything that exists on the operating system, such as another script with node.js, or any other CLI tool written in any language for that matter, including tools that tack advantage of multi core systems.

## How can true threading be done with javaScript in node.js?

There are two built in modules that are of interest which are:

* [The child-process module]()
* [The cluster module.]()

The child-process module is what can be used to run a command on the operating system, it can be some other software tool written in another language, or another script launched with node.js, in ether case it will run as it's own independent process separate from the main script that launched it.

This post however is on the cluster module that can be used to fork a single script into more than one process.
