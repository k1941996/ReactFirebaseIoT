import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '#': path.resolve(__dirname, './src'),
      '#components': path.resolve(__dirname, './src/components'),
      '#routes': path.resolve(__dirname, './src/routes'),
      '#pages': path.resolve(__dirname, './src/pages'),
      '#config': path.resolve(__dirname, './src/config'),
      '#context': path.resolve(__dirname, './src/context'),
    },
  },
})
