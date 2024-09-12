require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 5000;

// Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'disaster_preparedness_db',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// API Endpoint for disaster alerts
app.get('/alerts', (req, res) => {
  const sql = 'SELECT * FROM alerts';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});