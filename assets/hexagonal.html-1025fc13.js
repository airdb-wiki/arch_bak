import{_ as a,M as e,p as l,q as i,R as s,t as r,N as p,a1 as o}from"./framework-5866ffd3.js";const c={},t={href:"https://mp.weixin.qq.com/s/wXzfJ9HNAdk6QEyw8ez-Yw",target:"_blank",rel:"noopener noreferrer"},d=o(`<p>前言： 六边形架构又称“端口适配器架构”，实际上也是一种分层架构，只不过由上下或者左右变成了内部与外部。其核心理念就是应用通过端口与外部进行交互的。核心的业务逻辑（领域模型）与外部资源（数据库等资源）完全隔离，仅通过适配器进行交互，解决了业务逻辑与用户数据交错的问题，很好的实现了前后端分离。</p><h2 id="分层架构问题" tabindex="-1"><a class="header-anchor" href="#分层架构问题" aria-hidden="true">#</a> 分层架构问题：</h2><ul><li>某些逻辑处理或某些数据处理该放在哪一层？</li><li>该分多少层？</li><li>平层和跨层调用是否合理?</li></ul><h3 id="项目目录" tabindex="-1"><a class="header-anchor" href="#项目目录" aria-hidden="true">#</a> 项目目录</h3><p>domain - 领域模型 aggregate - 聚合 entity - 实体 dto - 传输对象 po - 持久化对象 *.go - 领域服务</p><p>adapter - 端口适配器 controller - 输入适配器 repository - 输出适配器</p><p>server - 服务端程序入口 conf - 配置文件 main.go - 主函数 infra - 基础设施 *go - 基础设施组件 domain 领域模型目录</p><p>对应六边形的内部，主要放领域服务service的代码。子目录分为aggregate聚合根目录、entity实体目录。 adapter 适配器目录</p><p>对应六边形的外部，主要是输入和输出的适配器。controller子目录负责 http的api输入，repository子目录负责实体的读写。dto子目录是controller或repository的外部输入输出对象。po子目录是数据库的持久化对象，这些对象是生成的。</p><h3 id="the-clean-architecture-struct" tabindex="-1"><a class="header-anchor" href="#the-clean-architecture-struct" aria-hidden="true">#</a> The Clean Architecture Struct</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">internal/</span></span>
<span class="line"><span style="color:#D4D4D4;">├── app</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├── adapter</span></span>
<span class="line"><span style="color:#D4D4D4;">│   │   ├── mysql</span></span>
<span class="line"><span style="color:#D4D4D4;">│   │   │   ├── model</span></span>
<span class="line"><span style="color:#D4D4D4;">│   │   │   │   └── user.go</span></span>
<span class="line"><span style="color:#D4D4D4;">│   │   │   └── conn.go</span></span>
<span class="line"><span style="color:#D4D4D4;">│   │   ├── repository</span></span>
<span class="line"><span style="color:#D4D4D4;">│   │   │   └── user.go</span></span>
<span class="line"><span style="color:#D4D4D4;">│   │   ├── view</span></span>
<span class="line"><span style="color:#D4D4D4;">│   │   │   └── index.tmpl</span></span>
<span class="line"><span style="color:#D4D4D4;">│   │   └── controller.go</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├── application</span></span>
<span class="line"><span style="color:#D4D4D4;">│   │   ├── service</span></span>
<span class="line"><span style="color:#D4D4D4;">│   │   │   └── exchange.go</span></span>
<span class="line"><span style="color:#D4D4D4;">│   │   └── usecase</span></span>
<span class="line"><span style="color:#D4D4D4;">│   │       ├── user.go</span></span>
<span class="line"><span style="color:#D4D4D4;">│   │       └── user_test.go</span></span>
<span class="line"><span style="color:#D4D4D4;">│   └── domain</span></span>
<span class="line"><span style="color:#D4D4D4;">│       ├── factory</span></span>
<span class="line"><span style="color:#D4D4D4;">│       │   └── user.go</span></span>
<span class="line"><span style="color:#D4D4D4;">│       ├── repository</span></span>
<span class="line"><span style="color:#D4D4D4;">│       │   └── user.go</span></span>
<span class="line"><span style="color:#D4D4D4;">│       ├── service</span></span>
<span class="line"><span style="color:#D4D4D4;">│       │   └── user.go</span></span>
<span class="line"><span style="color:#D4D4D4;">│       ├── valueobject</span></span>
<span class="line"><span style="color:#D4D4D4;">│       │   └── user.go</span></span>
<span class="line"><span style="color:#D4D4D4;">│       └── user.go</span></span>
<span class="line"><span style="color:#D4D4D4;">└── version</span></span>
<span class="line"><span style="color:#D4D4D4;">    └── build.go</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="六边形项目目录结构" tabindex="-1"><a class="header-anchor" href="#六边形项目目录结构" aria-hidden="true">#</a> 六边形项目目录结构</h3><h4 id="adapter-适配器目录" tabindex="-1"><a class="header-anchor" href="#adapter-适配器目录" aria-hidden="true">#</a> adapter 适配器目录</h4><ul><li>controller - 输入适配器</li><li>repository - 输出适配器</li></ul><h4 id="domain-领域模型" tabindex="-1"><a class="header-anchor" href="#domain-领域模型" aria-hidden="true">#</a> domain - 领域模型</h4><ul><li>aggregate - 聚合</li><li>entity - 实体</li><li>dto - 传输对象</li><li>po - 持久化对象</li><li>*.go - 领域服务</li></ul>`,16);function D(v,u){const n=e("ExternalLinkIcon");return l(),i("div",null,[s("p",null,[s("a",t,[r("Golang领域模型-六边形架构"),p(n)])]),d])}const m=a(c,[["render",D],["__file","hexagonal.html.vue"]]);export{m as default};
