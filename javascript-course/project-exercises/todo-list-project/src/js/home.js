const Home = (data) => {
  const projectContainer = document.querySelector(".projects");
  data.forEach((project) => {
    console.log(project);
  });
  // const list = document.createElement("ul");
  // const listName = document.createElement("h1");
  //   listName.innerHTML = data.name;
  //   data.items.forEach((item) => {
  //     const listItem = document.createElement("li");
  //     listItem.innerHTML = item.title;
  //     list.appendChild(listItem);
  //   });

  //   projectContainer.append(listName, list);
};

export default Home;
