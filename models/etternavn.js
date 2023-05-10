const { Model, DataTypes } = require('sequelize');

export default class EtterNavn extends Model { };

EtterNavn.init({
    brukerNavn: {
        type: DataTypes.STRING,
        require: true,
        unique: true
    }   
},{
    sequelize,
    modelName: 'etterNavn'
});