'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  // note that customers will be the name of the table created, pluralized
  return sequelizeDatabase.define('customers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pronouns: {
      type: DataTypes.ENUM,
      values: ['they/them', 'he/them', 'she/her', 'he/him'],
    },
  });
};
