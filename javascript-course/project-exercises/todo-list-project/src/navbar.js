const loadNavBar = (todoItems) => {
  try {
    const navList = document.querySelector(".nav-list");
    const newList = document.createElement("ul");
    const newItemListItem = document.createElement("li");
    const newItemOne = document.createElement("button");
    newItemOne.innerHTML = "item one";
    newItemListItem.appendChild(newItemOne);
    newList.appendChild(newItemListItem);
    navList.appendChild(newList);
  } catch (e) {
    console.error(e);
  }
};

export default loadNavBar;
