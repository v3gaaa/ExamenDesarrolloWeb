const db = require('../config/db');

const getAllDescriptions = async () => {
    try {
        const query = 'SELECT * from description;';
        const {rows} = await db.query(query);
        console.log(rows);
        return rows;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

const getDescriptionById = async (id) => {
    try {
        const query = 'SELECT U.name, D.description, D.prescription FROM users U JOIN description D ON U.id = D.userd_id WHERE U.id = $1;';
        const { rows } = await db.query(query, [id]);
        return rows;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

const createDescription = async (description, prescription, userId) => {
    try {
        const query = 'INSERT INTO description (description, prescription, userd_id) VALUES ($1, $2, $3) RETURNING *;';
        const { rows } = await db.query(query, [description, prescription, userId]);
        return rows[0];
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

const updateDescription = async (id, parameters) => {
    try {
        const query = 'UPDATE description SET description = $1, prescription = $2 WHERE id = $3 RETURNING *;';
        const { rows } = await db.query(query, [parameters.description, parameters.prescription, id]);
        return rows[0];
    }
    catch (error) {
        console.error(error);
        throw error;
    }
    
}

const getDescriptionsByUserId = async (userId) => {
    try {
        const query = 'SELECT * FROM description WHERE userd_id = $1;';
        const { rows } = await db.query(query, [userId]);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = { getAllDescriptions, getDescriptionById, createDescription, updateDescription, getDescriptionsByUserId };