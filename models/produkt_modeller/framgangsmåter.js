const { Model, DataTypes } = require('sequelize');

class Framgangsmåte extends Model {
    static associate(models) {
        /**
         * Framgangsmåter høyrer til eit produkt
         */
        this.belongsTo()
    }
};

Framgangsmåte.init({
    navn: {
        type: DataTypes.STRING,
        require: true,
        unique: true
    }
}, {
    sequelize,
    modelName: 'Framgangsmåte',
    tableName: 'framgangsmåter'
});

module.exports = Framgangsmåte;