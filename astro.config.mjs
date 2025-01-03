import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import lottie from "astro-integration-lottie";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs(), lottie(), react()],
  experimental: {
    assets: true
  }
});