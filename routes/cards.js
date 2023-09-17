const router = require('express').Router();
const {
  validationCreateCard,
  validationDeleteCard,
  validationLike,
  validationDislike,
} = require('../utils/validation-joi');

const {
  createCard,
  getCards,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', validationCreateCard, createCard);
router.delete('/:cardId', validationDeleteCard, deleteCard);
router.put('/:cardId/likes', validationLike, likeCard);
router.delete('/:cardId/likes', validationDislike, dislikeCard);

module.exports = router;
