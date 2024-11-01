import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import cssnano from 'cssnano';
import { config } from 'dotenv';

config();

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  server: {
    hmr: true, // Enables hot module replacement
    fs: {
      allow: ['.'],
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Adjust this to match your backend server
        changeOrigin: true,
      },
    },
    // Redirect all unknown routes to index.html for client-side routing
    middlewareMode: true,
    historyApiFallback: true,
    rewrite: path => path.replace(/^\/[^.]+$/, '/index.html'),
  },
  build: {
    minify: 'terser',
    chunkSizeWarningLimit: 1500,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        cssnano({
          preset: 'default',
        }),
      ],
    },
  },
  define: {
    'process.env': process.env,
  },
});
