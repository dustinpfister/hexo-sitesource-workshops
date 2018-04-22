---
title: Adding a cube texture to a mesh in three.js
date: 2018-04-22 18:35:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 179
updated: 2018-04-22 19:02:22
version: 1.0
---

In [three.js](https://threejs.org/) you might want to have a way to set up a background that will actually be a bunch of images that would line each side of the inside of a box, resulting in a background that is different for any given general direction in 3d space. You might also want to have that kind of texture placed over the surface of some kind of mesh as well. In three.js there is a constructor that will produce this kind of texture that can be used with an array of materials, called [CubeTexture](https://threejs.org/docs/index.html#api/textures/CubeTexture).

A CubeTexture can be used with any property, of any material that makes use of a cube texture. In addition it is also one of three options when it comes to setting the background of a scene, allowing you to make a background that is way cooler than just a solid color background. In this post I will be writing about setting up a cube texture, loading it with the [CubeTextureLoader](https://threejs.org/docs/index.html#api/loaders/CubeTextureLoader), and using that cube texture as a background as well as a texture for a sphere.

<!-- more -->
