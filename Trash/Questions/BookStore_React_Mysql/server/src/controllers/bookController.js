// bookController.js
const { Book } = require('../models/Book');

const getAllBooks = async () => {
  try {
    const books = await Book.getAllBooks();
    return books;
  } catch (error) {
    throw error;
  }
};

const getBookById = async (id) => {
  try {
    const book = await Book.getBookById(id);
    return book;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllBooks, getBookById };
