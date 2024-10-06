import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react", "react-dom"], // React를 외부 의존성으로 설정
    },
  },
  server: {
    port: 3000,
  },
});
