const Library = (() => {
  let books = [];

  const addBook = () => {
    renderLibrary();
    if (validateInput()) {
      const bookToAdd = Book(
        document.querySelector("#author").value,
        document.querySelector("#title").value,
        document.querySelector("#totalPages").value,
        document.querySelector("#isRead").value
      );
      books.push(bookToAdd);
      renderLibrary();
    } else {
      renderMessage("Input(s) are invalid");
    }
  };

  const renderLibrary = () => {
    if (books.length > 0) {
      books.forEach((book) => {
        const bookRow = document.createElement("tr");
        for (const bookValues in book) {
          if (Object.hasOwnProperty.call(book, bookValues)) {
            const bookValue = book[bookValues];
            const bookData = document.createElement("td");
            bookData.append(bookValue);
            bookRow.appendChild(bookData);
          }
        }
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
