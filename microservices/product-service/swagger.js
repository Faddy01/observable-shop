const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product Service API',
      version: '1.0.0',
      description: 'ObservableShop Product Microservice with Prometheus metrics and Winston logging',
      contact: {
        name: 'Fawad Ul Haq',
        url: 'https://github.com/Faddy01/observable-shop'
      }
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Development server'
      }
    ],
    components: {
      schemas: {
        Product: {
          type: 'object',
          required: ['name', 'price'],
          properties: {
            id: {
              type: 'string',
              format: 'uuid',
              description: 'Product ID'
            },
            name: {
              type: 'string',
              description: 'Product name'
            },
            description: {
              type: 'string',
              description: 'Product description'
            },
            price: {
              type: 'number',
              format: 'float',
              description: 'Product price in USD'
            },
            stock: {
              type: 'integer',
              description: 'Available stock quantity'
            },
            created_at: {
              type: 'string',
              format: 'date-time',
              description: 'Creation timestamp'
            },
            updated_at: {
              type: 'string',
              format: 'date-time',
              description: 'Last update timestamp'
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string'
            },
            statusCode: {
              type: 'integer'
            },
            timestamp: {
              type: 'string',
              format: 'date-time'
            }
          }
        }
      }
    },
    paths: {
      '/api/products': {
        get: {
          summary: 'Get all products',
          tags: ['Products'],
          parameters: [
            {
              name: 'limit',
              in: 'query',
              schema: { type: 'integer', default: 10 }
            },
            {
              name: 'offset',
              in: 'query',
              schema: { type: 'integer', default: 0 }
            }
          ],
          responses: {
            '200': {
              description: 'List of products'
            }
          }
        },
        post: {
          summary: 'Create a new product',
          tags: ['Products'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Product' }
              }
            }
          },
          responses: {
            '201': {
              description: 'Product created'
            }
          }
        }
      },
      '/api/products/{id}': {
        get: {
          summary: 'Get product by ID',
          tags: ['Products'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              schema: { type: 'string', format: 'uuid' }
            }
          ],
          responses: {
            '200': {
              description: 'Product details'
            },
            '404': {
              description: 'Product not found'
            }
          }
        },
        put: {
          summary: 'Update product',
          tags: ['Products'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              schema: { type: 'string', format: 'uuid' }
            }
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Product' }
              }
            }
          },
          responses: {
            '200': {
              description: 'Product updated'
            }
          }
        },
        delete: {
          summary: 'Delete product',
          tags: ['Products'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              schema: { type: 'string', format: 'uuid' }
            }
          ],
          responses: {
            '200': {
              description: 'Product deleted'
            }
          }
        }
      },
      '/health': {
        get: {
          summary: 'Health check',
          tags: ['Health'],
          responses: {
            '200': {
              description: 'Service is healthy'
            }
          }
        }
      },
      '/metrics': {
        get: {
          summary: 'Prometheus metrics',
          tags: ['Metrics'],
          responses: {
            '200': {
              description: 'Prometheus metrics'
            }
          }
        }
      }
    }
  },
  apis: []
};

const specs = swaggerJsdoc(options);
module.exports = { swaggerUi, specs };
