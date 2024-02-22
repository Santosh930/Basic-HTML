




//Events:-Every action on a computer is an event. Like when a connection is made or a file is opened.

// const fs=require('fs');
// const rs=fs.createReadStream('./demofile.txt');
// rs.on('open',()=>{
    
//     console.log('The file is open!');
// })



//Make a own event
// const events=require('events');
// console.log(events);
// const eventEmitter=new events.EventEmitter();

//create and assign the event handler to  an event


// eventEmitter.on('sayMyName',()=>{
//     console.log('My name is Santosh!');

// });
// eventEmitter.on('sayMyName',()=>{
//     console.log('My name is Santosh Kumar!');

// });
// eventEmitter.on('sayMyName',()=>{
//     console.log('My name is Santosh Kumar Sah!');

// });

//Fire the 'sayMyName' event:
// eventEmitter.emit("sayMyName");

//how to pass message and status code

// const EventEmitter=require('events');
// const event=new EventEmitter();
// event.on('checkpage',(sc,msg)=>{
//     console.log(`This page status code is ${sc}  and the message is ${msg}`);

// });
// event.emit('checkpage',200,'ok');



