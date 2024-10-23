// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";
import { remarkModifiedTime } from "./src/utils/remark-modified-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PROD ? "https://example.com" : "http://localhost:4321",
  // trailingSlash: "never",
  // build: {
  //   format: "file",
  // },
  integrations: [
    mdx({
      remarkPlugins: [remarkReadingTime, remarkModifiedTime],
    }),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkModifiedTime],
    rehypePlugins: [],
  },
});
