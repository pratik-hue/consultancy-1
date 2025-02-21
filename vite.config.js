import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
 
  plugins: [
    tailwindcss(),
    react()],
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg'], // Ensure Vite processes image assets

})