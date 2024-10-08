import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base:"/",
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    // rollupOptions: {
    //   external: ['react-redux','@reduxjs/toolkit','react-icons/bs','react-hook-form']
    // }
  }
});
