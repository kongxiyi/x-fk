class ApiResponse {
  static success(data = null, message = '操作成功') {
    return {
      code: 200,
      success: true,
      message,
      data
    };
  }

  static error(message = '操作失败', code = 400, errors = null) {
    return {
      code,
      success: false,
      message,
      errors
    };
  }

  static serverError(message = '服务器内部错误') {
    return this.error(message, 500);
  }

  static notFound(message = '资源未找到') {
    return this.error(message, 404);
  }

  static unauthorized(message = '未授权访问') {
    return this.error(message, 401);
  }

  static forbidden(message = '禁止访问') {
    return this.error(message, 403);
  }
}

module.exports = ApiResponse; 