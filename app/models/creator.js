const sequelize = require('../data/database');
const {DataTypes, Model} = require('sequelize');

class Creator extends Model {

    getCreatorProfile() {
        return `${this.firstname}
                ${this.lastname}
                ${this.avatar}
                ${this.adresse}
                ${this.town}
                ${this.zipcode}
                ${this.email}
                ${this.phone}
                ${this.day}
                ${this.socialNetwork}
        `;
    }

    getSignupForm () {
        return `${this.firstname}
                ${this.lastname}
                ${this.adresse}
                ${this.town}
                ${this.zipcode}
                ${this.email}
                ${this.phone}
                ${this.socialNetwork}
                ${this.username}
                ${this.password}
        `;
    }
}

Creator.init(
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
        tableName: 'creator'
    }
);

module.exports = Creator;