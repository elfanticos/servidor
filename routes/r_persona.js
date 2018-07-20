'use strict'
var express = require('express'),
    api = express.Router(),
    controller = require('../controllers/c_persona');
    api
        .get('/getPersona', controller.getPersona);
module.exports = api;