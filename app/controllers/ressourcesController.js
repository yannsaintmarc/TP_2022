// on veut afficher une liste de médias avec un titre une date, et une image
const { Ressources } = require('../models/ressources');
const { Errors } = require('../middlewares/errorMiddleware');

module.exports = {
    async getAllRessources(req,res,next) {
    try {
        const RessourcesList = await RessourcesList.findAll(
        {
        include:
            [
            'titleressources',
            'type',
            'link'
            ]
        }    
    );
    res.json({data: Ressources});
} catch (error) {
    console.error(error);
    res.status(500).send(error.message);
        }
    }
};

{ Errors } (_req, res) => {
    res.status(404).json('no ressources found here');
};