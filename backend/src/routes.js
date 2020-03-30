const express = require('express');
const routes = express.Router();
const ONGController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const IncidentController = require('./controllers/IncidentController');

routes.get('/ongs',ONGController.index);
routes.post('/ongs', ONGController.create);
routes.post('/ongs:id', ONGController.delete);


routes.get('/incidents',IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.post('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);
routes.post('/sessions', SessionController.create);

module.exports = routes