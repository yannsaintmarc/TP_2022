const sequelize = require('../data/database');
const { DataTypes, Model } = require('sequelize');

class Medias extends Model { };
    
    Medias.init (
        {
            author: DataTypes.TEXT,
            day: DataTypes.TIMESTAMPZ,
            type: DataTypes.TEXT,
            material: DataTypes.TEXT,
            size: DataTypes.INTEGER,
            weigth: DataTypes.INTEGER
        },
        {
            sequelize,
            tableName: 'media'
        }
    );
    
    module.exports = Medias;