const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async() => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: 'Apda 2',
            email: 'melisse@gmail.com',
            whatsapp: '85999616120',
            city: 'Teresina',
            uf: 'PI'
        }); 

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
    
});