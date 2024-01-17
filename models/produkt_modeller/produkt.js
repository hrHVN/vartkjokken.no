const { Model, DataTypes } = require('sequelize');

class Tabell extends Model {
    static associate(models) {
        /**
         * eit produkt..
         * kan ha fleire framgangsmåter
         * kan ha fleire allergen
         * har fleire instruksjoner
         */
    }
};

Tabell.init({
    navn: {
        type: DataTypes.STRING,
        require: true,
        unique: true
    }
}, {
    sequelize,
    modelName: 'Tabell',
    tableName: 'tabell'
});

module.exports = Tabell;