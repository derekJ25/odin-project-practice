const libraryBooksTitle = document.querySelector(".book-table > thead");
const libraryBooks = document.querySelector(".book-table > tbody");
const bookForm = document.getElementById("bookForm");

const authorIndex = 0;
const titleIndex = 1;

const myLibrary = [];

// var Book = (function () {
//   var nextID = 0;

//   return function Book(author, title, noOfPages, isRead) {
//     this.bookID = nextID++;
//     this.author = author;
//     this.title = title;
//     this.noOfPages = noOfPages;
//     this.isRead = isRead;
//   };
// })();

function Book(author, title, noOfPages, isRead) {
  this.author = author;
  this.title = title;
  this.noOfPages = noOfPages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  // let validFormInput = true;

  const formAuthor = document.getElementById("author".trim()).value;
  const formTitle = document.getElementById("title".trim()).value;
  const formNoOfPages = document.getElementById("noOfPages").value;
  let formIsRead = document.querySelector("input[type=radio]:checked").value;

  const bookToAdd = new Book(formAuthor, formTitle, formNoOfPages, formIsRead);
  myLibrary.push(bookToAdd);

  updateBookDisplay();

  // Add form validation here
}

// NOTE: make the table responsive

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
      changeBookReadStatus.innerHTML = "Update read status";

      removeBook.addEventListener("click", (e) => {
        removeBookFromLibrary(
          getBookIndex(
            e.target.parentElement.childNodes[authorIndex].innerHTML,
            e.target.parentElement.childNodes[titleIndex].innerHTML
          )
        );
      });

      changeBookReadStatus.addEventListener("click", (e) => {
        updateBookStatus(
          getBookIndex(
            e.target.parentElement.childNodes[authorIndex].innerHTML,
            e.target.parentElement.childNodes[titleIndex].innerHTML
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

// can clean these two functions up since they both very similar in code logic
// function removeBookFromLibrary(bookAuthor, bookTitle) {
//   const bookIndex = getBookIndex(bookAuthor, bookTitle);
//   myLibrary.splice(bookIndex, 1);
//   updateBookDisplay();
// }

function removeBookFromLibrary(bookIndex) {
  myLibrary.splice(bookIndex, 1);
  updateBookDisplay();
}

function updateBookStatus(bookIndex) {
  if (myLibrary[bookIndex].isRead == false) {
    myLibrary[bookIndex].isRead = true;
  } else {
    myLibrary[bookIndex].isRead = false;
  }
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

updateBookDisplay();
