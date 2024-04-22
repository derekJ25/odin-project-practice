import Category from "./js/category-class";
import TodoItem from "./js/todo-class";
import "./styles/css-reset.css";
import "./styles/styles.css";

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
    title: "work",
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

let workCategory;
workCategoryJSON.forEach((category) => {
  let items = [];
  category.items.forEach((item) => {
    items.push(
      new TodoItem(item.name, item.description, item.dueDate, item.priority)
    );
  });
  workCategory = new Category(category.title, items);
});

workCategory.displayCategory();
