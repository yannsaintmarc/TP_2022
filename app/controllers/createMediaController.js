const { Medias } = require('../models/medias');
const { errorController } = require('../models/error');


const createMediaController = {
    /** affichage du formulaire de création d'un média */

    showMediaForm : (req,res,next) => {
    
        res.render('createMedia');
    
    },

    handleMediaForm : async (req,res,next) => {
            try {
                const createMediaForm = await createMediaForm.createMedia(
                    {
                    include:
                        [
                            'titleMedia',
                            'introducing',
                            'addAuthor',
                            'addMaterial',
                            'addSize',
                            'addWeight',
                            'addFile',
                            'addRessource'
                        ]
                    }    
                );
                res.render('createMedia', {data: Medias});
            } catch (error) {
                console.log(error);
                res.status(500).send(error);/** à revoir : penser à faire une view !!! */
                    }
        }

    };
    /** TODO : un controller d'erreurs */
    { errorController } (req, res) => {
        res.status(404).render('404');
    };


module.exports = createMediaController;