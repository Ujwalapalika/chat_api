 
// server.js

const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 3000; // Use the port provided by Railway or default to 5000

// SQLite setup
const db = new sqlite3.Database(':memory:'); // In-memory database for demo purposes

// Create a users table
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL
  )`);
});

// Express middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
