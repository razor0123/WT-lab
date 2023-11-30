// authController.js
const { User } = require('../models/User');

const registerUser = async (username, password) => {
  try {
    const result = await User.createUser(username, password);
    return result;
  } catch (error) {
    throw error;
  }
};

const findUserByUsername = async (username) => {
  try {
    const user = await User.getUserByUsername(username);
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { registerUser, findUserByUsername };
