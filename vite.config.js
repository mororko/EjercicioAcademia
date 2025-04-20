import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "quienes-somos.html"),
        cursos: resolve(__dirname, "cursos.html"),
        blog: resolve(__dirname, "blog.html"),
        registro: resolve(__dirname, "registro.html"),
        login: resolve(__dirname, "login.html"),
        contacto: resolve(__dirname, "contacto.html"),
      },
    },
    outDir: "docs",
  },
});
