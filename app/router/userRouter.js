const express = require ('express');

// controller

const userController = require('../controllers/userController');

const router = express.Router();

// routes:
//GET
router.get('/:id', userController.userProfile);

//POST
router.post('/', userController.createUser);

//PATCH
router.patch('/:id', userController.updateUser);

//DELETE
router.patch('/:id', userController.deleteUser);

// export 
module.exports = router;