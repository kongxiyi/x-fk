/**
 * 导入必要的依赖包
 */
const express = require('express');  // Express 框架核心包
const cors = require('cors');        // 跨域资源共享中间件
const helmet = require('helmet');    // 安全相关的 HTTP 头中间件
const morgan = require('morgan');    // HTTP 请求日志中间件
require('dotenv').config();         // 环境变量配置

/**
 * 导入本地模块
 */
const { sequelize } = require('./models');          // 数据库 ORM 实例
const routes = require('./routes');                 // 路由模块
const errorHandler = require('./middleware/errorHandler');  // 错误处理中间件

// 创建 Express 应用实例
const app = express();
 
/**
 * 配置全局中间件
 * -----------------------------
 * cors: 允许跨域请求
 * helmet: 增加安全相关的 HTTP 头
 * morgan: 记录 HTTP 请求日志
 * express.json: 解析 JSON 格式的请求体
 * express.urlencoded: 解析 URL 编码的请求体
 */
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * 注册路由
 * -----------------------------
 * 所有 API 路由都以 /api 为前缀
 */
app.use('/api', routes);

/**
 * 注册错误处理中间件
 * -----------------------------
 * 统一处理应用中的错误
 */
app.use(errorHandler);

// 设置服务器端口，优先使用环境变量中的配置
const PORT = process.env.PORT || 3000;

/**
 * 数据库同步和服务器启动
 * -----------------------------
 * sequelize.sync(): 确保数据库结构与模型定义同步
 * force: false - 不强制重建表
 */
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}); 