import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ra16-homeworks-composition-decomposition/',
  plugins: [react()],
});
