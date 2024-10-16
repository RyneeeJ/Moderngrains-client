import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Use the React plugin if you're using React
  base: "/", // Base public path when serving the app, adjust if deploying in a subdirectory
  build: {
    outDir: "dist", // Output directory for build files
    sourcemap: true, // Optional: Enable sourcemaps for easier debugging
  },
  server: {
    port: 5173, // Port for local development (default is 3000)
    open: true, // Open the browser on server start
  },
});
