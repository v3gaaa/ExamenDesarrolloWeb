const express = require('express');
const userRoutes = require('./userRoutes');
const descriptionRoutes = require('./descriptionRoutes');
const generateRoutes = require('./generateRoutes');
const questionRoutes = require('./questionRoutes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/descriptions', descriptionRoutes);
router.use('/generate', generateRoutes);
router.use('/question', questionRoutes);




module.exports = router;
