---
title: Using fetch to script http
date: 2018-03-27 17:08:00
tags: [js]
layout: post
categories: js
id: 165
updated: 2018-03-27 18:21:10
version: 1.1
---

[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is a new way of making http requests in browser, like the tired yet true [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), but makes use of promises, and provides an updated [response api](https://developer.mozilla.org/en-US/docs/Web/API/Response) for better handling common tasks like parsing json to a workable object.

It is like a browser built in [axios](/2018/01/10/nodejs-axios/), but because it is a new feature it might be to soon to regard it as a replacement for axios or XMLHttpRequest, unless a [pollyfill](https://github.com/github/fetch) is used.

<!-- more -->

## Simple get request example of fetch

## Using a fetch pollyFill

If you are concerned about support for older browsers, then a pollyfill for fetch will have to be used, or just do things the old fasion way with XMLHttpRequst as any pollyfill will likely use just that. A popular pollyfill for fetch can be found on github here at [https://github.com/github/fetch](https://github.com/github/fetch).