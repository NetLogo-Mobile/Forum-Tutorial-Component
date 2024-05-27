const locale = tutorialLocale;
window.discourseTutorial = {
  // For logged users, which tutorials should we map to which pages?
  "loggedMappings": {
    "^/$": "logged_startpage",
    "-summary": "summary",
    "-invited/pending": "invited",
    "-preferences/account": "preferences",
    "-badges": "own-badges",
    "^/badges$": "badges_list",
    "^/tags$": "tag_list",
    "^/categories$": "categories",
    "^\/t": "logged_firstPost",
    "^/g$": "group",
    "^/about$": "about",
    "-notifications": "notifications",
    "-messages": "messages",
    
    

  },
  // For unlogged users
  "unloggedMappings": {
    "^/$": "unlogged_startpage",
    "^/badges$": "badges_list",
    "^/tags$": "tag_list",
    "^\/t": "unlogged_firstPost",
    "^/g$": "group",
    

  },
  // Tutorials
  "tutorials": {
    "logged_startpage": [
      {
        "element": "#current-user",
        "popover": {
          "title": "消息区介绍",
          "description": "点击右上角个人头像可以弹出消息界面",
          "side": "left",
          "align": "end",
          "hopeElement": "#current-user.active",
          "nextClick": "#current-user > button"
        }
      },
      {
        "element": ".user-menu.revamped.menu-panel.drop-down",
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
    "summary": [
      {
        "element": "#main-outlet > div.container.viewing-self > section > div > section > nav > ul",
        "popover": {
          "title": "个性化设置",
          "description": "论坛提供了丰富的可自定义 功能，点击选项卡以查看不同功能。如果有任何问题，欢迎搜索或者联系我们<a href='/about'>友好的管理人员</a>"
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
    "preferences": [
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
    "own-badges": [
      {
        "element": "#user-content",
        "popover": {
          "title": "更多徽章",
          "description": "这里列出了您所获得的全部徽章，访问<a href='/badges'>这里</a>可以查看更多未获得徽章"
        }
      }
    ],
    "unlogged_startpage": [
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
          "description": " 在新版（2.6.8以后）中，将可以直接从应用访问社区。如果你已经注册了物理实验室帐号，将自动注册或登录网页版交流区帐号。如果你在物实没有验证邮箱，在交流区需要单独验证一次",
          "hopeElement": "#sidebar-section-content-community > li:nth-child(1)",
          "nextClick": "#ember3 > div.drop-down-mode.d-header-wrap > header > div > div > span > button"
        },
      },
      {
        "element": "#d-sidebar",
        "popover": {
          "title": "点击'≡'打开侧边栏",
          "description": "在这里，您可以快速跳转到不同分区、标签的帖子，发起或查看私聊、群聊等。更多功能等待您的探索和发现"
        }
      }
    ], //Pending tests
    "badges_list": [
      {
        "element": "#main-outlet > section > div > h1",
        "popover": {
          "title": "什么是徽章？",
          "description": "徽章是在论坛上用来表彰用户特定成就、贡献或者参与度的一种图标或徽记。完成特定的任务、达到一定的活跃度、获得特定的荣誉或者对社区做出杰出贡献都有机会获得属于您的徽章。"
        }
      },
      {
        "element": ".badge-card",
        "popover": {
          "title": "如何获得徽章？",
          "description": "点击具体徽章可以查看获取条件等，注册之后，也可以在我的-徽章里面查看并佩戴已获得的徽章",
          "hopeElement": "#sidebar-section-content-community > li:nth-child(1)",
          "nextClick": ".btn-sidebar-toggle"
        }
      },
      {
        "element": ".sidebar-more-section-links-details-summary",
        "popover": {
          "title": "徽章列表",
          "description": " 一些徽章的获得的条件是公开的，在导航栏-更多-徽章页面，您可以看到公开的徽章列表。",
          "side": "top",
          "align": 'start'
        },
      },
    ],
    "tag_list": [
      {
        "element": "#main-outlet > div.container.tags-index > div.list-controls > div > h2",
        "popover": {
          "title": "关于标签",
          "description": "除了自带的语言标签外，用户可以给自己的帖子带上相关的标签。点击“≡”打开侧边栏，可以快速查看不同标签分类下的内容"
        }
      },
      {
        "element": ".tags-list.tag-list",
        "popover": {
          "title": "更多标签",
          "description": "如果您有任何有关标签的建议，都可以发布帖子让我们知道您的意见和建议，欢迎您与我们共建论坛"
        }
      },
      {
        "element": ".tag-box",
        "popover": {
          "title": "快速跳转",
          "description": "点击不同标签可以跳转至对应标签的帖子列表。tips：您也可以在作品列表或搜索的时候指定特定的标签"
        }
      }
    ],
    "categories": [
      {
        "element": ".navigation-container",
        "popover": {
          "title": "关于类别",
          "description": "每一个帖子都只能选择一个类别，为了避免错误分类，请阅读不同类别下应该发表什么样的帖子"
        }
      },
      {
        "element": ".category-box.category-box-general",
        "popover": {
          "title": "共建社区",
          "description": "发现有帖子分类，可以点击下方 旗帜 形状的图标提示管理人员，详情查看<a href='/t/topic/294/1'>如何反馈不恰当内容</a>"
        }
      }
    ],
    "unlogged_firstPost": [
      {
        "element": "#topic-title",
        "popover": {
          "title": "加入讨论吧",
          "description": "优秀的看法总是在交流中诞生，注册或登录，与大家一齐讨论吧。"
        }
      },
      {
        "element": "#post_1 > div > div.topic-avatar",
        "popover": {
          "title": "用户资料",
          "description": "不论是话题的发起者还是回复者，都可以点击头像查看TA的资料/名片。同时，您在发表看法的时候也无需署名",
          "hopeElement": "#user-card > div > div.card-row.first-row",
          "nextClick": "#post_1 > div > div.topic-avatar > div > a"
        },

      },
      {
        "element": "#user-card > div",
        "popover": {
          "title": "用户名片",
          "description": "点击用户名可以查看详细资料，注册账号后，您也可以填写并生成您独一无二的名片"
        }
      }

    ], //Pending tests
    "logged_firstPost": [
      {
        "element": ".topic-notifications-button",
        "popover": {
          "title": "通知设置",
          "description": "您可以在此设置有关本话题活动的消息提示方式，例如：是否需要在有回复的时候显示为未读。对于您回复过的话题，我们会有一些默认的设置，您可以在个人设置-消息通知里面进行修改"
        }
      },
      {
        "element": ".actions",
        "popover": {
          "title": "相关操作",
          "description": "操作栏里面可以进行点赞、翻译、收藏、加入书签、编辑帖子（如有权限）等操作。如果您认为帖子有不合适的地方，可以点击旗帜图标进行举报"
        },

      },
      {
        "element": "widget-button.reply.create",
        "popover": {
          "title": "参与讨论",
          "description": "交流时请保持友善，共建美好社区。您可以点击侧边栏-更多-常见问题解答 查看发言注意事项请，或搜索FAQ"
        }
      }

    ],
    "group": [
      {
        "element": ".groups-header",
        "popover": {
          "title": "什么是群组？",
          "description": "“群组”功能允许用户创建和加入特定主题或兴趣小组，促进围绕共同话题的深入交流与合作。"
        }
      },
      {
        "element": ".group-box",
        "popover": {
          "title": "加入群组",
          "description": "除了系统默认的群组之外，你也可以加入一个群组与志同道合的人一起讨论。点击群组卡片，查看细内容，您可以选择直接申请或者通过私信功能与群组的管理员联系"
        },

      },
      {
        "element": "[data-group-name='admins']",
        "popover": {
          "title": "创建一个群组",
          "description": "您可以随时私信联系<a href='/about'>管理人员</a>创建一个特定的群组并将您设定为群组管理人员"
        }
      },
      {
        "element": "[data-group-name='Editors-Chinese']",
        "popover": {
          "title": "联系组织人员",
          "description": "一些群组可能在APP和社区内为大家提供特定的帮助，您可以点击卡片查看详细说明、联系成员或者查看群组活动"
        }
      }

    ],
    "about":[
      {
        "element": "section.about.admins > h3",
        "popover": {
          "title": "关于“管理人员”",
          "description": "有任何意见、建议、反馈都可以随时联系我们的管理人员，如果您希望创建新的标签、类别、群组，也可以发布帖子或者和管理人员一同讨论"
        }
      },
      {
        "element": ".user-info",
        "popover": {
          "title": "私信功能",
          "description": "您可以通过“私信”与管理人员取得联系（当然，也可以通过私信联系其他用户）"
        }
      }
    ],
    "notifications": [
      {
        "element": "#user-content",
        "popover": {
          "title": "什么是“通知”？",
          "description": "通知是系统向用户发送的信息，例如：当有人回复、点赞、@、私信你，或是有新的话题符合你的关注设定。"
        }
      },
      {
        "element": ".user-nav__personal-messages",
        "popover": {
          "title": "“通知”与“消息”",
          "description": "二者并不相同。消息也就是私信功能的收件箱，比如用户可以通过站内信功能向其他用户发送个人消息，进行一对一的沟通"
        }
      },
      {
        "element": ".user-nav__preferences",
        "popover": {
          "title": "个性化设置",
          "description": "通知可以根据用户的偏好设置为即时推送、邮件通知等形式"
        }
      }
    ],
    "messages": [
      {
        "element": ".category-breadcrumb",
        "popover": {
          "title": "什么是“消息”？",
          "description": "消息是用户间的交流内容，如主题讨论、私信、评论等。点击用户头像，在弹出的用户卡片里面点击私信按钮即可与用户一对一沟通"
        }
      },
      {
        "element": ".new-private-message",
        "popover": {
          "title": "群发消息",
          "description": "类似邮件，您也可以同时将消息发送给多位用户，此时就类似创建了一个小的群聊，只有选择的用户可以看到有关信息"
        }
      }
    ]

  }
}
