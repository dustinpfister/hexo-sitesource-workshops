---
title: Adding a cube texture to a mesh in three.js
date: 2018-04-22 18:35:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 179
updated: 2018-04-23 15:56:08
version: 1.4
---

In [three.js](https://threejs.org/) you might want to have a way to set up a background that will actually be a bunch of images that would line each side of the inside of a box, resulting in a background that is different for any given general direction in 3d space. You might also want to have that kind of texture placed over the surface of some kind of mesh as well. In three.js there is a constructor that will produce this kind of texture that can be used with an array of materials, called [CubeTexture](https://threejs.org/docs/index.html#api/textures/CubeTexture).

A CubeTexture can be used with any property, of any material that makes use of a cube texture. In addition it is also one of three options when it comes to setting the background of a scene, allowing you to make a background that is way cooler than just a solid color background. In this post I will be writing about setting up a cube texture, loading it with the [CubeTextureLoader](https://threejs.org/docs/index.html#api/loaders/CubeTextureLoader), and using that cube texture as a background as well as a texture for a sphere.

<!-- more -->

## What to know before hand

This is not a post for people that are new to three.js. If you are new to three.js you might try starting with my [getting started post](/2018/04/04/threejs-getting-started/) on the subject. This is also not a post on the basics of javaScript, and all other related background that might be require to get to this point. There is a great deal to learn about three.js, I am going to be suing things like materials, and meshes in this post you might try bouncing around [my other posts on three.js](/categories/three-js/), and as always there is the [official site]((https://threejs.org/) ) on three.js as well to check out other topics in further detail.

## Having some images

Before getting started making a cue texture one of the first things to work out is the images. I will need not just one, but six images, one for each side of a cube, thus the name cube texture. These should not just be any images also, they should be generated in a way in which they will work well for the intended purpose.

Getting into how to go about making these images could prove to be a whole other post by itself. So for this post I will just be using one of the examples provided in the official three.js repository. The collection of examples can be found in the [examples/textures/cube](https://github.com/mrdoob/three.js/tree/r91/examples/textures/cube) folder of the repository.