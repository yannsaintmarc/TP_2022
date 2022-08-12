const express = require('express');

// controller

const workspaceController = require('../controllers/workspaceController');

const router = express.Router();

// routes:
//GET
router.get('/:id', workspaceController.getAllWorkspace;

//POST
router.post('/', workspaceController.createWorkspace);

//PATCH
router.patch('/:id', workspaceController.updateWorkspace);

//DELETE
router.patch('/:id', workspaceController.deleteWorkspace);

// associate:
//TODO : créer les associations entre thème et Workspace

// export

module.exports = router;