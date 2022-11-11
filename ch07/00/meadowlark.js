const express = require('express')
const app = express()
const expressHandlerbars = require('express-handlebars')

app.engine('handerbars', expressHandlerbars.engine({
    defaultLayout: 'main',
}))

app.set('view engine', 'handerbars')

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})