const express = require('express');
const findQuestions = require('../controllers/findQuestions');

const routes = express.Router();

routes.get('/:categories', findQuestions);

module.exports = routes;
