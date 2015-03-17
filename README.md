Promises. What are they?
========================

The Package Delivery Tracker module is a little demo of using promises.

It simulates a postage hub sending packages to final destinations. At the beginning of the day the couriers don't know how many packages have to be delivered, or how far away each destination is. Also, each courier travels at a different speed. We want to be notified when each courier gets back, and also at the end of the day we want full stats on all the deliveries.

It's based quite heavily on Abdulfattah Popoola's [blog post](http://abdulapopoola.com/2014/11/29/3-ways-to-start-using-promises/).


Usage
-----

install standalone:

    git clone https://github.com/hpfast/package-delivery
    cd package-delivery

install dependencies:

    npm install

run:


    node .

or

    node index.js


install in your project (why would you do that?):

    npm install package-delivery
