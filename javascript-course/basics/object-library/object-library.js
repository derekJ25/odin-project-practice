const libraryBooksTitle = document.querySelector(".book-table > thead");
const libraryBooks = document.querySelector(".book-table > tbody");
const bookForm = document.getElementById("bookForm");

const myLibrary = [];

function Book(author, title, noOfPages, isRead) {
  // the constructor...
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

  console.table(myLibrary);

  displayBooks();

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
      authorData.innerHTML = myLibrary[bookIndex].author;
      titleData.innerHTML = myLibrary[bookIndex].title;
      noOfPagesData.innerHTML = myLibrary[bookIndex].noOfPages;
      isReadData.innerHTML = myLibrary[bookIndex].isRead;
      removeBook.innerHTML = "Remove";
      removeBook.addEventListener("click", () => {
        console.log(`im at index`);
      });
      newBookRow.appendChild(authorData);
      newBookRow.appendChild(titleData);
      newBookRow.appendChild(noOfPagesData);
      newBookRow.appendChild(isReadData);
      newBookRow.appendChild(removeBook);
      console.log("index", bookIndex);
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

displayBooks();
