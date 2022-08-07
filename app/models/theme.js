const sequelize = require('../data/database');
const { DataTypes, Model } = require('sequelize');

class Themes extends Model { };

    Themes.init (
        {
            titleTheme: DataTypes.TEXT,
            day: DataTypes.TIMESTAMPZ,
            image: DataTypes.TEXT,
            theme_presentation: DataTypes.TEXT
        },
        {
            sequelize,
            tableName: 'theme'
        }
    );
    
    module.exports = Themes;