import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Memungkinkan aplikasi di-deploy di subfolder atau root domain mana saja (Vercel, Netlify, GitHub Pages, Apache, Nginx)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
