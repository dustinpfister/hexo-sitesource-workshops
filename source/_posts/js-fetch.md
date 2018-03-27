---
title: Using fetch to script http
date: 2018-03-27 17:08:00
tags: [js]
layout: post
categories: js
id: 165
updated: 2018-03-27 17:59:03
version: 1.0
---

[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is a new way of making http requests in browser, like the tired yet true [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), but makes use of promises, and provides an updated [response api](https://developer.mozilla.org/en-US/docs/Web/API/Response) for better handling common tasks like parsing json to a workable object.

It is like a browser built in [axios](/2018/01/10/nodejs-axios/), but because it is a new feature it might be to soon to regard it as a replacement for axios or XMLHttpRequest.

<!-- more -->

## Simple get request example of fetch