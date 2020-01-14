const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'project_shoe',
    'root',
    't5xsm+kt8A',
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

export default db;