'use strict';
require('es6-promise');

var promise = new Promise((fullfill, reject) => {
  setTimeout(() => {
    fullfill('FULFILLED!');
  }, 300);
});

promise.then((result) => console.log(result));