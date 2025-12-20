import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/corte-bellevue/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
    dedupe: ['tailwind-merge', 'clsx', 'react', 'react-dom'],
  },
  build: {
    // Ottimizzazioni per il build
    minify: 'esbuild',
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'radix-ui': ['@radix-ui/react-dialog', '@radix-ui/react-checkbox', '@radix-ui/react-slot'],
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  // Ottimizzazioni per lo sviluppo
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'tailwind-merge', 'clsx', '@radix-ui/react-slot', '@radix-ui/react-dialog', '@radix-ui/react-checkbox', 'class-variance-authority'],
  },
  // Ottimizzazioni performance
  esbuild: {
    legalComments: 'none',
    treeShaking: true,
  },
})
