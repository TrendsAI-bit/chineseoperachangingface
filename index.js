const express = require('express');
const path = require('path');
const app = express();

const images = [
  '/images/1.png',
  '/images/2.png',
  '/images/3.png'
];

app.get('/logo.png', (req, res) => {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  res.sendFile(path.join(__dirname, randomImage));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Dynamic logo server running on port ${port}`)); 