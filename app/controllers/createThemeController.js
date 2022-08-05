const { Themes } = require('../models/theme');
const { errorController } = require('../models/error');



const createThemeController = {
/** affichage du formulaire de création d'un thème */

    showThemeForm : (req,res,next) => {
    
        res.render('createTheme');
    
    },

    handleThemeForm : async (req,res,next) => {
            try {
                const createThemeForm = await createThemeForm.createTheme(
                    {
                    include:
                        [
                            'titleTheme',
                            'addMedia',
                            'addRessource',
                            'addSocialMedia',
                        ]
                    }    
                );
                res.render('createMedia', {data: Themes});
            } catch (error) {
                console.log(error);
                res.status(500).send(error);/** à revoir : penser à faire une view !!! */
                    }
        }

    };
    //TODO : un controller d'erreurs 
    { errorController } (req, res) => {
        res.status(404).render('404');
    };


module.exports = createThemeController;