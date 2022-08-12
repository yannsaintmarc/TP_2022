const express = require ('express');

// controller

const themeController = require('../controllers/themeController');

const router = express.Router();

// routes GET POST PATCH DELETE
//GET

router.get('/theme', themeController.getAllThemes);

router.get('/theme/:id', themeController.getOneTheme);

//POST
router.post('/theme/', themeController.createTheme);

//PATCH
router.patch('/theme/:id', themeController.updateTheme);

//DELETE
router.delete('/theme/:id', themeController.deleteTheme);


// export

module.exports = router;