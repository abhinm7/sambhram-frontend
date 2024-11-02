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
    // rollupOptions: {
    //   output: {
    //     manualChunks: {
    //       'react-vendor': ['react', 'react-dom'],
    //       'lodash-vendor': ['lodash'],  // For example, split lodash
    //       // 'your-component': ['./src/components/YourComponent.jsx'], // Split large components
    //     }
    //   }
    // },
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
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