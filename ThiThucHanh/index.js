const path = require('path')
const express = require('express')
const expressHandlerbars = require('express-handlebars')
const bodyParser = require('body-parser')
const handlers = require('./lib/handlers')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.engine('hbs', expressHandlerbars.engine({
    extname: '.hbs',
    defaultLayout: 'main',
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'))

app.get('/', handlers.home)

app.get('/register', handlers.register)
app.post('/register/process', handlers.registerProcess)
app.get('/register/thank-you', handlers.registerThankyou)

app.use(handlers.notFound)
app.use(handlers.serverError)

app.listen(3000, (req, res) => {
    console.log('listening on port 3000, curl http://localhost:3000')
})