require('dotenv').config({path:__dirname+'/./../.env'});
const express = require('express')
const app = express()
const port = 8080

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})

const Users = sequelize.import(__dirname + '/app/models/users')

app.get('/user', function (req, res, next) {
    Users.findOne().then(user => {
        res.status(200).send('Hello, ' + user.get('userName') + '!')
    });

})
