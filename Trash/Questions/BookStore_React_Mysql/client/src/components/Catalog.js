// Catalog.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Catalog.css';

const Catalog = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error.message);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="catalog-container">
      <h2>Catalog</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong>
            <p>{book.author}</p>
            <p>${book.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
