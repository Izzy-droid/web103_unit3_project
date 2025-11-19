import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
// import controllers for events and locations
import { listLocations } from '../controllers/locations_tab.js'

const router = express.Router()

// define routes to get events and locations
router.get('/locations', (req,res) => {
    const rows = listLocations();
    res.json(rows);
})
router.post('/locations', (req,res) => {
    if (res.status(201)){
      res.send({listLocations})  
    }else{
        res.send('Error')  
    }
    
})



export default router