const sequelize = require('../data/database');
const {DataTypes, Model} = require('sequelize');

class Workspace extends Model {
//TODO
//on affiche le titre
// on affiche le nom du createur de l'espace de travail
//on affiche une présentatton

getWorkspace () {
    return `${this.titleWorkspace}
            ${this.owner}
            ${this.day}
            ${this.workspace_presentation}`
            ;
}

//on affiche la liste des fiches de thèmes

getThemeList () {
    //TODO : afficher la liste des fiches de themes
    return `${this.titleTheme}
            ${this.image}`;
}
/** si l'utlisateur est connecté:
 * on affiche le bouton "ajouter un thème"
 * on affiche le bouton "supprimer un thème */

};

Workspace.init (
    {
        titleWorkspace: DataTypes.TEXT,
        day: DataTypes.TIMESTAMPZ,
        owner: DataTypes.TEXT,
        workspace_presentation: DataTypes.TEXT
    },
    {
        sequelize,
        tableName: 'workspace',
        tableName: 'theme'
    }
);

module.exports = Workspace;