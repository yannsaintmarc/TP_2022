const sequelize = require();
const {} = require('sequelize');

class Ressources extends Model {
    //TODO
    };
    
    Ressources.init (
        {
            title: DataTypes.STRING,
            date: DataTypes.TIMESTAMP,
            link: DataTypes.STRING
        },
        {
            sequelize,
            tableName: 'ressources'
        }
    );
    
    module.exports = Ressources;