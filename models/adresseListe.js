const { Model, DataTypes } = require('sequelize');

class AdresseListe extends Model {
    // static associate(models) {
    //     this.hasOne(Bruker);
    //     this.hasOne(Postnummer);
    //     this.hasOne(Fylke);
    //     this.hasOne(By);
    //     this.hasOne(Gate);
    // }
};

AdresseListe.init({
    husnummer: {
        type: DataTypes.NUMBER,
        require: true
    },
    husbokstav: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'AdresseListe',
    tableName: 'adresseListe'
});

module.exports = AdresseListe;
