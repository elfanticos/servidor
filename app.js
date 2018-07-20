'use strict'

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    cors = require('cors');
//ROUTES
var r_persona = require('./routes/r_persona');

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    //CABECERAS HTTP
    .use(cors())
    //RUTAS
    .use('/', r_persona)

module.exports = app;