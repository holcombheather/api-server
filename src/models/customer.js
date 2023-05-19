'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
    // note that customers will be the name of the table created, pluralized
    return sequelizeDatabase.define('customers', {
        name: {
            type: DataTypes:STRING,
            allowNull: false,
        },
        age: {

        },
        pronouns: {
            
        }
    })
}
