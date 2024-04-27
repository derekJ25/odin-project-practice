import clearContent from "./clearContent";

const Content = (data) => {
  clearContent;
  const contentContainer = document.querySelector(".content");
  const currentActive = document.querySelector(".active");
  const contentTitle = document.createElement("h1");
  contentTitle.innerHTML = currentActive.innerHTML;
  contentContainer.appendChild(contentTitle);
};

export default Content;
