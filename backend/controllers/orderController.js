const db = require('../config/db');

const createOrder = (req, res) => {
    const { user_id, products, total_price, address } = req.body;
    db.query(
        'INSERT INTO orders (user_id, products, total_price, address) VALUES (?, ?, ?, ?)',
        [user_id, JSON.stringify(products), total_price, address],
        (err, results) => {
            if (err) throw err;
            res.json({ message: 'Order placed successfully!' });
        }
    );
};

module.exports = { createOrder };
