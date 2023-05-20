# LAB - Class 03 / Class 04

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

#### `.env` requirements (where applicable)

PORT and DATABUASE_URL variable located with .env.sample

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

`git clone https://github.com/holcombheather/api-server.git`
`npm i`
`nodemon`

#### Features / Routes

- GET : `/profile` - specific route to hit
- GET : `/order` - specific route to hit

#### Tests

`npm test`
- 404 on bad route
- 404 on bad method
- Correct status codes with expected data for `/profile`
    1. confirm the database is appropriately empty
	2. confirm that expected profile exists after a post request.
	3. confirm that profile is updated after a put request
	4. confirm that profile doesn't exist after delete request
- Correct status codes with expected data for `/order`
    1. confirm the database is appropriately empty
	2. confirm that expected profile exists after a post request.
	3. confirm that order is updated after a put request
	4. confirm that order doesn't exist after delete request

#### UML

![UML Lab 03](assets/UML_lab03.png)

****
