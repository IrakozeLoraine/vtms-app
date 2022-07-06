const vehicleSchema = {
  VehicleOwner: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      vehicle: { type: 'string' },
      owner: { type: 'string' },
      plateNumber: { type: 'string' },
    },
  },
};

module.exports = vehicleSchema;
