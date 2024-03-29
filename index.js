// import express (after npm install express)
const express = require('express');

// create new express app and save it as "app"
const app = express();

// server configuration
const port = process.env.PORT || 4000;

// create a route for the app
app.get('/', (req, res) => {
  res.send('Hello World');
});

// make the server listen to requests
app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}/`);
});