const generateUniqueId = require('../../utils/generationUniqueId');

describe('Generate Unique ID', () => {
    it( 'should generate an unique ID', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    });
});