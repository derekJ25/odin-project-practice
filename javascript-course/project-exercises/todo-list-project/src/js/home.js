const Home = (data) => {
  const projectContainer = document.querySelector(".projects");
  data.forEach((project) => {
    const list = document.createElement("ul");
    const listName = document.createElement("h1");
    listName.innerHTML = project.name;
    project.items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = item.title;
      list.appendChild(listItem);
    });
    projectContainer.append(listName, list);
  });
};

export default Home;
