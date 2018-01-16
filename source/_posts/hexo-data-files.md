---
title: Hexo data files for use in themes
date: 2018-01-16 14:49:00
tags: [hexo,js,node.js]
layout: post
categories: hexo
id: 132
updated: 2018-01-16 15:01:50
version: 1.1
---

In hexo there is a standard way of having data files that can contain data that is to be used when rendering a static website with hexo. This is useful if you are making a script or plugin that will generated data that will then be displayed on one or more pages when making a theme.

<!-- more -->

## Getting started

This post is about the node.js powered static website generator called hexo. I will not be covering a getting started post on hexo here, and I assume you have at least some knowledge of how hexo works. I also assume that you have at least some knowledge on html, css, and javascript. In order to get started with data files in hexo you will also need a hexo project that you have started that contains a source folder, and a theme thhat is made with some kind of template language, I often use ejs. In addition to all of this the date files themselves will be written in json, or yaml which are also subjects of interest to research more if you do not know much about them.