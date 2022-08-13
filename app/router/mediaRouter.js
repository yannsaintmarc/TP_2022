const express = require ('express');

// controller

const mediaController = require('../controllers/mediaController');

const router = express.Router();

//GET ALL

router.get('/', mediaController.getAllMedias);

//GET 

router.get('/:id', mediaController.getOneMedia);

//POST

router.post('/', mediaController.createMedia);

//PATCH

router.patch('/:id', mediaController.updateMedia);

//DELETE

router.delete('/:id', mediaController.deleteMedia);

// export

module.exports = router;