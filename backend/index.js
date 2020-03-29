const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({event:'Semana Oministack 11.0', student: 'Melisse'})
});

app.listen(3333);