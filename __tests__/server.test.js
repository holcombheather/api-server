'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const { sequelizeDatabase } = require('../src/models');
const mockRequest = supertest(app);

beforeAll(async() => {
  await sequelizeDatabase.sync();
});

afterAll(async() => {
  await sequelizeDatabase.drop();
});


describe('API Server', () => {

  // Proof of Life and Error Handling
  test('handles the root path', async () => {
    const response = await mockRequest.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy;
    expect(response.text).toEqual('proof of life');
  });

  test('404 on a bad route', async () => {
    const response = await mockRequest.get('/persons');
    expect(response.status).toEqual(404);
  });

  test('404 on a bad method', async () => {
    const response = await mockRequest.post('/person/1');
    expect(response.status).toEqual(404);
  });

  // CRUD for Person
  test('Create a person record using POST', async () => {
    const response = await mockRequest.post('/person').send({firstName: 'Jane', lastName: 'Test', email: 'jane@test.com'});
    expect(response.status).toEqual(201);
    expect(response.body.firstName).toEqual('Jane');
  });

  test('Read a list of person records using GET', async () => {
    const response = await mockRequest.get('/person');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  test('Read a single person record using GET', async () => {
    const response = await mockRequest.get('/person/1');
    expect(response.status).toEqual(200);
    expect(response.body.firstName).toEqual('Jane');
  });

  test('Update a user record using PUT', async () => {
    const response = await mockRequest.put('/person/1').send({ firstName: 'Jen' });
    expect(response.status).toEqual(200);
    expect(response.body.firstName).toEqual('Jen');
  });

  test('Destroy a user record using DELETE', async () => {
    const response = await mockRequest.delete('/person/1');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({message: `Person with id: 1 was deleted`});
  });

  // CRUD for Order

  test('Create a order record using POST', async () => {
    const response = await mockRequest.post('/order').send({ product: 'Item 2'});
    expect(response.status).toEqual(201);
    expect(response.body.product).toEqual('Item 2');
  });

  test('Read a list of order records using GET', async () => {
    const response = await mockRequest.get('/order');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  test('Read a single order record using GET', async () => {
    const response = await mockRequest.get('/order/1');
    expect(response.status).toEqual(200);
    expect(response.body.product).toEqual('Item 2');
  });

  test('Update a order record using PUT', async () => {
    const response = await mockRequest.put('/order/1').send({ product: 'Item 3' });
    expect(response.status).toEqual(200);
    expect(response.body.product).toEqual('Item 3');
  });

  test('Destroy a order record using DELETE', async () => {
    const response = await mockRequest.delete('/order/1');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({message: `Order with id: 1 was deleted`});
  });
});

