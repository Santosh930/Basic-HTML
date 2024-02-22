




//What is streams and types of Streams?

/*Streams are objects that let you read data from a source or write data to a destination in continuous fashion.In Node.js there are four types of streams.
-streaming means listening to music or watching video in 'real time',instead of downloading a file to your computer and watching it later.
1.Readable:Streams which is used for read operation.    
2.Writable:Streams which is used for write operation.
3.Duplex:Streams which csn used for both read & write operation.
4.Transform:A type of duplex stream where the output  is computed based on input.



*/

// 1.Simple methode
// const fs=require('fs');
// const http=require('http');
// const server=http.createServer();
// server.on("request",(req,res)=>{
//     fs.readFile('input.txt',(err,data)=>{
//         if(err) return console.error(err);
//         res.end(data.toString());
//     })
// });

// server.listen(8000,'127.0.0.1');

//2.By ReadStream Method

// const fs=require("fs");
// const http=require("http");
// const server=http.createServer();
// server.on('request',(req,res)=>{


// const rstream=fs.createReadStream("input.txt");
// rstream.on("data",(chunkdata)=>{
//     res.write(chunkdata);
// });
// rstream.on('end',()=>{
//     res.end();
// })
// rstream.on("error",(err)=>{
//     console.log(err);
//     res.end("File not found");
// })

// })

// server.listen(8000,'127.0.0.1');

//3.stream.pipe();
//This method is used to take a readable stream and connect it to a writeable stream.

// const fs=require('fs');
// const http=require('http');
// const server=http.createServer();
// server.on('request',(req,res)=>{
//     const rstream=fs.createReadStream("input.txt");
//     rstream.pipe(res);

// });
// server.listen(8000,'127.0.0.1');