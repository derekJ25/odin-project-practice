const libraryBooksTitle = document.querySelector(".book-table > thead");
const libraryBooks = document.querySelector(".book-table > tbody");
const bookForm = document.getElementById("bookForm");

const authorInputDiv = document.querySelector(".form-author");
const titleInputDiv = document.querySelector(".form-title");
const dupeErrorDiv = document.querySelector(".dupe-error");

let authorErrorMessageExists = false;
let titleErrorMessageExists = false;
let nonDuplicateErrorMessageExists = false;

const AUTHOR_INDEX = 0;
const TITLE_INDEX = 1;

const myLibrary = [];

function Book(author, title, noOfPages, isRead) {
  this.author = author;
  this.title = title;
  this.noOfPages = noOfPages;
  this.isRead = isRead;
}

Book.prototype.updateReadStatus = function () {
  if (this.isRead === false) {
    this.isRead = true;
  } else {
    this.isRead = false;
  }
};

// Buggy: removes input somehow???
function addBookToLibrary() {
  let validFormInput = true;

  const formAuthor = document.getElementById("author".trim()).value.trim();
  const formTitle = document.getElementById("title".trim()).value.trim();
  const formNoOfPages = document.getElementById("noOfPages").value;
  let formIsRead = document.querySelector("input[type=radio]:checked").value;

  if (formAuthor == "" || formAuthor == null) {
    validFormInput = false;
    if (!authorErrorMessageExists) {
      updateErrorMessage(authorInputDiv, "author");
      authorErrorMessageExists = true;
    }
  } else {
    if (authorErrorMessageExists) {
      updateErrorMessage(authorInputDiv, "author");
    }
    if (formTitle == "" || formTitle == null) {
      validFormInput = false;
      if (!titleErrorMessageExists) {
        updateErrorMessage(titleInputDiv, "title");
        titleErrorMessageExists = true;
      }
    } else {
      if (titleErrorMessageExists) {
        updateErrorMessage(titleInputDiv, "title");
      }
      myLibrary.forEach((book) => {
        if (
          book.author.toLowerCase() == formAuthor.toLowerCase() &&
          book.title.toLowerCase() == formTitle.toLowerCase()
        ) {
          validFormInput = false;
          if (!nonDuplicateErrorMessageExists) {
            updateErrorMessage(dupeErrorDiv, "nonDupeErrorMessage");
          }
          nonDuplicateErrorMessageExists = true;
        } else {
          if (nonDuplicateErrorMessageExists) {
            updateErrorMessage(dupeErrorDiv, "nonDupeErrorMessage");
          }
        }
      });
    }
  }

  if (validFormInput) {
    const bookToAdd = new Book(
      formAuthor,
      formTitle,
      formNoOfPages,
      formIsRead
    );
    myLibrary.push(bookToAdd);
  }

  updateBookDisplay();
}

function displayBooks() {
  clearBookDisplay();
  if (myLibrary.length == 0) {
    const noBooksMessage = document.createElement("span");
    noBooksMessage.classList.add("error-message");
    noBooksMessage.innerHTML = "There are currently no books in the library!";
    libraryBooks.appendChild(noBooksMessage);
  } else {
    const newTitleHeader = document.createElement("tr");
    const bookAuthor = document.createElement("th");
    const bookTitle = document.createElement("th");
    const bookPages = document.createElement("th");
    const bookIsRead = document.createElement("th");
    bookAuthor.innerHTML = "Author";
    bookTitle.innerHTML = "Title";
    bookPages.innerHTML = "No. of pages";
    bookIsRead.innerHTML = "Has book been read?";
    newTitleHeader.appendChild(bookAuthor);
    newTitleHeader.appendChild(bookTitle);
    newTitleHeader.appendChild(bookPages);
    newTitleHeader.appendChild(bookIsRead);
    libraryBooksTitle.appendChild(newTitleHeader);

    for (const bookIndex in myLibrary) {
      const newBookRow = document.createElement("tr");
      const authorData = document.createElement("td");
      const titleData = document.createElement("td");
      const noOfPagesData = document.createElement("td");
      const isReadData = document.createElement("td");
      const removeBook = document.createElement("button");
      const changeBookReadStatus = document.createElement("button");
      authorData.innerHTML = myLibrary[bookIndex].author;
      titleData.innerHTML = myLibrary[bookIndex].title;
      noOfPagesData.innerHTML = myLibrary[bookIndex].noOfPages;
      isReadData.innerHTML = myLibrary[bookIndex].isRead;
      removeBook.innerHTML = "Remove";
      removeBook.classList.add("remove-button");
      changeBookReadStatus.innerHTML = "Update read status";
      changeBookReadStatus.classList.add("read-status-button");

      removeBook.addEventListener("click", (e) => {
        removeBookFromLibrary(
          getBookIndex(
            e.target.parentElement.childNodes[AUTHOR_INDEX].innerHTML,
            e.target.parentElement.childNodes[TITLE_INDEX].innerHTML
          )
        );
      });

      changeBookReadStatus.addEventListener("click", (e) => {
        updateBookStatus(
          getBookIndex(
            e.target.parentElement.childNodes[AUTHOR_INDEX].innerHTML,
            e.target.parentElement.childNodes[TITLE_INDEX].innerHTML
          )
        );
      });

      newBookRow.appendChild(authorData);
      newBookRow.appendChild(titleData);
      newBookRow.appendChild(noOfPagesData);
      newBookRow.appendChild(isReadData);
      newBookRow.appendChild(removeBook);
      newBookRow.appendChild(changeBookReadStatus);
      libraryBooks.appendChild(newBookRow);
    }
  }
}

function clearBookDisplay() {
  while (libraryBooksTitle.hasChildNodes()) {
    libraryBooksTitle.removeChild(libraryBooksTitle.firstChild);
  }
  while (libraryBooks.hasChildNodes()) {
    libraryBooks.removeChild(libraryBooks.firstChild);
  }
}

function removeBookFromLibrary(bookIndex) {
  myLibrary.splice(bookIndex, 1);
  updateBookDisplay();
}

function updateBookStatus(bookIndex) {
  myLibrary[bookIndex].updateReadStatus();
  updateBookDisplay();
}

function getBookIndex(bookAuthor, bookTitle) {
  for (let index = 0; index < myLibrary.length; index++) {
    if (
      myLibrary[index].author === bookAuthor &&
      myLibrary[index].title === bookTitle
    ) {
      return index;
    }
  }
}

function updateBookDisplay() {
  clearBookDisplay();
  displayBooks();
}

function addErrorMessage(div, message) {
  const errorMessage = document.createElement("span");
  errorMessage.classList.add("error-message");
  errorMessage.innerHTML = message;
  div.appendChild(errorMessage);
}

function removeErrorMessage(div) {
  if (div.hasChildNodes()) {
    div.removeChild(div.lastChild);
  }
}

// BUG: a, a > click > error message > then add book again error message dissapears and gone
function updateErrorMessage(div, errorMessageFor) {
  if (errorMessageFor == "author") {
    if (authorErrorMessageExists) {
      removeErrorMessage(div);
    } else {
      addErrorMessage(div, "Please enter a valid author name.");
    }
  } else if (errorMessageFor == "title") {
    if (titleErrorMessageExists) {
      removeErrorMessage(div);
    } else {
      addErrorMessage(div, "Please enter a valid title name.");
    }
  } else if (errorMessageFor == "nonDupeErrorMessage") {
    if (nonDuplicateErrorMessageExists) {
      removeErrorMessage(div);
    } else {
      addErrorMessage(
        div,
        "Please enter a non-duplicated title and author name please."
      );
    }
  } else {
    alert("error not found");
  }
}

updateBookDisplay();
