const sequelize = require('../models/index').sequelize;
const Users = sequelize.import(__dirname + '/../models/users');

exports.helloUser = (_, res) => {
    Users.findOne().then(user => {
        res.status(200).send(`Hello, ${user.get('userName')}!`);
    });
}
