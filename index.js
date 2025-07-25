const express = require('express');
const path = require('path');
const app = express();

const images = [
  path.join(__dirname, 'images/1.png'),
  path.join(__dirname, 'images/2.png'),
  path.join(__dirname, 'images/3.png'),
  path.join(__dirname, 'images/4.png'),
  path.join(__dirname, 'images/5.png'),
  path.join(__dirname, 'images/6.png'),
  path.join(__dirname, 'images/7.png'),
  path.join(__dirname, 'images/8.png')
];

app.get('/logo.png', (req, res) => {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  res.sendFile(randomImage);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Dynamic logo server running on port ${port}`)); 