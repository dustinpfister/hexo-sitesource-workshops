---
title: Quick orbit controls for three.js
date: 2018-04-13 18:22:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 173
updated: 2018-04-13 19:02:23
version: 1.1
---

It would not be to hard to implement some camera controls for a [three.js](https://threejs.org/) project from scratch. It would involve some event handlers, and the use of a few Object3D methods like lookAt, and position.set. However There is some additional resources in the three.js project repository itself that can be used to quickly set this up in a flash. In this post I will be covering how to quickly set up some orbit controls for the camera, so you do not have to keep changing hard coded values, or spend a great deal of time working on your own solution to just look around a scene.


<!-- more -->

## Where to get the file for orbit controls

In order to quickly add Orbit controls you need to add a \*.js file that is in the three.js repository that can be found [here](https://github.com/mrdoob/three.js/blob/r91/examples/js/controls/OrbitControls.js). You will want to add this file to your project in a way so that it will append three.js, and add a constructor called [THREE.OrbitControls](https://threejs.org/docs/#examples/controls/OrbitControls).


## Using the OrbitControls constructor

Once you have the constructor you just need to call the constructor passing the instance of the camera you want to to control which will give you an instance of THREE.OrbitControls.

```js
// CAMERA
var camera = new THREE.PerspectiveCamera(75, 320 / 240, 1, 1000);
camera.position.set(250, 200, 250);
camera.lookAt(0, 0, 0);
 
// add controls for the camera
var controls = new THREE.OrbitControls(camera);
```

Once you have an instance of the controls you just need to call the update method of the controls in a render or update loop.

```js
function animate() {
 
    requestAnimationFrame(animate);
    controls.update();
 
    renderer.render(scene, camera);
 
};
 
animate();
```

## Full working Example of three.sj Orbit Controls

For a full working example of this I will of course want something to look at such as a cube, and of course I will want the usual scene, camera, and renderer. In my html not only will I want to load three.js like normal, I will want to see to it that the Orbit controls are added to three.js, as or r91 they are not part of three.js itself, so it must be added by some means.

### html
```html
<html>
    <head>
        <title>test_threejs demos</title>
    </head>
    <body>
        <div id="demo"></div>
 
        <!-- Three.js, and orbit controls -->
        <script src="/js/threejs/0.91.0/three.min.js" ></script>
        <script src="/js/threejs/0.91.0/controls/OrbitControls.js" ></script>
 
        <!-- My demo -->
        <script src="orbit-controls/js/main.js"></script>
 
    </body>
</html>
```

If all goes well I should now be able to use the OrbitControls constructor just like any other constructor in three.js.

### js
```js
(function () {
 
    // Scene
    var scene = new THREE.Scene();
 
    // Camera
    var camera = new THREE.PerspectiveCamera(45, 4/3, .5, 100);
    camera.position.set(2, 2, 2);
    camera.lookAt(0, 0, 0);
 
    // Orbit Controls
    var controls = new THREE.OrbitControls(camera);

    // Something to look at
    scene.add(new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1), 
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe: true
        })));
 
    // Render
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(320, 240);
    document.getElementById('demo').appendChild(renderer.domElement);

    // loop
    function animate() {
 
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
 
    };
 
    animate();
 
}());
```