const express = require('express');
const router = express.Router();
// const data = JSON.parse('/data/kaker.json');

router.get('/', (req, res) => {
    const data = [];
    let json = data.map(e => data.push(e));
    console.log(data)
    // res.render('recepies', { data })
}).get('/recepies/:name', (req, res) => {

})

module.exports = router;