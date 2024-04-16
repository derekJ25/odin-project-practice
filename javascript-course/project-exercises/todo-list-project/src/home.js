import loadContent from "./content";
import loadNavBar from "./navbar";
import ToDoItem from "./item-class";
import Category from "./category-class";

// Array already creates the class & one version that you have to turn JSON into JS obj

// const itemsJSON = {
//   itemOne: {
//     name: "",
//     description: "",
//     dueDate: new Date(2024 - 12 - 31),
//     priority: "",
//   },
//   itemTwo: {
//     name: "",
//     description: "",
//     dueDate: new Date(2024 - 6 - 30),
//     priority: "",
//   },
//   itemThree: {
//     name: "",
//     description: "",
//     dueDate: new Date(2024 - 2 - 29),
//     priority: "",
//   },
// };

const loadHomePage = () => {
  // const itemsCreated = [
  //   new ToDoItem("title1", "this is a test", new Date(2024 - 12 - 31), "high"),
  //   new ToDoItem(
  //     "title2",
  //     "this is a description",
  //     new Date(2024 - 6 - 30),
  //     "medium"
  //   ),
  //   new ToDoItem("title3", "what are we doing", new Date(2024 - 2 - 29), "low"),
  // ];

  const itemsCreated = [
    new Category("Family", [
      new ToDoItem(
        "Vacation",
        "Plans to do on vacation",
        new Date(2025 - 6 - 20),
        "High"
      ),
      new ToDoItem(
        "Bills",
        "Bills to pay this month",
        new Date(2025 - 7 - 20),
        "High"
      ),
    ]),
    new Category("Hobbies", [
      new ToDoItem(
        "Go for a run",
        "Goal is to hit 5km",
        new Date(2026 - 4 - 15),
        "Medium"
      ),
      new ToDoItem(
        "Some really long title which should be tested and see what happens",
        "Just testing what happens to website",
        new Date(2026 - 5 - 23),
        "Low"
      ),
      new ToDoItem(
        "Improve programming skills",
        "Goal is to develop and improve current programming skills",
        new Date(2024 - 12 - 25),
        "High"
      ),
    ]),
  ];

  loadNavBar(itemsCreated);
  loadContent();
};

export default loadHomePage;
