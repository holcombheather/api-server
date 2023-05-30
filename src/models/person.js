'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  // note that persons will be the name of the table created, pluralized
  // each property: first name, last name, email correspond to a column in the database
  return sequelizeDatabase.define('persons', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
};
