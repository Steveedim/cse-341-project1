const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users API',
        description: 'Users API'
    },
    host: 'localhost:3000',
    schemes: ['https', 'http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);