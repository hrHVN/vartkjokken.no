const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql');
const path = require('path');

/*
Global values
*/
dotenv.config();
const port = 3000;
const app = express();
// Routers
const recipiesRouter = require('./routes/recipies.js');
const minheimRouter = require('./rotes/_myHouse.js');

/*
    Express base settup
*/
app.set('view engine', 'pug');
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/javascript', express.static(path.join(__dirname, 'public/javascript')));

app.listen(port, () => {
    console.log(`Server is running at: ${__dirname}:${port}`)
})
/*
    Routs and routers
*/

app.get('/', (req, res) => {
    res.send('./public/index.html');
})

app.use('/myhome', minheimRouter);

app.use('/recepies', recipiesRouter);

/*
    Middleware
*/


/*
    DB initial settup
*/

