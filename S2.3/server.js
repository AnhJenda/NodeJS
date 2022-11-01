var express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    articles = require('./controllers/articles');

// CRUD = CREATE READ UPDATE DELETE

app.use(logger('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'pug');

var notImplimented = function (req, res) {
    res.sendStatus(501);
}

// articles
app.get('/articles', articles.index); // show all blog posts
app.get('/articles/new', articles.new);
app.get('/articles/:articleId', notImplimented); // reading one
app.post('/articles', articles.create); // making a new one
app.put('/articles/:articleId', notImplimented); // updating one
app.delete('/articles/:articleId', notImplimented); // deleting one

// comments
app.put('/articles/:articleId/comments', notImplimented); 
app.delete('/articles/:articleId/comments/:commentId', notImplimented);

app.listen(8080);