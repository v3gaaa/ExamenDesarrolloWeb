const pool = require('../config/db');

const createUser = async (user) => {
  const { name, email, age, lastname, phone_number, address } = user;
  const result = await pool.query(
    'INSERT INTO users (name, email, age, lastname, phone_number, address) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [name, email, age, lastname, phone_number, address]
  );
  return result.rows[0];
};

const getUsers = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};

const getUserById = async (id) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

module.exports = { createUser, getUsers, getUserById };
