const { Model, DataTypes } = require('sequelize');
export default class Postnummer extends Model {
    static associate(models) {
        this.belongsTo(By);
    }
 };

Postnummer.init({
    navn: {
        type: DataTypes.NUMBER,
        require: true,
        unique: true
    }   
},{
    sequelize,
    modelName: 'Postnummer'
});