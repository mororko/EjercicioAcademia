import "./styles/main.scss";

// Elementos
const btnToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

// Creamos el overlay dinámicamente
const pageOverlay = document.createElement("div");
pageOverlay.className = "page-overlay";
document.body.appendChild(pageOverlay);

// Función para abrir/cerrar
function toggleNav() {
  nav.classList.toggle("open");
  pageOverlay.classList.toggle("active");
}

// Abrir/cerrar al pulsar el botón
btnToggle.addEventListener("click", toggleNav);

// Cerrar al hacer click en el overlay
pageOverlay.addEventListener("click", () => {
  nav.classList.remove("open");
  pageOverlay.classList.remove("active");
});
