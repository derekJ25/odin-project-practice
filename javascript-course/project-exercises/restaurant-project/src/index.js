// import _ from "lodash";
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (button) => {
    const value = button.target.value;
    clearContent();
    if (value == "home") {
      loadHome();
    }
    if (value == "menu") {
      loadMenu();
    }
    if (value == "about") {
      loadAbout();
    }
  });
});

const clearContent = () => {
  const content = document.querySelector("#content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};
