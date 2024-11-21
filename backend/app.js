const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// MySQL Database Configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Change this if needed
    password: '', // Change this if needed
    database: 'circular_marketplace'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});

// Routes
app.get('/products', (req, res) => {
    db.query('SELECT * FROM products LIMIT 100', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/order', (req, res) => {
    const { user_id, products, total_price, address } = req.body;
    db.query(
        'INSERT INTO orders (user_id, products, total_price, address) VALUES (?, ?, ?, ?)',
        [user_id, JSON.stringify(products), total_price, address],
        (err, results) => {
            if (err) throw err;
            res.json({ message: 'Order placed successfully!' });
        }
    );
});

// Start Server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
