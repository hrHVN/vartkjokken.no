const { Model, DataTypes } = require('sequelize');

export default class EtterNavn extends Model { 
    static associate(models) {
        this.hasMany(Bruker);
    }
};

EtterNavn.init({
    brukerNavn: {
        type: DataTypes.STRING,
        require: true,
        unique: true
    }   
},{
    sequelize,
    modelName: 'EtterNavn'
});