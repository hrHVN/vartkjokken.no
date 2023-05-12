const { Model, DataTypes } = require('sequelize');

class Rolle extends Model {
    static associate(models) {
        this.hasMany(Bruker);
    }
};

Rolle.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize, // We need to pass the connection instance
    modelName: 'Rolle' // We need to choose the model name
});