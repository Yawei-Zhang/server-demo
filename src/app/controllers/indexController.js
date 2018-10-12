const sequelize = require('../models/index').sequelize;
const Users = sequelize.import(__dirname + '/../models/users');

exports.welcome = function (req, res, next) {
    // res.send('Welcome!');
    Users.findOne().then(users => {
        res.status(200).send('Hello, ' + users.get('userName') + '!')
    });
}

