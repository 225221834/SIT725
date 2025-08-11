const express = require('express');
const router = express.Router();

// Importing the controller
const foodController = require('../controllers/foodController');

// Route → Controller function
router.get('/', foodController.getAllFood);

module.exports = router;