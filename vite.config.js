import { defineConfig, loadEnv } from "vite";
import react from '@vitejs/plugin-react';
import path from 'path';
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  		define: {
			"process.env": env,
		},
  plugins: [react(), compression()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      external: ['react-redux','@reduxjs/toolkit','react-icons/bs']
    }
  },server: {
			watch: {
				usePolling: true,
			},
			host: true,
			strictPort: false,
			port: env.PORT || 5173,
		},
});
