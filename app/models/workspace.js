const sequelize = require('../data/database');
const {DataTypes, Model} = require('sequelize');

class Workspace extends Model {};

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