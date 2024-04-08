import ToDoItem from "./item-class";

const createToDoItem = (title, description, dueDate, priority) => {
  const item = new ToDoItem(title, description, dueDate, priority);
  return item;
};

export default createToDoItem;
