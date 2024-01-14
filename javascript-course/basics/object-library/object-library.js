const libraryBooks = document.querySelector(".library-books");

const myLibrary = [
  { author: "author1", title: "title1", noOfPages: 1, isRead: false },
  // { author: "author2", title: "title2", noOfPages: 2, isRead: true },
  // { author: "author3", title: "title3", noOfPages: 3, isRead: false },
];

function Book(author, title, noOfPages, isRead) {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function displayBooks() {
  for (const book in myLibrary) {
    // const newBookRow = document.createElement("tr");
    // const author = document.createElement("td");
    // const title = document.createElement("td");
    // const noOfPages = document.createElement("td");
    // const isRead = document.createElement("td");
    // author.innerHTML = book.author;
    // title.innerHTML = book.title;
    // noOfPages.innerHTML = book.noOfPages;
    // isRead.innerHTML = book.isRead;
    // newBookRow.appendChild(author);
    // newBookRow.appendChild(title);
    // newBookRow.appendChild(noOfPages);
    // newBookRow.appendChild(isRead);
    // libraryBooks.appendChild(newBookRow);
  }

  // console.table(myLibrary);
}

displayBooks();

console.log(myLibrary);
