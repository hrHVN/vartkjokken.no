const { Model, DataTypes } = require('sequelize');

class ByGater extends Model {
    // static associate(models) {
    //     this.hasOne(By);
    //     this.hasOne(GateNavn);
    // }
};

ByGater.init({

}, {
    sequelize,
    modelName: 'ByGater',
    tableName: 'bygater'
});

module.exports = ByGater;