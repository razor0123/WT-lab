// Book.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bookstore_db',
});

db.connect();

class Book {
  constructor(id, title, author, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
  }

  static getAllBooks() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM books';
      db.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          const books = result.map((row) => new Book(row.id, row.title, row.author, row.price));
          resolve(books);
        }
      });
    });
  }

  static insertBook(title, author, price) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO books (title, author, price) VALUES (?, ?, ?)';
      db.query(sql, [title, author, price], (err, result) => {
        if (err) {
          reject(err);
        } else {
          const newBook = new Book(result.insertId, title, author, price);
          resolve(newBook);
        }
      });
    });
  }
  
  static getBookById(id) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM books WHERE id = ?';
      db.query(sql, [id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          if (result.length > 0) {
            const book = new Book(result[0].id, result[0].title, result[0].author, result[0].price);
            resolve(book);
          } else {
            resolve(null);
          }
        }
      });
    });
  }
}

module.exports = { Book };
