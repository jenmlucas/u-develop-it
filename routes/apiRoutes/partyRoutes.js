const express = require("express");
const router = express.Router();
const db = require('../../db/connection');


router.get('/parties', (req, res) => {
    const sql = `SELECT * FROM  parties`;
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

router.get('/party/:id', (req, res) => {});

router.delete('/party/:id', (req, res) => {});

module.exports = router; 
