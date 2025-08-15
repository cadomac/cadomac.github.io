import { defineConfig } from 'astro/config';
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'auto'
  },
  sitemap: true,
  site: "https://www.cdmacdonald.com",
  outDir: "public",
  publicDir: "static",
  integrations: [compressor()],
});