const { Themes } = require('../models/themes');
const { Errors } = require('../models/error');

const  workspaceController = {
    // on veut afficher l'espace de travail avec un liste des thèmes et leur date et une présentattion
    Workspace: async (_req,res) => {
        try {
            const getThemeList = await getThemeList.findAll(
                {
                include:
                    [
                    'titleTheme',
                    'day',
                    'image',
                    'presentation'
                    ]
                }    
            );
            res.json({data: themes});
        } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
        };
    }

};

{ Errors } (_req, res) => {
    res.status(404).json('404');
};

module.exports = workspaceController;