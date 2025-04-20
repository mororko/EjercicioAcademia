import "./styles/main.scss";

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
nav.addEventListener("click", (e) => e.stopPropagation());

document.addEventListener("DOMContentLoaded", () => {
  // Contact
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    const inputName = document.getElementById("name");
    const inputEmail = document.getElementById("email");
    const inputMessage = document.getElementById("message");

    function showError(input, message) {
      const control = input.parentElement;
      control.classList.remove("valid");
      control.classList.add("invalid");
      control.querySelector(".error-msg").textContent = message;
    }
    function showSuccess(input) {
      const control = input.parentElement;
      control.classList.remove("invalid");
      control.classList.add("valid");
    }
    function checkEmail(input) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      re.test(input.value.trim())
        ? showSuccess(input)
        : showError(input, "Correo no válido");
    }
    function checkRequired(inputs) {
      inputs.forEach((input) => {
        if (input.value.trim() === "") {
          const label = input.previousElementSibling.textContent;
          showError(input, `${label} es obligatorio`);
        } else {
          showSuccess(input);
        }
      });
    }

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      checkRequired([inputName, inputEmail, inputMessage]);
      checkEmail(inputEmail);

      const allValid = [inputName, inputEmail, inputMessage].every((inp) =>
        inp.parentElement.classList.contains("valid")
      );
      if (allValid) {
        alert("✅ Formulario de contacto enviado con éxito");
        contactForm.reset();
        contactForm.querySelectorAll(".form-control").forEach((ctrl) => {
          ctrl.classList.remove("valid");
        });
      }
    });
  }

  // Register
  const registerForm = document.querySelector(".register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;

      registerForm.querySelectorAll(".form-control").forEach((control) => {
        const input = control.querySelector("input, textarea");
        const val = input.value.trim();
        control.classList.remove("invalid", "valid");

        if (input.hasAttribute("required") && !val) {
          control.classList.add("invalid");
          isValid = false;
          return;
        }

        if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
          control.classList.add("invalid");
          isValid = false;
          return;
        }
        if (input.type === "date" && !val) {
          control.classList.add("invalid");
          isValid = false;
          return;
        }
        if (input.type === "url" && val) {
          try {
            new URL(val);
          } catch {
            control.classList.add("invalid");
            isValid = false;
            return;
          }
        }

        control.classList.add("valid");
      });

      if (isValid) {
        alert("✅ Registro completado con éxito");
        registerForm.reset();
        registerForm.querySelectorAll(".form-control").forEach((ctrl) => {
          ctrl.classList.remove("valid");
        });
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Contact
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("reset", () => {
      contactForm
        .querySelectorAll(".form-control")
        .forEach((ctrl) => ctrl.classList.remove("invalid", "valid"));
    });
  }

  //Register
  const registerForm = document.querySelector(".register-form");
  if (registerForm) {
    registerForm.addEventListener("reset", () => {
      registerForm
        .querySelectorAll(".form-control")
        .forEach((ctrl) => ctrl.classList.remove("invalid", "valid"));
    });
  }
});

// Login
const loginForm = document.querySelector(".login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;
    loginForm.querySelectorAll(".form-control").forEach((control) => {
      const input = control.querySelector("input");
      const v = input.value.trim();
      control.classList.remove("invalid", "valid");

      if (!v) {
        control.classList.add("invalid");
        ok = false;
      } else if (
        input.type === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      ) {
        control.classList.add("invalid");
        ok = false;
      } else {
        control.classList.add("valid");
      }
    });
    if (ok) {
      alert("✅ Has iniciado sesión correctamente");
      loginForm.reset();
      loginForm
        .querySelectorAll(".form-control")
        .forEach((c) => c.classList.remove("valid"));
    }
  });
  loginForm.addEventListener("reset", () => {
    loginForm
      .querySelectorAll(".form-control")
      .forEach((c) => c.classList.remove("invalid", "valid"));
  });
}
