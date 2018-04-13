---
title: Quick orbit controls for three.js
date: 2018-04-13 18:22:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 173
updated: 2018-04-13 18:36:15
version: 1.0
---

It would not be to hard to implement some camera controls for a [three.js](https://threejs.org/) project from scratch. It would involve some event handlers, and the use of a few Object3D methods like lookAt, and position.set. However There is some additional resources in the three.js project repository itself that can be used to quickly set this up in a flash. In this post I will be covering how to quickly set up some orbit controls for the camera, so you do not have to keep changing hard coded values, or spend a great deal of time working on your own solution to just look around a scene.


<!-- more -->

## Where to get the file for orbit controls

In order to quickly add Orbit controls you need to add a \*.js file that is in the three.js reposatorie that can be found [here](https://github.com/mrdoob/three.js/blob/r91/examples/js/controls/OrbitControls.js). You will want to add this file to your project in a way so that it will append three.js, and add a constructor called [THREE.OrbitControls](https://threejs.org/docs/#examples/controls/OrbitControls).