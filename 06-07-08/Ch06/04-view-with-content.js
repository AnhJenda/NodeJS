const express = require('express')
const app = express();

app.get('/geeting', (req, res) => {
    res.render('greeting', {
    message: 'Hello esteemed programmer!',
    style: req.query.style,
    userid: req.cookies.userid,
    username: req.session.username
    })
   })
   

   app.listen(8080, () => {
    console.log('listening on port 8080');
})