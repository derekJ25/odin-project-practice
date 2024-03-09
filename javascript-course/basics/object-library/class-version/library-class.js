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
        bookRow.appendChild(createButton("remove", books, index));
        bookRow.appendChild(createButton("update status", books, index));

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

  const updateBookStatus = (index) => {
    if (books[index].isRead == "Yes") {
      books[index].isRead = "No";
    } else {
      books[index].isRead = "Yes";
    }
    renderLibrary();
  };

  return { addBook, renderLibrary, renderMessage, updateBookStatus };
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

const createButton = (purpose, books, index) => {
  const button = document.createElement("button");
  if (purpose == "remove") {
    button.innerHTML = "Remove";
    button.addEventListener("click", () => {
      books.splice(index, 1);
      Library.renderLibrary();
    });
  } else if (purpose == "update status") {
    // insert code for updating status
    button.innerHTML = "Update status";
    button.addEventListener("click", () => {
      Library.updateBookStatus(index);
    });
  }

  return button;
};

document.querySelector("#addBook").addEventListener("click", Library.addBook);
