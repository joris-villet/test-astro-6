// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [],

  vite: {
    plugins: [],
  },
  output: "server",
  adapter: cloudflare(),
});
