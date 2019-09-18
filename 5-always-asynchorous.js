'use strict';

var promise = new Promise(function (fulfill, reject) {
    fulfill('PROMISE VALUE');
});

// At this point, the value of promise is already known.

promise.then(console.log);

console.log('MAIN PROGRAM');