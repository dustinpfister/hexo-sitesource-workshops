---
title: The node.js process global what to know
date: 2018-02-11 21:00:00
tags: [js,node.js]
layout: post
categories: node.js
id: 151
updated: 2018-02-11 21:11:53
version: 1.0
---

The [process global](https://nodejs.org/dist/latest-v8.x/docs/api/process.html) in [node.js]() is helpful for getting information on, and control over, the current process. When making node.js applications chances are you are going to use at least some of it's properties to grab at environment variables, and arguments given from the command line when a script is called directly. In addition it can also be used to set some event handlers to give control over the process.

<!-- more -->

