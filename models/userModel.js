const db = require('../db');
const bcrypt = require('bcryptjs');

const createUser = (username, password, email, callback) => {
  const hash = bcrypt.hashSync(password, 10);
  db.run(
    'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
    [username, hash, email],
    callback
  );
};

const findUserByUsername = (username, callback) => {
  db.get('SELECT * FROM users WHERE username = ?', [username], callback);
};

module.exports = { createUser, findUserByUsername };
