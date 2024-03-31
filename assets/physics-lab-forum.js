window.discourseTutorial = {
    "forceStartSelectors": {
      "/src/": "#navStart"
    },
    "pagelist": {
      "/t/topic/314": "messages"
    },
    "initConfig": {
      "stageBackground": "#cccccc",
      "doneBtnText": "完成",
      "closeBtnText": "关闭",
      "nextBtnText": "下一步",
      "prevBtnText": "上一步",
      "allowClose": false,
      "keyboardControl": true
    },
    "pageDriversMap": {
      "messages": [
        {
          "element": "#current-user",
          "popover": {
            "title": "消息区介绍",
            "description": "点击右上角个人头像可以弹出消息界面",
            "position": "left",
            "hopeElement": "#current-user.active",
            "nextClick" : "#current-user"
          }
        },
        {
          "element": "#ember5 > header > div > div > div.panel > div:nth-child(3) > div > div > div > div > div.menu-tabs-container",
          "popover": {
            "position": "left",
            "title": "消息区介绍",
            "description": "在这里，您可以浏览所有与您有关的消息，点击右侧交互按钮查看对应类别的内容"
          }
        },
        {
          "element": "#quick-access-all-notifications > div",
          "popover": {
            "position": "left",
            "title": "消息区介绍",
            "description": "点击这里跳转到用户中心，查看更多内容"
          }
        }
        ]
    }
  }