import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vite-pwa-org.netlify.app/guide/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: "autoUpdate",
    manifest: {
      name: "GooglePlus",
      short_name: "GooglePlus",
      icons: [
        {
          "src": "maskable_icon.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "src": "logo192.png",
          "type": "image/png",
          "sizes": "192x192"
        },
        {
          "src": "logo256.png",
          "type": "image/png",
          "sizes": "256x256"
        },
        {
          "src": "logo384.png",
          "type": "image/png",
          "sizes": "384x384"
        },
        {
          "src": "logo512.png",
          "type": "image/png",
          "sizes": "512x512"
        }
      ]
    }
  })],
});