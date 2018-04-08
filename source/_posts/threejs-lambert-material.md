---
title: Three.js Lambert Material Example
date: 2018-04-08 16:31:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 170
updated: 2018-04-08 17:48:40
version: 1.1
---

I have been toying around with [three.js](https://threejs.org/) these days, and may continue doing so until I have a solid collection of posts on it. You can count on at least a few posts on Materials which I have been working with today. If you are just getting started with three.js you might be familiar with at least the Basic Material, and that you use a Material with a Geometry to make a Mesh. However you might now be interested in working with lights, and having a material that will respond to a light source, if so the Lambert Material may be of interest.

In this post I will be writing about the [Lambert basic material](https://threejs.org/docs/index.html#api/materials/MeshLambertMaterial) in three.js, and a basic example of it's use.

<!-- more -->

## What to know

I assume you have at least a basic working knowledge of three.js, and are not interested in learning more about the material options used in three.js, if not I have a [getting started post](/2018/04/04/threejs-getting-started/) on three.js.

## The Lambert Material needs a light source

First off the Lambert material needs a light source. If you use the material without any light source shining on it, and you have a black background, you may end up staring at a black screen. So before we get into the material, lets just take a moment to touch base a lights just for a moment.

```js
// spotlight
var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(200, 400, 300);
scene.add(spotLight);
```

There are many lights to work with in three.js, but in this demo I will be using a [spot light](https://threejs.org/docs/index.html#api/lights/SpotLight). This is a directional light that casts out light in the shape of a cone, it can also be used to case shadows. The spot light inherits some things from the base [Light class](https://threejs.org/docs/index.html#api/lights/Light), and the Light class inherits from [Object3D](https://threejs.org/docs/index.html#api/core/Object3D) which means I can move it around, and work with it just like a camera, or any other object in three.js. However the lookAt method will not work for changing the direction of the spot light, to change that you will need to use the target property of the spot light.