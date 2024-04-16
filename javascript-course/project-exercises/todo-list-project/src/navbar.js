const loadNavBar = (todoItems) => {
  try {
    const navList = document.querySelector(".nav-list");
    todoItems.forEach((category) => {
      const newList = document.createElement("ul");
      newList.className = category.title;
      const newCategoryName = document.createElement("h2");
      newCategoryName.classList.add("category-title");
      newCategoryName.innerHTML = category.title;
      newList.appendChild(newCategoryName);
      category.items.forEach((item) => {
        const newItemListItem = document.createElement("li");
        const newItemOne = document.createElement("button");
        newItemOne.innerHTML = item.title;
        newItemListItem.appendChild(newItemOne);
        newList.appendChild(newItemListItem);
        navList.appendChild(newList);
      });
    });
  } catch (e) {
    console.error(e);
  }
};

export default loadNavBar;
