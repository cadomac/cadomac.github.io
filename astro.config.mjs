import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'auto'
  },
  sitemap: true,
  site: "https://www.cdmacdonald.com",
  outDir: "public",
  publicDir: "static",
  integrations: [(await import("@playform/compress")).default()],
});