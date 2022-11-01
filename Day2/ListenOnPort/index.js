var http = require('http');
var httpServer = http.createServer();

httpServer.listen(8080, function () {
    console.log('Listening on port 8080.');
});
