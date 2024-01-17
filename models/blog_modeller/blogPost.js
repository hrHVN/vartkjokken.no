const { Model, DataTypes } = require('sequelize');

class Tabell extends Model {
    static associate(models) {
        /**
         * Ein blog..
         * har ein forfatter
         * kan ha eit produkt
         * kan ha fleire allergen som tags
         */
        this.belongsTo(Bruker);
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