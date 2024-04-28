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
    loadHomeContent(data);
  } else if (currentActive.innerHTML.toLowerCase() == "today") {
    loadTodayContent(data);
  } else if (currentActive.innerHTML.toLowerCase() == "projects") {
    loadProjectsContent(data);
  } else {
    // load the other things data
  }
};

export default Content;
