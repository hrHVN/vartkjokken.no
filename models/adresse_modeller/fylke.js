const { Model, DataTypes } = require('sequelize');
export default class Fylke extends Model {
    static associate(models) {
        this.hasMany(By);
    }
 };

Fylke.init({
    navn: {
        type: DataTypes.STRING,
        require: true,
        unique: true
    }   
},{
    sequelize,
    modelName: 'Fylke'
});