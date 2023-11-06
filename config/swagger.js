const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ContactMgr REST API Docs',
      description: 'An API for managing contact details',
      version: '1.0',
    },

    components: {
      securitySchemas: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js', './models/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  // Swagger page
  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  console.log('SwaggerSpec Obj: ', swaggerSpec);

  // Docs in JSON format
  app.get('docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log(`Docs available at http://localhost:${port}/`);
}

module.exports = swaggerDocs;
