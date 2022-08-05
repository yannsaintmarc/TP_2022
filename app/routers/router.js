const express = require ('express');
//const { home } = require('./app/controllers/mainController');
const router = express.Router();

/** controllers */

const authController = require ('../controllers/authController');
const mainController = require ('../controllers/mainController');
const profileController = require ('../controllers/profileController');
const workspaceController = require ('../controllers/workspaceController');
const themeController = require ('../controllers/themeController');
const mediaController = require ('../controllers/mediaController');
const createWorkspaceController = require ('../controllers/createWorkspaceController');
const createThemeController = require ('../controllers/createThemeController');
const createMediaController = require ('../controllers/createMediaController');
//const errorController = require ('../controllers/errorController');
/** const containXXX = require ('./controllers/containXXX');


/** Middlewares */

const userToLocals = require('../middlewares/userToLocals');
const isConnected = require('../middlewares/isConnected');
const errors = require('../middlewares/errors');

/** keep users connected */

router.use( userToLocals);

/** main controller */

router.get( '/', mainController.home);

/** signup */

router.get( './signup', authController.showLoginForm );
router.post( './signup', authController.handleLoginForm ); 

/** Workspace */

router.get('./createWorkspace', createWorkspaceController.showWorkspaceForm );
router.post('./createWorkspace', createWorkspaceController.handleWorkspaceForm );

/** Themes */

router.get('./createTheme', createThemeController.showThemeForm);
router.post('./createTheme', createThemeController.handleThemeForm );

/** Medias */

router.get('./createMedia', createMediaController.showMediaForm);
router.post('./createMedia', createMediaController.handleMediaForm);

/** Creator */

router.get( '/creatorProfile', isConnected, profileController.getCreatorProfile );
router.get('/workspace', workspaceController.Workspace);
router.get('/theme', themeController.theme);
router.get('/medias', mediaController.medias);

/** 404 */

router.use( mainController);

module.exports = router;