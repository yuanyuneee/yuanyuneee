module.exports = {
    base: '/yuanyuneee/',
    title: 'Hello VuePress!',
    description: 'Just playing around',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        {
          text: 'Languages',
          items: [
            { text: 'Chinese', link: '/language/chinese' },
            { text: 'English', link: '/language/english' }
          ]
        },
        { text: 'External', link: 'https://www.baidu.com' },
      ],
      sidebarDepth: 2,
      sidebar: [
        ['/', '首页'],
        {
          title: 'Guide',
          collapsable: false,
          children: ['/guide/']
        }     
      ]
    }
  }