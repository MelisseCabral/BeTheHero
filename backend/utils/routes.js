const express = require('express');
const routes = express.Router();
const { celebrate, Segments, Joi } = require('celebrate');

const ONGController = require('../src/controllers/OngController');
const ProfileController = require('../src/controllers/ProfileController');
const SessionController = require('../src/controllers/SessionController');
const IncidentController = require('../src/controllers/IncidentController');

routes.get('/ongs', ONGController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY] : Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), ONGController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY] : Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index);

routes.post('/incidents', celebrate({
    [Segments.BODY] : Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    }),
    [Segments.HEADERS] : Joi.object().keys({
        authorization : Joi.string().required()
    }).unknown()
}), IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }) 
}), IncidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS] : Joi.object().keys({
        authorization : Joi.string().required()
    }).unknown()
}), ProfileController.index);
routes.post('/sessions', SessionController.create);

module.exports = routes