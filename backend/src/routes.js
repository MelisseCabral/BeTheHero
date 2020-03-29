const express = require('express');
const routes = express.Router();

routes.get('/', (request, response) => {
    return response.send('Hello World');
});

routes.post('/users', (request, response) => {
    const params = request.body

    console.log(params);
    return response.json({event:'Semana Oministack 11.0', student: 'Mel'})
});

module.exports = routes