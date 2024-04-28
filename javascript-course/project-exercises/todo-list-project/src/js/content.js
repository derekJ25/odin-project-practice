import loadHomeContent from "./loadHomeContent";
import loadProjectsContent from "./loadProjectsContent";
import loadTodayContent from "./loadTodayContent";

const Content = (data) => {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";

  const contentTitle = document.createElement("h1");
  const currentActive = document.querySelector(".active");
  contentTitle.innerHTML = currentActive.innerHTML;
  contentContainer.appendChild(contentTitle);

  if (currentActive.innerHTML.toLowerCase() == "home") {
    loadHomeContent();
  } else if (currentActive.innerHTML.toLowerCase() == "today") {
    loadTodayContent();
  } else if (currentActive.innerHTML.toLowerCase() == "projects") {
    loadProjectsContent();
  } else {
  }

  // TODO: find the active button and make it load into the content depending on value
  // need to seperate logic to pass the data and return data?
};

export default Content;
