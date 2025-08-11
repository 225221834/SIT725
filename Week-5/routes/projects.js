const express = require('express');
const router = express.Router();

// Simple GET route
router.get('/', (req, res) => {
res.send('Welcome to the Projects Room');
});

module.exports = router;

