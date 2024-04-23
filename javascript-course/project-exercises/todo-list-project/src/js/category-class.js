class Category {
  constructor(name, items = []) {
    this.name = name;
    this.items = items;
  }

  displayCategory() {
    console.log(`Name: ${this.name}`);
    this.items.forEach((item) => {
      item.displayTodoItem();
    });
  }

  addItem(addItem) {
    this.items.push(addItem);
  }

  // TODO
  removeItem(removeItemTitle, removeItemDescription) {}
}

export default Category;
