import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Home',
    link: 'https://airdb.wiki',
  },
  {
    text: 'Architecture',
    children: [
      {
        text: 'Good Case',
        children: [
          { text: 'Reference', link: '/arch/README.md', },
        ],
      },
    ],
  },
  {
    text: 'CAP',
    link: '/cap/'
  },
  {
    text: 'Desgin Model',
    link: '/desgin/'
  },
]
