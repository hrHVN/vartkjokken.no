const { Model, DataTypes } = require('sequelize');

export default class ForNavn extends Model { };

ForNavn.init({
    navn: {
        type: DataTypes.STRING,
        require: true,
        unique: true
    }   
},{
    sequelize,
    modelName: 'forNavn'
});