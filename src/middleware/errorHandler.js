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