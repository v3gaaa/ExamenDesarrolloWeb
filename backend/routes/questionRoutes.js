
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { client } = await import('@nearbyy/core');
    try {
        const { question } = req.body;
        const response = await client.semanticSearch({
            query: question,
            limit: 5,
        });
        res.json(response);
        console.log(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ response: 'Error al comunicarse con Nearbyy' });
    }
});

module.exports = router;




