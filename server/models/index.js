const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'project_shoe',
    'root',
    'Daniel020900',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const db = {
    Gasto: sequelize.import('./gasto.js')
}

db.sequelize = sequelize;

module.exports = db;