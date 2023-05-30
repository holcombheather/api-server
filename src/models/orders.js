'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('Orders', {
    personId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product: {
      type: DataTypes.ENUM('Item 1', 'Item 2', 'Item 3', 'Item 4'),
      allowNull: false,
      defaultValue: 'Item 1',
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    status: {
      type: DataTypes.ENUM('placed', 'shipped', 'delivered', 'cancelled'),
      allowNull: false,
      defaultValue: 'placed',
    },
  });
};
