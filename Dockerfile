FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

# 开发环境
CMD ["npm", "run", "dev"]
# CMD ["npm", "start"] 