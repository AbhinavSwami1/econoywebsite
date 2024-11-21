const express = require('express');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Register routes
app.use('/api/products', productRoutes); // Ensure correct path
app.use('/api/orders', orderRoutes); // Ensure correct path

// Start the server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
