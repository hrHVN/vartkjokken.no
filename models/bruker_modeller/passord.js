const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

export default class Passord extends Model {
    static associate(models) {
        this.hasMany(Bruker);
    }
 };

Passord.init({
    passord: {
        type: DataTypes.STRING,
        require: true,
        unique: true
    }
}, {
    sequelize,
    modelName: 'Passord',
    // experimentell
    hooks: {
        beforeCreate: async (passord) => {
            const salt = await bcrypt.genSaltSync(10, 'a');
            passord = bcrypt.hashSync(passord, salt);
        }
    },
    instanceMethods: {
        validPassword: (passord) => {
            return bcrypt.compareSync(passord, this.passord);
        }
    }
});

// experimentell
passordSchema.prototype.validPassword = async (password, hash) => {
    return await bcrypt.compareSync(password, hash);
}
return passordSchema;
