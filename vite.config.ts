import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import prerender from "@prerenderer/rollup-plugin";
import PuppeteerRenderer from "@prerenderer/renderer-puppeteer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    prerender({
      routes: [
        "/",
        "/zodiacSign",
        "/zodiacSign/result/estjduathwkfl",
        "/zodiacSign/result/estpdidwkfl",
        "/zodiacSign/result/esfjtkwkwkfl",
        "/zodiacSign/result/esfpTkdenddlwkfl",
        "/zodiacSign/result/entjtkwkwkfl",
        "/zodiacSign/result/enfjrpwkfl",
        "/zodiacSign/result/enfptktnwkfl",
        "/zodiacSign/result/istjghkdthwkfl",
        "/zodiacSign/result/istptktnwkfl",
        "/zodiacSign/result/isfjcjsuwkfl",
        "/zodiacSign/result/isfpcjscldwkfl",
        "/zodiacSign/result/intjduathwkfl",
        "/zodiacSign/result/intpanfqudwkfl",
        "/zodiacSign/result/infjanfrhrlwkfl",
        "/zodiacSign/result/infpcjsuwkfl",
      ],
      renderer: PuppeteerRenderer,
      server: {
        port: 3000,
        host: "localhost",
      },
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 500,
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html
          .replace(/http:/i, "https:")
          .replace(
            /(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i,
            "https://contents4u.space/"
          );
      },
    }),
  ],
});
