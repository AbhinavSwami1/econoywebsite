const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define route for fetching products
router.get('/', productController.getProducts); // Ensure the route path is correct

module.exports = router;
