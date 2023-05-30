'use strict';

const logger = require('./logger');

describe('logger middleware', () => {
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    console.log = jest.fn();
  });

  test('Logs the method and path of the request', () => {
    req.method = 'GET';
    req.path = '/test';
    logger(req, res, next);
    expect(console.log).toHaveBeenCalledWith('REQUEST: ', 'GET', '/test');
  });

  test('Calls next with no arguments', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});
