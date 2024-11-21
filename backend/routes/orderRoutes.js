const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Define route for placing an order
router.post('/', orderController.createOrder); // Ensure the route path is correct

module.exports = router;
