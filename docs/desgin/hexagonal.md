---
title: 六边形实践
---

[Golang领域模型-六边形架构](https://mp.weixin.qq.com/s/wXzfJ9HNAdk6QEyw8ez-Yw)

前言： 六边形架构又称“端口适配器架构”，实际上也是一种分层架构，只不过由上下或者左右变成了内部与外部。其核心理念就是应用通过端口与外部进行交互的。核心的业务逻辑（领域模型）与外部资源（数据库等资源）完全隔离，仅通过适配器进行交互，解决了业务逻辑与用户数据交错的问题，很好的实现了前后端分离。


## 分层架构问题：
- 某些逻辑处理或某些数据处理该放在哪一层？
- 该分多少层？
- 平层和跨层调用是否合理?


### 项目目录

domain - 领域模型
aggregate - 聚合
entity - 实体
dto - 传输对象
po - 持久化对象
*.go - 领域服务

adapter - 端口适配器
controller - 输入适配器
repository - 输出适配器

server - 服务端程序入口
conf - 配置文件
main.go - 主函数
infra - 基础设施
*go - 基础设施组件
domain 领域模型目录

对应六边形的内部，主要放领域服务service的代码。子目录分为aggregate聚合根目录、entity实体目录。
adapter 适配器目录

对应六边形的外部，主要是输入和输出的适配器。controller子目录负责 http的api输入，repository子目录负责实体的读写。dto子目录是controller或repository的外部输入输出对象。po子目录是数据库的持久化对象，这些对象是生成的。



### The Clean Architecture Struct
```bash tree --dirsfirst internal/
internal/
├── app
│   ├── adapter
│   │   ├── mysql
│   │   │   ├── model
│   │   │   │   └── user.go
│   │   │   └── conn.go
│   │   ├── repository
│   │   │   └── user.go
│   │   ├── view
│   │   │   └── index.tmpl
│   │   └── controller.go
│   ├── application
│   │   ├── service
│   │   │   └── exchange.go
│   │   └── usecase
│   │       ├── user.go
│   │       └── user_test.go
│   └── domain
│       ├── factory
│       │   └── user.go
│       ├── repository
│       │   └── user.go
│       ├── service
│       │   └── user.go
│       ├── valueobject
│       │   └── user.go
│       └── user.go
└── version
    └── build.go
```


### 六边形项目目录结构

####  adapter 适配器目录
- controller - 输入适配器
- repository - 输出适配器

#### domain - 领域模型
- aggregate - 聚合
- entity - 实体
- dto - 传输对象
- po - 持久化对象
- *.go - 领域服务
