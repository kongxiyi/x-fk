const { Sequelize } = require('sequelize');
const config = require('../config/database');

// 输出数据库连接尝试的日志
console.log('Attempting to connect to database...');

// 创建 Sequelize 实例，配置数据库连接参数
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    ...config,
    dialectOptions: {
      connectTimeout: 60000  // 设置连接超时时间为 60 秒
    }
  }
);

/**
 * 测试数据库连接的函数
 * @param {number} retries - 重试次数，默认为 5 次
 * @returns {Promise<boolean>} - 连接成功返回 true
 */
async function testConnection(retries = 5) {
  for (let i = 0; i < retries; i++) {
    try {
      // 尝试验证数据库连接
      await sequelize.authenticate();
      console.log('数据库连接成功。');
      return true;
    } catch (error) {
      // 连接失败时记录详细错误信息
      console.error(`数据库连接尝试 ${i + 1}/${retries} 失败:`, {
        message: error.message,
        errorType: error.name,
        original: error.original
      });
      
      if (i < retries - 1) {
        // 如果还有重试机会，等待 5 秒后重试
        console.log('等待 5 秒后重试...');
        await new Promise(resolve => setTimeout(resolve, 5000));
      } else {
        // 如果所有重试都失败，退出进程
        process.exit(1);
      }
    }
  }
}

// 执行数据库连接测试
testConnection();

// 导出数据库配置对象
const db = {
  sequelize,    // Sequelize 实例
  Sequelize,    // Sequelize 类
};

module.exports = db; 