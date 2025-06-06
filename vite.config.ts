import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@common': '/src/common',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
      '@fixtures': '/src/__fixtures__',
      '@tests': '/src/__tests__',
      '@test': '/src/test',
    },
  },
})
