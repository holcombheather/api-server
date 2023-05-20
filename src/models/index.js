'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const profile = require('./profile');

// will make dynamic for testing environment
const DATABASE_URL = process.env.DATABASE_URL === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

// database singleton
const sequelizeDatabase = new Sequelize(DATABASE_URL);

// create our working and connected profile database model
const profileModel = profile(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  profileModel,
};
