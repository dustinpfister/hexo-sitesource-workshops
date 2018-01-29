---
title: Example of the _.find array method in lodash
date: 2017-09-14 10:49:00
tags: [js,lodash,node.js]
layout: post
categories: lodash
id: 37
updated: 2018-01-29 10:01:34
version: 1.5
---

So there is the old do I use objects or arrays problem that I run into when working on a project. Of course [arrays are objects](/2017/05/12/js-arrays-are-objects/), but I gather that you may know what I mean if you are like me, and have been coding with javaScript for a few years. I try not to get caught up on these things, as of late I seem to be going with arrays. As such methods like [\_.find](https://lodash.com/docs/4.17.4#find) in [lodash](https://lodash.com/) come in handy.

<!-- more -->

## What a collection is, and basic example

The lodash \_.find method works not just with Arrays but also any object

```js
// The is an Object that is an Array that
// is a kind of collection
var anArray = ['i', 'am', 'an', 'Array'];
 
console.log(anArray.constructor.name); // Array
 
// This is an Object that is an Object
// but it is an collection that is 'Array like'
var notAnArray = {
 
    0: 'i',
    1: 'am',
    2: 'not',
    3: 'an',
    4: 'Array'
 
};
 
console.log(notAnArray.constructor.name); // Object
 
// This is an Object that is not at all like an Array
// It is a collection of key value pairs though
var soNotAnArray = {
 
    foo: 'totally',
    bar: 'not',
    man: 'an',
    chew: 'Array'
 
};
 
console.log(soNotAnArray.constructor.name); // Object
 
// this is a method that I can pass to _.find
// along with a collection that will give me the first
// element that has a length greater than 3
var method = function (el) {
 
    return el.length >= 3;
 
};
 
console.log( _.find(anArray, method) ); // Array
console.log( _.find(notAnArray, method) ); // not
console.log( _.find(soNotAnArray, method) ); // totally
```

## The iteration method

The second argument that is given to \_.find is the iteration method. This method can have three arguments, the first of which is the current element in the collection that is being looked at. In addition the second argument is the current index, and the last argument is a reference to the collection that was given.

```js
var result = _.find(['a', 'b', 'c'], function (el, i, col) {
 
     // first argument is the current collection element 'a' - 'c'
    console.log(el);
 
    // second argument is the current index 0 - 2
    console.log(i);
 
    // third argument is the actual collection ['a','b','c']
    console.log(col);
 
    // if true is returned, then that is what
    // will be returned by _.find, else it will keep looking
    return el === 'b'
 
});
 
console.log(result); // b
```

In the body of the iteration method, if what is returned by the method evaluates to true then, then that will count as the element being found.

## FromIndex example

This lodash method can accept a third argument that is the idex

```js
var collection = [1,2,3,4,5,'a','b','c'],
method = function(el,i){
 
  if(typeof el === 'string'){
  
      return true;
  
  }
 
};
 
console.log( _.find(collection, method) ); // 'a'
console.log( _.find(collection, method , 6) ); // 'b'
```

## The basic usage example of \_.find

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

## Using \_.find on an array of primitives

Find can also be used with an array of primitives as well of course to find a string that fits a regExp pattern.

```js
var words = ['foo**', '*foo*', '**foo'];
 
var result = _.find(words, function (str, i) {
 
        if (str.match(/\*\*foo/)){
 
            return true;
 
        }
 
    });
 
console.log(result); // '**foo'
```

## conclusion

Short post for now, maybe I will expand on it some day, but don't hold your breath. If you are in the mood check out [my other posts on lodash](/categories/lodash/).
