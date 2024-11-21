const db = require('../config/db');

const getProducts = (req, res) => {
    db.query('SELECT * FROM products LIMIT 100', (err, results) => {
        if (err) throw err;
        res.json(results); // Send the product data as JSON response
    });
};

module.exports = { getProducts };
