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

  const displayLocalStorageList = () => {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const listButton = document.createElement("button");
        listButton.innerHTML = JSON.parse(
          localStorage.getItem(`listItem${i}`)
        )[0];
        listButton.classList.add("nav-list-button");
        if (i == 0) {
          listButton.classList.add("active");
        }
        listButton.id = `listItem${i}`;
        const listNavDiv = document.querySelector(".list-section");
        listNavDiv.appendChild(listButton);
      }
    }
  };

  const clearFormInput = () => {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("dueDate").value = getTodayDate();
    document.getElementById("priority").selectedIndex = 0;
    document.getElementById("title").classList.remove("invalid-input");
    document.getElementById("description").classList.remove("invalid-input");
    document.getElementById("dueDate").classList.remove("invalid-input");
    if (document.querySelector(`.title-error-message`).childElementCount > 0) {
      document
        .querySelector(`.title-error-message`)
        .removeChild(document.querySelector(`.title-error-message`).firstChild);
    }
    if (
      document.querySelector(`.description-error-message`).childElementCount > 0
    ) {
      document
        .querySelector(`.description-error-message`)
        .removeChild(
          document.querySelector(`.description-error-message`).firstChild
        );
    }
    if (
      document.querySelector(`.dueDate-error-message`).childElementCount > 0
    ) {
      document
        .querySelector(`.dueDate-error-message`)
        .removeChild(
          document.querySelector(`.dueDate-error-message`).firstChild
        );
    }
  };

  const validateFormInput = () => {
    document.getElementById("title").value.trim() == ""
      ? addErrorMessage("title")
      : removeErrorMessage("title");

    document.getElementById("description").value.trim() == ""
      ? addErrorMessage("description")
      : removeErrorMessage("description");

    isPastDate(document.getElementById("dueDate").value) == true
      ? addErrorMessage("dueDate")
      : removeErrorMessage("dueDate");
    if (
      document.querySelector(`.title-error-message`).childElementCount == 0 &&
      document.querySelector(`.description-error-message`).childElementCount ==
        0 &&
      document.querySelector(`.dueDate-error-message`).childElementCount == 0
    ) {
      addToList(
        document.getElementById("title").value,
        document.getElementById("description").value,
        document.getElementById("dueDate").value,
        document.getElementById("priority").value
      );
    }
  };

  const addToList = (title, description, dueDate, priority) => {
    const listItem = [
      `${title}`,
      `${description}`,
      `${dueDate}`,
      `${priority}`,
    ];
    const listItemString = JSON.stringify(listItem);
    addToLocalStorage(listItemString);
    const listButton = document.createElement("button");
    listButton.id = `listItem${localStorage.length - 1}`;
    listButton.innerHTML = title;
    listButton.classList.add("nav-list-button");
    if (localStorage.length == 1) {
      listButton.classList.add("active");
    }
    const listNavDiv = document.querySelector(".list-section");
    listNavDiv.appendChild(listButton);

    clearFormInput();
    document.querySelector(".add-list").classList.remove("active");

    displayActiveList();
  };

  // TODO
  // display stuff if active on navbar to content
  // hover and active styling to the list nav

  const displayActiveList = () => {
    let activeList = document.querySelector(".nav-list-button.active");
    const contentTitle = document.createElement("h1");
    contentTitle.innerHTML = `${localStorage.getItem(activeList.id)}`;
    document.querySelector(".content").appendChild(contentTitle);
  };

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

  const isPastDate = (date) => {
    if (date < getTodayDate()) {
      return true;
    }
    return false;
  };

  const addErrorMessage = (target) => {
    document.getElementById(target).classList.add("invalid-input");
    const errorMessage = document.createElement("span");
    errorMessage.classList.add("error-message");
    if (target == "dueDate") {
      errorMessage.innerHTML = `Please enter/select a valid date. ${getTodayDate()} or later.`;
    } else {
      errorMessage.innerHTML =
        capitaliseFirstLetter(target) + " cannot be empty.";
    }
    if (
      document.querySelector(`.${target}-error-message`).childElementCount == 0
    ) {
      document
        .querySelector(`.${target}-error-message`)
        .appendChild(errorMessage);
    }
  };

  const removeErrorMessage = (target) => {
    document.getElementById(target).classList.remove("invalid-input");
    if (
      document.querySelector(`.${target}-error-message`).childElementCount > 0
    ) {
      document
        .querySelector(`.${target}-error-message`)
        .removeChild(
          document.querySelector(`.${target}-error-message`).firstChild
        );
    }
  };

  // add func to check if x has child elements

  const capitaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // TODO
  const addToLocalStorage = (listItem) => {
    localStorage.setItem(`listItem${localStorage.length}`, listItem);
  };

  const removeFromLocalStorage = (listItem) => {
    // localStorage.removeItem()
  };

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  setMinDate();
  displayLocalStorageList();
  // clearLocalStorage();
};

onPageLoad();
