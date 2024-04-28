const loadProjectsContent = (data) => {
  const contentContainer = document.querySelector(".content");
  data.forEach((value) => {
    const projectName = document.createElement("h2");
    projectName.innerHTML = value.name;
    contentContainer.appendChild(projectName);
    value.items.forEach((item) => {
      const projectTitle = document.createElement("h3");
      projectTitle.innerHTML = item.title;
      const projectDescription = document.createElement("span");
      projectDescription.innerHTML = item.description;
      const projectDueDate = document.createElement("span");
      projectDueDate.innerHTML = item.dueDate;
      const projectPriority = document.createElement("span");
      projectPriority.innerHTML = item.priority;

      // TODO: make a seperate module to create the cards?

      contentContainer.append(
        projectTitle,
        projectDescription,
        projectDueDate,
        projectPriority
      );
    });
  });
};

export default loadProjectsContent;
