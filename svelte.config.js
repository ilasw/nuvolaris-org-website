import {mdsvex} from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// @ts-ignore
const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess(), mdsvex(mdsvexConfig)],

  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs",
      paths: {
        // change below to your repo name
        base: dev ? "''" : "/nuvolaris-org-website",
      },
      // hydrate the <div id="svelte"> element in src/app.html
      target: "#svelte"
    }),
  }
};

export default config;
