'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const person = require('./person');
const order = require('./orders');

// will make dynamic for testing environment
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

// database singleton
const sequelizeDatabase = new Sequelize(DATABASE_URL);

// create our working and connected person database model
const personModel = person(sequelizeDatabase, DataTypes);

// create our working and connected order database model
const orderModel = order(sequelizeDatabase, DataTypes);

// associate order with person
personModel.hasMany(orderModel, {
  foreignKey: 'personId',
  as: 'orders',
  onDelete: 'CASCADE',
});

orderModel.belongsTo(personModel, {
  foreignKey: 'personId',
  as: 'person',
});

module.exports = {
  sequelizeDatabase,
  personModel,
  orderModel,
};
