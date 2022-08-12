
const { Workspace, Themes } = require('../models');

module.exports = {

//GET ALL WORKSPACES

    async getAllWorkspace(_req,res,next) {
        try {
            const getWorkspace = await Workspace.findAll(
                {
                include:
                    [
                    'titleWorkspace',
                    'day',
                    'owner',
                    'workspace_presentation'
                    ]
                }    
            );
            res.json({ data: getWorkspace });
        } catch (error) {
        next (error);
        }
    },

//POST WORKSPACE

   async createWorkspace (req,res) {
    const WorkspaceData = {
                    titleWorkspace: req.body.titleWorkspace,
                    owner: req.body.owner,
                    workspace_presentation: req.body.workspace_presentation
                };
        try {
           const newWorkspace = await Workspace.create(WorkspaceData);
           res.statut(201).json({data: newWorkspace })
        } catch (error) {
        console.error(error);
        };
    },

//PATCH WORKSPACE

     async updateWorkspace(req,res) {
        try {
            const WorkspaceId = req.params.id;
            const updatedWorkspace = await Workspace.findByPK(WorkspaceId);
            res.json({ data: updatedWorkspace});
            if(updatedWorkspace) {
                await updatedWorkspace.update(req.body);
                return response.json(updatedWorkspace);
            }
        } catch (error) {
        console.error(error);
        };
    },

//DELETE WORKASPACE

    async deleteWorkspace(req,res) {
        try {
            // verify if existing themes in Workspace

            const containingTheme = await Themes.findAll();
            if (containingTheme) {
                res.json({Error})
            } else {
                next(error)
            }

            // it's OK, let's go on
            
            const WorkspaceId = req.params.id;
            const deletedWorkspace = await Workspace.findByPk(WorkspaceId);
            if (!deletedWorkspace){
                res.status(404).json({errors: "no workspace found"});
                return;
            }

            await deletedWorkspace.destroy();
            req.json({ status: "workspace erased" });
            
        } catch (error) {
        console.error(error);
        }
    }

};