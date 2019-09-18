'use strict';

// Create a promise

var promise = new Promise(function (fulfill, reject) {

    // 'FULFILLED!'.

    setTimeout(function () {
        fulfill('FULFILLED!');
    }, 300);
});


promise.then(console.log);