import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SCERKA',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docusaurus.scerka.ru',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'scerka-soft', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
		  routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/scerka-soft/docusaurus/tree/master/',
        },
		blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'SCERKA Docusaurus',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
		srcDark: 'img/logo.svg',
      },
      items: [
        /*{
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },*/
        {
          href: 'https://github.com/scerka-soft/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
	  links: [
		{
			title: 'Epic Games',
			items: [
				{
					label: 'Epic Games',
					href: 'https://store.epicgames.com/ru/',
				},
				{
					label: 'Unreal Engine',
					href: 'https://www.unrealengine.com/en-US',
				},
				{
					label: 'UE Документация',
					href: 'https://docs.unrealengine.com/',
				},
			],
		},
		{
			title: 'Docusaurus',
			items: [
				{
					label: 'Docusaurus',
					href: 'https://docusaurus.io/',
				},
				{
					label: 'Docusaurus Документация',
					href: 'https://docusaurus.io/docs',
				},
				{
					label: 'Markdown',
					href: 'https://www.markdownguide.org/basic-syntax/',
				},
			],
		},
		{
			title: 'Команда',
			items: [
				{
					label: 'Scerka',
					href: 'https://scerka.ru/',
				}
			],
		},
	  ],
      copyright: `Copyright © ${new Date().getFullYear()} SCERKA. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
