const express = require('express')
const app = express();

app.get('/no-layout', (req, res) =>
 res.render('no-layout', { layout: null })
)

app.listen(3000, () => {
    console.log('listening on port 3000');
})