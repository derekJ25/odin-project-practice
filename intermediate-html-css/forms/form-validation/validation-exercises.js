const email = document.getElementById("mail");

email.addEventListener("input", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Expecting an email address.");
  } else if (email.validity.tooShort) {
    email.setCustomValidity("Email is too short");
  } else {
    email.setCustomValidity("");
  }
});
