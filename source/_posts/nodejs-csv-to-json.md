---
title: converting csv spreadsheets to json using node.js with the csvtojson npm package
date: 2018-02-12 22:00:00
tags: [js,node.js]
layout: post
categories: node.js
id: 152
updated: 2018-02-12 22:20:22
version: 1.0
---

I thought about maybe making some projects where I work with some data from my google analytics statistics. Grabbing the data is simple enough, but there is no option to download the data in \*.json format, but there is an option for \*.csv. So all I need is some kind of tool to help me convert data in a \*.csv to \*.json. I prefer to do just about everything with [node.js](https://nodejs.org/en), and as such I was able to come across something called [csvtojson](https://www.npmjs.com/package/csvtojson)

<!-- more -->

## Use as a CLI tool

Assuming you have node.js, and npm installed, the package can be installed globally

```
$ npm install -g csvtojson
```

Once installed, I can use it as a CLI tool to convert *.csv to *.json

```
$ csvtojson 2017.csv > 2017.json
```

Simple as that if I just want to use it as a CLI tool.