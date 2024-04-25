import Category from "./js/projectClass";
import TodoItem from "./js/todoClass";
import validateInput from "./js/validateInput";
import "./styles/css-reset.css";
import "./styles/styles.css";

// const hobbiesCategory = new Category("hobbies", [
//   new TodoItem("Running", "We like to exercise", "2/3", "Low"),
//   new TodoItem(
//     "Coding",
//     "We like to code and improve our current skill",
//     "3/4",
//     "High"
//   ),
// ]);

const workCategoryJSON = [
  {
    title: "work",
    items: [
      {
        title: "item1",
        description: "item1 description",
        dueDate: "1/1",
        priority: "low",
      },
      {
        title: "item2",
        description: "item2 description",
        dueDate: "1/2",
        priority: "low",
      },
      {
        title: "item3",
        description: "item3 description",
        dueDate: "1/3",
        priority: "low",
      },
    ],
  },
];

let workCategory;
workCategoryJSON.forEach((category) => {
  let items = [];
  category.items.forEach((item) => {
    items.push(
      new TodoItem(item.title, item.description, item.dueDate, item.priority)
    );
  });
  workCategory = new Category(category.title, items);
});

// // Testing Adding & Removing from a category
// workCategory.displayProject();
// workCategory.addItem(new TodoItem("item2", "some random desc", "2/4", "low"));
// console.log("-----------------");
// workCategory.displayProject();
// workCategory.removeItem("item2", "some random desc");
// console.log("-----------------");
// workCategory.displayProject();

document.querySelector("#add").addEventListener("click", () => {
  const projectName = prompt("Project name:");
  if (validateInput(projectName)) {
    console.log(projectName);
  } else {
    console.log("invalid input");
  }
});
