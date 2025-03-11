import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/shoppingreact/', // Set the base to match your Vercel subpath
});
