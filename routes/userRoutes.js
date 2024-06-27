const express = require('express');
const router = express.Router();
const { createUser, findUserByUsername } = require('../models/userModel');
const bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
  const { username, password, email } = req.body;
  createUser(username, password, email, (err) => {
    if (err) {
      return res.status(500).json({ error: 'User already exists' });
    }
    res.status(201).json({ message: 'User registered successfully' });
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  findUserByUsername(username, (err, user) => {
    if (err || !user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    res.status(200).json({ message: 'Login successful' });
  });
});

module.exports = router;
