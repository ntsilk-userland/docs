import type { Options, ThemeConfig } from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { join } from 'node:path'

const title = 'NTSilk'
const tagline = '优雅地使用 SILK'

// const logo = {
//   alt: 'Logo',
//   src: '.svg',
//   href: '/',
// }

const presetConfig = {
  docs: {
    routeBasePath: '/',
    sidebarPath: join(__dirname, 'sidebars.ts'),
    editUrl: 'https://github.com/ntsilk/ntsilk/tree/master',
  },

  // blog: {
  //   postsPerPage: 'ALL',
  //   blogSidebarCount: 0,
  // },

  theme: {
    customCss: join(__dirname, 'src/css/custom.scss'),
  },
} satisfies Options

const themeConfig = {
  colorMode: {
    defaultMode: 'light',
    respectPrefersColorScheme: true,
  },

  // image: '.svg',

  metadata: [
    {
      name: 'description',
      content: tagline,
    },
    {
      name: 'keywords',
      content: 'SILK, Skype, QQ, Tencent, WeChat, Weixin, FFmpeg, Opus',
    },
  ],

  navbar: {
    title,

    // logo,

    items: [
      {
        label: '指南',
        position: 'left',
        to: 'guide',
        activeBasePath: 'guide',
      },
      {
        href: 'https://github.com/ntsilk/ntsilk',
        html: '<svg style="width:24px;height:24px;display:block" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>',
        position: 'right',
      },
    ],
  },

  footer: {
    style: 'dark',

    // logo: {
    //   ...logo,
    //   width: 80,
    // },

    links: [
      {
        title: '使用',
        items: [
          {
            label: '集成',
            to: '/guide/integrations',
          },
          {
            label: '直接调用',
            to: '/guide/direct',
          },
          {
            label: '语言绑定',
            to: '/guide/bindings',
          },
        ],
      },
      {
        title: '更多',
        items: [
          // {
          //   label: 'FAQ',
          //   to: '/faq/1',
          // },
          {
            label: '社区',
            to: '/guide/community',
          },
          {
            label: '全站搜索',
            to: '/search',
          },
        ],
      },
    ],
    copyright: `<span>Copyright © ${new Date().getFullYear()} Il Harper.&nbsp;&nbsp;</span><a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">浙ICP备2021029727号-1</a>`,
  },

  docs: {
    sidebar: {
      autoCollapseCategories: true,
    },
  },

  prism: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    theme: require('prism-react-renderer/themes/github'),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    darkTheme: require('prism-react-renderer/themes/palenight'),
  },
} satisfies ThemeConfig

export const config = {
  title,
  tagline,

  url: 'https://ntsilk.ilharper.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // favicon: '.ico',

  organizationName: 'ntsilk',
  projectName: 'ntsilk',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [['classic', presetConfig]],

  plugins: ['docusaurus-plugin-sass'],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'zh'],
        docsRouteBasePath: '/',
      },
    ],
  ],

  themeConfig,

  markdown: {
    mdx1Compat: {
      admonitions: false,
      comments: false,
      headingIds: false,
    },
  },
} satisfies Config
