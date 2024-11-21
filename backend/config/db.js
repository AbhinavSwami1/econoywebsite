const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',  // Host where MySQL is running (use 'localhost')
  user: 'root',       // Your MySQL username
  password: '',       // Your MySQL password (default is empty for root)
  database: 'your_database_name'  // Replace with your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

module.exports = connection;
