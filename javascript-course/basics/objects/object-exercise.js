function Book(title, author, noOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.isRead = isRead;

  this.info = function () {
    // return this.isRead
    //   ? `${this.title} by ${this.author}, ${this.noOfPages} pages, has been read`
    //   : `${this.title} by ${this.author}, ${this.noOfPages} pages, not read yet`;
    if (isRead) {
      return `${this.title} by ${this.author}, ${this.noOfPages} pages, has been read`;
    } else {
      return `${this.title} by ${this.author}, ${this.noOfPages} pages, not read yet`;
    }
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(theHobbit.info());
