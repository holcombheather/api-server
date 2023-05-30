# LAB - Class 03

## Project: Express REST API / Data Modeling

### Author: Heather Holcomb | 401d53

***

### Problem Domain

Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a Postgres SQL Database, using the REST standard. One endpoint should include related data joined from two or more tables within your database

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/holcombheather/api-server/actions)
- [back-end server url](https://api-server-module-01.onrender.com)

### Collaborators

- Heavily referenced live demo code from lecture 03 with Ryan Gallaway.
- Received help with server deployment issue from TA Tony Regalado.

***

### Setup

#### How to initialize this application
1. Clone this repo into your local environment
2. `npm init -y`
3. `npm i cors dotenv express eslint jest supertest pg sequelize sequelize-cli sqlite3`
4. Copy Code Fellows config files `cp -r ../seattle-code-javascript-401d53/configs/ .`


#### `.env` requirements (where applicable)

`PORT` and `DATABASE_URL` variable located with `.env.sample`

#### How to initialize/run your application (where applicable)

- `npm start` or `nodemon`

#### Features / Routes


- POST: `/person` - Add a Record
- GET: `/person` - Get All Records
- GET: `/person/:id` - Get One Record
- PUT: `/person/:id` - Update a Record
- DELETE: `/person/:id` - Delete a Record
- POST: `/order` - Add a Record
- GET: `/order` - Get All Records
- GET: `/order/:id` - Get One Record
- PUT: `/order/:id` - Update a Record
- DELETE: `/order/:id` - Delete a Record

#### Tests

`npm test`
- 404 on bad route
- 404 on bad method
- Correct status codes with expected data for `/person`
    1. confirm the database is appropriately empty
	2. confirm that expected person exists after a post request.
	3. confirm that person is updated after a put request
	4. confirm that person doesn't exist after delete request
- Correct status codes with expected data for `/order`
    1. confirm the database is appropriately empty
	2. confirm that expected person exists after a post request.
	3. confirm that order is updated after a put request
	4. confirm that order doesn't exist after delete request

 PASS  __tests__/server.test.js
  API Server
    ✓ handles the root path (18 ms)
    ✓ 404 on a bad route (8 ms)
    ✓ 404 on a bad method (5 ms)
    ✓ Create a person record using POST (20 ms)
    ✓ Read a list of person records using GET (10 ms)
    ✓ Read a single person record using GET (7 ms)
    ✓ Update a user record using PUT (9 ms)
    ✓ Create a order record using POST (10 ms)
    ✓ Read a list of order records using GET (8 ms)
    ✓ Read a single order record using GET (7 ms)
    ✓ Update a order record using PUT (8 ms)
    ✓ Destroy a order record using DELETE (8 ms)
    ✓ Destroy a user record using DELETE (7 ms)

 PASS  src/middleware/logger.test.js
  logger middleware
    ✓ Logs the method and path of the request (2 ms)
    ✓ Calls next with no arguments (1 ms)

#### UML

![UML Lab 03](assets/UML_lab03.png)

****
