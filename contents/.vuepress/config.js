module.exports = {
  title: 'OMG Knowledge Base',
  themeConfig: {
    sidebar: {

      
      '/guide/': [
        {
          collapsable: false,
          children: [
            '',
            'points-of-view',
            'history',
            'vision',
            'basics',
          ]
        },
        {
          title: 'OMG Network',
          collapsable: false,
          children: [
            'network/',
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
      '/resources/': [
        'videos',
        'links',
        'faq',
        'ama',
      ],
      '/contribute/': [
        '',
        'code-of-conduct',
        'contributors',
      ],
      '/': false,
      
    },
    nav: [
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Resources',
        items: [
          { text: 'Videos', link: '/resources/videos' },
          { text: 'Links', link: '/resources/links' },
          { text: 'FAQ', link: '/resources/faq' },
          { text: 'AMAs', link: '/resources/ama' },
        ]
      },
      { text: 'Contribute', link: '/contribute/' },
    ],
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
