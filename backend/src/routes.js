const express = require('express');
const routes = express.Router();
const crypto = require("crypto");
const connection = require("./database/connection")
routes.get('/', (request, response) => {
    return response.send('Hello World');
});

routes.post('/ongs', async (request, response) => {
    const {name, email, whatsapp, city, uf} = request.body

    const id = crypto.randomBytes(4).toString('HEX');
    await connection('ongs').insert({
        id, name, email, whatsapp, city, uf
    });
    console.log(data);
    return response.json();
});

module.exports = routes