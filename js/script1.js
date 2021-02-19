// CA

const submit = document.querySelector("#submit");

const fullnameError = document.querySelector(".fullnameError");
const adressError = document.querySelector(".adressError");
const emailError = document.querySelector(".emailError");
const textboxError = document.querySelector(".textboxError");

submit.onclick = function (event) {
  event.preventDefault();

  const fullname = document.querySelector("#fullname").value.trim();
  const adress = document.querySelector("#adress").value.trim();
  const email = document.querySelector("#email").value.trim();
  const textbox = document.querySelector("#textbox").value.trim();

  if (testLen(fullnameError, 1)) {
    fullnameError.classList.add("hide");
    fullnameError.classList.remove("show");
  } else {
    fullnameError.classList.add("show");
    fullnameError.classList.remove("hide");
  }

  if (adress.length > 25) {
    adressError.classList.add("hide");
    adressError.classList.remove("show");
  } else {
    adressError.classList.add("show");
    adressError.classList.remove("hide");
  }

  if (validateEmail(email)) {
    emailError.classList.add("hide");
    emailError.classList.remove("show");
  } else {
    emailError.classList.add("show");
    emailError.classList.remove("hide");
  }

  if (textbox.length > 10) {
    textboxError.classList.add("hide");
    textboxError.classList.remove("show");
  } else {
    textboxError.classList.add("show");
    textboxError.classList.remove("hide");
  }
};

function validateEmail(emailAddy) {
  const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const isEmailValid = emailExpression.test(emailAddy);
  return isEmailValid;
}

function testLen(elm, len) {
  if (elm.length > len) {
    return true;
  } else {
    return false;
  }
}
