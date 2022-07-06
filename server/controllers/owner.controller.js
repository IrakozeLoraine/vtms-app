const Owner = require('../models/owner.model');

exports.createOwner = async (req, res) => {
  try {
    const owner = new Owner(req.body);
    await owner.save();
    res.status(201).json({ success: true, data: owner });
  } catch (error) {
    res.status(400).json({ success: true, message: error });
  }
};

exports.getAllOwners = async (req, res) => {
  try {
    const owners = await Owner.find();
    res.status(200).json({ success: true, data: owners });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

exports.getOwnerById = async (req, res) => {
  try {
    const owner = await Owner.findById(req.params.id);
    if (!owner) {
      return res
        .status(404)
        .json({ success: false, message: 'Owner not found' });
    }
    res.status(200).json({ success: true, data: owner });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

exports.updateOwner = async (req, res) => {
  try {
    const owner = await Owner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!owner) {
      return res
        .status(404)
        .json({ success: false, message: 'Owner not found' });
    }
    res.status(200).json({ success: true, data: owner });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

exports.deleteOwner = async (req, res) => {
  try {
    const owner = await Owner.findByIdAndDelete(req.params.id);
    if (!owner) {
      return res
        .status(404)
        .json({ success: false, message: 'Owner not found' });
    }
    res.status(204).json({ success: true, message: 'Successfully deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
