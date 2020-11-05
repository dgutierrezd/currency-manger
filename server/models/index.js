const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'clpx8mopmk4f727o',
    't2200459g38bbmvj',
    'uodo9xjm93bnxgwl',
    {
        host: 'gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        dialect: 'mysql'
    }
);

const db = {
    Gasto: sequelize.import('./gasto.js')
}

db.sequelize = sequelize;

module.exports = db;