import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from 'path';
export default {
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
