# 关于x-fk

**x-fk** 是一个基于 Node.js 和 Docker 的后端服务项目，使用 Express 框架和 MySQL 数据库。

> 本项目默认将MySQL集合到Docker中，如果你不想这样，请前往修改.env文件的host

## 技术栈

- Node.js
- Express
- MySQL
- Docker
- Docker Compose

## 特性

- 🐳 Docker 容器化部署
- 🔄 开发环境热重载
- 🔒 统一的错误处理机制
- 📝 标准的 API 响应格式
- 🔑 JWT 认证
- 🌐 CORS 支持
- 📊 MySQL 数据库集成

## 快速部署

### 环境要求

- Docker
- Docker Compose
- Node.js >= 18 


### 准备工作

```bash
# 1. 在服务器上安装 Docker
curl -fsSL https://get.docker.com | sh

# 2. 启动 Docker 服务
systemctl start docker
systemctl enable docker

# 3. clone项目目录
git clone git@github.com:kongxiyi/x-fk.git
```

### 配置环境变量

1. 复制环境变量模板文件：

```bash
cd x-fk
cp .env.example .env
```

2. 根据需要修改 .env 文件中的配置：

```plaintext
# 数据库配置
DB_HOST=mysql        # Docker 环境下使用 mysql，本地开发可改为 localhost
DB_PORT=3306
DB_USER=your_username
DB_PASSWORD=your_password
DB_DATABASE=your_database

# JWT配置
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=24h

# 服务器配置
PORT=3000
```

### 使用 Docker 部署

```bash
# 1. 构建并启动服务
docker-compose up -d

# 2. 查看服务状态
docker-compose ps

# 3. 查看日志
docker-compose logs -f
```

### 本地开发

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器（带热重载）
npm run dev

# 3. 启动生产服务器
npm start
```

### 接口测试

启动服务后，可以访问以下接口测试服务是否正常：

```bash
# 健康检查接口
curl http://localhost:3000/api/health

# 错误测试接口
curl http://localhost:3000/api/error
```

### 常见问题

1. 如果遇到权限问题，请尝试使用 sudo 运行 Docker 相关命令
2. 确保所需端口（3000, 3306）未被占用
3. 如果数据库连接失败，请检查 .env 文件中的配置是否正确

### 目录结构

```
x-fk/
├── src/
│   ├── routes/      # 路由文件
│   ├── controllers/ # 控制器
│   ├── models/      # 数据模型
│   ├── utils/       # 工具函数
│   └── config/      # 配置文件
├── docker/          # Docker 相关配置
├── .env             # 环境变量
├── docker-compose.yaml
└── package.json
```

