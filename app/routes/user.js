var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');

router.get('/user', user_controller.hello_user);
module.exports = router;
