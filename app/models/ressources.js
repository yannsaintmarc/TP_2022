const sequelize = require('../database');
const {DataTypes, Model} = require('sequelize');

class Ressources extends Model { };
    
    Ressources.init (
        {
            titleRessources: DataTypes.TEXT,
            day: DataTypes.DATE,
            link: DataTypes.TEXT
        },
        {
            sequelize,
            tableName: 'ressources'
        }
    );
    
    module.exports = Ressources;