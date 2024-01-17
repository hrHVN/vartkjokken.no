const { Model, DataTypes } = require('sequelize');

export default class GateNavn extends Model { static associate(models) {
    this.belongsToMany(By, { through: 'ByGater'});
}};

GateNavn.init({
    navn: {
        type: DataTypes.STRING,
        require: true,
        unique: true
    }   
},{
    sequelize,
    modelName: 'Gate'
});
