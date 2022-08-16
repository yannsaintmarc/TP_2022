require('dotenv').config();

/** serveur */
const express = require ('express');

/** router */
const router = require ('./app/routers/router');

/** create express serveur */
const app = express();

/** connexion client */
const client = require('../data/database');

/** sessions */
const session = require ('express-session');

app.use(express.json());
app.use(router);

/** view engine */
app.set('view engine', 'ejs');
app.set('views', './views');

/** PORT listening */
app.listen(process.env.PORT || 3000, () => {
    console.log('Running on :', process.env.PORT);
});