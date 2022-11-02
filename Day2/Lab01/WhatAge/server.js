var express = require('express'),
    app = express();

app.use('/', function (req, res) {
    var age = new Date().getFullYear() - req.query.year;

    var message = req.query.name + " is " + age + " year olds.";

    res.send(message);
});

app.listen(8081, function () {
    console.log('Server WhatAge is running at http://127.0.0.1:8081/' )
});
