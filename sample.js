var stuff = require('./stuff');
var event = require('events');
var util = require('util');

var 
var emitter = new event.EventEmitter();

emitter.on('click', function(msg) {
    console.log(msg);
})

emitter.emit('click', 'this is the click event!')

// console.log(stuff.counter(['hari','krishna','mungara']));
// console.log(stuff.adder(10,10));
// console.log(stuff.sub(10,5))