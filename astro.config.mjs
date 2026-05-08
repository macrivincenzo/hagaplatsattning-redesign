// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.hagaplattsattning.se',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/homepageimproved') && !page.includes('/tack/'),
      i18n: {
        defaultLocale: 'sv',
        locales: { sv: 'sv-SE' },
      },
    }),
  ],
});
