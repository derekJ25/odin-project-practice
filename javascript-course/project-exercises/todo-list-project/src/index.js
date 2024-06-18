import "./styles/css-reset.css";
import "./styles/styles.css";

const onPageLoad = () => {
  document.querySelector(".add-list-button").addEventListener("click", () => {
    console.log("add list thing here");
    document.querySelector(".add-list").classList.add("active");
  });

  document.querySelector(".save-button").addEventListener("click", () => {
    console.log("add the list to the thing");
  });

  document.querySelector(".cancel-button").addEventListener("click", () => {
    console.log("go back");
    document.querySelector(".add-list").classList.remove("active");
  });

  const getTodayDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  const setMinDate = () => {
    document.getElementById("dueDate").value = getTodayDate();
    document.getElementById("dueDate").setAttribute("min", getTodayDate());
  };

  setMinDate();
};

onPageLoad();
