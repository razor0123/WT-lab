// User.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bookstore_db',
});

db.connect();

class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }

  static createUser(username, password) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO login (username, password) VALUES (?, ?)';
      db.query(sql, [username, password], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  static getUserByUsername(username) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM login WHERE username = ?';  // Corrected table name
      db.query(sql, [username], (err, result) => {
        if (err) {
          reject(err);
        } else {
          if (result.length > 0) {
            const user = new User(result[0].id, result[0].username, result[0].password);
            resolve(user);
          } else {
            resolve(null);
          }
        }
      });
    });
  }
  
}

module.exports = { User };
