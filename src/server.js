'use strict';

const express = require('express');
const cors = require('cors');
const customerRouter = require('./routes/customer');

const app = express();
app.use(cors());
app.use(express.json());

// TODO: get customerRouter working
app.use(customerRouter);
app.get('/', (req, res, next) => {
  res.status(200).send('proof of life');
});

// TODO: bring in error handling

const start = (port) => {
  app.listen(port, () => console.log('server running on', port));
};

module.exports = {
  app,
  start,
};
