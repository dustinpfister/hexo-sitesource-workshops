---
title: Making custom geometry in three.js
date: 2018-04-14 16:03:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 174
updated: 2018-04-14 15:09:20
version: 1.0
---

When working with [three.js](https://threejs.org/) there are many built in geometry constructors that can be used to quickly make many simple, common, solid shapes like cubes, and spheres. However when getting into making an actual three.js project rather than just yet another simple rotating cube demo, there is going to be a need for a way to make custom geometry.

<!-- more -->

There are ways of importing geometry from an external source that was created with a 3d modeling program like blender. However what is you want to make a geometry my way of some javaScript, rather than json data? This is where the Geometry constructor comes into play.
