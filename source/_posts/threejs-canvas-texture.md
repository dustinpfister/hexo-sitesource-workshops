---
title: Using a Canvas element as a Texture in three.js
date: 2018-04-17 09:33:00
tags: [js,canvas,three.js,animation]
layout: post
categories: three.js
id: 177
updated: 2018-04-17 09:56:49
version: 1.1
---

So far I have not written any posts on textures with my [three.js](https://threejs.org/) collection of posts, so lets put and end to that today. In three.js you have a Scene, and in that scene you place things like cameras, and other Objects like a Mesh that is composed of a Geometry, and a Material. When we look at Materials in depth they are composed of many properties, some of which are part of the base Material class, and others are part of the specific Material such as the Basic Material, or Lambert Material. Properties such as map, and emissiveMap that expect a Texture, which is an image that can be used to define how the surface is going to look. 

The Image used to define a Texture can be loaded from an external source such as a \*png image, but it can also be defined with javaScript, by making something with canvas, and then using that as an Image source. This is useful to help make projects that do not depend an an extremal source aside from three.js, or to make dynamic animated textures.

<!-- more -->

## Start With just a quick simple Canvas Example

I order to use a canvas as a texture we will of course need an instance of a canvas that can be created with document.createElement. The dom element does not have to be appended to the HTML, we just need to have one to give to the Texture constructor. The width and height values should be a base 2 number such as 8, 16, 32 and so forth else you might get webGl errors in the console. aside from that so far it seems like you can just create a simple plane old canvas element like normal using the 2d drawing context.

```js
    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
 
    canvas.width = 8;
    canvas.height = 8;
 
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#ff00ff';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
```