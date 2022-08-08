const sequelize = require('../database');
const { DataTypes, Model } = require('sequelize');

class Themes extends Model { };

    Themes.init (
        {
            titleTheme: DataTypes.TEXT,
            day: DataTypes.DATE,
            image: DataTypes.TEXT,
            theme_presentation: DataTypes.TEXT
        },
        {
            sequelize,
            tableName: 'theme'
        }
    );
    
    module.exports = Themes;