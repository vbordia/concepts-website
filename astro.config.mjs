import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import mdx from "@astrojs/mdx";
import rehypeMathjax from 'rehype-mathjax';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax]
  },
  integrations: [mdx({})],
  output: "hybrid",
  adapter: cloudflare()
});