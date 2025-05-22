const express = require('express');
const auth = require('../middleware/authMiddleware');
const {
  createPrompt, getPrompts, getPrompt, updatePrompt, deletePrompt
} = require('../controllers/promptController');

const router = express.Router();
router.use(auth);

router.route('/')
  .get(getPrompts)
  .post(createPrompt);

router.route('/:id')
  .get(getPrompt)
  .patch(updatePrompt)
  .delete(deletePrompt);

module.exports = router;