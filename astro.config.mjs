import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://docs.astro.build/en/guides/integrations-guide/vercel/#targets
import vercel from "@astrojs/vercel/static";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: "https://www.jacobflores.dev",
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  })
});