import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Set base to '/portfolio/' if deploying to https://username.github.io/portfolio/
  // Leave as '/' for a root-domain deployment (e.g. username.github.io)
  base: '/',

  plugins: [react(), tailwindcss()],

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
  },
})
