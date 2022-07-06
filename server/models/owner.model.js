const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema(
  {
    names: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    nationalId: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Owner = mongoose.model('Owner', ownerSchema);
module.exports = Owner;
