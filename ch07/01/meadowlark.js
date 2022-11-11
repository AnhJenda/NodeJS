const path = require('path')
const express = require('express')
const app = express()
const expressHandlerbars = require('express-handlebars')

app.engine('hbs', expressHandlerbars.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    helpers: {
        section: function(name, options) {
        if(!this._sections) this._sections = {}
        this._sections[name] = options.fn(this)
        return null
        }
    }
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => res.render('home'))

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})