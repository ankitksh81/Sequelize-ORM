const express = require('express');
const Sequelize = require('sequelize');

const app = express();
const port = 8001;

const connection = new Sequelize('db', 'user', 'pass', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'db.sqlite',
})


// User model
const User = connection.define('User', {
    name: Sequelize.STRING,
    bio: Sequelize.TEXT
})

connection
    .sync({
        logging: console.log
    })
    .then(() => {
        console.log('Connection to database established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database: ', err);
});

app.listen(port, () => {
    console.log('Running server on port ' + port);
});