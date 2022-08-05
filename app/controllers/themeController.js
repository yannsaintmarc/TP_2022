// on veut afficher une liste de médias avec un titre une date, et une image
const { Medias } = require('../models/medias');
const { Errors } = require('../models/error');

const themeController = {
    theme: async (req,res,next) => {
    try {
        const MediaList = await MediaList.findAll(
        {
        include:
            [
            'titleMedia',
            'day',
            'image'
            ]
        }    
    );
    res.render('theme', {data: Medias});
} catch (error) {
    console.error(error);
    res.status(500).send(error.message);
        }
    }
};

{ Errors } (_req, res) => {
    res.status(404).render('404');
};

module.exports = themeController;