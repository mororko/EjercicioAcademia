import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/EjercicioAcademia/",
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ["import"],
      },
    },
  },
  build: {
    outDir: "docs",
    emptyOutDir: true,
    rollupOptions: {
      // sólo index
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
