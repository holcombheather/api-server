'use strict';

const express = require('express');
const cors = require('cors');
const profileRouter = require('./routes/profile');

const app = express();
app.use(cors());
app.use(express.json());

// TODO: get profileRouter working
app.use(profileRouter);
app.get('/', (req, res, next) => {
  res.status(200).send('proof of life');
});

// TODO: get ordersRouter working

// TODO: bring in error handling

const start = (port) => {
  app.listen(port, () => console.log('server running on', port));
};

module.exports = {
  app,
  start,
};
