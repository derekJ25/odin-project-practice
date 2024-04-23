import Category from "./js/category-class";
import TodoItem from "./js/todo-class";
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

workCategory.displayCategory();

workCategory.addItem(new TodoItem("item2", "some random desc", "2/4", "low"));

console.log("-----------------");
workCategory.displayCategory();

workCategory.removeItem("item2", "some random desc");

console.log("-----------------");
workCategory.displayCategory();

// document.querySelector("#add").addEventListener("click", () => {
//   const categoryName = prompt("Category name:");
//   if (validateInput(categoryName)) {
//     console.log(categoryName);
//   } else {
//     console.log("invalid input");
//   }
// });

// const validateInput = (input) => {
//   if (input == null || input.trim() == "") {
//     return false;
//   }
//   return true;
// };

// const createCategory = (title) => {};
