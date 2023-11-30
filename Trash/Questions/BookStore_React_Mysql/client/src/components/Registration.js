// Registration.js
import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Handle the submission, for example, send the data to the server

    // Reset the form after submission
    setBookData({
      title: '',
      author: '',
      price: '',
    });
  };

  return (
    <div className="registration-container">
      <h2>Book Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={bookData.price}
            onChange={handleChange}
            step="0.01"
            required
          />
        </label>
        <button type="submit">Register Book</button>
      </form>
    </div>
  );
};

export default Registration;
