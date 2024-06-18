import "./styles/css-reset.css";
import "./styles/styles.css";

const onPageLoad = () => {
  document.querySelector(".add-list-button").addEventListener("click", () => {
    document.querySelector(".add-list").classList.add("active");
  });

  document.querySelector(".save-button").addEventListener("click", () => {
    validateFormInput();
  });

  document.querySelector(".cancel-button").addEventListener("click", () => {
    clearFormInput();
    document.querySelector(".add-list").classList.remove("active");
  });

  const clearFormInput = () => {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("dueDate").value = getTodayDate();
    document.getElementById("priority").selectedIndex = 0;
  };

  // const validateFormInput = () => {
  //   if (document.getElementById("title").value.trim() == "") {
  //     console.log("Title cannot be empty.");
  //   }
  //   if (document.getElementById("description").value.trim() == "") {
  //     console.log("Description cannot be empty.");
  //   }

  //   console.log(document.getElementById("dueDate").value);
  // };

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
