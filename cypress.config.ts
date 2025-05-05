import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

export default defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on) {
      // Example usage of 'on' to avoid the error
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
});
