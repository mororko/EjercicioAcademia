import "./styles/main.scss";

// Elementos
const btnToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");
const overlay = document.querySelector(".page-overlay");

function openNav() {
  nav.classList.add("open");
  overlay.classList.add("active");
}
function closeNav() {
  nav.classList.remove("open");
  overlay.classList.remove("active");
}

btnToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  nav.classList.contains("open") ? closeNav() : openNav();
});

overlay.addEventListener("click", closeNav);

document.addEventListener("click", (e) => {
  if (
    nav.classList.contains("open") &&
    !nav.contains(e.target) &&
    !btnToggle.contains(e.target)
  ) {
    closeNav();
  }
});

nav.addEventListener("click", (e) => {
  e.stopPropagation();
});

// ——— Validación del formulario de contacto ———
const form = document.querySelector(".contact-form");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputMessage = document.getElementById("message");

// Muestra error
function showError(input, message) {
  const control = input.parentElement; // .form-control
  control.classList.remove("valid");
  control.classList.add("invalid");
  const errorMsg = control.querySelector(".error-msg");
  errorMsg.textContent = message;
}

// Marca como válido
function showSuccess(input) {
  const control = input.parentElement;
  control.classList.remove("invalid");
  control.classList.add("valid");
}

// Comprueba email con regex
function checkEmail(input) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Correo no válido");
  }
}

// Comprueba que no esté vacío
function checkRequired(inputs) {
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      const label = input.previousElementSibling
        ? input.previousElementSibling.textContent
        : "Este campo";
      showError(input, `${label} es obligatorio`);
    } else {
      showSuccess(input);
    }
  });
}

// Al enviar
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // Validaciones
  checkRequired([inputName, inputEmail, inputMessage]);
  checkEmail(inputEmail);

  // Si todo es válido, enviar o mostrar mensaje
  const allValid = [inputName, inputEmail, inputMessage].every((inp) =>
    inp.parentElement.classList.contains("valid")
  );
  if (allValid) {
    // Aquí podrías enviar realmente o mostrar un feedback
    alert("✅ Formulario enviado con éxito");
    form.reset();
    // Limpia estados
    document.querySelectorAll(".form-control").forEach((ctrl) => {
      ctrl.classList.remove("valid");
    });
  }
});
