const sequelize = require('../data/database');
const {DataTypes, Model} = require('sequelize');

class Ressources extends Model { };
    
    Ressources.init (
        {
            titleRessources: DataTypes.TEXT,
            day: DataTypes.TIMESTAMPZ,
            link: DataTypes.TEXT
        },
        {
            sequelize,
            tableName: 'ressources'
        }
    );
    
    module.exports = Ressources;