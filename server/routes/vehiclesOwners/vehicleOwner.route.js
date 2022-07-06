const { Router } = require('express');
const {
  assignVehicleOwner,
  getVehicleOwners,
} = require('../../controllers/vehicle-owner.controller');

const { AuthMiddleware } = require('../middleware/auth.middleware');

const router = Router();

router.post('/', AuthMiddleware, assignVehicleOwner);
router.get('/', AuthMiddleware, getVehicleOwners);

module.exports = router;
