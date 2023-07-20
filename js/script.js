const eye = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="eye" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle><line id="line-eye" x1="2" x2="22" y1="2" y2="22"></line></svg>`;

const eyeOff = `<svg xmlns="http://www.w3.org/220/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="eye-off" class="lucide lucide-eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line id="line-eye-off" x1="2" x2="2" y1="2" y2="2"></line></svg>`;

const iconError = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="alert-triangle" class="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>`;

const iconCheck = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

const validateRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const validatePasswordRegExp = {
weak : {
  minRegExp: /^.{8,}$/,
  oneNumericRegExp: /\d/,
  oneEspecialRegExp: /[\W_]/,
},
moderate : {
  minRegExp: /^.{10,}$/,
  oneNumericRegExp: /^(?:\D*\d){2}/,
  oneEspecialRegExp: /(?:[\W_].*){2}/,
},
strong : {
  minRegExp: /^.{12,}$/,
  oneNumericRegExp: /^(?:\D*\d){3}/,
  oneEspecialRegExp: /(?:[\W_].*){3}/,
}}

const form = document.querySelector(".js-form");
const allInput = document.querySelectorAll(
  ".form .form-control .text-field input"
);
const fullName = document.querySelector(".js-full-name");
const email = document.querySelector(".js-email");
const password = document.querySelector(".js-password");
const progress = document.querySelectorAll(".line-progress");

//Configurações e compotarmento form
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

//Configurações e compotarmento padrões do input component
allInput.forEach((input) => {
  let iconActionInput = input.nextElementSibling;

  input.addEventListener("focusout", (event) => {
    event.preventDefault();


    
    isBlank(input);
  });

  input.addEventListener("input", (event) => {
    event.preventDefault();
    
    showActionsInput(iconActionInput, input);

    if (input.type == "password") {
      showStatusPassword(input)
    }
    if (input.type == "email") {
      validateEmail(input)
    }
  });

  actionInput(input);
  
});

function isBlank(input) {
  if (input.value == 0) {
    return setError(input, "Preencha este campo");
  }
}

function showActionsInput(actionInput, input) {
  if (input.value.length > 0) {
    actionInput.classList.add("action-input");
    setDefault(input);
  } else {
    actionInput.classList.remove("action-input");
    setError(input, "Preencha este campo");
  }
}

function actionInput(input) {
  let icon = input.nextElementSibling;
  let nameClass = input.nextElementSibling.className;

  icon.addEventListener("click", (event) => {
    event.preventDefault();

    if (nameClass === "js-clean") {
      cleanInput(icon, input);
    }
  
    if (nameClass === "js-show-password") {
      showPassword(icon, input);
    }
  })
}

function cleanInput(icon, input) {
  icon.classList.remove("action-input");
  input.value = "";
  setError(input, "Preencha este campo");
}

function showPassword(icon, input) {
  input.type === "text" ?
    (input.type = "password",
    icon.innerHTML = eye)
  :
    (input.type = "text",
    icon.innerHTML = eyeOff)
}

function showStatusPassword(input) {
  let validationPassword = document.querySelector(".validation-password");

  if(input.value.length > 0) {
    validationPassword.classList.add("visible-status");
  } else {
    validationPassword.classList.remove("visible-status");
  } 
}

function setDefault(input) {
  const textField = input.parentElement;
  const formControl = textField.parentElement;

  const helpText = formControl.querySelector(".help-text");

  helpText.className = "help-text";
  formControl.className = "form-control";
}

function setError(input, message) {
  const textField = input.parentElement;
  const formControl = textField.parentElement;

  const text = formControl.querySelector(".help-text p");
  const helpText = formControl.querySelector(".help-text");
  const icon = text.parentElement.firstElementChild;

  text.innerHTML = message;
  icon.innerHTML = iconError;

  helpText.className = "help-text visible";
  formControl.className = "form-control error";
}

function setSuccess(input, message) {
  const textField = input.parentElement;
  const formControl = textField.parentElement;

  const text = formControl.querySelector(".help-text p");
  const helpText = formControl.querySelector(".help-text");
  const icon = text.parentElement.firstElementChild;
  
  text.innerHTML = message;
  icon.innerHTML = iconCheck;
  
  helpText.className = "help-text visible";
  formControl.className = "form-control success";
}

// Functions validate
function validateEmail(input) {
  if (!validateRegExp.test(input.value)) {
    setError(input, "Email inválido");
  } else {
    setSuccess(input, "Email válido");
  }
}

//Validate password
// password.addEventListener("input", (event) => {
  // progress[0].style.stroke="red";
  // progress[1].style.stroke="red";
  // progress[2].style.stroke="red";

  // console.log(
  //   "Senha fraca",
  //   weak.minRegExp.test(password.value) &&
  //     weak.oneNumericRegExp.test(password.value) &&
  //     weak.oneEspecialRegExp.test(password.value)
  // );

  // console.log(
  //   "Senha moderada",
  //   moderate.minRegExp.test(password.value) &&
  //     moderate.oneNumericRegExp.test(password.value) &&
  //     moderate.oneEspecialRegExp.test(password.value)
  // );

  // console.log(
  //   "Senha forte",
  //   strong.minRegExp.test(password.value) &&
  //     strong.oneNumericRegExp.test(password.value) &&
  //     strong.oneEspecialRegExp.test(password.value)
  // );
// });
