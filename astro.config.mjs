import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config"

import icon from "astro-icon";
import alpine from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), alpine()],
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es",],
    routing: {
      prefixDefaultLocale: true
    }
  }
});