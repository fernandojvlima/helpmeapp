const express = require('express');
const crypto = require('crypto')
const connection = require('./database/connection');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const routes = express.Router();

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);

module.exports = routes;