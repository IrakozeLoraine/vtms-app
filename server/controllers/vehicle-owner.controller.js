const Owner = require('../models/owner.model');
const VehicleOwner = require('../models/vehicle-owner.model');
const Vehicle = require('../models/vehicle.model');

exports.getVehicleOwners = async (req, res) => {
  try {
    const vehicleOwners = await VehicleOwner.find()
      .populate('vehicle')
      .populate('owner');
    res.status(200).json({ success: true, data: vehicleOwners });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

exports.assignVehicleOwner = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.body.vehicle);
    const owner = await Owner.findById(req.body.owner);
    if (!vehicle) {
      return res
        .status(404)
        .json({ success: false, message: 'Vehicle not found' });
    } else if (!owner) {
      return res
        .status(404)
        .json({ success: false, message: 'Owner not found' });
    } else {
      const vehicleOwner = new VehicleOwner(req.body);

      await vehicleOwner.save();

      res.status(200).json({
        success: true,
        message: 'Vehicle successfully assigned to owner',
        data: vehicleOwner,
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
