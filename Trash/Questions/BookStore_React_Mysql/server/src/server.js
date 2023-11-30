// server.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/books', bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
