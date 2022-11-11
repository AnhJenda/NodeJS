const express = require('express')
const app = express();

const tours = [
    { id: 0, name: 'Hood River', price: 99.99 },
    { id: 1, name: 'Oregon Coast', price: 149.95 },
   ]
   
   app.get('/api/tours', (req, res) => res.json(tours))

   app.listen(3000, () => {
    console.log('listening on port 3000');
})