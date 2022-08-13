
require('dotenv').config();

const express = require ('express');

const cors = require('cors');

const router = require('./router');

const app = express();

app.use(express.static('app/public'));

app.use(express.json());
app.use(cors('*'));

app.use('/api', router);
app.listen(process.env.PORT || 5000, () => {
    console.log('Server running on :', process.env.PORT);
});

