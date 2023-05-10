const { Model, DataTypes } = require('sequelize');

class Rolle extends Model {};

Rolle.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize, // We need to pass the connection instance
    modelName: 'rolle' // We need to choose the model name
});