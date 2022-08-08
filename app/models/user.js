const sequelize = require('../database');
const { DataTypes, Model } = require('sequelize');

class User extends Model {}

User.init( 
    {
        firstname: DataTypes.TEXT,
        lastname: DataTypes.TEXT,
        adress: DataTypes.TEXT,
        town: DataTypes.TEXT,
        zipcode: DataTypes.INTEGER,
        email: {type: DataTypes.STRING, validate: {isEmail: true}},
        phone: DataTypes.INTEGER,
        creation_date: DataTypes.DATE,
        socialNetwork: DataTypes.TEXT,
        username: DataTypes.TEXT,
        password: DataTypes.TEXT
    },
    {
        sequelize,
        tableName: 'users'
    }
);

module.exports = User;