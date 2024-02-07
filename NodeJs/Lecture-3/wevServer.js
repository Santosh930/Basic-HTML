const http=require('http');

http.createServer((req,res)=>{
res.end("Hello Web Server2");


}).listen(8080,'127.0.0.1');