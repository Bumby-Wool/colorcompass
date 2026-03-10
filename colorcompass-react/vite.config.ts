import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/bumby-assets": {
        target: "https://www.bumbywool.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/bumby-assets/, ""),
      },
    },
  },
});