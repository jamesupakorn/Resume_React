import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        allowedHosts: ["nqhgw4-5173.csb.app", "nqhgw4-5174.csb.app"],
    },
});
  