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

app.use('/recepies', recipiesRouter);

/*
    Middleware
*/

/*
    DB settup
*/
const minHeimConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_TARGET,
    // socketPath: '/var/run/mysqld/mysqld.sock'
});

minHeimConnection.connect(function (err) {
    if (err) return console.error('Error:', err.message);
    console.log(`Connected to DB ${process.env.DB_TARGET}`);
})