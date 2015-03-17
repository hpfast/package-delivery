/*Run the Package Delivery Demo*/
var R = require('rsvp');
var post = require('./package-delivery.js');

//we attach a custom handler to wrapper. This will get called at some point in our code!
post.wrapper.promise.then(function(value){console.log(value)},function(error){console.log(error)});
post.deliverPackages();

//here a deferred being resolved with a then handler all in one place, for reference
//var def = R.defer();
//
//def.resolve('Success!');
////note now we can log the value even after def has been resolved.
//def.promise.then(function(value){
//    console.log(value)
//});
