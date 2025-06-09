import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/d_prolog/',
  resolve: {
    alias: [
      { find: "assets", replacement: "/src/assets" },
      { find: "common", replacement: "/src/common" },
      { find: "components", replacement: "/src/components" },
      { find: "data", replacement: "/src/data" },
      { find: "pages", replacement: "/src/pages" },
      { find: "state", replacement: "/src/state" },
    ],
  },
});
