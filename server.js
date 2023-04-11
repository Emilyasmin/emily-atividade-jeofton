const express = require('express');
 
const PORT = 3000;
const HOST = '0.0.0.0';
 
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Sistemas para Internet - P3 - Noite. A melhor turma.');
});
 
app.listen(PORT, HOST);
