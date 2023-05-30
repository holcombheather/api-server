'use strict';

// Middleware for handling 404 not found errors
const notFound = (req, res, next) => {
  res.status(404).json({
    error: 404,
    route: req.baseUrl,
    message: 'Not Found',
  });
};

module.exports = notFound;
