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

// creation d'un objet "Theme2Workspace" pour gérer l'association des deux tables "themes" et "workspace"

const Theme2Workspace = sequelize.define('ManyToMany_Theme2Workspace', {}, {
    udatedAt: false,
    tableName: 'ManyToMany_Theme2Workspace'
})

// un theme dépend d'un ou plusieurs espaces de travail

Themes.belongsToMany(Workspace, {
    through: Theme2Workspace,
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

// creation d'un objet "Media2Theme" pour gérer l'association des deux tables "media" et "themes"

const Media2Theme = sequelize.define('ManyToMany_Media2Theme', {}, {
    udatedAt: false,
    tableName: 'ManyToMany_Media2Theme'
})

//un média est rattaché à un ou plusieurs themes

Medias.belongsToMany(Themes, {
    through: Media2Theme,
    foreignKey: 'media_id',
    otherKey: 'theme',
    as: 'theme'
});

// un média peut détenir plusieurs ressources

Medias.hasMany(Ressources, {
    foreignKey: 'ressources_id',
    as: 'ressources'
});

// creation d'un objet "Ressources2Media" pour gérer l'association des deux tables "ressources" et "media"

const Ressources2Media = sequelize.define('ManyToMany_Ressources2Media', {}, {
    udatedAt: false,
    tableName: 'ManyToMany_Ressources2Media'
})

// une ressource peut être rattachée à plusieurs médias

Ressources.belongsToMany(Medias, {
    through: Ressources2Media,
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