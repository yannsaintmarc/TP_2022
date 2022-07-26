/** models */

const Users= require('./users');
const Workspace = require('./workspace');
const Themes = require('./themes');
const Medias = required('./medias')
const Ressources = require('./ressources');

/** relations */

Users.hasMany(Workspace, {
    foreignKey: 'user_id',
    as: 'user'
});

Users.hasMany(Themes, {
foreignKey: 'user_id',
as: 'user'
});

Users.hasMany(Medias, {
    foreignKey: 'user_id',
    as: 'user'
});

Workspace.belonTo(User, {
        foreignKey: 'workspace_id',
        as: 'user'
});

Workspace.hasMany(Themes, {
            foreignKey: 'Themes_id',
            as: 'themes'
});       

Themes.belongTo(Workspace, {
    foreignKey: 'workspace_id',
    as: 'workspace'
});

Themes.hasMany(Medias, {
    foreignKey: 'medias_id',
    as: 'medias'
});

Medias.belongTo(Themes, {
    foreignKey: 'themes_id',
    as: 'themes'
});

Medias.hasMany(Ressources, {
    foreignKey: 'ressources_id',
    as: 'ressources'
})

Ressources.belongTo(Medias, {
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