import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'auto'
  },
  sitemap: true,
  site: "https://www.cdmacdonald.com",
  outDir: "public",
  publicDir: "static",
  integrations: [preact()]
});