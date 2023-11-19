const list = document.querySelector("ul");
const input = document.querySelector("#item");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let userInput = document.createElement("li");
  userInput.innerHTML = input.value;
  list.appendChild(value);
});

// UP TO DOT POINT 4
