const EMPTY_VALUE = "";
const PURPOSE_REMOVE = "Remove";
const PURPOSE_UPDATE_STATUS = "Update status";
const BOOK_STATUS_READ = "Yes";
const BOOK_STATUS_NOT_READ = "No";

const Library = (() => {
  let books = [];

  const addBook = () => {
    renderLibrary();
    if (validateInput()) {
      const bookToAdd = new Book(
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
      renderMessage(EMPTY_VALUE);
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
        bookRow.appendChild(createButton(PURPOSE_REMOVE, books, index));
        bookRow.appendChild(createButton(PURPOSE_UPDATE_STATUS, books, index));

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
    const updateStatus =
      books[index].isRead == BOOK_STATUS_READ
        ? BOOK_STATUS_NOT_READ
        : BOOK_STATUS_READ;
    books[index].isRead = updateStatus;
    renderLibrary();
  };

  return { addBook, renderLibrary, renderMessage, updateBookStatus };
})();

// const Book = (author, title, totalPages, isRead) => {
//   return { author, title, totalPages, isRead };
// };

class Book {
  constructor(author, title, totalPages, isRead) {
    this.author = author;
    this.title = title;
    this.totalPages = totalPages;
    this.isRead = isRead;
  }

  get bookAuthor() {
    return this.author;
  }

  get bookTitle() {
    return this.title;
  }

  get bookTotalPages() {
    return this.pages;
  }

  get bookIsRead() {
    return this.isRead;
  }
}

const validateInput = () => {
  if (
    document.querySelector("#author").value == EMPTY_VALUE ||
    document.querySelector("#title").value == EMPTY_VALUE ||
    isNaN(parseInt(document.querySelector("#totalPages").value))
  ) {
    return false;
  }
  return true;
};

const createButton = (purpose, books, index) => {
  const button = document.createElement("button");
  if (purpose == PURPOSE_REMOVE) {
    button.innerHTML = PURPOSE_REMOVE;
    button.addEventListener("click", () => {
      books.splice(index, 1);
      Library.renderLibrary();
    });
  } else if (purpose == PURPOSE_UPDATE_STATUS) {
    button.innerHTML = PURPOSE_UPDATE_STATUS;
    button.addEventListener("click", () => {
      Library.updateBookStatus(index);
    });
  }

  return button;
};

document.querySelector("#addBook").addEventListener("click", Library.addBook);
