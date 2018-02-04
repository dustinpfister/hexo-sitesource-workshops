---
title: The node.js query string module.
date: 2018-02-03 21:43:00
tags: [js,node.js]
layout: post
categories: node.js
id: 143
updated: 2018-02-03 21:50:38
version: 1.0
---

When making a [node.js](https://nodejs.org/en/) project there might come a need to do something involving working with a [query string](https://en.wikipedia.org/wiki/Query_string), that is the parameters that are defined in a url using question marks, equal sign, and ampersands. It is a standard way of communicating some parameters to a server by way of a url, rather than some other means such as a post request payload.

<!-- more -->

I could work out some javaScript to help with parsing a query string to an object, and vice versa, but why bother with that when there is a built in module in node.js to do this called the [querystring module](https://nodejs.org/api/querystring.html).

