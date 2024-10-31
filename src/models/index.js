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

async function testConnection(retries = 5) {
  for (let i = 0; i < retries; i++) {
    try {
      await sequelize.authenticate();
      console.log('数据库连接成功。');
      return true;
    } catch (error) {
      console.error(`数据库连接尝试 ${i + 1}/${retries} 失败:`, {
        message: error.message,
        errorType: error.name,
        original: error.original
      });
      
      if (i < retries - 1) {
        console.log('等待 5 秒后重试...');
        await new Promise(resolve => setTimeout(resolve, 5000));
      } else {
        process.exit(1);
      }
    }
  }
}

testConnection();

const db = {
  sequelize,
  Sequelize,
};

module.exports = db; 