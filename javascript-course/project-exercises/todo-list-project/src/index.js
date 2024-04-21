import Category from "./js/category-class";
import TodoItem from "./js/todo-class";
import "./styles/css-reset.css";
import "./styles/styles.css";

console.log("working");

const hobbiesCategory = new Category("hobbies", [
  new TodoItem("Running", "We like to exercise", "2/3", "Low"),
  new TodoItem(
    "Coding",
    "We like to code and improve our current skill",
    "3/4",
    "High"
  ),
]);

const workCategoryJSON = [
  {
    category: "work",
    items: [
      {
        name: "item1",
        description: "item1 description",
        dueDate: "1/1",
        priority: "low",
      },
      {
        name: "item2",
        description: "item2 description",
        dueDate: "1/2",
        priority: "low",
      },
      {
        name: "item3",
        description: "item3 description",
        dueDate: "1/3",
        priority: "low",
      },
    ],
  },
];

// const workCategory = new Category(
//   workCategoryJSON.name,
//   workCategoryJSON.items.forEach((item) => {
//     new TodoItem(item.name, item.description, item.dueDate, item.priority);
//   })
// );

console.log(workCategoryJSON.items);

// workCategory.displayCategory();
