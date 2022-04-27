module.exports = {
  // 站点配置
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  // 默认环境
  // title: 'hello',
  // description: '这是团队的第一个 blog',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'hello blog',
      description: 'the First blog',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '你好',
      description: '这是团队的第一个 blog',
    },
  },

  // 主题和它的配置
  // theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/logo_icon.svg',
    // logoDark: '',
    // 设置根据页面标题自动生成的侧边栏的最大深度。 default: 2
    sidebarDepth: 0,
    locales: {
      '/': {
        selectLanguageName: 'English',
        sidebar: [
          '/',
          '/test1',
          '/test2',
          {
            text: 'Foo',
            // collapsible: true,
            children: [
              // SidebarItem
              '/test3',
              '/test4',
            ],
          },
        ]
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: '选择语言',
        sidebar: [
          '/zh/',
          '/zh/test1',
          {
            text: 'Foo',
            // collapsible: true,
            children: [
              // SidebarItem
              '/zh/test3',
              '/zh/test4',
            ],
          },
        ],
      },
    },
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
    [
      '@vuepress/plugin-palette',
      { preset: 'sass' },
    ],
  ],
}
