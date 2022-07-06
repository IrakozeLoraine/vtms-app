const owner = {
  _id: 'owner id',
  names: 'owner names',
  address: 'owner address',
  phone: '0788102033',
  nationalId: 'owner national id',
};

const createOwner = {
  tags: ['owners'],
  description: 'create a new owner',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            names: {
              type: 'string',
              description: 'the name of the vehicle owner',
              example: 'sample owner name',
            },
            address: {
              type: 'string',
              description: 'the address of the vehicle owner',
              example: 'sample owner address',
            },
            phone: {
              type: 'string',
              description: 'the phone of the vehicle owner',
              example: 'sample owner phone',
            },
            nationalId: {
              type: 'string',
              description: 'the national Id of the vehicle owner',
              example: 'sample owner national Id',
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

const getOwners = {
  tags: ['owners'],
  description: 'List of all vehicle owners',
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
                items: '#/components/schemas/Owner',
              },
            },
            example: {
              message: 'Returned message',
              data: [owner],
            },
          },
        },
      },
    },
  },
};

const getOwnerWithId = {
  tags: ['owners'],
  description: 'Get owner by id',
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
                items: '#/components/schemas/Owner',
              },
            },
            example: {
              message: 'Returned message',
              data: owner,
            },
          },
        },
      },
    },
  },
};

const editOwner = {
  tags: ['owners'],
  description: 'edit a new owner',
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
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            names: {
              type: 'string',
              description: 'the name of the vehicle owner',
              example: 'sample owner name',
            },
            address: {
              type: 'string',
              description: 'the address of the vehicle owner',
              example: 'sample owner address',
            },
            phone: {
              type: 'string',
              description: 'the phone of the vehicle owner',
              example: 'sample owner phone',
            },
            nationalId: {
              type: 'string',
              description: 'the national Id of the vehicle owner',
              example: 'sample owner national Id',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Edited owner',
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

const deleteOwner = {
  tags: ['owners'],
  description: 'delete an owner',
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
      description: 'deleted owner',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
              },
            },
            example: {
              message: 'Successfully deleted',
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

const ownerRouteDoc = {
  '/api/v1/owners': {
    post: createOwner,
    get: getOwners,
  },
  '/api/v1/owners/{id}': {
    get: getOwnerWithId,
    put: editOwner,
    delete: deleteOwner,
  },
};

module.exports = ownerRouteDoc;
