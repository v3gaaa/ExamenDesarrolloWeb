const express = require('express');
const { listDescriptions, getDescription, addDescription, getDescriptionsById } = require('../controllers/descriptionController');
const router = express.Router();

router.get('/', listDescriptions);
router.get('/user/:id', getDescriptionsById);
router.get('/:id', getDescription);
router.post('/', addDescription);

module.exports = router;
