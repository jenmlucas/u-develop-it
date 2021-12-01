const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// Get all candidates 
router.get('/candidates', (req, res) => {
    const sql = `Select candidates.*, parties.name
  AS party_name
  FROM candidates
  LEFT JOIN parties
  ON candidates.party_id = parties.id`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// GET a single candidate
router.get('/candidate/:id', (req, res) => { });

// Create a candidate
router.post('/candidate', ({ body }, res) => {});

//update a candidate's party 
router.put('/candidate/:id', (req, res) => {});

//Delete a candidate 
router.delete('/candidate/:id', (req, res) => {});

module.exports = router;