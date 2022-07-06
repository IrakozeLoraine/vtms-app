const mongoose = require('mongoose');

const VehicleOwnerSchema = mongoose.Schema({
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true,
  },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true },
  plateNumber: { type: String, required: true },
});

const VehicleOwner = mongoose.model('VehicleOwner', VehicleOwnerSchema);
module.exports = VehicleOwner;
