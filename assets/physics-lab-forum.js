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
          "title": locale("tutorials.logged_startpage.message_area_intro.title"),
          "description": locale("tutorials.logged_startpage.message_area_intro.description"),
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
          "title": locale("tutorials.logged_startpage.browse_messages.title"),
          "description": locale("tutorials.logged_startpage.browse_messages.description")
        }
      },
      {
        "element": "#quick-access-all-notifications > div",
        "popover": {
          "side": "left",
          "title": locale("tutorials.logged_startpage.goto_user_center.title"),
          "description": locale("tutorials.logged_startpage.goto_user_center.description")
        }
      }
    ],
    "summary": [
      {
        "element": "#main-outlet > div.container.viewing-self > section > div > section > nav > ul",
        "popover": {
          "title": locale("tutorials.summary.personalization_settings.title"),
          "description": locale("tutorials.summary.personalization_settings.description")
        }
      }
    ],
    "invited": [
      {
        "element": "#user-content > section.user-additional-controls > section",
        "popover": {
          "title": locale("tutorials.invited.community_building.title"),
          "description": locale("tutorials.invited.community_building.description")
        }
      }
    ],
    "preferences": [
      {
        "element": "#main-outlet > div.container.viewing-self > section > div > div > div > nav > ul > li.user-nav__preferences-profile",
        "popover": {
          "title": locale("tutorials.preferences.profile_settings.title"),
          "description": locale("tutorials.preferences.profile_settings.description")
        }
      },
      {
        "element": "#main-outlet > div.container.viewing-self > section > div > div > div > nav > ul > li.user-nav__preferences-tracking",
        "popover": {
          "title": locale("tutorials.preferences.follow_unfollow.title"),
          "description": locale("tutorials.preferences.follow_unfollow.description")
        }
      },
      {
        "element": "#main-outlet > div.container.viewing-self > section > div > div > div > nav > ul > li.user-nav__preferences-users",
        "popover": {
          "title": locale("tutorials.preferences.block_unblock_users.title"),
          "description": locale("tutorials.preferences.block_unblock_users.description")
        }
      }
    ],
    "own-badges": [
      {
        "element": "#user-content > p",
        "popover": {
          "title": locale("tutorials.own-badges.more_badges.title"),
          "description": locale("tutorials.own-badges.more_badges.description")
        }
      }
    ],
    // Pending tests
    "unlogged_startpage": [
      {
        "element": "#site-logo",
        "popover": {
          "title": locale("tutorials.unlogged_startpage.welcome_message.title"),
          "description": locale("tutorials.unlogged_startpage.welcome_message.description")
        }
      },
      {
        "element": "#ember3 > div.drop-down-mode.d-header-wrap > header > div > div > div.panel > span > span",
        "popover": {
          "title": locale("tutorials.unlogged_startpage.login_invitation.title"),
          "description": locale("tutorials.unlogged_startpage.login_invitation.description"),
          "hopeElement": "#sidebar-section-content-community > li:nth-child(1)",
          "nextClick": "#ember3 > div.drop-down-mode.d-header-wrap > header > div > div > span > button"
        }
      },
      {
        "element": "#d-sidebar",
        "popover": {
          "title": locale("tutorials.unlogged_startpage.sidebar_navigation.title"),
          "description": locale("tutorials.unlogged_startpage.sidebar_navigation.description")
        }
      }
    ],

    "badges_list": [
      {
        "element": "#main-outlet > section > div > h1",
        "popover": {
          "title": locale("tutorials.badges_list.badge_explanation.title"),
          "description": locale("tutorials.badges_list.badge_explanation.description")
        }
      },
      {
        "element": ".badge-card",
        "popover": {
          "title": locale("tutorials.badges_list.how_to_get_badges.title"),
          "description": locale("tutorials.badges_list.how_to_get_badges.description"),
          "hopeElement": "#sidebar-section-content-community > li:nth-child(1)",
          "nextClick": ".btn-sidebar-toggle"
        }
      },
      {
        "element": ".sidebar-more-section-links-details-summary",
        "popover": {
          "title": locale("tutorials.badges_list.badge_list.title"),
          "description": locale("tutorials.badges_list.badge_list.description"),
          "side": "top",
          "align": 'start'
        },
      },
    ],
    "tag_list": [
      {
        "element": "#main-outlet > div.container.tags-index > div.list-controls > div > h2",
        "popover": {
          "title": locale("tutorials.tag_list.about_tags.title"),
          "description": locale("tutorials.tag_list.about_tags.description")
        }
      },
      {
        "element": ".tags-list.tag-list",
        "popover": {
          "title": locale("tutorials.tag_list.more_tags.title"),
          "description": locale("tutorials.tag_list.more_tags.description")
        }
      },
      {
        "element": ".tag-box",
        "popover": {
          "title": locale("tutorials.tag_list.quick_jump.title"),
          "description": locale("tutorials.tag_list.quick_jump.description")
        }
      }
    ],
    "categories": [
      {
        "element": ".navigation-container",
        "popover": {
          "title": locale("tutorials.categories.about_categories.title"),
          "description": locale("tutorials.categories.about_categories.description")
        }
      },
      {
        "element": ".category-box.category-box-general",
        "popover": {
          "title": locale("tutorials.categories.build_community.title"),
          "description": locale("tutorials.categories.build_community.description")
        }
      }
    ],
    // Pending tests
    "unlogged_firstPost": [
      {
        "element": "#topic-title",
        "popover": {
          "title": locale("tutorials.unlogged_firstPost.join_discussion.title"),
          "description": locale("tutorials.unlogged_firstPost.join_discussion.description")
        }
      },
      {
        "element": "#post_1 > div > div.topic-avatar",
        "popover": {
          "title": locale("tutorials.unlogged_firstPost.user_profile.title"),
          "description": locale("tutorials.unlogged_firstPost.user_profile.description"),
          "hopeElement": "#user-card > div > div.card-row.first-row",
          "nextClick": "#post_1 > div > div.topic-avatar > div > a"
        },

      },
      {
        "element": "#user-card > div",
        "popover": {
          "title": locale("tutorials.unlogged_firstPost.user_card.title"),
          "description": locale("tutorials.unlogged_firstPost.user_card.description")
        }
      }

    ],
    "logged_firstPost": [
      {
        "element": ".topic-notifications-button",
        "popover": {
          "title": locale("tutorials.logged_firstPost.notification_settings.title"),
          "description": locale("tutorials.logged_firstPost.notification_settings.description")
        }
      },
      {
        "element": ".actions",
        "popover": {
          "title": locale("tutorials.logged_firstPost.relevant_actions.title"),
          "description": locale("tutorials.logged_firstPost.relevant_actions.description")
        }
      },
      {
        "element": ".create",
        "popover": {
          "title": locale("tutorials.logged_firstPost.participate_discussion.title"),
          "description": locale("tutorials.logged_firstPost.participate_discussion.description")
        }
      }
    ],
    "group": [
      {
        "element": ".groups-header",
        "popover": {
          "title": locale("tutorials.group.what_is_group.title"),
          "description": locale("tutorials.group.what_is_group.description")
        }
      },
      {
        "element": ".group-box",
        "popover": {
          "title": locale("tutorials.group.join_group.title"),
          "description": locale("tutorials.group.join_group.description")
        }
      },
      {
        "element": "[data-group-name='admins']",
        "popover": {
          "title": locale("tutorials.group.create_group.title"),
          "description": locale("tutorials.group.create_group.description")
        }
      },
      {
        "element": "[data-group-name='Editors-Chinese']",
        "popover": {
          "title": locale("tutorials.group.contact_organizers.title"),
          "description": locale("tutorials.group.contact_organizers.description")
        }
      }
    ],
    "about": [
      {
        "element": "section.about.admins > h3",
        "popover": {
          "title": locale("tutorials.about.about_admins.title"),
          "description": locale("tutorials.about.about_admins.description")
        }
      },
      {
        "element": ".user-info",
        "popover": {
          "title": locale("tutorials.about.private_messaging.title"),
          "description": locale("tutorials.about.private_messaging.description")
        }
      }
    ],
    "notifications": [
      {
        "element": ".user-nav__notifications-all",
        "popover": {
          "title": locale("tutorials.notifications.what_are_notifications.title"),
          "description": locale("tutorials.notifications.what_are_notifications.description")
        }
      },
      {
        "element": ".user-nav__personal-messages",
        "popover": {
          "title": locale("tutorials.notifications.notifications_and_messages.title"),
          "description": locale("tutorials.notifications.notifications_and_messages.description")
        }
      },
      {
        "element": ".user-nav__preferences",
        "popover": {
          "title": locale("tutorials.notifications.personalization.title"),
          "description": locale("tutorials.notifications.personalization.description")
        }
      }
    ],
    "messages": [
      {
        "element": ".category-breadcrumb",
        "popover": {
          "title": locale("tutorials.messages.what_are_messages.title"),
          "description": locale("tutorials.messages.what_are_messages.description")
        }
      },
      {
        "element": ".new-private-message",
        "popover": {
          "title": locale("tutorials.messages.group_messaging.title"),
          "description": locale("tutorials.messages.group_messaging.description")
        }
      }
    ]
  }
}
