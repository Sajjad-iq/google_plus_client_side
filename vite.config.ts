import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), VitePWA({

    workbox: {
      globPatterns: ["**/*"],
    },
    includeAssets: [
      "**/*",
    ],
    registerType: "autoUpdate",

    manifest: {
      name: "GooglePlus",
      short_name: "GooglePlus",
      "description": "Demo of google plus app",
      "theme_color": "#c63e3e",
      "background_color": "#c63e3e",
      start_url: "/",
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