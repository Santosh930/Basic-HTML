const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=='/'){
        res.end(`This is home route`);
    }
    else if(req.url=='/about'){
        res.end(`This is about page`);
    }
    else if(req.url=='/contact'){
        res.end('This is contact page');
    }
    else if(req.url=='/userapi'){
        fs.readFile('api.json','utf-8',(err,data)=>{
            console.log(data);
            res.end(data);
        })

        // res.end('This is UserApi Page');
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.end(`<h1>path not found! 404 error</h1>`);
    }
    // res.end("hello Url!");
});

server.listen(8080,'127.0.0.1',()=>{
    console.log(`server is listing on port 8080`);
});