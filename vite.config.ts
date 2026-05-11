import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: '/Resume_React/', // เพิ่ม base path สำหรับ GitHub Pages
    plugins: [react()],
});
