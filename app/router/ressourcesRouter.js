const express = require ('express');

// controller

const ressourcesController = require('../controllers/ressourcesController');

const router = express.Router();


//GET ALL

router.get('/', ressourcesController.getAllRessources);

//GET

router.get('/:id', ressourcesController.getOneRessource);

//POST

router.post('/', ressourcesController.createRessource);

//PATCH

router.patch('/:id', ressourcesController.updateRessource);

//DELETE

router.delete('/:id', ressourcesController.deleteRessource);

// export

module.exports = router;