// In vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    envPrefix: "VITE_", // Load variables with "VITE_" prefix
});