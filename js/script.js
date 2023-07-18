/*--------------------INPUT FULL NAME--------------------*/
const inputFullName = document.querySelector(".js-full-name input");
const elementFullName= document.querySelector(".js-full-name a");
const inputCleanFullName = document.querySelector(".js-clean-full-name");

function onChangeFullName(event) {
  event.target.value.length > 0 ?
    elementFullName.classList.add("clean-input") :
    elementFullName.classList.remove("clean-input")
}

function onCleanFullNameInput (event) {
  event.preventDefault();
  elementFullName.classList.remove("clean-input");
  inputFullName.value = "";
}

inputFullName.addEventListener("input", onChangeFullName);
inputCleanFullName.addEventListener("click", onCleanFullNameInput);

/*--------------------INPUT EMAIL--------------------*/
const inputEmail = document.querySelector(".js-email input");
const elementEmail = document.querySelector(".js-email a");
const inputCleanEmail = document.querySelector(".js-clean-email");

function onChangeEmail(event) {
  event.target.value.length > 0 ?
    elementEmail.classList.add("clean-input") :
    elementEmail.classList.remove("clean-input")
}

function onCleanEmailInput (event) {
  event.preventDefault();
  elementEmail.classList.remove("clean-input");
  inputEmail.value = "";
}

inputEmail.addEventListener("input", onChangeEmail);
inputCleanEmail.addEventListener("click", onCleanEmailInput);


const inputPassword = document.querySelector(".js-password input");




const allInput = document.querySelectorAll(".js-all-input li");
console.log(allInput);

const btnCreateAccount = document.querySelector(".js-create-account");

function handleBtnCreateAccountClick(event) {
  event.defaultPrevented;

  if (inputFullName.value === "" && inputEmail.value === "" && inputPassword.value === "") {
    return
  }
  
  console.log("Criando conta");
}

btnCreateAccount.addEventListener("click", handleBtnCreateAccountClick);

