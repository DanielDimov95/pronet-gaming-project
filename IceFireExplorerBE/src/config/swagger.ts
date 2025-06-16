import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ice & Fire Explorer API',
      version: '1.0.0',
      description: 'API documentation for Ice & Fire Explorer backend',
    },
  },
  apis: [
    './src/routes/*.ts',
    './src/controllers/*.ts'
  ],
};

export const swaggerSpec = swaggerJSDoc(options);
export { swaggerUi };