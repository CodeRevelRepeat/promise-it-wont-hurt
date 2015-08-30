// Let's tweak/refactor the previous lesson to be more declarative!

// Functional programming carries with it some stigmas that can scare many people
// away.  This is unfortunate because you can in fact write clear, elegant code 
// using a small subset of "functional programming".  

// The previous lesson is  an excellent candidate for additional functional refactoring.
// Here is the previous lesson's solution in case you don't have it:

// var q = require('q')
//   , qhttp = require('q-io/http');

// qhttp.read("http://localhost:7000/")
// .then(function (id) {
//   return qhttp.read("http://localhost:7001/" + id);
// })
// .then(function (json) {
//   console.log(JSON.parse(json));
// })
// .then(null, console.error)
// .done();

// Let's refactor this function using the popular "lodash" library.  Install it with:

// npm install --save lodash

// In particular, you may want to use _.bind, _.compose, or others as you see fit.  

// The solution will work out of the box since the problem is the same as the previous.  
// Focus on reasoning about how to use function composition to make your promise chain
// as declarative as possible.  Refer to the provided solution once you have given it
// some thought and see if you can completely understand it.



var _ = require('lodash');
var q = require('q');
var http = require('q-io/http');
var id;

var getId = function(){
  return http.read('http://localhost:7000/');
}

var getUser = function(id){
  return http.read('http://localhost:7001/' + id);
}

getId()
  .then(getUser)
  .then(_.flow(JSON.parse, console.log))
  .then(null, console.error)
  .done();



  // Here's what the official solution is if you want to compare notes:

  // -----------------------------------------------------------------


  //       var qhttp = require('q-io/http')
  //         , _ = require('lodash')
  //         , cachePath = "http://localhost:7000/"
  //         , dbPath = "http://localhost:7001/";
      
  //       var buildDbPath = _.bind(String.prototype.concat, dbPath);
      
  //       qhttp.read(cachePath)
  //       .then(_.compose(qhttp.read, buildDbPath))
  //       .then(_.compose(console.log, JSON.parse))
  //       .then(null, console.error)
  //       .done();




