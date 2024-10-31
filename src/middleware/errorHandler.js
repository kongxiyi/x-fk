/**
 * 全局错误处理中间件
 * @param {Error} err - 错误对象
 * @param {Request} req - Express 请求对象
 * @param {Response} res - Express 响应对象
 * @param {NextFunction} next - Express 下一个中间件函数
 */
const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || '服务器内部错误';

  res.status(status).json({
    success: false,
    status,
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : {}
  });
};

module.exports = errorHandler; 