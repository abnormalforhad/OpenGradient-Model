import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        models: resolve(__dirname, 'models/index.html'),
        ecosystem: resolve(__dirname, 'ecosystem/index.html'),
        community: resolve(__dirname, 'community/index.html'),
      },
    },
  },
});
