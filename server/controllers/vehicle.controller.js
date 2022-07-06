const Vehicle = require('../models/vehicle.model');
const Owner = require('../models/owner.model');

exports.createVehicle = async (req, res) => {
  try {
    const {
      chasisNumber,
      manufacturer,
      manufacturingYear,
      price,
      plateNumber,
      model,
      owner,
    } = req.body;
    const ownerId = Owner.findById(owner);
    if (!ownerId) {
      return res
        .status(404)
        .json({ success: false, message: 'Owner not found' });
    }
    const vehicle = new Vehicle({
      chasisNumber,
      manufacturer,
      manufacturingYear,
      price,
      plateNumber,
      model,
      owner,
    });
    await vehicle.save();
    res.status(201).json({ success: true, data: vehicle });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json({ success: true, data: vehicles });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

exports.getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) {
      return res
        .status(404)
        .json({ success: false, message: 'Vehicle not found' });
    }
    res.status(200).json({ success: true, data: vehicle });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
