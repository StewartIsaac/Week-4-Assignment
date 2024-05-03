const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint to serve a string
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

// Endpoint to serve an object
app.get('/data', (req, res) => {
  const data = {
    name: 'Stewart Isaac',
    age: 30,
    email: 'stewartisaac@outlook.com'
  };
  res.json(data);
});

// Endpoint to serve an array
app.get('/numbers', (req, res) => {
  const numbers = [1, 2, 3, 4, 5];
  res.json(numbers);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});