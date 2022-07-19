
require('dotenv').config();
const express = require ('express');
const cors = require('cors');

const router = require('./router');



app.use(express.json());
app.use(cors('*'));
app.use(router);
app.use(express.static(--dirname + '/public'));


app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on :', process.env.PORT);
});

