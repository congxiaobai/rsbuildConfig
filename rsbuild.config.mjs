import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
const templates = {
  index: './public/index.html',
}
export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: './src/index.jsx',
      background: './src/background.js',
    },
  },
  html: {
    inject: 'body',
    template({ entryName }) {
      return templates[entryName]
    }
  },
  tools: {
    htmlPlugin: false,
    // htmlPlugin(config, { entryName, entryValue }) {
    //   if (entryName === 'background') {
    //     config.inject = false
    //   }
    // },
  },
  output: {
    filenameHash: false,
    legalComments: 'none',
    distPath: {
      js: './', css: './'
    },
    // sourceMap: {
    //   js: 'source-map',
    // },
  },
});
