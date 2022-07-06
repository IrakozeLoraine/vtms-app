const { Router } = require('express');
const {
  createVehicle,
  getAllVehicles,
  getVehicleById,
} = require('../../controllers/vehicle.controller');

const { AuthMiddleware } = require('../middleware/auth.middleware');

const router = Router();

router.post('/', AuthMiddleware, createVehicle);
router.get('/', AuthMiddleware, getAllVehicles);
router.get('/:id', AuthMiddleware, getVehicleById);

module.exports = router;
