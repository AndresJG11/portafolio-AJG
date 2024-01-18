import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es",],
    routing: {
      prefixDefaultLocale: true
    }
  }
});