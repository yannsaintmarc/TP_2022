const express = require ('express');

// liste de routers

const userRouter = require('./userRouter');
const workspaceRouter = require('./workspaceRouter');
const themeRouter = require('./themeRouter');
const ressourcesRouter = require('./ressourcesRouter');
const mediaRouter = require('./mediaRouter');

// middlewares

const errorMiddleware = require('../middlewares/errorMiddleware');
const secuMiddleware = require('../middlewares/secuMiddleware');

const router = express.Router();

// security middleware

router.use(secuMiddleware.corsMiddleware);
router.use(secuMiddleware.xssMiddleware);

// prefix urls

router.use('/user', userRouter);
router.use('/workspace', workspaceRouter);
router.use('/theme', themeRouter);
router.use('/media', mediaRouter);
router.use('/ressources', ressourcesRouter);

// activate errorMiddleware

router.use(errorMiddleware.errorMiddleware);


module.exports = router;