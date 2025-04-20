// vite.config.js
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
    outDir: "docs", // carpeta que servirá GH Pages
    emptyOutDir: true, // la limpia antes de cada build
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "quienes-somos": resolve(__dirname, "pages/quienes-somos.html"),
        cursos: resolve(__dirname, "pages/cursos.html"),
        blog: resolve(__dirname, "pages/blog.html"),
        registro: resolve(__dirname, "pages/registro.html"),
        login: resolve(__dirname, "pages/login.html"),
        contacto: resolve(__dirname, "pages/contacto.html"),
        "aviso-legal": resolve(__dirname, "pages/aviso-legal.html"),
      },
    },
  },
});
