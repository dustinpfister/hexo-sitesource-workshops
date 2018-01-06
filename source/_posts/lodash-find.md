---
title: Example of the _.find array method in lodash
date: 2017-09-14 10:49:00
tags: [js,lodash,node.js]
layout: post
categories: lodash
id: 37
updated: 2017-09-30 18:57:16
version: 1.4
---

So there is the old do I use objects or arrays problem that I run into when working on a project. Of course [arrays are objects](/2017/05/12/js-arrays-are-objects/), but I gather that you may know what I mean if you are like me, and have been coding with javaScript for a few years. I try not to get caught up on these things, as of late I seem to be going with arrays. As such methods like [\_.find](https://lodash.com/docs/4.17.4#find) in [lodash](https://lodash.com/) come in handy.

<!-- more -->

## The basic usage example

So \_.find will help with returning an element in an array, rather than it's index. So if you have an array of objects and you want to find a single object in the array by a certain key value pare \_.find is the right tools for the job.

```js
var db_array = [
 
    {
        name : 'Dave',
        sex : 'male',
        age : 34
    },
 
    {
        name: 'Jake',
        sex : 'male',
        age : 22
    },
 
    {
        name :'Jane',
        sex : 'female',
        age : 27
    }
 
],
 
// find dave
q = _.find(db_array, {name:'Dave'});
 
console.log(q); // {name:'Dave',sex:male,age:34}
```

You do not have to give an object, you can also use a function like this.

```js
q = _.find(db_array, function (obj) {
    return obj.name === 'Dave';
});
```

## conclusion

Short post for now, maybe I will expand on it some day, but don't hold your breath. If you are in the mood check out [my other posts on lodash](/categories/lodash/).
