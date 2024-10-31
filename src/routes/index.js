const express = require('express');
const router = express.Router();

// 健康检查路由
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK啊a 啊' });
});

module.exports = router; 