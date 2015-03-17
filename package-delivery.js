/*Package Delivery Tracker*/
/*A demo of creating and using promises*/

var R = require('rsvp');

//a delay function (from http://abdulapopoola.com/2014/11/29/3-ways-to-start-using-promises/)
//to provide our asynchronicity.
function delay(fn, value, courier_speed, time){
    setTimeout(function() {
            fn({time:time,speed: courier_speed, package:value});
    }, time);
};

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
};

function fullReport(values) {
    values = values.sort(function(a,b){
        if (a.time > b.time){
            return 1;
        }
        if (a.time < b.time){
            return -1;
        }
        return 0;

    });
    console.log(values)
    return('yay');
};
   
//we can resolve this later, even with another name as module export.
var closingTime = R.defer();

var deliverPackages = function() {
   //what do I want to do asynchronously?
   //let's deliver some packages
   var trips = [];
   var packages = getRandomInt(1,10); //don't know how many packages we need to deliver
   for (var i=0; i<packages;i++){
        var distance = getRandomInt(100,5000) //don't know how far away they are
        trips.push(new R.Promise(function(resolve, reject) {
           var package =  {id:i+1,distance:distance};
           var courier_speed = getRandomInt(1,10); //each package delivered by a different courier with different speed
           delay(resolve, package, courier_speed, Math.floor(package.distance / courier_speed));

        }))
   }
   console.log('total trips to do: '+trips.length);
    //when all trips completed, log their full data including speed and duration.
    R.all(trips)
        .then(fullReport)
        .then(function(value){
            //could do anything here that requires fullReport to be completed
            console.log(value);
            return('all done');
        })
        .then(function(value){
            //and can be very 'functional' by returning values from our chained functions,
            //returning computations as we pass things down the line.
            console.log(value)
            closingTime.resolve('that was fun');
        });

    //as each trip is completed log its duration.
    for (var i=0; i<packages;i++){
        trips[i].then(function(value){
            console.log('trip '+value.package.id +' completed: '+value.time);

        },function(error){console.log(error)})
    }

}

module.exports = {
    wrapper: closingTime,
    deliverPackages: deliverPackages
};
