const Users =require('./user');
const Workspace = require('./workspace');
const Themes = require('./themes');
const Medias = require('./medias');
const Ressources = require('./ressources');

const sequelize = require('../data/database');

/** relations */

// un utilisateur peut avoir plusieurs espaces de travail
User.hasMany(Workspace, {
    foreignKey: 'user_id',
    as: 'users'
});

// un espace de travail n'a qu'un seul utilisateur
Workspace.belongTo(User, {
        foreignKey: 'user_id',
        as: 'users'
});

// un espace de travail n'a plusieurs themes
Workspace.hasMany(Themes, {
            foreignKey: 'Themes_id',
            as: 'themes'
});     

// un theme dépend d'un ou plusieurs espaces de travail
Themes.belongToMany(Workspace, {
    foreignKey: 'workspace_id',
    as: 'workspace'
});

// un theme contient plusieurs médias
Themes.hasMany(Medias, {
    foreignKey: 'medias_id',
    as: 'medias'
});

// theme contient plusieurs ressources
Themes.hasMany(Ressources, {
    foreignKey: 'ressources_id',
    as: 'ressources'
});

//un média est rattaché à un ou plusieurs themes
Medias.belongToMany(Themes, {
    foreignKey: 'themes_id',
    as: 'themes'
});

// un média peut détenir plusieurs ressources
Medias.hasMany(Ressources, {
    foreignKey: 'ressources_id',
    as: 'ressources'
});

// une ressource peut être rattachée à plusieurs médias
Ressources.belongToMany(Medias, {
    foreignKey: 'medias_id',
    as: 'ressources'
});


module.exports = {
Users,
Workspace,
Themes,
Medias,
Ressources
}