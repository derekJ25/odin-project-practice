import projectCard from "./projectCard";

const loadProjectsContent = (data) => {
  const contentContainer = document.querySelector(".content");
  data.forEach((value) => {
    const projectName = document.createElement("h2");
    projectName.innerHTML = value.name;
    contentContainer.appendChild(projectName);
    value.items.forEach((item) => {
      contentContainer.append(projectCard(item));
    });
  });
};

export default loadProjectsContent;
