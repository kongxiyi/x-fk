/**
 * 测试路由模块
 * 用于测试各种 API 响应情况
 */
const express = require('express');
const router = express.Router();
const ApiResponse = require('../../utils/response');

/**
 * GET /test-error/:type
 * 测试不同类型的错误响应
 * @param {string} type - 错误类型
 * @returns {Object} 返回对应类型的错误响应
 * 
 * 支持的错误类型：
 * - unauthorized: 401 未授权
 * - forbidden: 403 禁止访问
 * - not-found: 404 资源未找到
 * - validation: 400 数据验证失败
 * - server-error: 500 服务器错误
 */
router.get('/:type', (req, res) => {
  const { type } = req.params;
  
  switch (type) {
    case 'unauthorized':
      res.status(401).json(ApiResponse.unauthorized('用户未登录或token已过期'));
      break;
      
    case 'forbidden':
      res.status(403).json(ApiResponse.forbidden('没有操作权限'));
      break;
      
    case 'not-found':
      res.status(404).json(ApiResponse.notFound('请求的资源不存在'));
      break;
      
    case 'validation':
      res.status(400).json(ApiResponse.error('数据验证失败', 400, {
        username: '用户名不能为空',
        password: '密码长度必须大于6位'
      }));
      break;
      
    case 'server-error':
      res.status(500).json(ApiResponse.serverError('服务器处理请求时发生错误'));
      break;
      
    default:
      res.status(400).json(ApiResponse.error('未知的错误类型'));
  }
});

module.exports = router; 