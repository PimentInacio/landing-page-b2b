import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/landing-page-b2b/', // Isso faz o Vite procurar os arquivos na pasta certa!
})