const express = require('express');
const router = express.Router();
const { generatePrescription } = require('../util/openai');

router.post('/', async (req, res) => {
    try {
        const { description } = req.body;
        const prescription = await generatePrescription(description);
        res.json({ prescription });
    } catch (error) {
        console.error(error);
        res.status(500).json({ prescription: 'Error al comunicarse con OpenAI' });
    }
});

module.exports = router;
