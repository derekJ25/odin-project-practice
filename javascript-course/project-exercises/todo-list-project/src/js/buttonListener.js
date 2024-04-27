import Content from "./content";

const addButtonListener = (data) => {
  const navButtons = document.querySelectorAll(".sidebar button");
  navButtons.forEach((navButton) => {
    navButton.addEventListener("click", () => {
      if (navButton.classList.contains("add")) {
        // TODO: Add action here
        console.log("add something right");
      } else {
        console.log("do something else");
        const currentActive = document.querySelector(".active");
        currentActive.classList.remove("active");
        navButton.classList.add("active");
        // maybe fix this
        Content(data);
      }
    });
  });
};

export default addButtonListener;
