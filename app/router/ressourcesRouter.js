const express = require ('express');

// controller

const ressourcesController = require('../controllers/ressourcesController');

const router = express.Router();

// routes GET POST PATCH DELETE

//GET

router.get('/', ressourcesController.getAllRessources);

router.get('/:id', ressourcesController.getOneRessource);

//POST
router.post('/', ressourcesController.createRessource);

//PATCH
router.patch('/:id', ressourcesController.updateRessource);

//DELETE
router.delete('/:id', ressourcesController.deleteRessource);

// export

module.exports = router;