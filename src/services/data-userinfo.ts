export default {
  username: "洪承金",
  nickname: "hocgin",
  subTitle: "Java 工程师 & 软件设计师",
  desc: "全栈",
  avatar: null,
  blog: "https://hocg.in",
  github: "@hocgin",
  email: "hocgin@gmail.com",
  tel: "13600747016",
  basic: {
    "信息": "洪承金/男/1994",
    "院校": "本科/厦门理工学院",
    "职称/证书": "软件设计师",
    "自我评价": "参与多类项目开发，涉及公众号、出行、电商、物流等，能够熟练进行服务器维护。"
  },
  experience: [
    {
      title: "快乐学习教育科技集团 (2019年5月 ~ 至今)",
      timeline: [
        {
          title: "Oracle 转 Mysql",
          lines: [
            "- 负责相关方案调研，包括阿里数据迁移服务、中间件MyBatis-JPA调整等",
            "- 去物化视图、SQL调整、存储过程等(含4大系统、10个项目)"
          ]
        },
        {
          title: "V7 新系统整体搭建和重构",
          lines: [
            "- 项目使用 Nacos、Spring Cloud Netflix、MyBatis Plus、Spring Gateway 等技术",
            "- 相关中间件采用 Starter 设计思想设计，引入既启用。其中包括: 利用Aop减少跨库表进行Join操作、Spring缓存配置方案、基于Redis分布式锁等方案。",
            "- 设计和实现基于网关的RBAC的权限系统及其相关业务开发",
          ]
        },
        {
          title: "下单流程和优惠规则的整体重构",
          lines: [
            "- 整理和梳理原先前后端复合、混乱计价的方案",
            "- 使用策略模式和责任链模式复合设计了，订单优惠的计算方式，整合了10种优惠类型，30多种优惠组合方式，并统一了多套计价逻辑",
            "- 后续新增或调整优惠方案时效由周下降为小时，并且完整的记录下优惠计算逻辑日志",
          ]
        },
        {
          title: "日常开发及代码优化",
          lines: [
            "- 报表业务的主从数据源切换",
            "- 开发加盟商课程采购(含优惠、活动等)",
            "- 通用方案设计和实现",
            "- 其他含业务开发、报表、小程序、公众号等",
          ]
        }
      ]
    },
    {
      title: "厦门安达出行科技有限公司 (2018年07月 ~ 2019年4月)",
      timeline: [
        {
          title: "长链接类型项目",
          lines: [
            "- 负责开发和维护长链接项目，该项目主要使用 Netty、Mongo。通过自定义协议来处理司机位置信息以及消息包推送等相关操作并且通过使用 Dubbo 向外提供服务。",
            "- 同样的项目还有分时租赁(类似租车)的长链接项目。"
          ]
        },
        {
          title: "微信公众号类型项目",
          lines: [
            "- 负责该项目所有微信相关的业务开发(包括前后端)，前端主要使用基于 Mobile Antd 体系和高德地图，后端主要使用 SSM 体系进行开发，由于微信公众号项目是单独项目，因此其他项目使用微信相关功能时(如:模版消息等)会通过 Dubbo 进行调用实现。"
          ]
        },
        {
          title: "其他项目的研发",
          lines: [
            "- 基于原有移动端 API 进行设计，推出和实现 APP 嵌入式页面的方案(包括授权方案和与 Native 的交互方式)",
            "- 设计和接入人脸识别的方案(阿里/百度)",
            "- 针对网约车项目推单业务进行优化(引入MQ和缓存方案)",
            "- 参与项目架构方案的设计和搭建"
          ]
        },
        {
          title: "性能优化和问题处理",
          lines: [
            "- 优化项目中 SQL 慢查询以及表结构问题",
            "- 引入 RocketMQ 重构消息推送和部分长耗时操作",
            "- 通过使用拦截器方案解决 XXS 攻击"
          ]
        }
      ]
    },
    {
      title: "货兜（厦门）科技有限公司 (2018年03月 ~ 2018年7月)",
      timeline: [
        {
          title: "工作内容",
          lines: [
            "- 负责主项目结构化改造，从传统的本地 lib 项目到标准的 maven 项目",
            "- 基于 Docker 搭建 Jenkins 的 CI/CD",
            "- 日常业务开发和维护",
            "- 人员面试和开发指导"
          ]
        }
      ]
    },
    {
      title: "货兜（厦门）科技有限公司 (2015年12月 ~ 2017年1月)",
      timeline: [
        {
          title: "消息系统",
          href: "https://hocg.in/2016/07/30/模块设计之消息模块/",
          lines: [
            "- 负责消息模块的设计和编码，包含类短信发送，APP推送，邮件发送以及前后端人员站内消息，为整个系统消息服务。",
            "- 使用了消息分发的机制， 可以准确的对消息进行分发。但是由于前端使用的是轮询机制而不是 Socket 连接，对低版本浏览器兼容好， 目前基本适用当前环境。"
          ]
        },
        {
          title: "同步订单模块",
          href: "https://hocg.in/2016/08/02/模块设计之对接同步订单模块/",
          lines: [
            "- 负责和第三方平台进行对接，通过使用 OAuth 2.0 进行授权后拉取用户订单，并进行通知。"
          ]
        },
        {
          title: "服务器搭建",
          lines: [
            "- 负责重新搭建服务端框架，使用 Nginx 配置和使用 gzip，编写和配置路由规则等。架设 Redis 并在 Tomcat 配置了 tomcat-redis-session-manager 用于在多台服务器之间实现 Session 共享。同时使用 Jenkins，通过配置和使用 Shell 脚本对多台服务器进行部署管理和切换。"
          ]
        },
        {
          title: "微信公众号开发",
          lines: [
            "- 负责开发和部署整个微信的框架，采用 SSH 整合文件系统及常用的接口开发，适用于微信的授权及 JS 相关的页面开发。"
          ]
        }
      ]
    },
    {
      title: "PHP 工作经验 (2017年6月)",
      timeline: [
        {
          title: "电商平台",
          lines: [
            "- 负责PC的前端和后端开发, 涵盖了购物车模块，订单业务，商品模块及内容模块等功能",
            "- 项目前端使用 Boostrap, 后端使用 PHP Laravel 框架, 数据库采用的是 MySQL"
          ]
        }
      ]
    }
  ],
  project: {
    href: "https://projects.hocg.in/",
    items: [
      {
        title: "Spring Boot CMS",
        href: "https://github.com/hocgin/SpringBoot-CMS",
        remark: "技术方案: Spring Security / Mongodb / Thymeleaf / Spring Boot / Quartz / WebSocket 等"
      }
    ]
  },
  skill: [
    {
      title: "后端",
      timeline: [
        {
          title: "Java",
          lines: [
            "- 能够熟练的使用 Java 进行 OO、AOP 编码",
            "- 熟悉 Guava 以及 Streams API 的使用",
            "- 掌握和了解设计模式、应用架构模式、JVM、以及线程池"
          ]
        },
        {
          title: "Spring 体系",
          lines: [
            "- 能够熟练使用 Spring Boot，了解 Spring Boot 的基本原理",
            "- 拥有使用 Quartz、WebSocket、消息队列、Spring Security、Session 共享等各项技术的开发经验",
            "- 熟悉使用 Hibernate、JPA、MyBatis 等技术进行持久化操作",
            "- 拥有 MySQL、Redis、MongoDB 等存储架构开发经验，能够使用注解方式对数据进行缓存处理",
            "- 掌握和了解 Spring Cloud(Alibaba/Netflix) 的使用",
            "- 能够使用 JUnit 进行单元测试",
            "- 了解一些应用安全和优化方面的知识"
          ]
        },
        {
          title: "其他",
          lines: [
            "- 熟悉 Maven、Gradle、Jenkins、Docker、K8s 等 DevOps 工具",
            "- 能够熟练的对 Linux 进行操作",
            "- 拥有 MySQL、Redis、MongoDB 等存储架构开发经验，能够使用注解方式对数据进行缓存处理",
            "- 了解和使用 Nginx、Ngrok、Tomcat、Git、RocketMQ",
            "- 了解 OAuth2.0 认证、TCP/IP、HTTP 协议以及 RESTful API 规范"
          ]
        }
      ]
    },
    {
      title: "前端",
      timeline: [
        {
          title: "简单描述一下",
          lines: [
            "- 能够熟练的进行前端项目的开发，使用过目前主流的前端框架，包括但不限于 React、Vue、JQuery等框架，并且能够使用 Less、Sass 等 CSS 编译工具，同时也接触过一些自动化工具，比如: Webpack、Gulp、Umi等",
            "- 接触过 Antd、LayerUI、Bootstrap、iView 等 UI 框架",
            "- 开发过 小程序、微信公众号、响应式页面以及开源项目定制化(参照 GitHub)",
            "- 了解一些前端安全和优化方面的知识"
          ]
        }
      ]
    }
  ]
}
