const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

const fortune = require('./lib/fortune')
   

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => res.render('home'))
app.get('/about', (req, res) => {
    res.render('about', { fortune: fortune.getFortune() } )
   })
// custom 404 page
app.use((req, res) => {
 res.status(404)
 res.render('404')
})
// custom 500 page
app.use((err, req, res, next) => {
 res.status(500)
 res.render('500')
})

app.listen(port, () => console.log(
 `Express started on http://localhost:${port}; ` +
 `press Ctrl-C to terminate.`))