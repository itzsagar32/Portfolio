import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/Portfolio/',  
  plugins: [react()],

  server: {
    port: 3000,
    open: false
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          fiber: ['@react-three/fiber'],
          gsap: ['gsap'],
          vendor: ['react', 'react-dom', 'lucide-react']
        }
      }
    }
  }
})
