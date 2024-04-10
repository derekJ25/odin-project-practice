import loadContent from "./content";
import loadNavBar from "./navbar";
import ToDoItem from "./item-class";

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
  loadNavBar();
  loadContent();

  const itemsCreated = [
    new ToDoItem("title1", "this is a test", new Date(2024 - 12 - 31), "high"),
    new ToDoItem(
      "title2",
      "this is a description",
      new Date(2024 - 6 - 30),
      "medium"
    ),
    new ToDoItem("title3", "what are we doing", new Date(2024 - 2 - 29), "low"),
  ];

  itemsCreated.forEach((item) => {
    item.displayItem();
  });
};

export default loadHomePage;
