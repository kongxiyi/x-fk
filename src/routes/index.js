/**
 * 主路由模块
 * 负责整合和注册所有子路由模块
 */
const express = require('express');
const router = express.Router();

/**
 * 导入子路由模块
 * -----------------------------
 */
const healthRoutes = require('./test/health');
const testRoutes = require('./test/error');

/**
 * 注册子路由
 * -----------------------------
 */
// 健康检查路由 - /health
router.use('/health', healthRoutes);
// 测试错误路由 - /test-error
router.use('/test-error', testRoutes);



module.exports = router; 