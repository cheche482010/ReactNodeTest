
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.registerUser = (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please provide all fields' });
  }

  User.create({ username, email, password }, (err, data) => {
    if (err) {
      return res.status(500).json({
        message:
          err.message || 'Some error occurred while creating the user.',
      });
    }
    res.status(201).json({ message: 'User registered successfully' });
  });
};

exports.loginUser = async (req, res) => {
  const { email, username, password } = req.body;
  let user;

  try {
    if (email) {
      user = await new Promise((resolve, reject) => {
        User.findByEmail(email, (err, user) => {
          if (err) reject(err);
          else resolve(user);
        });
      });
    } else if (username) {
      user = await new Promise((resolve, reject) => {
        User.findByUsername(username, (err, user) => {
          if (err) reject(err);
          else resolve(user);
        });
      });
    } else {
      return res.status(400).json({ message: 'Please provide email or username' });
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'User logged in successfully' });

  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all users
exports.getUsers = (req, res) => {
  const { page = 1, count = 10 } = req.query;

  User.getAll(page, count, (err, data) => {
    if (err) {
      console.log('Error fetching users: ', err);
      return res.status(500).json({
        message: err.message || 'Some error occurred while fetching users.',
      });
    }
    res.status(200).json(data);
  });
};

// Get user by ID
exports.getUserById = (req, res) => {
  const { id } = req.params;

  User.getById(id, (err, data) => {
    if (err) {
      console.log('Error fetching user by ID: ', err);
      return res.status(500).json({
        message: err.message || 'Some error occurred while fetching the user.',
      });
    }
    if (!data) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(data);
  });
};

// Update user
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;

  User.update(id, { username, email, password }, (err, data) => {
    if (err) {
      console.log('Error updating user: ', err);
      return res.status(500).json({
        message: err.message || 'Some error occurred while updating the user.',
      });
    }
    res.status(200).json(data);
  });
};

// Delete user
exports.deleteUser = (req, res) => {
  const { id } = req.params;

  User.delete(id, (err, data) => {
    if (err) {
      console.log('Error deleting user: ', err);
      return res.status(500).json({
        message: err.message || 'Some error occurred while deleting the user.',
      });
    }
    res.status(200).json(data);
  });
};