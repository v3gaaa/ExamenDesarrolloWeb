const express = require('express');
const { addUser, listUsers, getUser } = require('../controllers/userController');
const router = express.Router();

router.post('/', addUser);
router.get('/', listUsers);
router.get('/:id', getUser);

module.exports = router;
