const invitionCount = document.querySelector("#max-invite");
const display = document.querySelector(".invitation-output");

display.innerHTML = invitionCount.value;

invitionCount.addEventListener("input", () => {
  display.innerHTML = invitionCount.value;
});
