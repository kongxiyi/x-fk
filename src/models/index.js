const { Sequelize } = require('sequelize');
const config = require('../config/database');

console.log('Attempting to connect to database...');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    ...config,
    dialectOptions: {
      connectTimeout: 60000
    }
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('数据库连接成功。');
  } catch (error) {
    console.error('数据库连接错误:', {
      message: error.message,
      errorType: error.name,
      original: error.original
    });
    process.exit(1);
  }
}

testConnection();

const db = {
  sequelize,
  Sequelize,
};

module.exports = db; 