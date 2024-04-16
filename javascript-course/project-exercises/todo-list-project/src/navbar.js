const loadNavBar = (todoItems) => {
  try {
    const navList = document.querySelector(".nav-list");
    const newList = document.createElement("ul");
    todoItems.forEach((item) => {
      const newItemListItem = document.createElement("li");
      const newItemOne = document.createElement("button");
      newItemOne.innerHTML = item.title;
      newItemListItem.appendChild(newItemOne);
      newList.appendChild(newItemListItem);
      navList.appendChild(newList);
    });
  } catch (e) {
    console.error(e);
  }
};

export default loadNavBar;
