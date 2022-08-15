const sequelize = require('../database');
const {DataTypes, Model} = require('sequelize');

class Workspace extends Model {};

Workspace.init (
    {
        titleWorkspace: DataTypes.TEXT,
        day: DataTypes.DATE,
        owner: DataTypes.TEXT,
        workspace_presentation: DataTypes.TEXT
    },
    {
        sequelize,
        tableName: 'workspace'
    }
);

module.exports = Workspace;