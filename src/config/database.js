require('dotenv').config();

/**
 * Sequelize 数据库配置对象
 * 从环境变量中读取敏感配置信息
 */
const config = {
  username: process.env.DB_USER,     // 数据库用户名
  password: process.env.DB_PASS,     // 数据库密码
  database: process.env.DB_NAME,     // 数据库名称
  host: process.env.DB_HOST,         // 数据库主机地址
  port: process.env.DB_PORT,         // 数据库端口
  dialect: 'mysql',                  // 数据库类型：使用 MySQL
  logging: console.log,              // 启用 SQL 查询日志记录
  
  // 连接池配置
  pool: {
    max: 5,        // 连接池中最大连接数
    min: 0,        // 连接池中最小连接数
    acquire: 30000, // 获取连接最长等待时间（毫秒）
    idle: 10000    // 连接在释放前可以空闲的最长时间（毫秒）
  }
};

module.exports = config; 