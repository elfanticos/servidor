'use strict'

function getPersona(req, res) {
    console.log(req);
    res.send({msj : 'mensaje'});
}

module.exports = {
    getPersona
};