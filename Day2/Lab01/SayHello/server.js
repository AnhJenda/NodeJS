var express = require('express'),
    app = express();

app.get('/', function (req, res) {

    var message = "Hello " + req.query.title + " " + req.query.name;

    res.send(message);
});

app.listen(8081, function () {
    console.log('Server SayHello is running at http://127.0.0.1:8081/');
});