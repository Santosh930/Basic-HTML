




// const http=require('http');
// var url = require('url');
// var fs=require('fs');


// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'});
//     res.write(req.url);
//     res.write('<h1>Hello Santosh</h1>');
    
//     var q=url.parse(req.url,true).query;
//     var txt = q.year + " " + q.month;
//     res.end(txt);

// }).listen(4040);


// file System

const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);

    })

}).listen(4040);




