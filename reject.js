// Introduction

// Rejecting a Promise

// When a promise is rejected, this is typically (though not always) used to
// indicate that a value was not successfully obtained by the promise.  Once 
// a promise has been rejected, it can never be resolved (nor rejected again).

// Promises implement internal state machines that have strict rules against
// ever leaving either the resolved or rejected states.

// Task
// User "q" again to create a promise

// Create a function to print error.message using console.log.  Pass this 
// function as a rejection handler to the "then" method of your promise.

// Manually reject that promise using setTimeout with a delay of 300ms and pass it
// an Error object with parameter "REJECTED!";

// Boilerplate

//   var q = require('q');
//   var defer = q.defer(); 

//   //your solution here


var q = require('q');
var defer = q.defer();

var printErr = function(err){
  console.log(err.message);
}

defer.promise.then(null, printErr);
setTimeout(defer.reject, 300, new Error("REJECTED!"));