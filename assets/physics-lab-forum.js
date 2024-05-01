const locale = tutorialLocale;
window.discourseTutorial = {
  // For logged users, which tutorials should we map to which pages?
  "loggedMappings": {
    "^/$": "messages",
    "-summary": "summary",
    "-invited/pending": "invited",
    "-preferences/account": "preferences",
    "-badges": "own-badges",
    "^badges$": "bages_list",
    
  },
  // For unlogged users
  "unloggedMappings": {
    "^/$": "unlogged_startpage",
    "^badges$": "badges_list",
  },
  // Tutorials
  "tutorials": {
    "messages": [
      {
        "element": "#current-user",
        "popover": {
          "title": "消息区介绍",
          "description": "点击右上角个人头像可以弹出消息界面",
          "side": "left",
          "align": "end",
          "hopeElement": "#current-user.active",
          "nextClick": "#current-user"
        }
        },
      {
        "element": "#ember304 > div.drop-down-mode.d-header-wrap > header > div > div > div.panel > div > div > div",
        "popover": {
          "side": "left",
          "title": "消息区介绍",
          "description": "在这里，您可以浏览所有与您有关的消息，点击右侧交互按钮查看对应类别的内容"
        }
        },
      {
        "element": "#quick-access-all-notifications > div",
        "popover": {
          "side": "left",
          "title": "消息区介绍",
          "description": "点击这里跳转到用户中心，查看更多内容"
        }
        }
      ],
    "summary":[
        {
        "element": "#main-outlet > div.container.viewing-self > section > section > div.details > div.primary > section > ul > li:nth-child(3) > button",
        "popover": {
          "title": "个人总结",
          "description": "点击此处可以展或预览您的开个人资料",
          "side": "left"
        }
        },
      {
        "element": "#main-outlet > div.container.viewing-self > section > div > section > nav > ul",
        "popover": {
          "title": "个人总结",
          "description": "点击选项卡以查看不同功能"
        }
        }
      ],
    "invited": [
        {
          "element": "#user-content > section.user-additional-controls > section",
          "popover": {
            "title": "共建社区",
            "description": "欢迎邀请更多用户来到我们的社区，成功邀请后您可以获得限定徽章"
          }
        }
      ],
    "preferences":[
        {
          "element": "#main-outlet > div.container.viewing-self > section > div > div > div > nav > ul > li.user-nav__preferences-profile",
          "popover": {
            "title": "个性设置",
            "description": "填写个人资料，让大家更好的认识你吧！在这里，您可以设置个人网站、用户卡片背景、个性签名等"
          }
        },
        {
          "element": "#main-outlet > div.container.viewing-self > section > div > div > div > nav > ul > li.user-nav__preferences-tracking",
          "popover": {
            "title": "个性设置",
            "description": "在这里，您可以关注/取消关注特定类别、标签的帖子或话题"
          }
        },
        {
          "element": "#main-outlet > div.container.viewing-self > section > div > div > div > nav > ul > li.user-nav__preferences-users",
          "popover": {
            "title": "个性设置",
            "description": "在这里，您可以屏蔽/解除屏蔽特定的用户"
          }
        }
      ],
    "own-badges":[
        {
          "element": "#user-content",
          "popover": {
            "title": "更多徽章",
            "description": "这里列出了您所获得的全部徽章，访问<a href='/badges'>这里</a>可以查看更多未获得徽章"
          }
        }
      ],
    "unlogged_startpage":[
      {
        "element": "#site-logo",
        "popover": {
          "title": "欢迎各位！",
          "description": "欢迎来到物理实验室网页版社区！在这里，您可以像在APP社区一样发布作品、交流学习，亦或是分享趣事"
        }
      },
      {
        "element": "#ember3 > div.drop-down-mode.d-header-wrap > header > div > div > div.panel > span > span",
        "popover": {
          "title": "登录账号加入我们吧",
          "description": " 在新版（2.6.8以后）中，将可以直接从应用访问社区。如果你已经注册了物理实验室帐号，将自动注册或登录网页版交流区帐号。如果你在物实没有验证邮箱，在交流区需要单独验证一次"
        },
        "hopeElement": "#sidebar-section-content-community > li:nth-child(1)",
        "nextClick": "#ember3 > div.drop-down-mode.d-header-wrap > header > div > div > span > button"
      },
       {
         "element": "#d-sidebar",
         "popover": {
           "title": "点击'≡'打开侧边栏",
           "description": "在这里，您可以快速跳转到不同分区、标签的帖子，发起或查看私聊、群聊等。更多功能等待您的探索和发现"
         }
       }
      
    ],
    "badges_list":[
      {
        "element": "#main-outlet > section > div > h1",
        "popover": {
          "title": "什么是徽章？",
          "description": "徽章是在论坛上用来表彰用户特定成就、贡献或者参与度的一种图标或徽记。完成特定的任务、达到一定的活跃度、获得特定的荣誉或者对社区做出杰出贡献都有机会获得属于您的徽章。"
        }
          },
      {
        "element": "#main-outlet > section > div",
        "popover": {
          "title": "徽章列表",
          "description": " 一些徽章的获得的条件是公开的，在导航栏-更多-徽章页面（也就是这里），您可以看到公开的徽章列表。"
        },
        "hopeElement": "#sidebar-section-content-community > li:nth-child(1)",
        "nextClick": "#ember3 > div.drop-down-mode.d-header-wrap > header > div > div > span > button"
          },
      {
        "element": "#ember80 > div",
        "popover": {
          "title": "如何获得徽章？",
          "description": "点击具体徽章可以查看获取条件等，注册之后，也可以在我的-徽章里面查看并佩戴已获得的徽章"
        }
           }
    
        ],
  }
}
