const sequelize = require();
const {DataTypes, Model} = require('sequelize');

class Workspace extends Model {
//TODO
//on affiche le titre
// on affiche le nom du createur de l'espace de travail
//on affiche la liste des cartes de thèmes
/** si l'utlisateur est connecté:
 * on   ffiche le bouton "ajouter un thème"
 * on affiche le bouton "supprimer un thème */
};

Workspace.init (
    {
        title: DataTypes.STRING,
        date: DataTypes.TIMESTAMP,
        owner: DataTypes.OWNER
    },
    {
        sequelize,
        tableName: 'workspace'
    }
);

module.exports = Workspace;