const Library = (() => {
  let books = [];

  const addBook = () => {
    showLibrary();
    if (validateInput()) {
      console.log("valid");
    } else {
      renderMessage("Input(s) are invalid");
    }
  };

  const getBooks = () => books;

  const showLibrary = () => {
    if (books.length > 0) {
      console.log(books);
    } else {
      renderMessage("Empty library");
    }
  };

  const renderMessage = (message) => {
    document.querySelector(".message").innerHTML = message;
  };

  return { addBook, getBooks, showLibrary };
})();

const Book = (author, title, totalPages, isRead) => {
  return { author, title, totalPages, isRead };
};

const validateInput = () => {
  if (
    document.querySelector("#author").value == "" ||
    document.querySelector("#title").value == "" ||
    isNaN(parseInt(document.querySelector("#totalPages").value))
  ) {
    return false;
  }
  return true;
};

document.querySelector("#addBook").addEventListener("click", Library.addBook);
