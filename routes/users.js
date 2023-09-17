const router = require('express').Router();
const { validationUserId, validationUpdateUser, validationUpdateAvatar } = require('../utils/validation-joi');

const {
  getUsers,
  getUser,
  getCurrentUser,
  updateUserProfile,
  updateUserAvatar,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', validationUserId, getUser);
router.patch('/me', validationUpdateUser, updateUserProfile);
router.patch('/me/avatar', validationUpdateAvatar, updateUserAvatar);

module.exports = router;
