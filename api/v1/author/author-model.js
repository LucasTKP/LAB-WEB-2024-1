const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Author = database.sequelize.define('Author', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    biography: {
        type: Sequelize.TEXT
    },
    birthdate: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false,
    tableName: 'tb_author' 
});

module.exports = Author;
