const pool = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {};

User.create = ({ username, email, password }, result) => {
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.log('Error hashing password: ', err);
      result(err, null);
      return;
    }
    pool.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword],
      (err, res) => {
        if (err) {
          console.log('Error creating user: ', err);
          result(err, null);
          return;
        }
        console.log('Created user: ', { id: res.insertId, username, email });
        result(null, { id: res.insertId, username, email });
      }
    );
  });
};

User.findByEmail = (email, result) => {
  pool.query('SELECT * FROM users WHERE email = ?', [email], (err, res) => {
    if (err) {
      console.log('Error finding user by email: ', err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log('Found user: ', res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: 'not_found' }, null);
  });
};

User.findByUsername = (username, result) => {
  pool.query('SELECT * FROM users WHERE username = ?', [username], (err, res) => {
    if (err) {
      console.error('Error finding user by username:', err);
      result(err, null);
      return;
    }
    if (res.length) {
      result(null, res[0]);
      return;
    }
    result({ kind: 'not_found' }, null);
  });
};

// Get all users with pagination
User.getAll = (page, count, result) => {
  const offset = (page - 1) * count;
  pool.query('SELECT * FROM users LIMIT ? OFFSET ?', [parseInt(count), parseInt(offset)], (err, results) => {
    if (err) {
      console.log('Error fetching users: ', err);
      result(err, null);
      return;
    }
    result(null, results);
  });
};

// Get user by ID
User.getById = (id, result) => {
  pool.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.log('Error fetching user by ID: ', err);
      result(err, null);
      return;
    }
    if (results.length === 0) {
      result({ kind: 'not_found' }, null);
    } else {
      result(null, results[0]);
    }
  });
};

// Update user
User.update = (id, userData, result) => {
  let query = 'UPDATE users SET username = ?, email = ?';
  const values = [userData.username, userData.email];

  if (userData.password) {
    query += ', password = ?';
    values.push(userData.password);
    bcrypt.hash(userData.password, 10, (err, hashedPassword) => {
      if (err) {
        console.log('Error hashing password: ', err);
        result(err, null);
        return;
      }
      values.push(hashedPassword);
      pool.query(query + ' WHERE id = ?', [...values, id], (err) => {
        if (err) {
          console.log('Error updating user: ', err);
          result(err, null);
        } else {
          result(null, { message: 'User updated successfully' });
        }
      });
    });
  } else {
    pool.query(query + ' WHERE id = ?', [...values, id], (err) => {
      if (err) {
        console.log('Error updating user: ', err);
        result(err, null);
      } else {
        result(null, { message: 'User updated successfully' });
      }
    });
  }
};

// Delete user
User.delete = (id, result) => {
  pool.query('DELETE FROM users WHERE id = ?', [id], (err) => {
    if (err) {
      console.log('Error deleting user: ', err);
      result(err, null);
      return;
    }
    result(null, { message: 'User deleted successfully' });
  });
};

module.exports = User;
