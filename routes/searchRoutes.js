const express = require('express');
const auth = require('../middleware/authMiddleware');
const { searchPrompts } = require('../controllers/searchController');

const router = express.Router();

router.use(auth);

router.get('/', searchPrompts);

module.exports = router;