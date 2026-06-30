// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'node:module';
const require = createRequire(import.meta.url);
const {hub, curricula} = require('literacy-site-theme/ecosystem');
const footerConfig = require('literacy-site-theme/footerConfig');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Legal Literacy for Kids',
  tagline: 'A free, open curriculum with 18 core weeks and optional advanced weeks that teaches ages 8–12 how rules, contracts, and legal systems work',
  favicon: 'img/favicon.ico',

  url: 'https://legal.literacy-for-kids.com',
  baseUrl: '/',

  organizationName: 'literacy-for-kids',
  projectName: 'legal_literacy_for_kids',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['literacy-site-theme'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/literacy-for-kids/legal_literacy_for_kids/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.svg',
      navbar: {
        title: 'Legal Literacy for Kids',
        logo: {
          alt: 'Legal Literacy Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'curriculumSidebar',
            position: 'left',
            label: 'Curriculum',
          },
          {
            type: 'dropdown',
            label: 'Literacy for Kids',
            position: 'left',
            items: [
              {label: 'Hub', href: hub.href},
              ...curricula.map((c) => ({
                label: c.label.replace(' Literacy', ''),
                href: c.href,
              })),
            ],
          },
          {
            href: 'https://github.com/literacy-for-kids/legal_literacy_for_kids',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: footerConfig,
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;
