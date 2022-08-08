const { Themes } = require('../models/theme');
const { Errors } = require('../middlewares/errorMiddleware');

const  workspaceController = {
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
            res.json({data: Themes});
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