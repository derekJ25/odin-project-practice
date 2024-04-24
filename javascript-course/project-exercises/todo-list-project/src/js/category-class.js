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

  removeItem(removeItemTitle, removeItemDescription) {
    const indexToRemove = this.#getIndex(
      removeItemTitle,
      removeItemDescription
    );
    this.items.splice(indexToRemove, 1);
  }

  #getIndex(removeItemTitle, removeItemDescription) {
    for (const item of this.items) {
      if (
        item.title == removeItemTitle &&
        item.description == removeItemDescription
      ) {
        return this.items.indexOf(item);
      }
    }
  }
}

export default Category;
