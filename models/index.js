'use strict';

const fs = require("fs")
const path = require("path")
const Sequelize = require('sequelize');
require('dotenv').config();
const basename = path.basename(__filename);

const db = {};
const sequelize = new Sequelize(
  {
    database: process.env.DB_ADRESSER,
    username: process.env.DB_USER_ADRESSER,
    password: process.env.DB_PASSWORD_ADDRESSER,
    host: process.env.DB_HOST_ADRESSER,
    dialect: 'mysql',
    logging: false,
    define: {
      underscored: false,
      freezeTableName: true,
      charset: 'utf8',
      timestamps: false
    },
    sync: {
      force: false,
      alter: false,
      logging: false
    }
  });


fs.readdirSync(__dirname).filter(file => {
  return (file.indexOf('.') !== 0) && (file !== basename) &&
    (file.slice(-3) === '.js');
})
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize.sync();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;