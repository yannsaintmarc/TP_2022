const sequelize = require();
const {DataTypes, Model} = require('sequelize');

class User extends Model {
    getFullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

User.init(
    {
        password : DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        adress: DataTypes.STRING,
        email: {type: DataTypes.STRING, validate: {isEmail: true}},
        phone: DataTypes.NUMBER,
        creationDate: DataTypes.TIMESTAMP,
        socialNetwork: DataTypes.STRING
    },
    {
        sequelize,
        tableName: 'user'
    }
);

module.exports = User;