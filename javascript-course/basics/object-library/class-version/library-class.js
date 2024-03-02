const Library = (() => {
  let books = [];

  const addBook = () => {};

  const getBooks = () => books;
  return { addBook, getBooks };
})();

const Book = (author, title, totalPages, isRead) => {
  return { author, title, totalPages, isRead };
};

document.querySelector("#addBook").addEventListener("click", Library.addBook);
