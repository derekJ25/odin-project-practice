// import _ from "lodash";
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

loadHome();

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (button) => {
    const value = button.target.value;
    switch (value) {
      case "home":
        clearContent();
        loadHome();
        break;
      case "menu":
        clearContent();
        loadMenu();
        break;
      case "about":
        clearContent();
        loadAbout();
        break;
      default:
        loadHome();
    }
  });
});

const clearContent = () => {
  const content = document.querySelector("#content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};
