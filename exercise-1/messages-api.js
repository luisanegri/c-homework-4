const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const parserMiddleware = bodyParser.json();

app.listen(port, () => console.log(`app running on port ${port}`));

app.use(parserMiddleware);

let requestCounter = 0;
const requestLimit = 3;

app.post('/messages', (req, res) => {
  const text = req.body.text;
  if (requestCounter > requestLimit) {
    return res.status(429).send('Too Many Requests');
  }
  if (!text || text === '') {
    res.status(204).end();
  } else {
    res.status(201).json({ message: 'Message received loud and clear' });
  }
  requestCounter++;
});
