module.exports = (sequelize, Sequelize) => {
    return sequelize.define("users", {
        userName: {
            type: Sequelize.STRING
        }
    })
}



// require('dotenv').config({path:__dirname+'/./../../../.env'});
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: 'postgres',
//     operatorsAliases: false,
//
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
// })
//
// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     })
//
// const Users = sequelize.define('users', {
//     userName: {
//         type: Sequelize.STRING
//     }
// });
//
// Users.findOne().then(users => {
//     console.log(users.get('userName'));
// });