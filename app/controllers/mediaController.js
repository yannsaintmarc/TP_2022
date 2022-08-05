const { Medias } = require('../models/medias');
const { Errors } = require('../models/error');

const mediaController= {
    medias: async (req,res) => {
        try{
            const cardMedia = await cardMedia.findById(
            {
                  include:
                [
                'titleMedia',
                'theme_presentation',
                'day',
                'image',
                'type',
                'material',
                'size',
                'weigth',
                'ressources'
                ]
            }

        );
 
            res.render('medias', {data: Medias});
 
     } catch (error) {
 console.logerror(error);
 res.status(500).send(error);/** à revoir : penser à faire une view !!! */
     }
 }
 };
 
 { Errors } (req, res) => {
     res.status(404).render('404');
 };

module.exports = mediaController;