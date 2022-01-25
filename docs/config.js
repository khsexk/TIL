const sidebar = require('./auto-sidebar-generator');

module.exports = {
  title: '🙌 TIL of khsexk',
  description: 'Today I Learned',
  email: 'kohyunsuk98@gmail.com',
  base: "/TIL/",
  head: [
    ['link', { rel: 'icon', href: `/images/logo-144.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  plugins: [
    '@vuepress/back-to-top',
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }]
  ],
  themeConfig: {
    sidebar: [
      sidebar.getSidebarGroup('/plan/', '📚 Plan', true),
    ],
    sidebarDepth: 0,
    nav: [
      { text: 'GitHub', link: 'https://khsexk.github.io/TIL/' }
    ],
    smoothScroll: true,
    lastUpdated: 'Last Updated'
  }
}
