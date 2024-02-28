var express = require('express');  
var app=express();  
app.get('/app', function (req, res) {  
  console.log(req);
    // console.log(`BaseUrl:${req.baseUrl}`);
    // console.log(`params:${req.params}`);
    // console.log(`Body:${req.body}`);
    // console.log(`query:${req.ip}`);
res.send('<p>Username: ' + req.query['first_name']+'</p><p>Lastname: '+req.query['last_name']+'</p>');  
})  
var server = app.listen(8000, function () {  
  var host = server.address().address  
//   console.log(host)
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  