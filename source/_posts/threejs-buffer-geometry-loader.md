---
title: spotlights in three.js
date: 2018-04-11 13:24:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 172
updated: 2018-04-12 10:20:30
version: 1.0
---

In this post I will be writing about the [BufferGeometryLoader](https://threejs.org/docs/index.html#api/loaders/BufferGeometryLoader) in[three.js](https://threejs.org/). The Buffer Geometry Loader is one of several loaders in three.js that can be used to load an external JSON asset. In three.js if you want to import a 3d model that has been created in a 3d modeling program like [blender](https://www.blender.org/), it will have to be converted to a standard JSON format used by three.js. luckly there is an ofishal plugin to do just that for blender at least in the three.js repositories [exporters folder](https://github.com/mrdoob/three.js/tree/r91/utils/exporters/blender). The Buffered Geometry loader can be used to load a JSON file that has a type of BufferGeometry.


<!-- more -->

## What to know

This is an advanced post on three.js that has to do with the buffered geometry loader, it is not a [getting started post on three.js](/2018/04/04/threejs-getting-started/), or any additional skills needed before getting into three.js. This post has to do with Buffered Geometry, but I will not be getting into that in depth in this post. I assume that you have a good grasp on what is required before hand, and are here because you want to learn ins and outs of the buffered geometry loader in three.js.
