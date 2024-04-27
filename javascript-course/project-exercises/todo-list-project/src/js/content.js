const Content = (data) => {
  const contentContainer = document.querySelector(".content");
  const navbarContainerButtons = document.querySelectorAll("button");
  navbarContainerButtons.forEach((button) => {
    if (button.classList.contains("active")) {
      console.log(button.innerHTML);
      // Load the content for this button
      const contentTitle = document.createElement("h1");
      contentTitle.innerHTML = button.innerHTML;
      contentContainer.appendChild(contentTitle);
    }
  });
};

export default Content;
