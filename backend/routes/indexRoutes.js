const express = require('express');
const userRoutes = require('./userRoutes');
const descriptionRoutes = require('./descriptionRoutes');
const generateRoutes = require('./generateRoutes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/descriptions', descriptionRoutes);
router.use('/generate', generateRoutes);



module.exports = router;
