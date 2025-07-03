const express = require('express');
const path = require('path');
const app = express();

// Melayani semua file statis dari folder 'public'
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/img', express.static(path.join(__dirname, '..', 'img')));
app.use('/css', express.static(path.join(__dirname, '..', 'css')));

// Jangan override route '/', biarkan express.static yang handle

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
