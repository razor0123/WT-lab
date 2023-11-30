// books.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', async (req, res) => {
  try {
    const allBooks = await bookController.getAllBooks();
    res.json(allBooks);
  } catch (error) {
    console.error('Error fetching books:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const book = await bookController.getBookById(parseInt(id));

    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    console.error('Error fetching book:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
