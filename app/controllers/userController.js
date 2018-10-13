const sequelize = require('../models/index').sequelize;
const Users = sequelize.import(__dirname + '/../models/users');

exports.helloUser = function (req, res, next) {
    Users.findOne().then(users => {
        res.status(200).send('Hello, ' + users.get('userName') + '!')
    });
}
