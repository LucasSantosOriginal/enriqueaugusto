import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/enriqueaugusto/", // nome do repositório
  plugins: [react()],
});
