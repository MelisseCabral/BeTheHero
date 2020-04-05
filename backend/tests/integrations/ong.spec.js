const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    beforeEach(() => {
        connection.migrate();
    });
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ong')
        .send({
            name: 'Apda 2',
            email: 'melisse@gmail.com',
            whatsapp: '85999616120',
            city: 'Teresina',
            uf: 'PI'
        }); 


    });
})