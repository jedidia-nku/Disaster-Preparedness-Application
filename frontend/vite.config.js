import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // Allow serving files from the project root
        path.resolve(__dirname),
        // Allow serving files from the images directory
        path.resolve(__dirname, '../images')
      ]
    }
  }
});
