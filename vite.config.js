// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import cssnano from 'cssnano'
import {config} from 'dotenv'

config();


export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress', // Use Brotli compression
      ext: '.br',
    }),
  ],
  build: {
    minify: 'terser',
    chunkSizeWarningLimit: 1500,
    terserOptions: {
    
    }
  },

  css: {
    postcss: {
      plugins: [
        cssnano({
          preset: 'default', // Default minification options
        }),
      ],
    },
  },

  define:{
    'process.env':process.env
  }
});