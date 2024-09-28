import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SCERKA Docusaurus',
  tagline: '',
  favicon: 'img/favicon.png',

  url: 'https://docusaurus.scerka.ru',
  baseUrl: '/',

  organizationName: 'scerka-soft',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
  plugins: [[ require.resolve('docusaurus-lunr-search'), {
    languages: ['en', 'ru']
  }]],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
		  routeBasePath: '/',
		  showLastUpdateAuthor: true,
		  showLastUpdateTime: true,
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
      title: 'Docusaurus',
      logo: {
        alt: 'Scerka Logo',
        src: 'img/logo-dark.svg',
		srcDark: 'img/logo.svg',
      },
      items: [
        {
          href: '//docusaurus.scerka.ru/nginx',
          position: 'right',
          label: 'NGINXConfig',
        },
        {
          href: '//docusaurus.scerka.ru/svg',
          position: 'right',
          label: 'SVGOMG',
        },
        {
          href: '//github.com/scerka-soft',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
	  links: [
		{
			title: 'Docusaurus',
			items: [
				{
					label: 'Docusaurus',
					href: '//docusaurus.io/',
				},
				{
					label: 'Docusaurus Документация',
					href: '//docusaurus.io/docs',
				},
				{
					label: 'Markdown',
					href: '//www.markdownguide.org/basic-syntax/',
				},
			],
		},
		{
			title: 'Команда',
			items: [
				{
					label: 'Scerka Soft',
					href: '//github.com/scerka-soft',
				},
				{
					label: 'Scerka',
					href: '//scerka.ru/',
				}
			],
		},
		{
			title: 'Инструменты',
			items: [
				{
					label: 'NGINXConfig',
					href: '//docusaurus.scerka.ru/nginx',
				},
				{
					label: 'SVGOMG',
					href: '//docusaurus.scerka.ru/svg',
				},
			],
		},
		{
			title: 'Epic Games',
			items: [
				{
					label: 'Epic Games',
					href: '//store.epicgames.com/ru/',
				},
				{
					label: 'Unreal Engine',
					href: '//www.unrealengine.com/en-US',
				},
				{
					label: 'UE Документация',
					href: '//docs.unrealengine.com/',
				},
			],
		},
	  ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="//github.com/scerka-soft" target="_blank" rel="noopener noreferrer">SCERKA SOFT</a>.<br>Создано с помощью <a href="//docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oceanicNext,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
