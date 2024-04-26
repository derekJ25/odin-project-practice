const homeContent = (data) => {
  const navbarContainerButtons = document.querySelectorAll("button");
  navbarContainerButtons.forEach((button) => {
    if (button.classList.contains("active")) {
      console.log(button.innerHTML);
      // Load the content for this button
    }
  });
};

export default homeContent;
