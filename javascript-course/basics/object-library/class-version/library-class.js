const Library = (() => {
  let books = [
    ["author1", "book1", 2, true],
    ["author2", "book2", 102, false],
  ];

  const addBook = () => {
    renderLibrary();
    if (validateInput()) {
      console.log("valid");
    } else {
      renderMessage("Input(s) are invalid");
    }
  };

  const renderLibrary = () => {
    if (books.length > 0) {
      books.forEach((book) => {
        const bookRow = document.createElement("tr");
        book.forEach((bookValues) => {
          const bookData = document.createElement("td");
          bookData.append(bookValues);
          bookRow.appendChild(bookData);
        });
        // create update status & remove button
        document
          .querySelector(".library-table table thead")
          .appendChild(bookRow);
      });
    } else {
      renderMessage("Empty library");
    }
  };

  const renderMessage = (message) => {
    document.querySelector(".message").innerHTML = message;
  };

  return { addBook, renderLibrary, renderMessage };
})();

const Book = (author, title, totalPages, isRead) => {
  return { author, title, totalPages, isRead };
};

// Book.prototype.updateBookStatus = function () {};

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
