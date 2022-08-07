const sequelize = require('../data/database');
const {DataTypes, Model} = require('sequelize');

class Users extends Model { };

Users.init(
    {
        password : DataTypes.TEXT,
        firstname: DataTypes.TEXT,
        lastname: DataTypes.TEXT,
        adress: DataTypes.TEXT,
        town: DataTypes.TEXT,
        zipcode: DataTypes.INTEGER,
        email: {type: DataTypes.STRING, validate: {isEmail: true}},
        phone: DataTypes.INTEGER,
        creationDate: DataTypes.TIMESTAMPZ,
        socialNetwork: DataTypes.TEXT,
        username: DataTypes.TEXT,
        password: DataTypes.TEXT
    },
    {
        sequelize,
        tableName: 'users'
    }
);

module.exports = Users;