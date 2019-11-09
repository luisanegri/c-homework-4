const express = require('express');
const bodyParser = require('body-parser');
const parserMiddleware = bodyParser.json();
const app = express();
const port = 4000;

const movieRouter = require('./router');
app.use(parserMiddleware);
app.use(movieRouter);

app.listen(port, () => console.log(`app running on port ${port}`));
