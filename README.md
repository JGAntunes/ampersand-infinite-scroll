[![js-semistandard-style](https://cdn.rawgit.com/flet/semistandard/master/badge.svg)](https://github.com/Flet/semistandard)
[![Dependency Status](https://david-dm.org/jgantunes/ampersand-infinite-scroll.svg)](https://david-dm.org/jgantunes/ampersand-infinite-scroll)
[![devDependency Status](https://david-dm.org/jgantunes/ampersand-infinite-scroll/dev-status.svg)](https://david-dm.org/jgantunes/ampersand-infinite-scroll#info=devDependencies)

ampersand-infinite-scroll
============

**_This module is still under development_**

A simple ampersand module to be used with any view in need of an infinite scroll element. This module assumes that the collection associated with the view implemments a method `collection.fetchPage()` as so it is a perfect match to be used with [ampersand-pagination-mixin](https://github.com/JGAntunes/ampersand-pagination-mixin).

This module works by binding a function to the `scroll` event that fires a `collection.fetchPage()` request whenever the user reaches the bottom of the page.

Example:

```javascript
  var View = require('ampersand-infinite-scroll');

  var Collection = require('./myCollection');

  var SpecialCollection = Collection.extend({
    fetchPage: function() {
      this.add([
        {message: "This"},
        {message: "Is"},
        {message: "Am"},
        {message: "Awesome"},
        {message: "View"},
        {message: "!"}
      ]);
    }
  });
  
  // Extend it like you wold normally do
  var myView = View.extend({
    initialize: function () {
      console.log('My super awesome infinite scroll view');
    },
    collection: new
  });
```

## credits

Created by [@JGAntunes](http://github.com/JGAntunes), with the support of [@SINFO](http://github.com/sinfo) and based on a series of Ampersand Modules.


## license

MIT
