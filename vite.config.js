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
    historyApiFallback: true,
    port: 3000,
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  build: {
    minify: 'terser',
    chunkSizeWarningLimit: 1500,
    terserOptions: {
      compress: {
        drop_debugger: true
      }
    },
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
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
    'process.env': process.env
  }
});