const path = require('path')
const express = require('express')
const app = express()
const expressHandlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const catNames = require('cat-names')

app.use(cookieParser())
app.use(session({ resave: false, saveUninitialized: false, secret: 'keyboard cat' }))

app.engine('hbs', expressHandlebars.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/greeting', (req, res) => {
    res.render('greeting', {
    message: 'Hello esteemed programmer!',
    style: req.query.style,
    userid: req.cookies.userid,
    username: req.session.username
    })
   })

app.get('/set-random-userid', (req, res) => {
    res.cookie('userid', (Math.random()*10000).toFixed(0))
    res.redirect('/greeting')
})

app.get('/set-random-username', (req, res) => {
    req.session.username = catNames.random()
    res.redirect('/greeting')
})

app.listen(3000, (req, res)=>{
    console.log('listening in port 3000')
})
