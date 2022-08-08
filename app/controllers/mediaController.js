const { Medias } = require('../models/media');
const { Errors } = require('../middlewares/errorMiddleware');

module.exports = {
    async getOneMedia(req,res) {
        try{
            const cardMedia = await cardMedia.findByPk(
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
 
            res.json({ data: Medias });
 
     } catch (error) {
 console.logerror(error);
 res.status(500).send(error);/** à revoir : penser à faire une view !!! */
     }
 }
 };
 
 { Errors } (req, res) => {
     res.status(404).json('404');
 };