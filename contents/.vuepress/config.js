module.exports = {
  title: 'OMG Knowledge Base',
  themeConfig: {
    sidebar: {

      
      '/guide/': [
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            '',
            'history',
            'basics',
            'concepts',
          ]
        },
        {
          title: 'OMG Network',
          collapsable: false,
          children: [
            'network/about',
            'network/who',
            'network/adoption',
            'network/benefits',
          ]
        },
        {
          title: 'OMG Community',
          collapsable: false,
          children: [
            'omise',
            'business-development',
            'community',
          ]
        },
      ],
      '/deep-dive/': [
        'dex',
        'ewallet',
        'plasma',
        'cash-in-out',
        'proof-of-stake',
        'roadmap',
      ],
      '/resources/': [
        'videos',
        'links',
        'faq',
        'ama',
      ],
      '/': [
        '',
        'license',
        'contribute',
        'code-of-conduct',
      ],
      
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Deep Dive', link: '/deep-dive/' },
      {
        text: 'Resources',
        items: [
          { text: 'Videos', link: '/resources/videos' },
          { text: 'Links', link: '/resources/links' },
          { text: 'FAQ', link: '/resources/faq' },
          { text: 'AMAs', link: '/resources/ama' },
        ]
      }
    ],
    // original repo
    repo: 'buildOMG/kb',
    // "edit" links
    docsDir: 'contents',
    editLinks: true,
    editLinkText: 'Help us improve this page!'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': 'assets'
      }
    }
  }
}
