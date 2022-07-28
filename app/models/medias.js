const sequelize = require();
const {} = require('sequelize');

class Medias extends Model {
    //TODO
    };
    
    Medias.init (
        {
            author: DataTypes.STRING,
            date: DataTypes.TIMESTAMP,
            type: DataTypes.STRING,
            material: DataTypes.STRING,
            size: DataTypes.NUMBER,
            weigth: DataTypes.NUMBER
        },
        {
            sequelize,
            tableName: 'media'
        }
    );
    
    module.exports = Medias;