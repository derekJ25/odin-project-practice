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
}

export default Category;
