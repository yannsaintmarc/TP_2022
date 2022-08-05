const sequelize = require('../data/database');
const { DataTypes, Model } = require('sequelize');

class Medias extends Model {
    //afficher les médias en détail
    getlMedia () {
        return `${this.titlemedia}
                ${this.theme_presentation}
                ${this,day}
                ${this.image}
                ${this.type}
                ${this.material}
                ${this.size}
                ${this.weigth}
                ${this.ressources}`;
        }
    };
    
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