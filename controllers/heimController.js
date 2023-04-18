const dotenv = require('dotenv');
const mysql = require('mysql');

/*
    DB settup
*/
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    // database: process.env.DB_MINHEIM,  // If not specified, then we can create the db
    // socketPath: '/var/run/mysqld/mysqld.sock' // for debugging 
});

const CloseDB = connection.end((err) => {
    if (err) console.error(err);
    console.log(`Database ${process.env.DB_MINHEIM} Disconected`);
});

connection.connect(function (err) {
    if (err) return console.error('Error:', err.message);
    console.log(`Connected to DB ${process.env.DB_TARGET}`);    
})

/*
    Functions
*/

exports.index = (req, res, next) => {
    let catchNonExistentDB = `CREATE DATABASE vartkjokken_minheim`;
    connection.query(catchNonExistentDB, (err, res) => {
        if (err) console.error(err);
        console.log(result);
    });
    res.send('Heim ikkje implimentert endå')
};

exports.insertNewItem = (req, res, next) => {
    let statement = `INSERT INTO ${req.data.table} SET ?`;
    connection.query(statement, req.data.data, (err, res, fields) => {
        if (err) console.error(err.message);

    });
};



const CreateNewItem = (dataObject, callback) => {
    connection.connect((err) => {
        if (err) return callback(err)

        // Catch nonexistent tables
        connection.query(`CREATE TABLE IF NOT EXISTS varegrupper (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(50),
            PRIMARY KEY (id)
        )`, (err, res, fields) => {
            if (err) console.error(err);
        });

        connection.query(`CREATE TABLE IF NOT EXISTS gjenstander (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            PRIMARY KEY (id),
            FOREIGN KEY (varegruppe)
                REFERENCES varegrupper (id)
        )`, (err, res, fields) => {
            if (err) console.error(err);
        });

        connection.query(`CREATE TABLE IF NOT EXISTS prishistorikk (
            id INT NOT NULL AUTO_INCREMENT,
            pris INT NOT NULL,
            dato DATE,
            PRIMARY KEY (id),
            FOREIGN KEY (vare_gjenstand)
                REFERENCES gjenstander (id)
        )`, (err, res, fields) => {
            if (err) console.error(err);
        });

        if (dataObject.varegruppe) {
            let varegruppe = `INSERT INTO varegrupper(name) VALUES(${dataObject.varegruppe})`;
            connection.query(varegruppe);
        }
        if (dataObject.gjenstand) {
            let gjenstand = `INSERT INTO varegrupper(name, varegruppe) VALUES(${dataObject.gjenstand})`;
            connection.query(gjenstand);
        }
        if (dataObject.pris) {
            let pris = `INSERT INTO varegrupper(name, vare_gjenstand) VALUES(${dataObject.pris})`;
            connection.query(pris);
        }
    })
}