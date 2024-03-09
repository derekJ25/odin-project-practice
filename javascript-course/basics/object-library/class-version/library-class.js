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
    document.querySelectorAll("tbody tr").forEach((row) => row.remove());
    if (books.length > 0) {
      renderMessage("");
      books.forEach((book, index) => {
        const bookRow = document.createElement("tr");
        for (const bookValues in book) {
          if (Object.hasOwnProperty.call(book, bookValues)) {
            const bookValue = book[bookValues];
            const bookData = document.createElement("td");
            bookData.append(bookValue);
            bookRow.appendChild(bookData);
          }
        }

        const removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";
        removeButton.addEventListener("click", () => {
          books.splice(index, 1);
          renderLibrary();
        });
        bookRow.appendChild(removeButton);

        document
          .querySelector(".library-table table tbody")
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
