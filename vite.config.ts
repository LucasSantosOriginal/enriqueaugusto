// vite.config.ts
  import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/", // ⚠️ Corrigir para "/" quando usa domínio custom
  plugins: [react()],
})
