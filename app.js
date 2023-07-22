const express = require('express');
const mongoose = require('mongoose');
const handlebars = require('handlebars');
const fs = require('fs');

const app = express();
console.log(fs);
app.get('/', (req, res) => {
  const template = handlebars.compile(fs.readFileSync('index.hbs', 'utf8'));
  const data = { pageTitle: 'Welcome', message: 'Hello World!' };
  const html = template(data);

  res.send(html);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// tMvgwqmpiQUZkR44
