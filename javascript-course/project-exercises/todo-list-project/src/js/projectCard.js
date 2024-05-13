const projectCard = (item) => {
  const projectCardContainer = document.createElement("div");
  projectCardContainer.classList.add("project-card-container");
  const projectCardDiv = document.createElement("div");
  projectCardDiv.classList.add("project-card-div");
  const projectTitle = document.createElement("h3");
  projectTitle.innerHTML = item.title;
  const datePriorityDiv = document.createElement("div");
  const projectDueDate = document.createElement("h3");
  projectDueDate.innerHTML = item.dueDate;
  const projectPriority = document.createElement("h3");
  projectPriority.innerHTML = item.priority;
  const projectDescription = document.createElement("span");
  projectDescription.innerHTML = item.description;

  datePriorityDiv.classList.add("datePriority");
  datePriorityDiv.append(projectDueDate, projectPriority);
  projectCardDiv.append(projectTitle, datePriorityDiv);
  projectCardContainer.append(projectCardDiv, projectDescription);
  return projectCardContainer;
};

export default projectCard;
