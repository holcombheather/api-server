'use strict';

const express = require('express');
const cors = require('cors');
const personRouter = require('./routes/person');
const ordersRouter = require('./routes/orders');
const logger = require('./middleware/logger');
// const validator = require('./middleware/validator');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
// app.use(validator);

app.use(personRouter);
app.use(ordersRouter);
app.get('/', (req, res, next) => {
  res.status(200).send('proof of life');
});

app.use('*', notFound);
app.use(errorHandler);

const start = (port) => {
  app.listen(port, () => console.log('Server running on', port));
};

module.exports = { app, start };
