const express = require ('express');

/** controllers */

const authController = require ('./controllers/authController');
const mainController = require ('./controllers/mainController');
const profileController = require ('./controllers/profileController');
const workspaceController = require ('./controllers/workspaceController');
const themeController = require ('./controllers/themeController');
const mediaController = require ('./controllers/mediaController');
const createWorkspaceController = require ('./controllers/createWorkspaceController');
const createThemeController = require ('./controllers/createThemeController');
const createMediaController = require ('./controllers/createMediaController');
/** const containXXX = require ('./controllers/containXXX'); */

const router = express.Router();

/** Middlewares */

const userToLocals = require('./middlewares/userToLocals');
const isConnected = require('./middlewares/isConnected');

/** keep users connected */

router.use( userToLocals);

/** main controller */

router.get( '/', mainController.index );

/** signup */

router.get( './signup', authController.showLoginForm );
router.post( './signup', authController.handleLoginForm );

/** Workspace */

router.get('./createWorkspace', createWorkspaceController.showWorkspaceForm );
router.set('./createWorkspace', createWorkspaceController.handleWorkspaceForm );

/** Themes */

router.get('./createTheme', createThemeController.showThemeForm);
router.set('./createTheme', createThemeController.handleThemeForm );

/** Medias */

router.set('./createMedia', createMediaController.showMediaForm);
router.get('./createMedia', createMediaController.handleMediaForm);

/** Users */

router.get( './userProfile', isConnected, profileController.userProfile );
router.get( './workspace', workspaceController.workspace );
router.get( './themes', themeController.themes );
router.get('./medias', mediaController.medias );

/** 404 */

router.use( mainController, notFound);

module.exports = router;