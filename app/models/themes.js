const sequelize = require('../data/database');
const { DataTypes, Model } = require('sequelize');
class Themes extends Model {
 // on affiche le titre de theme, la date, un présentattion et un image   
getTheme () {
    return `${this.titleTheme}
            ${this.day}
            ${this.image}
            ${this.theme_presentation}`;
}
    };


    
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