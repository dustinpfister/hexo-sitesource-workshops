---
title: Using a Canvas element as a Texture in three.js
date: 2018-04-17 09:33:00
tags: [js,canvas,three.js,animation]
layout: post
categories: three.js
id: 177
updated: 2018-04-17 10:22:06
version: 1.3
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

Once you have a canvas it can be used to create a texture.

## Creating a texture with canvas

Although The base Texture class can be used to create a texture that uses a canvas, there is a constructor for this purpose called THREE.CanvasTexture. The only difference is that it would appear that the needsUpdate boolean of the texture is set to true by default. In any case you just pass the reference to the canvas (not it's drawing context) to the constructor that use use as the first argument.

So then this:
```js
var texture = new THREE.CanvasTexture(canvas);
```

Seems to have the same effect as doing this:.
```js
var texture = new THREE.Texture(canvas);
texture.needsUpdate = true;
```

In Any case you now have both a canvas, a drawing context for that canvas, and a texture made from that canvas that can now be used in a Material that can make use of that texture. Regardless of what constructor you use the needUpdate boolean is of interest as even if it is set to true by default, you will want to set it true again each time you want the texture updated, more on that later.

## Using the texture with a Material

I will not get into this in depth, as this matter can quickly become a whole new post when it comes to using a texture with a Material. However a quick example involving the basic material is in order for sure to say the least.

```js
var material = new THREE.MeshBasicMaterial({
    map: texture
});
```

The basic material is an example of a material that does not respond to a light source, so for the most part it is just the color of the surface that we are concerned with when working with this kind of material. So when I set the map property of a Basic Material to the texture, the canvas texture will work in place of the color property.

The material that you are using makes a big difference, some materials use the map property for the texture that is to respond to a light source. As such the property that you might want to set the texture that you have made to is the emissiveMap property rather than map. This is the case with the Lambert material

```js
var material = new THREE.MeshLambertMaterial({
    emissive: new THREE.Color(0xffffff),
    emissiveMap: texture
});
```

There are other properties that make use of a texture, I will not get into detail with them all here as it is off topic, but it is something that you should be aware of if not before hand.