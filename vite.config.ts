import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/challenge": "https://cdn-dev.preoday.com",
    },
  },
  plugins: [react()],
});
