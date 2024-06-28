import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Metal Mecanica API Documentation',
      version: '1.0.0',
      description: 'API Documentation for the application',
      contact: {
        name: 'Sebastian Llamuca',
        url: 'https://portafolio-sebastian-llamuca.vercel.app/'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./src/router/*.js']
}

const specs = swaggerJSDoc(options)

const setupSwagger = app => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}

export default setupSwagger
