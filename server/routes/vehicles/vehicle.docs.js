const vehicle = {
  _id: 'owner id',
  chasisNumber: 'ch0123',
  manufacturerCompany: 'owner address',
  manufacturingYear: 2015,
  price: 500,
  plateNumber: 'KK1039',
  model: 'Toyota',
};

const createVehicle = {
  tags: ['vehicles'],
  description: 'create a new vehicle',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            chasisNumber: {
              type: 'string',
            },
            manufacturerCompany: {
              type: 'string',
            },
            manufacturingYear: {
              type: 'number',
            },
            price: {
              type: 'number',
            },
            plateNumber: {
              type: 'string',
            },
            model: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created owner',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
              },
              data: '#/components/schemas/Owner',
            },
            example: {
              message: 'Returned message',
              data: owner,
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: {
            type: 'object',
          },
        },
      },
    },
  },
};

const getVehicles = {
  tags: ['vehicles'],
  description: 'List of all vehicles',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
              },
              data: {
                type: 'array',
                items: '#/components/schemas/Vehicle',
              },
            },
            example: {
              message: 'Returned message',
              data: [vehicle],
            },
          },
        },
      },
    },
  },
};

const getVehicleWithId = {
  tags: ['vehicles'],
  description: 'Get vehicle by id',
  parameters: [
    {
      in: 'path',
      name: 'id',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
              },
              data: {
                type: 'object',
                items: '#/components/schemas/Vehicle',
              },
            },
            example: {
              message: 'Returned message',
              data: vehicle,
            },
          },
        },
      },
    },
  },
};

const vehicleRouteDoc = {
  '/api/v1/vehicles': {
    post: createVehicle,
    get: getVehicles,
  },
  '/api/v1/vehicles/{id}': {
    get: getVehicleWithId,
  },
};

module.exports = vehicleRouteDoc;
