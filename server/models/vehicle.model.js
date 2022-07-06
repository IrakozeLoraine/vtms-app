const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema(
  {
    chasisNumber: {
      type: String,
      required: true,
    },
    manufacturerCompany: {
      type: String,
      required: true,
    },
    manufacturingYear: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    plateNumber: {
      type: String,
      required: true,
      unique: true,
    },
    model: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
module.exports = Vehicle;
