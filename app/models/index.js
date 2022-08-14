const User = require('./user');
const Workspace = require('./workspace');
const Themes = require('./theme');
const Medias = require('./media');
const Ressources = require('./ressources');
const sequelize = require('../database');

/** relations */

// un utilisateur peut avoir plusieurs espaces de travail
User.hasMany(Workspace, {
    foreignKey: 'user_id',
    as: 'users'
});

// un espace de travail n'a qu'un seul utilisateur
Workspace.belongsTo(User, {
        foreignKey: 'user_id',
        as: 'users'
});

// un espace de travail contient plusieurs themes
Workspace.hasMany(Themes, {
            foreignKey: 'Themes_id',
            as: 'theme'
});

// creation d'un objet "containtheme" pour gérer l'association des deux tables "themes" et "workspace"

const containtheme = sequelize.define('containtheme', {}, {
    udatedAt: false,
    tableName: 'containtheme'
})

// un theme dépend d'un ou plusieurs espaces de travail

Themes.belongsToMany(Workspace, {
    through: containtheme,
    foreignKey: 'theme_id',
    otherKey: 'workspace_id',
    as: 'workspace'
});

// un theme contient plusieurs médias

Themes.hasMany(Medias, {
    foreignKey: 'media_id',
    as: 'media'
});

// theme contient plusieurs ressources

Themes.hasMany(Ressources, {
    foreignKey: 'ressources_id',
    as: 'ressources'
});

// creation d'un objet "containtheme" pour gérer l'association des deux tables "media" et "themes"

const containmedia = sequelize.define('containmedia', {}, {
    udatedAt: false,
    tableName: 'containmedia'
})

//un média est rattaché à un ou plusieurs themes

Medias.belongsToMany(Themes, {
    through: containmedia,
    foreignKey: 'media_id',
    otherKey: 'theme',
    as: 'theme'
});

// un média peut détenir plusieurs ressources

Medias.hasMany(Ressources, {
    foreignKey: 'ressources_id',
    as: 'ressources'
});

// creation d'un objet "containressources" pour gérer l'association des deux tables "ressources" et "media"

const containressources = sequelize.define('containressources', {}, {
    udatedAt: false,
    tableName: 'containressources'
})

// une ressource peut être rattachée à plusieurs médias

Ressources.belongsToMany(Medias, {
    through: containressources,
    foreignKey: 'ressources_id',
    otherKey: 'media_id',
    as: 'ressources'
});


module.exports = {
User,
Workspace,
Themes,
Medias,
Ressources,
}