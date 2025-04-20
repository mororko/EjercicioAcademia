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
        "quienes-somos": resolve(__dirname, "public/quienes-somos.html"),
        cursos: resolve(__dirname, "public/cursos.html"),
        blog: resolve(__dirname, "public/blog.html"),
        registro: resolve(__dirname, "public/registro.html"),
        login: resolve(__dirname, "public/login.html"),
        contacto: resolve(__dirname, "public/contacto.html"),
        "aviso-legal": resolve(__dirname, "public/aviso-legal.html"),
      },
    },
  },
});
