# Fireboom 示例项目

基于Fireboom 2.0的示例项目，提供了完整的用例。

前往官网->[fireboom.io](http://fireboom.io)

## 用例

### 基本操作

- 增删改查：CURD查询，如分页查询
- 实时查询：将GET请求转变成准实时推送
- 订阅查询：接入消息队列等实时消息
- 关联查询：同数据源有外键关联查询
- 原生SQL：graphql无法覆盖的场景
    - SQL查询
    - SQL变更
- 关联创建：关联关系如何创建

### 指令相关

- 参数注入
    - 日期注入


- 跨源关联
    - 同数据源无外键关联查询
    - 跨数据源关联查询

### 钩子相关



## 安装

支持多种安装或体验方式，推荐使用 github codespace，可快速在线体验！

### github codespace 体验



### gitpod体验


### 本地安装

## 环境准备

### mysql

启动mysql脚本如下：
```
cd script
chmod 777 start-mysql.sh
./start-mysql.sh

```
https://blog.csdn.net/qq_35893120/article/details/118360429


chmod 777 update.sh


env如何复制上去

```
AUTH0_SECRET="xxxxx"
# 数据库URL
DB_RBAC_URL="mysql://root:123456@localhost:3306/rbac"
FB_API_INTERNAL_URL="http://localhost:9991"
FB_API_LISTEN_HOST="localhost"
FB_API_LISTEN_PORT=9991
# 外网地址，启动后去控制台修改
FB_API_PUBLIC_URL="http://localhost:9991"
FB_CSRF_TOKEN_SECRET="XgloxMqlZQD"
FB_LOG_LEVEL="debug"
FB_SECURE_COOKIE_BLOCK_KEY="fJkYInBRWRiGlflRKJeMsSpGSHEvJthk"
FB_SECURE_COOKIE_HASH_KEY="sHwzzwQBZUOQQGbdvcSQxUXsPMzuJGmh"
FB_SERVER_LISTEN_HOST="localhost"
FB_SERVER_LISTEN_PORT=9992
FB_SERVER_URL="http://localhost:9992"
OIDC_CD_SECRET="XXXXXX"
S3_TX_SECRET="XXXX"
prismaEngineVersion="694eea289a8462c80264df36757e4fdc129b1b32"
prismaVersion="3.13.0"
```

设置->系统 API外网地址
expert-space-acorn-pjx5rw9r7jrhrgg4-9991.app.github.dev
- 环境变量设置：FB_API_PUBLIC_URL
- 静态值设置

9991和5173 端口设置为公开


