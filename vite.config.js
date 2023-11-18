import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      // Add an alias for your App.jsx path
      '@app': '/path/to/your/App.jsx',
    },
  },
});
