const { Model, DataTypes } = require('sequelize');
export default class By extends Model {
    static associate(models) {
        this.belongsTo(Fylke);
        this.belongsToMany(Gate, { through: 'ByGater' });
        this.hasMany(Postnummer);
    }
};

By.init({
    navn: {
        type: DataTypes.STRING,
        require: true,
        unique: true
    }
}, {
    sequelize,
    modelName: 'By'
});