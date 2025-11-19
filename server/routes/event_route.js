import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
// import controllers for events and locations
import { listEvents } from '../controllers/events_tab.js'

const router = express.Router()

// define routes to get events and locations
router.get('/events', (req,res) => {
    const rows = listEvents();
    res.json(rows);
})
router.post('/events', (req,res) => {
    res.send({listEvents})
})

export default router