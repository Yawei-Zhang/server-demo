const express = require('express');
const router = express.Router();

const { welcome } = require('../controllers/indexController');
const { helloUser } = require('../controllers/userController');

router.get('/', welcome);
router.get('/user', helloUser);

module.exports = router;
