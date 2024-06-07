import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  { text: '导航', link: '/nav' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/tags' },
  { text: '归档', link: '/archives' },
  {
    text: '手册',
    items:[
      {
        items: [
          { text: 'Liunx', link: '/guide/liunx/' },
          { text: 'Docker', link: '/guide/docker/' }
        ]
      },
      {
        text:'PHP',
        items: [
          { text: 'Fastadmin', link: '/guide/php/fastadmin' },
        ]
      },
      {
        items: [
          { text: 'Mysql', link: '/guide/mysql/' },
        ]
      },
      {
        text:'黑马程序员学习',
        items: [
          { text: '小兔鲜', link: '/guide/xiaotuxian/' },
        ]
      }
    ]
  },
  { text: '问题', link: '/blog/qipa/' },
  { text: 'ToDo', link: '/todo/' },
  { text: '其他', link: '/blog/other/' },
]
