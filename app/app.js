
require('dotenv').config();
const express = require ('express');
//const cors = require('cors');
//const session =require ('express-session');
const router = require('./router');

const app = express();

app.use(express.json());
//app.use(cors('*'));
app.use(router);
app.use(express.static('/public'));
//app.use(session);

app.listen(process.env.PORT || 5000, () => {
    console.log('Server running on :', process.env.PORT);
});

