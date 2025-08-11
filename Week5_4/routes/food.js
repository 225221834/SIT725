const express = require('express');
const router = express.Router();

// Importing the controller
const Controllers = require('../controllers');

// Route → Controller function
router.get('/', Controllers.foodController.getAllFood);

module.exports = router;