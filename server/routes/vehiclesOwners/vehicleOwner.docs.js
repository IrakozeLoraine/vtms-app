const vehicle = {
  _id: 'owner id',
  vehicle: 'vehicle id',
  owner: 'owner id',
  plateNumber: 'KK1039',
};

const assignVehicleOwner = {
  tags: ['vehiclesOwner'],
  description: 'Assign a new vehicle to owner',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            vehicle: {
              type: 'string',
            },
            owner: {
              type: 'string',
            },
            plateNumber: {
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
              data: '#/components/schemas/VehicleOwner',
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
                items: '#/components/schemas/VehicleOwner',
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

const getVehicleOwners = {
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
                items: '#/components/schemas/VehicleOwner',
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
  '/api/v1/vehicle-owner': {
    post: assignVehicleOwner,
    get: getVehicleOwners,
  },
};

module.exports = vehicleRouteDoc;
