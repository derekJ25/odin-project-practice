import Home from "./js/home";
import "./styles/css-reset.css";
import "./styles/styles.css";

const data = [
  {
    name: "work",
    items: [
      {
        title: "update timesheet",
        description: "fully update the timesheet for this week",
        dueDate: "1/1",
        priority: "high",
      },
      {
        title: "finish report",
        description:
          "complete research and update report with up to date information",
        dueDate: "1/2",
        priority: "medium",
      },
      {
        title: "meeting with manager",
        description:
          "have a catch up meeting with manager to see progress and feedback",
        dueDate: "1/3",
        priority: "medium",
      },
    ],
  },
  {
    name: "hobbies",
    items: [
      {
        title: "Go for run",
        description: "Complete weekly runs",
        dueDate: "n/a",
        priority: "medium",
      },
      {
        title: "Enhance programming skills",
        description: "Do at least 1 hour of programming each day",
        dueDate: "n/a",
        priority: "medium",
      },
    ],
  },
  {
    name: "projects",
    items: [
      {
        title: "project 1",
        description: "project 1 description",
        dueDate: "n/a",
        priority: "high",
      },
      {
        title: "project 2",
        description: "project 2 description",
        dueDate: "n/a",
        priority: "medium",
      },
      {
        title: "project 3",
        description: "project 3 description",
        dueDate: "n/a",
        priority: "medium",
      },
      {
        title: "project 4",
        description: "project 4 description",
        dueDate: "n/a",
        priority: "low",
      },
    ],
  },
];

Home(data);
