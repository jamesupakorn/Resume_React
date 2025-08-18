import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: '/Resume_React/', // เพิ่ม base path สำหรับ GitHub Pages
    plugins: [react()],
    server: {
        allowedHosts: [
            "nqhgw4-5173.csb.app",
            "nqhgw4-5174.csb.app",
            "qn8gvl-5173.csb.app"
        ],
    },
});
  