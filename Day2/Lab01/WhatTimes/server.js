var http = require('http'),
    url = require('url');

http.createServer(function (req, res){
   res.writeHead(200, {'Content-Type':'text/html'});

   var   q = url.parse(req.url, true).query;
   var  txt = q.year + " " + q.month;

   res.end(txt);
}).listen(8081);

console.log('Server WhatTimes is running at http://127.0.0.1:8081/');