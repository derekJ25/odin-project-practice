import Content from "./content";

const addButtonListener = (data) => {
  const navButtons = document.querySelectorAll(".sidebar button");
  navButtons.forEach((navButton) => {
    navButton.addEventListener("click", () => {
      if (navButton.classList.contains("add")) {
        // TODO: Add action here
        console.log("add something right");
      } else {
        const currentActive = document.getElementById("active");
        currentActive.removeAttribute("id", "active");
        navButton.setAttribute("id", "active");
        Content(data);
      }
    });
  });
};

export default addButtonListener;
