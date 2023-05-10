const mysql = require('mysql');
import DatabaseController from './databaseController.js';


/*
    DB settup
*/
const MinHeim = new DatabaseController(mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    // database: process.env.DB_MINHEIM,  // If not specified, then we can create the db
    // socketPath: '/var/run/mysqld/mysqld.sock' // for debugging 
    })
);


/*
    Functions
*/

exports.index = (req, res, next) => {
    MinHeim.getAll()
    res.send('Heim ikkje implimentert endå')
};

exports.insertNewItem = (req, res, next) => {

};
