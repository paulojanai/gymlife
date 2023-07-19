const eye = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="eye" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;

const eyeOff = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="eye-off" class="lucide lucide-eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" x2="22" y1="2" y2="22"></line></svg>`;

const iconError = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="alert-triangle" class="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>`;

const iconCheck = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

const validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const form = document.querySelector(".js-form");
const allInput = document.querySelectorAll(
  ".form .form-control .text-field input"
);
const fullName = document.querySelector(".js-full-name");
const email = document.querySelector(".js-email");
const password = document.querySelector(".js-password");

//Configurações e compotarmento padrões do input component
allInput.forEach((input) => {
  let nameClass = input.nextElementSibling.className;

  isBlank(input);

  showActionsInput(input);

  if (nameClass === "js-clean") {
    cleanInput(input);
  }

  if (nameClass === "js-show-password") {
    showPassword(input);
  }
});

function isBlank(input) {
  input.addEventListener("focusout", (event) => {
    event.preventDefault();

    if (input.value == 0) {
      setError(input, "Preencha este campo");
    }
  });
}

function showActionsInput(input) {
  let actionInput = input.nextElementSibling;

  input.addEventListener("input", (event) => {
    event.preventDefault();

    if (input.value.length > 0) {
      actionInput.classList.add("action-input");
      setDefault(input);
    } else {
      actionInput.classList.remove("action-input");
      setError(input, "Preencha este campo");
    }
  });
}

function cleanInput(input) {
  let icon = input.nextElementSibling;

  icon.addEventListener("click", (event) => {
    event.preventDefault();
    icon.classList.remove("action-input");
    input.value = "";
    setError(input, "Preencha este campo");
  });
}

function showPassword(input) {
  let icon = input.nextElementSibling;

  icon.addEventListener("click", (event) => {
    event.preventDefault();
    if (input.type === "text") {
      input.type = "password";
      icon.innerHTML = eye;
    } else {
      input.type = "text";
      icon.innerHTML = eyeOff;
    }
  });
}

//
form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs();
});

function checkInputs() {
  const fullNameValue = fullName.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  if (fullNameValue === "") {
    setError(fullName, "Preencha este campo");
  }

  if (emailValue === "") {
    setError(email, "Preencha este campo");
  }

  if (passwordValue === "") {
    setError(password, "Preencha este campo");
  }
}

function setDefault(input) {
  const textField = input.parentElement;
  const formControl = textField.parentElement;

  formControl.className = "form-control";
}

function setError(input, message) {
  const textField = input.parentElement;
  const formControl = textField.parentElement;

  const text = formControl.querySelector(".help-text p");
  const icon = text.parentElement.firstElementChild;

  text.innerHTML = message;
  icon.innerHTML = iconError;

  formControl.className = "form-control error";
}

function setSuccess(input, message) {
  const textField = input.parentElement;
  const formControl = textField.parentElement;

  const text = formControl.querySelector(".help-text p");
  const icon = text.parentElement.firstElementChild;

  text.innerHTML = message;
  icon.innerHTML = iconCheck;

  formControl.className = "form-control success";
}

// Validate email
email.addEventListener("focusout", (event) => {
  let length = email.value.length;

  if (length > 0 && !validate.test(email.value)) {
    setError(email, "Email inválido");
  }

  if (length > 0) {
    email.addEventListener("input", (event) => {
      if (!validate.test(email.value)) {
        setError(email, "Email inválido");
      } else {
        setSuccess(email, "Email válido");
      }
    });
  }
});
