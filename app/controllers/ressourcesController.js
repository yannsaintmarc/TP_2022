// on veut afficher une liste de médias avec un titre une date, et une image
const { Ressources } = require('../models');

module.exports = {

// GET ALL RESSOURCES

    async getAllRessources(_req,res,next) {
    try {
        const RessourcesList = await Ressources.findAll(
        {
        include:
            [
            'titleressources',
            'type',
            'link'
            ]
        }    
    );
    res.json({data: RessourcesList});
} catch (error) {
    console.error(error);
    res.status(500).send(error.message);
        }
    },

// GET RESSOURCE

    async getOneRessource(_req,res,next) {
        try{
                const Ressource = await Ressources.findByPk(
                {
                      include:
                    [
                    'titleRessource',
                    'type',
                    'link'
                    ]
                }
                    );
     
                    res.json({ data: Ressource });
         
            } catch (error) {
                next(error);
            };
    },

// POST RESSOURCES

    async createRessource(req,res,next) {

        const RessourceData = {
            titleRessource: req.body.titleRessource,
            type:req.body.type,
            link:req.body.link
    };
        try {
            const newRessource = await Ressources.create(RessourceData);
            res.status(201).json({data: newRessource})
        } catch(error) {
            next(error);
        };   
    },

// PATCH RESSOURCE

    async updateRessource(req,res,next) {
        try {
            const RessourceId = req.params.id;
            const updatedRessource = await Ressources.findByPK(RessourceId);
            res.json({ data: updatedRessource});
            if(updatedRessource) {
                await updatedRessource.update(req.body);
                return response.json(updatedRessource);
            }
        } catch(error) {
            next(error);
        };
    },

// DELETE RESSOURCE

    async deleteRessource(req,res,next) {
        try {
            // verify if existing ressources

            const containingRessources = await Ressources.findAll();
            if (containingRessources) {
                res.json({Error})
            } else {
                next(error)
            }

            // it's OK, let's go on

            const RessourceId = req.params.id;
            const deletedRessource = await Ressources.findByPk(RessourceId);
            if (!deletedRessource){
                res.status(404).json({errors: "no Ressource found"});
                return;
            }

            await deletedRessource.destroy();
            req.json({ status: "Ressource erased" });
            } catch (error) {
            console.error(error); 
        };
    
        
    }


};