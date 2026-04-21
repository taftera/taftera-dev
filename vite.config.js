import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // '/taftera-dev/' for github.io subdirectory; change to '/' when custom domain DNS is live
  base: '/taftera-dev/',
})
