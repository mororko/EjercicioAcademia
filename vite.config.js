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
    outDir: "docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "quienes-somos": resolve(__dirname, "quienes-somos.html"),
        cursos: resolve(__dirname, "cursos.html"),
        "curso-fullstack1": resolve(__dirname, "curso-fullstack1.html"),
        "curso-fullstack2": resolve(__dirname, "curso-fullstack2.html"),
        blog: resolve(__dirname, "blog.html"),
        noticia1: resolve(__dirname, "noticia1.html"),
        noticia2: resolve(__dirname, "noticia2.html"),
        registro: resolve(__dirname, "registro.html"),
        login: resolve(__dirname, "login.html"),
        contacto: resolve(__dirname, "contacto.html"),
        "aviso-legal": resolve(__dirname, "aviso-legal.html"),
      },
    },
  },
});
