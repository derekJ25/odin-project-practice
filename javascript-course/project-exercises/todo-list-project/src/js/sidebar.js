import addButtonListener from "./buttonListener";

const Sidebar = (data) => {
  const projectContainer = document.querySelector(".projects");
  data.forEach((project) => {
    const list = document.createElement("ul");
    const listName = document.createElement("h1");
    listName.innerHTML = project.name;
    project.items.forEach((item) => {
      const listItem = document.createElement("li");
      const itemButton = document.createElement("button");
      itemButton.innerHTML = item.title;
      listItem.appendChild(itemButton);
      list.appendChild(listItem);
    });
    projectContainer.append(listName, list);
  });

  addButtonListener(data);
};

export default Sidebar;
