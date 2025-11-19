import pool from '../config/database.js'
// import dotenv from '../config/.env'
// import Event from './client/src/components/Event.jsx'
import dotenv from 'dotenv'
dotenv.config()

process.env.PGUSER

export async function EventsTable() {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL

      );
    `);
  }
export async function dropEventsTable() {
    await pool.query(`DROP TABLE IF EXISTS events;`);
}
export async function insertEvent({ name, image }) {
    const { rows } = await pool.query(
      `INSERT INTO events (name, image) VALUES ($1, $2) RETURNING *;`,
      [name, image]
    );
    return rows[0];
  }
  
 
export async function listEvents() {
    const { rows } = await pool.query(`SELECT * FROM events ORDER BY id;`);
    return rows;
  }
