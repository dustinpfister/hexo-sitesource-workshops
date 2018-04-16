---
title: Vector3 in three.js for points in space
date: 2018-04-15 20:18:00
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 175
updated: 2018-04-15 21:42:14
version: 1.6
---

In [Vector space](https://en.wikipedia.org/wiki/Vector_space) you have one or more objects that can be called Vectors. In [three.js](https://threejs.org/) there are a few constructors that can be used to created these objects which can be used for many things. This post is about the [Vector3](https://threejs.org/docs/index.html#api/math/Vector3) constructor that is useful in 3d space. A 3d Vector3 Instance consists of an x,y, and z value which makes it useful for plotting a single point in 3d space. It also has a few more uses, such as finding [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) via the length method of the Vector3 instance, which is the distance from the vector to the origin (0,0,0).

<!-- more -->

Vector3 instances are also used when creating geometry that will be used in a mesh, and there are also many properties in various objects that expect an instance of Vector3. There also have a whole bunch of useful methods that can be used for typical tasks such as finding the distance between two points in space.

## What to know

This is an advanced post on three.js in which I am writing about the Vector3 constructor, this is not a simple [getting started post](/2018/04/04/threejs-getting-started/) on three.js, or javaScipt in general. Vector3 instances are used in the process of making custom geometry, I will not be getting into that in depth, or many of the other use cases for Vector three. This post will focus on what there is to know about the constructor.

## Three.js version number matters.

Three.js is a project where the version number matters, in this post I am using [r91](https://github.com/mrdoob/three.js/tree/r91), if the code examples in this post or [any three.js post](/categories/three-js/) of mine that might be a reason why.

## Basic example of Vector3

To create a single instance of Vector3 I just need to call the constructor ans pass three arguments that are the x,y, and z values of the vector.

```js
    var r = Math.PI / 180 * 45,
    x = Math.cos(r),
    y = Math.sin(r),
 
    vec = new THREE.Vector3(x, y, 0);
 
    console.log(vec.isVector3); // true
    console.log(vec.x, vec.y, vec.z); // 0.70... 0.70... 0
    console.log(vec.length()); // 1
```

There are for the most part only 3 properties of a Vector3 instance that are of interest in most situations which of course is the x , y, and z properties. To my knowledge there are only four properties in total, the fourth being the isVector property which should always be true. Every thing else of interest in a Vector3 instance is a method, such as the length method that will give the current Euclidean distance, or distance from the origin.

## Adding, diving, and multiplying Vectors

Vectors can be added together with the add method, which is pretty straight forward. There are also methods for diving, and multiplying as well.

```js
    var vec = new THREE.Vector3(.25, 1, 5);
    vec.add(new THREE.Vector3(.25, 1, 2));
 
    console.log(vec.x, vec.y, vec.z); // 0.5 2 7
```

To quickly add a scalar values to all three values there is addScalar.

```js
    // addScalar
    var vec = new THREE.Vector3(3, 3, 7);
    vec.addScalar(10);
 
    console.log(vec.x, vec.y, vec.z); // 13 13 17
```

## Finding the distance between two vectors.

The length method of Vector3 returns the distance from the origin, but what if you want the distance from another instance of Vector3? For that there is the distance method.

```js
var a = new THREE.Vector3(10, 10, 10),
b = new THREE.Vector3(10, 5, 10);
console.log(a.distanceTo(b)); // 5
```

## Clone, and Copy

If you want to make an independent copy of a vector you can use the clone method, and if you want to copy in the values of one vector into another there is the copy method.

```js
    // clone
    var original = new THREE.Vector3(10, 10, 10),
    copy = original.clone();
    copy.x += 5;
 
    console.log(copy.x); // 15
    console.log(original.x); // 10
 
    // copy
    var a = new THREE.Vector3(1, 2, 1),
    copy = new THREE.Vector3().copy(a);
    copy.z += 2;
 
    console.log(a.z); // 1
    console.log(copy.z); // 3
```

Remember that objects are copied by reference in in javaScript so you will want to use one of these methods or some other similar method to make copies of a vector.

## Create Geometry Vertices with Vector3

Although I will not be getting into making custom geometry in detail, doing so will often involve the use of Vector3 to create the array of vertices. The faces will then reference them by the index value of the vertex in the vertices array of the geometry.

```js
    var geometry = new THREE.Geometry();
 
    // create vertices with Vector3
    geometry.vertices.push(
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(1, 1, -1),
        new THREE.Vector3(1, -1, 1),
        new THREE.Vector3(1, -1, -1),
        new THREE.Vector3(-1, 1, -1),
        new THREE.Vector3(-1, 1, 1),
        new THREE.Vector3(-1, -1, -1),
        new THREE.Vector3(-1, -1, 1));
 
    // faces are made with the index
    // values of from the vertices array
    geometry.faces.push(
        new THREE.Face3(0, 2, 1),
        new THREE.Face3(2, 3, 1),
        new THREE.Face3(4, 6, 5),
        new THREE.Face3(6, 7, 5),
        new THREE.Face3(4, 5, 1),
        new THREE.Face3(5, 0, 1),
        new THREE.Face3(7, 6, 2),
        new THREE.Face3(6, 3, 2),
        new THREE.Face3(5, 7, 0),
        new THREE.Face3(7, 2, 0),
        new THREE.Face3(1, 3, 4),
        new THREE.Face3(3, 6, 4));
 
    geometry.normalize();
    geometry.computeFlatVertexNormals();
```

## Conclusion

Vectors are a big part of working with three.js, all the objects contain them as a way of defining points in space. Many properties of Objects are instances of Vector three as well such as Object3d.position that can be used to set the position of a Mesh, Camera or any other find of Object in a Scene. So having a solid understanding of where there is to work with when it comes to Vector three is important, as it will come up often.