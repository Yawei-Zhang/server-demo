const express = require('express');
const router = express.Router();

const { diagnose } = require('../controllers/healthController');
router.get('/diagnostic/status/heartbeat', diagnose);

const { welcome } = require('../controllers/indexController');
router.get('/', welcome);

const { helloUser } = require('../controllers/usersController');
router.get('/user', helloUser);

module.exports = router;
