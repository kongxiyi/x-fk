/**
 * 健康检查路由模块
 * 用于监控服务运行状态
 */
const express = require('express');
const router = express.Router();
const ApiResponse = require('../../utils/response');

/**
 * GET /health
 * 健康检查接口
 * @returns {Object} 返回服务运行状态
 */
router.get('/', (req, res) => {
  res.status(200).json(ApiResponse.success({ status: 'OK' }, '服务运行正常'));
});

module.exports = router; 