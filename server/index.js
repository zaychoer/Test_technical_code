const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.post('/api/generate-triangle', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Generate Segitiga' });
});

app.post('/api/generate-odd', (req, res) => {
  const maxNumber = req.body.number;
  let oddNumber = [];
  res.json({ message: 'Generate Bilangan Ganjil' });
});

app.post('/api/generate-prime', (req, res) => {
  res.json({ message: 'Generate Bilangan Prima' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
