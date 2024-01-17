const { Model, DataTypes } = require('sequelize');

export default class ForNavn extends Model { 
    static associate(models) {
        this.hasMany(Bruker);
    }
};

ForNavn.init({
    navn: {
        type: DataTypes.STRING,
        require: true,
        unique: true
    }   
},{
    sequelize,
    modelName: 'ForNavn'
});