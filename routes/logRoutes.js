const express = require('express');
const auth = require('../middleware/authMiddleware');
const { createLog, getLogs, deleteLog } = require('../controllers/logController');

const router = express.Router();
router.use(auth);

router.post('/', createLog);
router.get('/', getLogs);
router.delete('/:id', deleteLog);

module.exports = router;