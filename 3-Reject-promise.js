'use strict';

// Create a promise

var promise = new Promise(function (fulfill, reject) {

    // with parameter `"REJECTED!"`.

    setTimeout(function () {
        reject(new Error('REJECTED!'));
    }, 300);
});

// Create a function to print `error.message` using `console.log`.

function onReject(error) {
    console.log(error.message);
}
promise.then(null, onReject);