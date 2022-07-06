const vehicleSchema = {
  Vehicle: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      chasisNumber: { type: 'string' },
      manufacturerCompany: { type: 'object' },
      manufacturingYear: { type: 'number' },
      price: { type: 'string' },
      plateNumber: { type: 'string' },
      model: { type: 'string' },
    },
  },
};

module.exports = vehicleSchema;
