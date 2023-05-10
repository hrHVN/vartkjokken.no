const { Model, DataTypes } = require('sequelize');

export default class Brukar extends Model { };

Brukar.init({
    brukerNavn: {
        type: DataTypes.STRING,
        require: true,
        unique: true
    },
    epost: {
        type: DataTypes.STRING,
        require: true,
        unique: true,
        validate: {
            
        }
    } 
},{
    sequelize,
    modelName: 'brukar'
});