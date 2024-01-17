// const libraryBooks = document.querySelector(".library-books");
const libraryBooks = document.querySelector(".book-table > tbody");
const bookForm = document.getElementById("bookForm");

const myLibrary = [
  { author: "author1", title: "title1", noOfPages: 1, isRead: false },
  { author: "author2", title: "title2", noOfPages: 2, isRead: true },
  { author: "author3", title: "title3", noOfPages: 3, isRead: false },
];

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

  console.log(formAuthor);
  console.log(formTitle);
  console.log(formNoOfPages);
  console.log(formIsRead);

  // Add form validation here

  // const bookToAdd = new Book("Book author", "Book title", 204, true);
  // myLibrary.push(bookToAdd);
}

function displayBooks() {
  for (const bookIndex in myLibrary) {
    const newBookRow = document.createElement("tr");
    const authorData = document.createElement("td");
    const titleData = document.createElement("td");
    const noOfPagesData = document.createElement("td");
    const isReadData = document.createElement("td");
    authorData.innerHTML = myLibrary[bookIndex].author;
    titleData.innerHTML = myLibrary[bookIndex].title;
    noOfPagesData.innerHTML = myLibrary[bookIndex].noOfPages;
    isReadData.innerHTML = myLibrary[bookIndex].isRead;
    newBookRow.appendChild(authorData);
    newBookRow.appendChild(titleData);
    newBookRow.appendChild(noOfPagesData);
    newBookRow.appendChild(isReadData);
    libraryBooks.appendChild(newBookRow);
  }
}

const testArea = document.querySelector(".test-area");

let newBook = document.createElement("p");
newBook.innerHTML = "author, title, pages, read";
testArea.appendChild(newBook);

bookForm.addEventListener =
  ("submit",
  (e) => {
    e.preventDefault();

    const authorInput = document.getElementById("author");
    const titleInput = document.getElementById("title");
    const noOfPagesInput = document.getElementById("noOfPages");
    const isReadInput = document.getElementById("isRead");

    if (authorInput.innerHTML == "a") {
      console.log("nope");
    }

    console.log(`Author: ${authorInput}`);
    console.log(`Title: ${titleInput}`);
    console.log(`No of pages: ${noOfPagesInput}`);
    console.log(`isRead: ${isReadInput}`);
  });

// addBookToLibrary();
displayBooks();
