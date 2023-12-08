import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Battle Saga',
  description: 'Battle and Compete Your Favorite Tools.',
  icon: '/favicon.ico',
  globalStyles: path.join(__dirname, 'styles/index.scss'),
  search: false,
  themeConfig: {
    search: false,
    hideNavbar: 'always',
    footer: {
      message: 'Organized by @euxn23'
    },
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/battle-saga-win' },
    ],
  },
});
