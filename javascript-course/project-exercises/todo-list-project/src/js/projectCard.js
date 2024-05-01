const projectCard = (item) => {
  const projectCardContainer = document.createElement("div");
  projectCardContainer.classList.add("project-card-container");
  const projectCardDiv = document.createElement("div");
  projectCardDiv.classList.add("project-card-div");
  const projectTitle = document.createElement("h3");
  projectTitle.innerHTML = item.title;
  const projectDueDate = document.createElement("h3");
  projectDueDate.innerHTML = item.dueDate;
  const projectPriority = document.createElement("h3");
  projectPriority.innerHTML = item.priority;
  const projectDescription = document.createElement("span");
  projectDescription.innerHTML = item.description;

  projectCardDiv.append(projectTitle, projectDueDate, projectPriority);
  projectCardContainer.append(projectCardDiv, projectDescription);
  return projectCardContainer;
};

export default projectCard;
