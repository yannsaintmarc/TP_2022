const { Workspace } = require('../models/workspace');
const { Errors } = require('../models/error');



const createWorkspaceController = {
/** affichage du formulaire de création d'un espace de travail */

showWorkspaceForm : (req,res,next) => {
    
        res.render('createWorkspace');
    },

handleWorkspaceForm : async (req,res,next) => {
            try {
                const createWorkspaceForm = await createWorkspaceForm.createWorkspace(
                    {
                    include:
                        [
                            'titleWorkspace',
                            'introducing'
                        ]
                    }    
                );
                res.render('createWorkspace', {data: Workspace});
            } catch (error) {
                console.log(error);
                res.status(500).send(error);/** à revoir : penser à faire une view !!! */
                    }
        }
    };
    //middleware d'erreurs 
    { Errors } (req, res) => {
        res.status(404).render('404');
    };


module.exports = createWorkspaceController;