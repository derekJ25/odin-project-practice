import "./styles/css-reset.css";
import "./styles/styles.css";

document.querySelector(".add-list-button").addEventListener("click", () => {
  console.log("add list thing here");
});

const getTodayDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
};

console.log(getTodayDate());

document.getElementById("dueDate").value = getTodayDate();
