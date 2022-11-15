const path = require('path')
const express = require('express')
const app = express()
const expressHandlebars = require('express-handlebars')
// const cookieParser = require('cookie-parser')
// const session = require('express-session')

// app.use(cookieParser())
// app.use(session({ resave: false, saveUninitialized: false, secret: 'keyboard cat' }))

app.engine('hbs', expressHandlebars.engine({
    extname: '.hbs',
    defaultLayout: 'main',
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('home', {
        message: 'Spending quality time with your family is one of the most important things that you can do, and a great way to do this is an outing to an event or destination that suits all. Different families enjoy doing different things collectively, and one of the greatest things about the UK is the depth of different options that you have available to you.Here at National Holidays, we understand how important it is to have adventures together, but also how difficult it can be to decide where to go. Here is our guide to some of the best family outings that the UK has to offer. In addition to a great day out, why not also look at our coach breaks and enjoy a few days away together?',
    })
})

app.get('/new-years-eve', (req, res) => {
    res.render('tet', {
        message: 'Spending quality time with your family is one of the most important things that you can do, and a great way to do this is an outing to an event or destination that suits all. Different families enjoy doing different things collectively, and one of the greatest things about the UK is the depth of different options that you have available to you.Here at National Holidays, we understand how important it is to have adventures together, but also how difficult it can be to decide where to go. Here is our guide to some of the best family outings that the UK has to offer. In addition to a great day out, why not also look at our coach breaks and enjoy a few days away together?',

    })
})

app.get('/moon-festival', (req, res) => {
    res.render('trungthu', {
        message: 'Spending quality time with your family is one of the most important things that you can do, and a great way to do this is an outing to an event or destination that suits all. Different families enjoy doing different things collectively, and one of the greatest things about the UK is the depth of different options that you have available to you.Here at National Holidays, we understand how important it is to have adventures together, but also how difficult it can be to decide where to go. Here is our guide to some of the best family outings that the UK has to offer. In addition to a great day out, why not also look at our coach breaks and enjoy a few days away together?',

    })
})

app.get('/christmas', (req, res) => {
    res.render('christmas', {
        message: 'Spending quality time with your family is one of the most important things that you can do, and a great way to do this is an outing to an event or destination that suits all. Different families enjoy doing different things collectively, and one of the greatest things about the UK is the depth of different options that you have available to you.Here at National Holidays, we understand how important it is to have adventures together, but also how difficult it can be to decide where to go. Here is our guide to some of the best family outings that the UK has to offer. In addition to a great day out, why not also look at our coach breaks and enjoy a few days away together?',

    })
})

app.listen(3000, (req, res)=>{
    console.log("listening on port 3000")
})