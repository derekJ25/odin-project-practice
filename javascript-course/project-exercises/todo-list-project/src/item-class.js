class ToDoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  displayItem() {
    console.log(
      `title: ${this.title} | description: ${this.description} | due date: ${this.dueDate} | priority: ${this.priority}`
    );
  }
}

export default ToDoItem;
