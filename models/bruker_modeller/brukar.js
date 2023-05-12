const { Model, DataTypes } = require('sequelize');

export default class Brukar extends Model {
    static associate(models) {
        this.belongsTo(Passord);
        this.belongsToMany(Adresse, { through: 'AdresseListe' });
        this.belongsTo(Role);
        this.belongsTo(Fornavn);
        this.belongsTo(etternavn);
    }
};

Brukar.init({
    brukerNavn: {
        type: DataTypes.STRING,
        require: true,
        unique: true
    },
    epost: {
        type: DataTypes.STRING,
        require: true,
        unique: true,
        validate: {
            isEmail: true
        }
    }
}, {
    sequelize,
    modelName: 'Brukar'
});