---
title: spotlights in three.js
date: 2018-04-11 13:24:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 171
updated: 2018-04-11 16:47:13
version: 1.3
---

Lights, camera, action! In this post will will be covering all three of those things in [three.js](https://threejs.org/), but with an emphases on spotlights. Spotlights as the name suggests is a directional light that will concentrate light in a cone like shape at a given target. This kind of light source differs from other options that will just brighten things up in general, or give a cylinder like beam of light in a given direction. In addition to adding directional light to a project, spotlights can be used to generate shadows, if the render used can do so, and is set up to render shadows.

<!-- more -->

# What to know before hand

This is not a getting started post on three.js, or javaScript in general. I assume that you have at least a basic working knowledge on javaScript, and that you have your feet wet with three.js. If not I have other posts that may help.

In this post I will not be covering materials in three.js in detail, but I also assume that you know that in three.js some materials respond to a light source, and others do not.

## The Three.js version matters

This is something that I should mention in every three.js post, yes three.js is a javaScript project where the version number is very important. New versions of three.js come out all the time, and when they do it's not exactly just some spelling fixes in the readme file. Often there are many major, project breaking changes that are made.

In this post I am using three.js 0.91.0 (or just simply r91) released in March of 2018.

## Basic example of spotlight use

When starting out with a basic example of spotlight use, at a very minimum I would want to create an instance of a spotlight by calling the THREE.SpotLight constructor with the new keyword, and saving that instance to a variable. One I have my instance I would want to change its position using the Object3D position.set method to a point far away from the origin.

```js
// SPOTLIGHT
var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(350, 340, 170);
scene.add(spotLight);
```

Assuming that I have a mesh of some kind at the origin of my scene that is equipped with a material that responds to light such as the Lambert material, I should have a basic working example of reflectance going on. I will also need the usual scene, renderer, and camera all set up to make this an actual function demo.

like this:
```js
(function () {
 
    // Scene
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f0f0f);
 
    // CAMERA
    var camera = new THREE.PerspectiveCamera(50, 320 / 240, 1, 3000);
    camera.position.set(500, 500, 500);
    camera.lookAt(0,0,0);
 
    // A MESH with Lambert Material
    // which responds to a light source.
    var cube = new THREE.Mesh(
            new THREE.BoxGeometry(200, 200, 200),
            new THREE.MeshLambertMaterial({
                color: 0xff0000
            }));
    cube.position.set(0, 100, 0);
    scene.add(cube);
 
    // SPOTLIGHT
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(350, 340, 170);
    scene.add(spotLight);
 
    // RENDER
    var renderer = new THREE.WebGLRenderer();
    document.getElementById('demo').appendChild(renderer.domElement);
    renderer.setSize(320, 240);
 
    // render what we have
    renderer.render(scene, camera);
 
}
    ());
```

By default a spotlight will point at the origin (0,0,0), because the mesh I am using in this demo is located at the origin, and I am not moving anything around, this works just okay with the default settings when it comes to things like the angle of the cone, and the light intensity. However if I want to change the target point that the spotlight is pointing at, and tweak some additional values, there is a great deal more to know about spotlights. Also there is more to know about materials as well, after all a material is what will respond to a light source. There is also a helper class that can be used to get a sense of what is going on with the spotlight by showing some lines that indicate it's present status with respect to it's position, angle, and what it is pointing at. In addition there is what to do in order to get shadows working if interested, so lets get to it.

## Changing the target of the spotlight

The target property of the spotlight is what is of interest if you want to change what it is that the spotlight is pointing at. This can be something like an instance of Object3D, or a mesh in the scene. If you just want to change the target position of the spotlight, you will still want to add it's target to the scene when you create the spotlight. If you do not at least do that then any change to the spotlights target position will not take effect.

```js
    // spotlight
    var spotLight = new THREE.SpotLight(0xffffff);
    scene.add(spotLight);
    scene.add(spotLight.target);
 
    // now I can change both postion, and target
    spotLight.position.set(-200, 200, 200);
    spotLight.target.set(100,0,200);
```