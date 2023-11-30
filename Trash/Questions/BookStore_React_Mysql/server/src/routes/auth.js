// auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await authController.findUserByUsername(username);

    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
    } else {
      await authController.registerUser(username, password);
      res.status(201).json({ message: 'User registered successfully' });
    }
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
