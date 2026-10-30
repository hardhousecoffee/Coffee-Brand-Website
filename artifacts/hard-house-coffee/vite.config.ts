import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { AMAZON_SHOPPING_ENABLED } from "./src/config/shopping";

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 3000;
const basePath = process.env.BASE_PATH || "/";
const isReplit = process.env.REPL_ID !== undefined;
const isDev = process.env.NODE_ENV !== "production";

export default defineConfig({
  base: basePath,
  plugins: [
    {
      name: "temporary-shopping-suspension",
      transformIndexHtml: {
        order: "pre",
        handler(html) {
          if (AMAZON_SHOPPING_ENABLED) return html;
          return {
            // The development HTML has a non-React fallback for crawlers.
            // Suppress its shop link too, before React mounts.
            html: html.replace(/<a href="\/products">Products<\/a>/g, ""),
            tags: [{
              tag: "script",
              injectTo: "head-prepend",
              children: `if (/^\\/products(?:\\/|$)/i.test(window.location.pathname)) {
                window.location.replace(${JSON.stringify(basePath)});
              }`,
            }],
          };
        },
      },
    },
    react(),
    tailwindcss(),
    ...(isDev ? [runtimeErrorOverlay()] : []),
    ...(isDev && isReplit
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
