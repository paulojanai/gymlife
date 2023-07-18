const eye = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="eye" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;

const eyeOff = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="eye-off" class="lucide lucide-eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" x2="22" y1="2" y2="22"></line></svg>`;

const allInput = document.querySelectorAll(
  ".js-all-input li .text-field input"
);

allInput.forEach((element) => {
  let actionInput = element.nextElementSibling;

  element.addEventListener("input", (event) => {
    event.preventDefault();

    event.target.value.length > 0
      ? actionInput.classList.add("action-input-visible")
      : actionInput.classList.remove("action-input-visible");
  });

  if (element.nextElementSibling.className === "js-clean") {
    let cleanInput = element.nextElementSibling;

    cleanInput.addEventListener("click", (event) => {
      event.preventDefault();
      cleanInput.classList.remove("action-input-visible");
      element.value = "";
    });
  }

  if (element.nextElementSibling.className === "js-show-password") {
    let showPassword = element.nextElementSibling;

    console.log(showPassword);

    showPassword.addEventListener("click", (event) => {
      event.preventDefault();
      if (element.type === "text") {
        element.type = "password";
        showPassword.innerHTML = eye;
        console.log("EYE");
      } else {
        element.type = "text";
        showPassword.innerHTML = eyeOff;
        console.log("EYE-OFF");
      }
    });
  }
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const btnCreateAccount = document.querySelector(".js-create-account");

function handleBtnCreateAccountClick(event) {
  event.defaultPrevented;

  if (
    inputFullName.value === "" &&
    inputEmail.value === "" &&
    inputPassword.value === ""
  ) {
    return;
  }

  console.log("Criando conta");
}

btnCreateAccount.addEventListener("click", handleBtnCreateAccountClick);
