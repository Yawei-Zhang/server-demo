const sequelize = require('../models/index').sequelize;
const Users = sequelize.import(__dirname + '/../models/users');

exports.hello_user = function (req, res, next) {
    Users.findOne().then(users => {
        res.status(200).send('Hello, ' + users.get('userName') + '!')
    });
}
