const sequelize = require();
const {DataTypes, Model} = require('sequelize');
class Themes extends Model {
    //TODO
    };
    
    Themes.init (
        {
            title: DataTypes.STRING,
            date: DataTypes.TIMESTAMP,
            owner: DataTypes.STRING
        },
        {
            sequelize,
            tableName: 'theme'
        }
    );
    
    module.exports = Themes;