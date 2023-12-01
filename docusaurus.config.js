// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chroma',
  tagline: 'Chroma is the open-source embedding database',
  url: 'https://www.trychroma.com',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  plugins: [
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_IklYiBNSkqU0Xep3FNg5zEIOe5KCw3BoeO058fOTbB9",
        appUrl: "https://app.posthog.com", // optional
        enableInDevelopment: true, // optional
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // routeBasePath: '/docs/intro',
          routeBasePath: '/',
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/chroma-core/docs/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Chroma',
        logo: {
          alt: 'chroma logo',
          src: 'img/chroma.svg',
        },
        items: [
          {
            position: 'left',
            html: '<div><div class="custom-tag">Python</div></div>',
            href: '?lang=py',
            docId: "blah"
          },
          {
            position: 'left',
            html: '<div><div class="custom-tag">Javascript</div></div>',
            href: '?lang=js',
            docId: "blah"
          },
          {
            href: 'https://discord.gg/MMeYNTmh3x',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://twitter.com/trychroma',
            label: '@trychroma',
            position: 'right',
          },
          {
          href: 'https://github.com/chroma-core/chroma',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          src: 'img/chroma.png',
          height: 51,
        },
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started',
              },
              {
                label: 'API Reference',
                to: '/api-reference',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/chroma-core/chroma',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/MMeYNTmh3x',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/trychroma',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About',
                to: '/about',
              },
              {
                href: 'https://trychroma.notion.site/careers-chroma-9d017c3007c7478ebd85bad854101497',
                label: 'Careers',
              },
              
              {
                label: 'Privacy',
                href: 'https://trychroma.com/privacy',
              },
              {
                label: 'Terms',
                href: 'https://trychroma.com/terms',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
