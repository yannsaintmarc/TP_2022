/**require('dotenv').config();

const { Client } = require ("pg");
const client= new Client;

new Client(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
    process.env.PG_URL
);
client.connect((error) => {
        if(error) {
                console.error("database connexion failed ", error.message);
        } else {
                console.log("Connexion to database with success");
        }
    }
);

module.exports = client;*/
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        underscored: true,
    }
});

module.exports = sequelize;
