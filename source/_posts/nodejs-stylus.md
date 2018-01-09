---
title: Generate css with stylus using the npm package stylus.js
date: 2018-01-09 13:51:00
tags: [js,node.js]
layout: post
categories: node.js
id: 129
updated: 2018-01-09 14:12:17
version: 1.0
---

Still hand coding css? So am I, so I thought I would try one of the many options out there when it comes to some kind of superset of css. In [hexo](https://hexo.io/) one of the dependences that is used is the npm package [stylus](https://www.npmjs.com/package/stylus), which is both a language, and a software package used to parse stylus into plain old css. 

<!-- more -->

The documentation [on the readme for stylus](https://github.com/stylus/stylus/blob/dev/Readme.md) instructs me to install the package globally which is fine if I aim to use it as a stand alone CLI tool. However in this post I will be covering how to go about using it in a project grabbing at it with require, rather than making calls with [child-process](https://nodejs.org/api/child_process.html).


## Stylus file extension

The stylus file extension is often in the form of \*.styl, so just remember the word style less the e and you should be good.