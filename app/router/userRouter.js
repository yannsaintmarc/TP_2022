const express = require ('express');

// controller

const userController = require('../controllers/userController');

const router = express.Router();

// routes:
//GET
router.get('/', userController.getUserProfile);
//POST //PATCH //DELETE

// export 
module.exports = router;