class TodoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  displayTodoItem() {
    console.log(
      ` Title: ${this.title} | Description: ${this.description} | Due date: ${this.dueDate} | Priority: ${this.priority}`
    );
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getDueDate() {
    return this.dueDate;
  }

  getPriority() {
    return this.priority;
  }
}

export default TodoItem;
