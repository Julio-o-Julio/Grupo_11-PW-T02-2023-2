const express = require('express');
const findUsers = require('../controllers/findUsers');
const findUser = require('../controllers/findUser');

const routes = express.Router();

routes.get('/', findUsers);
routes.get('/:user', findUser);

module.exports = routes;
