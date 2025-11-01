// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // ← YE ADD KARO

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // ← YE LAST MEIN
  ],
})