const btnCreateAccount = document.querySelector(".js-create-account");

function handleBtnCreateAccountClick(event) {
  inputEmail.innerHTML = cleanContentInput;
  event.defaultPrevented;
    console.log("Criando conta");
}

btnCreateAccount.addEventListener("click", handleBtnCreateAccountClick);

/*--------------------INPUT FULL NAME--------------------*/
const inputFullName = document.querySelector(".js-full-name input");
const element = document.querySelector(".js-full-name a");
const inputCleanFullName = document.querySelector(".js-clean-full-name");

const inputEmail = document.querySelector(".js-email input");
const inputPassword = document.querySelector(".js-password input");

function onChange(event) {
  event.target.value.length > 0 ?
    element.classList.add("clean-input") :
    element.classList.remove("clean-input")
}

function onCleanFullNameInput (event) {
  event.preventDefault();
  element.classList.remove("clean-input");
  inputFullName.value = "";
}

inputFullName.addEventListener("input", onChange);
inputCleanFullName.addEventListener("click", onCleanFullNameInput);


