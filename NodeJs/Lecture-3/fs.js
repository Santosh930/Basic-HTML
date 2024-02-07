
const fs=require('fs');
// console.log(fs);
//Synchronous & Asynchronous
//CRUD

//Synchronous 
//creating a file if file exists then it is overrite content.if not exists it will create a new file named write.txt then insert the given content.
// fs.writeFileSync('write.txt','Hello santosh kumar!');
// fs.writeFileSync('write.txt','I am Santosh Kumar from Bihar.');

//now without overrite .we can add new data in a file

// fs.appendFileSync('write.txt','I have done B.tech from PTU.');

//read 

// let buffer_data=fs.readFileSync('write.txt');
// let buffer_data=fs.readFileSync('write.txt','utf-8');
// console.log(buffer_data.toString());
// console.log(buffer_data);
/* 
<Buffer 49 20 61 6d 20 53 61 6e 74 6f 73 68 20 4b 75 6d 61 72 20 66 72 6f 6d 20 42 6
9 68 61 72 2e 49 20 68 61 76 65 20 64 6f 6e 65 20 42 2e 74 65 63 68 20 66 ... 8 more
 bytes>

*/
// console.log(buffer_data.toString());


//for rename
// fs.renameSync('write.txt','readWrite.txt'); 
//for entering emoji on vs code window + .
// 👌✍️😊€£⟪‱฿₠D

//for delete

// fs.unlinkSync('abc.txt');


//crud using asynchronous way
//create a file
// fs.writeFile('async.txt','This is asynchronous method for making a file',(err)=>{
//     console.log('file is created');
//     console.log(err);
// });

//read 
// fs.readFile('async.txt','utf-8',(err,data)=>{
//     if(err) console.log(err);
//     console.log(data);
    

// })

//update
// fs.appendFile('async.txt','Hello Students,My name is Santosh Kumar.I will be your trainer.In todays session we will be covering html .so lets start.',(err)=>{
//     console.log('data is updated');
// } );

//delete
// fs.unlink('async.txt',(err)=>{
//     console.log('file is deleted');
// })


//diff b/w sync and async

// let data=fs.readFileSync('async.txt','utf-8');
// console.log(data);
// console.log('############');
// console.log('after data');


//async

// fs.readFile('async.txt','utf-8',(err,data)=>{
//     console.log(data);
// });

// console.log('after data................');
// console.log('**********');



 

