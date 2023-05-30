'use strict';

const validator = require('./validator');

describe('Validator middleware', () => {
  let req = {};
  let res = {
    status: jest.fn(() => res),
    send: jest.fn(),
  };
  let next = jest.fn(); //this "mocks" the next function

  beforeEach(() => {
    req.body = {
      personId: 1,
      product: 'Item 1',
      quantity: 1,
      status: 'placed',
    };
  });

  test('Calls next with no arguments if all properties are valid', () => {
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });

  test('Returns error if personId is not provided', () => {
    delete req.body.personId;
    validator(req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({error: 'Invalid Input'});
  });
});
