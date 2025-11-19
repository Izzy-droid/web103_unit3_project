
import dotenv from 'dotenv'
import pool from '../config/database.js';
dotenv.config();

export async function ensureLocationsTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS locations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255),
      city VARCHAR(255),
      state VARCHAR(255),
      zip VARCHAR(255)
    );
  `);
}

export async function insertLocation({ name, address = null, city = null, state = null, zip = null }) {
  const { rows } = await pool.query(
    `INSERT INTO locations (name, address, city, state, zip)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *;`,
    [name, address, city, state, zip]
  );
  return rows[0];
}

export async function listLocations() {
  const { rows } = await pool.query(`SELECT * FROM locations ORDER BY id;`);
  return rows;
}