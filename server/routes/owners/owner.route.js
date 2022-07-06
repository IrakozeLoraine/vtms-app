const {
  createOwner,
  getAllOwners,
  getOwnerById,
  updateOwner,
  deleteOwner,
} = require('../../controllers/owner.controller');
const { AuthMiddleware } = require('../middleware/auth');

const router = express.Router();

router.post('/', AuthMiddleware, createOwner);
router.get('/', AuthMiddleware, getAllOwners);
router.get('/:id', AuthMiddleware, getOwnerById);
router.put('/:id', AuthMiddleware, updateOwner);
router.delete('/:id', AuthMiddleware, deleteOwner);

module.exports = router;
