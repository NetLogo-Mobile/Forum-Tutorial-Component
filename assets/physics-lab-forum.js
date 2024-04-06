const locale = tutorialLocale;
window.discourseTutorial = {
  // For logged users, which tutorials should we map to which pages?
  "loggedMappings": {
    "^/$": "messages",
    "-summary": "summary",
    "-invited/pending": "invited",
    "-preferences/account": "preferences",
    "-badges": "own-badges",
    
  },
  // For unlogged users
  "unloggedMappings": {
    "^/t/topic/314$": "messages"
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
        "element": "#ember5 > header > div > div > div.panel > div:nth-child(3) > div > div > div > div > div.menu-tabs-container",
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
    // https://pl.turtlesim.com/u/{username}/badges
        {
          "element": "#user-content",
          "popover": {
            "title": "更多徽章",
            "description": "这里列出了您所获得的全部徽章，访问<a href='/badges'>这里</a>可以查看更多未获得徽章"
          }
        }
      ]
  }
}
