const path = require('path')
const express = require('express')
const app = express()
const expressHandlerbars = require('express-handlebars')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.engine('hbs', expressHandlerbars.engine({
    extname: '.hbs',
    defaultLayout: 'main'
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.get('/newsletter-signup', handlers.newsletterSignup)
app.post('/newsletter-signup/process', handlers.newsletterSignupProcess)
app.get('/newsletter-signup/thank-you', handlers.newsletterSignupThankYou)

app.listen(3000, (req, res) => {
    console.log('listening on port 3000')
})