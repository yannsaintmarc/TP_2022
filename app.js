
require('dotenv').config();
const express = require ('express');
//const cors = require('cors');
const session =require ('express-session');
const router = require('./app/router');

const app = express();

app.use(express.json());
//app.use(cors('*'));

/** views engine */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/** statics files */
app.use(express.static('./app/public'));

/** sessions */
app.use(session({
    //password
    //save newSession
    //resave session
}));

//** routing */
app.use(router);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on :', process.env.PORT);
});

