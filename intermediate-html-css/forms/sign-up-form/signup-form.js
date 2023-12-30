const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordErrorMessage = document.querySelector(".password-error-message");

password.addEventListener("input", () => {
  updateValueClass(isSame(password.value, confirmPassword.value));
});

confirmPassword.addEventListener("input", () => {
  updateValueClass(isSame(password.value, confirmPassword.value));
});

const isSame = (value1, value2) => {
  if (value1 === value2) {
    return true;
  } else {
    return false;
  }
};

const updateValueClass = (isSame) => {
  if (isSame) {
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
    password.classList.add("valid");
    confirmPassword.classList.add("valid");
    passwordErrorMessage.classList.add("valid-error-message");
  } else {
    password.classList.remove("valid");
    password.classList.add("error");
    confirmPassword.classList.remove("valid");
    confirmPassword.classList.add("error");
    passwordErrorMessage.classList.remove("valid-error-message");
  }
};
