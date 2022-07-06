const ownerSchema = {
  Owner: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      names: { type: 'string' },
      address: { type: 'object' },
      phone: { type: 'number' },
      nationalId: { type: 'string' },
    },
  },
};

module.exports = ownerSchema;
