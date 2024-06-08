const { get } = require('firebase/database');
const { getAllDescriptions, getDescriptionById, createDescription, getDescriptionsByUserId } = require('../models/descriptionModel');

const listDescriptions = async (req, res) => {
    try {
        const descriptions = await getAllDescriptions();
        res.status(200).json(descriptions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getDescription = async (req, res) => {
    try {
        const description = await getDescriptionById(req.params.id);
        if (description.length > 0) {
            res.status(200).json(description[0]);
        } else {
            res.status(404).json({ message: 'Description not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const addDescription = async (req, res) => {
    try {
        const { description, prescription, userId } = req.body;
        const newDescription = await createDescription(description, prescription, userId);
        res.status(201).json(newDescription);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getDescriptionsById = async (req, res) => {
    try {
        const { id } = req.params;
        const descriptions = await getDescriptionsByUserId(id);
        res.json(descriptions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

module.exports = { listDescriptions, getDescription, addDescription, getDescriptionsById };



