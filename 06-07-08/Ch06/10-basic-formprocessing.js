const express = require('express')
const app = express();

app.post('/process-contact', (req, res) => {
    console.log(`received contact from ${req.body.name}
   <${req.body.email}>`)
    res.redirect(303, '10-thank-you')
   })

   app.listen(3000, () => {
    console.log('listening on port 3000');
})