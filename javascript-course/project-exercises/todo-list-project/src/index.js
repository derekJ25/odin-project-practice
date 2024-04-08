const { default: createToDoItem } = require("./todo-item");

const itemOneTitle = "coding practice";
const itemOneDescription =
  "do some coding exercises each day or go learn some coding practices";
const itemOneDueDate = "end of the year";
const itemOnePriority = "high";

const createItem = createToDoItem(
  itemOneTitle,
  itemOneDescription,
  itemOneDueDate,
  itemOnePriority
);

createItem.displayItem();
