---
title: The buffered geometry loader in three.js
date: 2018-04-12 10:20:30
tags: [js,canvas,three.js]
layout: post
categories: three.js
id: 172
updated: 2018-04-12 11:19:22
version: 1.3
---

In this post I will be writing about the [BufferGeometryLoader](https://threejs.org/docs/index.html#api/loaders/BufferGeometryLoader) in[three.js](https://threejs.org/). The Buffer Geometry Loader is one of several loaders in three.js that can be used to load an external JSON asset. In three.js if you want to import a 3d model that has been created in a 3d modeling program like [blender](https://www.blender.org/), it will have to be converted to a standard JSON format used by three.js. luckly there is an ofishal plugin to do just that for blender at least in the three.js repositories [exporters folder](https://github.com/mrdoob/three.js/tree/r91/utils/exporters/blender). The Buffered Geometry loader can be used to load a JSON file that has a type of BufferGeometry.


<!-- more -->

## What to know

This is an advanced post on three.js that has to do with the buffered geometry loader, it is not a [getting started post on three.js](/2018/04/04/threejs-getting-started/), or any additional skills needed before getting into three.js. This post has to do with Buffered Geometry, but I will not be getting into that in depth in this post. I assume that you have a good grasp on what is required before hand, and are here because you want to learn ins and outs of the buffered geometry loader in three.js.

Also when it comes to making a 3d model with a 3d modeling program I have come to prefer blender, I am also going to be covering the use of the io_three blender plug-in that is used to export a model to the JSON format that is used by this loader.

## Version Numbers matter.

I know there are a lot of projects where newer versions just patch programing mistakes, and the actual use of the project renames the same. This is not so true with three.js, major changes happen often. In this post i am using [three.js r91](https://github.com/mrdoob/three.js/tree/r91) that was release in March of 2018. Also in this post I am using blender 2.79 also released in March of 2018. When it comes to using the io_three plug-in it is important to use a late version of blender.

## The JSON file format

The format of a json file that can be loaded with the buffered geometry loader should have a type of "BufferedGeometry" in it's meta data. A simple example that I made in blender and exported with the io_three plug in looks like this:

```js
{
    "metadata":{
        "version":3,
        "type":"BufferGeometry",
        "normal":30,
        "position":30,
        "generator":"io_three"
    },
    "data":{
        "index":{
            "array":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,2,21,0,0,22,1,3,23,4,8,24,6,6,25,7,9,26,10,12,27,13,15,28,16,18,29,19],
            "type":"Uint16Array",
            "itemSize":1
        },
        "attributes":{
            "normal":{
                "array":[-1,0,0,-1,0,0,-1,0,0,0,-2.98023e-08,-1,0,-2.98023e-08,-1,0,-2.98023e-08,-1,1,0,0,1,0,0,1,0,0,0,2.98023e-08,1,0,2.98023e-08,1,0,2.98023e-08,1,0,-1,2.98023e-08,0,-1,2.98023e-08,0,-1,2.98023e-08,0,0.894427,-0.447214,0,0.894427,-0.447214,0,0.894427,-0.447214,0,0.894427,0.447214,0,0.894427,0.447214,0,0.894427,0.447214,-1,-0,0,-1,0,0,-0,-2.98023e-08,-1,1,0,-0,1,0,0,-0,2.98023e-08,1,0,-1,2.98023e-08,0,0.894427,-0.447214,0,0.894427,0.447214],
                "type":"Float32Array",
                "itemSize":3
            },
            "position":{
                "array":[-1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,-1,-1,-1,-1,-1,1,1,-1,1,1,1,1,-1,1,1,1,1,-1,-1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,-1,-1,1,1.5,-6.55671e-08,-1,1,-1,-1,1.5,-6.55671e-08,-1,1.5,-6.55671e-08,1,1,1,1,1.5,-6.55671e-08,-1,-1,1,-1,1.5,-6.55671e-08,1,1,-1,1,-1,-1,1,1.5,-6.55671e-08,-1,1,1,1,-1,1,1,1,-1,-1,1,1],
                "type":"Float32Array",
                "itemSize":3
            }
        },
        "groups":[{
            "count":48,
            "start":0,
            "materialIndex":0
        }]
    }
}
```

## Choosing a 3d modeling program

In order to load buffered geometry you first must have such geometry to load in the first place. Typically you will create a model in a 3d modeling program, and one way or another produce a JSON file that resembles the example I have given.

The only 3d modeling programs I have some experience with so far are [sketchup](https://www.sketchup.com/), and [blender](https://www.blender.org/). Sketchup is a fairly easy to use program, but is not open source, blender on the other hand is.

The process of exporting from sketchup to blender is a [little involved](https://github.com/mrdoob/three.js/wiki/Using-SketchUp-Models). It can be done but requires an additional Collada file loader that can be [found in the examples folder](https://github.com/mrdoob/three.js/blob/r91/examples/js/loaders/ColladaLoader.js) of the three.js repository. If you make use of that it is also off topic anyway, because this post is about the buffered geometry loader, and making use of the Collada file loader will be making use of an alternative to the buffered geometry loader.

So for this post I will be writing about the blender plug-in, and as of late I have been using blender over sketchup. It is open source, and also a bit more professional when it comes to this sort of thing anyway. In the three.js repositories exporters folder there is the io_three plugin that can be used to export a model to the JSON format used by the loader.

## Setting up the blender plugin

The [readme file](https://github.com/mrdoob/three.js/blob/r91/utils/exporters/blender/README.md) at the repository covers this process well, and it is pretty quick, easy, and painless. You just copy and paste the contents of the plug-in folder to a path on your computers file system. the path depends on your operating system, and the version of blender used.

some windows, and posix examples of what that path might be:
```
C:\Program Files\Blender Foundation\Blender\2.7X\scripts\addons
C:\Users\USERNAME\AppData\Roaming\Blender Foundation\Blender\2.6X\scripts\addons
/home/USERNAME/.config/blender/2.6X/scripts/addons
/usr/lib/blender/scripts/addons
/usr/share/blender/scripts/addons
/Users/(myuser)/Library/Application Support/Blender/2.7X/scripts/addons
```

Wherever it is you are looking for, it is the addons folder that is used by blender. Out of the box there should be a bunch of plug-ins there before hand, you just want to add the io_three plug-in to the collection there.